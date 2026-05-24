---
id: products
title: Managing Products
sidebar_label: Products
sidebar_position: 3
---

# Managing Products

Manage the product catalog: simple products, variations, digital downloads, subscriptions, grouped sets, and bundles.

## Product List

The list opens in table view by default. Use the view toggle in the header to switch to grid view.

### Toolbar

| Control | Purpose |
|---------|---------|
| Search | Debounced search across name, SKU, description |
| Page size | 10, 20, 50, or 100 rows per page |
| Sort | Newest, Oldest, Name A-Z, Name Z-A, Price low/high |
| Filters | Toggles the Advanced Filters panel |
| Export | Download the filtered set as JSON |
| Import | Upload a JSON export to create or update products |
| Add Product | Open the editor for a new product |

### Advanced Filters

| Filter | Options |
|--------|---------|
| Product Type | Simple, Variable, Digital, Subscription, Grouped, Bundle |
| Status | All, Published, Unpublished / Draft |
| Stock Status | All, In Stock, Out of Stock, Low Stock |
| Featured | All Products, Featured Only, Not Featured |
| Price Range | Min and max numeric inputs |

### Bulk Actions

Selecting one or more products reveals a bottom action bar with **Delete**. Status changes and duplication are performed from the per-row actions, not as bulk operations.

## Creating a Product

Click **Add Product**. The editor uses a tab-based layout. You do not need to choose a subscription lifecycle on the create screen: the server defaults `subscription_lifecycle` to `open` when not provided.

### Tabs

| Tab | Contents |
|-----|----------|
| General | Name, slug, short description, full description, type, category, status |
| Pricing | Regular price, sale price, sale schedule, tax class |
| Inventory | SKU, stock management toggle, quantity, backorder policy, low-stock threshold |
| Shipping | Weight, dimensions, shipping class |
| Attributes | Reusable attributes for use as variation axes or display facets |
| Variations | Per-variation pricing, stock, SKU, weight, and image (Variable only) |
| Media | Featured image and gallery |
| Linked | Up-sells, cross-sells, related products |
| SEO | Meta title, meta description, focus keyword |
| Layout | Frontend layout customizer overrides |
| Advanced | Menu order, purchase note, custom fields |

Plugin-contributed tabs can appear after the core tabs (for example, Downloads adds a Files tab on Digital products).

## Product Types

| Type | Description |
|------|-------------|
| Simple | Single SKU, no variations |
| Variable | One product, many priced variations driven by attributes |
| Digital | Downloadable, no shipping |
| Subscription | Recurring billing schedule |
| Grouped | A parent that lists child products customers buy separately |
| Bundle | Fixed set of products sold together at a bundle price |

## Variations

For variable products:

1. Add attributes on the **Attributes** tab and mark them "used for variations".
2. Open the **Variations** tab and generate variations from the attribute combinations.
3. Set price, sale price, SKU, stock, weight, and image per variation.

## Inventory and Stock Status

When stock management is enabled, EasyCommerce derives stock status from the quantity and low-stock threshold. The Products list reflects this status in its Stock Status filter and column.

## Import and Export

- **Export** downloads the current filter view as a JSON file.
- **Import** accepts a JSON file in the same shape. Existing products are matched by ID or SKU and updated; missing entries are created. The toast reports created, updated, and failed counts.

## License Management

If the [Downloads plugin](../downloads-plugin/index.md) is installed, the product editor exposes a License screen for digital products. See the plugin documentation for details.

## Related

- [Product Settings](../configuration/product-settings.md)
- [Tax Settings](../configuration/tax-settings.md)
- [Shipping Settings](../configuration/shipping-settings.md)
