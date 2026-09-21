# Component mapping

Mapping is a core responsibility, not an afterthought. Every meaningful Figma
element becomes a decision: reuse, extend, or create — argued, not defaulted.

## The three naming surfaces

A single visual thing has up to three different names. Keep them straight:

```
Figma node          →   LENS library asset           →   prototype component
"Primary button"        v3: Button (Color=primary)       <Button variant="primary">
```

```
Figma fill          →   LENS variable (legacy)        →   DESIGN.md code token
indigo 900              Colors/Brand/Primary/Surface     {colors.primary.900}
```

- **Figma component/variable names** are what `search_design_system` and
  `get_metadata` return. Components live in *Design System v3 (update)*; colour
  variables in *VIOOH - Library (legacy)* (see `config.md`, `figma-access.md`).
- **DESIGN.md code tokens** (`{colors.…}`, `{components.…}`, `{spacing.…}`) are the
  authoritative *values* to build against. When you know the DESIGN.md recipe for a
  component, prefer it — it is more precise than Figma's raw fills.
- **Prototype components** are the React components you reuse or create.

Do not assume the three names match. Resolve the Figma name via search, then build
against the DESIGN.md token/recipe where one exists.

## Decision hierarchy: REUSE → EXTEND → CREATE

Apply in order. Stop at the first that fits.

### 1. REUSE
An existing prototype component, or a LENS component with a DESIGN.md recipe,
covers this as-is. Use it. Most VTM UI is built from a small primitive set
(`Button`, `Input`, `Dropdown`, `Chip`, `Card`, `SectionButton`, `Accordion`,
`Dialog`, table `cells` — see DESIGN.md "Component library"). Reach here first.

Confirm existence before claiming it: a component is only "in LENS" if
`search_design_system` (or a screenshot/metadata read) shows it. Never say a LENS
component exists on the strength of generic UI knowledge.

### 2. EXTEND
A component is close but this instance needs another variant, size, slot or state.
**Compose or parameterise the existing one** — add a prop/variant — rather than
copy-pasting a near-duplicate. A new `Color`/`Size`/state on `Button` is an extend,
not a create.

### 3. CREATE
No LENS component and no prototype component fits. Only then create one — and be
able to say **why** (which searches came back empty, which existing component was
closest and why it did not fit). Build the new component from DESIGN.md tokens and
the closest LENS pattern; give it the same variant/state shape LENS uses so it
reads as part of the system, not a bespoke one-off. DESIGN.md/DESIGN-PATTERNS.md
both make minimising single-use components an explicit goal — a create owes an
argument.

## What NOT to do

- Do **not** rebuild an imaginary VIOOH design system from generic knowledge.
  Inspect the real LENS. If a detail is unavailable, make the *smallest* assumption
  and state it — don't fabricate a token or a component.
- Do **not** duplicate a component because reuse is slightly more work.
- Do **not** colour a status chip, card, or marker by hand — DESIGN.md fixes those
  mappings (status chips, the map palette). Re-deriving them per screen is the
  characteristic VTM mistake.
- Do **not** flatten Figma component *instances* into anonymous divs — a repeated
  instance in Figma is a signal to make (or reuse) one prototype component.

## Recording the map

For a flow of any size, keep a mapping table in the experience inventory
(`workflow.md`). One row per distinct component:

| Figma element | LENS asset (library) | Decision | Prototype component | Notes / DESIGN.md recipe |
|---|---|---|---|---|
| Primary button | Button — v3 | REUSE | `<Button variant="primary">` | `{components.button.variants.primary}` |
| Campaign card | Deal card — v3 (partial) | EXTEND | `<CampaignCard>` | based on `{components.card}` SECONDARY theme |
| Frame availability sparkline | — (none found) | CREATE | `<FrameSparkline>` | searches "spark"/"mini chart" empty; built from `{components.chart}` |

The table is the audit trail for every CREATE and the lookup that stops the next
screen minting a second copy of the same thing.
