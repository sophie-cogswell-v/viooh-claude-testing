export type DealType = 'ng' | 'pg'

export type Status = 'create' | 'new' | 'pending' | 'live' | 'terminated' | 'ended'

export type Action = {
  label: string
  setDealType?: DealType
  step?: 'next' | 'prev'
  toStatus?: Status
  /** Simulates an async "Check availability" / "Check Allocation" call —
   * shows the loading overlay briefly, without changing status. */
  check?: boolean
  /** Only "Send for approval" (and check) simulate a real backend round
   * trip — Confirm, Terminate, and Prev/Next are instant. */
  loading?: boolean
  /** On the "create" screen, Confirm/Skip don't jump straight to "new" —
   * they hand off to the real DealLineWizard (Schedule/Environment/DSP/CPM/
   * Targets/Format/Location), which only advances to "new" once the user
   * actually completes it. See App.tsx. */
  startWizard?: boolean
}

export type FrameEntry = {
  designWidth: number
  designHeight: number
  Component: React.ComponentType
  actions: Record<string, Action>
  label: string
}
