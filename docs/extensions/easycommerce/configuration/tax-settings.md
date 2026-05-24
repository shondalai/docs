---
id: tax-settings
title: Tax Settings
sidebar_label: Tax
sidebar_position: 6
---

# Tax Settings

Configure tax calculation rules, classes, zones, and percentage rates. The tab is split into four sub-sections: **Options**, **Classes**, **Zones**, and **Rates**.

**Location:** Settings > Tax

## Options

| Field | Description | Default |
|-------|-------------|---------|
| `enable_tax` | Master toggle that activates tax calculation everywhere | Off |
| `prices_include_tax` | Treat catalog prices as tax-inclusive | Off |
| `calculate_tax_based_on` | Address used for rate lookup: `shipping`, `billing`, or `shop` | `shipping` |
| `display_prices_in_shop` | Show shop prices `incl` or `excl` tax | `excl` |
| `display_prices_during_cart_checkout` | Show cart and checkout prices `incl` or `excl` tax | `excl` |
| `display_tax_totals` | Render tax totals as a `single` line or `itemized` per rate | `itemized` |
| `price_display_suffix` | Optional text rendered after prices, for example "incl. VAT" | empty |
| `shipping_tax_class` | Tax class assigned to shipping line items | empty (inherits item rate) |
| `rounding` | Round tax at the subtotal level instead of per-line | Off |

### Inclusive vs Exclusive Example

With `prices_include_tax = false`:

```
Product price: $10.00
Tax (10%):     $1.00
Cart total:    $11.00
```

With `prices_include_tax = true`:

```
Product price (inclusive): $11.00
Tax extracted (10%):       $1.00
Net subtotal:              $10.00
```

## Classes

The **Classes** sub-tab lists tax classes managed through the tax service. Each class has a display name and an auto-generated slug. Use classes to group products that share a tax treatment (Standard, Reduced, Zero, Digital, etc.). Assign a class on the product edit screen.

Operations available in the panel:

- Add a class by typing a name and pressing Enter.
- Rename a class inline.
- Delete a class. Deleting a class also removes the tax rates associated with it.

## Zones

The **Zones** sub-tab lists tax zones with an expandable location editor. A zone has a name, an enabled toggle, and a list of locations. Countries are the primary location type; states and postcodes are stored on the underlying model but the inline editor focuses on country selection.

Operations:

- Add zones by name.
- Toggle each zone enabled / disabled.
- Expand a zone to add or remove country locations.
- Delete a zone, which removes the location mappings stored against it.

## Rates

The **Rates** sub-tab lists tax rates with country and class filters and Import / Export buttons. Each rate has the fields below:

| Field | Description |
|-------|-------------|
| Country | ISO country code (required) |
| State | State or province code (optional, blank means "any state") |
| Postcode | ZIP or postcode pattern (optional, supports wildcards like `90*`) |
| Tax Class | Class the rate applies to (required) |
| Rate (%) | Tax percentage with up to four decimal places |
| Name | Display label used on invoices and emails (required) |
| Priority | Order of evaluation when multiple rates apply |
| Compound | Apply on top of previously applied rates instead of the subtotal |
| Apply to shipping | Whether the rate is added to shipping line totals |

## Common Scenarios

### US Sales Tax

- `calculate_tax_based_on`: `shipping`
- `prices_include_tax`: off
- One rate per state (or per state + postcode pattern where local tax differs)

### EU VAT (B2C)

- `calculate_tax_based_on`: `billing`
- `prices_include_tax`: on
- `price_display_suffix`: `incl. VAT`
- One rate per EU member state

### Tax Disabled

- `enable_tax`: off, or define a Zero tax class and assign it to all products.

## Related Settings

- [General Settings](general-settings.md) for the shop base address
- [Invoice Settings](invoice-settings.md) for how tax is rendered on invoices
