---
id: shipping-settings
title: Shipping Settings
sidebar_label: Shipping
sidebar_position: 5
---

# Shipping Settings

Configure shipping availability, destination zones, and installed provider plugins. The tab is split into three sub-sections: **Options**, **Zones**, and **Methods**.

**Location:** Settings > Shipping

## Options

| Field | Description | Default |
|-------|-------------|---------|
| `enable_shipping` | Master toggle for shipping. Storefront and checkout skip shipping logic when off. | On |
| `enable_shipping_calculator` | Show a destination-based cost calculator on the cart page | Off |
| `hide_shipping_costs_until_address` | Suppress rate display until the shopper provides an address | Off |
| `shipping_debug_mode` | Verbose logging in carrier requests, useful when troubleshooting live rates | Off |

### Shipping Destination

Radio buttons under `shipping_destination` control which address the rate engine uses:

| Value | Behavior |
|-------|----------|
| `shipping` | Use the shopper's shipping address (default) |
| `billing` | Use the billing address for the rate query |
| `billing_only` | Disable the shipping address fields entirely |

## Zones

The **Zones** sub-tab launches the Shipping Zones Manager. A zone is a geographic region with its own assigned rate rules. Each zone has:

- A name.
- An enabled toggle.
- An ordering value (lower numbers win when multiple zones match an address).
- Locations: any combination of countries, states, postcodes, or continents.
- Method assignments: each zone can list one or more configured methods (flat rate, free shipping, carrier, etc.) with per-zone settings and ordering.

Postcode locations support wildcards (for example `902*` matches any postcode starting with `902`).

The Zones Manager is automatically gated on `enable_shipping`; toggling shipping off disables the zone editor.

## Methods

The **Methods** sub-tab lists every installed shipping plugin. Each row shows the plugin icon, title, description, enabled badge, a **Configure** button, and a toggle switch.

Behavior:

- The **Configure** button is disabled until the method is enabled. Hovering shows the tooltip "Enable this method before configuring it."
- Toggling a method is asynchronous; the row shows an "Updating..." badge while the toggle round-trips.
- If no shipping plugins are installed, the panel shows an empty state.

A help card lists the method categories the system understands:

- **Flat Rate** for fixed prices
- **Free Shipping** for conditional free delivery
- **Local Pickup** for in-store pickup
- **Real-time rates** for UPS, FedEx, USPS, DHL Express, etc.

### Built-in Shipping Plugins

| Plugin | Notes |
|--------|-------|
| Manual Shipping | Flat-rate, free shipping, local pickup, and table-rate style configuration |
| UPS | Live carrier rates via the UPS API |
| FedEx | Live carrier rates via the FedEx API |
| DHL Express (MyDHL API) | Live international rates covering US and Europe. Replaces the previous DHL Parcel Benelux integration. |

See [Shipping Plugins](../shipping-plugins/index.md) for per-plugin setup.

### Rate Caching

Shipping plugins are responsible for their own caching strategy. Cart edits and address changes invalidate any cached rate the plugin returned for the previous state.

## Troubleshooting

- **No shipping methods available:** confirm a zone covers the destination, that at least one method is enabled inside that zone, and that products have weight set when carriers require it.
- **Carrier rates missing:** verify API credentials, switch on `shipping_debug_mode`, and review the EasyCommerce log for the carrier response.

## Related Settings

- [General Settings](general-settings.md) for the store origin address
- [Product Settings](product-settings.md) for the weight and dimension units carriers consume
- [Shipping Plugins](../shipping-plugins/index.md)
