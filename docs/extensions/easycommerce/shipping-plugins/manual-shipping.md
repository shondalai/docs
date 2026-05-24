---
id: manual-shipping
title: Manual Shipping
sidebar_label: Manual Shipping
sidebar_position: 2
---

# Manual Shipping

Built-in shipping methods provided by `plg_easycommerce_manualshipping`. No carrier API integration. Use this plugin for flat rates, free shipping thresholds, local pickup, and a fixed-cost express tier.

The plugin registers carrier code `manualshipping` and is available on every shipping zone (`isAvailableForZone()` returns true unconditionally).

## Available Methods

| Method | Service Code | Best For |
|--------|--------------|----------|
| Flat Rate | `FLAT_RATE` | Simple fixed-cost shipping |
| Free Shipping | `FREE_SHIPPING` | Promotional or threshold-based free shipping |
| Local Pickup | `LOCAL_PICKUP` | In-store pickup |
| Express | `EXPRESS` | A second flat-rate tier with faster delivery copy |

At least one method must be enabled or `validateConfiguration()` returns an error.

## Configuration

The Manual Shipping plugin uses EasyCommerce's `ConfigurablePluginInterface`, so configuration is edited from **EasyCommerce, Settings, Shipping, Configure**, not from the standard Joomla plugin parameters page.

:::note Configure button
The **Configure** button is disabled until the plugin is enabled in **System, Manage, Plugins**. Enable it first, then reload the Shipping settings tab.
:::

### Flat Rate

| Setting | Description | Default |
|---------|-------------|---------|
| `enable_flat_rate` | Enable the flat-rate option | true |
| `flat_rate_label` | Display name at checkout | "Flat Rate Shipping" |
| `flat_rate_cost` | Fixed shipping cost | 5.00 |
| `flat_rate_delivery` | Delivery estimate copy | "3-5 business days" |

### Free Shipping

| Setting | Description | Default |
|---------|-------------|---------|
| `enable_free_shipping` | Enable the free shipping option | false |
| `free_shipping_label` | Display name at checkout | "Free Shipping" |
| `free_shipping_min_amount` | Cart subtotal threshold; 0 means no minimum | 50.00 |
| `free_shipping_delivery` | Delivery estimate copy | "5-7 business days" |

Free shipping only renders when `cart.totals.subtotal >= free_shipping_min_amount`.

### Local Pickup

| Setting | Description | Default |
|---------|-------------|---------|
| `enable_local_pickup` | Enable in-store pickup | false |
| `local_pickup_label` | Display name at checkout | "Local Pickup" |
| `local_pickup_info` | Pickup instructions, shown as delivery copy | "Pick up at our store location" |

Local pickup is always free (`cost = 0`).

### Express Shipping

| Setting | Description | Default |
|---------|-------------|---------|
| `enable_express` | Enable the express tier | false |
| `express_label` | Display name at checkout | "Express Shipping" |
| `express_cost` | Fixed shipping cost | 15.00 |
| `express_delivery` | Delivery estimate copy | "1-2 business days" |

### Advanced

| Setting | Description | Default |
|---------|-------------|---------|
| `enable_logging` | Write info-level events to the plugin logger | false |
| `debug_mode` | Plugin parameter; verbose rate-calculation logging | 0 |

## Example: Tiered Setup

A common configuration for a US store:

```
Flat Rate Shipping ........ $7.99 ........ 3-5 business days
Express Shipping .......... $14.99 ....... 1-2 business days
Free Shipping (over $50) .. $0.00 ........ 5-7 business days
Local Pickup .............. $0.00 ........ Ready for pickup
```

All four can be enabled at once; customers pick at checkout.

## Tracking and Shipments

Manual Shipping does not integrate with any carrier:

- `createShipment()` returns a synthetic tracking number formatted `MANUAL-{orderId}-{timestamp}`.
- `getTrackingInfo()` returns a placeholder `in_transit` status with an estimated delivery five days out.
- `validateAddress()` always returns `valid: true`.

If you need real tracking, use FedEx, UPS, or DHL instead.

## Best Practices

1. Name methods so customers know what they are getting. "Standard (3-5 days)" reads better than "Flat Rate 1".
2. Pair a flat rate with a free-shipping threshold to lift average order value.
3. Set realistic delivery copy; the strings are surfaced verbatim at checkout.
4. After changing config, place a test order and confirm all enabled methods appear.

## Related

- [Shipping Settings](../configuration/shipping-settings.md)
