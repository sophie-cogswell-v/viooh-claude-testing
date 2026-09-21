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

## Two helper scripts every design-to-code prototype wants

`get_design_context` output is large and its assets are remote and fragile, so a
prototype keeps two tiny scripts under `scripts/`. They are the difference between
a prototype that renders and one that shows broken icons a week later.

**`import-frame.mjs`** — turn a saved `get_design_context` result into a frame
component without re-reading it into context. Big results are saved to a file by
the server; point this at that file:

```js
// node scripts/import-frame.mjs <tool-result.json|.txt> <ComponentName>
import fs from 'fs'
const [, , src, name] = process.argv
const arr = JSON.parse(fs.readFileSync(src, 'utf8'))
let code = (arr.find?.(e => (e.text || '').includes('export default function'))?.text) || ''
code = code.replace(/export default function\s+\w+\s*\(/, `export default function ${name}(`)
code = code.replace(/font-\['Inter:[^']*'\]\s*/g, '') // invalid family class; real weight class stays
fs.mkdirSync('src/frames', { recursive: true })
fs.writeFileSync(`src/frames/${name}.tsx`, code)
```

**`localize-assets.mjs`** — download every remote Figma asset the frames reference
and repoint `assetPathPrefix` at the local folder. Run it after importing frames
and any time you add a screen:

```js
// node scripts/localize-assets.mjs  → fills public/figma-assets/, rewrites prefixes to "/figma-assets"
import fs from 'fs'; import path from 'path'
const dir = 'src/frames', out = 'public/figma-assets'; fs.mkdirSync(out, { recursive: true })
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'))
const urls = new Map()
for (const f of files) {
  const s = fs.readFileSync(path.join(dir, f), 'utf8')
  const pre = s.match(/const assetPathPrefix = "([^"]+)"/)?.[1]; if (!pre) continue
  for (const m of s.matchAll(/\$\{assetPathPrefix\}\/([\w.-]+)`/g)) urls.set(m[1], `${pre}/${m[1]}`)
}
for (const [n, u] of urls) if (!fs.existsSync(path.join(out, n))) {
  const r = await fetch(u); if (r.ok) fs.writeFileSync(path.join(out, n), Buffer.from(await r.arrayBuffer()))
}
for (const f of files) fs.writeFileSync(path.join(dir, f),
  fs.readFileSync(path.join(dir, f), 'utf8').replace(/const assetPathPrefix = "[^"]+"/, 'const assetPathPrefix = "/figma-assets"'))
```

Two Figma-to-code gotchas both scripts encode: strip the `font-['Inter:…']` family
class the export carries (it names an invalid family and, left in, overrides the
real Inter with a serif fallback — the accompanying `font-medium`/`font-normal`
weight class is what actually matters), and never leave assets on remote URLs.
