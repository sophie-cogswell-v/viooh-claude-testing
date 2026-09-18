# Deal Creation — Overview Mode prototype (Miguel's branch)

Interactive flow prototype for the New Deal Creation Polish sprint. Each
screen is pasted **verbatim** from the corresponding Figma frame via
`get_design_context` from the Figma MCP server — no reinterpretation.
Clicks land on the actual Figma buttons — no hotspot overlays.

## Run it

```bash
npm install
npm run dev
# then open http://localhost:5173
```

## What's here

**Stack**: Vite + React 18 + TypeScript + Tailwind v4. Chosen because
`get_design_context` from Figma MCP already outputs React + Tailwind — the
frame `.tsx` files are what Figma gives us, with only three local rewrites
(asset prefix, Inter font classes, duplicated default export). Nothing about
the layout, spacing, colours, icons or copy is re-authored by hand.

### Frames pasted from Figma (left-to-right in the flow)

| # | Step | Figma node | What |
|--|--|--|--|
| 1 | `campaign-empty`       | 367:170680 | NG Floor · empty campaign |
| 2 | `campaign-expanded`    | 367:170739 | NG · Ownership + Settings expanded |
| 3 | `deal-created`         | 367:170798 | NG · deal line drawer (no step) |
| 4 | `schedule-step`        | 367:172062 | NG · Schedule step with January calendar |
| 5 | `environment-step`     | 367:170828 | NG · Environment checklist |
| 6 | `environment-selected` | 367:170870 | NG · Airports ticked, Schedule filled |
| 7 | `dsp-step`             | 367:170912 | NG · DSP radio list |
| 8 | `cpm-step`             | 367:171063 | NG · CPM input |
| 9 | `location-step`        | 367:186632 | PG · Data-targeting → Location step (with right panel) |
|10 | `validating`           | 367:175649 | NG · deal filled + validating spinner |

Plus off-flow variants:
- **NG Map · empty** (`367:165180`), **PG Map · empty** (`367:177242`)
- **PG · empty campaign** (`367:177424`)
- **PG · Schedule step** (`367:184198`) — same step as NG but with Targets section

### Navigation — via the real Figma buttons

Figma emits `data-node-id="…"` on every element. `useFrameClicks` (see
`src/useFrameClicks.ts`) listens for clicks in capture phase, walks up the
DOM, and matches on either:
- **text** (e.g. `Skip`, `Continue`, `Overview`, `Map`, `NG Floor` / `PG`) —
  robust when Figma reuses the same component instance id across labels.
- **node id segment** (e.g. `7547:3713` for the Schedule row) — for
  distinctive rows.

The frame JSX itself stays verbatim; no `onClick` handlers are grafted in.

A small toolbar on top lets you `← Prev` / `Next →` through the flow,
`Reset` back to step 1, and shows the current step + frame name.

### The Overview↔Map toggle

Toggling `Map` / `Overview` in the Figma top bar switches the `view` in the
router, which keeps you at the same step and looks for the twin frame in
the other view. Where a twin doesn't exist yet, the router falls back to
the closest earlier step we DO have for that view (usually `campaign-empty`).

### `<Stage>` — how the responsive works

Figma exports every frame with absolute pixel positions (`w-[1512px]`,
`left-[192px]`, …). To keep the design 100% verbatim **and** make it fit any
viewport, `<Stage>` measures the container and `transform: scale()`s the frame
to its width, preserving aspect ratio. Clicks pass through correctly. At
1512px the frame renders 1:1; on a phone it's a small-scale version of the
same layout.

## Adding another frame

1. Ask Claude to run `get_design_context` on the Figma node id.
2. `python3 scripts/import-frame.py <persisted.json> ComponentName <nodeId>`
   — downloads assets to `public/figma-assets/`, rewrites the prefix, fixes
   Figma's `font-['Inter:Regular']` classes and strips the double export.
3. Add an entry to `src/frames/registry.ts` with its `step`, `dealType`,
   `view`, and any frame-level `actions` overrides.
4. If the frame introduces a brand-new step, extend `STEPS` in the same
   file — the router walks that list for Next/Prev.

## Branch layout

`miguel-main` — parallel to `main` (Sophie's slice). Nothing in `main` is
touched. `_legacy/` holds the earlier HTML/CSS/JS prototype and hotspot
experiment for reference.
