---
id: index
title: Payment Plugins
sidebar_label: Overview
sidebar_position: 1
---

# Payment Plugins

Payment gateway plugins enable real-time payment processing in EasyCommerce. Each plugin is a standard Joomla plugin in the `easycommerce` group that registers a gateway via the `GetPaymentMethodsEvent`.

## Available Plugins

| Plugin | Features |
|--------|----------|
| [PayPal](./paypal.md) | PayPal, PayPal Credit, Venmo, card processing, subscriptions, refunds, capture/void |
| [Stripe](./stripe.md) | Cards, Apple Pay, Google Pay, 3D Secure, subscriptions, refunds, capture/void |

Both plugins support one-time payments, recurring subscriptions, partial refunds, and signed webhook delivery.

## Installation

Each payment plugin is installed separately:

1. Download the plugin package (.zip) from your account.
2. Install via **System → Install → Extensions**.
3. Enable at **System → Manage → Plugins** (search for `easycommerce`).
4. Open **EasyCommerce → Settings → Payments**.

## Configuration

1. Go to **EasyCommerce → Settings → Payments**.
2. Locate the gateway in the payment methods list.
3. Toggle **Enabled** for the gateway.
4. Click **Configure** to open plugin settings.
5. Enter API credentials and preferences.
6. Click **Save**.

:::note Configure button is gated by Enabled
The **Configure** button on each payment method card stays disabled until the gateway is enabled. Flip the **Enabled** switch first, then **Configure** becomes clickable. This applies to both the Payments tab and the Shipping tab in Settings.
:::

## Test Mode

Both gateways ship with separate credential fields for sandbox/test vs. live:

| Gateway | Mode value | Test credentials |
|---------|-----------|------------------|
| PayPal  | `sandbox` | Sandbox Client ID + Secret |
| Stripe  | `test`    | Test Publishable Key + Secret Key |

Test thoroughly before switching `mode` to `live`. The live credential fields are hidden by `showon` rules until you change the mode dropdown.

## Common Features

### Subscriptions

Both PayPal and Stripe support recurring billing when `enable_subscriptions` is on (default):

- Automatic renewal charges
- Trial periods via `trial_period_days` (0 to 365)
- Subscription lifecycle synced through webhooks

### Security

All plugins enforce:

- Encrypted credential storage in the component settings store
- Webhook signature verification (mandatory; the plugin refuses unsigned webhook requests)
- PCI compliance by design (card data never touches your server)

## Troubleshooting

### Plugin Not Showing in Settings

1. Verify the plugin is installed under **System → Extensions**.
2. Verify the plugin is enabled under **System → Plugins**.
3. Refresh the EasyCommerce settings page.

### Payments Failing

1. Check API credentials match the current `mode` (test/sandbox vs. live).
2. Review error logs under **EasyCommerce → Logs** (or PHP error log).
3. Toggle **Debug Mode** on the plugin to capture full API request/response data.
