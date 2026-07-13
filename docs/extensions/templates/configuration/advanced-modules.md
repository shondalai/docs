---
id: advanced-modules
title: "Modules and Advanced Settings"
sidebar_label: Modules & Advanced
sidebar_position: 7
---

# Modules and Advanced Settings

The Modules tab places the template's module positions on a 12-column layout grid, and the Advanced tab adds custom CSS, scripts, analytics and body classes. Both live under **System → Site Template Styles**, in your Studio template style.

## The Modules tab: layout grid

The grid is the live position map of your site. Rows form a 12-column grid, and each block in a row is a real Joomla module position with a width measured in columns. The block named `main` is the page content itself and cannot be removed.

The default layout ships six rows:

| Row | Positions and widths |
|-----|----------------------|
| Topbar | `topbar` (12) |
| Header | `header-nav` (8), `menu` (4) |
| Banner | `banner` (12) |
| Content | `sidebar-left` (3), `main` (6), `sidebar-right` (3) |
| Bottom | `bottom-a` (4), `bottom-b` (4), `bottom-c` (4) |
| Footer | `footer` (12) |

### Working with the grid

- Drag a block's right edge to resize it. Widths snap to twelfths of the row.
- Each row shows a running total such as **8 / 12**; it turns red if the blocks exceed twelve columns.
- Click **+ Position** on a row to add one of the template's declared positions that is not placed yet.
- Click **+ Add row** to create a new empty row.
- The editable names on rows and blocks are display labels only. The position key underneath each block is the real Joomla position and never changes.
- Remove a block with its cross button. The row holding `main` cannot be removed.

Positions with no published modules simply collapse, so an unused sidebar costs no space on the live site.

:::note The topbar, header and footer rows are special
The rows named Topbar, Header and Footer feed the template's designed bands rather than rendering as plain grid rows. Their module positions still work, but the bands themselves are controlled by the Layout and [Footer](footer.md) tabs. Removing those rows from the grid does not remove the bands.
:::

## Publishing a module into a position

Modules are published the normal Joomla way; the Modules tab only decides where positions sit on the page.

1. Go to **Content → Site Modules**.
2. Click **New** and choose a module type, or open an existing module.
3. In the **Position** field, pick the template position, for example `sidebar-right`.
4. On the **Menu Assignment** tab, choose which pages show the module.
5. Set **Status** to Published and click **Save**.

## Template positions

The Studio templates declare a generous set of positions. The exact list is identical in shape across the templates; the table below groups the notable ones by area.

| Area | Positions |
|------|-----------|
| Top bar | `topbar`, `below-top` |
| Header | `logo`, `menu`, `search`, `header-nav`, `header-actions`, `mega-1`, `mega-2` |
| Hero and banner | `banner`, `hero`, `hero-left`, `hero-right` |
| Above content | `top-a`, `top-b`, `top-c`, `top-d`, `breadcrumbs`, `main-top`, `above-content` |
| Content | `sidebar-left`, `content-top`, `content-bottom`, `sidebar-right`, `below-content`, `main-bottom` |
| Bottom | `bottom-a`, `bottom-b`, `bottom-c`, `bottom-d` |
| Footer | `footer-top`, `footer-1`, `footer-2`, `footer-3`, `footer-4`, `footer`, `footer-bottom`, `copyright` |
| Storefront home | `newsletter` (the Newsletter (home) section of the storefront home page) |
| Utility | `slot-1` to `slot-5`, `offcanvas`, `debug` |
| Error pages | `error-403`, `error-404` |

The `mega-1` and `mega-2` positions render inside mega menu panels, see [Navigation and Mega Menu](navigation.md). The `newsletter` position fills the Newsletter section of the [storefront home](pages-storefront.md).

## The Advanced tab

### Custom CSS

| Setting | Default | What it does |
|---------|---------|--------------|
| CSS added to every page | Empty | Style rules injected on every page of the site. The styles are added in a way that keeps working under a strict Content Security Policy. |

### Custom JavaScript

| Setting | Default | What it does |
|---------|---------|--------------|
| Script in the page head | Empty | JavaScript placed in the page head. |
| Script before the closing body tag | Empty | JavaScript placed at the very end of the page, after the content. |

### Analytics

| Setting | Default | What it does |
|---------|---------|--------------|
| Analytics / GTM ID | Empty | A Google Analytics 4 measurement ID (for example `G-XXXXXXX`) or a Google Tag Manager container ID (for example `GTM-XXXXXXX`). The matching Google snippet is loaded automatically. |

:::warning Only G- and GTM- IDs are accepted
The field takes free text, but only values matching the `G-...` or `GTM-...` formats are used. Anything else is silently ignored, so a typo means no tracking rather than an error message.
:::

### Body classes

| Setting | Default | What it does |
|---------|---------|--------------|
| Extra CSS classes on the body element | Empty | Additional class names appended to the page body, useful as hooks for your custom CSS. |

### Configuration size

The bottom of the Advanced tab shows the current configuration size, for example **Configuration size: 3.2 KB of 48 KB**. The whole Template Studio configuration for a style must stay under 48 KB; the save is blocked with a visible error while it is over the limit. Long custom CSS and scripts are the usual culprits.
