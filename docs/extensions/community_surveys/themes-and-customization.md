---
id: themes-and-customization
title: Themes & Customisation
sidebar_label: Themes & Customisation
sidebar_position: 70
---

# Themes & Customisation

Every survey can be themed independently. Pick a base theme, tweak colour and typography overrides per survey, or author your own theme from scratch.

Two pages drive theming:

- **Themes** (left rail) — site-wide theme catalogue. Author and edit reusable themes here.
- **Survey Builder → Design tab** — per-survey theme picker + overrides. See the [Survey Builder guide](./survey-builder.md#design-tab).

This page documents the Themes page.

---

## Layout

Two-pane workspace:

- **Theme list** (left) — every theme available on the site. Built-in catalogue + your custom themes.
- **Theme editor** (right) — colour pickers, typography controls, and a live preview.

---

## Built-in themes

Community Surveys ships with a curated theme catalogue. Each theme ships as a **matched light + dark pair** — the same accent colour and typography, with surface tones flipped for each mode.

Browse the catalogue by scrolling the left list. Click any theme to load it into the editor. The preview shows what surveys look like with this theme applied.

You can use built-in themes as-is, or duplicate them as a starting point for custom themes.

---

## Editor controls

The editor exposes:

### Colours

- **Accent colour** — the primary action colour. Used for buttons, progress bars, focus rings, and selected-option indicators.
- **Accent foreground** — text colour used on top of the accent (button labels). Picked automatically by default; override for high-contrast.
- **Surface tone** — `neutral` (default, off-white / off-black) or `warm` (slightly tinted). Affects backgrounds.
- **Page background** — the colour outside the survey card.
- **Card background** — the survey card itself.
- **Text colour** — primary body text.
- **Muted text colour** — secondary text (help, descriptions, disabled).
- **Border colour** — form-control borders.

All colours are HSL-driven internally; the picker accepts hex, rgb, hsl, and `oklch()` notation.

### Typography

- **Font family** — sans-serif (Inter Tight, default), serif, system, or custom.
- **Base font size** — 14, 15, 16 px presets, or custom.
- **Heading weight** — 500, 600, 700.
- **Line height** — comfortable / compact / spacious.

### Shape

- **Border radius** — `square` (0px) / `soft` (4px) / `rounded` (8px) / `pill` (full round).
- **Card shadow** — `none` / `subtle` / `prominent`.

### Mode toggle

Above the preview, a Light/Dark switch. Flipping it shows the same theme rendered in each mode — useful for verifying both work before saving.

---

## Authoring a custom theme

Two paths:

### Duplicate an existing theme

The fastest start. From the theme list:

1. Right-click any theme → **Duplicate**.
2. A copy appears with " (copy)" appended to the title.
3. Edit anything in the editor — the preview updates live.
4. Save.

### Create from scratch

Click **+ New theme** at the top of the list. You'll be prompted for:

- **Title** — what shows in the picker (e.g. "Brand 2026").
- **Default mode** — `light` / `dark` / `auto`. `auto` follows the respondent's OS preference.

The editor opens with sensible defaults. Tweak and save.

---

## Theme variables

Internally, themes resolve to a set of CSS custom properties applied to a `:where(.cs-theme-*)` selector on the survey card. The variables map 1:1 onto the editor's controls. If you need to apply custom CSS rules that respect the theme, target these variables:

| Variable | What it controls |
|---|---|
| `--cs-accent` | Primary action colour |
| `--cs-accent-fg` | Text on top of accent |
| `--cs-bg` | Page background |
| `--cs-card-bg` | Survey card background |
| `--cs-fg` | Primary text |
| `--cs-fg-muted` | Muted/secondary text |
| `--cs-line` | Border colour |
| `--cs-radius` | Border radius |
| `--cs-shadow` | Card shadow |

You can use these in CSS overrides if you're inserting custom HTML into rich-text questions or page descriptions.

---

## Publishing and access

Themes have two visibility flags:

- **Published** — when on, the theme appears in the per-survey picker (Builder → Design tab) and the public survey runtime can serve it. When off, it's saved but hidden — useful while drafting.
- **Access** — Joomla view-level access. Defaults to "Public". Restrict to roles like "Registered" if you want certain themes available only to specific admin tiers.

The Joomla access model controls who can *use* a theme. Editing themes always requires `core.admin` on the component.

---

## Per-survey overrides

The Builder's Design tab adds a layer on top of the theme:

- **Accent override** — replace the theme's accent for this one survey.
- **Surface tone override** — switch neutral↔warm without changing themes.
- **Font family override** — pick a different font for this survey.
- **Border radius override** — square↔soft↔rounded↔pill.

Overrides cascade — leave any control as "Inherit" to use the theme's value.

This lets you maintain a small library of themes (e.g. "Corporate", "Casual", "Survey-of-the-month") and tune individual surveys without bloating the catalogue.

---

## Deleting a theme

From the theme list, right-click → **Delete**. Confirmation dialog before destructive action.

Surveys currently using the deleted theme **don't break** — they fall back to the workspace's default theme at runtime. The fallback is visible immediately; you'll need to re-pick a theme for affected surveys in the Builder's Design tab.

A theme can only be deleted by `core.admin`.

---

## Importing / exporting themes

Right-click any theme → **Export** to download it as a single JSON file with every colour, typography, and shape setting.

Import via the **Import** button in the page toolbar. Drop the JSON file in; the imported theme appears in the list with " (imported)" appended.

Useful for:

- **Sharing themes** — give a JSON to another site owner.
- **Backing up** — save a JSON before experimenting; re-import to restore.
- **Templating across sites** — version-control your themes in git, import on every site.

---

## Common questions

### Why do themes ship as light + dark pairs?

Modern admins and survey respondents have a strong dark-mode preference. Maintaining "Theme X (light)" and "Theme X (dark)" as separate entries doubled the catalogue and made it easy to forget to keep them in sync. Pairing means you author the accent colour + typography once, and we compute the surface tones for each mode automatically.

### Can I write CSS directly?

The Themes page is design-token-driven — no raw CSS. The reason: changes to the underlying Survey CSS in future releases would silently break custom CSS. The token model is a stable contract.

If you genuinely need raw CSS for a one-off visual flourish, the *per-question* Advanced tab lets you add a CSS class to a question; you can then write CSS that targets that class via Joomla template overrides. See [Custom module positions](./custom-module-positions-in-community-surveys.md) for that pattern.

### Where do themes live on disk?

They don't. Themes are DB rows in `#__survey_themes`. The JSON export gives you a portable representation.

### Does each respondent see their preferred light/dark mode?

By default, yes. The survey page reads `prefers-color-scheme` from the respondent's browser and serves the matching mode. Each theme's `default mode` setting overrides this — set to `light` or `dark` to force a single mode regardless of OS preference.
