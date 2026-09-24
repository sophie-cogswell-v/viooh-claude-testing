// Shared model for the deal-line creation wizard (create-intro -> new).
//
// Everything here is derived from the real Figma frames in
// `IBSiGNVDHcgtYtewgjXI5j` (see .claude/temp/wizard-integration-notes.md for the
// node-id -> file map). No invented tokens: the panel geometry below is the
// literal x/y/w/h Figma reports for each "Group 1739327716" field-editor panel.

/** The six fields the wizard captures before a deal line can move to "new".
 * ("Targets" / Budget was in an earlier build of this wizard but does not
 * appear in the Concept 1 "deal strip (full)" (IBSiGNVDHcgtYtewgjXI5j,
 * node 396:139152, verified 2026-09-23) — Deal line info is Schedule/
 * Environment/DSP/CPM only, then straight to Filters.) */
export type FieldKey =
  | 'schedule'
  | 'environment'
  | 'dsp'
  | 'cpm'
  | 'format'
  | 'location'

export const FIELD_KEYS: FieldKey[] = [
  'schedule',
  'environment',
  'dsp',
  'cpm',
  'format',
  'location',
]

/**
 * A committed field value, shaped like the Figma collapsed-row chip:
 * `label` is the chip text, `sub` is the darker "child-content" pill that only
 * the Format row carries in the source ("Product format" + "Digital CPI").
 */
export type FieldValue = { label: string; sub?: string }

export type WizardValues = Partial<Record<FieldKey, FieldValue>>

export function isComplete(values: WizardValues): boolean {
  return FIELD_KEYS.every((k) => values[k] != null)
}

/** 1512-wide NG frames vs 1620-wide PG frames. */
export type WizardWidth = 'ng' | 'pg'

/**
 * Frame-space geometry of each floating editor panel, read from Figma metadata
 * on the NG (1512) frames. Every panel is 427 wide; only Schedule is taller
 * (722) because of the calendar.
 *
 * PG (1620) frames place the same panel component at left-214 / top-2 relative
 * to NG — verified on the Schedule panel (NG 393:34399 at 671,180 vs PG
 * 393:27665 at 457,178). The other six panels are not captured open in the PG
 * lane, so the same constant offset is applied to all of them.
 */
export const PANEL_GEOMETRY: Record<
  FieldKey,
  { left: number; top: number; height: number; node: string }
> = {
  schedule: { left: 671, top: 180, height: 722, node: '393:34399' },
  environment: { left: 671, top: 216, height: 478, node: '393:31737' },
  dsp: { left: 671, top: 216, height: 478, node: '393:31833' },
  cpm: { left: 671, top: 287, height: 478, node: '393:31932' },
  format: { left: 674, top: 366, height: 478, node: '393:32304' },
  location: { left: 671, top: 366, height: 478, node: '393:32700' },
}

export const PG_PANEL_OFFSET = { left: -214, top: -2 }

export function panelBox(field: FieldKey, width: WizardWidth) {
  const g = PANEL_GEOMETRY[field]
  return width === 'pg'
    ? { left: g.left + PG_PANEL_OFFSET.left, top: g.top + PG_PANEL_OFFSET.top, height: g.height }
    : { left: g.left, top: g.top, height: g.height }
}

/**
 * Class-name join. Every caller passes `String.raw` strings — the Figma classes
 * contain Tailwind escapes (`var(--\(new\)-primary\/solid\/600,#2c24c3)`) that a
 * plain JS string literal would eat, which is why Figma's own codegen uses
 * String.raw too (see NgCreate.tsx).
 */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export const ASSETS = '/figma-assets'
