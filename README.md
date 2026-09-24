# viooh-claude-testing

VIOOH's design team sandbox for prototyping with Claude — testing how far
Figma-to-code workflows can take us, and building the Claude Code tooling
(skills, scripts) that support that. This is an exploration repo, not a
production app: expect it to move fast and hold work-in-progress alongside
finished pieces.

Current focus: the **New Deal Creation Polish** sprint.

## What's here

| Path | What |
|---|---|
| `src/`, `public/figma-assets/`, `scripts/` | The active prototype — see [Running the prototype](#running-the-prototype) below |
| `.claude/skills/flow/` | The `/flow` Claude Code skill — turns a Figma flow into a working React prototype on VIOOH LENS. Start at [`.claude/skills/flow/README.md`](.claude/skills/flow/README.md) |
| `DESIGN.md` | Authoritative visual system — colour/type/spacing/radius/shadow tokens and component recipes. `/flow` treats this as source of truth |
| `DESIGN-PATTERNS.md` | Authoritative structural pattern vocabulary — surfaces, disclosure, density, state progression. Same status as `DESIGN.md` |
| `_legacy/` | Earlier prototype generations, kept for reference rather than deleted |

## Running the prototype

```bash
npm install
npm run dev
# then open http://localhost:5173
```

**Stack**: Vite + React 18 + TypeScript + Tailwind v4 — this is what Figma's
`get_design_context` outputs natively, so it's the path of least friction
between a Figma frame and a running screen.

Every screen is pasted **verbatim** from its Figma frame: no
reinterpretation, no hotspot overlays. Clicks land on the actual Figma
elements via `useFrameClicks` (see [`src/useFrameClicks.ts`](src/useFrameClicks.ts)),
which listens for clicks on Figma's own `data-node-id`/text and maps them to
actions — the frame JSX itself is never touched by hand.

### Structure

Frames are organised by deal type (`ng` / `pg`) and lifecycle status
(`create → new → pending → live → terminated → ended`, plus `gop` and
`avail` variants) in [`src/frames/registry.ts`](src/frames/registry.ts),
which drives the router and the Prev/Next toolbar. The multi-step creation
flow lives separately in [`src/frames/DealLineWizard.tsx`](src/frames/DealLineWizard.tsx)
and [`src/frames/wizard/`](src/frames/wizard/).

### Adding a new frame

1. Ask Claude to run `get_design_context` on the Figma node id — or use the
   `/flow` skill directly.
2. `python3 scripts/import-frame.py <persisted.json> ComponentName <nodeId>`
   — downloads assets to `public/figma-assets/`, rewrites the asset prefix,
   fixes Figma's `font-['Inter:Regular']` classes and strips the duplicate
   default export.
3. Register it in [`src/frames/registry.ts`](src/frames/registry.ts) with
   its `step`, `dealType`, and any frame-level `actions` overrides.

## Using the `/flow` skill

`/flow` is a Claude Code skill that automates the workflow above: point it
at a Figma screen or flow and it produces a React + TypeScript prototype
against the VIOOH LENS design system, reusing `DESIGN.md` and
`DESIGN-PATTERNS.md` as its ground truth. Once this repo is cloned, Claude
Code picks it up automatically — no separate install step. See
[`.claude/skills/flow/README.md`](.claude/skills/flow/README.md) for scope
and usage.

**VIOOH LENS is read-only** — the skill inspects it freely but never writes
back to the Figma file.

## Working here

Everything above lives directly on `main` — there's no parallel branch per
person or per experiment. `git pull` on `main` gets you the current
prototype, the skill, and the design references, ready to run locally.
