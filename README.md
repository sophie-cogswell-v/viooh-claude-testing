# viooh-claude-testing

Shared repo for the New Deal Creation Polish sprint work: the active
Figma-to-code prototype, the `/flow` Claude Code skill that builds
prototypes like this one, and the VIOOH LENS design reference the skill
relies on.

## What's here

| Path | What |
|---|---|
| `src/`, `public/figma-assets/`, `scripts/` | The active prototype (see below) |
| `.claude/skills/flow/` | The `/flow` skill — turns a Figma flow into a working React prototype on VIOOH LENS. Start at [`.claude/skills/flow/README.md`](.claude/skills/flow/README.md). |
| `DESIGN.md` | Authoritative visual system (colour/type/spacing/radius/shadow tokens, component recipes) — `/flow` treats this as source of truth. |
| `DESIGN-PATTERNS.md` | Authoritative structural pattern vocabulary (surfaces, disclosure, density, state progression) — same status as `DESIGN.md`. |
| `_legacy/` | Earlier prototype generations, kept for reference. `_legacy/prototype-v1/` is the previous NgMap\*/NgOverview\* React build; the folder alongside it holds the original HTML/CSS/JS + hotspot experiment. |

## Run the active prototype

```bash
npm install
npm run dev
# then open http://localhost:5173
```

Each screen is pasted **verbatim** from its Figma frame via
`get_design_context` — no reinterpretation, no hotspot overlays, clicks land
on the actual Figma elements.

**Stack**: Vite + React 18 + TypeScript + Tailwind v4 (this is what
`get_design_context` outputs natively).

### Structure

Frames are organised by deal type (`ng` / `pg`) and lifecycle status
(`create → new → pending → live → terminated → ended`, plus `gop` and
`avail` variants) in [`src/frames/registry.ts`](src/frames/registry.ts),
which drives the router and the Prev/Next toolbar. The multi-step creation
flow itself lives in [`src/frames/DealLineWizard.tsx`](src/frames/DealLineWizard.tsx)
and [`src/frames/wizard/`](src/frames/wizard/).

`useFrameClicks` (see `src/useFrameClicks.ts`) listens for clicks on
Figma's own `data-node-id`/text and maps them to actions in the registry —
the frame JSX itself stays verbatim, no `onClick` grafted in.

### Adding another frame

1. Ask Claude to run `get_design_context` on the Figma node id (or use the
   `/flow` skill directly).
2. `python3 scripts/import-frame.py <persisted.json> ComponentName <nodeId>`
   — downloads assets to `public/figma-assets/`, rewrites the prefix, fixes
   Figma's `font-['Inter:Regular']` classes and strips the double export.
3. Add an entry to `src/frames/registry.ts` with its `step`, `dealType`,
   and any frame-level `actions` overrides.

## Branch layout

Everything above lives directly on `main` now — no more parallel
`miguel-main`/`viooh-flow-skill` branches for day-to-day work. `git pull`
on `main` gets you the skill, the design docs, and a working local copy of
the prototype.
