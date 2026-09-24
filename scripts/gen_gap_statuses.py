#!/usr/bin/env python3
"""
Build the two status cells that have NO frame at all in the Figma source.

1. PgGopLive  -- PG width (1620) x GOP/Allocation terminology x `live`.
   `map_pg` jumps Approved -> Terminated with no Live frame
   (PROTOTYPE-NOTES.md assumption #5: a Figma gap, not an intentional skip).
   Built from PgGopApproved (real frame 393:77390) with the status chip swapped
   to Live. That swap is not invented: diffing the two REAL `map_ng` frames
   393:82814 (Approved) and 393:82894 (Live) shows the Approved -> Live delta is
   exactly this chip -- same green chip tokens, icon 26e7e.svg -> f7ff7.svg,
   label Approved -> Live, Terminate button unchanged, panel unchanged.

2. PgRejected -- PG width (1620) x Availability terminology x `rejected`.
   `rejected` is captured exactly once in the whole source, at overview_ng[28]
   (393:37227), NG width only. Built from:
     * the REAL PG Terminated frame 393:31103 as the shell -- it already has the
       read-only left panel and a pinkred status island with no action button,
       and its chip tokens and icon (636b9.svg) are byte-identical to the real
       NG Rejected chip, so only the word "Terminated" -> "Rejected" changes;
     * NgRejected's real "Summary Panel - MASTER" (Delivery / Traded impressions
       / Remaining impressions / Distribution -- no Availability card, no
       Pricing) spliced in as the panel.
   Both lanes render the summary panel at w-[373px], so nothing is rewidthed --
   only the panel's left offset differs between the lanes and that lives on the
   PG shell we kept.

Plain exact-string operations only -- no regex over Tailwind class soup.

Usage:  python3 scripts/gen_gap_statuses.py
"""
from datetime import datetime, timezone
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
FRAMES = ROOT / "src" / "frames"
RAW = ROOT / ".claude" / "temp" / "raw-frames"

PANEL_MARKER = 'data-name="Summary Panel — MASTER"'
ISLAND_MARKER = 'data-name="status-island"'

# Verified off the real map_ng Approved (393:82814) and Live (393:82894) frames.
APPROVED_CHIP_ICON = "26e7e.svg"
LIVE_CHIP_ICON = "f7ff7.svg"


def match_div(text: str, start: int) -> int:
    assert text.startswith("<div", start), text[start : start + 40]
    depth, i = 0, start
    tag = re.compile(r"<div\b|</div>")
    while True:
        m = tag.search(text, i)
        if not m:
            raise AssertionError("unbalanced div")
        if m.group(0) == "<div":
            close = text.index(">", m.end())
            depth += 0 if text[close - 1] == "/" else 1
            i = close + 1
        else:
            depth -= 1
            i = m.end()
        if depth == 0:
            return i


def block_at(text: str, marker: str) -> tuple:
    idx = text.index(marker)
    start = text.rindex("<div", 0, idx)
    return start, match_div(text, start)


def asset_consts(text: str) -> dict:
    return dict(re.findall(r"const (\w+) = `\$\{assetPathPrefix\}/([^`]+)`;", text))


def rehome_assets(block: str, consts: dict, prefix: str) -> tuple:
    used = sorted(set(re.findall(r"src=\{(\w+)\}", block)))
    decls, rename = [], {}
    for const in used:
        assert const in consts, f"block references unknown const {const}"
        stem = consts[const].rsplit(".", 1)[0]
        new = f"{prefix}{stem}"
        rename[const] = new
        decl = f"const {new} = `${{assetPathPrefix}}/{consts[const]}`;"
        if decl not in decls:
            decls.append(decl)
    for old in sorted(rename, key=len, reverse=True):
        block = block.replace(f"src={{{old}}}", f"src={{{rename[old]}}}")
    return block, decls


def add_consts(text: str, decls: list) -> str:
    anchor = 'const assetPathPrefix = "/figma-assets";\n'
    assert anchor in text
    return text.replace(anchor, anchor + "\n".join(decls) + "\n", 1)


def strip_header(text: str) -> str:
    return text.split("\n\n", 1)[1] if text.startswith("//") else text


STAMP = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ")


def build_pg_gop_live() -> None:
    text = (FRAMES / "PgGopApproved.tsx").read_text()

    # The chip icon const is declared once and used only by the status island,
    # so retarget the declaration rather than the usage.
    consts = asset_consts(text)
    icon_consts = [c for c, f in consts.items() if f == APPROVED_CHIP_ICON]
    assert len(icon_consts) == 1, f"expected one chip-icon const, got {icon_consts}"
    old_decl = f"const {icon_consts[0]} = `${{assetPathPrefix}}/{APPROVED_CHIP_ICON}`;"
    new_decl = f"const {icon_consts[0]} = `${{assetPathPrefix}}/{LIVE_CHIP_ICON}`;"
    assert text.count(old_decl) == 1
    text = text.replace(old_decl, new_decl, 1)

    # Swap the label inside the status island only.
    start, end = block_at(text, ISLAND_MARKER)
    island = text[start:end]
    assert island.count("\n                    Approved\n") == 1
    text = text[:start] + island.replace(
        "\n                    Approved\n", "\n                    Live\n", 1
    ) + text[end:]

    text = text.replace(
        "export default function PgGopApproved", "export default function PgGopLive", 1
    )
    # No rendered "Approved" text may survive (the component name and the
    # import-frame.py header both legitimately still contain the word).
    body = strip_header(text)
    assert "\n                    Approved\n" not in body, "a stray 'Approved' label survived"
    assert body.count("\n                  Terminate\n") == 1, "Terminate action button went missing"

    header = (
        f"// PgGopLive.tsx -- generated by scripts/gen_gap_statuses.py on {STAMP}.\n"
        f"// do NOT hand-edit; re-run the script instead.\n"
        f"//\n"
        f"// PG width (1620) x GOP/Allocation terminology x live.\n"
        f"// No such frame exists in Figma: map_pg goes Approved -> Terminated with no\n"
        f"// Live frame (PROTOTYPE-NOTES.md assumption #5). Derived from PgGopApproved\n"
        f"// (real frame 393:77390) by the chip swap verified on the real map_ng\n"
        f"// Approved 393:82814 -> Live 393:82894 transition.\n\n"
    )
    out = FRAMES / "PgGopLive.tsx"
    out.write_text(header + body)
    print(f"wrote PgGopLive.tsx  ({out.stat().st_size} bytes)")


def build_pg_rejected() -> None:
    shell = (RAW / "PgAvailTerminated.raw.tsx").read_text()
    donor = (FRAMES / "NgRejected.tsx").read_text()

    # 1. Real NG Rejected panel (Delivery / Distribution, no Availability card).
    p0, p1 = block_at(donor, PANEL_MARKER)
    panel = donor[p0:p1]
    assert panel.rstrip().endswith("</div>"), "donor panel is empty"
    assert "Traded impressions" in panel and "Remaining impressions" in panel
    assert "Availability" not in panel and "Pricing" not in panel
    for helper in ("<Toggle", "<TreeStructure", "<LegacyTogglePill", "<Nav", "<Logo"):
        assert helper not in panel, f"donor panel needs helper component {helper}"
    panel, decls = rehome_assets(panel, asset_consts(donor), "imgRejected_")

    # 2. Relabel the shell's pinkred island. Chip tokens and icon already match
    #    the real NG Rejected chip exactly, so the word is the only delta.
    s0, s1 = block_at(shell, ISLAND_MARKER)
    island = shell[s0:s1]
    # pinkred chip, and no action button ("Terminated" contains "Terminate", so
    # match the button's own label line rather than the bare word).
    assert "pinkred" in island, "shell island is not the pinkred variant"
    assert "\n                  Terminate\n" not in island, "shell island still has an action button"
    assert island.count("\n                    Terminated\n") == 1
    island = island.replace(
        "\n                    Terminated\n", "\n                    Rejected\n", 1
    )

    # 3. Reassemble: island, then the panel, inside the Summary panel.
    assert PANEL_MARKER not in shell, "PG shell unexpectedly has a panel placeholder"
    indent = "\n" + " " * (s0 - shell.rindex("\n", 0, s0) - 1)
    text = shell[:s0] + island + indent + panel + shell[s1:]

    text = add_consts(text, decls)
    text = text.replace(
        "export default function PgAvailTerminated",
        "export default function PgRejected",
        1,
    )
    body = strip_header(text)
    assert "\n                    Terminated\n" not in body, "a stray 'Terminated' label survived"
    assert "\n                    Rejected\n" in body, "the Rejected label did not land"

    header = (
        f"// PgRejected.tsx -- generated by scripts/gen_gap_statuses.py on {STAMP}.\n"
        f"// do NOT hand-edit; re-run the script instead.\n"
        f"//\n"
        f"// PG width (1620) x Availability terminology x rejected.\n"
        f"// `rejected` is captured exactly once in the source -- overview_ng[28]\n"
        f"// (393:37227), NG width only -- so no real PG-width frame exists.\n"
        f"// Shell + read-only left panel + pinkred island: REAL PG frame 393:31103\n"
        f"// (its Terminated chip is byte-identical to the real Rejected chip, so only\n"
        f"// the label changes). Summary panel: REAL NgRejected panel from 393:37227,\n"
        f"// spliced unchanged -- both lanes render it at w-[373px], nothing rewidthed.\n\n"
    )
    out = FRAMES / "PgRejected.tsx"
    out.write_text(header + body)
    print(f"wrote PgRejected.tsx  ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    build_pg_gop_live()
    build_pg_rejected()
