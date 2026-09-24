import type { DealType, FrameEntry, Status } from '../types'

import NgCreate from './NgCreate'
import NgNewOverview from './NgNewOverview'
import NgPending from './NgPending'
import NgLive from './NgLive'
import NgTerminated from './NgTerminated'
import NgEnded from './NgEnded'

import PgNewMap from './PgNewMap'
import PgPending from './PgPending'
import PgLive from './PgLive'
import PgTerminated from './PgTerminated'
import PgEnded from './PgEnded'

export const STEPS: Status[] = ['create', 'new', 'pending', 'live', 'terminated', 'ended']

const CONFIRM = { label: 'Confirm', step: 'next' as const }
const START_WIZARD = { label: 'Confirm', startWizard: true }
const SEND_FOR_APPROVAL = { label: 'Send for approval', step: 'next' as const, loading: true }
const TERMINATE = { label: 'Terminate', toStatus: 'terminated' as const }
const CHECK_AVAILABILITY = { label: 'Check availability', check: true }
const CHECK_ALLOCATION = { label: 'Check Allocation', check: true }

const NG_1512 = { designWidth: 1512, designHeight: 982 }
const PG_1620 = { designWidth: 1620, designHeight: 982 }

// FRAMES['ng'|'pg']['create'|'new'|...]
export const FRAMES: Record<DealType, Partial<Record<Status, FrameEntry>>> = {
  ng: {
    create: {
      ...NG_1512,
      Component: NgCreate,
      label: 'Create',
      actions: {
        '__text:NG Floor': { label: 'NG Floor', setDealType: 'ng' },
        '__text:NG Fixed': { label: 'NG Fixed', setDealType: 'ng' },
        '__text:PG': { label: 'PG', setDealType: 'pg' },
        '__text:Confirm': START_WIZARD,
        '__text:Skip': START_WIZARD,
      },
    },
    new: {
      ...NG_1512,
      Component: NgNewOverview,
      label: 'New',
      actions: {
        '__text:Confirm': CONFIRM,
        '__text:Send for approval': SEND_FOR_APPROVAL,
        '__text:Check availability': CHECK_AVAILABILITY,
      },
    },
    pending: {
      ...NG_1512,
      Component: NgPending,
      label: 'Pending',
      actions: {
        '__text:Confirm': CONFIRM,
        '__text:Send for approval': SEND_FOR_APPROVAL,
        '__text:Check availability': CHECK_AVAILABILITY,
      },
    },
    live: {
      ...NG_1512,
      Component: NgLive,
      label: 'Live',
      actions: {
        '__text:Terminate': TERMINATE,
        '__text:Check availability': CHECK_AVAILABILITY,
      },
    },
    terminated: { ...NG_1512, Component: NgTerminated, label: 'Terminated', actions: {} },
    ended: { ...NG_1512, Component: NgEnded, label: 'Ended', actions: {} },
  },
  pg: {
    create: {
      ...NG_1512,
      Component: NgCreate,
      label: 'Create',
      actions: {
        '__text:NG Floor': { label: 'NG Floor', setDealType: 'ng' },
        '__text:NG Fixed': { label: 'NG Fixed', setDealType: 'ng' },
        '__text:PG': { label: 'PG', setDealType: 'pg' },
        '__text:Confirm': START_WIZARD,
        '__text:Skip': START_WIZARD,
      },
    },
    new: {
      ...PG_1620,
      Component: PgNewMap,
      label: 'New',
      actions: {
        '__text:Confirm': CONFIRM,
        '__text:Send for approval': SEND_FOR_APPROVAL,
        '__text:Check Allocation': CHECK_ALLOCATION,
      },
    },
    pending: {
      ...PG_1620,
      Component: PgPending,
      label: 'Pending',
      actions: {
        '__text:Confirm': CONFIRM,
        '__text:Send for approval': SEND_FOR_APPROVAL,
        '__text:Check Allocation': CHECK_ALLOCATION,
      },
    },
    live: {
      ...PG_1620,
      Component: PgLive,
      label: 'Live',
      actions: {
        '__text:Terminate': TERMINATE,
        '__text:Check Allocation': CHECK_ALLOCATION,
      },
    },
    terminated: { ...PG_1620, Component: PgTerminated, label: 'Terminated', actions: {} },
    ended: { ...PG_1620, Component: PgEnded, label: 'Ended', actions: {} },
  },
}

export function findFrame(dealType: DealType, status: Status): FrameEntry {
  const frame = FRAMES[dealType][status]
  if (!frame) throw new Error(`No frame for ${dealType}/${status}`)
  return frame
}

export function nextStatus(s: Status): Status {
  const i = STEPS.indexOf(s)
  return STEPS[Math.min(i + 1, STEPS.length - 1)]
}

export function prevStatus(s: Status): Status {
  const i = STEPS.indexOf(s)
  return STEPS[Math.max(i - 1, 0)]
}
