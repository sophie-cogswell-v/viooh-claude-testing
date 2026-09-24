#!/usr/bin/env python3
"""
PgNewMap.tsx (get_design_context on node 392:16859) came back truncated by
the tool's ~100k-char response cap, mid-way through the side-nav-bar's
bottom tooltip button. Everything before that point (top bar, deal strip
with Targets, Summary panel, status islands) is real and complete -- only
the sidebar's decorative "back" chevron button and the closing tags were
cut. That tail is pixel-identical to the NG frames' sidebar (same shared
side-nav-bar component), so we splice the verified NG closing markup back
on, adapted to PG's own node ids, instead of re-fetching.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FRAMES = ROOT / "src" / "frames"
path = FRAMES / "PgNewMap.tsx"
text = path.read_text()

CUT_MARKER = '<div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center left-0 px-'
idx = text.find(CUT_MARKER)
assert idx != -1, "truncation marker not found -- file may already be fixed"

head = text[:idx]

TAIL = '''<div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center left-0 px-[18px] right-0" data-name="div.absolute">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="div.tooltip__2gGuw">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
              <Nav className="h-[30px] relative shrink-0 w-[60px]" type="record" />
              <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[13px] relative shrink-0 w-[60px]" data-name="Nav">
                <div className="content-stretch flex h-[34px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
                  <div className="content-stretch flex items-center overflow-clip p-[2px] relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-180">
                        <div className="relative size-[20px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg6} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'''

path.write_text(head + TAIL)
print(f"fixed {path.name}: {len(head)} chars head + tail, total {len(head) + len(TAIL)}")
