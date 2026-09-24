#!/usr/bin/env python3
"""
Like import-frame.py, but takes a RAW get_design_context code string (no JSON
wrapper) — used when the tool result was small enough to come back inline
instead of being saved to a file by the server.

Usage:
  python3 scripts/import-raw.py <raw.tsx> <ComponentName>
"""
import re, sys, subprocess
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public" / "figma-assets"
FRAMES = ROOT / "src" / "frames"
ASSETS.mkdir(parents=True, exist_ok=True)
FRAMES.mkdir(parents=True, exist_ok=True)


def main(raw_path: str, component_name: str):
    text = Path(raw_path).read_text()

    prefix_m = re.search(r'const assetPathPrefix = "(https://www\.figma\.com/api/mcp/asset/[^"]+)";', text)
    if not prefix_m:
        print("no asset prefix found", file=sys.stderr)
        sys.exit(1)
    prefix = prefix_m.group(1)
    files = sorted(set(re.findall(r'\$\{assetPathPrefix\}/([^`\'"]+?\.(?:svg|png|jpg|webp))', text)))

    downloaded, skipped, failed = 0, 0, 0
    for f in files:
        target = ASSETS / f
        if target.exists() and target.stat().st_size > 0:
            skipped += 1
            continue
        r = subprocess.run(["curl", "-sfL", "-o", str(target), f"{prefix}/{f}"], check=False)
        if r.returncode == 0 and target.exists():
            downloaded += 1
        else:
            failed += 1
            print(f"  ! failed {f}")

    text = re.sub(
        r'const assetPathPrefix = "https://www\.figma\.com/api/mcp/asset/[^"]+";',
        'const assetPathPrefix = "/figma-assets";',
        text,
    )

    weight_map = {
        "regular": "font-normal", "medium": "font-medium", "semibold": "font-semibold",
        "semi_bold": "font-semibold", "bold": "font-bold", "light": "font-light",
        "thin": "font-thin", "extrabold": "font-extrabold", "black": "font-black",
    }
    def _fix_font(m):
        return f"font-['Inter'] {weight_map.get(m.group(1).lower(), 'font-normal')}"
    text = re.sub(r"font-\['Inter:([A-Za-z_]+)'\]", _fix_font, text)

    export_m = re.search(r"export default function (\w+)\s*\(", text)
    if not export_m:
        export_m = re.search(r"export default (\w+);", text)
        if not export_m:
            print("no default export detected", file=sys.stderr)
            sys.exit(1)
    original_fn_name = export_m.group(1)

    text = re.sub(r"\nexport default " + re.escape(original_fn_name) + r";\s*$", "\n", text.rstrip() + "\n")

    if original_fn_name != component_name:
        text = re.sub(r"\bexport default function " + re.escape(original_fn_name) + r"\b",
                       f"export default function {component_name}", text)
        text = re.sub(r"\b" + re.escape(original_fn_name) + r"\s*=", f"{component_name} =", text)

    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ")
    header = (
        f"// Generated from Figma get_design_context on {stamp} — do NOT hand-edit.\n"
        f"// Local rewrites: asset prefix -> /figma-assets, Inter font classes fixed.\n\n"
    )

    out_path = FRAMES / f"{component_name}.tsx"
    out_path.write_text(header + text)
    print(f"ok  {component_name}.tsx  ({len(text)} chars)")
    print(f"    assets: +{downloaded} new, {skipped} cached, {failed} failed")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    main(sys.argv[1], sys.argv[2])
