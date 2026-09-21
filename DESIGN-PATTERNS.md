---
name: design-patterns
description: The VIOOH vocabulary of structural patterns — surfaces, disclosure, density, state progression. Expansion of DESIGN.md; design-exploration reads it and writes repo-level entries back.
version: "0.1"
---

# VIOOH design patterns

The **company master** copy. This document is the *expansion* of
[DESIGN.md](DESIGN.md), not a tier beneath it. DESIGN.md answers **what should this
look like** — colours, type roles, radii, component recipes. This document answers
**what shape should this be** — surfaces, disclosure, density, state progression,
input efficiency, future-proofing. Same authority, different question.

It exists because the gap DESIGN.md leaves is structural, not visual. A PM handed
DESIGN.md can pick the right blue. Deciding whether a new surface should be an
overlay, a displacing column or a rail is a different kind of judgement, and until
now it had no home.

`design-exploration` is the skill that reads this document and writes back to it.

## The rule this document runs on — and how it differs

The governing rule in [CLAUDE.md](CLAUDE.md) binds the two documents **differently**,
and conflating them breaks both.

**DESIGN.md — strict.** A colour, type role, radius, shadow or component recipe that
is not already tokenised may not be invented, full stop. Needing a value that does not
exist is a **gap to flag**, never a value to fill.

**This document — invention is the point, but it must be declared.** Exploration
exists to propose shapes that do not exist yet; a pattern vocabulary that could only
recombine what is already here would be useless on a greenfield project. So invention
is allowed — on condition that it is *named as invention* rather than smuggled in as
if precedented. An entry that records a shape first proposed on a ticket says so in
its `Source` line.

The practical consequence: a run that needs a visual value this system lacks is
**blocked** until the design team rules. A run that needs a structural shape this
document lacks proceeds, **loudly flagged** — because if it ships it becomes
vocabulary, and vocabulary deserves a deliberate yes rather than accidental adoption.

## Two levels

This file is the **company master**, in design_repo. Projects carry their own
repo-level `DESIGN-PATTERNS.md`, created by `design-exploration` from this file's
shape on first use. On conflict the repo-level copy wins for that project — but the
disagreement is worth reporting rather than resolving silently. It is either local
divergence worth keeping or drift worth promoting, and nothing at the point of
conflict can tell which.

## How to read an entry

Every entry answers one recurring structural question. The fields are fixed:

```markdown
### <Pattern name> — `<id>`

**Decision** — the question this answers.
**Options** — the taxonomy, one line each.
**Choose X when** — the discriminating condition.
**Source** — VTM code path / DESIGN.md section / `<project>/<ticket>`.
**Watch-out** — the characteristic way this gets got wrong.
```

`Choose X when` is the load-bearing field. An entry that lists options without a
discriminator has documented a menu, not a pattern, and is worse than no entry at all
— it makes an unmade decision look settled.

Entries cite DESIGN.md rather than restating it. Where a value matters, the
braced `namespace.path` token is named and DESIGN.md is where it resolves; this document
has no token layer of its own and must never grow one.

## Decision heuristics

Six principles, restated as questions to put to a candidate direction. Sourced
verbatim in intent from DESIGN.md's `## Our Design Strategy`; read that section for
the full statement of each.

**Efficiency** — does this direction cost fewer clicks, and is the common path
keyboard-reachable? Keyboard beats point-and-click beats touch. Technical complexity
should be encapsulated behind the more streamlined interaction.

**Control** — does it hide *our* complexity (how the backend or the data model is
structured) while surfacing the complexity the **user** actually cares about? Both
halves matter; a direction that simplifies away the user's own domain has failed this
test, not passed it.

**Flexibility** — does it force one path through the task? Users are specialists with
unique ways of thinking about the same problem. At the end of the road there is always
Excel; a direction that is narrower than the spreadsheet it replaces will lose to it.

**Modularity** — are the individual building blocks of the interaction still
recognisable in this context, or has the direction minted a bespoke one?

**Composability** — is the complex interaction built by composing those blocks into
bigger pieces, rather than authored whole?

**Reusability** — does this direction add a single-use component? Minimising those is
an explicit goal, so a direction that needs one owes an argument.

These are heuristics for choosing between directions, not a scorecard. A direction may
lose on Efficiency and still be right because it wins decisively on Control — but the
brief has to say so.

---

## Surfaces & disclosure

### Overlay or column — `overlay-or-column`

**Decision** — a surface arrives beside a canvas (a map, a grid, a chart). How does it
relate to that canvas?

**Options**
- **Column** — a sibling in the region's flex row. Opening one narrows the canvas.
- **Overlay** — lifted out of flow (`fixed` or `absolute`). The canvas keeps its full
  width; the panel covers part of it.
- **Reserved overlay** — out of flow, but the canvas takes a matching margin so
  nothing is hidden behind it. The reserve is voluntary.
- **Rail** — a transparent strip carrying a stack of detached cards, with live canvas
  reading through the gaps between them. Not a panel at all.

**Choose column when** there is no canvas to protect, or the canvas tolerates
narrowing — a listing grid does; a map usually does not. **Choose overlay when** the
canvas need not stay wholly visible. **Choose reserved overlay when** it must — the
programmatic planner reserves for its right sidebar precisely so no cartography is
hidden. **Choose rail when** the figures are meant to read *as laid on* the canvas
rather than walled off beside it.

**Source** — DESIGN.md `## Layout` → `### Overlay or column`. VTM: `CampaignDrawer`
and `DealLineStrip` (columns), `PlannerSecondaryPanel` and `PlannerRightSidebar`
(overlays, the latter reserved), `PlannerSummaryPanel` (rail).

**Watch-out** — DESIGN.md's own, and it is the sharpest sentence in the section: *an
overlay mistaken for a column squeezes the map to a strip, and a map too narrow to
read is not a map.* The second trap is width: the rail over the map is
`{components.summaryPanel.rail.width}`, **not** `{layout.rightSidebarWidth}` — the
sidebar width belongs to the opaque column the same component becomes in other modes,
and using it for the rail eats the cartography the gaps exist to reveal.

### The page never scrolls — `page-never-scrolls`

**Decision** — the content is taller than the viewport. Where does the overflow go?

**Options**
- **Single scrolling region** — the whole working surface scrolls, page header
  included, so the header scrolls away with the rows beneath it.
- **Split** — chrome pinned, only the region below it scrolling. Sub-regions may
  scroll independently of each other.
- **Vertical seam** — the split taken sideways: sidebar and content column each own
  their overflow.

The one thing that is never an option: letting the document itself scroll. The app
shell is `{layout.appShellHeight}` with its overflow hidden, so the browser's own
scrollbar never appears. A page taller than the viewport is not a longer page — it is
a page whose overflow has not been placed yet.

**Choose single when** there is one thing to read and pinning its top edge buys
nothing — a table or a form. **Choose split when** the region carries a canvas, or a
set of panels meant to be read *against each other*; a map that has scrolled out of
view has stopped being a reference.

**Source** — DESIGN.md `## Layout` → `### The page never scrolls`. VTM:
`AppPageWrapper`, `PageWrapper` (single), the planner container (split),
`ContentWithLeftSidebar` (vertical seam).

**Watch-out** — reaching for the single scroll by default because it is less work to
build. It is the right answer surprisingly often, but only where there is genuinely
one thing to read; applied to a page with a canvas it silently destroys the canvas's
purpose the first time the user scrolls.

---

## Density & rhythm

*Empty.* No pattern here has been earned yet. DESIGN.md's `## Layout` already carries
the two coexisting spacing systems (`{spacing}` for page-level rhythm,
`{componentSpacing}` inside components) as a **visual** rule; the structural question
above it — when a surface should be dense versus roomy, and what that costs at scale —
has not been settled anywhere and should not be guessed at here.

## State progression

*Empty.* The progression an exploration must cover is empty → loading → partial → full
→ error, and `design-exploration` requires every direction to say what it does in each.
Which shapes recur across those states is exactly what the first few runs will reveal.

## Input & efficiency

*Empty.* The Efficiency heuristic above is the standing test; no concrete pattern has
been sourced yet.

## Future-proofing

*Empty.* Every exploration brief carries a future-proofing note — what happens at 10×
the data, and what the next obvious feature would have to bolt on. Recurring answers
belong here.

An acknowledged gap beats a plausible invention. These sections earn their entries one
exploration at a time.

---

## Promotion

Promotion runs **repo → master**, and it works the same way for this file and for
DESIGN.md. A project that has diverged from a master is the same signal either way.

- **Marker** — an entry in a *repo-level* `DESIGN-PATTERNS.md` that looks
  company-general rather than project-specific is tagged `promote:` on its heading
  line. That tag is the whole mechanism.
- **Direction** — repo-level copies are written by runs; masters are written by
  people. `design-exploration` never writes to either master directly.
- **Sweep** — reading the markers and filing them against the masters is a manual pass
  for now. A skill to automate it is named in
  [docs/roadmap-design-exploration.md](docs/roadmap-design-exploration.md).

The point of keeping this manual is that promotions stay **visible**. An automated
sweep that quietly lands a project's local convention into the company vocabulary
would defeat the reason the two-level split exists.

## Checking this file

It has no YAML frontmatter — deliberately, so that nobody defines a token here. That
means `check-refs.mjs` cannot be pointed at it directly; validate its
braced `namespace.path` citations against DESIGN.md's frontmatter instead:

```bash
node -e 'const fs=require("fs");const d=fs.readFileSync("DESIGN.md","utf8").split("\n");const e=d.indexOf("---",1);fs.writeFileSync("/tmp/patterns-refcheck.md",d.slice(0,e+1).join("\n")+"\n"+fs.readFileSync("DESIGN-PATTERNS.md","utf8"))' \
  && node .claude/skills/resolve-design-issue/scripts/check-refs.mjs /tmp/patterns-refcheck.md
```
