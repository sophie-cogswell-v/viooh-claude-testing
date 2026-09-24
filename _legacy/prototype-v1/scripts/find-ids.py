#!/usr/bin/env python3
"""
Find data-node-ids for common CTAs across every frame .tsx.

For each keyword we grep the first line containing it, then walk BACK up the
file to the closest enclosing element that carries `data-node-id="..."`.
That's the id useFrameClicks matches on, and therefore what belongs in
registry.actions[frame].

Usage:
  python3 scripts/find-ids.py [frame.tsx ...]     # specific files
  python3 scripts/find-ids.py                     # all frames in src/frames/
"""
import glob
import re
import sys
from pathlib import Path

KEYWORDS = [
    "Skip", "Continue", "Cancel", ">Next<", "Save",
    ">Overview<", ">Map<",
    ">NG Floor<", ">NG Fixed<", ">PG<",
    ">Schedule<", ">Environment<", ">DSP<", ">CPM<",
    ">Budget<", ">Frame<", ">Impressions<", ">Location<",
    "Check availability", "Check allocation",
    "Send for approval", "Confirm", "Reject", "Approve", "Terminate",
    "New deal line",
]

NODE_ID_RE = re.compile(r'data-node-id="([^"]+)"')


def ids_in(path: Path) -> dict[str, str]:
    text = path.read_text()
    lines = text.splitlines()
    found = {}
    for kw in KEYWORDS:
        for i, line in enumerate(lines):
            if kw in line:
                # Walk back looking for the closest data-node-id
                for j in range(i, -1, -1):
                    m = NODE_ID_RE.search(lines[j])
                    if m:
                        # Skip label-only ids that are just the text wrapper,
                        # keep the parent that contains onClick semantics
                        found[kw.strip("<>")] = m.group(1)
                        break
                break
    return found


def main():
    root = Path(__file__).resolve().parent.parent / "src" / "frames"
    files = [Path(f) for f in sys.argv[1:]] or sorted(root.glob("*.tsx"))
    for f in files:
        print(f"=== {f.name} ===")
        for k, v in ids_in(f).items():
            print(f"  {k:<25} {v}")
        print()


if __name__ == "__main__":
    main()
