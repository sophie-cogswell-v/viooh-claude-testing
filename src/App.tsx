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

/**
 * The prototype shell. On purpose there's no visible Prev/Next toolbar —
 * navigation is meant to come from clicking the actual buttons Figma drew.
 * A discreet Reset chip stays in a corner so a demo can start over quickly,
 * and pressing `d` toggles a debug chip that reports the current step for
 * anyone who wants to know where in the flow they are.
 */
export default function App() {
  const [step, setStep] = useState<Step>('campaign-empty')
  const [dealType, setDealType] = useState<DealType>('ng-floor')
  const [view, setView] = useState<View>('overview')
  const [debug, setDebug] = useState(false)
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'd' && !e.metaKey && !e.ctrlKey) setDebug((d) => !d)
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

      <div ref={setContainer} style={{ viewTransitionName: 'stage' }}>
        <Stage designWidth={designWidth} designHeight={designHeight}>
          <Component />
        </Stage>
      </div>
    </div>
  )
}
