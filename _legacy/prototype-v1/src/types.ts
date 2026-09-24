export type FrameId = string  // opaque — comes from registry keys

export type DealType = 'ng-floor' | 'ng-fixed' | 'pg'
export type View = 'overview' | 'map'

export type Action = {
  /** debug label */
  label: string
  /** transition to another frame id directly */
  to?: FrameId
  /** toggle the view (overview <-> map) — router resolves the twin */
  toggleView?: View
  /** switch deal type — router resolves the twin */
  setDealType?: DealType
  /** advance to next / previous step in STEPS */
  step?: 'next' | 'prev'
  /** jump to a named step */
  toStep?: string
}

export type FrameEntry = {
  id: FrameId
  designWidth: number
  designHeight: number
  Component: React.ComponentType
  /** map of data-node-id (from the pasted Figma JSX) → action to run on click */
  actions: Record<string, Action>
  /** short human name for the toolbar chip */
  label: string
  /** flow step this frame captures — router uses this to find twins */
  step: string
  /** deal type this frame belongs to */
  dealType: DealType | 'any'
  /** view this frame renders in */
  view: View
  /** ordering within the deal-type × view row (informational; STEPS is truth) */
  order: number
}
