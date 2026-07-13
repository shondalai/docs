---
id: pages-storefront
title: "Storefront Home and Page Surfaces"
sidebar_label: Storefront Pages
sidebar_position: 5
---

# Storefront Home and Page Surfaces

The Pages tab of Template Studio turns your site's front page into a designed store landing page and controls how the shop itself behaves: the cart, product cards and the app-like storefront. Find it under **System → Site Template Styles**, in your Studio template style.

## The storefront home

Every Studio template ships a designed store landing page: a hero, a trust bar, featured products, category tiles, an editorial story block and a newsletter band. When the storefront home is enabled and EasyCommerce is installed, the template renders this landing page as your site's home page. You do not build it from modules or articles; you switch its sections on and off and fill in the copy right on this tab.

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Use the storefront as the site home page | On, Off | Off | Renders the storefront sections on your site's front page. Leave it off if your home menu item is already the EasyCommerce shop. |

### Sections

Each section has its own toggle, and the arrow buttons reorder them. All six are on by default, in this order:

| Section | What it shows |
|---------|---------------|
| Hero | The big opening band with a headline, subtitle and button. Its content is edited in **Hero content** below. |
| Trust bar | A compact row of store promises. It uses the trust badges configured in **EasyCommerce → Settings → Appearance**. |
| Featured products | A grid of products flagged as featured in your store. |
| Category tiles | Tiles linking to your top shop categories. |
| Story / editorial | A prose block for your brand story, edited in **Story / editorial content** below. |
| Newsletter | Renders modules assigned to the **Newsletter (home)** position. Publish your mailing-list signup module there. |

### Hero content

These fields appear while the Hero section is on. Every field is optional; sensible fallbacks fill the gaps.

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Eyebrow | Text | Empty | Small label above the headline. Empty uses the store name. |
| Headline | Text | Empty | The main hero title. Empty uses your brand tagline or the EasyCommerce shop header. |
| Subtitle | Text | Empty | Supporting line under the headline. |
| Button label | Text | Empty | The hero button text. Empty shows the template's default label, such as Shop now. |
| Button link | Address | Empty | Where the button points. Use a URL, or leave empty to scroll down to the featured products. |
| Background image | Relative path | Empty | For example `images/hero.jpg`. Empty uses a plain background. |
| Alignment | Centered, Left | Centered | How the hero copy is aligned. |

### Story / editorial content

These fields appear while the Story section is on.

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Heading | Text | Empty | The story block title. |
| Body | HTML text | Empty | The story copy. Basic HTML is allowed. Leaving both fields empty hides the section. |

## Storefront

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| App-like storefront (no page reloads) | On, Off | On | Lets EasyCommerce render the shop, category, product, cart and checkout pages as a single app, so browsing and checking out never reload the page. Turn it off to have the template render those pages with its own themed markup instead. |

In short: with the switch on, EasyCommerce owns the presentation of the shop pages and gives visitors the fastest browsing experience. With it off, the template owns those pages and renders them as classic, individually loaded pages in the template's own style.

## Cart behavior

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Cart behavior | Slide-over drawer, Full page | Slide-over drawer | Whether the cart icon in the header opens a slide-over cart panel or links to the full cart page. |

## Product presentation

Three switches shape how product cards look across the store. All are on by default.

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Discount and status badges | On, Off | On | Shows sale and status badges on product cards. |
| Live stock indicator | On, Off | On | Shows current stock information on products. |
| Quick add to cart | On, Off | On | Adds a one-click add-to-cart control to product cards. |

:::note These settings need EasyCommerce
The storefront home, cart behavior and product presentation all act on your EasyCommerce store. Without EasyCommerce installed, the storefront home does not take over the front page and these switches have nothing to control.
:::
