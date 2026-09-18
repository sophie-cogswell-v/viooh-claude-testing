import type { Action, DealType, FrameEntry, View } from '../types'
import NgOverviewEmpty from './NgOverviewEmpty'
import NgOverviewFrame02 from './NgOverviewFrame02'
import NgOverviewFrame03 from './NgOverviewFrame03'
import NgOverviewScheduleStep from './NgOverviewScheduleStep'
import NgOverviewEnvironmentStep from './NgOverviewEnvironmentStep'
import NgOverviewFrame06 from './NgOverviewFrame06'
import NgOverviewDspStep from './NgOverviewDspStep'
import NgOverviewCpmStep from './NgOverviewCpmStep'
import NgOverviewLater from './NgOverviewLater'
import NgOverviewPending from './NgOverviewPending'
import NgOverviewPendingDropdown from './NgOverviewPendingDropdown'
import NgOverviewLive from './NgOverviewLive'
import NgOverviewLiveDropdown from './NgOverviewLiveDropdown'
import NgOverviewRejected from './NgOverviewRejected'
import NgMapEmpty from './NgMapEmpty'
import NgMapCampaignExpanded from './NgMapCampaignExpanded'
import NgMapDealCreated from './NgMapDealCreated'
import NgMapScheduleStep from './NgMapScheduleStep'
import NgMapEnvironmentStep from './NgMapEnvironmentStep'
import NgMapDspStep from './NgMapDspStep'
import NgMapCpmStep from './NgMapCpmStep'
import NgMapLocationStep from './NgMapLocationStep'
import NgMapDealFilled from './NgMapDealFilled'
import NgMapPending from './NgMapPending'
import NgMapApproved from './NgMapApproved'
import NgMapLive from './NgMapLive'
import NgMapTerminated from './NgMapTerminated'
import PgOverviewEmpty from './PgOverviewEmpty'
import PgOverviewScheduleStep from './PgOverviewScheduleStep'
import PgOverviewLocationStep from './PgMapLiveDelivery'
import PgOverviewApproved from './PgOverviewApproved'
import PgOverviewEnded from './PgOverviewEnded'
import PgMapEmpty from './PgMapEmpty'

/**
 * ─────────────────────────────────────────────────────────────
 *  Registry — one entry per Figma frame pasted into src/frames/
 *
 *  Frames declare their (dealType, view, step) triplet. The step is the
 *  point in the flow the frame captures. Toggling Overview↔Map or the deal
 *  type keeps the same step and looks for the equivalent twin frame.
 *
 *  Interactivity is event-delegated: the frame JSX itself stays verbatim,
 *  useFrameClicks catches clicks and matches against a shared table of
 *  Figma node ids (GLOBAL_ACTIONS below) plus each frame's own overrides.
 * ─────────────────────────────────────────────────────────────
 */

// The left-to-right ordering of the flow. Frames map to one of these steps.
// The Next/Prev buttons walk this list; each step keeps its own dealType×view
// twin resolved by the router below.
export const STEPS = [
  'campaign-empty',        // just landed; campaign details visible
  'campaign-expanded',     // ownership+settings open on top
  'deal-created',          // drawer switched to Deal line info, no step yet
  'schedule-step',         // Schedule row open with calendar
  'environment-step',      // Environment row open with checkboxes
  'environment-selected',  // Airports ticked, still on env step
  'dsp-step',              // DSP row open with radio list
  'cpm-step',              // CPM row open with £ input
  'location-step',         // Data targeting → Location open (PG has more targets)
  'validating',            // spinner while availability resolves
  'pending',               // status = Pending after Send for approval
  'pending-dropdown',      // Pending, status dropdown open (Confirm)
  'approved',              // status = Approved (PG shows Allocation panel)
  'live',                  // status = Live, Line saved toast
  'live-dropdown',         // Live, status dropdown open (Terminate)
  'rejected',              // status = Rejected, drawer disabled
  'ended',                 // status = Ended, drawer disabled
] as const
export type Step = typeof STEPS[number]

/**
 * Instance-segment ids that Figma reuses across every frame — because the
 * component (button, toggle, tab) is the same underlying component instance.
 * Matching any of these means the click landed on that logical control no
 * matter which frame the user is on.
 */
const OVERVIEW_TOGGLE = '1616:22665'       // padding-text inside Overview tab
const MAP_TOGGLE      = '769:15148'        // padding-text inside Map tab
const SKIP_LABEL      = '735:11331'        // "Skip" text inside ghost CTA
const CONTINUE_LABEL  = '737:12238'        // "Continue" text inside primary CTA (also Save)
const NEXT_LABEL      = '3552:23110'       // "Next" text inside step-panel primary
const CANCEL_LABEL    = '737:12173'        // "Cancel" text inside step-panel ghost
const CHECK_AVAIL     = '13294:171461'     // "Check availability" button
const NG_FLOOR_TAB    = '7486:251'         // multi_button-switch : NG Floor
const NG_FIXED_TAB    = '7486:252'         // multi_button-switch : NG Fixed
const PG_TAB          = '7486:253'         // multi_button-switch : PG
// Field rows in the deal-line drawer — one per field
const SCHEDULE_ROW    = '7547:3713'
const ENVIRONMENT_ROW = '7547:3714'  // will confirm; probably siblings
const DSP_ROW         = '7547:43066'
const CPM_ROW         = '7547:43980'
const LOCATION_ROW    = '7547:43523'
const BUDGET_ROW      = '7686:30020'
const FRAME_ROW       = '8621:114480'
const IMPRESSIONS_ROW = '8621:114775'

/**
 * Shared actions triggered by any of the ids above, regardless of which
 * frame renders them. Frame-level `actions` in FRAMES can override or add.
 */
export const GLOBAL_ACTIONS: Record<string, Action> = {
  // Text-based — for controls whose Figma node ids are shared component
  // instance segments (Overview and Map both use segment 1616:22667 because
  // they're the same component). Text is unambiguous for these labels.
  '__text:Overview':          { label: 'Overview toggle', toggleView: 'overview' },
  '__text:Map':               { label: 'Map toggle',      toggleView: 'map' },
  '__text:NG Floor':          { label: 'NG Floor tab',    setDealType: 'ng-floor' },
  '__text:NG Fixed':          { label: 'NG Fixed tab',    setDealType: 'ng-fixed' },
  '__text:PG':                { label: 'PG tab',          setDealType: 'pg' },
  '__text:Skip':              { label: 'Skip',            step: 'next' },
  '__text:Continue':          { label: 'Continue',        step: 'next' },
  '__text:Next':              { label: 'Next',            step: 'next' },
  '__text:Save':              { label: 'Save',            step: 'next' },
  '__text:Cancel':            { label: 'Cancel',          step: 'prev' },
  '__text:Check availability':{ label: 'Check availability', step: 'next' },
  '__text:Check allocation':  { label: 'Check allocation',   step: 'next' },
  '__text:Send for approval': { label: 'Send for approval',  step: 'next' },
  '__text:Confirm':           { label: 'Confirm',            step: 'next' },
  '__text:Terminate':         { label: 'Terminate',          step: 'next' },

  // Id-based — for field rows in the deal-line drawer (distinctive per-row)
  [SCHEDULE_ROW]:    { label: 'Schedule row',    toStep: 'schedule-step' },
  [DSP_ROW]:         { label: 'DSP row',         toStep: 'dsp-step' },
  [CPM_ROW]:         { label: 'CPM row',         toStep: 'cpm-step' },
  [LOCATION_ROW]:    { label: 'Location row',    toStep: 'location-step' },
  [BUDGET_ROW]:      { label: 'Budget row',      toStep: 'location-step' },
  [FRAME_ROW]:       { label: 'Frame row',       toStep: 'location-step' },
  [IMPRESSIONS_ROW]: { label: 'Impressions row', toStep: 'location-step' },
}

/**
 * Frame catalogue. Each entry pins the .tsx component, its native Figma
 * dimensions, the flow step it captures, and its dealType × view slot.
 */
export const FRAMES: Record<string, FrameEntry> = {
  'ng-overview-empty': {
    id: 'ng-overview-empty',
    label: 'NG · empty campaign',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewEmpty,
    dealType: 'ng-floor', view: 'overview', step: 'campaign-empty', order: 0,
    actions: {},
  },
  'ng-overview-campaign-expanded': {
    id: 'ng-overview-campaign-expanded',
    label: 'NG · campaign expanded',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewFrame02,
    dealType: 'ng-floor', view: 'overview', step: 'campaign-expanded', order: 1,
    actions: {},
  },
  'ng-overview-deal-created': {
    id: 'ng-overview-deal-created',
    label: 'NG · deal created',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewFrame03,
    dealType: 'ng-floor', view: 'overview', step: 'deal-created', order: 2,
    // Environment row uses the same component-instance id (7547:43523) that
    // Location uses on PG frames — override the global mapping here.
    actions: {
      [LOCATION_ROW]: { label: 'Environment row', toStep: 'environment-step' },
    },
  },
  'ng-overview-schedule-step': {
    id: 'ng-overview-schedule-step',
    label: 'NG · Schedule step',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewScheduleStep,
    dealType: 'ng-floor', view: 'overview', step: 'schedule-step', order: 3,
    actions: {},
  },
  'ng-overview-env-step': {
    id: 'ng-overview-env-step',
    label: 'NG · Environment step',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewEnvironmentStep,
    dealType: 'ng-floor', view: 'overview', step: 'environment-step', order: 4,
    actions: {},
  },
  'ng-overview-env-selected': {
    id: 'ng-overview-env-selected',
    label: 'NG · Airports selected',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewFrame06,
    dealType: 'ng-floor', view: 'overview', step: 'environment-selected', order: 5,
    actions: {},
  },
  'ng-overview-dsp-step': {
    id: 'ng-overview-dsp-step',
    label: 'NG · DSP step',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewDspStep,
    dealType: 'ng-floor', view: 'overview', step: 'dsp-step', order: 6,
    actions: {},
  },
  'ng-overview-cpm-step': {
    id: 'ng-overview-cpm-step',
    label: 'NG · CPM step',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewCpmStep,
    dealType: 'ng-floor', view: 'overview', step: 'cpm-step', order: 7,
    actions: {},
  },
  'ng-overview-validating': {
    id: 'ng-overview-validating',
    label: 'NG · validating',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewLater,
    dealType: 'ng-floor', view: 'overview', step: 'validating', order: 9,
    actions: {},
  },
  'ng-overview-pending': {
    id: 'ng-overview-pending',
    label: 'NG · Pending',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewPending,
    dealType: 'ng-floor', view: 'overview', step: 'pending', order: 10,
    actions: {},
  },
  'ng-overview-pending-dropdown': {
    id: 'ng-overview-pending-dropdown',
    label: 'NG · Pending (dropdown)',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewPendingDropdown,
    dealType: 'ng-floor', view: 'overview', step: 'pending-dropdown', order: 11,
    actions: {},
  },
  'ng-overview-live': {
    id: 'ng-overview-live',
    label: 'NG · Live',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewLive,
    dealType: 'ng-floor', view: 'overview', step: 'live', order: 12,
    actions: {},
  },
  'ng-overview-live-dropdown': {
    id: 'ng-overview-live-dropdown',
    label: 'NG · Live (dropdown)',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewLiveDropdown,
    dealType: 'ng-floor', view: 'overview', step: 'live-dropdown', order: 13,
    actions: {},
  },
  'ng-overview-rejected': {
    id: 'ng-overview-rejected',
    label: 'NG · Rejected',
    designWidth: 1512, designHeight: 982,
    Component: NgOverviewRejected,
    dealType: 'ng-floor', view: 'overview', step: 'rejected', order: 14,
    actions: {},
  },

  'ng-map-empty': {
    id: 'ng-map-empty',
    label: 'NG Map · empty campaign',
    designWidth: 1620, designHeight: 982,
    Component: NgMapEmpty,
    dealType: 'ng-floor', view: 'map', step: 'campaign-empty', order: 0,
    actions: {},
  },
  'ng-map-campaign-expanded': {
    id: 'ng-map-campaign-expanded',
    label: 'NG Map · campaign expanded',
    designWidth: 1620, designHeight: 982,
    Component: NgMapCampaignExpanded,
    dealType: 'ng-floor', view: 'map', step: 'campaign-expanded', order: 1,
    actions: {},
  },
  'ng-map-deal-created': {
    id: 'ng-map-deal-created',
    label: 'NG Map · deal created',
    designWidth: 1620, designHeight: 982,
    Component: NgMapDealCreated,
    dealType: 'ng-floor', view: 'map', step: 'deal-created', order: 2,
    actions: {},
  },
  'ng-map-schedule-step': {
    id: 'ng-map-schedule-step',
    label: 'NG Map · Schedule step',
    designWidth: 1620, designHeight: 982,
    Component: NgMapScheduleStep,
    dealType: 'ng-floor', view: 'map', step: 'schedule-step', order: 3,
    actions: {},
  },
  'ng-map-environment-step': {
    id: 'ng-map-environment-step',
    label: 'NG Map · Environment step',
    designWidth: 1620, designHeight: 982,
    Component: NgMapEnvironmentStep,
    dealType: 'ng-floor', view: 'map', step: 'environment-step', order: 4,
    actions: {},
  },
  'ng-map-dsp-step': {
    id: 'ng-map-dsp-step',
    label: 'NG Map · DSP step',
    designWidth: 1620, designHeight: 982,
    Component: NgMapDspStep,
    dealType: 'ng-floor', view: 'map', step: 'dsp-step', order: 6,
    actions: {},
  },
  'ng-map-cpm-step': {
    id: 'ng-map-cpm-step',
    label: 'NG Map · CPM step',
    designWidth: 1620, designHeight: 982,
    Component: NgMapCpmStep,
    dealType: 'ng-floor', view: 'map', step: 'cpm-step', order: 7,
    actions: {},
  },
  'ng-map-location-step': {
    id: 'ng-map-location-step',
    label: 'NG Map · Location step',
    designWidth: 1620, designHeight: 982,
    Component: NgMapLocationStep,
    dealType: 'ng-floor', view: 'map', step: 'location-step', order: 8,
    actions: {},
  },
  'ng-map-deal-filled': {
    id: 'ng-map-deal-filled',
    label: 'NG Map · deal filled',
    designWidth: 1620, designHeight: 982,
    Component: NgMapDealFilled,
    dealType: 'ng-floor', view: 'map', step: 'validating', order: 9,
    actions: {},
  },
  'ng-map-pending': {
    id: 'ng-map-pending',
    label: 'NG Map · Pending',
    designWidth: 1620, designHeight: 982,
    Component: NgMapPending,
    dealType: 'ng-floor', view: 'map', step: 'pending', order: 10,
    actions: {},
  },
  'ng-map-approved': {
    id: 'ng-map-approved',
    label: 'NG Map · Approved',
    designWidth: 1620, designHeight: 982,
    Component: NgMapApproved,
    dealType: 'ng-floor', view: 'map', step: 'approved', order: 12,
    actions: {},
  },
  'ng-map-live': {
    id: 'ng-map-live',
    label: 'NG Map · Live',
    designWidth: 1620, designHeight: 982,
    Component: NgMapLive,
    dealType: 'ng-floor', view: 'map', step: 'live', order: 13,
    actions: {},
  },
  'ng-map-terminated': {
    id: 'ng-map-terminated',
    label: 'NG Map · Terminated',
    designWidth: 1620, designHeight: 982,
    Component: NgMapTerminated,
    dealType: 'ng-floor', view: 'map', step: 'rejected', order: 14,
    actions: {},
  },

  'pg-overview-empty': {
    id: 'pg-overview-empty',
    label: 'PG · empty campaign',
    designWidth: 1512, designHeight: 982,
    Component: PgOverviewEmpty,
    dealType: 'pg', view: 'overview', step: 'campaign-empty', order: 0,
    actions: {},
  },
  'pg-overview-schedule-step': {
    id: 'pg-overview-schedule-step',
    label: 'PG · Schedule step',
    designWidth: 1512, designHeight: 982,
    Component: PgOverviewScheduleStep,
    dealType: 'pg', view: 'overview', step: 'schedule-step', order: 3,
    actions: {},
  },
  'pg-overview-location-step': {
    id: 'pg-overview-location-step',
    label: 'PG · Location step',
    designWidth: 1512, designHeight: 982,
    Component: PgOverviewLocationStep,
    dealType: 'pg', view: 'overview', step: 'location-step', order: 7,
    actions: {},
  },
  'pg-overview-approved': {
    id: 'pg-overview-approved',
    label: 'PG · Approved (Allocation)',
    designWidth: 1512, designHeight: 982,
    Component: PgOverviewApproved,
    dealType: 'pg', view: 'overview', step: 'approved', order: 12,
    actions: {},
  },
  'pg-overview-ended': {
    id: 'pg-overview-ended',
    label: 'PG · Ended',
    designWidth: 1512, designHeight: 982,
    Component: PgOverviewEnded,
    dealType: 'pg', view: 'overview', step: 'ended', order: 16,
    actions: {},
  },
  'pg-map-empty': {
    id: 'pg-map-empty',
    label: 'PG Map · empty campaign',
    designWidth: 1620, designHeight: 982,
    Component: PgMapEmpty,
    dealType: 'pg', view: 'map', step: 'campaign-empty', order: 0,
    actions: {},
  },
}

/**
 * Router — given a (dealType, view, step) triplet, find the frame that best
 * represents it. Falls back to the closest earlier step in the same slot,
 * so toggling Map on a step that has no Map twin yet keeps you at the
 * nearest map screen we DO have (usually 'campaign-empty').
 */
export function findFrame(
  dealType: DealType,
  view: View,
  step: Step,
): FrameEntry {
  const stepOrder = STEPS.indexOf(step)
  const candidates = Object.values(FRAMES).filter(
    (f) => f.dealType === dealType && f.view === view,
  )

  // Exact match wins
  const exact = candidates.find((f) => f.step === step)
  if (exact) return exact

  // Fall back to the latest step ≤ target we have for this dealType×view
  const fallback = candidates
    .filter((f) => STEPS.indexOf(f.step as Step) <= stepOrder)
    .sort((a, b) => STEPS.indexOf(b.step as Step) - STEPS.indexOf(a.step as Step))[0]
  if (fallback) return fallback

  // Nothing at or before — take the earliest we have
  return candidates.sort((a, b) => STEPS.indexOf(a.step as Step) - STEPS.indexOf(b.step as Step))[0]
    ?? FRAMES['ng-overview-empty']
}

export function nextStep(step: Step): Step {
  const i = STEPS.indexOf(step)
  return STEPS[Math.min(STEPS.length - 1, i + 1)]
}
export function prevStep(step: Step): Step {
  const i = STEPS.indexOf(step)
  return STEPS[Math.max(0, i - 1)]
}
