# Experience inventory — Overview Mode Polish (node 393:25730)

Figma: `IBSiGNVDHcgtYtewgjXI5j`, canvas `393:25730` ("NG Y PG"). Two sections, each
with an NG row (1512w) and a PG row (1620w), ~30 frames per row, ordered
left→right = step order. Full classification: `.claude/temp/frame-manifest.json`
(120 frames) + `.claude/temp/classification-notes.md` (surprises).

## Collapsed step sequence (the ~16 real screens, not 120)

```
create-intro → schedule → environment → dsp → cpm → targets-budget
  → filters-format → filters-location → new → check-availability/allocation-loading
  → pending → approved (map/GOP lanes only) → live → terminated → ended
  (branch from pending/live: rejected — captured once, overview_ng[28] only)
```

Everything else in the 120 frames (dropdown open/closed, value picked, hover,
"review" recap, loading skeleton, saved-toast) is a **state variant of one of
these screens**, not a separate screen — built as real React state (accordion
open/closed, selection made), per workflow.md's "don't flatten into disconnected
pages" rule.

## Key assumptions (stated per user's explicit instruction: smallest reasonable
## assumption, noted, when Figma content is incomplete/ambiguous — not re-asked)

1. **Overview↔Map is independent per-deal-type state, not locked.** In the real
   Figma, NG rows *always* capture the Overview tab selected and PG rows *always*
   capture Map — there is no captured "NG+Map" or "PG+Overview" frame anywhere in
   the 120. Per the user's explicit ask ("cambiar entre los modos siempre que
   quieras"), the prototype makes mode a free toggle for both deal types. The map
   canvas (UK map + pins) and the blank Overview canvas are both deal-type-agnostic
   backgrounds (same asset regardless of NG/PG in every captured frame), so reusing
   PG's captured map canvas for "NG + Map" and NG's captured blank canvas for
   "PG + Overview" is a background swap, not invented content.
2. **Terminology (Availability vs GOP/Proposal/Allocation) is tied to mode, not to
   NG/PG.** The two Figma sections split this by section rather than by literal
   tab-selection state (see classification-notes.md — e.g. `map_ng` sits in the
   "Map" section and uses GOP language even though its own frames show the
   Overview tab selected). Since mode is the one axis the user asked to control,
   the prototype ties terminology to mode: **Overview mode → Availability / Frames
   / Total cost / "Check availability"; Map mode → Proposal / GOP / Allocation /
   "Check allocation"**. This is the cleanest non-contradictory reading of the
   source and matches most of the real captured content directly.
3. **`targets-budget`** (Budget/Frame/Impressions accordion) only appears in the
   map_ng/map_pg lanes in Figma; included in the shared wizard for both modes for
   consistency (Frame/Impressions sub-fields stay empty placeholders, matching every
   captured frame — never filled in the source either).
4. **Blank/placeholder Terminated/Ended right panels** (`map_ng[30,31]`,
   `overview_pg[28]`) — per user's answer, treated as unfinished in Figma; built
   using the equivalent *finished* lane's Terminated/Ended panel structure
   (overview_ng's Terminated card / map_pg's Ended card) adapted to the blank
   lane's terminology.
5. **`map_pg` skipping Live** (Approved → Terminated direct) — treated as a Figma
   gap, not intentional; the prototype keeps Live reachable for every deal type in
   Map mode too, built from `map_ng`'s real Approved→Live transition.
6. **`rejected`** — real captured content (overview_ng[28], Availability/Overview
   mode only), wired as a reachable alternate outcome from Pending in Overview mode
   for both deal types (Map mode's equivalent isn't captured, so Map mode does not
   offer Reject — avoids inventing GOP-terminology rejection copy that doesn't exist
   in source).

## Component architecture

- **Wizard panel** (`create-intro` → `filters-location`): one shared interactive
  left-panel component (`DealLineWizard`), accordion rows opening real popovers
  (Schedule calendar, Environment checklist, DSP list, CPM input, Targets panel,
  Format/Location filters), used by both NG/PG and both modes — differs only by
  frame width (1512/1620) and which fields are pre-filled.
- **Status lifecycle** (`new`/`pending`/`approved`/`live`/`terminated`/`ended`/
  `rejected`): full-frame components per (status × mode-terminology × dealtype
  width), generated via the repo's existing derive-pattern
  (`scripts/gen_ng_status.py`/`gen_pg_status.py` style — one verified base frame
  per terminology, python string-substitution for the rest), reusing/extending the
  existing `Ng*.tsx`/`Pg*.tsx` files where the terminology already matches
  (Overview/Availability lane).
- **Canvas**: `<OverviewCanvas/>` (blank) / `<MapCanvas/>` (UK map + pins),
  swapped independently of dealType/status by the mode toggle.
- **State**: `dealType: 'ng'|'pg'`, `mode: 'overview'|'map'` (both fully
  independent, both user-switchable at any time), `status` (the lifecycle step).
  Wizard steps before `new` are sub-states of `status: 'create'`.
