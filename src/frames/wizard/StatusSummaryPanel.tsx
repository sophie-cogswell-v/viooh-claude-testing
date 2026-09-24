// The right-hand "Summary panel" once a deal line exists — Figma frames
// 396:138127 (New / Show availability) plus the status-lifecycle branch
// frames (Pending / Approved-Live / Rejected / Terminated / Ended,
// IBSiGNVDHcgtYtewgjXI5j, "Concept 1"). Same Availability/Pricing/
// Distribution cards every captured status reuses verbatim — only the
// status chip, the action buttons, and whether "Check availability" is
// still live change per status.

const assetPathPrefix = '/figma-assets'
const imgChip = `${assetPathPrefix}/d6070.svg`
const imgIcon11 = `${assetPathPrefix}/c283b.svg`
const imgStartIcon = `${assetPathPrefix}/39b25.svg`
const imgVector = `${assetPathPrefix}/7099a.svg`
const imgIcon13 = `${assetPathPrefix}/8b713.svg`
const imgIcon14 = `${assetPathPrefix}/08f23.svg`
const imgIcon12 = `${assetPathPrefix}/03caf.svg`

export type LifecycleStatus = 'new' | 'pending' | 'live' | 'rejected' | 'terminated' | 'ended'

const STATUS_META: Record<LifecycleStatus, { label: string; fg: string; bg: string }> = {
  new: { label: 'New', fg: '#5117be', bg: 'rgba(110,46,228,0.05)' },
  pending: { label: 'Pending', fg: '#B87700', bg: '#FFF3D9' },
  live: { label: 'Live', fg: '#0E7E4E', bg: '#DEF5E9' },
  rejected: { label: 'Rejected', fg: '#C43C3C', bg: '#FDE8E8' },
  terminated: { label: 'Terminated', fg: '#605F6B', bg: 'rgba(19,18,33,0.05)' },
  ended: { label: 'Ended', fg: '#605F6B', bg: 'rgba(19,18,33,0.05)' },
}

type ActionButtonProps = { label: string; onClick?: () => void; primary?: boolean; disabled?: boolean }

function ActionButton({ label, onClick, primary, disabled }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        'h-[24px] px-[8px] rounded-[4px] text-[13px] font-medium transition-all ' +
        (disabled
          ? 'bg-[#f3f3f5] text-[#bab9c3] cursor-not-allowed'
          : primary
            ? 'bg-[#15115e] text-[#f4f5ff] shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] hover:brightness-110 cursor-pointer'
            : 'border border-[rgba(19,18,33,0.1)] bg-white text-[#2c24c3] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] hover:bg-[#f4f5ff] cursor-pointer')
      }
    >
      {label}
    </button>
  )
}

export type StatusSummaryPanelProps = {
  status: LifecycleStatus
  dealType: 'ng' | 'pg'
  cpm: number
  checking: boolean
  onCheckAvailability: () => void
  onConfirm: () => void
  onReject: () => void
  onSendForApproval: () => void
  onTerminate: () => void
}

export default function StatusSummaryPanel({
  status,
  dealType,
  cpm,
  checking,
  onCheckAvailability,
  onConfirm,
  onReject,
  onSendForApproval,
  onTerminate,
}: StatusSummaryPanelProps) {
  const meta = STATUS_META[status]
  const availLabel = dealType === 'pg' ? 'Allocation' : 'Availability'
  const checkLabel = dealType === 'pg' ? 'Check Allocation' : 'Check availability'
  const canCheck = status === 'new' || status === 'pending' || status === 'live'
  const min = Math.max(0, cpm - 2)
  const max = cpm + 1
  const avg = Math.max(0, cpm - 1)

  return (
    <div className="bg-white border border-[#e5e5eb] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full panel-pop-in">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[10px] pt-[12px] px-[10px] relative shrink-0 w-full gap-[10px]">
        <div className="flex items-center justify-between w-full">
          <div
            className="flex h-[24px] items-center justify-center rounded-[999px] px-[6px] gap-[4px]"
            style={{ background: meta.bg }}
          >
            <img alt="" className="size-[16px]" src={imgChip} style={{ filter: 'none' }} />
            <span className="text-[13px]" style={{ color: meta.fg }}>
              {meta.label}
            </span>
          </div>
          <div className="flex gap-[5px] items-center">
            {status === 'new' && (
              <>
                <ActionButton label="Send for approval" onClick={onSendForApproval} />
                <ActionButton label="Confirm" onClick={onConfirm} primary />
              </>
            )}
            {status === 'pending' && (
              <>
                <ActionButton label="Reject" onClick={onReject} />
                <ActionButton label="Confirm" onClick={onConfirm} primary />
              </>
            )}
            {status === 'live' && <ActionButton label="Terminate" onClick={onTerminate} />}
            {status === 'rejected' && <ActionButton label="Send for approval" onClick={onSendForApproval} primary />}
          </div>
        </div>

        <div className="bg-[rgba(19,18,33,0.05)] flex items-center justify-center p-[2px] rounded-[8px] w-full">
          <div className="flex-1 h-[32px] flex items-center justify-center text-[13px] font-medium text-[#15115e] rounded-[6px]">
            Campaign
          </div>
          <div
            className="flex-1 h-[32px] flex items-center justify-center text-[13px] font-medium text-[#15115e] rounded-[6px] bg-white shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] border border-[rgba(19,18,33,0.1)]"
          >
            Deal line
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-[8px] items-start overflow-clip pb-[16px] px-[10px] relative shrink-0 w-full">
        <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          <div className="drop-shadow-[0px_3px_5px_rgba(44,36,195,0.1)] flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="text-[13px] font-medium text-[#2c24c3]">{availLabel}</span>
              <button className="flex items-center justify-center size-[24px] rounded-[4px]">
                <img alt="" className="size-[16px]" src={imgIcon11} />
              </button>
            </div>
            <div className="flex flex-col gap-[10px] items-start w-full">
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] text-[#131221]">Frames</span>
                <span className="text-[17px] text-[#121726]">2,665</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] text-[#42414e]">Available</span>
                <span className="text-[14px] text-[#42414e]">2,665</span>
              </div>
            </div>
          </div>
          <div className="flex gap-[10px] items-start w-full">
            <button className="bg-[rgba(44,36,195,0.05)] flex-1 gap-[4px] h-[36px] flex items-center justify-center rounded-[6px] text-[13px] font-medium text-[#2c24c3] hover:brightness-95 cursor-pointer">
              <img alt="" className="size-[16px]" src={imgStartIcon} />
              Frame list
            </button>
            <button
              onClick={onCheckAvailability}
              disabled={!canCheck || checking}
              className={
                'flex-1 gap-[4px] h-[36px] flex items-center justify-center rounded-[6px] text-[13px] font-medium transition-colors ' +
                (canCheck && !checking
                  ? 'bg-[rgba(44,36,195,0.05)] text-[#2c24c3] hover:brightness-95 cursor-pointer'
                  : 'bg-[#f3f3f5] text-[#bab9c3] cursor-not-allowed')
              }
            >
              <img alt="" className="size-[16px]" style={{ opacity: canCheck && !checking ? 1 : 0.4 }} src={imgStartIcon} />
              {checkLabel}
            </button>
          </div>
          <div className="bg-[#edf0f5] h-px w-full" />
        </div>

        <div className="flex flex-col gap-[10px] items-start py-[10px] w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-[13px] font-semibold text-[#131221]">Pricing</span>
            <img alt="" className="size-[16px]" src={imgIcon12} />
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[11px] text-[#42414e]">CPM entered</span>
            <span className="text-[22px] font-semibold text-[#121726]">£{cpm.toFixed(0)}</span>
          </div>
          <div className="bg-[#f6f6fa] flex items-start px-[12px] py-[10px] rounded-[8px] w-full">
            {[
              ['Min', min],
              ['Max', max],
              ['Avg', avg],
            ].map(([lbl, val]) => (
              <div key={lbl as string} className="flex-1 flex flex-col gap-[2px] items-center justify-center">
                <span className="text-[11px] font-medium text-[#9499a8]">{lbl}</span>
                <span className="text-[14px] font-semibold text-[#121726]">£{val}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-[6px] items-start w-full">
            <img alt="" className="size-[13px] mt-[2px]" src={imgVector} />
            <span className="flex-1 text-[12px] text-[#42414e]">
              Your CPM is 34% below the average for these frames.
            </span>
          </div>
          <div className="bg-[#edf0f5] h-px w-full" />
        </div>

        <div className="flex items-center justify-between py-[10px] w-full">
          <span className="text-[13px] font-semibold text-[#131221]">Distribution</span>
          <div className="flex items-center gap-[4px]">
            <button className="flex items-center justify-center size-[24px] rounded-[4px]">
              <img alt="" className="size-[16px]" src={imgIcon13} />
            </button>
            <button className="flex items-center justify-center size-[24px] rounded-[4px]">
              <img alt="" className="size-[16px]" src={imgIcon14} />
            </button>
            <button className="flex items-center justify-center size-[24px] rounded-[4px]">
              <img alt="" className="size-[16px]" src={imgIcon12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
