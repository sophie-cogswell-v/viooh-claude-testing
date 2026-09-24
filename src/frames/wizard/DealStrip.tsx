// The live "deal strip (full)" left panel for the deal-line creation wizard.
//
// Transcribed from Figma get_design_context, node-for-node:
//   - closed / "Required" rows ............ 393:31666 (inside NG 393:31641)
//   - filled rows + Filters accordion ..... 393:32699 (inside NG 393:32674)
//   - Targets section + Share of time ..... 393:81127 (inside NG 393:81102)
// The three source frames emit the same `deal card (Global)` component in its
// default / dashed / selected / filled variants; those four variants are the
// only thing this file parameterises. Everything else is Figma's own markup,
// including every `data-node-id` / `data-name` (kept for hit-testing parity
// with useFrameClicks, see wizard-integration-notes.md).
//
// Deviation from the raw export: Figma wraps each accordion section in a
// <button>. Rows inside a section are themselves clickable here, and a button
// may not nest interactive content, so section wrappers are <div role="group">.

import { useState, type HTMLAttributes, type ReactNode } from 'react'
import { ASSETS, cx, type FieldKey, type FieldValue, type WizardValues, type WizardWidth } from './model'

const imgIconDuplicate = `${ASSETS}/cee61.svg`
const imgIconEdit = `${ASSETS}/96589.svg`
const imgIconDelete = `${ASSETS}/ebfcc.svg`
const imgChevronUp = `${ASSETS}/37666.svg`
const imgChevronUpAlt = `${ASSETS}/c213c.svg`
const imgChevronDown = `${ASSETS}/5c98d.svg`
const imgCalendar = `${ASSETS}/313e5.svg`
const imgMenu = `${ASSETS}/c10a1.svg`
const imgEnvironementChannel = `${ASSETS}/21f40.svg`
const imgBriefcase = `${ASSETS}/0b538.svg`
const imgPound = `${ASSETS}/fad8b.svg`
const imgTable = `${ASSETS}/23ebf.svg`
const imgFormat = `${ASSETS}/97728.svg`
const imgLocation = `${ASSETS}/9d537.svg`
const imgFlag = `${ASSETS}/ffd6e.svg`
const imgSquareFour = `${ASSETS}/ed6ef.svg`
const imgTags = `${ASSETS}/8a2a7.svg`

/* ------------------------------------------------------------------ */
/* Clickable wrapper — appends the shared `.proto-hotspot` affordance   */
/* on hover so wizard rows read exactly like the rest of the prototype. */
/* ------------------------------------------------------------------ */

type ClickableProps = HTMLAttributes<HTMLDivElement> & { className: string }

function Clickable({ className, children, ...rest }: ClickableProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      {...rest}
      className={cx(className, hovered && 'proto-hotspot')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Chips — verbatim `1ST Chip` / `Required` from Figma                  */
/* ------------------------------------------------------------------ */

function RequiredChip() {
  return (
    <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-[53px]" data-name="Heading">
      <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[54px]" data-name="Required">
        <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left w-[56px]">
          <p className="leading-[20px]">Required</p>
        </div>
      </div>
    </div>
  )
}

function ValueChip({ value }: { value: FieldValue }) {
  return (
    <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-name="1ST Chip">
      <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-name="parent-content">
        <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-name="padding-text">
          <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/700,#272199)] text-left whitespace-pre">
            {value.label}
          </p>
        </div>
      </div>
      {value.sub && (
        <div className="bg-[var(--\(new\)-primary\/solid\/700,#272199)] content-stretch flex h-full items-center px-[var(--chip\/padding\/medium,6px)] relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-name="child-content">
          <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-name="padding-text">
            <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral.solidColor,#f9fafe)] text-left whitespace-nowrap">
              {value.sub}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

function MenuDots() {
  return (
    <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-name="menu">
      <div className="relative shrink-0 size-[16px]" data-name="menu">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* "deal card (Global)" — Deal line info row                            */
/* ------------------------------------------------------------------ */

const CARD_BASE = String.raw`border border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0`
const CARD_BORDER_IDLE = String.raw`border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))]`
const CARD_BORDER_OPEN = String.raw`border-[var(--\(new\)-primary\/solid\/600,#2c24c3)]`
const CARD_FILL_IDLE = String.raw`absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]`
const CARD_FILL_OPEN = String.raw`absolute bg-[var(--\(new\)-primary\/solid\/50,#f4f5ff)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]`
const LABEL_IDLE = String.raw`text-[color:var(--\(new\)-text\/primary,#131221)]`
const LABEL_OPEN = String.raw`text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)]`
const LABEL_BASE = String.raw`[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-ellipsis text-left whitespace-nowrap`

type InfoRowProps = {
  field: FieldKey
  icon: string
  label: string
  value?: FieldValue
  open: boolean
  rowWidth: string
  nodeId: string
  onOpen: (field: FieldKey) => void
}

function InfoRow({ field, icon, label, value, open, rowWidth, nodeId, onOpen }: InfoRowProps) {
  return (
    <Clickable
      className={cx(CARD_BASE, rowWidth, open ? CARD_BORDER_OPEN : CARD_BORDER_IDLE)}
      data-node-id={nodeId}
      data-name="deal card (Global)"
      data-field={field}
      onClick={() => onOpen(field)}
    >
      <div aria-hidden className={open ? CARD_FILL_OPEN : CARD_FILL_IDLE} />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Item list">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Main heading">
          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="tile-heading">
            <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="tile-type">
              <div className="relative shrink-0 size-[16px]" data-name="location">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-name="Heading">
                <div className={cx(LABEL_BASE, open ? LABEL_OPEN : LABEL_IDLE)}>
                  <p className="leading-[20px] overflow-hidden text-ellipsis">{label}</p>
                </div>
              </div>
              {!value && <RequiredChip />}
            </div>
            {value && <ValueChip value={value} />}
            <MenuDots />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
    </Clickable>
  )
}

/** The non-interactive "Deal line 1" name row that heads the Deal line info list. */
function DealNameRow({ rowWidth }: { rowWidth: string }) {
  return (
    <div className={cx(CARD_BASE, rowWidth, CARD_BORDER_IDLE)} data-node-id="7547:3477" data-name="deal card (Global)">
      <div aria-hidden className={CARD_FILL_IDLE} />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Item list">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Main heading">
          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="tile-heading">
            <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="tile-type">
              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-name="Heading">
                <div className={cx(LABEL_BASE, LABEL_IDLE)}>
                  <p className="leading-[20px] overflow-hidden text-ellipsis">Deal line 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* "deal card (Global)" — Filters row (dashed / selected / filled)      */
/* ------------------------------------------------------------------ */

const FILTER_EMPTY_BASE = String.raw`content-stretch flex h-[32px] items-center overflow-clip px-[4px] py-[2px] relative rounded-[var(--radius\/md,6px)] shrink-0 w-full border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)]`
const FILTER_DASHED = String.raw`bg-[var(--\(new\)-neutral\/solid\/50,white)] border-dashed`
const FILTER_SELECTED = String.raw`bg-[var(--\(new\)-primary\/solid\/50,#f4f5ff)] border-solid`

/** Dashed "add this filter" row, and its solid selected variant while open. */
function FilterEmptyRow({
  icon,
  label,
  open,
  nodeId,
  onClick,
}: {
  icon: string
  label: string
  open: boolean
  nodeId: string
  onClick?: () => void
}) {
  const inner = (
    <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] h-[28px] items-center relative shrink-0 w-full" data-name="tile-heading">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="tile-type">
        <div className="relative shrink-0 size-[16px]" data-name="+ plus add">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[4px] relative">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium justify-end leading-[0] min-w-px not-italic overflow-hidden relative text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden text-ellipsis">{label}</p>
          </div>
        </div>
      </div>
    </div>
  )
  const className = cx(FILTER_EMPTY_BASE, open ? FILTER_SELECTED : FILTER_DASHED)
  if (!onClick) {
    return (
      <div className={className} data-node-id={nodeId} data-name="deal card (Global)">
        {inner}
      </div>
    )
  }
  return (
    <Clickable className={className} data-node-id={nodeId} data-name="deal card (Global)" onClick={onClick}>
      {inner}
    </Clickable>
  )
}

/** Filled filter row — solid card with the applied-value chip, e.g. Format. */
function FilterFilledRow({
  icon,
  label,
  value,
  nodeId,
  onClick,
}: {
  icon: string
  label: string
  value: FieldValue
  nodeId: string
  onClick: () => void
}) {
  return (
    <Clickable
      className={cx(CARD_BASE, String.raw`w-full`, CARD_BORDER_IDLE)}
      data-node-id={nodeId}
      data-name="deal card (Global)"
      onClick={onClick}
    >
      <div aria-hidden className={CARD_FILL_IDLE} />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Item list">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Main heading">
          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="tile-heading">
            <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="tile-type">
              <div className="relative shrink-0 size-[16px]" data-name="location">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-name="Heading">
                <div className={cx(LABEL_BASE, LABEL_IDLE)}>
                  <p className="leading-[20px] overflow-hidden text-ellipsis">{label}</p>
                </div>
              </div>
            </div>
            <ValueChip value={value} />
            <MenuDots />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
    </Clickable>
  )
}

/* ------------------------------------------------------------------ */
/* Section scaffolding                                                  */
/* ------------------------------------------------------------------ */

function SectionHeading({ title, icon, bold }: { title: string; icon: string; bold: boolean }) {
  return (
    <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-name="Heading">
      <div
        className={cx(
          String.raw`[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left`,
          bold ? String.raw`font-semibold` : String.raw`font-normal`,
        )}
      >
        <p className="leading-[20px]">{title}</p>
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-name="icon button">
        <div className="relative shrink-0 size-[16px]" data-name="icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
        </div>
      </div>
    </div>
  )
}

/** An expanded accordion section (Deal line info / Targets / Filters). */
function OpenSection({
  title,
  icon,
  align,
  nodeId,
  children,
}: {
  title: string
  icon: string
  align: string
  nodeId: string
  children: ReactNode
}) {
  return (
    <div
      role="group"
      className={cx(
        String.raw`border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch flex flex-col gap-[5px] pb-[10px] relative shrink-0 w-full`,
        align,
      )}
      data-node-id={nodeId}
      data-name={title}
    >
      <div className="border-0 border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex flex-col h-[25px] items-start pb-[5px] relative shrink-0 w-full" data-name="Section title">
        <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-name="Section title">
          <SectionHeading title={title} icon={icon} bold />
        </div>
      </div>
      {children}
    </div>
  )
}

/** A collapsed accordion section — header only, as Figma ships it. */
function CollapsedSection({ title, nodeId }: { title: string; nodeId: string }) {
  return (
    <div
      role="group"
      className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch flex flex-col items-start pb-[5px] relative shrink-0 w-full"
      data-node-id={nodeId}
      data-name={title}
    >
      <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-name="Section title">
        <SectionHeading title={title} icon={imgChevronDown} bold={false} />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* The strip                                                            */
/* ------------------------------------------------------------------ */

export type DealStripProps = {
  width: WizardWidth
  values: WizardValues
  openField: FieldKey | null
  onOpen: (field: FieldKey) => void
}

export default function DealStrip({ width, values, openField, onOpen }: DealStripProps) {
  const isNg = width === 'ng'
  // NG (1512) right-aligns the Deal line info rows at a fixed 348px inside a
  // 600-wide strip; PG (1620) stretches them across its 386-wide strip.
  const align = isNg ? String.raw`items-end` : String.raw`items-start`
  const rowWidth = isNg ? String.raw`w-[348px]` : String.raw`w-full`

  return (
    <div
      className={cx(
        String.raw`absolute bg-white content-stretch drop-shadow-[0px_4px_1px_rgba(15,23,41,0.06),0px_4px_20px_rgba(15,23,41,0.06)] flex flex-col items-start px-[16px] rounded-[14px]`,
        isNg ? String.raw`h-[930px] left-[65px] top-[46px] w-[600px]` : String.raw`h-[930px] left-[65px] top-[44px] w-[386px]`,
      )}
      data-name="deal strip (full)"
    >
      <div className="content-stretch flex flex-col gap-[10px] h-[892px] items-start relative shrink-0 w-full" data-name="Panel">
        {/* deal strip header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="deal strip header">
            <div className="content-stretch flex flex-col items-start pr-[8px] py-[16px] relative shrink-0 w-full" data-name="deal strip header">
              <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Header">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium justify-end leading-[0] min-w-px not-italic relative text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)]">
                  <p className="leading-[20px]">Deal line 1</p>
                </div>
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  {[imgIconDuplicate, imgIconEdit, imgIconDelete].map((icon) => (
                    <div key={icon} className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-name="icon button">
                      <div className="relative shrink-0 size-[16px]" data-name="icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 — Deal line info */}
        <OpenSection title="Deal line info" icon={imgChevronUp} align={align} nodeId="7651:18105">
          <div className={cx(String.raw`content-stretch flex flex-col gap-[4px] relative shrink-0`, align, !isNg && String.raw`w-full`)}>
            <DealNameRow rowWidth={rowWidth} />
            <InfoRow field="schedule" icon={imgCalendar} label="Schedule" value={values.schedule} open={openField === 'schedule'} rowWidth={rowWidth} nodeId="7547:3713" onOpen={onOpen} />
            <InfoRow field="environment" icon={imgEnvironementChannel} label="Environment " value={values.environment} open={openField === 'environment'} rowWidth={rowWidth} nodeId="7547:43523" onOpen={onOpen} />
            <InfoRow field="dsp" icon={imgBriefcase} label="DSP" value={values.dsp} open={openField === 'dsp'} rowWidth={rowWidth} nodeId="7547:43066" onOpen={onOpen} />
            <InfoRow field="cpm" icon={imgPound} label="CPM" value={values.cpm} open={openField === 'cpm'} rowWidth={rowWidth} nodeId="7547:43980" onOpen={onOpen} />
          </div>
        </OpenSection>

        {/* Section 3 — Filters */}
        <OpenSection title="Filters" icon={imgChevronUpAlt} align={align} nodeId="7651:18294">
          <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full">
            <FilterEmptyRow icon={imgTable} label="Frame list" open={false} nodeId="7651:18294;7547:3477" />
            {values.format ? (
              <FilterFilledRow icon={imgFormat} label="Format" value={values.format} nodeId="7651:18294;7547:3713" onClick={() => onOpen('format')} />
            ) : (
              <FilterEmptyRow icon={imgFormat} label="Format" open={openField === 'format'} nodeId="7651:18294;7547:3713" onClick={() => onOpen('format')} />
            )}
            {values.location ? (
              <FilterFilledRow icon={imgLocation} label="Location" value={values.location} nodeId="7651:18294;7547:43523" onClick={() => onOpen('location')} />
            ) : (
              <FilterEmptyRow icon={imgLocation} label="Location" open={openField === 'location'} nodeId="7651:18294;7547:43523" onClick={() => onOpen('location')} />
            )}
            <FilterEmptyRow icon={imgFlag} label="Venue taxonomy" open={false} nodeId="7651:18294;7547:43066" />
            <FilterEmptyRow icon={imgSquareFour} label="Visual units " open={false} nodeId="7651:18294;7547:43980" />
            <FilterEmptyRow icon={imgTags} label="Tags" open={false} nodeId="7651:18294;7547:44216" />
          </div>
        </OpenSection>

        <CollapsedSection title="Data targeting" nodeId="7651:18360" />
        <CollapsedSection title="Apply services" nodeId="7651:18426" />
      </div>
    </div>
  )
}
