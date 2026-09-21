# Workflow

The full `DESIGN → UNDERSTAND → MAP → PROTOTYPE → VERIFY → REFINE` loop. Large,
multi-screen flows are the default assumption, not the edge case.

## 0. Scope the request first

Decide which of these you are being asked for, because it changes the workflow:

- **Single simple screen** — you may go lighter on the inventory, but still map
  components and still verify.
- **A flow / multiple screens / "the whole journey"** — do the full UNDERSTAND
  pass and build an experience inventory before writing code.
- **Add a screen to an existing prototype** — read the existing experience graph
  first; integrate into it. Do not start a parallel structure.
- **Change an interaction / state / component** — this is REFINE; make the
  smallest correct change to the shared component or state.
- **Review against Figma** — this is VERIFY on its own.

If a Figma URL has no `node-id`, ask for a node-specific URL (the read tools need
one).

## 1. UNDERSTAND — build the experience model

For anything beyond a single simple screen, model the experience as a graph before
implementing. **Do not flatten a flow into disconnected pages.**

Inspect with the Figma read tools (`figma-access.md`): `get_metadata` for
structure, `get_screenshot` to see it, `get_design_context` for a node you are
about to build, `get_variable_defs` for resolved values. Figma prototype reactions
(the arrows between frames) are the navigation spec — read them where available;
where the tool cannot surface a reaction, infer from labels/CTAs and say so.

Produce an **experience inventory** (template + worked example in
`examples/experience-inventory.md`):

```
Experience
├── Screens        — name, purpose, entry condition, exit actions, key components, state
├── Journeys       — the ordered paths a user takes through the screens
├── Navigation     — screen→screen links, back, tabs, menus, CTA and modal transitions
├── Variables      — booleans, selected values, visibility flags, component props, conditional state
├── Component states — default / hover / active / selected / disabled / loading / error / empty / expanded / collapsed
├── Overlays        — panels, drawers, popovers laid over a canvas
├── Modals          — dialogs and full-screen takeovers
├── Branches        — conditional experiences (e.g. select A → Active UI; select B → Draft UI)
└── Shared components — the component set reused across screens (feeds component-mapping)
```

Persist the inventory to a working file (e.g. `PROTOTYPE-NOTES.md` or a scratchpad
doc) for a large flow so you don't re-discover it. If the flow is too big to hold
at once, split into logical journeys but keep one **global** experience map that
ties them together.

Every direction/screen should have an answer for the state progression
`empty → loading → partial → full → error` (DESIGN-PATTERNS.md requires it).

## 2. MAP — components

Run the REUSE → EXTEND → CREATE hierarchy from `component-mapping.md` over the
shared-components list. Record the mapping table in the inventory. Resolve Figma
names via `search_design_system`; build against DESIGN.md recipes/tokens where they
exist. Read DESIGN-PATTERNS.md to decide *structural* shape (overlay vs column,
where overflow goes, etc.) before committing a layout.

## 3. PROTOTYPE — React + TypeScript

Goal: a **convincing, easily-iterable** prototype — not production architecture.

Scaffolding:
- React 18 + TypeScript + Vite. If the target repo already has a setup, use it;
  don't create a second one.
- Match the repo's existing styling. LENS/DESIGN.md are Tailwind-token based, so
  Tailwind with the DESIGN.md tokens is the natural default; plain CSS modules are
  fine if that's what exists. Never run two styling systems at once.
- **Routing**: keep it simple — a route/URL per screen, or a single state-driven
  view switch for a tight flow. The router should encode the *experience graph*
  (screens + transitions), so navigation and branches are real, not faked with
  hidden divs.
- **State**: model the inventory's *variables* as real state (React state /
  context / a small store). Branches read from that state. Prefer the simplest
  thing that makes the interaction real; don't reach for a heavy state library when
  `useState`/context suffices.
- **Components**: sensible boundaries — one component per reused element, screens
  composed from them. Avoid both extremes: no monolithic per-screen blobs, and no
  premature over-abstraction / excessive file-splitting / speculative design-system
  engineering. Reuse DESIGN.md primitives.
- **Icons**: LENS icons are Phosphor-based (180, mirrored to `src/assets/icon`).
  Prefer the repo's existing icon assets / a Phosphor package over redrawing.
- **Fidelity**: build to DESIGN.md tokens — spacing (`{spacing}` for page rhythm
  vs `{componentSpacing}` inside components), radii, shadows, type roles, motion.
  Follow DESIGN.md's composition rules (e.g. a set value is always a chip; the map
  palette is not the status palette; the theme dresses a card's chrome not its
  body). Get these right — they are where a generic build gives itself away.

## 4. VERIFY — visual QA (not optional)

Compiling, starting the dev server, and rendering are **necessary, not
sufficient**. A prototype is done when it is faithful.

```
Figma → implement → run → screenshot → compare → list discrepancies → refine → re-screenshot
```

- Run the prototype (use the project's `run`/preview tooling or the browser preview
  tools). Read the console/logs for errors.
- Screenshot the implemented screen and the Figma source node
  (`get_screenshot`) and compare: layout, dimensions, spacing, typography,
  hierarchy, colours, borders, radius, shadows; then component states, interaction
  states, transitions, navigation, and responsive behaviour.
- Fix discrepancies in source, re-render, re-compare. Iterate until faithful.
- If you genuinely cannot run or view the UI, **say so explicitly** — do not claim
  visual success you did not verify.

## 5. REFINE — iterate small

The prototype exists to be changed. On a change request, make the **smallest
correct** edit:
- "narrower sidebar" → change the one layout value.
- "change the selected state" → edit the shared component / its state, once.
- "add this screen" → integrate it into the experience graph (route + transitions
  + shared components), never as an orphaned page.

Don't rewrite the prototype to make a local change. Keep the experience graph and
the mapping table current as you go, so the next request stays cheap.

## Extension points (not V0.1, but don't wall them off)

Keep the core loop output-agnostic so these can be added later without a rewrite:
a standalone-HTML output mode; a Claude `/design` exploration step feeding an
approved direction into the loop; deeper automated visual-diff QA; and
destination-scoped Figma write-back (never to LENS).
