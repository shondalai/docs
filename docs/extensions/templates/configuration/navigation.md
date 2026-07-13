---
id: navigation
title: "Navigation and Mega Menu"
sidebar_label: Navigation
sidebar_position: 4
---

# Navigation and Mega Menu

The Navigation tab of Template Studio attaches rich mega menu panels to your header menu items and adds small icons to menu links. It lives on the template style edit screen under **System → Site Template Styles**.

## Which menu the header shows

The header navigation is a normal Joomla menu module. The template renders whatever menu modules are published to the `header-nav` or `menu` positions, so you change the menu the same way as on any Joomla site:

1. Go to **Content → Site Modules**.
2. Open your menu module (or click **New** and choose **Site Menu**).
3. Under **Select Menu**, pick the menu you want in the header.
4. Set **Position** to `header-nav`.
5. In the **Menu Assignment** tab, choose **On all pages**, then **Save**.

:::warning Minimal header style hides navigation
If the header style is set to **Minimal** on the Layout tab, the template renders no navigation at all. Mega menus and menu item icons are skipped as well. Switch to **Split** or **Centered** to use the features on this tab.
:::

## Mega menus

A mega menu turns a plain dropdown into a full panel with several columns of links, categories, products or promotional content. Each panel is attached to one menu item, and a menu item can have at most one panel.

### Behavior

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Behavior | Open on hover, Open on click | Open on hover | How panels open on desktop. On mobile the panel always expands inline inside the menu drawer, whichever option you choose. |

### Add a mega menu to a menu item

1. Open **System → Site Template Styles** and edit your Studio template style.
2. Go to the **Navigation** tab.
3. Click **+ Mega menu** and choose a menu item from the list. The list shows the published items of your site menus, indented by level.
4. Click **+ Add column** and pick a column type (see below). Repeat for each column you want.
5. Fill in the fields for each column and set its width with the **1 / 2 / 3** span control.
6. Save the template style with the toolbar **Save** button.

If the **+ Mega menu** button is greyed out, every menu item already has a panel.

### Panel settings

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Enabled | On, Off | On | Turns the panel on or off without deleting it. |
| Panel width | Full width, Container | Full width | Whether the panel spans the whole viewport or stays inside the page container. |

Columns can be reordered with the up and down arrows and removed with the cross button. Each column has a span of 1, 2 or 3 units that controls its relative width inside the panel.

### Column types

| Type | What it shows |
|------|---------------|
| Links | Menu children or a custom list of links |
| Categories | Shop categories with images |
| Products | Featured product picks |
| Banner | An image promo with a caption |
| HTML | Free-form content |
| Module | Modules published to a template position |

#### Links column

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Title | Text | Empty | Optional column heading. Empty hides it. |
| Source | Menu children, Custom links | Menu children | **Menu children** lists the sub-items of the attached menu item. **Custom links** lets you type your own list. |

With **Custom links** selected, click **+ Add link** to add rows. Each row has a **Label**, a link address (for example `/shop`) and an optional **Badge**, a short highlight tag shown next to the link (for example "New" or "Sale").

#### Categories column

Shows shop categories from EasyCommerce. The category list appears once EasyCommerce is installed and enabled.

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Title | Text | Empty | Optional column heading. |
| Parent category | All categories, or a store category | All categories | Which branch of the shop category tree to list. |
| Categories to show | 1 to 12 | 6 | How many categories appear. |
| Show category images | On, Off | On | Displays each category's image. |
| Show product counts | On, Off | On | Displays the number of products in each category. |

#### Products column

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Title | Text | Empty | Optional column heading. |
| Parent category | All categories, or a store category | All categories | Where the products come from. |
| Products to show | 1 to 8 | 3 | How many products appear. |

#### Banner column

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Eyebrow | Text | Empty | Small label above the banner title. |
| Title | Text | Empty | The banner headline. |
| Image | Relative path | Empty | The banner picture, for example `images/banner.jpg`. |
| Link | Address | Empty | Where the banner points. Empty renders it unlinked. |

#### HTML column

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Title | Text | Empty | Optional column heading. |
| Content | HTML text | Empty | Free-form content. Basic HTML is allowed. |

#### Module column

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Module position | Position key | `mega-1` | The template position to render inside the column. The templates declare `mega-1` and `mega-2` for this purpose. |

Publish any module to that position under **Content → Site Modules** and it appears inside the panel. See [Modules and Advanced Settings](advanced-modules.md) for the full position list.

:::tip Store columns need EasyCommerce
The Categories and Products columns pull live data from your EasyCommerce store. Without EasyCommerce they have nothing to show, so use Links, Banner, HTML or Module columns on a non-shop site.
:::

## Menu item icons

You can prepend a small icon to any navigation link. Each menu item can carry one icon.

1. On the **Navigation** tab, scroll to **Menu item icons**.
2. Click **+ Icon** and choose a menu item.
3. Pick an icon from the curated set, or choose **Custom...** to type an emoji or short text.
4. Save the template style.

The curated set contains twenty icons: Flame, Sparkles, Tag, Percent, Gift, Star, Heart, Zap, Truck, Package, Shield, Coffee, Shirt, Home, Cpu, Headphones, Dumbbell, Book, Leaf and Crown. The default pick is Star.

:::note Custom icons are short text
A custom icon is rendered as plain text, so an emoji works best. It is limited to 24 characters; anything longer is not shown on the site.
:::
