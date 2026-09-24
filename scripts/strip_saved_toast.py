#!/usr/bin/env python3
"""
Remove the baked-in "Line changes saved Successfully" toast from the new
status frames that happen to have been captured mid-toast in Figma.

Four of the real source frames behind these components (overview_pg pending
393:30476 and live 393:30793, map_pg approved 393:77390 and the PgGopLive
derived from it) were screenshotted while the save toast was on screen. That
toast is transient: PROTOTYPE-NOTES.md classifies "saved-toast" as a STATE
VARIANT of a screen, not a screen, to be driven by real React state. Baking it
into the static frame leaves a permanent "Line changes saved Successfully"
banner sitting on the Pending / Live / Approved screens, which is a fidelity
bug, not fidelity.

Other frames in the same lanes (e.g. PgAvailTerminated 393:31103) were captured
without it, so removing it is matching the lane's own toast-free frames rather
than inventing a state.

Idempotent: a frame with no alert node is left untouched.

Run AFTER the frame imports and AFTER gen_gap_statuses.py.

Usage:  python3 scripts/strip_saved_toast.py
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
FRAMES = ROOT / "src" / "frames"

TARGETS = [
    "PgAvailPending",
    "PgAvailLive",
    "PgGopApproved",
    "PgGopLive",
]

MARKER = 'data-name="alert"'
TOAST_TEXT = "Line changes saved Successfully"


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


def main() -> None:
    for name in TARGETS:
        path = FRAMES / f"{name}.tsx"
        text = path.read_text()
        if MARKER not in text:
            print(f"skip  {name}.tsx  (no toast)")
            continue

        idx = text.index(MARKER)
        start = text.rindex("<div", 0, idx)
        end = match_div(text, start)
        block = text[start:end]
        assert TOAST_TEXT in block, f"{name}: alert node is not the saved-toast"

        # Drop the whole line the block sat on, keeping the next line's indent.
        line_start = text.rindex("\n", 0, start) + 1
        assert text[line_start:start].strip() == "", "alert is not alone on its line"
        text = text[:line_start] + text[end:].lstrip("\n")
        assert TOAST_TEXT not in text, f"{name}: toast text survived"
        path.write_text(text)
        print(f"ok    {name}.tsx  (removed {len(block)} chars of toast)")


if __name__ == "__main__":
    main()
