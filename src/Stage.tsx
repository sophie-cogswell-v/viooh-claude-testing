import { useEffect, useRef, useState, type ReactNode } from 'react'

type StageProps = {
  designWidth: number
  designHeight: number
  children: ReactNode
}

/**
 * Scales its child (a Figma frame with fixed px dimensions) to fit the
 * available viewport on BOTH axes and centers it — the prototype should
 * fill the browser tab as much as possible instead of pinning to a fixed
 * width and leaving a tall scrollable gutter underneath. Never scales
 * above 1x (no blurry upscaling on huge monitors).
 *
 * Centering is computed as explicit pixel `left`/`top` offsets in JS
 * (not `left: 50%` + `translate(-50%,-50%)`) — percentage-based centering
 * combined with a sibling `scale()` transform measured correctly via
 * getBoundingClientRect in this environment, but visibly mispainted by at
 * least one screenshot/compositor path, leaving the frame pinned to the
 * left edge instead of centered. Plain pixel offsets with
 * `transform-origin: 0 0` sidestep that entirely.
 */
export default function Stage({ designWidth, designHeight, children }: StageProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ scale: 1, left: 0, top: 0 })

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const compute = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      const scale = Math.min(w / designWidth, h / designHeight, 1)
      const left = Math.max(0, (w - designWidth * scale) / 2)
      const top = Math.max(0, (h - designHeight * scale) / 2)
      setBox({ scale, left, top })
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [designWidth, designHeight])

  return (
    <div ref={wrapRef} className="size-full relative overflow-hidden">
      <div
        className="absolute"
        style={{
          left: box.left,
          top: box.top,
          width: designWidth,
          height: designHeight,
          transform: `scale(${box.scale})`,
          transformOrigin: '0 0',
        }}
      >
        {children}
      </div>
    </div>
  )
}
