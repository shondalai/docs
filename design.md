# Design — Shondalai Docs

A locked visual system for the multi-product Docusaurus portal. New portal UI
must preserve the existing plugin IDs, routes, sidebars, redirects, and Markdown
content while reading the tokens in `tokens.css`.

## Genre

Modern-minimal, with a technical but welcoming documentation voice.

## Macrostructure family

- Portal home: **Index-First** — search, task paths, then the complete product index.
- Documentation pages: **Workbench** — navigation rail, fluid article canvas, contextual table of contents.
- Utility pages: **Long Document** within the same typography and surface system.

## Theme

- Paper: neutral near-white in light mode; neutral charcoal in dark mode. Surfaces carry no green tint.
- Ink: neutral charcoal in light mode, near-white in dark mode.
- Accent: Shondalai green, used for links, active indicators (edge bars, TOC and tab highlights), and focus support. It is never used as a text background; selected rows use a neutral tint with dark ink.
- Secondary signal: warm yellow is reserved for the focus ring.
- All colour values are defined as OKLCH tokens in `tokens.css`.

## Typography

- Display: Space Grotesk Variable, weight 650–700, roman.
- Body: IBM Plex Sans Variable, weight 400–450.
- Code: JetBrains Mono Variable, weight 400–600.
- Documentation content uses the full available article column; body line-height: 1.65.

## Spacing

Four-point named scale from `--space-3xs` through `--space-4xl`. Components use
named tokens instead of isolated spacing values.

## Motion

- Page content is composed and static.
- Interactive rows use a short arrow translation or surface shift only.
- Easings: `--ease-out`, `--ease-in`, and `--ease-in-out` from `tokens.css`.
- Reduced motion removes spatial movement and caps transitions at 150ms.

## Microinteractions stance

- Search opens through the visible control or Mod+K.
- Focus rings are immediate and visible.
- Hover has a keyboard-focus equivalent; touch targets are at least 44px.
- Successful navigation is silent; the destination is the feedback.

## CTA voice

- Primary actions are destination-specific: “Open docs”, “Browse products”, “View guide”.
- Secondary actions are typographic links with a single directional arrow.
- Labels stay on one line; navigation containers reflow instead.

## Per-page allowances

- Portal home: typography and product initials only; no decorative illustration.
- Documentation pages: no enrichment; code, tables, screenshots, and admonitions serve the content.
- Utility pages: typography only.

## What pages MUST share

- “Shondalai Docs” text wordmark.
- Light/dark token family, display/body/code fonts, link treatment, focus ring, and footer.
- Fluid documentation content, stable navigation states, and the same search affordance.

## What pages MAY differ on

- Product-specific sidebar structure and article content.
- Homepage discovery grouping versus article-page reading layout.
- Full-width screenshots where an individual guide needs them.

## Exports

### tokens.css

The canonical CSS export is the root `tokens.css` file.

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(99.4% 0.002 250);
  --color-paper-2: oklch(97.2% 0.003 250);
  --color-paper-3: oklch(93.8% 0.004 250);
  --color-ink: oklch(21% 0.012 260);
  --color-ink-2: oklch(31% 0.012 260);
  --color-muted: oklch(42% 0.014 260);
  --color-rule: oklch(88.5% 0.005 250);
  --color-rule-strong: oklch(76% 0.008 250);
  --color-accent: oklch(45% 0.14 145);
  --color-accent-ink: oklch(99.4% 0.002 250);
  --color-focus: oklch(52% 0.14 95);
  --font-display: "Space Grotesk Variable", sans-serif;
  --font-body: "IBM Plex Sans Variable", sans-serif;
  --font-mono: "JetBrains Mono Variable", monospace;
  --spacing-3xs: 0.125rem;
  --spacing-2xs: 0.25rem;
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4.5rem;
  --spacing-4xl: 7rem;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.375rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.25rem;
  --text-3xl: 3rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --radius-sm: 0.375rem;
  --radius-md: 0.625rem;
  --radius-lg: 1rem;
  --radius-pill: 999px;
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": {"$value": "oklch(99.4% 0.002 250)", "$type": "color"},
    "paper-2": {"$value": "oklch(97.2% 0.003 250)", "$type": "color"},
    "paper-3": {"$value": "oklch(93.8% 0.004 250)", "$type": "color"},
    "ink": {"$value": "oklch(21% 0.012 260)", "$type": "color"},
    "ink-2": {"$value": "oklch(31% 0.012 260)", "$type": "color"},
    "muted": {"$value": "oklch(42% 0.014 260)", "$type": "color"},
    "rule": {"$value": "oklch(88.5% 0.005 250)", "$type": "color"},
    "rule-strong": {"$value": "oklch(76% 0.008 250)", "$type": "color"},
    "accent": {"$value": "oklch(45% 0.14 145)", "$type": "color"},
    "accent-ink": {"$value": "oklch(99.4% 0.002 250)", "$type": "color"},
    "focus": {"$value": "oklch(52% 0.14 95)", "$type": "color"}
  },
  "font": {
    "display": {"$value": "Space Grotesk Variable", "$type": "fontFamily"},
    "body": {"$value": "IBM Plex Sans Variable", "$type": "fontFamily"},
    "mono": {"$value": "JetBrains Mono Variable", "$type": "fontFamily"}
  },
  "size": {
    "text-xs": {"$value": "0.75rem", "$type": "dimension"},
    "text-sm": {"$value": "0.875rem", "$type": "dimension"},
    "text-base": {"$value": "1rem", "$type": "dimension"},
    "text-md": {"$value": "1.125rem", "$type": "dimension"},
    "text-lg": {"$value": "1.375rem", "$type": "dimension"},
    "text-xl": {"$value": "1.75rem", "$type": "dimension"},
    "text-2xl": {"$value": "2.25rem", "$type": "dimension"},
    "text-3xl": {"$value": "3rem", "$type": "dimension"},
    "text-display": {"$value": "5rem", "$type": "dimension"}
  },
  "space": {
    "3xs": {"$value": "0.125rem", "$type": "dimension"},
    "2xs": {"$value": "0.25rem", "$type": "dimension"},
    "xs": {"$value": "0.5rem", "$type": "dimension"},
    "sm": {"$value": "0.75rem", "$type": "dimension"},
    "md": {"$value": "1rem", "$type": "dimension"},
    "lg": {"$value": "1.5rem", "$type": "dimension"},
    "xl": {"$value": "2rem", "$type": "dimension"},
    "2xl": {"$value": "3rem", "$type": "dimension"},
    "3xl": {"$value": "4.5rem", "$type": "dimension"},
    "4xl": {"$value": "7rem", "$type": "dimension"}
  },
  "duration": {
    "micro": {"$value": "120ms", "$type": "duration"},
    "short": {"$value": "220ms", "$type": "duration"},
    "long": {"$value": "420ms", "$type": "duration"}
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 99.4% 0.002 250;
  --foreground: 21% 0.012 260;
  --card: 100% 0 0;
  --card-foreground: 21% 0.012 260;
  --popover: 100% 0 0;
  --popover-foreground: 21% 0.012 260;
  --primary: 45% 0.14 145;
  --primary-foreground: 99.4% 0.002 250;
  --secondary: 93.8% 0.004 250;
  --secondary-foreground: 31% 0.012 260;
  --muted: 88.5% 0.005 250;
  --muted-foreground: 42% 0.014 260;
  --accent: 45% 0.14 145;
  --accent-foreground: 99.4% 0.002 250;
  --destructive: 52% 0.18 28;
  --destructive-foreground: 99.4% 0.002 250;
  --border: 88.5% 0.005 250;
  --input: 88.5% 0.005 250;
  --ring: 52% 0.14 95;
  --radius: 0.625rem;
}
```
