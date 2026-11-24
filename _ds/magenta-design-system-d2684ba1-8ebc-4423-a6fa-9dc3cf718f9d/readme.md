# Magenta Design System

**Magenta** is a nightclub (discoteca). This system powers its public website: event agenda, ticket sales, VIP table reservations and club info. Language of the product is **Spanish** (ES primary, EN secondary).

## Sources
- Logo: `uploads/imagen_2026-09-25_134427435.png` (447×447 PNG, script "Magenta" wordmark inside an open circle, raspberry #A83456 on white). Copied to `assets/logo-original.png`; transparent recolours derived from it: `logo-magenta.png`, `logo-white.png`, `logo-black.png`.
- Structural reference given by the client: https://pacha.com (Pacha Ibiza). The full URL with tracking params could not be fetched; the layout conventions (dark full-bleed hero, centred logo header, event rails, VIP block, newsletter footer, heavy uppercase type) are taken from general knowledge of big-club sites. **No Pacha assets, logo or cherry motif are used.**
- No codebase, Figma, fonts or photography were provided.

## Content fundamentals
- **Voice:** short, nocturnal, confident. Sells a feeling (la noche, la pista, el sol al salir) in few words. Never corporate.
- **Person:** tú (informal). "Tu mesa, junto a la cabina", "Entérate primero", "¡Nos vemos dentro!". The club speaks as "nosotros" ("Te contactamos en menos de 24 h").
- **Casing:** headlines, event names, buttons, nav and labels are UPPERCASE (via CSS, write them in sentence case in source). Body copy is sentence case.
- **Dates/times:** "VIE 11 OCT", "23:59 → 06:00", prices "desde 25 €" (space before €, comma decimals).
- **CTAs:** verb-first, 1–2 words: Comprar entradas · Reservar VIP · Ver todo · Pagar · Suscribirme.
- **Status words:** Esta noche · Nuevo · Últimas · Sold out / Agotado.
- **Emoji:** never. No exclamation marks except the confirmation moment.
- Legal/age copy is plain and short: "+18 con DNI o pasaporte original."

## Visual foundations
- **Colour:** night-first. Page is warm black `--ink-950` (#0B0709) with a faint magenta tint in every neutral. The logo raspberry `--magenta-500` #A83456 is the brand accent: primary buttons, big feature blocks (VIP section is solid magenta), selected borders. Lighter `--magenta-300/400` for eyebrows, hovers and accent words in headlines. `--neon-500` #FF3D7F only for "live/tonight" and focus rings. Paper `--ink-100` for secondary buttons, toasts, tooltips. Semantic colours only for ticket/payment state.
- **Type:** display = Big Shoulders Display 900, uppercase, leading .85–.95, huge (up to 176px) — headlines are the imagery when no photo exists. Body = Hanken Grotesk 400–700. Mono = JetBrains Mono for dates, times, prices. Labels: 11–13px bold caps with .14–.24em tracking. The script of the logo is **only** in the logo — never set text in a script face.
- **Backgrounds & imagery:** full-bleed event photography / artwork, warm, high-contrast, grainy crowd & light shots. Always a bottom **protection gradient** (ink-950 → transparent) under overlaid text. No decorative gradients, patterns or illustrations. Placeholders are diagonal ink-800/850 stripes.
- **Layout:** edge-to-edge sections, fluid gutter `--gutter` (20–56px), sections separated by 96–144px or a 1px `--border-subtle` rule. Sticky header 72px, transparent over hero, becomes blurred ink glass on scroll. Horizontal rails for events.
- **Corners:** nearly square — 2px on buttons, inputs, cards. Pill only for filter Tags; 50% only for IconButtons.
- **Cards:** no rounded shadowed "cards". Event cards are image + text with no container. Surfaces that need containment use `--surface-card` + 1px `--border-subtle`.
- **Shadows:** only `--shadow-pop` for overlays (dialogs, toasts) and `--shadow-glow` (magenta ring+glow) for a selected/featured item.
- **Transparency & blur:** header on scroll, dialog scrim (72% ink + blur 18px). Nowhere else.
- **Motion:** quick and smooth. Hover 140ms ease-out colour changes; image hover = slow 600ms scale 1.05; switch/UI 240ms. No bounces, no parallax gimmicks.
- **Hover:** primary → lighter magenta; outline → fills paper, text goes black; text links/titles → magenta-300. **Press:** scale .97.
- **Borders:** hairlines at 8/16/40% paper alpha. Selected = 1px magenta-500.

## Iconography
- **Lucide** (outline, 2px stroke) via CDN `lucide-static@0.460.0`, rendered through the `Icon` component as a currentColor mask. No icon font, no emoji, no unicode glyphs except → in time ranges. **Substitution flag:** the brand has no icon set; Lucide was chosen as the closest neutral match.
- Common: arrow-up-right (external/buy), arrow-left/right (rails), ticket, calendar, clock, map-pin, menu, x, instagram, music-2, share-2, check.

## Fonts — substitution flag
No brand fonts provided. Using Google Fonts: Big Shoulders Display (display), Hanken Grotesk (body), JetBrains Mono (data). Loaded via @import in `tokens/fonts.css`. Replace with licensed files if the club has a typeface.

## Index
- `styles.css` — entry point (@imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `assets/` — logo-original.png, logo-magenta.png, logo-white.png, logo-black.png
- `guidelines/` — foundation specimen cards (colours, type, spacing, radii, elevation, motion, logo, imagery)
- `components/` — React primitives (see below), one card per folder
- `ui_kits/website/` — click-through website (Home, Agenda, Evento, VIP, Club)
- `thumbnail.html`, `SKILL.md`

## Components
- core: **Button**, **IconButton**, **Icon**
- forms: **Input**, **Select**, **Checkbox**, **Switch**, **QuantityStepper**
- display: **Badge**, **Tag**, **EventCard**, **TicketTier**
- navigation: **Tabs**
- feedback: **Dialog**, **Toast**, **Tooltip**

### Intentional additions
No source defined components; this is a standard set sized for a club site. Beyond it: **Icon** (Lucide wrapper), **EventCard** and **TicketTier** (the site's core domain units), **QuantityStepper** (ticket quantities).
