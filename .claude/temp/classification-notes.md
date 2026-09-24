# Frame classification notes

- **Terminology split is tied to Figma *section*, not to NG vs PG line type.** Both rows in the
  "Overview" section (`overview_ng`, `overview_pg`) show plain **Availability / Impressions / Total
  cost** language all the way through Pending and Live. Both rows in the "Map" section (`map_ng`,
  `map_pg`) switch to **Proposal / GOP / Check allocation / Allocation** language starting at the
  step right before Pending, and keep it through Pending → Live. This is the opposite of what the
  calibration hint implied (that it was an NG-vs-PG split) — verify with Sophie/Raul which
  terminology is the intended one before building, since the two sections mock the same lifecycle
  two different ways.
- **Two extra lifecycle statuses beyond the given vocabulary, each seen in only one place:**
  `rejected` (red "Rejected" pill, appears only once, at `overview_ng[28]`, showing a "Delivery"
  panel with Traded/Remaining impressions instead of an Availability card) and `approved` (green
  "Approved" pill with an "Allocation" panel, appears in both `map_ng[28]` and `map_pg[25]`, always
  right after a `check-allocation-loading` frame and before Live/Terminated). Neither the NG nor the
  PG "overview" row shows `approved`; neither "map" row shows `rejected`. Added both as new step
  labels rather than force-fitting them.
- **`map_pg` skips Live entirely** — it goes Approved (`map_pg[25]`) straight to Terminated
  (`map_pg[26]`), with no Live frame in between, unlike `map_ng` which has the full
  Approved → Live → Terminated → Ended sequence. Worth double-checking this isn't a missing frame in
  Figma rather than an intentional skip.
- **`map_ng`/`map_pg` have a "Targets" accordion (Budget / Frame / Impressions / Share of time) that
  the `overview_ng`/`overview_pg` rows never show.** It sits between CPM and Filters in the left
  Deal line info panel, and opens as a single combined floating panel (title "Targets") covering all
  three fields at once — only Budget ever shows an entered value (£10,000,000); Frame and
  Impressions stay blank placeholders in every frame observed. There was no clean way to split this
  into separate `targets-frame` / `targets-impressions` frames, so all such frames were labelled
  `targets-budget`.
- **Terminated/Ended frames are unfinished ("blank/placeholder") specifically in the `map_ng` and
  `overview_pg` rows** — the right-side panel shows nothing but the status pill, no
  Availability/Delivery card. `overview_ng`'s Terminated frame *does* still show a card. Matches the
  task brief's warning about incomplete Map-section frames, but note it also hit one Overview-section
  frame (`overview_pg[28]`).
- **Minor naming variant, not a distinct step:** `map_pg[14]`/`map_pg[15]` label the filters accordion
  "Data targeting" instead of "Filters" seen everywhere else; content and behavior (Format field,
  Group Category level options) are identical, so both were classified as `filters-format`.
- **Button label changes with terminology**: the "New" step's action button reads "+Check
  availability" in `overview_ng`/`overview_pg` and in `map_ng`/`map_pg` frames *before* the
  terminology switch, but becomes "+Report" in later `map_ng` "New" frames (idx 20-22) — cosmetic,
  folded into the same `new` label.
