# viooh-claude-testing — `viooh-flow-skill` branch

This branch builds **VIOOH FLOW** (`/flow`), a Claude Code skill that turns a
Figma screen or flow into a working React + TypeScript prototype on the
VIOOH LENS design system.

> **VIOOH LENS is READ-ONLY.** The skill inspects LENS freely but never
> writes to it.

## Start here

- **[.claude/skills/flow/README.md](.claude/skills/flow/README.md)** — the
  skill's own README: what it does, the workflow loop, file layout, and the
  v0.1 scope. Read this first.
- **[.claude/skills/flow/SKILL.md](.claude/skills/flow/SKILL.md)** — the
  skill definition Claude Code loads.

## What else lives on this branch

| File | Purpose |
|---|---|
| [`DESIGN.md`](DESIGN.md) | Authoritative visual system — colour/type/spacing/radius/shadow tokens and component recipes. |
| [`DESIGN-PATTERNS.md`](DESIGN-PATTERNS.md) | Authoritative structural pattern vocabulary — surfaces, disclosure, density, state progression. |
| [`.claude/skills/flow/`](.claude/skills/flow/) | The `/flow` skill itself (see its README above). |

This branch is intentionally scoped to the skill plus the design docs it
depends on — no prototype app is tracked here.

## Status

v0.1 — established 2026-09-21.
