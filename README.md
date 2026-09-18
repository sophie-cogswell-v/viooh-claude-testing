# Deal Creation — Overview Mode prototype (Miguel's branch)

Full-flow HTML prototype for the New Deal Creation Polish sprint,
mirroring the `PROTOTYPE` page of the `Overview-Mode-Polish` Figma
file — chrome, drawers, toggles, deal-type variants and the signed-off
status transition table, all in plain HTML/CSS/JS with no build step.

## Run it

```bash
python3 -m http.server 5173
# then open http://localhost:5173
```

## What's in

- **Real chrome**: navy sidenav, top bar with locale + drawer toggles,
  centred deal-line tabs, `Overview / Map` view toggle on the right,
  floating "Switch back to legacy deal form" chip.
- **Left drawer, two modes**: *Campaign* (Campaign name / ID / Created by /
  Status pill, then deal-type pill tabs `NG Floor / NG Fixed / PG` and
  collapsible `Campaign details / Ownership & sales / Settings` cards) →
  after the CTA, *Deal line* (Deal line info, Filters, Data targeting,
  Apply services, plus a **Targets** section that only appears for PG:
  Budget / Frame / Impressions / Share of time).
- **CTA changes with deal type**: NG → `Skip`, PG → `Continue`
  (matching the two flows in Figma).
- **Step panel** in the centre canvas opens on every field row
  (Schedule → date range, Environment → checklist, DSP → radio,
  CPM / Budget / Frame / Impressions → number input) with `Cancel` /
  `Next` at the bottom, just like the middle drawer in Figma.
- **Right status panel** with a Status chip whose dropdown reflects the
  signed-off table exactly:
  - `New`: Send for approval (this line) · Confirm (all lines)
  - `Pending approval`: Save changes · Confirm · Reject
  - `Rejected`: Save changes · Send for approval
  - `Approved`: Save changes · Cancel
  - `Live`: Save changes · Terminate
  - `Cancelled / Terminated / Ended`: no actions — chip is inert
  Plus **Availability → Allocation** copy swap once the line reaches
  Approved, and a **Delivery** section that appears at Live.
- **Deal type variants**: `NG Floor` shows `Frames` only + `Check
  availability` and calls its CPM the `Floor CPM`; `NG Fixed` / `PG`
  show the full Total cost / Frames / Impressions triplet and `Check
  allocation`.
- **Overview / Map toggle** (top right): Map view swaps a simplified
  UK/Ireland svg behind the drawers, exactly the same way the Figma
  frames stack list + map rows on top of each other.
- **Responsive**: 3-col → 2-col → stacked at mobile widths.
  Legacy chip and sidenav shrink; step panel goes full-width.

## Editing

- `index.html` — structure only. Every dynamic label is rendered by JS.
- `style.css` — tokens live at the top of the file (`--brand-*`,
  `--ink-*`, `--st-*`, `--r-*`, `--sh-*`). Change one, everything
  else follows.
- `app.js` — top of file has `STATUS` and `ACTIONS` (the sign-off
  table) plus `STEPS` (one entry per field row → `render(active)` and
  `save(active, body)`). Add / edit these to try new copy, transitions,
  or field types without touching HTML or CSS.

## Not (yet) modelled

- Frame list, Report and Distribution real content — placeholder data
- Data targeting / Apply services — accordions exist, bodies are stubs
- Real map — decorative SVG placeholder
- `Approved → Live` and `Live → Ended` auto-transitions off the line's
  own schedule (they exist in the model but there's no time-sim button
  yet, unlike Sophie's slice)

## Branch layout

Working on `miguel-main`, kept parallel to `main` — Sophie's slice
on `main` is untouched.
