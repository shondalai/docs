---
id: index
title: Shipping Plugins
sidebar_label: Overview
sidebar_position: 1
---

# Shipping Plugins

Shipping carrier plugins provide real-time shipping rates, label generation, and tracking for EasyCommerce orders. Each carrier is shipped as a separate Joomla plugin under the `easycommerce` plugin group.

## Available Plugins

| Plugin | Carrier | API |
|--------|---------|-----|
| [Manual Shipping](./manual-shipping.md) | Built-in | Flat rate, free shipping, local pickup, express |
| [FedEx](./fedex.md) | FedEx | REST API, OAuth2 client credentials |
| [UPS](./ups.md) | UPS | REST API, OAuth2 client credentials |
| [DHL](./dhl.md) | DHL Express | MyDHL API (Basic auth) |

The Manual Shipping plugin is installed and enabled out of the box. Carrier integrations are optional and only need to be enabled if you want live rates.

## Installation

Each carrier plugin is installed separately:

1. Download the plugin package (`.zip`).
2. Install it via **System, Install, Extensions**.
3. Enable it at **System, Manage, Plugins** (group `easycommerce`).
4. Configure it from **EasyCommerce, Settings, Shipping**.

## Configuration

1. Open **EasyCommerce, Settings, Shipping**.
2. Create or pick a shipping zone.
3. Add the carrier as a shipping method on that zone.
4. Click **Configure** to enter API credentials and pick services.
5. Save and verify rates appear at checkout.

:::note Configure button
The **Configure** button on the Shipping settings tab is disabled until the underlying plugin is enabled in **System, Manage, Plugins**. If the button is greyed out, enable the plugin first and reload the settings page.
:::

## Rate Calculation

Carrier plugins calculate rates from:

- Package weight (sum of `product.weight x quantity`)
- Package dimensions (per-product or plugin defaults)
- Origin address (configured in the plugin's shipper fieldset)
- Destination address (from the customer's checkout)
- Enabled service codes

## Test vs Live Mode

All carrier plugins ship with a **mode** toggle and separate credentials per environment:

| Carrier | Test endpoint | Live endpoint |
|---------|---------------|---------------|
| FedEx | `https://apis-sandbox.fedex.com` | `https://apis.fedex.com` |
| UPS | `https://wwwcie.ups.com` | `https://onlinetools.ups.com` |
| DHL Express | `https://express.api.dhl.com/mydhlapi/test` | `https://express.api.dhl.com/mydhlapi` |

The test/live switch is per plugin, not per zone. Switch to **live** only after a successful sandbox quote at checkout.

## Common Settings

Every carrier plugin exposes:

| Field | Description |
|-------|-------------|
| **Mode** | `test` or `live`; routes requests to sandbox or production. |
| **Test credentials** | API key/secret (or client ID/secret) for sandbox. |
| **Live credentials** | API key/secret (or client ID/secret) for production. |
| **Account number** | Carrier shipper account; required for rating. |
| **Shipper / origin address** | Used as the rate origin and label "from" address. |
| **Enabled services** | Checkbox list of service codes the plugin will return. |
| **API timeout** | cURL timeout, clamped to 5 to 60 seconds. |
| **Debug mode** | Logs request/response bodies to the plugin logger. |

## TLS and CA Bundle

FedEx, UPS, and DHL plugins ship a bundled `cacert.pem` and pin it via `CURLOPT_CAINFO`. This avoids "SSL certificate problem" failures on shared hosts whose system CA stores are missing the intermediate. The bundle is referenced at plugin runtime; do not delete it.

## Troubleshooting

### No rates returned

1. Confirm the plugin is enabled in **System, Manage, Plugins**.
2. Confirm credentials match the selected mode (test credentials in test mode, live in live).
3. Confirm the account number / shipper number is set.
4. Confirm products have a non-zero weight; carriers will not quote zero-weight shipments.
5. Confirm the origin and destination country, state, and postal code are valid for the carrier.
6. Enable **Debug mode** on the plugin and re-run the quote. Inspect the logged response payload for the carrier's error message.

### Authentication failures

- FedEx and UPS cache the OAuth token in the Joomla session keyed by mode plus credentials. A bad token clears automatically on the next 401, but if you just rotated keys, log out of the storefront session to force a fresh fetch.
- DHL uses HTTP Basic on every request; there is no token to invalidate. A 401 means the key/secret pair is wrong for the active mode.

### Invalid address

Carriers reject malformed addresses (wrong state code, missing postal code, unserviced country). Use the carrier's address validation endpoint (exposed by each plugin's API service) to confirm the destination before debugging rates.

## Related

- [Shipping Settings](../configuration/shipping-settings.md)
- [Product Settings](../configuration/product-settings.md) (weight and dimension units)
