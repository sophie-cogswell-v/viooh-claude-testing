import { useCallback, useMemo, useState } from 'react'
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

export default function App() {
  const [step, setStep] = useState<Step>('campaign-empty')
  const [dealType, setDealType] = useState<DealType>('ng-floor')
  const [view, setView] = useState<View>('overview')

  const frame = findFrame(dealType, view, step)
  const { Component, designWidth, designHeight, actions: frameActions } = frame

  // Merge global + frame actions once per frame render
  const actions = useMemo(
    () => ({ ...GLOBAL_ACTIONS, ...frameActions }),
    [frameActions],
  )

  // ref-callback state so useFrameClicks re-runs once the DOM node mounts
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  const onHit = useCallback(
    (action: Action) => {
      if (action.setDealType) {
        setDealType(action.setDealType)
        return
      }
      if (action.toggleView) {
        setView(action.toggleView)
        return
      }
      if (action.step === 'next') {
        setStep((s) => nextStep(s))
        return
      }
      if (action.step === 'prev') {
        setStep((s) => prevStep(s))
        return
      }
      if (action.toStep) {
        if ((STEPS as readonly string[]).includes(action.toStep)) {
          setStep(action.toStep as Step)
        }
        return
      }
    },
    [],
  )

  useFrameClicks(container, actions, onHit)

  return (
    <div className="min-h-screen bg-[#F3F3F5]">
      {/* Floating toolbar — prototype navigation */}
      <div className="fixed top-3 left-3 z-50 flex gap-2 items-center flex-wrap">
        <button
          onClick={() => setStep((s) => prevStep(s))}
          disabled={STEPS.indexOf(step) === 0}
          className="px-3 py-1 rounded-full border border-[#E5E8ED] bg-white text-xs font-medium text-[#42414E] shadow-sm disabled:opacity-40"
        >
          ← Prev
        </button>
        <button
          onClick={() => setStep((s) => nextStep(s))}
          disabled={STEPS.indexOf(step) === STEPS.length - 1}
          className="px-3 py-1 rounded-full border border-[#E5E8ED] bg-white text-xs font-medium text-[#42414E] shadow-sm disabled:opacity-40"
        >
          Next →
        </button>

        <div className="text-xs text-[#42414E] bg-white border border-[#E5E8ED] px-3 py-1 rounded-full shadow-sm">
          Step <strong className="text-[#131221]">
            {STEPS.indexOf(step) + 1}/{STEPS.length}
          </strong>
          <span className="mx-1.5 text-[#C7C5D6]">·</span>
          {step}
          <span className="mx-1.5 text-[#C7C5D6]">·</span>
          {frame.label}
        </div>

        <button
          onClick={() => {
            setStep('campaign-empty')
            setDealType('ng-floor')
            setView('overview')
          }}
          className="px-3 py-1 rounded-full border border-[#E5E8ED] bg-white text-xs font-medium text-[#42414E] shadow-sm"
        >
          Reset
        </button>
      </div>

      <div ref={setContainer}>
        <Stage designWidth={designWidth} designHeight={designHeight}>
          <Component />
        </Stage>
      </div>
    </div>
  )
}
