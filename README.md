# Deal Creation Flow — status prototype

A small, plain HTML/CSS/JS clickable prototype (no build step — just open `index.html`)
modeling the deal line status flow: **New → Pending approval → Approved → Live → Terminated**
(plus the Reject/Cancel side-branches), for a single NG deal line in Overview view.

## Scope of this slice

- One deal line, type **NG Fixed** only (no PG, no multi-line, no Map view yet)
- The status transitions and action labels come straight from the signed-off table:
  who can do what from each status, and where it lands
- Fields (name, schedule, environment, DSP, CPM, filters) stay **editable** through
  New/Pending approval/Approved/Live, and **lock** once the line is Cancelled,
  Terminated or Ended
- `Approved → Live` and `Live → Ended` are **not** user actions — they happen
  automatically off the line's own schedule. The "Simulate time passing" buttons
  stand in for that until we wire up real dates.

## Open questions (flagged, not yet resolved)

- **PG allocation check**: does availability get checked while the form is being
  filled in, or later during approval? Pending confirmation from product.

## Editing this with the team

- `index.html` — structure/markup
- `style.css` — all visual styling
- `app.js` — `STATUS_CONFIG` at the top defines every status's available actions,
  labels and destinations. Change that object to try different flows without
  touching markup or CSS.

## Next slices (not yet built)

- Map view
- Multi deal-line / campaign-level Overview summary
- PG deal type (allocation check, once confirmed)
