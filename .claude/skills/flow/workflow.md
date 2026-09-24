# Workflow

The full `DESIGN → UNDERSTAND → CLARIFY → MAP → PROTOTYPE → VERIFY → REFINE`
loop. Large, multi-screen flows are the default assumption, not the edge case.

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

**Context the user provides is real input.** A prompt describing the client,
audience, purpose (client demo vs. internal review), target device, or deadline
is not noise — read it before UNDERSTAND and let it resolve ambiguities you would
otherwise have to ask about in CLARIFY below.

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

**Gauge scope before you commit to it.** The node a user hands you can be a
single screen, or it can be an entire exploration canvas — tens of thousands
of px wide, many lanes, branch clusters off to the side. `get_screenshot` that
node at a modest `maxDimension` (~1400) *first*, before any `get_design_context`
call, purely to see the shape: one row or several, one flow or many variant
branches. Sizing the work wrong at this step is the single biggest source of
wasted fetches later. To cheaply read many small text labels at once (a row of
column headers, a set of status chips) without a `get_design_context` per
label: `get_screenshot` each label node individually at its native size (cheap,
returns a URL not inline pixels), download them, and stitch them into one
montage image locally (a short PIL script, one image per row with a caption) —
read that one montage instead of N separate small images or N expensive code
fetches.

**Don't inherit an old build's field list as verified truth.** If a prior
build already exists (yours from an earlier session, or someone else's) and
looks like a match by field names or component names, that is a hypothesis,
not a confirmation — a matching *name* does not mean matching *requirements*.
Re-fetch the current node's actual "required fields" content (`get_metadata`
to find the small subtree, `get_design_context` on just that subtree) and
diff it against what the old build assumed before reusing its structure
wholesale. A prior build's own notes admitting an assumption ("included for
consistency", "not captured in source, extended anyway") is a flag that it
was *never verified* in the first place — inheriting it silently just
launders someone else's invented field into your build as if it were fact.
(This is exactly how an invented "Targets/Budget" step once rode along inside
an otherwise-reused wizard for two sessions before anyone checked it against
the actual frames.)

**Automatic vs. manual — read the reaction, don't assume a button.** When a
frame sequence shows state A (fields just filled) → state B (a loading
spinner) → state C (a result), that is not automatically evidence of a
manual "Check X" button the user has to click between A and C — it may be
the system reacting on its own the instant the last field lands. Check
whether a manual trigger element is actually present and interactive in the
captured frames before wiring a click handler for it; where the same button
persists afterward for a *re*-check, that reuse is real, the initial
first-time trigger may not be.

## 1.5. CLARIFY — ask before you guess

After the experience inventory exists, scan it for real gaps and ask the user
*targeted* questions about exactly those gaps, citing the screen/element in
question. This is not a formality — it's what stops the build from silently
inventing business logic. Ask about things like:

- A branch whose condition isn't visible in Figma ("select A → Active UI; select
  B → Draft UI" — but what decides which happens? user role? a form field?).
- A state the source doesn't show at all (what does the error state for this
  form look like? is there one?).
- Ambiguous responsive intent (is this desktop-only for now, or does it need to
  hold up on a tablet/laptop in a client meeting?).
- Unstated purpose/audience, when it changes scope (a quick internal review can
  skip polish a client-facing demo can't).

Don't ask questions the sources already answer — re-check DESIGN.md,
DESIGN-PATTERNS.md, and LENS itself before asking "what should this look like".
Don't ask generic checklist questions with no real gap behind them. If the
user's initial prompt already covers the context, skip straight to MAP. For a
genuinely simple, unambiguous single screen, this step can be a no-op.

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
- **Assets — download, never hotlink.** `get_design_context` returns icons/images
  as remote `https://www.figma.com/api/mcp/asset/...` URLs. These are short-lived
  (they expire in ~7 days) **and** they break in the browser under a burst of icon
  loads even while they still curl `200`, so a prototype that keeps them renders a
  field of broken-image placeholders. Always **download every referenced asset into
  a served folder** (e.g. `public/figma-assets/`) and rewrite each frame's
  `assetPathPrefix` to that local path, as a standard step right after generating
  the frames — never ship the `api/mcp/asset` URLs. Filenames are stable per icon
  across frames, so a shared folder keyed by filename de-duplicates them. See the
  `localize-assets.mjs` pattern in `component-mapping.md`.
- **Fidelity**: build to DESIGN.md tokens — spacing (`{spacing}` for page rhythm
  vs `{componentSpacing}` inside components), radii, shadows, type roles, motion.
  Follow DESIGN.md's composition rules (e.g. a set value is always a chip; the map
  palette is not the status palette; the theme dresses a card's chrome not its
  body). Get these right — they are where a generic build gives itself away.
- **Responsive by default — this is not a slideshow.** The single most common
  way a build fails this skill's actual purpose while still "looking right" in
  a screenshot: treating each Figma frame as a frozen picture — a fixed-px
  canvas (optionally `transform: scale()`d to fit the viewport) that gets
  swapped for the next one via a prev/next arrow. That is a carousel of
  screenshots, not a prototype, and it is explicitly **not** what this skill
  produces. Build the real thing instead:
  - **Layout is fluid, not frozen.** Use Tailwind's flex/grid + responsive
    prefixes (`sm:`/`md:`/`lg:`) to reflow content, not a fixed-px div scaled
    down to fit. Treat the Figma frame's width as the reference breakpoint
    (usually desktop, ~1440px) and use DESIGN-PATTERNS.md's structural guidance
    to decide what stacks, collapses, or hides at narrower widths. Where the
    source gives no breakpoint guidance, make the smallest sensible assumption
    and say so (this is exactly the kind of thing to raise in CLARIFY if it's
    a real ambiguity, not an obvious default).
  - **Every interactive element actually works.** A button is a real `<button>`
    (or the LENS `Button` component) with a real `onClick` that does what the
    Figma reaction specifies — navigates, opens the modal, toggles the state —
    never a static image region. Wire real `:hover`/`:focus`/`:active`/
    `:disabled` CSS states, not just a visual "hover variant" frame that no
    interaction ever triggers. Inputs actually accept typing and validate.
    Tabs, menus, accordions, dropdowns actually open/close/select.
  - **Navigation is real routing/state, not an image index.** Model screen-to-
    screen transitions as actual route changes or state transitions keyed to
    the experience graph (per the Routing/State bullets above) — never as an
    array of pre-rendered screens paged through by arrow buttons. If the Figma
    prototype reaction says "CTA on screen A → screen B", the actual button on
    the actual screen A must actually navigate to the actual screen B.
  - **Non-default states are reachable, not just built.** loading/empty/error/
    disabled states must be triggerable through real interaction (typing an
    invalid value, clicking "Check availability") — not dead code that only a
    code reader would ever see.
  - **Motion — real, but fast.** A hard cut between screens, or a button with
    no press feedback, reads as unfinished even when the layout is pixel
    perfect. If the Figma node carries motion data, use the
    `figma-implement-motion` skill and `get_motion_context` to translate the
    *real* spec (duration, easing, what animates) — never invent motion when
    the source specifies it. Where the source has none, apply a small
    consistent default: ~150–250ms fade/slide on screen transitions,
    near-instant (~100–150ms) hover/press feedback, `ease-out` for things
    entering and `ease-in` for things leaving. State this default once in the
    prototype (e.g. a shared transition constant) rather than picking new
    numbers per screen. Motion dresses a real interaction — it must never add
    perceived latency or delay a navigation that would otherwise be instant;
    it does not relax the "loading only on real round trips" rule.
  - **State survives navigation.** Lift state above individual screen
    components (context, a small store, or route state keyed to the
    experience graph) so leaving a screen and coming back — via in-app nav or
    the browser back button — does not silently reset form values, selections,
    or scroll position. A real product doesn't forget what you just typed;
    a prototype that does breaks the illusion instantly in front of a client.
  - Verify this the same way as visual fidelity (§4): click through the live
    dev-server prototype yourself — resize the viewport, click buttons, trigger
    a state — don't just screenshot the default view of each screen and call it
    done.
- **Loading state — only on real round trips**: if the flow has a "Check
  availability"/"Check allocation" or "Send for approval" style action, only
  *those* actions (and any action explicitly modeled as async in the source) get
  a loading/spinner treatment. Pure navigation — Confirm, Terminate, a Prev/Next
  scrubber, tab switches — must stay instant. Wiring every state change through a
  loading overlay reads as sluggish, not premium, and contradicts what the
  Figma source actually marks as a "loading" moment. Reuse the real exported
  spinner asset (Figma can only export one frozen-mid-rotation frame of it) with
  a CSS `animation: spin` class — never substitute a hand-drawn/generic spinner
  glyph; that is exactly the kind of icon-fidelity regression VERIFY exists to
  catch.

### 3a. Bulk status/state variants — derive, don't re-fetch every frame

A common flow shape: one shell (chrome, side nav, panel layout) repeated across
many statuses (New → Pending → Live → Terminated → Ended, ×2 deal types, etc.)
where only a handful of details actually change per status (a status chip's
color/icon/label, a secondary "Updated N mins ago" pill, one button's
enabled/disabled state, the bottom action row). Fetching `get_design_context`
for every single status frame is slow, burns a huge amount of context on
near-duplicate boilerplate, and — for a wide/content-heavy frame (a Map view,
for instance) — risks the truncation failure mode below on *every* fetch
instead of just one.

Do this instead:
1. `get_design_context` **one frame per lane** (e.g. the "New" status for NG,
   the "New" status for PG) — that's your verified base component.
2. `get_screenshot` the remaining status frames (cheap, small, always
   complete) to read off the exact deltas: chip background/text/icon, whether
   a secondary pill appears, which buttons are enabled vs greyed, what the
   bottom bar shows. Record each delta's real color tokens and icon filenames
   — read them off the *code*, not the screenshot pixels, whenever you can
   (a follow-up `get_design_context` on just the status-island subtree, or a
   `get_metadata`/asset-URL check, beats eyeballing a hex value).
3. Write a small script (Python is fine) that takes the base file's text and
   does **exact, non-regex string replacement** of those verified blocks per
   status — swap the chip's classes/icon/label, insert or omit the pill,
   toggle a button's enabled/disabled classes, swap the bottom bar's content.
   Regex over Tailwind's arbitrary-value class soup (parens, slashes, commas)
   is fragile; plain `str.replace()` on copy-pasted exact substrings is not.
4. Re-run the script whenever the base frame changes (duplicate-layer fixes,
   etc.) instead of hand-editing every derived file — that's the whole payoff.

This is what generated the NG/PG × {Pending, Live, Terminated, Ended} frames for
the Deal Creation Polish "Overview Mode" flow from just 2 base fetches instead
of 14.

### 3b. `get_design_context` truncation — verify large frames actually finished

The tool response (even with `forceCode: true` and even when it reports
"saved to file") is still capped at roughly 100,000 characters / 25,000
tokens. A visually large or content-heavy frame (a Map view with its own
left-hand form panel, for instance) can be cut off **mid-attribute**, with no
error — you just silently get a truncated `.tsx` that fails to parse, usually
several hundred lines in. Symptom: `tsc` reports an unterminated JSX element
whose opening tag is nowhere near the reported line number (the parser only
notices once it runs out of file trying to find the matching close).

- After importing a large frame, check `wc -c` on the persisted JSON/`.tsx`
  file — a suspiciously round ~100,000 is the tell.
- If truncated, don't re-fetch the whole node (same cap, same result). Diff
  where it stopped: shared chrome (side nav, top bar) is usually intact and
  identical across every frame in the file, since it's the same component
  instance everywhere. Splice the missing tail from another already-complete
  frame's copy of that same shared subtree (rename node ids, keep the asset
  const names already declared in the truncated file) rather than trying to
  coax a smaller fetch out of the same oversized node.
- For a genuinely large node where the missing content is NOT shared chrome,
  fall back to `get_metadata` on that node to find the specific child subtree
  you actually need, then `get_design_context` just that child id instead of
  the whole frame.

### 3c. Terminal/read-only states — lock the form, don't just relabel it

A status that ends the lifecycle (Terminated, Ended, Archived, …) should make
the screen it's shown on non-editable, not merely swap a chip's colour. If
the fields/panel that were editable in earlier statuses are still rendered,
gate them behind a real `readOnly` prop that both disables the interaction
(no panel opens, no input accepts typing) and shows it at a glance (dimmed).
Don't treat "the status chip now says Terminated" as sufficient — a reviewer
will click the still-live-looking form first.

### 3d. A wrapper `filter`/`transform` silently breaks Figma's `position: absolute` children

Figma-exported subtrees lean on `position: absolute` constantly (every
floating panel, every "deal card" positioned by `left`/`top` against a
`relative` ancestor several levels up). CSS `filter`, `transform`,
`perspective`, and `will-change` each create a **new containing block** for
`position: absolute`/`fixed` descendants — exactly like `position: relative`
does, but easy to reach for by accident. Wrap that subtree in a dimming
`<div className="opacity-60 grayscale-[0.4] pointer-events-none">` for a
read-only state (§3c) and every absolutely-positioned descendant silently
re-anchors to *that* div instead of the original ancestor — the content
doesn't disappear, it teleports off to wherever that new, unsized wrapper
happened to land in its own layout context, usually off-screen. Symptom: a
whole panel vanishes (or jumps far outside the viewport) the moment a
dimming/effect wrapper is added, with no console error. Fix: use `opacity`
alone for this kind of overlay — it creates a new *stacking* context, not a
new *containing block*, so it never touches position math. Reach for
`filter`/`transform` on these subtrees only when you've confirmed (by
checking a `getBoundingClientRect()` before/after, not just eyeballing) that
nothing inside depends on an ancestor further up than the wrapper itself.

## 4. VERIFY — visual QA and interaction QA (not optional)

Compiling, starting the dev server, and rendering are **necessary, not
sufficient**. A prototype is done when it is faithful **and it actually works**
when you click on it — a static screenshot match with dead buttons underneath
is a fail.

```
Figma → implement → run → screenshot → compare → click through it → resize the
viewport → list discrepancies → refine → re-verify
```

- Run the prototype (use the project's `run`/preview tooling or the browser preview
  tools). Read the console/logs for errors.
- Screenshot the implemented screen and the Figma source node
  (`get_screenshot`) and compare: layout, dimensions, spacing, typography,
  hierarchy, colours, borders, radius, shadows; then component states, interaction
  states, transitions, navigation, and responsive behaviour.
- **Actually interact with it.** Click every button, tab, menu, and CTA and
  confirm it does what the Figma reaction says (navigates, opens, toggles) —
  don't just eyeball the default render of each screen. Resize the browser
  viewport (or use the preview tools' `resize_window`) and confirm the layout
  reflows sensibly instead of clipping, overflowing, or staying frozen at one
  fixed width. If you find yourself paging between screens with a prev/next
  control instead of clicking the actual in-UI navigation, that's the
  screenshot-carousel anti-pattern from §3 — go back and fix the build, not
  just the verification.
- Fix discrepancies in source, re-render, re-compare. Iterate until faithful.
- **Check for duplicated/leaked layers.** A Figma component instance can flatten
  into code carrying BOTH its generic default-slot content and the real visible
  override — e.g. a shared "availability card" used by both an NG and a PG
  screen can leak the OTHER deal type's default button row (a second, unwanted
  "Check availability" pair sitting right under the real "Check Allocation"
  row). `get_design_context` does not reliably drop hidden/default layers the
  way the canvas does. Any block that looks repeated (two near-identical button
  rows, two of the same label) is a signal to open `get_screenshot` for that
  exact frame and count what's actually visible — delete whichever copy isn't
  there, don't assume the pasted code is already deduplicated.
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

## 6. EFFICIENCY — this is the whole point

The reason this skill exists is to remove the wait between "designer has a
Figma flow" and "there's something clickable to show" — the gap normally
filled by a frontend build or a slow, awkward Figma prototype. A build that is
faithful and interactive but takes forever or burns a huge amount of context
has only moved the friction, not removed it. Speed and token economy are a
first-class goal, not a nice-to-have, on every phase above:

- **Gauge scope before diving in.** A low-res `get_screenshot` of the whole
  node first (§1) is what tells you whether you're looking at one screen or
  a 30-frame exploration board — cheap, and it reshapes everything that
  follows.
- **Fetch minimally, derive the rest.** `get_metadata` to scope *before*
  `get_design_context` (expensive) on anything. For near-duplicate frames
  (status variants, repeated cards), use the derive-don't-refetch pattern in
  §3a — one verified base + cheap `get_screenshot` deltas + a script — instead
  of a full design-context fetch per frame. This is usually the single biggest
  token cost in a build; treat every repeated full fetch as a thing to justify.
- **Parallelise independent reads.** Figma calls that don't depend on each
  other's output (several `search_design_system` queries, several
  `get_screenshot`s, `get_metadata` on sibling nodes) go out together, not one
  at a time.
- **Don't re-derive what you already wrote down.** The experience inventory
  and the component mapping table (`component-mapping.md`) are the cache —
  read them back instead of re-inspecting Figma for something already
  recorded. This is also why persisting them to a working file matters even
  on a single-session build.
- **Reuse before you build.** Check the mapping table before writing a new
  component; a new screen in an existing flow almost never needs new
  primitives. This is the REUSE step in `component-mapping.md`, and it's a
  speed lever as much as a consistency one.
- **Verify narrowly while iterating.** When fixing one discrepancy, screenshot
  the specific frame/region that changed, not the whole app — save the full
  click-through pass (§4) for after a batch of fixes, not after every single
  one.

### Definition of "demoable" — run this once before calling it done

A short, concrete bar avoids the slow way of finding out it isn't ready: the
designer discovering it live, mid-presentation. Before handing a build back:

- [ ] No console errors; no broken-image placeholders; no leftover
      `api/mcp/asset` URLs (figma-access.md).
- [ ] Every interactive element in the experience inventory is clickable and
      does the right thing — not just the happy path shown by default.
- [ ] Layout holds across the target viewport range: nothing clips, overflows,
      or stays frozen at one fixed width.
- [ ] A normal glance matches the Figma source: colour, spacing, type, icons,
      radius (§4's visual QA).
- [ ] Transitions and hover/press feedback are present and quick — not absent,
      not sluggish.
- [ ] Every required field/step traces back to a fresh fetch of the current
      node — nothing carried over from a prior build without re-checking it
      (§1's "don't inherit an old build's field list" rule).
- [ ] Terminal statuses (Terminated/Ended/…) actually lock their form (§3c),
      not just relabel a chip.

If something on this list is missing, that's a real gap to fix, not a nuance
to mention in passing when handing it over.

## Extension points (not V0.1, but don't wall them off)

Keep the core loop output-agnostic so these can be added later without a rewrite:
a standalone-HTML output mode; a Claude `/design` exploration step feeding an
approved direction into the loop; deeper automated visual-diff QA; and
destination-scoped Figma write-back (never to LENS).
