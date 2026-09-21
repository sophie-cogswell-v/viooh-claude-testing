import { useCallback, useEffect, useMemo, useState } from 'react'
import Stage from './Stage'
import { useFrameClicks } from './useFrameClicks'
import {
  FRAMES,
  GLOBAL_ACTIONS,
  STEPS,
  findFrame,
  nextStep,
  prevStep,
  type Step,
} from './frames/registry'
import type { Action, DealType, View } from './types'

type ViewTransition = { ready: Promise<void>; finished: Promise<void> }

/**
 * Runs a state update inside the native View Transitions API so a frame
 * swap crossfades instead of hard-cutting (Chrome/Edge only — falls back to
 * a plain update everywhere else, same as before this existed).
 *
 * Clicking through the flow quickly starts a new transition before the last
 * one finishes, which the browser resolves by aborting the previous one —
 * that abort rejects its `ready`/`finished` promises as an unhandled
 * rejection unless we swallow them here.
 */
function withViewTransition(update: () => void) {
  const supportsVT = 'startViewTransition' in document
  if (!supportsVT) return update()
  const transition = (
    document as unknown as { startViewTransition: (cb: () => void) => ViewTransition }
  ).startViewTransition(update)
  transition.ready.catch(() => {})
  transition.finished.catch(() => {})
}

/** Human-readable label per step, for the nav toolbar. */
const STEP_LABELS: Record<Step, string> = {
  'campaign-empty': 'Campaign',
  'campaign-expanded': 'Campaign details',
  'deal-created': 'Deal line',
  'schedule-step': 'Schedule',
  'environment-step': 'Environment',
  'environment-selected': 'Environment selected',
  'dsp-step': 'DSP',
  'cpm-step': 'CPM',
  'location-step': 'Location',
  'new-dropdown': 'Send for approval',
  validating: 'Checking availability',
  pending: 'Pending',
  'pending-dropdown': 'Pending — status menu',
  approved: 'Approved',
  live: 'Live',
  'live-dropdown': 'Live — status menu',
  rejected: 'Rejected',
  terminated: 'Terminated',
  ended: 'Ended',
}

/**
 * The prototype shell. Real Figma hotspots still work (clicking the actual
 * buttons Figma drew advances the flow), but for an internal walkthrough
 * they're too easy to miss/mis-click, so a visible Prev/Next toolbar drives
 * the same STEPS list explicitly. A discreet Reset chip stays in a corner so
 * a demo can start over quickly, and pressing `d` toggles a debug chip.
 */
export default function App() {
  const [step, setStep] = useState<Step>('campaign-empty')
  const [dealType, setDealType] = useState<DealType>('ng-floor')
  const [view, setView] = useState<View>('overview')
  const [debug, setDebug] = useState(false)
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) return
      if (e.key === 'd') return setDebug((d) => !d)
      if (e.key === 'ArrowRight') return withViewTransition(() => setStep((s) => nextStep(s)))
      if (e.key === 'ArrowLeft') return withViewTransition(() => setStep((s) => prevStep(s)))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const frame = findFrame(dealType, view, step)
  const { Component, designWidth, designHeight, actions: frameActions } = frame

  const actions = useMemo(
    () => ({ ...GLOBAL_ACTIONS, ...frameActions }),
    [frameActions],
  )

  const onHit = useCallback((action: Action) => {
    if (action.setDealType) return withViewTransition(() => setDealType(action.setDealType!))
    if (action.toggleView) return withViewTransition(() => setView(action.toggleView!))
    if (action.step === 'next') return withViewTransition(() => setStep((s) => nextStep(s)))
    if (action.step === 'prev') return withViewTransition(() => setStep((s) => prevStep(s)))
    if (action.toStep && (STEPS as readonly string[]).includes(action.toStep)) {
      return withViewTransition(() => setStep(action.toStep as Step))
    }
  }, [])

  useFrameClicks(container, actions, onHit)

  return (
    <div className="min-h-screen bg-[#F3F3F5]">
      {/* Reset chip — bottom right, subtle. Cmd-click for a hard start over. */}
      <button
        onClick={() =>
          withViewTransition(() => {
            setStep('campaign-empty')
            setDealType('ng-floor')
            setView('overview')
          })
        }
        title="Restart prototype from step 1"
        className="fixed bottom-3 right-3 z-50 px-3 py-1.5 rounded-full border border-[#E5E8ED] bg-white text-[11px] font-medium text-[#42414E] shadow-sm hover:border-[#6858F0] hover:text-[#4B37E8]"
      >
        Restart
      </button>

      {/* Debug chip — press `d` to toggle. Off by default so the prototype
          feels like the real app while you use it. */}
      {debug && (
        <div className="fixed bottom-3 left-3 z-50 text-[11px] text-[#42414E] bg-white border border-[#E5E8ED] px-3 py-1.5 rounded-full shadow-sm font-mono">
          {STEPS.indexOf(step) + 1}/{STEPS.length} · <strong className="text-[#131221]">{step}</strong> · {frame.label}
          <span className="ml-2 text-[#9391A5]">(press d)</span>
        </div>
      )}

      {/* Prev/Next toolbar — bottom center. Explicit flow control for demos,
          alongside (not instead of) clicking the real Figma hotspots. */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-[#E5E8ED] bg-white/95 backdrop-blur-sm px-1.5 py-1.5 shadow-[0_8px_24px_rgba(15,14,46,0.10)]">
        <button
          onClick={() => withViewTransition(() => setStep((s) => prevStep(s)))}
          disabled={STEPS.indexOf(step) === 0}
          title="Previous step"
          className="flex h-7 w-7 items-center justify-center rounded-full text-[#42414E] transition-colors hover:bg-[#F2F1F7] hover:text-[#131221] disabled:opacity-30 disabled:hover:bg-transparent"
        >
          ←
        </button>
        <div className="px-2 text-[11px] font-medium text-[#42414E] whitespace-nowrap tabular-nums">
          <span className="text-[#9391A5]">{STEPS.indexOf(step) + 1}/{STEPS.length}</span>
          <span className="mx-1.5 text-[#E5E3EE]">·</span>
          <span className="text-[#131221]">{STEP_LABELS[step]}</span>
        </div>
        <button
          onClick={() => withViewTransition(() => setStep((s) => nextStep(s)))}
          disabled={STEPS.indexOf(step) === STEPS.length - 1}
          title="Next step"
          className="flex h-7 w-7 items-center justify-center rounded-full text-[#42414E] transition-colors hover:bg-[#F2F1F7] hover:text-[#131221] disabled:opacity-30 disabled:hover:bg-transparent"
        >
          →
        </button>
      </div>

      <div ref={setContainer} style={{ viewTransitionName: 'stage' }}>
        <Stage designWidth={designWidth} designHeight={designHeight}>
          <Component />
        </Stage>
      </div>
    </div>
  )
}
