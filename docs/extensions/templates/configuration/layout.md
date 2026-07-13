---
id: layout
title: "Layout: Width, Header and Top Bar"
sidebar_label: Layout
sidebar_position: 3
---

# Layout: Width, Header and Top Bar

The Layout tab controls the overall shape of your site: how wide it is, what the header looks like, the announcement top bar, and how dense product grids are.

## Layout width

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Layout width | Boxed, Full width | Boxed | Boxed keeps the site inside a fixed content width with breathing room at the sides. Full width lets it stretch across the whole browser window. |
| Boxed width | 1120 to 1600 px, in steps of 20 | 1280 px | The content width used in Boxed mode. Shown only when Boxed is selected. |

The width applies to the whole site: the top bar, header, page content and footer all align to it.

## Header

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Header style | Split, Centered, Minimal | Split | The arrangement of logo, menu and action icons. See below. |
| Sticky header on scroll | On or off | On | Keeps the header pinned to the top of the window while visitors scroll. |
| Show search icon | On or off | On | Adds a search icon linking to the site search page. |
| Show account icon | On or off | On | Adds an account icon. It links to the shop account area when EasyCommerce is installed, otherwise to the Joomla login page. |

The three header styles:

- **Split**: logo on the left with the menu and action icons laid out across the bar. The classic shop header.
- **Centered**: the logo takes centre stage, with the menu arranged around or below it depending on the template.
- **Minimal**: only the logo and action icons. No menu is rendered at all.

:::warning Minimal removes all navigation
The Minimal style removes the entire menu area, including any mega menus and menu item icons you configured on the Navigation tab. Use it for stripped-back designs where visitors navigate another way.
:::

:::note Icons that appear on their own
A cart button appears automatically whenever EasyCommerce is installed; whether it opens a slide-over drawer or the cart page is set on the Pages tab. On small screens a menu button also appears automatically whenever there is a menu to show.
:::

## Top bar

The top bar is a slim band above the header, useful for announcements and quick links.

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Show the top bar | On or off | Off | Master toggle for the band. The remaining settings appear when it is on. |
| Announcement text | Free text | Empty | A short message, for example "Free shipping on orders over $50". |
| Show social icons | On or off | Off | Reveals one link field per network. |
| Facebook, Instagram, X, YouTube, LinkedIn | Web address per network | Empty | Icon links to your profiles. They open in a new tab. |
| Show language switcher | On or off | Off | Shows links to switch between your site's content languages. |

:::note Social links need full web addresses
Only complete addresses beginning with `http://` or `https://` are shown; anything else is quietly ignored. The same links also appear in the footer's brand column.
:::

:::note When the language switcher appears
The switcher only renders on multilingual sites: Joomla's language filter must be active and at least two content languages published. On a single-language site the toggle has no visible effect.
:::

The top bar also displays any modules you assign to the `topbar` position on the Modules tab. If the announcement, modules, language switcher and social links are all empty, the band is hidden entirely even while the toggle is on.

## Product grid density

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Product grid density | 2 columns, 3 columns, 4 columns | 3 columns | How many products sit side by side in shop product grids on large screens. Grids adapt automatically on smaller screens. |
