---
id: appearance-settings
title: Appearance Settings
sidebar_label: Appearance
sidebar_position: 11
---

# Appearance Settings

Customize the storefront header copy, layout chrome, and trust badges. The tab is split into four sub-sections: **Header**, **Layout**, **Trust Badges**, and **Theme**.

**Location:** Settings > Appearance

## Header

| Field | Description |
|-------|-------------|
| `shop_header_title` | Title text rendered above the product grid. Leave blank to use the bundled default. Inline `<i>...</i>` is preserved for emphasis. |
| `shop_header_description` | Subtitle paragraph rendered under the title |

## Layout

| Field | Description | Default |
|-------|-------------|---------|
| `sticky_header` | Keep navigation pinned to the top while scrolling | Off |
| `show_breadcrumbs` | Render breadcrumb navigation on storefront pages | Off |

The settings type also exposes `layout_width` (`full` or `boxed`); the current React panel does not surface a control for it and the default `full` value is used.

## Trust Badges

| Field | Description | Default |
|-------|-------------|---------|
| `show_trust_badges` | Master toggle for trust badges on cart and checkout | On |
| `trust_badges` | Ordered list of badges. Each badge has `icon`, `text`, and an optional `color`. |

When `show_trust_badges` is on but no custom list has been saved, the panel falls back to three defaults:

| Icon | Text | Color |
|------|------|-------|
| ShieldCheck | Secure 256-bit SSL encryption | Green |
| Truck | Free shipping on orders over $50 | Blue |
| RefreshCw | 30-day money-back guarantee | Purple |

### Available Icons

`ShieldCheck`, `Shield`, `Lock`, `Truck`, `RefreshCw`, `Award`, `Star`, `Heart`, `ThumbsUp`, `Package`, `Clock`, `CreditCard`, `Gift`, `Headphones`, `Sparkles`, `Zap`.

### Available Colors

`text-green-600`, `text-blue-600`, `text-purple-600`, `text-red-600`, `text-orange-600`, `text-yellow-600`, `text-pink-600`, `text-teal-600`, `text-primary`.

Use the **Add Trust Badge** button to append a new row, the icon and color dropdowns to style it, and the trash button to remove it.

## Theme

The Theme sub-tab is currently a "Coming Soon" placeholder. The settings type exposes `theme_id` and `dark_mode_enabled` for forward compatibility, but the React panel renders the section disabled until the theme picker ships.

## Related Settings

- [General Settings](general-settings.md) for the store logo used elsewhere on the site
