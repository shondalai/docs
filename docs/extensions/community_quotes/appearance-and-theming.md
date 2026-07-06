---
id: appearance-and-theming
title: Appearance and theming
sidebar_label: Appearance and theming
sidebar_position: 14
---

# Appearance and theming

Community Quotes is designed to look at home inside any Joomla template, with a small set of controls that let you match your brand without touching a stylesheet. Everything on this page is set on the **Display and branding** tab of **Components -> Community Quotes -> Settings**. See the [Settings reference](./settings-reference.md) for the same options in table form.

The quote display is scoped under its own root element, so its styling and your template's CSS stay out of each other's way. You pick an aesthetic, a light or dark preference, an accent colour, a density, and a font pairing, and the display composes those into a coherent look.

## Aesthetic presets

The **Aesthetic** setting is the biggest lever. It swaps the whole palette, corner rounding, and shadow feel of the display. There are four presets:

- **Editorial** (the default): warm paper background, generous rounding, and a refined serif for the quotes. The classic "words worth keeping" look.
- **Swiss**: crisp white, square corners, and a single grotesque typeface throughout. Clean and structured.
- **Soft**: a soft cream background with larger rounding and gentle shadows. Friendly and calm.
- **Bold**: a dark, high-contrast style with a warm accent. Bold is already dark, so the dark mode setting does not change it.

Pick the one that sits best with your template and brand. You can preview the effect on any front-end quote page after saving.

## Light, dark, or automatic

The **Dark mode** setting has three options:

- **Auto (visitor preference)** (the default): the display follows the reader's device, switching between light and dark with the rest of their system.
- **Always light**: force the light palette.
- **Always dark**: force the dark palette.

Auto is the right choice for most sites. A reader who browses in dark mode sees a dark display without any work from you. The one exception is the **Bold** aesthetic, which is dark by design and looks the same whichever dark mode option you choose.

## Brand accent

The **Brand accent** sets the colour used for links, buttons, active controls, and other highlights. Choose one of the preset swatches or type any hex value in the `#rrggbb` field.

The accent is blended into soft and ink variants automatically, so it stays balanced in both light and dark palettes. Set it close to your site's brand colour and the quote display will feel native. If you type a value that is not a valid six-digit hex code, the display keeps the aesthetic's built-in accent.

## Density

The **Density** setting controls how much breathing room cards and lists get:

- **Compact**: tighter padding and shorter rows, so more fits on screen.
- **Comfortable** (the default): balanced spacing that suits most sites.
- **Spacious**: extra padding for a relaxed, gallery-like feel.

Density changes only spacing, not colours or fonts, so it is safe to try each one and keep whichever reads best on your pages.

## Fonts

The **Font pairing** setting chooses the type styles:

- **Spectral + Inter Tight** (the default): a serif for the quotes paired with a clean sans for the interface.
- **Inter Tight only**: one sans typeface throughout, for a more uniform, modern feel.
- **All serif**: serif for both the quotes and the interface, for a literary look.

Community Quotes declares these fonts but does not bundle them, in keeping with the Shondalai approach of shipping no web fonts. If a visitor's device has the named font, it is used; otherwise the display falls back to a close system font. That keeps pages fast and avoids loading external font files. If you want the exact typefaces everywhere, add them through your Joomla template.

## Per-quote appearance

A few of the interactive elements on a quote card can be shown or hidden independently on the **Display and branding** tab under **Frontend features**: attribution badges, audio playback, share cards, translation chips, collections, and gamification. These are covered in the [Settings reference](./settings-reference.md). Turning them off keeps the display lean; turn them on as your site grows into them.

## The admin appearance

The controls above style the **front end** that your visitors see. The admin uses its own presentation. It always renders in the Swiss aesthetic, and its light or dark mode follows a separate toggle inside the admin rather than the site-facing Dark mode setting. So changing the site aesthetic or dark mode will not change how the admin looks, and vice versa.

The admin is a full-height single-page application that fills the Joomla work area under the toolbar. If you ever see it render short or with an empty toolbar, that is usually a stale asset or a template quirk rather than a setting; see [Troubleshooting](./troubleshooting.md).

## Making it match your template

Because the quote display renders inside your page, it inherits your page width where it can, and the accent, aesthetic, and theme settings handle the rest. There is no separate stylesheet to maintain. If a change does not seem to show up on the front end, do a hard refresh to clear the cached assets.
