export type FrameId =
  | 'ng-overview-empty'
  | 'ng-overview-env-step'
  | 'ng-overview-cpm-step'
  | 'ng-overview-later'
  | 'ng-map-empty'
  | 'pg-overview-empty'
  | 'pg-overview-schedule-step'
  | 'pg-map-empty'
  | 'pg-map-live-delivery'

export type DealType = 'ng-floor' | 'ng-fixed' | 'pg'
export type View = 'overview' | 'map'

export type Hotspot = {
  /** % from the left of the frame (0-100) */
  x: number
  /** % from the top of the frame (0-100) */
  y: number
  /** width in % of frame width (0-100) */
  w: number
  /** height in % of frame height (0-100) */
  h: number
  /** debug label */
  label: string
  /** transition to another frame id */
  to?: FrameId
  /** toggle the view (overview <-> map) — computed by router */
  toggleView?: View
  /** switch to another deal type — computed by router */
  setDealType?: DealType
}

export type FrameEntry = {
  id: FrameId
  designWidth: number
  designHeight: number
  Component: React.ComponentType
  hotspots: Hotspot[]
  /** short human name for the frame chip in the toolbar */
  label: string
}
