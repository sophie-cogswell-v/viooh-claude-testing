// The seven floating field-editor panels of the deal-line creation wizard.
//
// Each one is the literal `Group 1739327716` ("secondary panel (base)" + its
// content overlay) from Figma get_design_context, with real React state layered
// on top of the static markup:
//
//   Schedule  393:34399   calendar, range select -> "01/01/2026  - 07/01/2026 "
//   Environment 393:31737 checkbox list, Select all
//   DSP       393:31833   search + radio list
//   CPM       393:31932   currency input + "Apply across all lines"
//   Targets   393:81128   Budget / Frames / Impression cards
//   Format    393:32304   search + "Group Category level" include/exclude rows
//   Location  393:32700   search + County / Postcode / Street / Town rows
//
// Figma positions each panel absolutely in FRAME space. Here every panel is
// wrapped in one absolutely-positioned container at that same frame coordinate
// (see PANEL_GEOMETRY in model.ts) so a single element carries `.panel-pop-in`
// — the animation class index.css explicitly reserves for these editors — and
// the inner offsets are simply re-based against that container.

import { useState, type ReactNode } from 'react'
import { ASSETS, cx, panelBox, type FieldKey, type FieldValue, type WizardWidth } from './model'

const imgCaretLeft = `${ASSETS}/55c8e.svg`
const imgCaretRight = `${ASSETS}/68bdb.svg`
const imgCheckboxTick = `${ASSETS}/5ade4.svg`
const imgSearch = `${ASSETS}/f95d4.svg`
const imgPoundSmall = `${ASSETS}/3dddf.svg`
const imgSortArrows = `${ASSETS}/01a49.svg`
const imgSortArrowsAlt = `${ASSETS}/e6f02.svg`
const imgTickSmall = `${ASSETS}/aa9c5.svg`
const imgTickMuted = `${ASSETS}/933b9.svg`
const imgChevron = `${ASSETS}/5c98d.svg`
const imgGreenTick = `${ASSETS}/70450.svg`

/* ------------------------------------------------------------------ */
/* Shared shell                                                         */
/* ------------------------------------------------------------------ */

const TEXT_TITLE = String.raw`[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap`
const BTN_LABEL = String.raw`[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] whitespace-nowrap`

function FooterButton({
  label,
  kind,
  onClick,
}: {
  label: string
  kind: 'cancel' | 'primary' | 'disabled'
  onClick?: () => void
}) {
  const shell =
    kind === 'primary'
      ? String.raw`bg-[var(--\(new\)-primary\/solid\/900,#15115e)] content-stretch cursor-pointer drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] flex gap-[var(--button\/gap\/medium,1px)] h-[28px] items-center justify-center min-w-[36px] px-[var(--button\/padding\/medium,8px)] relative rounded-[var(--button\/radius\/medium,6px)] shrink-0`
      : kind === 'cancel'
        ? String.raw`bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch cursor-pointer flex gap-[var(--button\/gap\/medium,1px)] h-[28px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\/padding\/medium,8px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/medium,6px)] shrink-0`
        : String.raw`bg-[var(--\(new\)-neutral\/solid\/300,#eaeaef)] content-stretch flex gap-[var(--button\/gap\/medium,1px)] h-[28px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\/padding\/medium,8px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/medium,6px)] shrink-0`
  const text =
    kind === 'primary'
      ? String.raw`text-[color:var(--\(new\)-primary\/solid\/50,#f4f5ff)]`
      : kind === 'cancel'
        ? String.raw`text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)]`
        : String.raw`text-[color:var(--\(new\)-neutral\/solid\/400,#bab9c3)]`
  return (
    <div className={shell} data-name="Button" onClick={kind === 'disabled' ? undefined : onClick}>
      <div className="content-stretch flex items-start px-[var(--button\/gap\/medium,4px)] relative shrink-0" data-name="padding-label">
        <p className={cx(BTN_LABEL, text)}>{label}</p>
      </div>
    </div>
  )
}

type PanelShellProps = {
  field: FieldKey
  width: WizardWidth
  title: string
  primaryLabel: string
  primaryEnabled: boolean
  onPrimary: () => void
  onCancel: () => void
  children: ReactNode
}

function PanelShell({ field, width, title, primaryLabel, primaryEnabled, onPrimary, onCancel, children }: PanelShellProps) {
  const box = panelBox(field, width)
  return (
    <div
      className="absolute panel-pop-in"
      style={{ left: box.left, top: box.top, width: 427, height: box.height }}
      data-name="Group 1739327716"
      data-panel={field}
    >
      <div
        className="absolute bg-[#fdfdfd] border border-[rgba(5,5,38,0.12)] border-solid content-stretch flex flex-col inset-0 items-center rounded-[8px]"
        data-name="secondary panel (base)"
      >
        <div className="border-[var(--divider,rgba(66,65,78,0.1))] border-b border-solid content-stretch flex items-center justify-between p-[12px] relative shrink-0 w-full" data-name="secondary panel (base)">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[156px]">
            <div className={TEXT_TITLE}>
              <p className="leading-[20px]">{title}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--text.tiertiary,#7c7b87)] text-right whitespace-nowrap">
              Deal line 1
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-[427px]" data-name="Component 1/.elements/Secondary Panel/Content" />
        <div className="border-[var(--divider,rgba(66,65,78,0.1))] border-solid border-t content-stretch flex items-center justify-between p-[12px] relative shrink-0 w-full" data-name="secondary panel (base)">
          <FooterButton label="Cancel" kind="cancel" onClick={onCancel} />
          <FooterButton label={primaryLabel} kind={primaryEnabled ? 'primary' : 'disabled'} onClick={onPrimary} />
        </div>
      </div>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Shared list primitives                                               */
/* ------------------------------------------------------------------ */

function Checkbox({ active }: { active: boolean }) {
  return (
    <div
      className={cx(
        String.raw`content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--checkbox\/radius\/medium,2px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[16px]`,
        !active && String.raw`border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid`,
      )}
      data-name="checkbox"
    >
      <div
        aria-hidden
        className={cx(
          String.raw`absolute inset-0 pointer-events-none rounded-[var(--checkbox\/radius\/medium,2px)]`,
          active
            ? String.raw`bg-[var(--\(new\)-primary\/solid\/700,#272199)]`
            : String.raw`bg-[var(--\(new\)-neutral\/solid\/50,white)]`,
        )}
      />
      {active && (
        <div className="relative shrink-0 size-[12px]" data-name="icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheckboxTick} />
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
    </div>
  )
}

/**
 * Figma's codegen collapses the radio component to its unselected variant only
 * (both `Adform` — which the source frame renders selected — and its siblings
 * come back identical). The selected treatment below mirrors the checkbox's
 * own selected variant from the same panel family: primary/solid/700 fill with
 * a white centre. Flagged in wizard-integration-notes.md.
 */
function Radio({ active }: { active: boolean }) {
  return (
    <div
      className={cx(
        String.raw`overflow-clip relative rounded-[var(--radio\/radius\/medium,999px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[16px]`,
        active
          ? String.raw`border-2 border-[var(--\(new\)-primary\/solid\/700,#272199)] border-solid`
          : String.raw`border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid`,
      )}
      data-name="radio"
    >
      <div
        aria-hidden
        className={cx(
          String.raw`absolute inset-0 rounded-[var(--radio\/radius\/medium,999px)]`,
          active
            ? String.raw`bg-[var(--\(new\)-primary\/solid\/700,#272199)]`
            : String.raw`bg-[var(--\(new\)-neutral\/solid\/50,white)]`,
        )}
      />
      {active && (
        <div aria-hidden className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] left-1/2 rounded-[999px] size-[5px] top-1/2" />
      )}
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
    </div>
  )
}

/** `List` / `list panel` — one selectable row in the Environment / DSP panels. */
function ListRow({
  text,
  control,
  active,
  onClick,
}: {
  text: string
  control: 'checkbox' | 'radio'
  active: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-name="Parent 4">
        <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center py-[var(--0\,75-rem,12px)] relative shrink-0 w-full">
          <div
            className={cx(String.raw`content-stretch cursor-pointer flex flex-[1_0_0] items-center justify-center min-w-px px-[10px] relative rounded-[4px]`, hovered && 'proto-hotspot')}
            data-name="Environ1"
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0">
                  <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0">
                    {control === 'checkbox' ? <Checkbox active={active} /> : <Radio active={active} />}
                  </div>
                  <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap">
                    {text}
                  </p>
                </div>
              </div>
              <div className="h-[24px] relative shrink-0 w-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** `SEARCH` / `Dropdown [Tick]` input. Display-only, exactly as in the source. */
function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[var(--0\,5-rem,8px)] items-start justify-center relative shrink-0 w-full" data-name="SEARCH">
      <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[var(--form\/gap\/large,4px)] h-[36px] items-center justify-center overflow-clip px-[var(--form\/padding\/large,12px)] relative rounded-[var(--form\/radius\/large,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-name="input">
        <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--form\/radius\/large,6px)]" />
        <div className="relative shrink-0 size-[20px]" data-name="start-icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--form\/gap\/medium,4px)] relative" data-name="padding-content">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] text-ellipsis whitespace-nowrap">
            {placeholder}
          </p>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
      </div>
    </div>
  )
}

/** `include exclude` pill — the round tick toggle on Format / Location rows. */
function IncludePill({ active, onClick }: { active: boolean; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={cx(
        String.raw`bg-[var(--\(new\)-neutral\/opacity-dark\/5,rgba(19,18,33,0.05))] content-stretch flex items-center justify-center relative rounded-[var(--radius\/full,999px)] shrink-0`,
        onClick && String.raw`cursor-pointer`,
        hovered && 'proto-hotspot',
      )}
      data-name="include exclude"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {active ? (
        <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[var(--0,0px)] h-[24px] items-center justify-center overflow-clip px-[var(--0\,5-rem,8px)] relative rounded-[var(--radius\/full,999px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0" data-name="_item_button-switch">
          <div aria-hidden className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 pointer-events-none rounded-[var(--radius\/full,999px)]" />
          <div className="relative shrink-0 size-[16px]" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickSmall} />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
        </div>
      ) : (
        <div className="content-stretch flex gap-[var(--0,0px)] h-[24px] items-center justify-center overflow-clip px-[var(--0\,5-rem,8px)] relative rounded-[var(--radius\/full,999px)] shrink-0" data-name="_item_button-switch">
          <div className="relative shrink-0 size-[16px]" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickMuted} />
          </div>
        </div>
      )}
    </div>
  )
}

/** `chip` — the "4 results" / "11 results" count pill. */
function ResultsChip({ text, small }: { text: string; small?: boolean }) {
  return (
    <div
      className={cx(
        String.raw`bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex items-center justify-center overflow-clip relative shrink-0`,
        small
          ? String.raw`h-[20px] min-w-[20px] rounded-[var(--chip\/radius\/small,999px)]`
          : String.raw`h-[24px] min-w-[24px] rounded-[var(--chip\/radius\/medium,999px)]`,
      )}
      data-name="chip"
    >
      <div className={cx(String.raw`content-stretch flex items-center relative shrink-0`, small ? String.raw`px-[var(--chip\/padding\/small,4px)]` : String.raw`px-[var(--chip\/padding\/medium,6px)]`)} data-name="parent-content">
        <div className={cx(String.raw`content-stretch flex items-center relative shrink-0`, small ? String.raw`px-[var(--chip\/gap\/small,1px)]` : String.raw`pb-px px-[var(--chip\/gap\/medium,2px)]`)} data-name="padding-text">
          <p className={cx(String.raw`[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[color:var(--\(new\)-primary\/solid\/700,#272199)] whitespace-nowrap`, small ? String.raw`text-[11px]` : String.raw`text-[13px]`)}>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

/** `List (secondary panel)` — a category row inside Format / Location. */
function CategoryRow({
  label,
  results,
  smallChip,
  greenCount,
  active,
  onToggle,
  chevron = true,
}: {
  label: string
  results?: string
  smallChip?: boolean
  greenCount?: string
  active: boolean
  onToggle?: () => void
  chevron?: boolean
}) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[403px]" data-name="CAT (SINGLE LIST)">
      <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-name="Item 1">
        <div className="content-stretch flex h-[42px] items-center justify-between pl-[5px] py-[var(--0\,75-rem,12px)] relative shrink-0 w-full" data-name="List (secondary panel)">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative rounded-[4px]" data-name="Environ1">
            <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[264px]">
              <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[197px]">
                <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap">
                  {label}
                </p>
                {results && <ResultsChip text={results} small={smallChip} />}
                {greenCount && (
                  <div className="bg-[var(--\(new\)-green\/opacity\/10,rgba(18,190,121,0.1))] content-stretch flex h-[20px] items-center justify-center min-w-[20px] overflow-clip relative rounded-[var(--chip\/radius\/small,999px)] shrink-0" data-name="chip">
                    <div className="content-stretch flex items-center px-[var(--chip\/padding\/small,4px)] relative shrink-0" data-name="parent-content">
                      <div className="relative shrink-0 size-[12px]" data-name="icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGreenTick} />
                      </div>
                      <div className="content-stretch flex items-center px-[var(--chip\/gap\/small,1px)] relative shrink-0" data-name="padding-text">
                        <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-green\/solid\/700,#138859)] whitespace-nowrap">
                          {greenCount}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <IncludePill active={active} onClick={onToggle} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-name="icon button">
            {chevron && (
              <div className="relative shrink-0 size-[16px]" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/** `List item (Level 2)` — the "Alphabetical ⇅ … Clear all" sort strip. */
function SortStrip({ onClearAll, divider }: { onClearAll?: () => void; divider?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[403px]" data-name="List item (Level 2)">
      <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-name="Parent 9">
        <div
          className={cx(
            String.raw`content-stretch flex flex-col gap-[10px] h-[20px] items-center relative shrink-0 w-full`,
            divider && String.raw`border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid`,
          )}
          data-name="Parent 23"
        >
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="content-stretch flex items-center pl-[5px] relative shrink-0">
              <div className="content-stretch flex items-center relative shrink-0" data-name="parent-content">
                <div className="content-stretch flex items-center px-[var(--chip\/gap\/small,1px)] relative shrink-0" data-name="padding-text">
                  <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap">
                    Alphabetical
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-center px-[var(--chip\/padding\/small,4px)] relative shrink-0" data-name="remove">
                <div className="relative shrink-0 size-[12px]" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={onClearAll ? imgSortArrows : imgSortArrowsAlt} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[20px] items-end relative shrink-0 w-[95px]">
              {onClearAll && (
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                  <div className="content-stretch cursor-pointer flex h-[20px] items-center justify-end min-w-[20px] overflow-clip relative rounded-[var(--chip\/radius\/small,999px)] shrink-0" data-name="chip" onClick={onClearAll}>
                    <div className="content-stretch flex items-center px-[var(--chip\/padding\/small,4px)] relative shrink-0" data-name="parent-content">
                      <div className="content-stretch flex items-center px-[var(--chip\/gap\/small,1px)] relative shrink-0" data-name="padding-text">
                        <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap">
                          Clear all
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Schedule (393:34399)                                                 */
/* ------------------------------------------------------------------ */

type DayState = 'default' | 'current-day' | 'selected-start' | 'selected-last' | 'selected-between' | 'disabled'

const CAL_WEEKS: Array<Array<{ day: number; muted?: boolean }>> = [
  [{ day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }],
  [{ day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }],
  [{ day: 15 }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }],
  [{ day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }],
  [
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: 1, muted: true },
    { day: 2, muted: true },
    { day: 3, muted: true },
    { day: 4, muted: true },
  ],
]

function CalDay({ day, state, onClick }: { day: number; state: DayState; onClick?: () => void }) {
  const base = String.raw`content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative`
  const shell =
    state === 'selected-start'
      ? String.raw`bg-[var(--\(new\)-primary\/solid\/900,#15115e)] rounded-bl-[var(--radius\/x-lg,12px)] rounded-tl-[var(--radius\/x-lg,12px)]`
      : state === 'selected-last'
        ? String.raw`bg-[var(--\(new\)-primary\/solid\/900,#15115e)] rounded-br-[var(--radius\/x-lg,12px)] rounded-tr-[var(--radius\/x-lg,12px)]`
        : state === 'selected-between'
          ? String.raw`bg-[var(--\(new\)-primary\/opacity\/20,rgba(44,36,195,0.2))]`
          : state === 'current-day'
            ? String.raw`rounded-[4px]`
            : ''
  const text =
    state === 'selected-start' || state === 'selected-last'
      ? String.raw`text-[color:var(--\(new\)-neutral\/solid\/50,white)]`
      : state === 'disabled'
        ? String.raw`opacity-50 text-[color:var(--\(new\)-text\/tertiary,#7c7b87)]`
        : state === 'current-day'
          ? String.raw`text-[color:var(--\(new\)-text\/primary,#131221)]`
          : String.raw`text-[color:var(--\(new\)-text\/secondary,#42414e)]`
  return (
    <div
      className={cx(base, shell, state !== 'disabled' && String.raw`cursor-pointer`)}
      data-name="cal-day"
      onClick={state === 'disabled' ? undefined : onClick}
    >
      {state === 'current-day' && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--\(new\)-neutral\/solid\/100,#f8f8f9)] left-1/2 rounded-[48px] size-[36px] top-1/2" />
      )}
      <p className={cx(String.raw`[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] whitespace-nowrap`, text)}>
        {day}
      </p>
    </div>
  )
}

function TimeframeInput({ label, value, left }: { label: string; value: string; left: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0\,5-rem,8px)] h-[60px] items-start justify-center min-w-px relative" data-name="_TimeframeInput">
      <div
        className={cx(
          String.raw`border-[var(--neutral.outlinedBorder,rgba(5,5,38,0.12))] border-solid content-stretch flex flex-col items-center overflow-clip p-[var(--form\/padding\/large,12px)] relative shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full`,
          left
            ? String.raw`border rounded-bl-[var(--form\/radius\/large,6px)] rounded-tl-[var(--form\/radius\/large,6px)]`
            : String.raw`border-b border-r border-t rounded-br-[var(--form\/radius\/large,6px)] rounded-tr-[var(--form\/radius\/large,6px)]`,
        )}
        data-name="input"
      >
        <div
          aria-hidden
          className={cx(
            String.raw`absolute bg-white inset-0 pointer-events-none`,
            left
              ? String.raw`rounded-bl-[var(--form\/radius\/large,6px)] rounded-tl-[var(--form\/radius\/large,6px)]`
              : String.raw`rounded-br-[var(--form\/radius\/large,6px)] rounded-tr-[var(--form\/radius\/large,6px)]`,
          )}
        />
        <div className="content-stretch flex items-center px-[var(--form\/gap\/medium,4px)] relative shrink-0 w-full" data-name="padding-content">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-medium leading-[16px] min-w-px not-italic overflow-hidden relative text-[11px] text-[color:var(--text.primary,#131221)] text-ellipsis whitespace-nowrap">
            {label}
          </p>
        </div>
        <div className="content-stretch flex items-center px-[var(--form\/gap\/medium,4px)] relative shrink-0 w-full" data-name="label">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-ellipsis whitespace-nowrap">
            {value}
          </p>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
      </div>
    </div>
  )
}

function fmt(day: number | null): string {
  return day == null ? '' : `${String(day).padStart(2, '0')}/01/2026 `
}

export function SchedulePanel({ width, onCommit, onCancel }: PanelProps) {
  const [start, setStart] = useState<number | null>(null)
  const [end, setEnd] = useState<number | null>(null)

  const pick = (day: number) => {
    if (start == null || end != null) {
      setStart(day)
      setEnd(null)
    } else if (day >= start) {
      setEnd(day)
    } else {
      setStart(day)
    }
  }

  const dayState = (day: number, muted: boolean): DayState => {
    if (muted) return 'disabled'
    if (start != null && day === start) return 'selected-start'
    if (end != null && day === end) return 'selected-last'
    if (start != null && end != null && day > start && day < end) return 'selected-between'
    if (day === 14) return 'current-day'
    return 'default'
  }

  const ready = start != null && end != null

  return (
    <PanelShell
      field="schedule"
      width={width}
      title="Schedule"
      primaryLabel="Next"
      primaryEnabled={ready}
      onPrimary={() => ready && onCommit({ label: `${fmt(start)} - ${fmt(end)}` })}
      onCancel={onCancel}
    >
      <div className="absolute content-stretch flex flex-col h-[615px] items-start left-[15px] top-[44px] w-[407px]">
        <div className="content-stretch flex flex-col h-[504px] items-start px-[12px] py-[8px] relative shrink-0 w-[387px]" data-name="Content">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0 w-full" data-name="Title">
                <div className="content-stretch flex gap-[5px] items-center justify-end relative shrink-0 w-[360px]">
                  {['End of year', 'End of month'].map((t) => (
                    <div key={t} className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-name="Tabs">
                      <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-name="padding-text">
                        <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap">{t}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[363px]" data-name="Content">
              <div className="content-stretch flex gap-[8px] h-[60px] items-center relative shrink-0 w-[363px]">
                <div className="bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] h-[36px] relative rounded-[2px] shrink-0 w-[4px]" />
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[60px] items-start min-w-px relative rounded-[12px]" data-name="Calendar">
                  <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Inputs">
                    <TimeframeInput label="Start" value={fmt(start)} left />
                    <TimeframeInput label="End" value={fmt(end)} left={false} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-name="iconButton">
                    <div className="relative shrink-0 size-[16px]" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretLeft} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--form\/gap\/medium,4px)] items-center justify-center min-w-px overflow-clip px-[var(--form\/padding\/medium,12px)] relative rounded-[var(--form\/radius\/medium,6px)]" data-name="month selection">
                    <div className="content-stretch flex items-center px-[var(--form\/gap\/medium,4px)] relative shrink-0 w-[108px]" data-name="padding-content">
                      <p className="[word-break:break-word] font-['Inter'] font-medium leading-[24px] not-italic overflow-hidden relative shrink-0 text-[15px] text-[color:var(--text.primary,#131221)] text-center text-ellipsis whitespace-nowrap">
                        January 2026
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-name="iconButton">
                    <div className="relative shrink-0 size-[16px]" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretRight} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[4px] h-[276px] items-end px-[8px] relative shrink-0 w-full" data-name="Dates">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative w-full" data-name="Week">
                      {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                        <div key={d} className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="_Weekday">
                          <p className="[word-break:break-word] font-['Inter'] font-medium leading-[12px] not-italic relative shrink-0 text-[9px] text-[color:var(--text.primary,#1c2024)] tracking-[0.9px] uppercase whitespace-nowrap">{d}</p>
                        </div>
                      ))}
                    </div>
                    {CAL_WEEKS.map((week, wi) => (
                      <div key={wi} className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name={`Week${wi + 1}`}>
                        {week.map((cell, ci) => (
                          <CalDay key={ci} day={cell.day} state={dayState(cell.day, !!cell.muted)} onClick={() => pick(cell.day)} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="border-[var(--divider,rgba(66,65,78,0.1))] border-b border-solid content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full" data-name="Title">
                    <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--text.primary,#131221)] whitespace-nowrap">{`Pattern `}</p>
                    <div className="bg-[var(--\(new\)-neutral\/solid\/800,#52515e)] content-stretch flex h-[16px] items-center overflow-clip p-[var(--toggle\/padding\/medium,2px)] relative rounded-[var(--toggle\/radius\/medium,999px)] shrink-0 w-[28px]">
                      <div className="pointer-events-none relative rounded-[var(--toggle\/radius\/medium,999px)] shadow-[0px_3px_4px_0px_rgba(16,16,52,0.06)] shrink-0 size-[12px]" data-name="handle">
                        <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 rounded-[var(--toggle\/radius\/medium,999px)]" />
                        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  )
}

/* ------------------------------------------------------------------ */
/* Environment (393:31737)                                              */
/* ------------------------------------------------------------------ */

const ENVIRONMENTS = ['Airports', 'Billboard', 'Transport', 'Street Furniture', 'Shopping Mall ']

export function EnvironmentPanel({ width, onCommit, onCancel }: PanelProps) {
  const [picked, setPicked] = useState<string[]>([])
  const allOn = picked.length === ENVIRONMENTS.length

  const toggle = (name: string) =>
    setPicked((prev) => (prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]))

  // Figma only ever captures a single environment selected ("Airports"), so the
  // multi-select chip format is ours: first label + overflow count.
  const chip = () => {
    const ordered = ENVIRONMENTS.filter((e) => picked.includes(e))
    return ordered.length === 1 ? ordered[0].trim() : `${ordered[0].trim()} +${ordered.length - 1}`
  }

  return (
    <PanelShell
      field="environment"
      width={width}
      title="Environment"
      primaryLabel="Next"
      primaryEnabled={picked.length > 0}
      onPrimary={() => picked.length > 0 && onCommit({ label: chip() })}
      onCancel={onCancel}
    >
      <div className="absolute content-stretch flex flex-col gap-[4px] h-[382px] items-start left-0 px-[12px] py-[8px] top-[44px] w-[427px]" data-name="Content">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <ListRow
              text="Select all"
              control="checkbox"
              active={allOn}
              onClick={() => setPicked(allOn ? [] : [...ENVIRONMENTS])}
            />
            {ENVIRONMENTS.map((name) => (
              <ListRow key={name} text={name} control="checkbox" active={picked.includes(name)} onClick={() => toggle(name)} />
            ))}
          </div>
        </div>
      </div>
    </PanelShell>
  )
}

/* ------------------------------------------------------------------ */
/* DSP (393:31833)                                                      */
/* ------------------------------------------------------------------ */

const DSPS = ['Adform', 'Better Ads', 'Casssie ', 'Padleway GB', 'Hawk GB']

export function DspPanel({ width, onCommit, onCancel }: PanelProps) {
  const [picked, setPicked] = useState<string | null>(null)
  return (
    <PanelShell
      field="dsp"
      width={width}
      title="DSP"
      primaryLabel="Save"
      primaryEnabled={picked != null}
      onPrimary={() => picked && onCommit({ label: picked.trim() })}
      onCancel={onCancel}
    >
      <div className="absolute content-stretch flex flex-col gap-[var(--0\,5-rem,8px)] isolate items-start justify-center left-[12px] top-[56px] w-[407px]" data-name="Dropdown [Tick]">
        <SearchInput placeholder="Search DSP" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] h-[322px] items-start left-[12px] top-[104px] w-[407px]">
        {DSPS.map((name) => (
          <ListRow key={name} text={name} control="radio" active={picked === name} onClick={() => setPicked(name)} />
        ))}
      </div>
    </PanelShell>
  )
}

/* ------------------------------------------------------------------ */
/* CPM (393:31932)                                                      */
/* ------------------------------------------------------------------ */

export function CpmPanel({ width, onCommit, onCancel }: PanelProps) {
  const [amount, setAmount] = useState('')
  const [applyAll, setApplyAll] = useState(false)
  const ready = amount.trim().length > 0 && Number(amount) > 0
  return (
    <PanelShell
      field="cpm"
      width={width}
      title="CPM"
      primaryLabel="Next"
      primaryEnabled={ready}
      onPrimary={() => ready && onCommit({ label: `£${amount}` })}
      onCancel={onCancel}
    >
      <div className="absolute content-stretch flex flex-col gap-[4px] h-[82px] items-start left-0 px-[12px] py-[8px] top-[44px] w-[427px]" data-name="Content">
        <div className="content-stretch flex flex-col gap-[var(--0\,5-rem,8px)] items-start justify-center relative shrink-0 w-full" data-name="Input">
          <div className="bg-[var(--\(new\)-neutral\/solid\/50,white)] border-2 border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[var(--form\/gap\/medium,4px)] h-[28px] items-center justify-center overflow-clip px-[var(--form\/padding\/medium,10px)] relative rounded-[var(--form\/radius\/medium,6px)] shrink-0 w-full" data-name="input">
            <div className="relative shrink-0 size-[16px]" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPoundSmall} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--form\/gap\/medium,4px)] relative" data-name="padding-content">
              <input
                autoFocus
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
                className="[word-break:break-word] bg-transparent border-0 flex-[1_0_0] font-['Inter'] font-normal leading-[20px] min-w-px not-italic outline-none p-0 relative text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)]"
              />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-name="Parent 5">
          <ListRow text="Apply across all lines" control="checkbox" active={applyAll} onClick={() => setApplyAll((v) => !v)} />
        </div>
      </div>
    </PanelShell>
  )
}

/* ------------------------------------------------------------------ */
/* Filters > Format (393:32304)                                         */
/* ------------------------------------------------------------------ */

export function FormatPanel({ width, onCommit, onCancel }: PanelProps) {
  const [picked, setPicked] = useState<number[]>([])
  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]))
  return (
    <PanelShell
      field="format"
      width={width}
      title="Format"
      primaryLabel="Save"
      primaryEnabled={picked.length > 0}
      // The applied Format row in Figma (393:32699) always reads
      // "Product format" + "Digital CPI", whichever category row is ticked.
      onPrimary={() => picked.length > 0 && onCommit({ label: 'Product format', sub: 'Digital CPI' })}
      onCancel={onCancel}
    >
      <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[46px] w-[403px]">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative shrink-0 w-full" data-name="Content">
          <SearchInput placeholder="Search" />
          <SortStrip divider onClearAll={() => setPicked([])} />
          <CategoryRow label="Group Category level" results="4 results" active={picked.includes(0)} onToggle={() => toggle(0)} />
          <CategoryRow label="Group Category level" results="4 results" active={picked.includes(1)} onToggle={() => toggle(1)} />
        </div>
      </div>
    </PanelShell>
  )
}

/* ------------------------------------------------------------------ */
/* Filters > Location (393:32700)                                       */
/* ------------------------------------------------------------------ */

export function LocationPanel({ width, onCommit, onCancel }: PanelProps) {
  const [county, setCounty] = useState(false)
  return (
    <PanelShell
      field="location"
      width={width}
      title="Location"
      primaryLabel="Save"
      primaryEnabled={county}
      onPrimary={() => county && onCommit({ label: 'Massachussets' })}
      onCancel={onCancel}
    >
      <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[55px] w-[403px]">
        <div className="content-stretch flex flex-col gap-[10px] h-[331px] items-center pb-[12px] px-[12px] relative shrink-0 w-full" data-name="Content">
          <SearchInput placeholder="Search" />
          <div className="content-stretch flex flex-col gap-[20px] h-[273px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col h-[95px] items-start relative shrink-0">
              <CategoryRow
                label="County"
                results="1 results"
                smallChip
                greenCount={county ? '1' : undefined}
                active={county}
                onToggle={() => setCounty((v) => !v)}
              />
              <div className="content-stretch flex flex-col h-[53px] items-start relative shrink-0">
                <SortStrip />
                <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-[403px]">
                  <CategoryRow label="Massachussets" active={county} onToggle={() => setCounty((v) => !v)} chevron={false} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
              <CategoryRow label="Postcode" results="11 results" active={false} />
              <CategoryRow label="Street" results="50 results" active={false} />
              <CategoryRow label="Town" results="1 results" active={false} />
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  )
}

/* ------------------------------------------------------------------ */

export type PanelProps = {
  width: WizardWidth
  onCommit: (value: FieldValue) => void
  onCancel: () => void
}

export const PANELS: Record<FieldKey, (p: PanelProps) => ReactNode> = {
  schedule: SchedulePanel,
  environment: EnvironmentPanel,
  dsp: DspPanel,
  cpm: CpmPanel,
  format: FormatPanel,
  location: LocationPanel,
}
