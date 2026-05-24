---
id: payment-settings
title: Payment Settings
sidebar_label: Payments
sidebar_position: 4
---

# Payment Settings

Enable checkout, control offline payment methods, and manage installed gateway plugins. The tab is split into three sub-sections: **General**, **Methods**, and **Gateways**.

**Location:** Settings > Payments

## General

| Field | Description | Default |
|-------|-------------|---------|
| `enable_checkout` | Master toggle that allows customers to complete purchases | On |

The General sub-tab also shows a help card distinguishing offline methods (manual reconciliation) from gateways (real-time processing).

## Offline Methods

Three offline methods ship with the component and toggle from the **Methods** sub-tab:

| Field | Description |
|-------|-------------|
| `enable_cash_on_delivery` | Allow Cash on Delivery at checkout |
| `enable_bank_transfer` | Allow direct bank transfer (BACS / wire) |
| `enable_check_payment` | Allow check / cheque payments |

Offline methods do not store per-method instructions in the global settings tab. Instruction text shown to customers (account details, payable name, etc.) is configured per plugin where applicable.

## Gateways

The **Gateways** sub-tab lists every installed payment plugin reported by the plugin discovery service. Each row shows the gateway icon, title, description, enabled badge, a **Configure** button, and a toggle switch.

Behavior:

- The **Configure** button is disabled until the gateway is enabled. Hovering shows the tooltip "Enable this gateway before configuring it."
- Toggling a gateway is asynchronous; the row shows an "Updating..." badge while the toggle round-trips.
- If no gateway plugins are installed, the panel shows an empty state pointing to the plugin install instructions.

### Built-in Gateway Plugins

| Gateway | Documentation |
|---------|---------------|
| Stripe | [Stripe Setup](../payment-plugins/stripe.md) |
| PayPal | [PayPal Setup](../payment-plugins/paypal.md) |

Additional gateways can be added by installing third-party `plg_easycommerce_*` payment plugins.

### Installing a Gateway Plugin

1. Install the plugin package via **System > Install > Extensions**.
2. Enable the plugin in **System > Plugins** if installation did not enable it.
3. Return to **EasyCommerce > Settings > Payments > Gateways**.
4. Toggle the gateway on, then click **Configure**.
5. Provide API credentials, switch between sandbox and live mode, and save.

## Payment Method Order

The `payment_method_order` field on `PaymentSettings` stores the display order used at checkout. The current React tab does not yet expose a drag handle; reordering is managed through the underlying settings API.

## Related

- [Stripe Plugin](../payment-plugins/stripe.md)
- [PayPal Plugin](../payment-plugins/paypal.md)
