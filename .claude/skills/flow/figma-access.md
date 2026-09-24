# Figma access — verified capabilities

Read before calling any Figma tool. Everything here was verified against the LENS
file on 2026-09-21. **Do not assume a capability that is not listed.** If you need
something that is not here, test it in the open and tell the user what you found —
do not invent an API.

Tool names are prefixed with the Figma MCP server id in this session; the bare
names below are the stable part.

## Reads (available and verified)

| Tool | Use it for | Notes / gotchas |
|---|---|---|
| `whoami` | confirm auth + debug rate limits | returns handle, email, org/team seats. Run first if reads fail or you are throttled. |
| `get_metadata` | structure of a page/node (ids, types, names, x/y/w/h) | no `nodeId` ⇒ lists top-level pages. Then drill in by page/node id. Big pages return large XML — drill, don't dump. Metadata only; it cannot implement a design. **`x`/`y` are relative to the immediate parent, not canvas-absolute** — a node nested three frames deep does not carry the sum of its ancestors' offsets, only its own frame's. Don't do "canvas-absolute" arithmetic across sibling subtrees assuming otherwise; match nodes by name/structure or diff against a sibling at the same nesting depth instead. |
| `get_screenshot` | see a node/page rendered | returns a short-lived PNG URL + curl line (treat the URL like a secret). `maxDimension` caps the long edge (default 1024). Prefer URL+curl over base64 to save tokens; download then read the file. |
| `get_variable_defs` | resolved variable values for a node | needs a concrete `nodeId`. Returns e.g. `{'color/primary': '#…'}`. |
| `get_libraries` | which libraries a file uses / can add | returns subscribed + available libraries with `libraryKey`s. This is how the component/variable split in `config.md` was found. |
| `search_design_system` | find components / variables / styles | see the batch-clamp gotcha below. Fuzzy match, **not** an enumerator. |
| `get_design_context` | the primary design→code read: reference code + screenshot + asset URLs for a node | **Load the `figma-design-to-code` skill first** (the tool refuses good output otherwise). It returns Figma's own React/Tailwind guess — adapt it to LENS + the target repo; never paste it verbatim. On a large/content-heavy node it can silently return a **metadata-shaped fallback** instead of code — no error, but the payload is XML-ish `<frame id=… name=… x=… width=…>` tags with no `<p>` text content, not JSX. Grepping that for expected labels will report false negatives (they're missing because it's the wrong payload, not because the design lacks them). Confirm you actually got code (look for `export default function` / JSX tags) before trusting a "not found"; retry the same call with `forceCode: true` + `excludeScreenshot: true` on a narrower child node if you got metadata instead. |

### `search_design_system` — the clamp

The server currently **clamps a batch to one query**. Passing
`queries: [A, B]` processes only A and warns. So: issue **one query per call**, and
run several calls **in parallel** when you need to cover multiple families. Scope
with `includeLibraryKeys` (keys in `config.md`) for cleaner results. Empty results
mean "not found by that term" — inspect what you got before retrying with synonyms.

### Screenshots you want to actually look at

`get_screenshot` → download with the provided curl line to the scratchpad → read
the PNG file. A whole design-system page can be enormous (the LENS Icons page is
~8460×11047px); use a modest `maxDimension` and/or screenshot a child node.

## Prototype assets — download, never hotlink (verified the hard way)

`get_design_context` returns every icon/image as a remote
`https://www.figma.com/api/mcp/asset/<prefix>/<file>.svg` URL. **Do not ship these
in a prototype.** They are short-lived (they expire ~7 days) and, worse, they fail
to render in the browser under a burst of many icon loads *even while the same URL
still returns `200` to `curl`* — the symptom is every icon showing a broken-image
placeholder. Always download the referenced assets into a served folder
(`public/figma-assets/`) and rewrite each frame's `assetPathPrefix` to that local
path, as a routine step after generating frames. Asset filenames are stable per
icon across frames, so a single folder keyed by filename de-duplicates the whole
set (~60 files for a 13-screen flow). The `component-mapping.md` note carries the
`localize-assets.mjs` recipe.

When a `get_design_context` result is too large to return inline, the server saves
it to a file and returns the path — extract the code from that file with a script
(`import-frame.mjs` pattern) instead of re-reading it into context.

**That save-to-file path has the same ~100k-character/~25k-token cap as the
inline path — it is not a way around the limit, only a way to avoid paying for
it in your own context.** A large/content-heavy frame can come back silently
truncated mid-attribute even when the tool reports success and a file path.
Sanity-check the persisted file's size after import; see `workflow.md` §3b for
the recovery move (splice the missing shared-chrome tail from another already-
complete frame rather than re-fetching the same oversized node).

## The naming split you will hit (verified)

LENS is not one flat namespace. Assets resolve across libraries by *type*:

- **Components** → *Design System v3 (update)* (current; updated into 2026).
  Contains primitives (`Button`, `iconButton`, `Input`, `Dropdown`, `Dialog`,
  `Lists`/`cells`, `toggle-buttons`) **and** product-composed components
  (`Deal card`, `Objective card`, `Updated Deal creation card`, `Side Panel/Card/*`).
- **Colour variables** → *VIOOH - Library (legacy)*, under a semantic tree:
  `Colors/{Brand,Grey,Background,Semantic}/…/{Surface,Border}` with STROKE /
  SHAPE_FILL / FRAME_FILL scopes.
- **Text styles** → a `style` search for "text" returns **empty**. LENS carries
  type as tokens/variables (and a linked Fonts file), not as Figma text styles.
  Do not expect `get`-style calls to surface a "Body / 13" text style.

Consequence for mapping: a Figma component's *name* (v3), a colour's *variable
name* (legacy, `Colors/Brand/Primary/Surface`), and DESIGN.md's *code token*
(`{colors.primary.900}`) are three different strings for related things. See
`component-mapping.md`.

## Writes — gated and forbidden against LENS

Write tools (`use_figma`, `create_new_file`, `upload_assets`, `generate_diagram`,
…) require a separate OAuth-authenticated Figma plugin that may not be connected,
and they need the `figma-use` skill loaded. They are **out of scope for V0.1**.
Whatever their status: **never** run a write operation against the LENS fileKey.
If write-back is ever in scope, it targets an explicitly user-named destination
file only.

## Rate limits

If reads start failing or slowing, run `whoami` to check seat/limits, then back off
and batch less aggressively. Cache what you have already read (persist findings in
the experience inventory) instead of re-fetching.
