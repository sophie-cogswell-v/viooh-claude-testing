---
version: 0.2
name: VIOOH Trading Manager (VTM)
description: >-
  Design system extracted from the programmatic-platform-frontend
  (viooh-exchange-ui) codebase. A data-dense B2B web application for
  programmatic Digital-Out-Of-Home (DOOH) ad trading — deals, campaigns,
  inventory maps, allocation reports and analytics. Built on TailwindCSS 3
  with CSS custom-property tokens, the Inter typeface, and an in-house React
  component library (src/lib) layered over ag-grid, deck.gl/CARTO and
  Highcharts.
  Colour tokens are reconciled against the canonical "VIOOH LENS · Design
  System" Figma library, which defines the full Solid + Opacity primitive
  ramps and the semantic alias layer.

colors:
  # --- Essential (core text / ink) ---
  essential:
    primary: "#131221"    # near-black ink, primary text
    secondary: "#42414e"  # muted body text
    tertiary: "#7c7b87"   # captions, placeholders

  # --- Primary (deep indigo brand) ---
  primary:
    "50": "#f4f5ff"
    "100": "#f0f2fe"
    "200": "#ebeefe"
    "300": "#cad1fc"
    "400": "#a0acf8"
    "500": "#7d8be6"
    "600": "#2c24c3"   # accent / links / interactive text
    "700": "#272199"
    "800": "#171273"   # brand default ({colors.primary.800})
    "900": "#15115e"   # primary button fill
    "950": "#090642"
    DEFAULT: "{colors.primary.800}"

  # --- Purple (secondary brand accent) ---
  purple:
    "50": "#f6f2fe"
    "100": "#f2ebff"
    "200": "#e8dbff"
    "300": "#d1bafc"
    "400": "#b998f6"
    "500": "#a173f6"
    "550": "#6d40c3"
    "600": "#6e2ee4"
    "700": "#5117be"
    "800": "#46179d"
    "900": "#3e1a82"
    "950": "#1e0847"
    DEFAULT: "{colors.purple.500}"

  # --- Neutral (greyscale, surfaces & borders) ---
  neutral:
    "50": "#ffffff"    # base surface / white
    "100": "#f8f8f9"   # subtle fill
    "200": "#f3f3f5"
    "300": "#eaeaef"   # default border
    "400": "#bab9c3"
    "500": "#a09faa"
    "600": "#7c7b87"   # secondary text
    "700": "#605f6b"
    "800": "#52515e"
    "900": "#42414e"
    "950": "#131221"   # ink
    DEFAULT: "{colors.neutral.500}"

  # --- Semantic / status accents (full 50–950 ramps) ---
  green:      # success  (DEFAULT 400)
    "50": "#e8fef5"
    "100": "#cafce8"
    "200": "#a0f8d5"
    "300": "#7de6bc"
    "400": "#2ee49b"
    "500": "#12be79"
    "600": "#129f67"
    "700": "#138859"
    "800": "#0c6e47"
    "900": "#054c30"
    "950": "#022c20"
    DEFAULT: "{colors.green.400}"
  yellow:     # warning  (DEFAULT 500)
    "50": "#fff9eb"
    "100": "#fff5db"
    "200": "#fce9ba"
    "300": "#f6db98"
    "400": "#fbd263"
    "500": "#f8bc1a"
    "600": "#e4b02e"
    "700": "#be8f17"
    "800": "#9d7717"
    "900": "#82651a"
    "950": "#473508"
    DEFAULT: "{colors.yellow.500}"
  pinkRed:    # danger / error (DEFAULT 600)
    "50": "#fff4f6"
    "100": "#fee8ec"
    "200": "#fccad3"
    "300": "#f8a0b0"
    "400": "#e67d90"
    "500": "#e35770"
    "600": "#e42e4f"
    "700": "#be1235"
    "800": "#9f1234"
    "900": "#851631"
    "950": "#4c0516"
    DEFAULT: "{colors.pinkRed.600}"
  sky:        # info / links-on-light (DEFAULT 500)
    "50": "#f4fcff"
    "100": "#e8f7fe"
    "200": "#caedfc"
    "300": "#a0def8"
    "400": "#7dc7e6"
    "500": "#2eade4"
    "600": "#128abe"
    "700": "#12759f"
    "800": "#136588"
    "900": "#0e4f6c"
    "950": "#093348"
    DEFAULT: "{colors.sky.500}"

  # --- Extended categorical palette (charts, tags, maps) — full 50–950 ramps ---
  blue:       # DEFAULT 500
    "50": "#fafeff"
    "100": "#ebfaff"
    "200": "#dbf7ff"
    "300": "#baecfc"
    "400": "#98e0f6"
    "500": "#73d7f6"
    "600": "#2ebae4"
    "700": "#1797be"
    "800": "#177e9d"
    "900": "#1a6a82"
    "950": "#083847"
    DEFAULT: "{colors.blue.500}"
  lime:       # DEFAULT 600
    "50": "#f8fef2"
    "100": "#f5ffeb"
    "200": "#edffdb"
    "300": "#dbfcba"
    "400": "#c7f698"
    "500": "#b5f673"
    "600": "#89e42e"
    "700": "#6bbe17"
    "800": "#5a9d17"
    "900": "#4e821a"
    "950": "#284708"
    DEFAULT: "{colors.lime.600}"
  orange:     # DEFAULT 500
    "50": "#fff8f4"
    "100": "#fff5ef"
    "200": "#fef0e8"
    "300": "#fcdcca"
    "400": "#f8c0a0"
    "500": "#e6a37d"
    "600": "#e4712e"
    "700": "#be5112"
    "800": "#9f4612"
    "900": "#883e13"
    "950": "#4c1f05"
    DEFAULT: "{colors.orange.500}"
  pink:       # DEFAULT 500 (note extra step 650)
    "50": "#fffafd"
    "100": "#fef2f8"
    "200": "#ffdbee"
    "300": "#fcbadd"
    "400": "#f698ca"
    "500": "#f673b9"
    "600": "#e42e8f"
    "650": "#c13584"
    "700": "#be1770"
    "800": "#9d175e"
    "900": "#821a51"
    "950": "#47082a"
    DEFAULT: "{colors.pink.500}"
  brown:      # DEFAULT 500
    "50": "#fef8f2"
    "100": "#fff5eb"
    "200": "#ffecdb"
    "300": "#fcdaba"
    "400": "#f6c598"
    "500": "#f6b273"
    "600": "#be6817"
    "700": "#9d5817"
    "800": "#824c1a"
    "900": "#69380a"
    "950": "#472608"
    DEFAULT: "{colors.brown.500}"

  overlay:
    dark: "rgba(0, 0, 0, 0.2)"    # standard modal scrim
    darker: "rgba(0, 0, 0, 0.6)"  # emphasised modal scrim

  # --- Semantic aliases (Figma "Colours: Semantic" + text/background tokens) ---
  # These point at primitives; prefer them over raw ramp steps in product UI.
  semantic:
    text:
      primary: "{colors.essential.primary}"     # #131221  (Figma text.primary / (NEW) Text/Primary)
      secondary: "{colors.essential.secondary}" # #42414e  (Figma text.secondary)
      tertiary: "{colors.essential.tertiary}"   # #7c7b87  (Figma text.tiertiary [sic] / (NEW) Text/Tertiary)
    background:
      surface: "#ffffff"                         # base page/surface
    divider: "#42414e1a"                         # neutral-900 @ 10%
    neutralSoftBg: "#18163708"                   # ~3% ink, softest fill

  # --- Alpha / Opacity ramps (Figma "Colours: Primitives" → Opacity) ---
  # Every family carries an 11-step alpha ramp (5,10,20,30,40,50,60,70,80,90,95%).
  # NOT a naive single-base fade: each ramp rides a saturated base for the low
  # steps, then deepens through darker solids at the top. The deepening point is
  # hand-tuned per family. Values below are the exact 8-digit hex from Figma.
  opacity:
    primary:      # base 600 for 5–80, then 900 (90), 950 (95)
      "5": "#2c24c30d"
      "10": "#2c24c31a"
      "20": "#2c24c333"
      "30": "#2c24c34d"
      "40": "#2c24c366"
      "50": "#2c24c380"
      "60": "#2c24c399"
      "70": "#2c24c3b3"
      "80": "#2c24c3cc"
      "90": "#15115ee6"
      "95": "#090642f2"
    purple:       # base 600 for 5–80, then 900 (90), 950 (95)
      "5": "#6e2ee40d"
      "10": "#6e2ee41a"
      "20": "#6e2ee433"
      "30": "#6e2ee44d"
      "40": "#6e2ee466"
      "50": "#6e2ee480"
      "60": "#6e2ee499"
      "70": "#6e2ee4b3"
      "80": "#6e2ee4cc"
      "90": "#3e1a82e6"
      "95": "#1e0847f2"
    neutralDark:  # all steps on neutral-950 (#131221)
      "5": "#1312210d"
      "10": "#1312211a"
      "20": "#13122133"
      "30": "#1312214d"
      "40": "#13122166"
      "50": "#13122180"
      "60": "#13122199"
      "70": "#131221b3"
      "80": "#131221cc"
      "90": "#131221e6"
      "95": "#131221f2"
    neutralLight: # all steps on neutral-100 (#f8f8f9)
      "5": "#f8f8f90d"
      "10": "#f8f8f91a"
      "20": "#f8f8f933"
      "30": "#f8f8f94d"
      "40": "#f8f8f966"
      "50": "#f8f8f980"
      "60": "#f8f8f999"
      "70": "#f8f8f9b3"
      "80": "#f8f8f9cc"
      "90": "#f8f8f9e6"
      "95": "#f8f8f9f2"
    sky:          # base 500 for 5–60, then 700 / 800 / 900 / 950
      "5": "#2eade40d"
      "10": "#2eade41a"
      "20": "#2eade433"
      "30": "#2eade44d"
      "40": "#2eade466"
      "50": "#2eade480"
      "60": "#2eade499"
      "70": "#12759fb3"
      "80": "#136588cc"
      "90": "#0e4f6ce6"
      "95": "#05374cf2"
    green:        # base 500 for 5–60, then 700 / 800 / 900 / 950
      "5": "#12be790d"
      "10": "#12be791a"
      "20": "#12be7933"
      "30": "#12be794d"
      "40": "#12be7966"
      "50": "#12be7980"
      "60": "#12be7999"
      "70": "#138859b3"
      "80": "#0c6e47cc"
      "90": "#054c30e6"
      "95": "#022c20f2"
    yellow:       # base 500 for 5–70, then 600 (80), 700 (90), 800 (95)
      "5": "#f8bc1a0d"
      "10": "#f8bc1a1a"
      "20": "#f8bc1a33"
      "30": "#f8bc1a4d"
      "40": "#f8bc1a66"
      "50": "#f8bc1a80"
      "60": "#f8bc1a99"
      "70": "#f8bc1ab3"
      "80": "#e4b02ecc"
      "90": "#be8f17e6"
      "95": "#9d7717f2"
    pinkRed:      # base 600 for 5–60, then 700 / 800 / 900 / 950
      "5": "#e42e4f0d"
      "10": "#e42e4f1a"
      "20": "#e42e4f33"
      "30": "#e42e4f4d"
      "40": "#e42e4f66"
      "50": "#e42e4f80"
      "60": "#e42e4f99"
      "70": "#be1235b3"
      "80": "#9f1234cc"
      "90": "#851631e6"
      "95": "#4c0516f2"
    lime:         # base 600 for 5–60, then 700 / 800 / 900 / 950
      "5": "#89e42e0d"
      "10": "#89e42e1a"
      "20": "#89e42e33"
      "30": "#89e42e4d"
      "40": "#89e42e66"
      "50": "#89e42e80"
      "60": "#89e42e99"
      "70": "#6bbe17b3"
      "80": "#5a9d17cc"
      "90": "#4e821ae6"
      "95": "#284708f2"
    orange:       # base 600 for 5–80, then 900 (90), 950 (95)
      "5": "#e4712e0d"
      "10": "#e4712e1a"
      "20": "#e4712e33"
      "30": "#e4712e4d"
      "40": "#e4712e66"
      "50": "#e4712e80"
      "60": "#e4712e99"
      "70": "#e4712eb3"
      "80": "#e4712ecc"
      "90": "#883e13e6"
      "95": "#4c1f05f2"
    blue:         # base 600 for 5–60, then 700 / 800 / 900 / 950
      "5": "#2ebae40d"
      "10": "#2ebae41a"
      "20": "#2ebae433"
      "30": "#2ebae44d"
      "40": "#2ebae466"
      "50": "#2ebae480"
      "60": "#2ebae499"
      "70": "#1797beb3"
      "80": "#177e9dcc"
      "90": "#1a6a82e6"
      "95": "#083847f2"
    pink:         # base 600 for 5–70, then 800 (80), 900 (90), 950 (95)
      "5": "#e42e8f0d"
      "10": "#e42e8f1a"
      "20": "#e42e8f33"
      "30": "#e42e8f4d"
      "40": "#e42e8f66"
      "50": "#e42e8f80"
      "60": "#e42e8f99"
      "70": "#e42e8fb3"
      "80": "#9d175ecc"
      "90": "#821a51e6"
      "95": "#47082af2"
    brown:        # base 700 for 5–70, then 800 (80), 900 (90), 950 (95)
      "5": "#9d58170d"
      "10": "#9d58171a"
      "20": "#9d581733"
      "30": "#9d58174d"
      "40": "#9d581766"
      "50": "#9d581780"
      "60": "#9d581799"
      "70": "#9d5817b3"
      "80": "#824c1acc"
      "90": "#69380ae6"
      "95": "#472608f2"

typography:
  fontFamily:
    sans: "Inter, sans-serif"
  # Inter is loaded with the full variable weight axis (100..900).
  # Levels below map 1:1 to the Tailwind component classes in tailwind.config.js.
  # sectionHeader is the micro-caption that labels a *group of items in a list* —
  # both live uses are that: a nav group's heading above its links
  # (InventoryManagement/ReferenceData/Sidebar.tsx:15, in
  # {colors.opacity.neutralDark.60}) and the alphabetical bucket letter inside a
  # long multi-select (src/lib/MultiSelect/MultiSelect.tsx:93, in
  # {colors.neutral.900}). Colour is not fixed by the role; the 9px uppercase is.
  # It is NOT a card's heading band ({components.card.headerTypography}, body-sm)
  # and NOT a disclosure control's label ({components.accordion.labelTypography}).
  # Its uppercase is the only textTransform in the scale, so any string given to it
  # is capitalised whether or not that was intended.
  # Read from the VTM checkout at cfea9273 (2026-08-04, v1.98.29).
  sectionHeader:
    family: "{typography.fontFamily.sans}"
    size: "9px"
    lineHeight: "0.75rem"
    weight: 700
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  bodySm:
    family: "{typography.fontFamily.sans}"
    size: "11px"
    lineHeight: "1.25rem"
    weight: 400
  bodyBase:
    family: "{typography.fontFamily.sans}"
    size: "13px"
    lineHeight: "1.25rem"
    weight: 400
  bodyLg:
    family: "{typography.fontFamily.sans}"
    size: "15px"
    lineHeight: "1.5rem"
    weight: 400
  subHeaderSm:
    family: "{typography.fontFamily.sans}"
    size: "11px"
    lineHeight: "1.25rem"
    weight: 500
  subHeaderBase:
    family: "{typography.fontFamily.sans}"
    size: "13px"
    lineHeight: "1.25rem"
    weight: 500
  subHeaderLg:
    family: "{typography.fontFamily.sans}"
    size: "15px"
    lineHeight: "1.5rem"
    weight: 500
  headerBase:
    family: "{typography.fontFamily.sans}"
    size: "15px"
    lineHeight: "1.25rem"
    weight: 600
  headerLg:
    family: "{typography.fontFamily.sans}"
    size: "17px"
    lineHeight: "1.5rem"
    weight: 600
  headerXl:
    family: "{typography.fontFamily.sans}"
    size: "20px"
    lineHeight: "1.75rem"
    weight: 600
  header2xl:
    family: "{typography.fontFamily.sans}"
    size: "24px"
    lineHeight: "2rem"
    weight: 600
  header3xl:
    family: "{typography.fontFamily.sans}"
    size: "32px"
    lineHeight: "2.5rem"
    weight: 600

rounded:
  sm: "2px"       # rounded-sm  — checkboxes, small inputs
  md: "6px"       # rounded-md  — buttons, inputs, modals, alerts (workhorse radius)
  lg: "8px"       # rounded-lg
  xl: "12px"      # rounded-xl  — cards, panels
  full: "9999px"  # rounded-full — status pills, chip indicators, toggles, avatars

# The CSS custom-property grid from spacing.pcss. Governs page-level rhythm:
# panel gaps, section padding, the inset around the working surface.
spacing:
  no: "0px"
  xxs: "2px"
  xs: "5px"
  sm: "10px"
  md: "15px"   # base grid unit (--grid-spacing)
  lg: "20px"
  xl: "25px"
  vl: "30px"

# The second, smaller scale: Tailwind's stock 4px steps, which the config
# extends rather than replaces. This is what padding *inside* a src/lib
# component is written in — keys are the Tailwind utility suffixes (p-2 → "2").
# Never use it for page layout; see the Layout section for which is which.
componentSpacing:
  "0.5": "2px"
  "1": "4px"
  "1.5": "6px"
  "2": "8px"    # {components.button.padding} — Button Size.MEDIUM
  "3": "12px"
  "4": "16px"   # `p-4`/`px-4`/`gap-4` inside src/lib — e.g. FileUpload.tsx:58, ToasterElement.tsx:65, DealLineStrip.tsx:25 (@ cfea92736d, 2026-08-04)

# Layout chrome dimensions (fixed application shell)
layout:
  # The shell is clamped to the viewport and the document never scrolls:
  # `AppPageWrapper` is `h-screen overflow-hidden` and the surface holding the page
  # is `overflow-hidden` too (AppPageWrapper.tsx:23, :31). Every page fills that
  # fixed box and puts its own overflow on a named region inside it.
  appShellHeight: "100vh"                 # `h-screen`, AppPageWrapper.tsx:23
  workingSurfaceFrameWidth: "6px"         # `border-6` in {colors.primary.950}, AppPageWrapper.tsx:23 — all four sides
  # The height a page's scrolling region is given when it is sized explicitly
  # rather than by `h-full`: `h-mainContent` (tailwind.config.js:373), used by
  # `ContentWithLeftSidebar` and `ContentWithRightSidebar`. The `var()` resolves
  # against {layout.headerHeight} (--header-height, spacing.pcss:11).
  # `min-h-mainContent` (tailwind.config.js:370) is the same calc without the
  # trailing 0.8rem.
  # NOTE (known drift): that 0.8rem (12.8px) appears to stand in for the frame the
  # shell draws — 2 x {layout.workingSurfaceFrameWidth} = 12px — so it is 0.8px
  # out, and it is a hard-coded rem in the Tailwind config rather than a custom
  # property derived from the frame.
  mainContentHeight: "calc(100vh - var(--header-height) - 0.8rem)"
  headerHeight: "60px"
  sidebarWidth: "60px"
  campaignDrawerWidth: "350px"
  secondaryPanelWidth: "387px"
  # Two different surfaces sit at the right edge of the planner and they are NOT the
  # same width. `rightSidebarWidth` (--right-sidebar-width) is the opaque column:
  # PlannerRightSidebar, and the direct-sales summary panel's backing column in
  # overview and review modes. `summaryRailWidth` is the transparent card rail that
  # floats over the map. See {components.summaryPanel}.
  rightSidebarWidth: "350px"
  summaryRailWidth: "293px"           # `w-[293px]`, PlannerSummaryPanel.tsx:162 — a literal, on neither spacing scale
  overviewModeFooterHeight: "52px"    # --overview-mode-footer-height; the backing column stops above it
  # The strip's *footprint*, not its content box. `DealLineStrip` applies this as
  # a fixed `w-[…]` with `px-[…]` inside it, and the app inherits
  # `box-sizing: border-box` (src/stylesheets/app.pcss:1-18), so the strip
  # occupies 382px and its cards get 350px.
  # NOTE (known drift): the custom property is named
  # `--deal-line-strip-min-width` (src/stylesheets/spacing.pcss:13) but is
  # consumed as a fixed width, never a `min-width`
  # (PlannerDealLine/DealLineStrip.tsx:17). Treat it as fixed.
  dealLineStripMinWidth: "382px"
  # Does double duty: padding inside the strip, and — added again, outside it —
  # the gap in the secondary panel's computed left offset
  # (PlannerLineActions/utils/functions.ts:34).
  dealLineStripXPadding: "16px"

shadow:
  # `sm` is Tailwind's stock shadow-sm — the config extends boxShadow with the
  # named shadows below but never overrides `sm`, and src/lib/Card uses it for
  # every raised surface variant. Kept as a literal so nothing has to know
  # Tailwind's defaults.
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  # shadow-inner-sm (--shadow-inner-sm): a hairline lift plus a 1px inset bottom
  # rule, so a control reads as a pressable surface rather than a floating card.
  # The house shadow for input-like affordances — selects, date pickers and the
  # SOLID SectionButton.
  innerSm: "0px 1px 2px 0px rgba(16, 16, 52, 0.08), inset 0px -1px 0px 0px rgba(16, 16, 52, 0.2)"
  button: "0 2px 4px 0 rgba(5, 35, 105, 0.15), 0 1px 1px 0 rgba(16, 25, 189, 0.1)"
  card: "0 20px 40px -2px rgba(0, 0, 0, 0.1)"   # heavy lift — modals, floating panels, not src/lib/Card
  dropdownMenu: "0 20px 40px 0 rgba(7, 10, 63, 0.1), 0 2px 10px 0 rgba(5, 35, 105, 0.15)"
  imageVideo: "0px 20px 40px 0px rgba(0, 0, 0, 0.2)"

motion:
  easing:
    standard: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"  # pop/slide easing
    linear: "linear"                                    # fades, spinners, skeletons
  duration:
    fast: "150ms"    # pop-out, toggles, small state changes
    base: "300ms"    # pop-in, slide-in
    slow: "500ms"    # pop-in/out, fades
  transition: "transition-colors / transition-all, 150ms ease-in-out (interactive states)"

# Each entry notes the reusable React component that implements it in
# programmatic-platform-frontend. Prefer reusing those components over
# rebuilding from raw tokens.
components:
  button:   # src/lib/Button — variants map to its `Color` enum; Storybook "Buttons/Button"
    borderRadius: "{rounded.md}"
    # Size.MEDIUM = p-2 = 8px, which is on {componentSpacing}, not {spacing} —
    # src/lib components pad with Tailwind's stock 4px steps rather than the
    # CSS custom-property grid. Two spacing systems coexist; see the Layout section.
    padding: "{componentSpacing.2}"
    typography: "{typography.subHeaderBase}"
    shadow: "{shadow.button}"
    variants:
      primary:      # Color.PRIMARY
        background: "{colors.primary.900}"
        text: "{colors.primary.50}"
        hover: "{colors.primary.700}"
        active: "{colors.primary.600}"
      secondary:    # Color.SECONDARY
        background: "{colors.neutral.50}"
        text: "{colors.primary.600}"
        border: "{colors.neutral.300}"
      tertiary:     # Color.TERTIARY
        background: "{colors.primary.100}"
        text: "{colors.primary.600}"
      transparent:  # Color.TRANSPARENT
        background: "transparent"
        text: "{colors.primary.600}"
      danger:       # Color.DANGER
        background: "{colors.pinkRed.800}"
        text: "{colors.pinkRed.50}"
    disabled:
      background: "{colors.neutral.300}"
      text: "{colors.neutral.400}"
  sectionButton:  # src/lib/SectionButton (+ SectionButtonMenu, SectionButtonChipList); Storybook "Buttons/SectionButton"
    # One bordered row per setting: icon and label left, the chosen value right.
    # The theme is not decorative — DASHED is an empty slot inviting a value,
    # SOLID is a value already set. Panels flip between the two off their own
    # selection state, so a column of these rows reads as a checklist.
    borderRadius: "{rounded.md}"        # SectionButtonRounded.DEFAULT; NONE / ROUNDED_TOP / ROUNDED_BOTTOM also exist so rows can stack flush as one group
    borderWidth: "1px"
    padding: "{componentSpacing.2}"
    gap: "{componentSpacing.1}"         # icon → label, and between collapsed count chips
    typography: "{typography.subHeaderBase}"
    iconSize: "16px"
    themes:   # `ButtonThemes` in src/lib/SectionButton/SectionButton.types.ts
      DASHED:                           # nothing chosen yet — click to fill
        background: "transparent"
        border: "{colors.primary.600}"
        borderStyle: "dashed"
        text: "{colors.primary.600}"
        icon: "{colors.primary.600}"    # label and icon share the border colour
        shadow: "none"
      SOLID:                            # a value is set
        background: "{colors.neutral.50}"
        border: "{colors.opacity.neutralDark.10}"
        borderStyle: "solid"
        text: "{colors.neutral.950}"
        icon: "{colors.neutral.600}"    # icon recedes behind the label
        shadow: "{shadow.innerSm}"
    active:   # `isActive` — the row whose panel is currently open; overrides the theme's fill and border in both themes
      background: "{colors.primary.50}"
      border: "{colors.primary.600}"
      ringWidth: "1px"                  # ring-1, drawn outside the border, so an open row reads as a 2px outline
      ringColor: "{colors.primary.600}"
    disabled:
      background: "{colors.neutral.200}"
      border: "{colors.neutral.500}"    # DASHED only — SOLID drops its border colour, see note
      text: "{colors.neutral.500}"
      icon: "{colors.neutral.500}"
    # NOTE (known drift): a disabled SOLID row swaps its fill and text but drops
    # the theme's border-colour class rather than replacing it, so the border
    # falls back to Tailwind's stock default (#e5e7eb) — a step on no VIOOH ramp.
    # Read from SectionButton.tsx:158-159; the disabled states are the one part
    # of this block that production's planner capture does not corroborate.
    groupStatus:   # `SectionButtonStatus` — a 6px {rounded.full} dot after the label, marking the health of a whole section group
      GREEN: "{colors.green.700}"
      ORANGE: "{colors.orange.600}"
      RED: "{colors.pinkRed.700}"
    chipList:   # src/lib/SectionButton/SectionButtonChipList — the value area at the row's trailing edge
      # Every value a row holds is a Chip, never plain text: dates, currency and
      # single-select names included. `chipColor` defaults to Color.PRIMARY and
      # `chipTextPriority` to TextPriority.LABEL (SectionButtonChipList.tsx:85-86),
      # so a set value is indigo unless its consumer says otherwise. The one
      # consumer that does is Frame CPM, which turns a single value PINK_RED when
      # it exceeds the deal's CPM (Cpm.tsx:38-55) — a per-value `color` that
      # ExpandedList honours over the list default (SectionButtonChipList.tsx:106).
      chipTheme: "PRIMARY"                # a key into {components.chip.themes}
      excludedChipTheme: "GREY"           # an excluded group swaps theme and takes the `exclude` icon
      chipHeight: "{components.chip.sizes.MEDIUM.height}"              # the list passes no `size`, so every chip is MEDIUM
      chipBorderRadius: "{components.chip.sizes.MEDIUM.borderRadius}"  # the pill, not the rounded-md LARGE size
      gap: "{componentSpacing.1}"         # gap-1 — the list is a right-aligned column (flex-col items-end)
      maxSelected: 5                      # values in one group before it collapses to a single count chip
      overflowPopover:   # CollapsedList's hover list of the values behind a count chip
        background: "{colors.neutral.950}"
        text: "{colors.neutral.50}"
        borderRadius: "{rounded.md}"
        paddingX: "16px"                  # px-4 — a step {componentSpacing} does not yet enumerate
        paddingY: "{componentSpacing.2}"
        rowGap: "{componentSpacing.1}"
        arrowSize: "8px"
  card:     # src/lib/Card — surface variants via `CardTheme`; Storybook "Components/Card"
    # The theme colours the card's *chrome*, not its body. The header band, the
    # footer and the 1px outer border take the theme; the content wrapper below
    # the header is {components.card.bodyBackground} for every theme except the
    # two transparent ones. A PRIMARY card is a dark indigo header over a white
    # body, not a dark card.
    borderRadius: "{rounded.xl}"     # rounded-xl, on the card and on its body wrapper
    borderWidth: "1px"               # `border` — always present; the theme supplies the colour
    shadow: "{shadow.sm}"            # flat variants drop it entirely (shadow-none)
    margin: "2px"                    # m-0.5 — the hairline gap that lets the shadow read; {componentSpacing} "0.5", not citable as a ref
    bodyBackground: "{colors.neutral.50}"
    headerTypography: "{typography.bodySm}"   # body-sm; the footer slot matches it
    headerPaddingX: "{componentSpacing.2}"    # px-2
    headerPaddingY: "{componentSpacing.1}"    # py-1
    footerPadding: "{componentSpacing.2}"     # p-2
    # NOTE (value withdrawn): this block previously carried `padding: {spacing.lg}`
    # (20px). src/lib/Card sets no padding on its body at all — the header and
    # footer paddings above are the only ones it applies, and the body inset comes
    # from whatever the card is filled with ({components.metricRow.padding}, 12px,
    # in every summary card). The 20px looks mis-sourced from the legacy
    # src/components/patterns/Card, whose Card.pcss:15-32 sets
    # `margin-bottom: var(--spacing-lg)` on the card and `var(--spacing-md)` (15px)
    # inside `.card-body` — a different component with its own incompatible
    # `CardTheme`. Design against src/lib/Card.
    themes:   # `CardTheme` in src/lib/Card/Card.types.ts — all seven, read from Card.tsx:3-59
      PRIMARY:
        headerText: "{colors.neutral.50}"
        surface: "{colors.primary.950}"
        border: "{colors.primary.950}"    # border matches the surface, so the chrome reads as one block
        shadow: "{shadow.sm}"
      LIGHT_PURPLE:
        headerText: "{colors.purple.50}"
        surface: "{colors.purple.550}"
        border: "{colors.purple.550}"
        shadow: "{shadow.sm}"
      SECONDARY:                          # the planner and deal summary cards
        headerText: "{colors.primary.600}"
        surface: "{colors.primary.100}"
        border: "{colors.primary.100}"
        shadow: "{shadow.sm}"
      DEFAULT:                            # the fill is neutral.100, *not* the {colors.neutral.50} page surface
        headerText: "{colors.neutral.600}"
        surface: "{colors.neutral.100}"
        border: "{colors.neutral.300}"    # the only rounded theme whose border contrasts with its own fill
        shadow: "{shadow.sm}"
      DEFAULT_NOT_ROUNDED:                # DEFAULT with radius, shadow and margin all removed — a card sitting flush in its container
        headerText: "{colors.neutral.600}"
        surface: "{colors.neutral.100}"
        border: "{colors.neutral.300}"
        shadow: "none"
        borderRadius: "0px"
        margin: "0px"
      TRANSPARENT:                        # header text only — no fill, no border, no lift
        headerText: "{colors.primary.600}"
        surface: "transparent"
        border: "none"
        shadow: "none"
        bodyBackground: "transparent"
      TRANSPARENT_WITH_BORDER:            # the outline is the whole card
        headerText: "{colors.primary.600}"
        surface: "transparent"
        border: "{colors.neutral.300}"
        shadow: "{shadow.sm}"
        bodyBackground: "transparent"
  accordion:  # src/lib/Accordion — the disclosure control the planner's deal-setup panel and overview grid cells are built from (PlannerContainer.tsx:183-198, PlannerSections/AllocationContentAccordion.tsx:16, OverviewGrid/OverviewCells/*)
    # A disclosure label is NOT a card heading and NOT a {typography.sectionHeader}.
    # The whole control is one full-width button: label left, chevron hard right
    # (flex, items-center, justify-between), with the panel's content below it.
    # The label stays sentence case — in production they read `Deal line info:`,
    # `Targets:`, `Filters:`, `Data targeting:`, trailing colon included.
    labelTypography: "{typography.bodySm}"    # body-sm on the label div, which wins over the button's own sub-header-base
    labelColour: "{colors.essential.tertiary}"
    controlPaddingY: "0px"                    # py-0 — the control row has no vertical padding of its own
    labelIconGap: "{componentSpacing.1}"      # gap-1, between an optional leading icon and the label
    chevronSize: "{components.sectionButton.iconSize}"   # w-4 h-4
    chevronColour: "{colors.neutral.900}"     # text-neutral-900 with fill-current
    # One down-arrow asset, rotated 180° when open — not a swapped up/down pair.
    leadingIconSize: "{components.sectionButton.iconSize}"  # optional icon, before the label, inside the muted group
    borderedPaddingBottom: "{componentSpacing.2}"  # pb-2, applied with the divider only
    borderedBorderColour: "{colors.neutral.300}"
    # NOTE (known drift): the divider `hasBorder` draws is a bare `border-b`, and
    # tailwind.config.js extends `colors` rather than replacing them, so it resolves
    # to Tailwind's own borderColor.DEFAULT — gray-200, #e5e7eb — not to a VIOOH
    # token. That the intent is {colors.neutral.300} is not an inference: the
    # component's own Accordion.types.ts declares
    # `BorderStyle.BOTTOM = 'border-b border-b-1 border-b-neutral-300'`, but neither
    # that enum nor the `border` prop it types is referenced anywhere in the app —
    # dead code that the live `hasBorder` path bypasses. Design against
    # {colors.neutral.300}; treat the shipped value as a backlog item, not a rule.
    # Confirmed in benchmark/screens/planner/truth.png: four full-width hairlines
    # measuring exactly #e5e7eb. Read from Accordion.tsx:44-48 at cfea9273.
    # NOTE (no disabled state): `isDisabled` sets only the native `disabled`
    # attribute — Accordion.tsx applies no disabled class of any kind, so a disabled
    # group renders identically to an enabled one and merely stops responding. There
    # is deliberately no `accordion.disabled` token here; do not borrow
    # {components.sectionButton.disabled} or {components.button.disabled} for it, and
    # do not grey the label. Flagged for the design backlog rather than documented as
    # intent — an unreachable control that looks reachable is a usability gap.
    # NOTE (sibling divergence): the three other disclosure components do not share
    # this label role. src/lib/Collapsible and src/lib/CollapsibleList set their
    # header to sub-header-base in {colors.neutral.900} (CollapsibleList swapping to
    # {colors.primary.700} while open, its chevron to {colors.primary.600}), and
    # src/lib/CollapsibleCategory renders a closed category as a plus-icon button in
    # {colors.primary.700}. Only Accordion has the muted-label treatment above. Read
    # from the VTM checkout at cfea9273 (2026-08-04, v1.98.29); LENS not consulted.
  metricRow:  # components/pages/DealWithLines/common/RightSidebar/DealSummary/DealSummaryCardSection — the label-left / figure-right row every summary card is built from
    # The row itself: label and value on one baseline, pushed to opposite edges
    # (flex, items-center, justify-between). The wrapper is a *section*, not a
    # single row — it can hold several lines, and its top border is what
    # separates one metric group from the next inside a card.
    borderRadius: "{rounded.xl}"        # rounded-t-xl — top two corners only
    borderTopWidth: "1px"
    borderTopColour: "{colors.neutral.300}"
    padding: "{componentSpacing.3}"
    rowGap: "{componentSpacing.2}"
    lineTypes:   # `DealSummaryCardSectionLineType`, read from DealSummaryCardSection.tsx:5-18
      header:                # the headline figure
        labelTypography: "{typography.subHeaderBase}"
        labelColour: "{colors.essential.primary}"
        valueTypography: "{typography.headerXl}"
        valueColour: "{colors.essential.primary}"
        # NOTE (known drift): the component sets no colour class on the value, so
        # it inherits, and nothing above it supplies one — production therefore
        # renders the figure at the user-agent default black. The house ink above
        # is the rule; the black is drift. Design to the ink.
      subheader:             # a labelled secondary figure, still at full ink
        labelTypography: "{typography.bodyBase}"
        labelColour: "{colors.essential.tertiary}"
        valueTypography: "{typography.bodyLg}"
      subheaderSecondary:    # the muted universe figure under a headline
        labelTypography: "{typography.bodyBase}"
        labelColour: "{colors.essential.tertiary}"
        valueTypography: "{typography.bodyLg}"
        valueColour: "{colors.essential.tertiary}"
    readOnlyValueOpacity: "30%"   # read-only sections mute the value, not the label
    # NOTE (known drift): the read-only value is `text-gray-900 text-opacity-30`.
    # `gray` is never redefined in tailwind.config.js, so that resolves to
    # Tailwind's stock #111827 rather than the near-identical house ink
    # {colors.essential.primary} (#131221). Treat the opacity as the rule and
    # the base ink as {colors.essential.primary}.
  input:    # src/lib/Input (debounced wrapper over src/lib/BaseInput); shared InputTheme/InputSize/InputShape enums in src/components/common/types/Input.types.ts
    borderRadius: "{rounded.md}"
    border: "{colors.neutral.300}"
    typography: "{typography.bodyBase}"
  chip:     # src/lib/Chip (+ src/lib/EditableChip) — colours via its `Color` enum, geometry via `Size`
    borderRadius: "{rounded.md}"    # Size.LARGE only — the default size is a pill, see {components.chip.sizes}
    indicatorShape: "{rounded.full}"
    paddingX: "6px"                           # px-1.5 around the icon+label group (px-[3px] at SMALL); {componentSpacing} "1.5", not citable as a ref. The label adds px-0.5 of its own
    subLabelPaddingX: "{componentSpacing.2}"  # px-2 inside the badge (px-[5px] at SMALL)
    sizes:    # `ChipSize` in src/lib/Chip/Chip.types.ts — MEDIUM is the default, and the only size that is not a pill is LARGE
      SMALL:
        height: "20px"                   # h-5 — the size status chips take in table cells
        borderRadius: "{rounded.full}"
        typography: "{typography.bodySm}"
      MEDIUM:
        height: "24px"                   # h-6; corroborated at 24px in the planner capture
        borderRadius: "{rounded.full}"
        typography: "{typography.bodyBase}"
      LARGE:
        height: "28px"                   # h-7
        borderRadius: "{rounded.md}"
        typography: "{typography.bodyBase}"
    # A chip is a TINT, not a saturated fill: a light step of the family
    # carrying label and icon in that family's accent at full strength. Hover and
    # active deepen the fill (the checkout does it with 10% and 20% alpha washes
    # of the same accent). Two parts invert:
    # the optional `subLabel` badge is a solid accent (one step darker) with
    # {colors.neutral.50} text, as is the `indicator` dot. The badge is `h-full`,
    # so it fills the chip's height rather than floating inside it. A chip given a
    # `subLabel` and no `label` renders as that badge alone: the wash and the size
    # classes are both conditional on `label` (Chip.tsx:24-27), so nothing draws
    # behind it.
    themes:   # `ChipTheme` in src/lib/Chip/Chip.types.ts — one entry per Color
      PRIMARY:
        background: "{colors.primary.100}"
        text: "{colors.primary.600}"
      GREY:
        background: "{colors.neutral.100}"
        text: "{colors.neutral.600}"     # deepens to {colors.neutral.800} on hover
      DARK_GREY:                          # the one solid-fill theme
        background: "{colors.neutral.800}"
        text: "{colors.neutral.50}"
      PURPLE:
        background: "{colors.opacity.purple.5}"
        text: "{colors.purple.700}"
      LIGHT_PURPLE:                       # a solid step, as PRIMARY and GREY are
        background: "{colors.purple.100}"
        text: "{colors.purple.600}"
      PINK_RED:
        background: "{colors.opacity.pinkRed.5}"
        text: "{colors.pinkRed.600}"
      RED:                                # same wash as PINK_RED, one step deeper text
        background: "{colors.opacity.pinkRed.5}"
        text: "{colors.pinkRed.700}"
      YELLOW:
        background: "#e4b02e0d"           # yellow-600 @ 5% — see note below
        text: "{colors.yellow.600}"
      GREEN:
        background: "{colors.opacity.green.5}"
        text: "{colors.green.700}"
      LIME:
        background: "{colors.opacity.lime.5}"
        text: "{colors.lime.600}"
      ORANGE:
        background: "{colors.opacity.orange.5}"
        text: "{colors.orange.600}"
      PINK:
        background: "{colors.opacity.pink.5}"
        text: "{colors.pink.600}"
      SKY_BLUE:
        background: "{colors.opacity.sky.5}"
        text: "{colors.sky.500}"
      DISABLED:
        background: "{colors.opacity.neutralDark.5}"
        text: "{colors.neutral.400}"
    # PRIMARY and GREY are read off the planner capture, where they measure the
    # solid steps above exactly: a value chip at #f0f2fe and a status chip at
    # #f8f8f9. The remaining themes are read from ChipTheme, which expresses the
    # same tint as a 5% alpha wash of the family accent; where a capture settles
    # one of them, the solid step it measures is the value to record.
    # NOTE (known drift): the shipped `--yellow-600-opacity-*` variables ride
    # yellow-600 (#e4b02e), whereas the Figma alpha ramp recorded above as
    # {colors.opacity.yellow.*} rides yellow-500 (#f8bc1a) for steps 5–70. The
    # literal is used here because it is what renders. Needs reconciling.
    # Deal lifecycle status → chip theme. Merged from `bookingStatusStyles`
    # (src/components/common/Deal/ChipBookingStatus/consts.ts) and
    # `STATUS_SETTINGS` (Planner .../StatusPanel/StatusPanel.types.ts). Keys are
    # the labels users see; the chip renders at Size.SMALL in table cells.
    statuses:
      Pending: "YELLOW"              # DealStatus.PENDING_APPROVAL
      Draft: "YELLOW"                # covers every draft sub-state (solving, priced, failed…)
      Approved: "PRIMARY"
      Proposal: "PRIMARY"
      Option: "ORANGE"
      Mixed: "LIGHT_PURPLE"
      Confirmed: "GREEN"
      Live: "LIME"
      Rejected: "RED"
      Terminated: "RED"
      Failed: "RED"
      Pending reservation: "GREY"
      Reserved: "GREY"
      Cancelled: "GREY"
      Deleted: "GREY"
      Ended: "GREY"
      New: "GREY"                    # fallback for an unmapped programmatic status
  status:   # src/lib/Status — the single-letter initial pill (L/R/A/P/C/E/T/U/N/I/D/S); Storybook "Components/Status"
    # Distinct from the status chips above: this one IS a solid fill with white
    # text, and takes a whole-family background class rather than a ramp step.
    borderRadius: "{rounded.full}"
    typography: "{typography.subHeaderSm}"
    text: "{colors.neutral.50}"
    backgrounds:   # the only values `StatusProps.backgroundColour` accepts
      - "{colors.green}"
      - "{colors.yellow}"
      - "{colors.pinkRed}"
      - "{colors.sky}"
      - "{colors.neutral.900}"
      - "{colors.primary}"
  modal:    # src/lib/Modal (react-modal based; title/icon/actionButtons); src/lib/Overlay for full-screen takeovers
    borderRadius: "{rounded.md}"
    surface: "{colors.neutral.50}"
    scrim: "{colors.overlay.dark}"
  secondaryPanel:  # src/components/pages/Planner/PlannerSecondaryPanel — the planner's overlay panel. Position comes from PlannerLineActions/calculateSecondaryPanelPosition.ts, not from the component.
    width: "{layout.secondaryPanelWidth}"
    # NOTE (known drift — the token governs a minority of panels). The default is
    # {layout.secondaryPanelWidth} (387px) via `w-[var(--secondary-panel-width)]`,
    # but `customStyles` is applied as an inline style and so beats that class.
    # Across 39 render sites of PlannerSecondaryPanel, the rendered width is:
    #   ~18  387px  no width passed — the token actually applies
    #    11  400px  `width || '400px'` ×8, `width ?? '400px'` ×2, and a local
    #               `SECONDARY_PANEL_WIDTH = 400` in POIPanel.tsx:26
    #     9  438px  PCM Products, via secondaryPanelLayoutStyles (Products/styles.ts:4)
    #     1  309px  CampaignBookingStatusPanel.tsx:42, inline alongside a hardcoded
    #               left and top
    # The 11 at 400px are the planner's filter and objective panels — the ones the
    # production capture shows, so 400px is what truth.png measures
    # (border-to-border, four scanlines). Root cause is one omission:
    # calculateSecondaryPanelPosition declares `width?: string` and takes a `width`
    # param defaulting to 387, but never returns it outside the product branch, so
    # every consumer destructures `undefined` and falls back to its own literal.
    # Neither 400px nor 438px nor 309px is on any scale in this document.
    # {layout.secondaryPanelWidth} remains the rule for new panels; the spread is a
    # production inconsistency for the design backlog, not a value to codify here.
    borderRadius: "{rounded.md}"
    surface: "{colors.neutral.50}"
    borderWidth: "1px"
    borderColour: "{colors.neutral.300}"
    # NOTE (known drift): the rendered classes are `border-gray-300` on the frame
    # and `border-gray-200` on the header and footer rules. `gray` is never
    # redefined in tailwind.config.js, so both resolve to Tailwind stock
    # (#d1d5db and #e5e7eb) rather than the house border {colors.neutral.300}
    # (#eaeaef). Read at programmatic-platform-frontend@93fd616 (2025-09-30) and
    # confirmed against the production capture, which renders both stock greys.
    # Treat one hairline in {colors.neutral.300} as the rule.
    shadow: "none"   # PlannerSecondaryPanel.tsx:71 applies no shadow utility at all — the border alone lifts it off the canvas
    inset:
      top: "{layout.headerHeight}"   # hangs flush under the app header
      bottom: "16px"                 # stretches to here; on neither {spacing} nor {componentSpacing}
      # `left` is computed, never authored — see the Layout section.
    headerPadding: "{componentSpacing.3}"    # px-3; gains py-3 and a bottom rule only when a title is set
    contentPadding: "{componentSpacing.3}"
    footerPadding: "{componentSpacing.2}"    # the cancel/confirm row, present only when the panel can be submitted
    footerLayout: "space-between"    # cancel pinned left, confirm right — not a right-aligned button pair
    titleTypography: "{typography.bodyBase}"
    titleWeight: 600                 # `body-base font-semibold` — neither {typography.bodyBase} (400) nor {typography.subHeaderBase} (500)
    contextLabelColour: "{colors.essential.tertiary}"   # the deal or line name echoed at the top right
  summaryPanel:  # src/components/pages/Planner/PlannerSummaryPanel/PlannerSummaryPanel.tsx:152-167 — the planner's summary. One component, two modes: a transparent rail of detached cards over the map, and an opaque column in overview/review. Rendered for direct-sales campaigns and for resellers; other programmatic campaigns get PlannerRightSidebar instead.
    rail:        # always present — in overview/review it sits inside the backing column below
      width: "{layout.summaryRailWidth}"
      surface: "transparent"           # `bg-transparent` — the basemap shows through every gap
      gap: "{componentSpacing.3}"      # `gap-3` between cards
      # NOTE (known drift — gap). `gap-3` (12px) is what the code says at
      # programmatic-platform-frontend@93fd616 (2025-09-30), but the current
      # production capture measures 6px between card boxes — 10px of live canvas
      # once each card's {components.card.margin} is counted either side. 6px is
      # `gap-1.5` — the "1.5" step of {componentSpacing}, one step below `gap-3`.
      # The checkout is ~10 months behind production, so the likeliest reading is
      # that the rail has since been tightened. Both values are on that scale; use
      # `gap-3` for new work and expect the planner to render tighter until the
      # checkout is refreshed.
      paddingY: "{componentSpacing.3}"      # `py-3` — corroborated: 12px of canvas above the first card's border
      insetRight: "{componentSpacing.2}"    # `right-2` — corroborated: 10px from the region's right edge, card margin included
      insetTop: "0"
      insetBottom: "0"
      overflowY: "auto"                # the rail scrolls; the canvas behind it does not move
      pointerEvents: "none"            # every card re-enables its own with `pointer-events-auto`
    backingColumn:   # overview and review modes only, and only while the panel is open
      width: "{layout.rightSidebarWidth}"
      surface: "{colors.neutral.100}"
      borderWidth: "1px"
      borderColour: "{colors.neutral.300}"      # `border-l` — the left edge only
      # NOTE (known drift): `border-l` carries no colour class, so it renders
      # Tailwind's stock preflight border (#e5e7eb) rather than the house
      # {colors.neutral.300} (#eaeaef). tailwind.config.js never sets a
      # borderColor DEFAULT. Same root cause as the secondaryPanel note above;
      # treat {colors.neutral.300} as the rule.
      insetBottom: "{layout.overviewModeFooterHeight}"
      transition: "opacity"            # fades in and out rather than sliding
      # NOTE: `duration-200` is Tailwind stock and is on neither {motion.duration}
      # step ({motion.duration.fast} 150ms / {motion.duration.base} 300ms). Use
      # {motion.duration.fast} for this fade.
      # NOTE (production inconsistency — route to the design backlog, do not codify).
      # The rail's `w-[293px]` is applied when `!isOverviewMode`, which is true in
      # REVIEW mode as well. So review mode renders a 293px rail pinned
      # {components.summaryPanel.rail.insetRight} from the right edge of a 350px
      # opaque column, leaving ~49px of bare {colors.neutral.100} down its left
      # side. Overview mode has no such strip: there the rail is stretched by
      # `left-7` (28px, on neither spacing scale) instead of given a width.
      # Neither mode appears in any production capture in benchmark/screens, so
      # everything in this block is sourced from code only and is unverified.
  alert:    # src/lib/Alert — variants via `AlertThemeOption`; app-level notices use src/lib/Banner (`BannerType`)
    borderRadius: "{rounded.md}"
    typography: "{typography.subHeaderBase}"
  chart:    # src/components/patterns/HighChart — palette lives in its Settings.js `COLORS`
    surface: "{colors.neutral.100}"          # plot area, legend and tooltip background
    seriesDefault: "{colors.primary.700}"    # single-series default (Chart, SplineChart, HeroChart)
    rateSeries: "{colors.purple.600}"        # rate-style hero charts (BidRate, WeightedWinRate)
    referenceLine: "#262541"                 # totals overlay (e.g. total bid requests) — see off-ramp note
    # Multi-series column/spline charts assign colour by role, not by index:
    # loss/negative series lead in {colors.pinkRed.500}, the sold/positive
    # counterpart follows in {colors.sky.500}, remaining breakdown series take
    # {colors.purple.600} then {colors.yellow.500} then {colors.primary.700},
    # and any total or reference overlay uses {components.chart.referenceLine}.
    multiSeriesOrder:
      - "{colors.pinkRed.500}"
      - "{colors.sky.500}"
      - "{colors.purple.600}"
      - "{colors.yellow.500}"
      - "{colors.primary.700}"
    # Categorical order for many-slice charts, taken verbatim from the
    # "Total impact by creative" PieChart: brand → ink → accent → grey tail.
    categoricalOrder:
      - "{colors.primary.700}"
      - "{colors.purple.600}"
      - "#5a52a9"                    # off-ramp (marked TODO in Settings.js)
      - "{colors.essential.secondary}"
      - "#262541"                    # off-ramp
      - "{colors.yellow.500}"
      - "{colors.green.400}"
      - "{colors.pinkRed.500}"
      - "{colors.sky.500}"
      - "#e1e1e5"                    # off-ramp (sits between neutral.300 and neutral.400)
      - "{colors.neutral.500}"
      - "{colors.neutral.600}"
      - "{colors.neutral.400}"
      # The shipped array continues with two more greys that both resolve to
      # {colors.neutral.500} — a duplicate tail, not additional steps.
    # NOTE (known drift): `#5a52a9`, `#262541` and `#e1e1e5` are the three chart
    # colours with no home in the ramps above or in the LENS Figma library.
  map:      # src/components/pages/Planner/PlannerMap — deck.gl layers over a CARTO basemap. Palette in PlannerMap/utils/mapColors.ts; the colour rule in Layer/createAvailableAllocationRatioLayer.js:61-80
    # The cartography is not a VIOOH surface. It is CARTO's hosted Voyager style
    # (`DEFAULT_MAP_STYLE`, components/common/types/Planner.types.ts:43), and its
    # land, water, road and label colours are third-party — tokenised nowhere in
    # this document, yet they set the whole screen's colour balance. Every value
    # below was chosen to read against them. Treat the basemap as given: do not
    # restyle it, and do not borrow its greens or blues for product chrome.
    basemap: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
    # --- Marker fill: one state, one colour ---
    # `getAssetColor` colours single frames and clusters through the same
    # accessor, in this precedence: inactive → index band → allocated →
    # unavailable → available. A grey marker is therefore a *state*, never a
    # cluster convention, and an index segmentation overrides availability and
    # allocation outright — see {components.map.indexRamp}.
    marker:
      # Radius is 0.2 × the element size, in screen pixels: a lone frame is 48
      # (~10px radius), a cluster of under ten assets scales 96 → 110, and ten or
      # more scales 110 → 240 against the largest cluster in view
      # (utils/getMapElementSize.ts). So clusters read two to five times a lone
      # frame.
      radiusRatio: 0.2
      # A marker is one hue and one flat translucent disc. Default to exactly
      # that: the fill below at its stated opacity, no ring, no gradient, the
      # basemap reading through it.
      #
      # The extra furniture — a slightly lighter outer band, a white ring, a soft
      # dark shadow, and up to two concentric progress arcs starting at 12
      # o'clock over {components.map.trackColor} — all live in one branch of the
      # fragment shader (Layer/customShader/availableAllocatedImpressionsLayer.glsl.js),
      # reached only when "Show Size by Impressions" is switched *off*. With that
      # layer on, which is the default, none of it draws. The only production
      # capture of this map (benchmark/screens/planner/truth.png) shows the
      # layer-on state: flat discs, no ring, no arcs. So treat the two values
      # below and the arcs as sourced from code and *unverified* — and the arc
      # geometry, which the shader computes in its own coordinate space, as not
      # transferable at all.
      outerBandAlphaRatio: 0.6         # unverified — see above
      ringColor: "{colors.neutral.50}" # unverified — see above; width is shader-space, not px
      available:
        fill: "{colors.primary.600}"
        fillOpacity: 0.8        # = {colors.opacity.primary.80}
      unavailable:              # a frame whose share of time is 0
        # NOTE (known drift): the shipped `UNAVAILABLE_COLOR_RGBA` is
        # `[190, 18, 52]` — `#be1234`, one unit of blue off {colors.pinkRed.700}
        # and so off the LENS ramp, whose 70% step is
        # {colors.opacity.pinkRed.70}. Render the token. The neighbouring
        # `UNAVAILABLE_COLOR` (`#e42e4f`, = {colors.pinkRed.600}) is exported and
        # never read; it is what the benchmark judge read off the screenshot.
        fill: "{colors.pinkRed.700}"
        fillOpacity: 0.7
      allocated:
        fill: "{colors.green.800}"
        fillOpacity: 0.9        # green.800 at 90% — the LENS green ramp has no such step
      # Read-only bookings (ENDED, CANCELLED, TERMINATED, FAILED) and any
      # programmatic line with neither available nor allocated impressions yet
      # computed. This is the first branch, so it beats every other colour.
      inactive:
        fill: "#33323e"         # off-ramp — see note below
        fillOpacity: 0.6        # measured at ~0.57 in truth.png; the code says 0.6
    # The frame count carried by a cluster marker (createMapMarkerIconWithTextLayer.ts).
    clusterLabel:
      color: "{colors.neutral.50}"
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "12px"          # off the {typography} scale, which steps 11px → 13px
      fontWeight: 700
    # --- Index ramp: five bands, cool → warm is *not* the direction ---
    # Bands are quartiles of the loaded index range, not fixed index values
    # (hooks/usePlannerSegmentsIndexRange.ts:35-80). Zero is its own band and is
    # grey, so an unindexed frame recedes rather than reading as "low".
    indexRamp:
      # Unlike every fill above, an index band is applied at full alpha
      # (`[...rangeColor, 1.0]`, createAvailableAllocationRatioLayer.js:66-69), so
      # an indexed map reads flatter and more opaque than an availability one.
      fillOpacity: 1
      zero: "#9f9ea2"                 # off-ramp — see note below
      lessThan: "{colors.yellow.200}"   # non-zero, up to the 25th centile
      firstRange: "{colors.lime.400}"   # 25th - 50th
      secondRange: "{colors.green.500}" # 50th - 75th
      higherThan: "{colors.green.600}"  # 75th and above
      # The four non-zero bands are the only place the map and its key agree:
      # IndexLegend.tsx:27-41 ships the same four as `bg-yellow-200`,
      # `bg-lime-400`, `bg-green-500`, `bg-green-600`, and DistributionOfIndex
      # reuses them as 16px swatches. Neither surface labels the zero band.
    # The neutral track behind the marker arcs, and behind the tooltip's bars.
    trackColor: "#f3f4f7"       # off-ramp — see note below
    poi:      # Layer/POICompositeLayer.js — a point of interest and its catchment
      # NOTE (known drift): the catchment ring is drawn by a class named
      # `DashedCircleLayer`, but its shader (customShader/dashedCircleLayer.glsl.js)
      # contains no dash logic at all — production draws a solid stroked circle.
      # Do not render dashes here.
      radius:
        fill: "{colors.primary.600}"
        fillOpacity: 0.216      # alpha byte 55 of 255
        strokeColor: "{colors.primary.600}"
        strokeWidth: "2px"      # `lineWidthMinPixels`
      # The pin itself: a 20x20 SVG drawn at 25px, offset 10px above its point.
      pin:
        fill: "{colors.primary.50}"
        strokeColor: "{colors.primary.600}"
        strokeOpacity: 0.8
        strokeWidth: "2px"
        size: "25px"
        # Drop shadow is an SVG filter, not a house shadow: dy 4, Gaussian
        # stdDeviation 2, black at 16%.
    # The deck.gl hover tooltip (utils/getTooltip.ts) — frame ID, impression
    # bars, legend swatches. NOT the furniture selection card, which is a React
    # component (PlannerMap/SingleFurnitureCard, MultiFurnitureCard).
    tooltip:
      surface: "{colors.neutral.50}"
      text: "#33323e"           # off-ramp, at 92% — see note below
      padding: "{spacing.md}"   # 15px, the page grid unit, inside a component
      borderRadius: "10px"      # off the {rounded} scale, between lg and xl
      minWidth: "200px"
      offsetAbovePoint: "20px"  # plus a 10px pointer triangle in the surface colour
      swatchSize: "11px"
      swatchRadius: "{rounded.sm}"
      barHeight: "{spacing.sm}"       # 10px
      barRadius: "5px"                # half the bar height; off the {rounded} scale
      # The bars use the *solid* hexes, with none of the marker alpha:
      # available is {colors.primary.600}, allocated {colors.green.800}, and the
      # total swatch is {components.map.trackColor}.
      # NOTE (known drift): the tooltip is an inline-styled HTML string handed to
      # deck.gl, so it sits largely outside the scales — 10px, 12px and 16px type
      # alongside two `sub-header-sm` / `body-sm` classes, and 5px / 10px radii.
      # Read it as the map's own furniture; never copy these numbers into
      # product UI.
    # NOTE (known drift): `#33323e`, `#9f9ea2` and `#f3f4f7` are the three map
    # colours with no home in the ramps above or in the LENS Figma library.
    # `#33323e` sits between {colors.neutral.950} and {colors.neutral.900};
    # `#9f9ea2` is a truer grey than the nearest step {colors.neutral.500}
    # (`#a09faa`); `#f3f4f7` is two units of blue off {colors.neutral.200}.
    # NOTE (known drift): the map's key contradicts the map. Legend.tsx:101,128
    # ships `bg-sky-600` for "Available Frame" and `bg-pinkRed-500` for
    # "Allocated Frame", and paints "Frame not Available" in
    # {colors.opacity.neutralDark.50} — none of which is a colour the layers
    # draw. The layers above are the truth; the legend is a production bug
    # (issue #31), so do not reconcile this document to it.
  checkbox: # src/lib/Checkbox — supports INDETERMINATE state
    borderRadius: "{rounded.sm}"
    selected:
      background: "{colors.primary.700}"
      text: "{colors.neutral.50}"
  selectOption:  # src/lib/SelectOption — the selectable row of a filter/search list; read from SelectOption.tsx:47-107 at cfea9273 (2026-08-04, v1.98.29)
    # A list row, not a SectionButton: no border and no fill of its own, selection
    # carried by controls rather than by dressing the whole row. The leading slot
    # is optional (`hasCheckbox` default true → a {components.checkbox}; `hasRadio`
    # → a Radio) and the trailing slot is an optional
    # {components.includeExcludeToggle}. The planner's Location list runs it with
    # `hasCheckbox` false and `isIncludeExcludeAlwaysVisible` set, so there is NO
    # leading control and the include/exclude pill at the trailing edge is the
    # row's only affordance.
    borderRadius: "{rounded.sm}"          # rounded-sm
    padding: "{componentSpacing.2}"       # p-2
    marginX: "{componentSpacing.1}"       # mx-1 — but the Location list passes `!m-0`, so its rows sit flush
    hover: "{colors.neutral.100}"         # hover:bg-neutral-100 across the whole row
    contentPaddingY: "{componentSpacing.1}"   # py-1 on the inner label group; +pl-1, and pl-2 on the label, only when hasCheckbox
    labelMaxWidth: "250px"                # `maxWidth` default; the label truncates past it
    # The row sets no type class of its own — the label inherits from context
    # (LocationItem hands it a plain <p>).
    disabled:                             # `isDisabled && !isSelected`
      text: "{colors.neutral.400}"        # text-neutral-400, cursor-not-allowed; a selected row stays at full ink even when disabled
    # NOTE (sibling divergence — two unrelated "selectable row" treatments; do not
    # merge into one recipe). src/lib/MultiSelect (MultiSelect.tsx:93-109) is a
    # *different* row: its checkbox <input> is `className="hidden"`, so there is no
    # check control at all, and selection is carried by the whole row filling
    # `bg-primary text-neutral-100`. Its rows are `block p-2 mb-0.5 body-base
    # rounded-md` and its groups are headed by an alphabetical bucket letter in
    # {typography.sectionHeader} / {colors.neutral.900}. Which of the two is the
    # intended selectable-list pattern is an open design question, and
    # MultiSelect's `bg-primary` resolves through the contested {colors.primary}
    # alias (issue #17) — so this block documents only the SelectOption row the
    # planner Location list actually renders. Read from the VTM checkout at
    # cfea9273; LENS not consulted.
  includeExcludeToggle:  # src/lib/IncludeExcludeToggle — the trailing include/exclude pill on a SelectOption row and on a CollapsibleList group header; read from IncludeExcludeToggle.tsx at cfea9273
    # A segmented pill: two icon buttons (exclude, then include) inside one
    # rounded-full wrapper. Hidden entirely unless `isAlwaysVisible`, hovered or
    # selected. The include half carries a check glyph, so an idle always-visible
    # toggle reads as a faint grey rounded control with a check — which is what the
    # planner Location row shows at its trailing edge, not a leading checkbox.
    wrapperBackground: "{colors.opacity.neutralDark.5}"   # bg-neutral-950-opacity-5
    wrapperBorderRadius: "{rounded.full}"
    buttonHeight: "28px"                  # h-[28px] — an arbitrary height, on no spacing scale
    buttonPaddingX: "{componentSpacing.2}"    # px-2
    buttonPaddingY: "{componentSpacing.1}"    # py-1
    buttonBorderRadius: "{rounded.full}"
    iconSize: "16px"                      # w-4 h-4 masked SVGs — check (include), exclude, and close (on hover-to-deselect)
    # `hideExclude` drops the exclude half, leaving an include-only control — which
    # is how the planner Location list runs it (this planner is include-only).
    includeSelected:                      # isSelected && option.include
      background: "{colors.primary.600}"
      icon: "{colors.neutral.50}"
    excludeSelected:                      # isSelected && !option.include
      background: "{colors.neutral.800}"
      icon: "{colors.neutral.100}"        # one step off the include half's neutral.50 — likely incidental
    disabled:
      icon: "{colors.neutral.400}"        # text-neutral-400, cursor-not-allowed
    # An idle (unselected) button sets no colour class of its own — the `bg-current`
    # masked glyph inherits currentColor from the row, so an always-visible idle
    # toggle reads in the row's own ink against the faint grey wrapper. No token is
    # asserted for it here; do not invent one.
  listStatsHeader:  # src/lib/CollapsibleList/CollapsibleListStatsHeader — the count furniture beside a collapsible list group's label; read from CollapsibleListStatsHeader.{tsx,types.ts} at cfea9273
    # The result count is a rounded-full tinted pill, NOT plain text: the planner
    # Location list carries "<n> results" as a {colors.primary.50} pill beside the
    # category label, with included/excluded counts joining it as their own pills
    # once non-zero. A bespoke pill local to the stats header — shaped like a chip
    # but not the {components.chip} component.
    borderRadius: "{rounded.full}"        # rounded-full
    gap: "{componentSpacing.1}"           # gap-1 between the pills, and icon → count inside each
    paddingX: "{componentSpacing.2}"      # px-2
    paddingY: "2px"                       # py-0.5 — the "0.5" step of {componentSpacing}, not citable as a ref
    iconSize: "16px"                      # w-4 h-4 leading glyph on the included/excluded pills
    available:                            # the "<n> results" count — PRIMARY style, the default
      background: "{colors.primary.50}"
      text: "{colors.primary.600}"
    availableDisabled:                    # NEUTRAL style, when the group is disabled
      background: "{colors.neutral.100}"
      text: "{colors.neutral.600}"
    included:                             # GREEN style, with a leading check icon
      background: "{colors.green.50}"
      text: "{colors.green.800}"
    excluded:                             # PINK_RED style, with a leading exclude icon
      background: "{colors.pinkRed.100}"
      text: "{colors.pinkRed.800}"
    # NOTE (known drift): the pill's type is a bare Tailwind `text-sm` (14px),
    # which sits between {typography.bodyBase} (13px) and {typography.bodyLg}
    # (15px) — off the VIOOH type scale, which otherwise maps 1:1 to named
    # component classes. Treat {typography.bodyBase} as the rule and the 14px as a
    # backlog item.
---

# Design new features for Viooh Trading Manager

## Overview

VIOOH Trading Manager (VTM) is a **professional, data-dense B2B trading platform** for programmatic Digital-Out-Of-Home (DOOH) advertising. Its users are ad traders, media owners and account managers who spend long working sessions reading tables, tuning deal parameters, exploring inventory on maps and interpreting analytics. The design language is therefore **calm, precise and information-first**: it gets out of the way of the data.

The personality is **trustworthy fintech / enterprise SaaS** rather than playful consumer product. A deep indigo brand (`primary`) anchors the interface with authority, set against generous white and near-white surfaces so that dense grids, charts and maps stay legible. Colour is used sparingly and with intent — mostly neutral, with saturated accents reserved for status, categorisation and calls to action. The compact Inter type scale (many steps at 11–15px) reflects the density of the domain: fitting many controls and figures on screen without feeling cramped.

The emotional target is **confidence and control**. Interactions are quick and understated (short pop/fade transitions, subtle shadows), the layout is a stable fixed shell (top header + slim icon sidebar + working canvas), and every accent colour carries consistent meaning so users can scan status at a glance.

The system is delivered as a typed in-house React component library (`src/lib`) documented in **Storybook** (organised into Buttons, Inputs, Components, Dialog and Modals, and Pickers), layered over ag-grid, deck.gl/CARTO and Highcharts — all themed to the same token set so third-party surfaces read as part of one product.

## Our Design Strategy

We structure user needs around these principles:
- Efficiency: We are aiming for speed of interaction. We consider keyboard a faster input than point and click, and point and click faster than touch. We should always look for ways to encapsulate technical complexity behind a more streamlined interaction that saves clicks to the user.
- Control: The tasks the user needs to complete entail a certain level of complexity. We should make their work as easy as possible while at the same time letting them dig into that complexity. Because of that, we should always aim for UI that encapsulates our own complexity (how our backend or database works or is structured) but surfaces the complexity the user cares about.
- Flexibility: At the end of the road there is always Excel. That's the ultimate flexible business tool. We are probably replacing an Excel spreadsheet but we can aim at rebuilding it's whole functionality from scratch. However, we should expect our users to be specialized and to have unique ways to think about the same problem. When possible we should facilitate this flexibility rather than forcing them down a very defined path.

To provide consistent and repeatable solutions to all those needs we implement designs based on the following principles:
- Modularity: Our platform is broad and diverse, yet we want to build it in a modular fashion where the individual building blocks of an interaction are always recognisable disregarding of the context
- Composability: More complex interactions are going to be the results of composing those building blocks into bigger pieces
- Reusability: We aim to minimize single-use components in our design system. 

### Authoritative VIOOH visual system

Treat this document as the design authority for these artifacts. Use the accompanying token blocks (colours, typography, spacing, radii, shadows, motion and components) for exact tokens, type roles, states, controls and primitives. Use these instructions for composition, hierarchy and when each primitive is appropriate. Do not introduce a parallel visual system.

## Component library

New designs should be composed from the existing library before anything new is invented. The canonical set lives in `src/lib` of programmatic-platform-frontend (one folder per component, with types, tests and Storybook stories alongside). By Storybook section:

- **Buttons** — `Button` is the workhorse; its `Color` variants map 1:1 to the `{components.button}` variants above, with `Size` and `TextSize` enums for density. `IconButton` covers icon-only actions, `ButtonGroup` segmented choices, `SectionButton` (with `SectionButtonMenu` and `SectionButtonChipList`) the large section-level affordance described below, themed through `{components.sectionButton}`, `SortButton` column sorting, and `DropdownMenu` / `ShowMoreMenu` contextual and overflow menus.
- **Inputs** — `Input` (a debounced wrapper over `BaseInput`), `InputNumber`, `InputPassword` and `Label`, all themed through the shared `InputTheme` / `InputSize` / `InputShape` enums. Selection controls are react-select based: `BaseSelect` (single, multi and multi-level) and `AsyncSelect` for remote data, plus `Dropdown` for simple static lists. State controls: `Checkbox` (with indeterminate support), `ToggleSwitch`, `Slider` and `SliderWithInput`.
- **Components** — `Card` (seven themes in `{components.card.themes}`, described below); `Accordion`, `Collapsible`, `CollapsibleList` and `CollapsibleCategory` for progressive disclosure; `Chip` and `EditableChip` for tags, filter values and status; `Status` for the single-letter status pill; `ProgressBar`, `LoadingBar`, `CircularLoadingSpinner`, `DotsLoading` and the `Skeletons` (`SkeletonText`, `SkeletonButton` — sized off the real `Button` enums) for loading states; `Toaster` for transient success/warning/failure feedback.
- **Dialog and Modals** — `Modal` (title, icon and `actionButtons` slots) for dialogs and `Overlay` for full-screen takeovers; `Alert` for inline confirm/cancel panels; `Banner` for app-level notices.
- **Pickers** — `DateRangePicker` and `DateTimePicker` (react-day-picker based) for all date and time selection.

### Choosing a button variant

`Button`'s five `Color` variants are fully themed in `{components.button.variants}`; what decides between them is emphasis and where the action sits, not appearance. **`primary`** (`{colors.primary.900}` fill) is the one committing action a screen or dialog is built around — the save, the confirm, the campaign-level commit — and there is normally one per context. **`danger`** (`{colors.pinkRed.800}`) replaces it on that same button when the commit is destructive, as the `Cancel deal line` confirmation does.

**`tertiary`** (`{colors.primary.100}` fill, `{colors.primary.600}` label) is the panel- and card-scoped action — one that lives inside a summary card or secondary panel and acts on that container's contents, such as `Check availability`, an allocation report or a frame list. It is the low-emphasis fill, usually stacked one per row and often carrying a leading icon, and it is also the cancel action in a `SecondaryPanel` footer. **`secondary`** (`{colors.neutral.50}` fill, `{colors.neutral.300}` border) is the bordered neutral button: the dismiss side of a modal action pair — paired with a `primary` or `danger` confirm — and table furniture such as a page-size control or a table-header action. **`transparent`** carries only its `{colors.primary.600}` label, for the lowest-emphasis inline affordance.

Reaching for two bordered `secondary` buttons side by side for a panel's own actions is the characteristic mistake: production stacks `tertiary` buttons one per row there, and keeps `secondary` for dialogs and table furniture.

### Setting a value

Panels that collect settings are built almost entirely from `SectionButton`, and on the planner's left panel it is the dominant motif: one bordered row per setting, icon and label on the left, the value chosen so far on the right. Never render these as plain text rows — the border is what makes a long panel scannable.

The two themes in `{components.sectionButton.themes}` carry the meaning. `DASHED` is an empty slot — a dashed `{colors.primary.600}` outline with label and icon in that same colour, nothing filled behind it, no shadow — so it reads as an invitation. `SOLID` is a value already set: a `{colors.neutral.50}` surface inside a faint `{colors.opacity.neutralDark.10}` border, the label in `{colors.neutral.950}` ink with the icon receding to `{colors.neutral.600}`, seated on `{shadow.innerSm}`. A filter panel flips its own row from `DASHED` to `SOLID` the moment a value lands, so a column of rows doubles as a progress checklist; rows that are always populated — media type, channel, media owner on a deal line — are `SOLID` from the start.

The row whose panel is open takes `{components.sectionButton.active}` on top of either theme: a `{colors.primary.50}` fill inside a `{colors.primary.600}` border and ring, so the panel on screen is always tied back to the row that opened it. Disabled rows go flat grey (`{components.sectionButton.disabled}`), and a whole section group can carry a health dot from `{components.sectionButton.groupStatus}` beside its label.

**The value a row holds is always a chip, never plain text.** `SectionButtonChipList` owns the row's trailing edge (`{components.sectionButton.chipList}`), and every value that has been set arrives there as a `Chip` in the `PRIMARY` theme — dates, currency and single-select names included. There is no plain-text value case: the only bare text the trailing edge ever carries is the word `Required` in `{colors.primary}`, shown on a row that is required and still empty. Chips stack as a right-aligned column with `{components.sectionButton.chipList.gap}` between them, at `{components.sectionButton.chipList.chipBorderRadius}` and `{components.sectionButton.chipList.chipHeight}` each. Rendering `3/8/2026 - 9/8/2026` or `12,00 €` as bare coloured text is the characteristic way a setting panel loses its accent — the tint is faint enough at actual size that the wrong version looks nearly right, and a whole panel then reads monochrome where production reads indigo-accented.

Two shapes, and the data decides which. A **flat** list of values gives one chip per value, label only: tint behind, accent text, no badge. A list **grouped** by the category each value came from gives one chip per group, carrying the category as its label and the group's first value as its `subLabel` — the solid one-step-darker badge described under `{components.chip}` — followed by a badge-only chip for each remaining value in that group, which is that badge on its own with no tint drawn behind it. That is the planner's `Location` filter, where `Croydon` and `Brighton` sit under `Town` and `London` under `TV Area`. A grouped value whose first entry has no name of its own renders as a plain label chip with no badge, which is why the `Schedule` row — whose date range *is* the category — looks identical to a flat one.

Past `{components.sectionButton.chipList.maxSelected}` values a group collapses to one chip carrying the category as its label and the count as its badge, with the full list in a `{components.sectionButton.chipList.overflowPopover.background}` popover on hover; the row's own overflow menu collapses every group the same way, and an excluded group swaps `PRIMARY` for `{components.sectionButton.chipList.excludedChipTheme}` and takes the `exclude` icon. Colour is otherwise reserved for status, and a build that follows only that rule reaches for a grey chip here: a set value is indigo.

### Selecting from a list

Where a `SectionButton` row shows the values a filter *holds*, the surface that picks those values is a scrollable list of `SelectOption` rows (`src/lib/SelectOption`, `{components.selectOption}`) grouped under a `CollapsibleList` per category. That is the planner's `Location` filter, and it is a **list row, not a `SectionButton`**: no border and no fill of its own, selection carried by a control rather than by dressing the whole row.

Two things a clean build tends to get wrong here, both because the row looks like a plain checkbox list at a glance. First, **there is no leading checkbox.** `SelectOption` can show one (`hasCheckbox`), but the `Location` list turns it off and puts an always-visible `IncludeExcludeToggle` (`{components.includeExcludeToggle}`) at the row's *trailing* edge instead — a `{rounded.full}` segmented pill whose include half carries a check glyph, so an idle row reads as a faint grey rounded control on the right, not a square box on the left. Including an option fills that half `{colors.primary.600}` (`{components.includeExcludeToggle.includeSelected}`); excluding it turns the other half `{colors.neutral.800}`. Second, **the result count is furniture, not text.** The `<n> results` beside each category label is a `{rounded.full}` `{components.listStatsHeader.available.background}` pill, with included and excluded counts joining it as their own pills (`{components.listStatsHeader.included}` and `{components.listStatsHeader.excluded}`) once non-zero — never plain two-line text stacked under the label.

`MultiSelect` (`src/lib/MultiSelect`) is a second, unrelated selectable-list treatment — no check control at all, selection carried by filling the whole row indigo, groups headed by an alphabetical bucket letter in `{typography.sectionHeader}`. The two look nothing alike, and which is canonical for a new list is an open design question (see the note in `{components.selectOption}`). Reach for `SelectOption` where the planner's include/exclude semantics apply, and do not blend the two into one row.

### Dressing a card

A **card** is the container a summary panel or a filter group sits in, and `Card` (`src/lib/Card`) offers seven themes for it in `{components.card.themes}`. Pick by what the card is for and let the theme do the work — never colour one by hand.

The rule that matters most: **the theme dresses the chrome, not the body.** The header band, the footer and the `{components.card.borderWidth}` outer border carry the theme's surface colour; the content wrapper beneath the header stays `{components.card.bodyBackground}` in every theme but the two transparent ones. A `PRIMARY` card is therefore a `{colors.primary.950}` header band over a white body, not a slab of dark indigo — filling the whole card with the theme colour is the characteristic way to get this wrong.

Choosing between them: `SECONDARY` is the summary card — a `{colors.primary.100}` band with its heading in `{colors.primary.600}` — and it is what the planner's availability, allocation and proposal cards use. `DEFAULT` is the neutral container, and note that its fill is `{colors.neutral.100}` rather than the `{colors.neutral.50}` page surface, so a default card recedes a step rather than disappearing into the background. `PRIMARY` and `LIGHT_PURPLE` are the emphatic pair, for a card that has to hold its own against a busy surface such as the map. `TRANSPARENT` and `TRANSPARENT_WITH_BORDER` drop the fill from body as well as chrome, leaving a heading and at most an outline — use them where the card exists only to group, and what sits behind it should show through. `DEFAULT_NOT_ROUNDED` is `DEFAULT` for a card that must sit flush inside another container: it strips the radius, the shadow and the margin, keeping only the fill and border.

A card heading is `{components.card.headerTypography}`, coloured by its theme rather than by the type scale — where production shows an uppercase card heading such as `AVAILABILITY`, the capitals are in the string, not a `textTransform`. And a card supplies no padding around its children: the inset visible inside a summary card belongs to the metric rows it holds, not to the card.

### Labelling a section

Three different things all read as *a section heading*, and the type scale separates them by role rather than by size. Choosing between them by eye is the characteristic way a panel loses its hierarchy — a build that reaches for near-black sentence case everywhere flattens all three into one.

`{typography.sectionHeader}` is the narrowest of the three, and it is **not** a general-purpose heading. It labels a *group of items inside a list*: the heading above a group of nav links, the alphabetical bucket letter inside a long `MultiSelect`. It is the only level in the scale carrying a `textTransform`, so whatever string it is handed comes out capitalised — which is exactly why it must not carry a heading whose wording matters. Its colour is not fixed by the role: production runs it at `{colors.opacity.neutralDark.60}` in one place and `{colors.neutral.900}` in the other.

A **card heading** is not this. It is `{components.card.headerTypography}` on the card's tinted band, coloured by the theme — for a `SECONDARY` summary card, `{colors.primary.600}` on `{colors.primary.100}`. The uppercase `AVAILABILITY` in the planner is an uppercase *string*, not an uppercase style, and reproducing it with `{typography.sectionHeader}` gets the right picture from the wrong rule: the next heading whose wording is sentence case would then be wrongly capitalised.

A **disclosure control's own label** is the third, and it is the opposite of a card heading in every respect. The recipe is `{components.accordion}`: the label sits left in `{components.accordion.labelColour}` at `{components.accordion.labelTypography}` — muted, sentence case, wording preserved verbatim down to a trailing colon — with the chevron pushed to the far right of a full-width row, at `{components.accordion.chevronSize}` in `{components.accordion.chevronColour}`. In production they read `Deal line info:`, `Targets:`, `Filters:` and `Data targeting:`. A leading icon, when present, joins the muted group beside the label; the chevron never leads.

The card band and the disclosure label are the *same size* — both `{typography.bodySm}`. What separates them is colour and surface: a card heading is tinted ink on a tinted band, a disclosure label is grey on nothing. Reaching for a larger or heavier type step to tell them apart is the wrong instrument.

Two cautions live in the `{components.accordion}` block rather than here. `Collapsible`, `CollapsibleList` and `CollapsibleCategory` do not follow the `Accordion` label rule, so the recipe should not be generalised onto them. And a disabled group has **no** disabled appearance in production — it simply stops responding — so do not grey its label by borrowing a disabled token from another component.

### Reading a figure

Summary panels are the mirror image of setting a value: where a `SectionButton` row invites input, a metric row reports a result. The recipe is `{components.metricRow}` (`DealSummaryCardSection`), and every summary card in the planner and deal sidebars is built from it — availability, allocation, delivery, proposal, CPM and the deal-line info block. **Label left, figure right, on one baseline** — never the label stacked above its value, and never both at the same size. Getting that wrong costs the panel its entire hierarchy.

Three line types carry the ranking, and they are the whole vocabulary. `header` is the headline figure: a `{typography.subHeaderBase}` label in `{colors.essential.primary}` against a `{typography.headerXl}` value (20px/600) — a step the scale otherwise gives no role, and the largest type a working screen normally carries. `subheader` is a supporting figure that still matters: its label recedes to `{colors.essential.tertiary}` while the value sits at `{typography.bodyLg}` in full ink. `subheaderSecondary` mutes the value to `{colors.essential.tertiary}` as well, and this is the universe line — the total the headline is a subset of, often rendered with an *empty* label so the two figures stack right-aligned under one heading and read as "this many, of that many". A read-only panel drops its values, but not its labels, to `{components.metricRow.readOnlyValueOpacity}`.

Each metric group is its own section, separated from the one above by a `{components.metricRow.borderTopColour}` hairline, with `{components.metricRow.borderRadius}` on its top corners only, `{components.metricRow.padding}` inside it and `{components.metricRow.rowGap}` between the lines it holds. Stack sections rather than adding rules or margins between figures by hand. A group's action button — a frame list, an allocation report — belongs inside the section it reports on, not after the card.

### Showing status

Deal and campaign lifecycle status is a `Chip`, **not** a `Status`. The two are easy to confuse and behave differently:

- **Status chips** are the full-word pills that appear in deal grids, planner lines and campaign headers. Reuse `ChipBookingStatus` (`src/components/common/Deal/ChipBookingStatus`) rather than colouring a `Chip` by hand — it already owns the mapping. Every chip is a **tint**: a light step of the family (`{components.chip.themes}`) with the label in that family's accent at full strength, never a saturated fill with white text. The lifecycle vocabulary and its assigned colours are fixed in `{components.chip.statuses}`, and that mapping is the "every accent colour carries consistent meaning" promise made above — do not re-derive it per screen.
- **`Status`** is the compact single-letter initial pill used where a column is too narrow for a word. It *is* a solid fill with `{components.status.text}` on one of the six whole-family backgrounds in `{components.status.backgrounds}`.

Reading the status colours as a system: `PRIMARY` marks a state the platform has accepted (Approved, Proposal), `YELLOW` a state still awaiting a decision (Pending, Draft), `ORANGE` a soft hold (Option), `GREEN` a commitment (Confirmed), `LIME` a campaign delivering right now (Live), `RED` a hard stop (Rejected, Terminated, Failed), and `GREY` everything inert — not yet started, finished, or withdrawn (Reserved, Ended, Cancelled, Deleted). New statuses should join an existing band rather than claim a new hue.

Beyond `src/lib`, three shared data surfaces should always be reused rather than rebuilt:

- **Tables** — the ag-grid wrapper `Table` (`src/components/patterns/Table`), with its `TableHeight` / `TableRowHeight` presets and the shared cell renderers (`src/utils/cellRenderer.tsx` and the `*Renderer` components under `src/components/common`).
- **Charts** — the Highcharts wrappers `Chart`, `PieChart`, `ColumnChart` and `SplineChart` (`src/components/patterns/HighChart`). Series colours come from `{components.chart}`, never from an ad-hoc pick: a lone series is `{components.chart.seriesDefault}` (or `{components.chart.rateSeries}` when the metric is a rate), a handful of named series follow `{components.chart.multiSeriesOrder}` by role, and a many-slice breakdown walks `{components.chart.categoricalOrder}` in sequence. Plot and legend surfaces sit on `{components.chart.surface}` so charts read as recessed panels rather than cards.
- **Maps** — the deck.gl/CARTO planner map (`src/components/pages/Planner/PlannerMap`), with its toolbar, feature-selection widget and furniture cards. Its layer palette is `{components.map}`, and it does not follow the status colours above — see below.

Tooltips and popovers are in-house as well: `Tooltip` (`src/components/patterns/Tooltip`) and the react-tiny-popover based `Popup` (`src/components/patterns/Popup`). Note that `src/components/patterns` also carries an older generation of Button, Card, Checkbox, Modal and Chips with incompatible variant systems — treat those as legacy and design against the `src/lib` equivalents.

### Colouring the map

**The map does not speak the status vocabulary, and reasoning across from it is the characteristic way to get the planner wrong.** In a chip, green marks a commitment and red a hard stop; on the map, availability is the brand indigo of `{components.map.marker.available}`, green means *allocated* — inventory already committed to this line — and red is reserved for a frame with no share of time left to sell. A build that paints available frames green and unavailable ones red has inverted the screen's most important signal while using entirely legal tokens, so nothing will flag it.

Start from the cartography, because it is the one thing the design system does not own. The basemap is CARTO's hosted Voyager style (`{components.map.basemap}`): a pale, low-contrast map whose own greens, blues and greys already occupy the middle of the value range. Every marker colour is picked to survive on top of that, which is why the fills are saturated ramp steps carrying alpha rather than tints — and why none of the basemap's hues should be borrowed for product chrome, where they would read as accidental.

**One state, one colour, and clusters are not a state.** A single accessor colours single frames and clustered ones alike, in strict precedence: inactive, then index band, then allocated, then unavailable, then available. So a grey marker never means "this is a cluster" — it means `{components.map.marker.inactive}`, either a read-only booking or a line whose impressions have not been computed yet, and it is the *first* branch, overriding everything below it. Clusters differ from single frames only in scale and in the count they carry: radius is `{components.map.marker.radiusRatio}` (0.2) of an element size that grows with the number of assets, so a big cluster reads several times a lone frame, with its frame count centred in `{components.map.clusterLabel}`.

**A marker is a flat translucent disc, and that is the whole of it.** One hue at one opacity, with the cartography reading through — the translucency is what keeps a dense cluster field from becoming an opaque blanket over the map. The lighter outer band (`{components.map.marker.outerBandAlphaRatio}`), the `{components.map.marker.ringColor}` ring and the concentric progress arcs all belong to a single shader branch that only runs when sizing by impressions is switched off, so none of them appears in the default view. Build the flat disc; treat the rest as a state you have not seen.

**Turning on an index segmentation replaces the availability palette entirely.** `{components.map.indexRamp}` is a five-band ramp over quartiles of the loaded index range — not fixed index thresholds — applied at `{components.map.indexRamp.fillOpacity}`, so an indexed map reads flatter and more opaque than an availability one. The zero band is deliberately grey, so an unindexed frame recedes instead of reading as a low score. The four non-zero bands are also the only part of the map that its own key gets right; the availability and allocation swatches in the legend name colours the layers never draw. That is a production bug rather than a second opinion, and `{components.map}` records the layers, so build from the tokens and leave the legend alone.

## Layout

Our layout vocabulary is built on **layered surfaces** that let the user move up and down through levels of detail. The whole app sits inside a single framing surface filled with the deepest step of the primary ramp (`{colors.primary.950}`) and inset by `{layout.workingSurfaceFrameWidth}` (6px) on all four sides, so a dark-blue border always frames the application.

Arranged horizontally, the **main nav bar** anchors the left edge at a fixed width (`{layout.sidebarWidth}`, 60px); the remaining vertical and horizontal space is given to a **working surface** with `{rounded.lg}` (8px) rounded corners that presents whichever option is selected in the nav bar.

**Two spacing systems coexist**, and it matters which one you are in. `{spacing}` is the CSS custom-property grid from `spacing.pcss` (0/2/5/10/15/20/25/30px, with `{spacing.md}` (15px) as the base unit) — it governs page-level rhythm: gaps between panels, section padding, the inset around the working surface. Inside `src/lib` components, padding is written with Tailwind's stock 4px-based utilities instead — `{componentSpacing}` (`p-0.5`/`p-1`/`p-1.5`/`p-2`/`p-3`/`p-4` = 2/4/6/8/12/16px) — because the config only *extends* Tailwind's spacing rather than replacing it. So `{components.button.padding}` is `{componentSpacing.2}` (8px), a value that is deliberately absent from `{spacing}`. Use `{spacing}` for layout and `{componentSpacing}` for anything inside a component, and follow the component's own enum where it has one. A value on neither scale is a mistake.

In code, the shell is already built: the main nav bar is `SidebarMenu` (`src/components/common/SidebarMenu`), the top bar is `Header` (`src/components/common/Header`, `{layout.headerHeight}` tall), and pages assemble their working surface from the scaffolds in `src/components/common/layout` — `AppPageWrapper`, `PageWrapper`, `SingleContent`, `ContentWithLeftSidebar` and `ContentWithRightSidebar`. Second-level navigation inside a vertical is the `SubNavigation` tab bar (`src/components/common/SubNavigation`), driven by a `tabsConfig` list.

### The page never scrolls

**The working surface is viewport-height.** `AppPageWrapper` is `{layout.appShellHeight}` (100vh) tall with its overflow hidden, and the surface holding the page hides its overflow too, so the document itself never scrolls and the browser's own scrollbar never appears. A page taller than the viewport is not a longer page — it is a page whose overflow has not been placed yet.

**Placing it is the page's decision**, and production makes that decision in one of two ways. Most verticals hand the whole working surface to a single scrolling region: `PageWrapper` is `h-full overflow-auto`, and `/deals`, `/content-management`, `/inventory-management`, `/insights` and `/users` all wrap themselves in it, so the page header scrolls away with the rows beneath it. Dense pages split instead — chrome pinned, only the region below it scrolling. The planner container is `overflow-hidden h-full`; its campaign header sits outside the scroll and the row holding the map, the deal line strip and the panels is `flex-1 overflow-y-auto`, so those surfaces scroll independently and the header never moves. `ContentWithLeftSidebar` splits along a vertical seam for the same reason, giving the sidebar `{layout.mainContentHeight}` with no overflow and the content column the same height with `overflow-auto`.

Take the single scroll for a table or a form, where there is one thing to read and pinning its top edge buys nothing. Take the split wherever the region carries a canvas or a set of panels meant to be read against each other — a map that has scrolled out of view has stopped being a reference.

### Overlay or column

Every working surface has a **canvas** — the map on the planner, the grid on a listing — and each surface around it relates to that canvas in one of two ways. Deciding wrongly costs the canvas its whole purpose: an overlay mistaken for a column squeezes the map to a strip, and a map too narrow to read is not a map.

**Columns displace.** They are siblings in the region's flex row, so opening one narrows the canvas. On the planner they are the campaign info drawer (`CampaignDrawer`, `{layout.campaignDrawerWidth}`) and the deal line strip (`DealLineStrip`, `{layout.dealLineStripMinWidth}`). That width is the strip's *footprint*: it is applied as a fixed width, and because the application is `border-box` throughout, the `{layout.dealLineStripXPadding}` on each side sits inside it — so the deal-setup cards are narrower than the strip by twice that padding. The canvas wrapper is `flex-1` and absorbs whatever they leave.

**Overlays float.** They are lifted out of flow — `fixed` or `absolute` — so the canvas keeps its full width and the panel keeps its own. The secondary panel (`{components.secondaryPanel}`) is `fixed` at `z-50`, above both the cartography and the map's own `z-10` controls. The right sidebar slides in from `right-0` at `{layout.rightSidebarWidth}`, animating on `translate-x`. The planner's summary cards float over the map on the transparent rail described below (`{components.summaryPanel.rail}`), inset `{components.summaryPanel.rail.insetRight}` from its right edge.

**One surface does both**, and it is worth knowing why. On the programmatic planner, opening the right sidebar gives the canvas wrapper a matching right margin: the map *reserves* room for an overlay rather than being cut by a column. The reserve is voluntary — the sidebar is out of flow and would cover the map regardless — and it exists so no cartography is hidden behind an opaque panel. Reserve when the canvas must stay wholly visible; overlay plainly when it need not. The direct-sales summary panel makes the opposite choice under its own conditions, becoming a real column in overview and review modes, where there is no map to protect.

**The summary panel is a rail, not a column** — and this is the single easiest thing to get wrong about the planner. Over the map it is not a panel at all: it is a transparent strip carrying a stack of detached cards, each one a `{components.card}` with its own border, `{components.card.shadow}` and `{components.card.borderRadius}` corners, separated by `{components.summaryPanel.rail.gap}` of live cartography. The basemap reads *between* the cards, and that gap is what tells a trader the figures are laid on the map rather than walling it off. Build it as one opaque surface divided by hairline rules and the region loses both its depth and its point. The rail is `pointer-events-none` and every card re-enables its own with `pointer-events-auto`, so a drag that starts in the gutter between two cards pans the map beneath.

**One name, two widths.** The rail over the map is `{components.summaryPanel.rail.width}` (293px) — a literal on neither spacing scale, and *not* `{layout.rightSidebarWidth}`. That token (350px) is the width of an opaque column: `PlannerRightSidebar`, and the backing surface (`{components.summaryPanel.backingColumn}`) the same component grows in overview and review modes, in `{colors.neutral.100}` with a left hairline, stopping `{layout.overviewModeFooterHeight}` above the region's bottom edge so the mode footer clears it. Reach for `{components.summaryPanel.rail.width}` whenever the cards float and `{layout.rightSidebarWidth}` whenever the surface is solid; using the sidebar width for the map-mode rail overstates it and eats the cartography the gap exists to reveal.

The secondary panel's inset is the rule to copy for any panel of this kind. It hangs from `{components.secondaryPanel.inset.top}`, flush under the header, down to `{components.secondaryPanel.inset.bottom}`, so it stretches to the region rather than being centred or given a fixed height. Its left edge is computed, not authored: the chrome to its left is summed — nav bar, campaign drawer if open, deal line strip and its `{layout.dealLineStripXPadding}` — then clamped so the panel can never reach the right sidebar. That sum counts the nav bar's width but not the working surface's own frame inset, so the gap that actually opens is a little narrower than the padding implies — read `{layout.dealLineStripXPadding}` here as the intent, not as a measurement. The panel therefore opens just clear of the column that raised it, with the canvas showing through the gap, and stops well short of the panel on the far side. A band of live canvas always survives on both sides of it, and that is the point: the panel is a thing laid *on* the map, never a slice taken *out* of it.

## Key verticals

In the main Viooh Trading Manager (VTM) product, the global nav points to:
- `/deals/programmatic` — also referred to as **Campaign Management** or **Deal Management**. Its deal listings are built on the shared ag-grid `Table` wrapper.
  - `/planner/programmatic` — the main surface for creating a new campaign; also known as **the planner**. Its key building blocks live under `src/components/pages/Planner`: the map (`PlannerMap`), the deal line strip holding the deal-setup cards (`PlannerDealLine/DealLineStrip`) at `{layout.dealLineStripMinWidth}`, the summary panel with the availability card (`PlannerSummaryPanel/AvailabilityCard`), the secondary panel (`PlannerSecondaryPanel`) at `{layout.secondaryPanelWidth}`, and the right sidebar (`PlannerRightSidebar`) at `{layout.rightSidebarWidth}`, with its availability/impressions distributions and frame list.
  - `/deal` — the old campaign-creation surface, also known as **the deal form**. It shares some elements with the planner: the campaign info drawer (`CampaignDrawer` under `src/components/common/Deal/CampaignHeader`, `{layout.campaignDrawerWidth}` wide), the tabs for switching between deal lines (`CampaignHeaderLines`), and the availability card. Noted here so you know it exists, but it is on its way to being deprecated — everything campaign-creation related should live on the planner.
- `/content-management/creatives` — also known as **content moderation**. Where the creatives that run on campaigns are tagged to the right campaign and moderated if necessary. Built around the shared `Table` wrapper with image/video cell renderers, plus `Lightbox` (`src/components/patterns/Lightbox`) for creative previews.
- `/insights` — a collection of ThoughtSpot embeds (`LiveboardVisuals`, `src/components/patterns/LiveboardVisuals`) surfacing the key vitals of the system for a given media owner, alongside Highcharts-based diagnostics.
- `/inventory-management`
- `/users`

