import type { FrameEntry } from '../types'
import NgOverviewEmpty from './NgOverviewEmpty'
import NgOverviewEnvironmentStep from './NgOverviewEnvironmentStep'
import NgOverviewCpmStep from './NgOverviewCpmStep'
import NgOverviewLater from './NgOverviewLater'
import NgMapEmpty from './NgMapEmpty'
import PgOverviewEmpty from './PgOverviewEmpty'
import PgOverviewScheduleStep from './PgOverviewScheduleStep'
import PgMapEmpty from './PgMapEmpty'
import PgMapLiveDelivery from './PgMapLiveDelivery'

/**
 * Frame catalogue. Each entry knows the native Figma dimensions plus the
 * hotspot rectangles that let the user navigate between frames.
 *
 * Hotspot coords are in % of the frame so they scale with <Stage>.
 * Toggle "Show hotspots" in the top toolbar to see them and tune.
 */

// Reused hotspot rectangles that live in the top bar of every frame.
const TOP_OVERVIEW_TOGGLE = { x: 79.0, y: 0.9, w: 6.8, h: 3.2, label: 'Overview', toggleView: 'overview' as const }
const TOP_MAP_TOGGLE     = { x: 85.9, y: 0.9, w: 6.4, h: 3.2, label: 'Map',      toggleView: 'map' as const }
// On the wider map frames (1620px) the toggles are further left.
const TOP_OVERVIEW_MAP_WIDE = { x: 73.5, y: 0.9, w: 6.8, h: 3.2, label: 'Overview', toggleView: 'overview' as const }
const TOP_MAP_TOGGLE_WIDE   = { x: 80.3, y: 0.9, w: 6.4, h: 3.2, label: 'Map',      toggleView: 'map' as const }

const PILL_TABS = [
  { x: 4.6,  y: 21.6, w: 4.0, h: 2.5, label: 'NG Floor', setDealType: 'ng-floor' as const },
  { x: 8.7,  y: 21.6, w: 4.0, h: 2.5, label: 'NG Fixed', setDealType: 'ng-fixed' as const },
  { x: 12.7, y: 21.6, w: 2.5, h: 2.5, label: 'PG',       setDealType: 'pg' as const       },
]

export const FRAMES: Record<string, FrameEntry> = {
  'ng-overview-empty': {
    id: 'ng-overview-empty',
    label: 'NG · empty campaign',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewEmpty,
    hotspots: [
      { x: 4.5, y: 51.5, w: 21.5, h: 4.8, label: 'Skip', to: 'ng-overview-env-step' },
      TOP_OVERVIEW_TOGGLE, TOP_MAP_TOGGLE,
      ...PILL_TABS,
    ],
  },
  'ng-overview-env-step': {
    id: 'ng-overview-env-step',
    label: 'NG · Environment step',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewEnvironmentStep,
    hotspots: [
      { x: 41.5, y: 62.5, w: 5.5, h: 4.5, label: 'Cancel', to: 'ng-overview-empty' },
      { x: 60.5, y: 62.5, w: 5.5, h: 4.5, label: 'Next → CPM', to: 'ng-overview-cpm-step' },
      TOP_OVERVIEW_TOGGLE, TOP_MAP_TOGGLE,
    ],
  },
  'ng-overview-cpm-step': {
    id: 'ng-overview-cpm-step',
    label: 'NG · CPM step',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewCpmStep,
    hotspots: [
      { x: 41.5, y: 68.5, w: 5.5, h: 4.5, label: 'Cancel', to: 'ng-overview-env-step' },
      { x: 60.5, y: 68.5, w: 5.5, h: 4.5, label: 'Next → filled', to: 'ng-overview-later' },
      TOP_OVERVIEW_TOGGLE, TOP_MAP_TOGGLE,
    ],
  },
  'ng-overview-later': {
    id: 'ng-overview-later',
    label: 'NG · deal validated',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewLater,
    hotspots: [
      // No Step panel here; back to empty via New deal line chip
      { x: 43.3, y: 1.3, w: 7.6, h: 3.2, label: '+ New deal line', to: 'ng-overview-empty' },
      TOP_OVERVIEW_TOGGLE, TOP_MAP_TOGGLE,
    ],
  },
  'ng-map-empty': {
    id: 'ng-map-empty',
    label: 'NG · Map empty',
    designWidth: 1620, designHeight: 982,
    Component: NgMapEmpty,
    hotspots: [
      { x: 4.5, y: 48.0, w: 20.0, h: 4.8, label: 'Skip', to: 'ng-overview-env-step' },
      TOP_OVERVIEW_MAP_WIDE, TOP_MAP_TOGGLE_WIDE,
    ],
  },
  'pg-overview-empty': {
    id: 'pg-overview-empty',
    label: 'PG · empty campaign',
    designWidth: 1512, designHeight: 982,
    Component: PgOverviewEmpty,
    hotspots: [
      { x: 4.5, y: 51.5, w: 21.5, h: 4.8, label: 'Continue', to: 'pg-overview-schedule-step' },
      TOP_OVERVIEW_TOGGLE, TOP_MAP_TOGGLE,
      ...PILL_TABS,
    ],
  },
  'pg-overview-schedule-step': {
    id: 'pg-overview-schedule-step',
    label: 'PG · Schedule step',
    designWidth: 1512, designHeight: 982,
    Component: PgOverviewScheduleStep,
    hotspots: [
      { x: 41.5, y: 82.5, w: 5.5, h: 4.5, label: 'Cancel', to: 'pg-overview-empty' },
      { x: 60.5, y: 82.5, w: 5.5, h: 4.5, label: 'Next → Live', to: 'pg-map-live-delivery' },
      TOP_OVERVIEW_TOGGLE, TOP_MAP_TOGGLE,
    ],
  },
  'pg-map-empty': {
    id: 'pg-map-empty',
    label: 'PG · Map empty',
    designWidth: 1620, designHeight: 982,
    Component: PgMapEmpty,
    hotspots: [
      { x: 4.5, y: 48.0, w: 20.0, h: 4.8, label: 'Continue', to: 'pg-overview-schedule-step' },
      TOP_OVERVIEW_MAP_WIDE, TOP_MAP_TOGGLE_WIDE,
    ],
  },
  'pg-map-live-delivery': {
    id: 'pg-map-live-delivery',
    label: 'PG · live w/ delivery',
    designWidth: 1512, designHeight: 982,
    Component: PgMapLiveDelivery,
    hotspots: [
      { x: 43.3, y: 1.3, w: 7.6, h: 3.2, label: '+ New deal line', to: 'pg-overview-empty' },
      TOP_OVERVIEW_TOGGLE, TOP_MAP_TOGGLE,
    ],
  },
}

/**
 * Router: which frame is "current" once the user changes deal type or toggles
 * Overview/Map. Grouped by stage of the flow so a Skip → Env → CPM sequence
 * survives the toggle.
 */
export type FlowStage = 'empty' | 'env-step' | 'cpm-step' | 'later'

export function stageOf(id: string): FlowStage {
  if (id.endsWith('empty')) return 'empty'
  if (id.includes('env-step') || id.includes('schedule-step')) return 'env-step'
  if (id.includes('cpm-step')) return 'cpm-step'
  return 'later'
}

export function frameFor(dealType: string, view: string, stage: FlowStage): string {
  const isPg = dealType === 'pg'
  const isMap = view === 'map'
  if (stage === 'empty') {
    if (isMap) return isPg ? 'pg-map-empty' : 'ng-map-empty'
    return isPg ? 'pg-overview-empty' : 'ng-overview-empty'
  }
  if (stage === 'env-step') {
    // PG has a Schedule-step first; NG has Environment first
    if (isPg) return 'pg-overview-schedule-step'
    return 'ng-overview-env-step'
  }
  if (stage === 'cpm-step') {
    return isPg ? 'pg-overview-schedule-step' : 'ng-overview-cpm-step'
  }
  // 'later' — PG jumps to its Live map view, NG to its filled overview
  if (isPg) return 'pg-map-live-delivery'
  return 'ng-overview-later'
}
