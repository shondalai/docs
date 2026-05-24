---
id: product-settings
title: Product Settings
sidebar_label: Products
sidebar_position: 3
---

# Product Settings

Configure catalog display, inventory rules, customer reviews, and default measurement units. The tab is split into four sub-sections: **General**, **Inventory**, **Reviews**, and **Measurements**.

**Location:** Settings > Products

## Display

| Field | Description | Default |
|-------|-------------|---------|
| `products_per_page` | Items shown per catalog page (1 to 100) | 12 |
| `shop_grid_columns` | Products per row on desktop (1 to 6) | 3 |
| `default_product_sorting` | Initial sort order | `menu_order` |
| `enable_ajax_cart` | Add to cart without a full page reload | On |
| `redirect_to_cart_after_add` | Redirect to the cart page after adding an item | Off |
| `product_type_badges_enabled` | Multi-select of product types that render a card badge: `variable`, `grouped`, `subscription`, `bundle` | All four |

Sorting options: `menu_order`, `popularity`, `rating`, `date`, `price` (low to high), `price-desc` (high to low).

The settings type also exposes `enable_cart_fragments`, `shop_page_id`, `cart_page_id`, `checkout_page_id`, and `my_account_page_id`. These are not surfaced in the React tab today; menu wiring happens through Joomla menu items, see [Menu Setup](../getting-started/menu-setup.md).

## Inventory

| Field | Description | Default |
|-------|-------------|---------|
| `manage_stock` | Master toggle for stock management | Off |
| `show_stock_status` | Show availability text on shop pages | Off |
| `low_stock_threshold` | Stock level that triggers a low-stock label and admin alerts | 2 |
| `out_of_stock_threshold` | Stock level at which a product is marked unavailable | 0 |
| `hold_stock_minutes` | Reserve stock for unpaid orders for this many minutes (0 disables holds) | 60 |
| `hide_out_of_stock_items` | Remove out-of-stock products from the catalog listing | Off |
| `stock_display_format` | When to show the exact quantity: `always`, `low_stock`, or `never` | `always` |

The inventory fields beyond the two top toggles only render once `manage_stock` is enabled.

## Reviews

| Field | Description | Default |
|-------|-------------|---------|
| `enable_reviews` | Master toggle for product reviews | Off |
| `reviews_require_approval` | Reviews stay hidden until an admin approves them | Off |
| `reviews_require_verified_purchase` | Only customers who placed an order can leave a review | Off |
| `enable_star_ratings` | Show a 1 to 5 star input alongside the review text | Off |
| `star_ratings_required` | A star rating is mandatory when star ratings are enabled | Off |
| `show_verified_badge` | Display a "Verified Buyer" badge on qualifying reviews | Off |

All review fields after the master toggle render only when `enable_reviews` is on. `star_ratings_required` is gated further by `enable_star_ratings`.

## Measurements

| Field | Description | Default |
|-------|-------------|---------|
| `weight_unit` | `kg`, `g`, `lbs`, or `oz` | `kg` |
| `dimension_unit` | `cm`, `m`, `mm`, `in`, or `yd` | `cm` |

Carriers and live-rate shipping plugins use these units when querying rate APIs, so match them to whatever the carrier account expects.

## Related Settings

- [Shipping Settings](shipping-settings.md)
- [SEO Settings](seo-settings.md)
