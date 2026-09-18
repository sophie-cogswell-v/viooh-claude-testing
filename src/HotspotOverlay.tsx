import type { Hotspot } from './types'

/**
 * Transparent clickable rectangles positioned by % over a Figma frame,
 * so the frame JSX itself stays verbatim (no onClick handlers grafted in).
 * Enable the visible overlay from the top toolbar for tuning coords.
 */
export default function HotspotOverlay({
  hotspots,
  onHit,
  debug,
}: {
  hotspots: Hotspot[]
  onHit: (h: Hotspot) => void
  debug: boolean
}) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {hotspots.map((h, i) => (
        <button
          key={i}
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onHit(h)
          }}
          className={[
            'absolute pointer-events-auto rounded-md transition-colors cursor-pointer',
            debug
              ? 'bg-[rgba(75,55,232,0.20)] outline outline-2 outline-dashed outline-[rgba(75,55,232,0.7)]'
              : 'hover:bg-[rgba(75,55,232,0.12)] hover:outline hover:outline-2 hover:outline-[rgba(75,55,232,0.5)]',
          ].join(' ')}
          style={{
            left:   `${h.x}%`,
            top:    `${h.y}%`,
            width:  `${h.w}%`,
            height: `${h.h}%`,
          }}
          aria-label={h.label}
        >
          {debug && (
            <span className="absolute top-0 left-1 text-[10px] font-semibold text-[#3A28C6] bg-white px-1 rounded whitespace-nowrap">
              {h.label}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
