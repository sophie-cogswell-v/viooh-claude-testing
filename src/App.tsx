import { useState } from 'react'
import Stage from './Stage'
import HotspotOverlay from './HotspotOverlay'
import { FRAMES, frameFor, stageOf } from './frames/registry'
import type { DealType, FrameId, Hotspot, View } from './types'

export default function App() {
  const [frameId, setFrameId] = useState<FrameId>('ng-overview-empty')
  const [dealType, setDealType] = useState<DealType>('ng-floor')
  const [view, setView] = useState<View>('overview')
  const [debug, setDebug] = useState(false)

  const frame = FRAMES[frameId]
  const { Component, designWidth, designHeight, hotspots } = frame

  function handleHit(h: Hotspot) {
    // The router keeps you at the same "stage" of the flow when you toggle
    // deal type or view — so a click on Map from the CPM step lands on the
    // map version of that stage, not on empty.
    const stage = stageOf(frameId)

    if (h.setDealType) {
      setDealType(h.setDealType)
      setFrameId(frameFor(h.setDealType, view, stage) as FrameId)
      return
    }
    if (h.toggleView) {
      setView(h.toggleView)
      setFrameId(frameFor(dealType, h.toggleView, stage) as FrameId)
      return
    }
    if (h.to) setFrameId(h.to)
  }

  const frameIds = Object.keys(FRAMES) as FrameId[]

  return (
    <div className="min-h-screen bg-[#F3F3F5]">
      {/* Floating toolbar */}
      <div className="fixed top-3 left-3 z-50 flex gap-2 items-center flex-wrap">
        <button
          onClick={() => setDebug((d) => !d)}
          className={[
            'px-3 py-1 rounded-full border text-xs font-medium shadow-sm',
            debug
              ? 'border-[#6858F0] bg-[#EFEDFF] text-[#3A28C6]'
              : 'border-[#E5E8ED] text-[#42414E] bg-white',
          ].join(' ')}
        >
          {debug ? 'Hide hotspots' : 'Show hotspots'}
        </button>

        <div className="text-xs text-[#42414E] bg-white border border-[#E5E8ED] px-3 py-1 rounded-full shadow-sm">
          <strong className="text-[#131221]">{frame.label}</strong>
          <span className="mx-1.5 text-[#C7C5D6]">·</span>
          {dealType}
          <span className="mx-1.5 text-[#C7C5D6]">·</span>
          {view}
        </div>

        <label className="text-xs text-[#42414E] bg-white border border-[#E5E8ED] px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
          Jump to:
          <select
            className="bg-transparent focus:outline-none text-[#131221] font-medium"
            value={frameId}
            onChange={(e) => setFrameId(e.target.value as FrameId)}
          >
            {frameIds.map((id) => (
              <option key={id} value={id}>{FRAMES[id].label}</option>
            ))}
          </select>
        </label>

        <button
          onClick={() => {
            setFrameId('ng-overview-empty')
            setDealType('ng-floor')
            setView('overview')
          }}
          className="px-3 py-1 rounded-full border border-[#E5E8ED] text-[#42414E] text-xs font-medium shadow-sm bg-white"
        >
          Reset
        </button>
      </div>

      <Stage designWidth={designWidth} designHeight={designHeight}>
        <Component />
        <HotspotOverlay hotspots={hotspots} onHit={handleHit} debug={debug} />
      </Stage>
    </div>
  )
}
