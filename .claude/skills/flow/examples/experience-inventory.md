# Example — experience inventory

A worked inventory for a small VTM flow, to show the shape. It is illustrative, not
a description of any specific real Figma file. Produce one like this in a working
notes file before implementing a flow; keep it current as you build.

**Flow**: Create a new programmatic deal line — from an empty campaign to a filled,
validating deal line. ~6 screens, one branch.

## Screens

| # | Screen | Purpose | Entry condition | Exit actions | Key components | State |
|---|---|---|---|---|---|---|
| 1 | Campaign empty | start a campaign | landed on planner, no deal line | "Add deal line" → 2 | CampaignDrawer, Button(primary), empty-state | empty |
| 2 | Deal line created | show the deal-setup strip | deal line added | pick a section → 3 | DealLineStrip, SectionButton rows | partial |
| 3 | Section: Schedule | set a date range | Schedule row clicked | set range → back to 2 (row now SOLID) | SectionButton(active), DateRangePicker | editing |
| 4 | Section: Environment | pick environments | Environment row clicked | tick items → back to 2 | SelectOption list, IncludeExcludeToggle | editing |
| 5 | Section: CPM | enter a CPM | CPM row clicked | enter value → back to 2 | InputNumber, Chip (value) | editing |
| 6 | Deal line filled → validating | submit for validation | required rows all SOLID | "Validate" → spinner → live/pending | metric rows, LoadingBar, status Chip | full → loading |

## Journeys

- **Happy path**: 1 → 2 → (3, 4, 5 in any order, each returning to 2) → 6.
- Sections are order-independent: the user is a specialist and may fill them in
  any sequence (DESIGN.md "Flexibility").

## Navigation

- 1→2 via primary CTA. 2⇄3/4/5 via SectionButton rows (opening a section sets that
  row `active` and shows its panel). 2→6 when required rows are satisfied.
- Back: closing a section panel returns to 2 with the row now `SOLID` + its value
  as a chip.

## Variables

- `dealType`: "NG Floor" | "PG" (branch driver).
- `schedule`: date range | null.
- `environments`: string[] (included) / string[] (excluded).
- `cpm`: number | null.
- `activeSection`: which SectionButton panel is open (drives `active` state).
- `requiredComplete`: derived boolean → gates screen 6.
- `validationState`: "idle" | "validating" | "live" | "pending".

## Component states

- SectionButton: `DASHED` (empty, invites a value) → `SOLID` (value set) → `active`
  (its panel open). Disabled where not yet reachable.
- Button: primary (the one commit), tertiary (panel-scoped), secondary (dialog
  furniture) — per DESIGN.md "Choosing a button variant".
- Loading: LoadingBar / spinner on validate. Empty: screen 1. Error: validation
  failure → status Chip = Rejected (RED band).

## Overlays / modals

- Section panels are the planner's **secondary panel** (an *overlay* over the map,
  not a column — DESIGN-PATTERNS.md `overlay-or-column`; DESIGN.md "Overlay or
  column"). No true modal in the happy path; a "Cancel deal line" confirm would be
  an `Alert` with a `danger` confirm button.

## Branches

- `dealType = NG Floor` → floor-price UI in the CPM section.
- `dealType = PG` → adds a Targets/Data-targeting section and a right panel.
  Both share screens 1–2 and the same shared components; the branch changes which
  sections exist and the CPM semantics — preserve that relationship in state, don't
  fork the whole flow into two copies.

## Component mapping (REUSE → EXTEND → CREATE)

| Figma element | LENS asset (library) | Decision | Prototype component | Notes / DESIGN.md recipe |
|---|---|---|---|---|
| Primary CTA | Button — v3 | REUSE | `<Button variant="primary">` | `{components.button.variants.primary}` |
| Setting row | Button/SectionButton — v3 | REUSE | `<SectionButton theme=…>` | `{components.sectionButton}` DASHED/SOLID/active |
| Date range picker | android_calendar / Pickers — v3 | REUSE | `<DateRangePicker>` | DESIGN.md "Pickers" |
| Environment list row | Lists / cells — v3 | EXTEND | `<SelectOptionRow>` | add trailing `IncludeExcludeToggle`, no leading checkbox |
| Availability metric card | Deal card — v3 (partial) | EXTEND | `<SummaryCard>` | `{components.card}` SECONDARY + `{components.metricRow}` |
| CPM-over-limit chip colour | — | REUSE rule | `<Chip>` | per DESIGN.md: value turns PINK_RED when over deal CPM |

Every CREATE/EXTEND row carries the reason it wasn't a plain REUSE — that is the
audit trail.
