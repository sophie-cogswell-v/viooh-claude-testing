# Deal Creation — Overview Mode prototype (Miguel's branch)

Interactive flow prototype for the New Deal Creation Polish sprint. Each
screen is pasted **verbatim** from the corresponding Figma frame via
`get_design_context` from the Figma MCP server — no reinterpretation. Frames
scale to any viewport width via a `<Stage>` wrapper.

## Run it

```bash
npm install
npm run dev
# then open http://localhost:5173
```

## What's here

Stack: **Vite + React 18 + TypeScript + Tailwind v4**. Chosen because
`get_design_context` from Figma MCP already outputs React + Tailwind — the
frame `.tsx` files are what Figma gives us, with only three local rewrites
(asset prefix, Inter font classes, duplicated default export). Nothing about
the layout, spacing, colours, icons or copy is re-authored by hand.

### Frames pasted from Figma

Nine hitos of the flow, wired into a small state machine (`src/App.tsx`) that
tracks `frameId`, `dealType` and `view`. Toggles Overview↔Map and the deal
type pills route to the equivalent frame at the same stage of the flow.

| id | Figma node | What |
|----|-----------|------|
| `ng-overview-empty` | 367:170680 | NG Floor · empty campaign |
| `ng-overview-env-step` | 367:170828 | NG · Environment step open |
| `ng-overview-cpm-step` | 367:171063 | NG · CPM step open |
| `ng-overview-later` | 367:175649 | NG · deal filled + validating |
| `ng-map-empty` | 367:165180 | NG Map · empty campaign |
| `pg-overview-empty` | 367:177424 | PG · empty campaign |
| `pg-overview-schedule-step` | 367:184198 | PG · Schedule step with calendar |
| `pg-map-empty` | 367:177242 | PG Map · empty campaign |
| `pg-map-live-delivery` | 367:186632 | PG · deal with Location step + right panel |

### Navigation

Hotspots (invisible clickable rectangles positioned in %) sit on top of each
frame — the frame JSX itself stays untouched. Toggle **Show hotspots** in the
top toolbar to see and tune them. The chip in the toolbar tells you which
frame/deal type/view is current; **Jump to** lets you flip between any of the
nine frames without clicking through.

### `<Stage>` — how the responsive works

Figma exports every frame with absolute pixel positions (`w-[1512px]`,
`left-[192px]`, …). To keep the design 100% verbatim **and** make it fit any
viewport, `<Stage>` measures the container and `transform: scale()`s the frame
to its width, preserving aspect ratio. Clicks pass through correctly.

At 1512px the frame renders 1:1. On a phone it's a small-scale version of the
same layout. This trades mobile reflow for absolute fidelity — the intent is
"does this Figma layout function as a flow?" not "does it work on iPhone?".

## Adding another frame

1. Ask Claude to run `get_design_context` on the Figma node id.
2. Run: `python3 scripts/import-frame.py <persisted.json> ComponentName <nodeId>`
   — downloads assets to `public/figma-assets/`, rewrites the prefix, fixes
   Figma's weird `font-['Inter:Regular']` classes and strips the double
   default export.
3. Add an entry to `src/frames/registry.ts` (Component, dimensions, hotspots).
4. If the frame belongs to a new stage of the flow, teach `stageOf()` and
   `frameFor()` in the same file.

## Branch layout

`miguel-main` — parallel to `main` (Sophie's slice). Nothing in `main` is
touched. `_legacy/` holds the earlier HTML/CSS/JS prototype from this branch's
first pass (Sophie's slice + my inspired-not-verbatim rebuild) for reference.
