#!/usr/bin/env python3
"""
Build the Terminated / Ended frames for the two NEW (width x terminology)
lanes by SPLICING a real summary panel into a real status frame.

Why a splice and not the usual chip-swap derivation
---------------------------------------------------
`scripts/gen_ng_status.py` / `gen_pg_status.py` derive sibling statuses from a
base by swapping the status chip. That works when the only per-status delta IS
the chip. In the 393:* ("NG Y PG" canvas) generation it is NOT: the real
Terminated/Ended frames also switch every left-panel field to its read-only
treatment, which swaps ~20 icon assets for greyed variants. Deriving those by
string substitution would mean encoding 20 unverified asset swaps.

So instead, for each of these four frames we take:

  * the REAL Terminated/Ended frame (correct read-only left panel, correct
    status island, correct chrome) -- staged under .claude/temp/raw-frames/ --
  * and splice in the "Summary Panel - MASTER" subtree from the lane's own
    verified base frame, because in the source that panel is an unfinished
    placeholder (PROTOTYPE-NOTES.md assumption #4: blank Terminated/Ended right
    panels are treated as unfinished in Figma, and rebuilt from the equivalent
    finished panel in the same lane).

This is the `workflow.md` 3b recovery move ("splice the missing subtree from
another already-complete frame") applied to a design gap rather than a
truncated fetch.

Precedent for keeping the panel's buttons in their normal (non-disabled) style:
`overview_ng`'s Terminated frame 393:37019 is the ONE real Terminated frame in
the source that still shows a panel, and its "Frame list" / "Check
availability" buttons render in the normal secondary style, not greyed.

Plain exact-string operations only -- no regex over Tailwind's arbitrary-value
class soup.

Usage:  python3 scripts/gen_status_panels.py
"""
from datetime import datetime, timezone
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
FRAMES = ROOT / "src" / "frames"
RAW = ROOT / ".claude" / "temp" / "raw-frames"

PANEL_MARKER = 'data-name="Summary Panel — MASTER"'
ISLAND_MARKER = 'data-name="status-island"'

# (output component, raw real frame, its node id, donor base whose panel we splice in)
PAIRS = [
    ("NgGopTerminated", "NgGopTerminated.raw.tsx", "393:82974", "NgGopApproved", "393:82814"),
    ("NgGopEnded", "NgGopEnded.raw.tsx", "393:83055", "NgGopApproved", "393:82814"),
    ("PgAvailTerminated", "PgAvailTerminated.raw.tsx", "393:31103", "PgAvailPending", "393:30476"),
    ("PgAvailEnded", "PgAvailEnded.raw.tsx", "393:31206", "PgAvailPending", "393:30476"),
]


def match_div(text: str, start: int) -> int:
    """Return the index just past the <div> that opens at `start`."""
    assert text.startswith("<div", start), text[start : start + 40]
    depth, i = 0, start
    tag = re.compile(r"<div\b|</div>")
    while True:
        m = tag.search(text, i)
        if not m:
            raise AssertionError("unbalanced div")
        if m.group(0) == "<div":
            close = text.index(">", m.end())
            depth += 0 if text[close - 1] == "/" else 1  # self-closing <div ... />
            i = close + 1
        else:
            depth -= 1
            i = m.end()
        if depth == 0:
            return i


def extract_panel(donor: str) -> str:
    """The populated 'Summary Panel - MASTER' subtree, with its indentation."""
    idx = donor.index(PANEL_MARKER)
    start = donor.rindex("<div", 0, idx)
    end = match_div(donor, start)
    block = donor[start:end]
    assert block.rstrip().endswith("</div>"), "donor panel is self-closing (empty)"
    return block


def asset_consts(text: str) -> dict:
    return dict(re.findall(r"const (\w+) = `\$\{assetPathPrefix\}/([^`]+)`;", text))


def rehome_assets(block: str, donor_consts: dict) -> tuple:
    """Rewrite every src={imgFoo} in the block to a collision-proof const name
    keyed by the asset filename, and return (block, [const declarations])."""
    used = sorted(set(re.findall(r"src=\{(\w+)\}", block)))
    decls, rename = [], {}
    for const in used:
        assert const in donor_consts, f"panel references unknown const {const}"
        stem = donor_consts[const].rsplit(".", 1)[0]
        new = f"imgPanel_{stem}"
        rename[const] = new
        decl = f"const {new} = `${{assetPathPrefix}}/{donor_consts[const]}`;"
        if decl not in decls:
            decls.append(decl)
    # longest-first so imgIcon1 is not clobbered by the imgIcon rule
    for old in sorted(rename, key=len, reverse=True):
        block = block.replace(f"src={{{old}}}", f"src={{{rename[old]}}}")
    return block, decls


def splice(raw: str, panel: str) -> str:
    """Put the panel where the source frame left a hole."""
    if PANEL_MARKER in raw:
        # NG lane: an explicit self-closing placeholder div is present.
        idx = raw.index(PANEL_MARKER)
        start = raw.rindex("<div", 0, idx)
        end = match_div(raw, start)
        placeholder = raw[start:end]
        assert placeholder.rstrip().endswith("/>"), "placeholder is not empty -- already spliced?"
        return raw.replace(placeholder, panel, 1)

    # PG lane: no placeholder at all -- the Summary panel stops after the
    # status island. Insert directly after the island's closing tag.
    idx = raw.index(ISLAND_MARKER)
    start = raw.rindex("<div", 0, idx)
    end = match_div(raw, start)
    indent = "\n" + " " * (start - raw.rindex("\n", 0, start) - 1)
    return raw[:end] + indent + panel + raw[end:]


def main() -> None:
    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ")
    for name, raw_file, raw_node, donor_name, donor_node in PAIRS:
        raw = (RAW / raw_file).read_text()
        donor = (FRAMES / f"{donor_name}.tsx").read_text()

        panel = extract_panel(donor)
        for helper in ("<Toggle", "<TreeStructure", "<LegacyTogglePill", "<Nav", "<Logo"):
            assert helper not in panel, f"donor panel needs helper component {helper}"

        panel, decls = rehome_assets(panel, asset_consts(donor))
        text = splice(raw, panel)

        anchor = 'const assetPathPrefix = "/figma-assets";\n'
        assert anchor in text
        text = text.replace(anchor, anchor + "\n".join(decls) + "\n", 1)

        header = (
            f"// {name}.tsx -- generated by scripts/gen_status_panels.py on {stamp}.\n"
            f"// do NOT hand-edit; re-run the script instead.\n"
            f"//\n"
            f"// Shell + read-only left panel + status island: REAL Figma frame {raw_node}.\n"
            f"// Right-hand 'Summary Panel - MASTER': spliced from {donor_name} (real frame\n"
            f"// {donor_node}) because {raw_node}'s own panel is an unfinished placeholder in\n"
            f"// Figma -- PROTOTYPE-NOTES.md assumption #4.\n\n"
        )
        body = text.split("\n\n", 1)[1] if text.startswith("//") else text
        out = FRAMES / f"{name}.tsx"
        out.write_text(header + body)
        print(f"wrote {name}.tsx  ({len(header + body)} chars, panel {len(panel)} chars, {len(decls)} assets)")


if __name__ == "__main__":
    main()
