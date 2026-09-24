// VIOOH FLOW — Concept 1 (Overview Mode Polish, IBSiGNVDHcgtYtewgjXI5j).
// Built fresh from that Figma file's own frames: Campaign Info Drawer ->
// Deal Line Wizard (Schedule/Environment/DSP/CPM/Targets/Format/Location) ->
// New -> Send for approval -> Pending -> (Reject | Confirm) -> Live ->
// Terminate -> Terminated, with Rejected looping back to Send for approval.
// Every field is real React state; the only simulated "backend" moments are
// Send for approval and Check availability/allocation.

import { useCallback, useState } from 'react'
import Stage from './Stage'
import ChromeNg from './frames/wizard/ChromeNg'
import ChromePg from './frames/wizard/ChromePg'
import CampaignDrawer from './frames/wizard/CampaignDrawer'
import DealLineWizard from './frames/DealLineWizard'
import StatusSummaryPanel, { type LifecycleStatus } from './frames/wizard/StatusSummaryPanel'
import LoadingOverlay from './LoadingOverlay'
import type { WizardValues } from './frames/wizard/model'
import type { DealType } from './types'

type Stage = 'drawer' | 'wizard' | LifecycleStatus

const BACKEND_DELAY_MS = 900

const DEAL_TYPE_META: Record<DealType, { label: string; color: string }> = {
  ng: { label: 'NG', color: '#0E9F8E' },
  pg: { label: 'PG', color: '#4B37E8' },
}

function cpmFromValues(values: WizardValues): number {
  const raw = values.cpm?.label?.replace(/[^0-9.]/g, '')
  const n = raw ? parseFloat(raw) : NaN
  return Number.isFinite(n) ? n : 10
}

export default function App() {
  const [dealType, setDealType] = useState<DealType>('ng')
  const [stage, setStage] = useState<Stage>('drawer')
  const [wizardValues, setWizardValues] = useState<WizardValues>({})
  const [loading, setLoading] = useState(false)
  const [loadingLabel, setLoadingLabel] = useState('')
  const [checking, setChecking] = useState(false)

  const Chrome = dealType === 'pg' ? ChromePg : ChromeNg
  const meta = DEAL_TYPE_META[dealType]

  const restart = useCallback(() => {
    setDealType('ng')
    setStage('drawer')
    setWizardValues({})
    setLoading(false)
    setChecking(false)
  }, [])

  const withLoading = useCallback((label: string, next: () => void) => {
    setLoadingLabel(label)
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      next()
    }, BACKEND_DELAY_MS)
  }, [])

  const onCheckAvailability = useCallback(() => {
    setChecking(true)
    window.setTimeout(() => setChecking(false), BACKEND_DELAY_MS)
  }, [])

  const onSendForApproval = useCallback(() => {
    withLoading(dealType === 'pg' ? 'Sending for validation…' : 'Sending for approval…', () => setStage('pending'))
  }, [withLoading, dealType])

  const onConfirm = useCallback(() => setStage('live'), [])
  const onReject = useCallback(() => setStage('rejected'), [])
  const onTerminate = useCallback(() => setStage('terminated'), [])

  const showWizard = stage === 'drawer' || stage === 'wizard'
  const lifecycleStatus = showWizard ? null : (stage as LifecycleStatus)
  const readOnly = stage === 'terminated' || stage === 'ended'

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#F3F3F5] flex flex-col">
      <div className="shrink-0 h-[3px] transition-colors duration-300" style={{ backgroundColor: meta.color }} />

      <div className="flex-1 min-h-0 relative">
        <Stage designWidth={dealType === 'pg' ? 1620 : 1512} designHeight={982}>
          <Chrome
            dealLineTabLabel={stage === 'drawer' ? null : 'Deal line 1'}
            onNewDealLineClick={() => stage === 'drawer' && setStage('wizard')}
            rightPanel={
              lifecycleStatus && (
                <StatusSummaryPanel
                  status={lifecycleStatus}
                  dealType={dealType}
                  cpm={cpmFromValues(wizardValues)}
                  checking={checking}
                  onCheckAvailability={onCheckAvailability}
                  onConfirm={onConfirm}
                  onReject={onReject}
                  onSendForApproval={onSendForApproval}
                  onTerminate={onTerminate}
                />
              )
            }
          >
            {stage === 'drawer' && (
              <CampaignDrawer dealType={dealType} onDealTypeChange={setDealType} onProceed={() => setStage('wizard')} />
            )}
            {stage !== 'drawer' && (
              <DealLineWizard
                key={dealType}
                width={dealType}
                initialValues={wizardValues}
                onValuesChange={(values) => setWizardValues(values)}
                readOnly={readOnly}
                onComplete={(values) => {
                  setWizardValues(values)
                  setStage('new')
                  // The captured flow shows this happening automatically —
                  // loading, then the availability numbers — right after the
                  // last field is filled, not from a manual "Check
                  // availability" click.
                  withLoading(
                    dealType === 'pg' ? 'Checking allocation…' : 'Checking availability…',
                    () => {},
                  )
                }}
              />
            )}
          </Chrome>
          <LoadingOverlay visible={loading} label={loadingLabel} />
        </Stage>
      </div>

      <div className="shrink-0 relative flex items-center justify-center py-3 px-3">
        <button
          onClick={restart}
          title="Restart prototype"
          className="absolute right-3 px-3 py-2 rounded-full border border-[#E5E8ED] bg-white text-[11px] font-medium text-[#42414E] shadow-sm transition-all hover:border-[#6858F0] hover:text-[#4B37E8] hover:shadow-md active:scale-95"
        >
          Restart
        </button>
        <div className="flex items-center gap-2 rounded-full border border-[#E5E8ED] bg-white/95 backdrop-blur-md px-3 py-2 shadow-[0_8px_24px_rgba(15,14,46,0.10)]">
          <span
            className="flex items-center gap-1.5 rounded-full py-1.5 px-2.5 text-[11px] font-semibold"
            style={{ backgroundColor: `${meta.color}1a`, color: meta.color }}
          >
            <span className="size-[6px] rounded-full" style={{ backgroundColor: meta.color }} />
            {meta.label}
          </span>
          <div className="h-5 w-px bg-[#E5E3EE]" />
          <span className="text-[11px] font-medium text-[#131221] px-1">
            {stage === 'drawer' ? 'Campaign' : stage === 'wizard' ? 'Deal line set-up' : lifecycleStatus}
          </span>
        </div>
      </div>
    </div>
  )
}
