---
id: footer
title: "Footer Builder"
sidebar_label: Footer
sidebar_position: 6
---

# Footer Builder

The Footer tab of Template Studio builds the site footer: a brand blurb, columns of links, legal links and payment method badges. Find it under **System → Site Template Styles**, in your Studio template style.

## Brand

| Setting | Options | Default | What it does |
|---------|---------|---------|--------------|
| Blurb | Text | Empty | A short plain-text line under the footer logo. Empty hides it. |

The footer brand block itself comes from the Style tab. The footer sits on a dark band, so it prefers the **Dark surface logo** when one is set; otherwise it falls back to the main logo, and with no logo at all it shows the store name as text. If your main logo is dark and hard to read in the footer, set a light **Dark surface logo** on the [Style tab](style.md).

## Link columns

Link columns render next to the brand block. Each column has a heading and its own list of links.

1. Click **+ Add column**.
2. Type the column title, for example "Shop" or "Support".
3. Click **+ Add link** and fill in the **Label** and the link address, for example `/privacy` or a full URL.
4. Repeat for every link, then save the template style.

Columns can be reordered with the up and down arrows and removed with the cross button.

:::note Empty entries are skipped
A link with an empty label is not rendered, and a column with no rendered links is skipped entirely. Nothing half-finished leaks onto the site.
:::

## Legal links

Legal links are the small links in the footer bottom bar, next to the copyright line. They use the same **Label** and address rows as link columns. Typical entries are Privacy Policy, Terms of Service and Imprint.

## Copyright

The copyright line is automatic: the current year followed by your store name (the **Store name** from the Style tab, or your Joomla site name if that is empty). There is nothing to configure here.

## Payment methods

Payment badges appear in the footer bottom bar. Click a chip to toggle it; the badges render in the order you enable them, and each badge shows only once.

The supported methods are Visa, Mastercard, Amex, Discover, PayPal, Stripe, Apple Pay, Google Pay, Klarna and UPI.

Only these ten are recognised. Anything else stored in the configuration is skipped, so the footer never shows an unstyled badge. The badges render as small text labels styled to match each template, and some templates replace common methods with brand icons.

## Social links

The footer also shows your social profile icons. They come from the social link fields on the Layout tab's top bar section (Facebook, Instagram, X, YouTube and LinkedIn). Any profile field with a full web address starting with `http://` or `https://` gets an icon in the footer, whether or not the top bar itself is enabled.

## Footer module positions

Besides the built-in blocks, the footer band renders modules published to the template positions `footer-1` to `footer-4` (one extra column each) and the full-width `footer` position. Publish modules there under **Content → Site Modules**. See [Modules and Advanced Settings](advanced-modules.md) for the full position list.
