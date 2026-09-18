#!/usr/bin/env python3
"""
Take a persisted get_design_context result and:
  1. Download every referenced asset to public/figma-assets/
  2. Rewrite the remote assetPathPrefix to a local one
  3. Fix Figma's font-['Inter:Regular'] classes that don't parse
  4. Remove the duplicate default export at the bottom
  5. Save as src/frames/<ComponentName>.tsx

Usage:
  python3 scripts/import-frame.py <persisted.json> <ComponentName> <nodeId>
"""

import json, os, re, sys, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public" / "figma-assets"
FRAMES = ROOT / "src" / "frames"
ASSETS.mkdir(parents=True, exist_ok=True)
FRAMES.mkdir(parents=True, exist_ok=True)


def main(persisted_path: str, component_name: str, node_id: str):
    data = json.load(open(persisted_path))
    text = data[0]["text"]

    # 1. Pull the asset prefix + list of files
    prefix_m = re.search(
        r'const assetPathPrefix = "(https://www\.figma\.com/api/mcp/asset/[^"]+)";',
        text,
    )
    if not prefix_m:
        print("no asset prefix found — is this a design-context result?", file=sys.stderr)
        sys.exit(1)
    prefix = prefix_m.group(1)
    files = sorted(
        set(re.findall(r'\$\{assetPathPrefix\}/([^`\'"]+?\.(?:svg|png|jpg|webp))', text))
    )

    # 2. Download every asset (skip if already cached)
    downloaded, skipped, failed = 0, 0, 0
    for f in files:
        target = ASSETS / f
        if target.exists() and target.stat().st_size > 0:
            skipped += 1
            continue
        r = subprocess.run(
            ["curl", "-sfL", "-o", str(target), f"{prefix}/{f}"],
            check=False,
        )
        if r.returncode == 0 and target.exists():
            downloaded += 1
        else:
            failed += 1
            print(f"  ! failed {f}")

    # 3. Rewrite the asset prefix to local
    text = re.sub(
        r'const assetPathPrefix = "https://www\.figma\.com/api/mcp/asset/[^"]+";',
        'const assetPathPrefix = "/figma-assets";',
        text,
    )

    # 4. Fix Figma's font family classes (Inter:Regular etc. don't parse)
    text = re.sub(
        r"font-\['Inter:([A-Za-z]+)'\]",
        lambda m: f"font-['Inter'] font-{m.group(1).lower()}",
        text,
    )

    # 5. Discover the top-level function that Figma marked as the default export
    export_m = re.search(r"export default function (\w+)\s*\(", text)
    if not export_m:
        # Some frames emit "function Foo(){}...export default Foo;" instead
        export_m = re.search(r"export default (\w+);", text)
        if not export_m:
            print("no default export detected", file=sys.stderr)
            sys.exit(1)
    original_fn_name = export_m.group(1)

    # 6. Strip the trailing bare `export default FnName;` (kept only when both
    #    forms are present — Figma sometimes emits both)
    text = re.sub(
        r"\nexport default " + re.escape(original_fn_name) + r";\s*$",
        "\n",
        text.rstrip() + "\n",
    )

    # 7. Rename the function to our desired ComponentName if different
    if original_fn_name != component_name:
        text = re.sub(
            r"\bexport default function " + re.escape(original_fn_name) + r"\b",
            f"export default function {component_name}",
            text,
        )
        text = re.sub(
            r"\b" + re.escape(original_fn_name) + r"\s*=",
            f"{component_name} =",
            text,
        )

    # 8. Header block
    from datetime import datetime, timezone
    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ")
    header = (
        f"// Generated from Figma get_design_context (node {node_id})\n"
        f"// on {stamp} — do NOT hand-edit.\n"
        f"// Regenerate with: python3 scripts/import-frame.py <json> {component_name} {node_id}\n"
        f"//\n"
        f"// Local rewrites: asset prefix → /figma-assets, Inter font classes,\n"
        f"// duplicated default export stripped, top component renamed.\n\n"
    )

    out_path = FRAMES / f"{component_name}.tsx"
    out_path.write_text(header + text)
    print(f"ok  {component_name}.tsx  ({len(text)} chars)")
    print(f"    assets: +{downloaded} new, {skipped} cached, {failed} failed")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print(__doc__)
        sys.exit(1)
    main(sys.argv[1], sys.argv[2], sys.argv[3])
