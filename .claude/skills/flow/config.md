# VIOOH FLOW — configuration

Everything the skill needs to locate its sources. Edit this file (not the others)
when a URL, key or path changes.

## VIOOH LENS — READ ONLY

```
VIOOH LENS = READ ONLY
```

Inspect freely; never write. This holds even if the user asks you to change LENS.

- **URL**: https://www.figma.com/design/pkPCnWlqS690Q1TPMd4yil/VIOOH-LENS--Design-System-%E2%9C%A8
- **fileKey**: `pkPCnWlqS690Q1TPMd4yil`
- **Version seen**: "VIOOH Lens V.4 — Created 2026"

### How LENS is actually organised (verified 2026-09-21)

The fileKey above is a **hub file**, not the whole system. It has two pages:

- `245:4574` — **↘ Summary**: an index that links out to separate files for
  Sizes, Fonts, Colors, Icons and Components (plus Work-In-Progress / Interfaces /
  Archives). The canonical primitive set advertised here: Button, Button Icon,
  Input, Select, Textarea, Autocomplete, Badge, Chip, Checkbox, Radio, Toggle.
- `7:454` — **↘ Icons**: 180 Phosphor-based icons, mirrored 1:1 to
  `src/assets/icon/*.svg` in the product codebase.

LENS assets resolve through **two org libraries**, and they are split by asset type:

| Asset type | Library | libraryKey |
|---|---|---|
| **Components** (current) | Design System v3 (update) | `lk-779564e0d5ed37d99459bb4ac25551711ebfb7ec8527b70b138a1bf4475bf7a090e11ad776e16384cd5a4386b99767a51e10b528a52457c177e08e3d0baff675` |
| **Color variables** | VIOOH - Library (legacy) | `lk-82a0ef2ee00495a435628bad0e431827759bcfd428e3c7b9e56210a7e87c2dd94fca42aae89e9a7ba2814c3d7fdcc2516f44efa3d8e3ba956dde1c6bfb0ab41d` |

Prefer **Design System v3 (update)** for components; treat **VIOOH - Library
(legacy)** as the current home of the semantic colour variables but as *legacy*
for components. Pass these keys as `includeLibraryKeys` to scope searches.

## Design documentation

Both live at the repository root and are authoritative. Read; do not duplicate.

- `DESIGN.md` — visual system (tokens + component recipes + composition prose).
- `DESIGN-PATTERNS.md` — structural pattern vocabulary.

If a project grows its own repo-level `DESIGN-PATTERNS.md`, that copy wins for that
project (per DESIGN-PATTERNS.md's two-level rule); report the divergence.

## Prototype target

- **Primary**: React 18 + TypeScript + Vite. Styling with Tailwind (LENS/DESIGN.md
  are Tailwind-token based) or plain CSS modules — match whatever the target repo
  already uses; do not introduce a second styling system.
- **Secondary (future, not V0.1)**: standalone disposable HTML.

## Figma integration

- Reads go through the Figma MCP server (tools prefixed
  `mcp__…__get_metadata`, `get_design_context`, `get_screenshot`,
  `get_variable_defs`, `get_libraries`, `search_design_system`, `whoami`). See
  `figma-access.md` for verified behaviour and limits.
- **Write** tools (`use_figma`, `create_new_file`, …) exist but are gated behind a
  separate OAuth-authenticated Figma plugin that is not guaranteed to be connected.
  They are **out of scope for V0.1** and must **never** target LENS.

## Setting this up as a new team member

1. Connect the Figma MCP server and confirm access by running `whoami` — you need
   at least View access to the Viooh Ltd org libraries.
2. Confirm you can read LENS: `get_metadata` with the fileKey above and no nodeId
   should list the Summary and Icons pages.
3. Ensure `DESIGN.md` and `DESIGN-PATTERNS.md` are present at the repo root.
4. Invoke the skill with `/flow` (or ask to "prototype this Figma flow using
   VIOOH LENS").
