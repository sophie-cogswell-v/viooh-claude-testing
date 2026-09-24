// The interactive deal-line creation wizard — the step between "create-intro"
// (NgCreate.tsx) and the first lifecycle status ("new").
//
// One component covers both Figma frame sets: the NG lane at 1512x982
// (overview_ng 393:31641 … 393:32674) and the PG lane at 1620x982
// (overview_pg 393:26145 … 393:29964). They differ only in chrome width and
// the deal-strip column width, so `width` switches the transcribed chrome
// shell and the strip's row sizing — the field content is identical.
//
// Structure:
//   wizard/ChromeNg.tsx / ChromePg.tsx  frame chrome, verbatim from Figma
//   wizard/DealStrip.tsx                the left accordion (live state)
//   wizard/panels.tsx                   the seven floating field editors
//   wizard/model.ts                     field keys, panel geometry, helpers
//
// Interaction model: unlike the static lifecycle frames — which are driven
// externally through `useFrameClicks` and an actions map — this screen owns
// real React state, so rows/controls carry their own onClick. The shared
// visual language is kept: `.proto-hotspot` on hover for anything clickable,
// `.panel-pop-in` on every editor panel that opens.

import { useCallback, useEffect, useRef, useState } from 'react'
import DealStrip from './wizard/DealStrip'
import { PANELS } from './wizard/panels'
import {
  isComplete,
  type FieldKey,
  type FieldValue,
  type WizardValues,
  type WizardWidth,
} from './wizard/model'

export type DealLineWizardProps = {
  /** 'ng' → the 1512-wide frames, 'pg' → the 1620-wide frames. Default 'ng'. */
  width?: WizardWidth
  /** Pre-fill some or all fields (e.g. to resume a partly configured line). */
  initialValues?: WizardValues
  /**
   * Fired once, when the last of the seven fields (Schedule, Environment, DSP,
   * CPM, Targets, Filters > Format, Filters > Location) gets a value. The
   * source frames carry no "Continue" CTA inside the wizard — the status
   * island with Confirm / Send for approval only appears on the "new" screen —
   * so completion is the last field being filled, not a button press.
   * Wire this to the transition into `status: 'new'`.
   */
  onComplete?: (values: WizardValues) => void
  /** Fired on every committed field change, before/independently of onComplete. */
  onValuesChange?: (values: WizardValues, complete: boolean) => void
  /** Once the deal line reaches a terminal lifecycle status (Terminated/
   * Ended), the strip becomes view-only — rows no longer open their editor
   * panels, and the whole thing is visually dimmed. */
  readOnly?: boolean
}

export default function DealLineWizard({
  width = 'ng',
  initialValues,
  onComplete,
  onValuesChange,
  readOnly = false,
}: DealLineWizardProps) {
  const [values, setValues] = useState<WizardValues>(initialValues ?? {})
  const [openField, setOpenField] = useState<FieldKey | null>(null)
  const completed = useRef(false)

  const openPanel = useCallback((field: FieldKey) => {
    if (readOnly) return
    setOpenField((current) => (current === field ? null : field))
  }, [readOnly])

  const commit = useCallback(
    (field: FieldKey, value: FieldValue) => {
      setValues((prev) => ({ ...prev, [field]: value }))
      setOpenField(null)
    },
    [],
  )

  useEffect(() => {
    const complete = isComplete(values)
    onValuesChange?.(values, complete)
    if (complete && !completed.current) {
      completed.current = true
      onComplete?.(values)
    }
  }, [values, onComplete, onValuesChange])

  const Panel = openField ? PANELS[openField] : null

  return (
    <>
      {/* opacity only — `filter`/`transform` here would create a new
          containing block and break DealStrip's `position: absolute`
          offsets, which are computed against Chrome's root instead. */}
      <div
        className={readOnly ? 'opacity-60 pointer-events-none transition-opacity' : 'transition-opacity'}
        title={readOnly ? 'This deal line is no longer editable' : undefined}
      >
        <DealStrip width={width} values={values} openField={openField} onOpen={openPanel} />
      </div>
      {openField && Panel && (
        <Panel
          key={openField}
          width={width}
          onCommit={(value: FieldValue) => commit(openField, value)}
          onCancel={() => setOpenField(null)}
        />
      )}
    </>
  )
}
