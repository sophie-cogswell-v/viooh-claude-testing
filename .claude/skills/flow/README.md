# VIOOH FLOW — v0.1

A Claude Code skill (`/flow`) that turns a Figma screen or a full Figma user
flow into a **working React + TypeScript prototype** built on the VIOOH LENS
design system — not a Figma→React converter, and not a slideshow of exported
frames.

> **VIOOH LENS is READ-ONLY.** This skill inspects LENS freely but never
> writes to it, under any circumstances. See [`config.md`](config.md).

## What it does

Given a Figma design or flow, VIOOH FLOW:

1. Reads the whole journey — screens, navigation, states, variables,
   branches — before writing any code.
2. Asks targeted clarifying questions where the design leaves real gaps.
3. Maps every Figma element to a component via **REUSE → EXTEND → CREATE**
   against VIOOH LENS and the existing prototype.
4. Builds a real, responsive, interactive React + TypeScript prototype —
   working navigation, real component states, motion, nothing frozen.
5. Verifies the build against the Figma source (screenshot diff + actual
   click-through) and fixes discrepancies.
6. Refines with the smallest correct change on follow-up requests.

## Why

Designers need dramatically faster, high-fidelity, LENS-consistent
prototypes to demo and iterate on — without the wait for a full frontend
build or the limits of a Figma-only prototype.

## Quick start

```
/flow
```

or describe the work directly, e.g. *"prototype this Figma flow using VIOOH
LENS"*, *"add this screen to the flow"*, *"review the prototype against
Figma"*.

New to this skill? Follow the setup steps in
[`config.md`](config.md#setting-this-up-as-a-new-team-member) first
(Figma MCP access, `DESIGN.md` / `DESIGN-PATTERNS.md` at the repo root).

## How it's organised

| File | What's in it |
|---|---|
| [`SKILL.md`](SKILL.md) | The skill definition: behaviour, the DESIGN→UNDERSTAND→CLARIFY→MAP→PROTOTYPE→VERIFY→REFINE loop, non-negotiables, sources of truth. |
| [`config.md`](config.md) | Where everything lives — LENS file/library keys, `DESIGN.md`/`DESIGN-PATTERNS.md` paths, prototype target, the read-only guarantee, new-team-member setup. |
| [`figma-access.md`](figma-access.md) | Verified Figma MCP tool capabilities and their gotchas. Read before calling any Figma tool. |
| [`component-mapping.md`](component-mapping.md) | The three naming surfaces (Figma / LENS / DESIGN.md) and the REUSE→EXTEND→CREATE decision hierarchy. |
| [`workflow.md`](workflow.md) | The full workflow in detail: experience inventory, prototyping rules (responsive-by-default, real interactivity, asset localisation), Visual QA, and the "demoable" checklist. |
| [`examples/experience-inventory.md`](examples/experience-inventory.md) | A worked experience inventory example. |

Sources of truth the skill reads but never copies into code: **VIOOH LENS**
(Figma, read-only) for components/variables/icons, and the repo-root
**`DESIGN.md`** / **`DESIGN-PATTERNS.md`** for visual tokens and structural
patterns.

## Scope of v0.1

**In scope:** understanding + component mapping + React/TS prototyping of
large flows on LENS, with visual verification and iteration-friendly output.

**Out of scope (for now):** any write to LENS, production backend/auth/APIs,
full Figma write-back, publishing, a standalone HTML output mode, and a
second design system.

The core loop is intentionally output-agnostic so these can be added later
without a rewrite — see `SKILL.md` → "Extension points".

## Status

v0.1 — established 2026-09-21. Built for the Deal Creation Polish sprint and
intended to generalise beyond it.
