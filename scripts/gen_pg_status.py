#!/usr/bin/env python3
"""
Generate PgPending.tsx / PgLive.tsx / PgTerminated.tsx / PgEnded.tsx /
PgEndedLoading.tsx from PgNewMap.tsx (verified "New" / Availability + Map
frame, node 392:16859), mirroring gen_ng_status.py. The status chip/pill/
bottom-bar treatment is the same design-system pattern verified on the NG
lane (392:16216/16343/16469/16599/16727) and confirmed visually identical
on the PG+Map screenshots for Pending/Live/Terminated/Ended (see the
Overview Mode Polish concept, PG+Map row) -- only the PG-specific
"Check Allocation" CTA (not present on the NG lane) is additionally greyed
out for the terminal statuses, mirroring how "Check availability" is
disabled on NG.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FRAMES = ROOT / "src" / "frames"
BASE = (FRAMES / "PgNewMap.tsx").read_text()

TOP_ISLAND_OLD = '''          <div className="bg-[var(--\\(new\\)-neutral\\/opacity-dark\\/5,rgba(19,18,33,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\\/radius\\/medium,999px)] shrink-0" data-node-id="392:16866" data-name="chip">
            <div className="content-stretch flex items-center px-[var(--chip\\/padding\\/medium,6px)] relative shrink-0" data-node-id="I392:16866;814:3321" data-name="parent-content">
              <div className="relative shrink-0 size-[16px]" data-node-id="I392:16866;814:3322" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <div className="content-stretch flex items-center pb-px px-[var(--chip\\/gap\\/medium,2px)] relative shrink-0" data-node-id="I392:16866;814:3323" data-name="padding-text">
                <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-neutral\\/solid\\/700,#605f6b)] whitespace-nowrap" data-node-id="I392:16866;814:3324">
                  New
                </p>
              </div>
            </div>
          </div>
        </div>'''

BOTTOM_ISLAND_OLD = '''      <div className="absolute bg-white border border-[#e5e5eb] border-solid content-stretch flex h-[54px] items-center justify-between left-[65px] overflow-clip px-[16px] py-[14px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(13,13,20,0.06)] top-[923px] w-[386px]" data-node-id="392:16951" data-name="status-island">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="392:16952" data-name="Frame">
          <div className="bg-[var(--\\(new\\)-neutral\\/opacity-dark\\/5,rgba(19,18,33,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\\/radius\\/medium,999px)] shrink-0" data-node-id="392:16953" data-name="chip">
            <div className="content-stretch flex items-center px-[var(--chip\\/padding\\/medium,6px)] relative shrink-0" data-node-id="I392:16953;814:3321" data-name="parent-content">
              <div className="relative shrink-0 size-[16px]" data-node-id="I392:16953;814:3322" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <div className="content-stretch flex items-center pb-px px-[var(--chip\\/gap\\/medium,2px)] relative shrink-0" data-node-id="I392:16953;814:3323" data-name="padding-text">
                <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-neutral\\/solid\\/700,#605f6b)] whitespace-nowrap" data-node-id="I392:16953;814:3324">
                  New
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="392:16954">
          <div className="border border-[var(--\\(new\\)-neutral\\/opacity-dark\\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[var(--button\\/gap\\/small,0px)] h-[24px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\\/padding\\/small,8px)] py-[var(--none,0px)] relative rounded-[var(--button\\/radius\\/small,4px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[139px]" data-node-id="392:16959" data-name="Button">
            <div aria-hidden className="absolute bg-[var(--\\(new\\)-neutral\\/solid\\/50,white)] inset-0 pointer-events-none rounded-[var(--button\\/radius\\/small,4px)]" />
            <div className="relative shrink-0 size-[16px]" data-node-id="I392:16959;737:12456" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon4} />
            </div>
            <div className="content-stretch flex items-start px-[var(--button\\/gap\\/medium,4px)] relative shrink-0" data-node-id="I392:16959;737:12457" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-primary\\/solid\\/600,#2c24c3)] whitespace-nowrap" data-node-id="I392:16959;737:12458">
                Send for approval
              </p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
          </div>
          <div className="bg-[var(--\\(new\\)-primary\\/solid\\/900,#15115e)] content-stretch drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] flex gap-[var(--button\\/gap\\/small,0px)] h-[24px] items-center justify-center min-w-[36px] px-[var(--button\\/padding\\/small,8px)] py-[var(--none,0px)] relative rounded-[var(--button\\/radius\\/small,4px)] shrink-0 w-[90px]" data-node-id="392:16960" data-name="Button">
            <div className="relative shrink-0 size-[16px]" data-node-id="I392:16960;737:12441" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon5} />
            </div>
            <div className="content-stretch flex items-start px-[var(--button\\/gap\\/medium,4px)] relative shrink-0" data-node-id="I392:16960;737:12442" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-primary\\/solid\\/50,#f4f5ff)] whitespace-nowrap" data-node-id="I392:16960;737:12443">
                Confirm
              </p>
            </div>
          </div>
        </div>
      </div>'''

CHECK_ALLOC_OLD = '''                <div className="content-stretch drop-shadow-[0px_1px_1px_rgba(16,16,52,0.08)] flex flex-[1_0_0] gap-[var(--button\\/gap\\/large,4px)] h-[36px] items-center justify-center min-w-[36px] px-[var(--button\\/padding\\/large,12px)] py-[var(--none,0px)] relative rounded-[var(--button\\/radius\\/large,6px)]" data-node-id="392:16947" data-name="Button">
                  <div aria-hidden className="absolute bg-[var(--\\(new\\)-primary\\/solid\\/900,#15115e)] inset-0 pointer-events-none rounded-[var(--button\\/radius\\/large,6px)]" />
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16947;735:4520" data-name="start-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon3} />
                  </div>
                  <div className="content-stretch flex items-start px-[var(--button\\/gap\\/medium,4px)] relative shrink-0" data-node-id="I392:16947;735:4521" data-name="padding-label">
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-primary\\/solid\\/50,#f4f5ff)] whitespace-nowrap" data-node-id="I392:16947;735:4522">
                      Check Allocation
                    </p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                </div>'''

CHECK_ALLOC_DISABLED = '''                <div className="content-stretch flex flex-[1_0_0] gap-[var(--button\\/gap\\/large,4px)] h-[36px] items-center justify-center min-w-[36px] px-[var(--button\\/padding\\/large,12px)] py-[var(--none,0px)] relative rounded-[var(--button\\/radius\\/large,6px)]" data-node-id="392:16947" data-name="Button">
                  <div aria-hidden className="absolute bg-[var(--\\(new\\)-neutral\\/solid\\/200,#f3f3f5)] inset-0 pointer-events-none rounded-[var(--button\\/radius\\/large,6px)]" />
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16947;735:4520" data-name="start-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon3} />
                  </div>
                  <div className="content-stretch flex items-start px-[var(--button\\/gap\\/medium,4px)] relative shrink-0" data-node-id="I392:16947;735:4521" data-name="padding-label">
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-neutral\\/solid\\/400,#bab9c3)] whitespace-nowrap" data-node-id="I392:16947;735:4522">
                      Check Allocation
                    </p>
                  </div>
                </div>'''


def chip_block(node_id_a, node_id_b, icon_const, chip_bg, chip_fg, label):
    return f'''          <div className="{chip_bg} content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\\/radius\\/medium,999px)] shrink-0" data-node-id="{node_id_a}" data-name="chip">
            <div className="content-stretch flex items-center px-[var(--chip\\/padding\\/medium,6px)] relative shrink-0" data-name="parent-content">
              <div className="relative shrink-0 size-[16px]" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={{{icon_const}}} />
              </div>
              <div className="content-stretch flex items-center pb-px px-[var(--chip\\/gap\\/medium,2px)] relative shrink-0" data-name="padding-text">
                <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] {chip_fg} whitespace-nowrap" data-node-id="{node_id_b}">
                  {label}
                </p>
              </div>
            </div>
          </div>
        </div>'''


def updated_pill(pill_icon_const):
    return f'''
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
          <div className="bg-[#edecfc] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[8px] pr-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="update-pill">
            <div className="relative shrink-0 size-[12px]" data-name="pill-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={{{pill_icon_const}}} />
            </div>
            <p className="[word-break:break-word] font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#2c24c3] text-[12px] whitespace-nowrap">
              Updated 2 mins ago
            </p>
          </div>
        </div>'''


BOTTOM_ACTIONS = '''
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="392:16954">
          <div className="border border-[var(--\\(new\\)-neutral\\/opacity-dark\\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[var(--button\\/gap\\/small,0px)] h-[24px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\\/padding\\/small,8px)] py-[var(--none,0px)] relative rounded-[var(--button\\/radius\\/small,4px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[139px]" data-name="Button">
            <div aria-hidden className="absolute bg-[var(--\\(new\\)-neutral\\/solid\\/50,white)] inset-0 pointer-events-none rounded-[var(--button\\/radius\\/small,4px)]" />
            <div className="relative shrink-0 size-[16px]" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon4} />
            </div>
            <div className="content-stretch flex items-start px-[var(--button\\/gap\\/medium,4px)] relative shrink-0" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-primary\\/solid\\/600,#2c24c3)] whitespace-nowrap">
                Send for approval
              </p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
          </div>
          <div className="bg-[var(--\\(new\\)-primary\\/solid\\/900,#15115e)] content-stretch drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] flex gap-[var(--button\\/gap\\/small,0px)] h-[24px] items-center justify-center min-w-[36px] px-[var(--button\\/padding\\/small,8px)] py-[var(--none,0px)] relative rounded-[var(--button\\/radius\\/small,4px)] shrink-0 w-[90px]" data-name="Button">
            <div className="relative shrink-0 size-[16px]" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon5} />
            </div>
            <div className="content-stretch flex items-start px-[var(--button\\/gap\\/medium,4px)] relative shrink-0" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-primary\\/solid\\/50,#f4f5ff)] whitespace-nowrap">
                Confirm
              </p>
            </div>
          </div>
        </div>
      </div>'''

BOTTOM_TERMINATE = '''
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="392:16954">
          <div className="bg-[var(--\\(new\\)-pinkred\\/solid\\/800,#9f1234)] content-stretch flex gap-[var(--button\\/gap\\/small,0px)] h-[24px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\\/padding\\/small,8px)] py-[var(--none,0px)] relative rounded-[var(--button\\/radius\\/small,4px)] shrink-0 w-[90px]" data-name="Button">
            <div className="relative shrink-0 size-[16px]" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIconTerminate} />
            </div>
            <div className="content-stretch flex items-start px-[var(--button\\/gap\\/medium,4px)] relative shrink-0" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-pinkred\\/solid\\/50,#fff4f6)] whitespace-nowrap">
                Terminate
              </p>
            </div>
          </div>
        </div>
      </div>'''

BOTTOM_READONLY = '''
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="392:16954">
          <div className="bg-[var(--\\(new\\)-neutral\\/solid\\/200,#f3f3f5)] content-stretch flex gap-[var(--button\\/gap\\/small,0px)] h-[24px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\\/padding\\/small,8px)] py-[var(--none,0px)] relative rounded-[var(--button\\/radius\\/small,4px)] shrink-0 w-[90px]" data-name="Button">
            <div className="relative shrink-0 size-[16px]" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIconTerminate} />
            </div>
            <div className="content-stretch flex items-start px-[var(--button\\/gap\\/medium,4px)] relative shrink-0" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\\(new\\)-neutral\\/solid\\/400,#bab9c3)] whitespace-nowrap">
                Read only
              </p>
            </div>
          </div>
        </div>
      </div>'''

LOADING_OVERLAY = '''
      <div className="absolute bg-[rgba(19,18,33,0.05)] left-[65px] top-[47px] w-[600px] h-[875px] rounded-[14px] overflow-hidden z-[40]" data-name="Loading overlay">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative size-[82px] animate-spin">
            <img alt="" className="block max-w-none size-full" src={imgSpinnerRing1} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--\\(new\\)-neutral\\/solid\\/50,white)] border border-[var(--\\(new\\)-borders\\/divider,rgba(19,18,33,0.1))] border-solid drop-shadow-[0px_4px_4px_rgba(0,0,0,0.08)] content-stretch flex flex-col gap-[12px] items-start left-[65px] p-[8px] rounded-[6px] top-[882px] w-[433px] z-[41]" data-name="alert">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-[16px]">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAlertIcon} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
            <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-medium leading-[20px] min-w-px not-italic relative text-[13px] text-[color:var(--\\(new\\)-text\\/primary,#131221)]">
                We are validating your solution
              </p>
              <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-[16px]">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCloseIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>'''

STATUSES = {
    "PgPending": dict(label="Pending", chip_bg="bg-[var(--\\(new\\)-yellow\\/opacity\\/5,rgba(248,188,26,0.05))]",
                       chip_fg="text-[color:var(--\\(new\\)-yellow\\/solid\\/600,#e4b02e)]",
                       icon_file="b07b2", pill_icon_file="0d493", alloc_enabled=True, bottom=BOTTOM_ACTIONS,
                       loading=False, component="PgPending"),
    "PgLive": dict(label="Live", chip_bg="bg-[var(--\\(new\\)-green\\/opacity\\/10,rgba(18,190,121,0.1))]",
                   chip_fg="text-[color:var(--\\(new\\)-green\\/solid\\/700,#138859)]",
                   icon_file="f7ff7", pill_icon_file="98821", alloc_enabled=True, bottom=BOTTOM_TERMINATE,
                   loading=False, component="PgLive"),
    "PgTerminated": dict(label="Terminated", chip_bg="bg-[var(--\\(new\\)-pinkred\\/opacity\\/10,rgba(228,46,79,0.1))]",
                          chip_fg="text-[color:var(--\\(new\\)-pinkred\\/solid\\/700,#be1235)]",
                          icon_file="636b9", pill_icon_file="98821", alloc_enabled=False, bottom=BOTTOM_READONLY,
                          loading=False, component="PgTerminated"),
    "PgEnded": dict(label="Ended", chip_bg="bg-[var(--\\(new\\)-neutral\\/opacity-dark\\/5,rgba(19,18,33,0.05))]",
                     chip_fg="text-[color:var(--\\(new\\)-neutral\\/solid\\/700,#605f6b)]",
                     icon_file="c88a4", pill_icon_file="98821", alloc_enabled=False, bottom=BOTTOM_READONLY,
                     loading=False, component="PgEnded"),
}

assert TOP_ISLAND_OLD in BASE, "PG top island anchor not found"
assert BOTTOM_ISLAND_OLD in BASE, "PG bottom island anchor not found"
assert CHECK_ALLOC_OLD in BASE, "PG check-allocation anchor not found"

for fname, cfg in STATUSES.items():
    text = BASE
    icon_const = f"imgStatusChip_{cfg['icon_file']}"
    pill_const = f"imgUpdatedPill_{cfg['pill_icon_file']}"

    top_new = chip_block("392:16866", "I392:16866;814:3324", icon_const, cfg["chip_bg"], cfg["chip_fg"], cfg["label"])
    top_new += updated_pill(pill_const)
    text = text.replace(TOP_ISLAND_OLD, top_new, 1)

    bottom_chip = chip_block("392:16953", "I392:16953;814:3324", icon_const, cfg["chip_bg"], cfg["chip_fg"], cfg["label"])
    bottom_new = (
        '      <div className="absolute bg-white border border-[#e5e5eb] border-solid content-stretch flex h-[54px] items-center justify-between left-[65px] overflow-clip px-[16px] py-[14px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(13,13,20,0.06)] top-[923px] w-[386px]" data-node-id="392:16951" data-name="status-island">\n'
        '        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="392:16952" data-name="Frame">\n'
        + bottom_chip
        + cfg["bottom"]
    )
    text = text.replace(BOTTOM_ISLAND_OLD, bottom_new, 1)

    if not cfg["alloc_enabled"]:
        text = text.replace(CHECK_ALLOC_OLD, CHECK_ALLOC_DISABLED, 1)

    new_consts = [f'const {icon_const} = `${{assetPathPrefix}}/{cfg["icon_file"]}.svg`;',
                  f'const {pill_const} = `${{assetPathPrefix}}/{cfg["pill_icon_file"]}.svg`;',
                  'const imgStartIconTerminate = `${assetPathPrefix}/34e57.svg`;']
    if cfg["loading"]:
        new_consts += [
            'const imgSpinnerRing1 = `${assetPathPrefix}/6a28a.svg`;',
            'const imgAlertIcon = `${assetPathPrefix}/3ac2c.svg`;',
            'const imgCloseIcon = `${assetPathPrefix}/6bbc9.svg`;',
        ]
    text = text.replace(
        'const assetPathPrefix = "/figma-assets";\n',
        'const assetPathPrefix = "/figma-assets";\n' + "\n".join(new_consts) + "\n",
        1,
    )

    if cfg["loading"]:
        before, sep, after = text.rpartition("    </div>\n  );\n}\n")
        assert sep, "final closing tag not found"
        text = before + LOADING_OVERLAY + "\n" + sep + after

    text = text.replace("export default function PgNewMap", f'export default function {cfg["component"]}')

    (FRAMES / f"{fname}.tsx").write_text(text)
    print(f"wrote {fname}.tsx")
