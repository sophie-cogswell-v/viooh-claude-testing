import { useEffect, useRef, useState, type ReactNode } from 'react'

type StageProps = {
  designWidth: number
  designHeight: number
  children: ReactNode
}

/**
 * Scales its child (a Figma frame with fixed px dimensions) to fit the current
 * viewport width while preserving aspect ratio. Keeps the frames pixel-perfect
 * to Figma (no manual reflow) and still adapts to any width — the viewport at
 * 1512px shows the frame at 1:1, narrower widths shrink proportionally.
 *
 * Clicks carry through fine — CSS transforms don't break events.
 */
export default function Stage({ designWidth, designHeight, children }: StageProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const compute = () => {
      const w = el.clientWidth
      setScale(Math.min(1, w / designWidth))
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [designWidth])

  return (
    <div ref={wrapRef} className="w-full">
      <div
        className="relative"
        style={{
          width: designWidth,
          height: designHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          marginBottom: (scale - 1) * designHeight,
        }}
      >
        {children}
      </div>
    </div>
  )
}
