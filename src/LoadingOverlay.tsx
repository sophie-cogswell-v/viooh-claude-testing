const assetPathPrefix = '/figma-assets'
const imgSpinner = `${assetPathPrefix}/6a28a.svg`

type LoadingOverlayProps = {
  visible: boolean
  label: string
}

/**
 * Full-canvas "checking" scrim — the real spinner glyph exported from the
 * Figma "Ended (loading)" frame (node 392:16727, asset 6a28a.svg), not a
 * hand-drawn CSS ring. Figma can only export a single frozen-mid-spin
 * frame of it, so `.spinner-spin` (src/index.css) drives the actual
 * rotation — same convention already used for every other "frozen arc"
 * icon in this codebase.
 *
 * Reused for the two moments the flow actually calls out to a backend:
 * "Send for approval", and "Check availability" / "Check Allocation".
 * Confirm, Terminate, and the Prev/Next scrubber are instant — see App.tsx.
 */
export default function LoadingOverlay({ visible, label }: LoadingOverlayProps) {
  return (
    <div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-white/75 backdrop-blur-[3px] transition-opacity duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-hidden={!visible}
    >
      <img src={imgSpinner} alt="" className="size-[64px] spinner-spin" />
      <div className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#42414E] shadow-[0_8px_24px_rgba(15,14,46,0.12)] border border-[#E5E8ED]">
        {label}
      </div>
    </div>
  )
}
