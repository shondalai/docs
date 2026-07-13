---
id: style
title: "Style: Presets, Brand and Typography"
sidebar_label: Style
sidebar_position: 2
---

# Style: Presets, Brand and Typography

The Style tab controls how your site looks: the design preset, your logos and store name, the accent color, fonts, the light or dark scheme, and corner rounding.

## Style preset

A preset is a designed combination of colors, fonts and corner rounding made for your template. Pick one from the card grid and the whole site takes on that look. The other Style settings then refine it: leave them on their defaults (Auto accent, Match preset fonts, no corner override) and the preset decides everything.

Each template ships its own presets:

| Template | Presets | Default |
|----------|---------|---------|
| Forge | Editorial, Studio | Editorial |
| Pulse | Vibrant, Atelier | Vibrant |
| Kaffa | Copper, Olive, Oxblood | Copper |
| Meridian | Copper, Forest, Azure, Plum | Copper |
| Basket | Red, Blue, Green, Orange | Red |
| Mercantile | Editorial Coral, Moss, Lilac | Editorial Coral |
| Shondalai | Professional, Red, Blue, Green, Orange | Professional |

See the [template gallery](../templates/gallery.md) for what each template and preset looks like.

## Brand

| Setting | Default | What it does |
|---------|---------|--------------|
| Store name | Empty | Shown as a text logo when no logo image is set, and used in the footer copyright line. Falls back to your Joomla site name. |
| Logo path | Empty | A relative image path such as `images/logo.svg`. Leave empty to use the text logo. |
| Dark surface logo | Empty | A light or white version of your logo, shown on dark surfaces such as dark mode and the footer. |
| Tagline | Empty | A short line about your store. Also used as the fallback headline on the storefront home page hero. |

:::tip Dark surface logo fallback
If you set both logos, the template automatically shows whichever suits the surface. If you set only the main logo, the footer shows it unchanged, which can be hard to read on the dark footer band. Upload a light Dark surface logo to keep it readable.
:::

## Accent color

The accent is the color used for buttons, links and highlights.

| Choice | What it does |
|--------|--------------|
| Auto | Uses the accent defined by the active preset. This is the default. |
| Preset swatches | A row of colors suggested by the active preset. Click one to use it. |
| Custom picker | The last swatch opens a color picker for any color you like. |

A custom accent applies in both the light and dark schemes. Text placed on the accent switches between black and white automatically so buttons stay readable whatever color you pick.

## Typography

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Font pairing | Match preset, Newsreader + Inter, Space Grotesk, Plus Jakarta Sans, Cormorant Garamond, Archivo | Match preset | Sets the heading and body fonts for the whole site. Match preset keeps the fonts chosen by the active preset. |

The pairings combine a display font for headings with a body font:

| Option | Headings | Body text |
|--------|----------|-----------|
| Newsreader + Inter | Newsreader (serif) | Inter |
| Space Grotesk | Space Grotesk | Inter |
| Plus Jakarta Sans | Plus Jakarta Sans | Plus Jakarta Sans |
| Cormorant Garamond | Cormorant Garamond (serif) | Inter |
| Archivo | Archivo | Archivo |

:::note No external font downloads
The templates do not load fonts from external font services. Each pairing includes safe fallbacks, so if a named font is not available the site uses a close system font instead. Pages stay fast and no visitor data leaves your site.
:::

## Color scheme

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Color scheme | Light, Dark, Auto | Auto | Light and Dark force one scheme for everyone. Auto follows each visitor's device setting, so a visitor whose device is set to dark mode sees the dark scheme. |

:::note The choice is yours, not the visitor's
There is no scheme toggle on the site itself. The setting you pick here decides what visitors see, with Auto delegating to each device's own preference.
:::

## Corners

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Override the preset corner radius | On or off | Off | Off keeps the corner rounding designed into the active preset. On reveals a slider. |
| Corner radius | 0 to 32 px | The preset's radius | How rounded buttons, images and cards are across the site. 0 gives square corners, higher values give softer shapes. |
