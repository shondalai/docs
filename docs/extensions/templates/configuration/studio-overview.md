---
id: studio-overview
title: "The Template Studio App"
sidebar_label: Studio Overview
sidebar_position: 1
---

# The Template Studio App

Every Shondalai template is configured through the Template Studio app, a visual panel built into the template style edit screen. It replaces the usual long list of raw template parameters with organised tabs, plain-language controls and a live preview.

## Opening the app

1. Log in to the Joomla administrator.
2. Go to **System → Site Template Styles**.
3. Click the style of your Shondalai template (for example *forge - Default*).
4. The Studio panel opens as a tab on the style edit screen.

:::note If you see a warning instead of the app
The Studio app needs the Template Studio framework library that ships inside the template package. If you see a warning and a plain text box instead of the tabs, reinstall the template package from **System → Install → Extensions** to restore the library.
:::

## The tabs

| Tab | What you configure | Guide |
|-----|--------------------|-------|
| Style | Preset, brand logos, accent color, fonts, light and dark scheme, corner rounding | [Style](style.md) |
| Layout | Site width, header style and icons, the top bar | [Layout](layout.md) |
| Navigation | Mega menu panels and menu item icons | [Navigation and Mega Menu](navigation.md) |
| Modules | The module position grid for every page | [Modules and Advanced Settings](advanced-modules.md) |
| Pages | The storefront home page, hero content and shop behaviour | [Storefront Home and Page Surfaces](pages-storefront.md) |
| Footer | Footer blurb, link columns, legal links and payment method icons | [Footer Builder](footer.md) |
| Advanced | Custom CSS, custom scripts, analytics ID, extra body classes | [Modules and Advanced Settings](advanced-modules.md) |
| License | Activate your license and enable automatic updates | [License Activation](../licensing/activation.md) |

## How saving works

The Studio app saves as part of the template style itself. Make your changes in the tabs, then click **Save** or **Save & Close** in the Joomla toolbar at the top of the screen. Nothing changes on your live site until you save.

:::note Configuration size limit
The whole configuration must fit within 48 KB. If it grows past that limit the save is blocked and an error banner appears. The current size is shown at the bottom of the **Advanced** tab. In practice you only approach the limit with very large amounts of custom CSS or scripts, so trim those first.
:::

## Live preview

The **Live preview** button opens a full-screen preview: your settings on the left, your site on the right. Use the viewport buttons to switch between Desktop, Tablet (768 px) and Mobile (390 px) widths.

Two kinds of change behave differently in the preview:

- Color scheme, accent color, corner radius and font pairing apply instantly, without reloading the page.
- Every other change (layout, navigation, footer, content) reloads the preview after a brief pause.

The preview is a private draft. Visitors never see it, closing the preview discards it, and nothing is published until you click **Save** on the style.

:::note Browsing inside the preview
You can click through your site inside the preview and your draft follows along: normal links carry the draft, so the shop, product pages and the cart all show your unsaved changes. Navigation that is not a plain link, such as a form submission or a link opened in a new tab, shows the published settings until your next change refreshes the preview. The live preview also requires the **System - Template Studio** plugin to be enabled; if the preview fails to load with an error, check **System → Plugins**.
:::

## One configuration per style

Each template style keeps its own Studio configuration. You can create several styles of the same template, each with a different setup:

1. Go to **System → Site Template Styles**.
2. Tick the box next to your template's style and click **Duplicate**.
3. Open the copy and configure it in the Studio app.

## Assigning a style to specific pages

Styles are assigned to menu items the standard Joomla way, so different sections of your site can use different setups:

1. Open the duplicated style in **System → Site Template Styles**.
2. Switch to the **Menus Assignment** tab (it appears on styles that are not the site default).
3. Tick the menu items that should use this style and save.

The default style covers every page that has no specific assignment.
