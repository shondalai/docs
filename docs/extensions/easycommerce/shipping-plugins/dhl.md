---
id: dhl
title: DHL Express Shipping
sidebar_label: DHL
sidebar_position: 5
---

# DHL Express Shipping

Configures `plg_easycommerce_dhl`, which talks to the **DHL Express MyDHL API** (the global DHL Express REST API). This plugin covers DHL Express worldwide (US, Europe, intra-region, domestic). It is **not** the DHL Parcel Benelux integration; the older Parcel implementation has been replaced.

## Prerequisites

1. A DHL developer account at [developer.dhl.com](https://developer.dhl.com).
2. A subscription to **DHL Express, MyDHL API**.
3. An active **DHL Express account number** (used as the shipper account for rating and shipment creation).

## Getting API Credentials

### Step 1: Register

1. Go to [developer.dhl.com](https://developer.dhl.com) and create a developer account.
2. Verify your email and complete the profile.

### Step 2: Subscribe to MyDHL API

1. Open the **DHL Express** product family.
2. Subscribe to **MyDHL API**.
3. DHL issues a sandbox API key + secret immediately. Production credentials require approval and tie to a specific DHL Express account.

### Step 3: Capture Credentials

| Credential | Description |
|------------|-------------|
| API Key | Used as the username portion of HTTP Basic auth. |
| API Secret | Used as the password portion of HTTP Basic auth. |
| Account Number | DHL Express shipper account; required for rate requests. |

## Authentication Model

The plugin uses **HTTP Basic authentication** on every request. There is no OAuth, no bearer token, no JWT, and nothing to refresh:

```
Authorization: Basic base64(api_key:api_secret)
```

If the key or secret is missing for the active mode the service throws a `RuntimeException` before issuing the request.

Every request also carries:

| Header | Value |
|--------|-------|
| `Authorization` | `Basic {base64}` |
| `Content-Type` | `application/json` |
| `Accept` | `application/json` |
| `Message-Reference` | Per-call RFC 4122 v4 UUID. MyDHL requires at least 28 chars; DHL support correlates against this. |
| `Message-Reference-Date` | GMT timestamp matching the request. |
| `x-version` | `3.2.2` (MyDHL API spec version). |
| `Plugin-Name` | `EasyCommerce-DHL` |
| `Plugin-Version` | Reported plugin version. |
| `Shipping-System-Platform-Name` | `Joomla` |
| `Webstore-Platform-Name` | `EasyCommerce` |

## Endpoints

Base URLs (relative paths join with the configured mode's base):

| Mode | Base URL |
|------|----------|
| Test | `https://express.api.dhl.com/mydhlapi/test` |
| Production | `https://express.api.dhl.com/mydhlapi` |

| Operation | Method | Path |
|-----------|--------|------|
| Rate quote | POST | `/rates` |
| Create shipment / label | POST | `/shipments` |
| Track shipment | GET | `/shipments/{trackingNumber}/tracking` |
| Validate address | GET | `/address-validate` |
| Cancel pickup | DELETE | `/pickups/{dispatchConfirmationNumber}` |

Rate requests use the structured POST `/rates` form (not the GET variant) so multi-package and customs data can travel in a single call.

Shipment creation returns label image references that are pulled from the `documents[]` collection where `typeCode == 'label'`.

### Tracking Status

The plugin reads the **last event's `typeCode`** from the tracking response as the canonical status. The top-level `shipment.status` field is the API call result ("Success"), not the parcel state. Events are read from `events[]` and the most recent entry (the array's end) provides the live status code.

## Configuration

:::note Configure button
The **Configure** button on the Shipping settings tab is disabled until the plugin is enabled in **System, Manage, Plugins**.
:::

### Credentials

| Setting | Description |
|---------|-------------|
| **Mode** | `test` (sandbox) or `live` (production). |
| **Test API Key** | Sandbox API key. Shown when mode is `test`. |
| **Test API Secret** | Sandbox API secret. Encrypted at rest. |
| **Live API Key** | Production API key. Shown when mode is `live`. |
| **Live API Secret** | Production API secret. Encrypted at rest. |
| **Account Number** | DHL Express shipper account; required. |

### Shipper

Name, company, address (lines 1 and 2), city, province, postal code, country (defaults to `US`), email, phone. The country must be a valid ISO 3166-1 alpha-2 code.

### Services

DHL Express service codes are single characters. Default enabled service is `P` (Express Worldwide).

| Code | Service |
|------|---------|
| `P` | Express Worldwide, non-document, 1 to 3 business days |
| `D` | Express Worldwide Doc, document only, 1 to 3 business days |
| `T` | Express 12:00, next business day by 12:00 |
| `Y` | Express 12:00 Doc, document, next business day by 12:00 |
| `U` | Express Worldwide EU, intra-Europe |
| `K` | Express 9:00, next business day by 09:00 |
| `L` | Express 10:30, next business day by 10:30 |
| `Q` | Medical Express, temperature-controlled |
| `N` | Domestic Express, same-country next business day |
| `1` | Domestic Express 12:00, same-country next business day by 12:00 |
| `G` | Domestic Economy Select, same-country economy |

Only enabled services are surfaced at checkout.

### Options

| Setting | Values | Default |
|---------|--------|---------|
| **Unit of Measurement** | `metric` (kg, cm), `imperial` (lb, in) | `metric` |
| **Package Type** | `3BX`, `2BC`, `2BP`, `EE`, `OD`, `YP` | `3BX` |
| **Default Length / Width / Height** | Fallbacks when product dimensions are missing | 20 / 15 / 10 |
| **Pickup Requested** | Ask DHL to schedule a pickup | No |
| **Incoterm** | `DAP`, `DDP`, `EXW`, `FCA` | `DAP` |
| **Enable Insurance** | Yes / No | No |
| **Insurance Threshold** | Minimum order value to insure; shown only if insurance enabled | 100 |
| **Enable Signature** | Require signature on delivery | No |
| **Get All Value-Added Services** | Return the full VAS catalogue with each rate | No |

### Advanced

| Setting | Description | Default |
|---------|-------------|---------|
| **API Timeout** | cURL response timeout, clamped to 5 to 60 seconds. Connect timeout is fixed at 5s. | 15 |
| **Enable Logging** | Log API events at info level | Yes |
| **Debug Mode** | Log full request/response bodies and the `Message-Reference` | No |

## International Shipping

DHL Express is built for cross-border movement:

- Customs documentation flows through the `/shipments` payload.
- The **Incoterm** field drives who pays duties: `DDP` charges the merchant, `DAP` charges the recipient.
- `declaredValue` (carried as a chargeable item on the rate request) sets the customs value used for duties and insurance.

## Testing

1. Set **Mode** to `test`. The plugin hits `https://express.api.dhl.com/mydhlapi/test`.
2. Enter sandbox API key and secret (issued immediately on subscription).
3. Run a quote between two countries DHL Express serves (DE to US is a reliable sandbox pair).
4. If rates do not return, enable **Debug Mode** and check the log for the `detail` / `title` / `additionalDetails` fields DHL returns; they contain the precise validation error.

## Going Live

1. Switch **Mode** to `live`. Base URL becomes `https://express.api.dhl.com/mydhlapi`.
2. Enter production API key and secret (these are different from sandbox and only issued after DHL approves your subscription).
3. Confirm the **Account Number** matches the live account DHL approved.
4. Place a real low-value test shipment, verify the label PDF, and confirm tracking events flow back.

## Troubleshooting

| Symptom | Likely Cause |
|---------|--------------|
| `DHL Express credentials are not configured for the selected mode` | The key or secret field for the active mode is empty. |
| `401 Unauthorized` | Wrong key/secret pair, or sandbox credentials used in live mode. There is no token to clear; fix the credentials. |
| `403 Forbidden` | The account is not authorized for the requested service (e.g., asking for `U` from a non-EU origin). |
| Empty rates with HTTP 200 | All requested services are ineligible for the lane. Check `additionalDetails` in the response. |
| Missing customs fields error | DHL requires harmonized codes and declared values on cross-border shipments. Configure them on the product. |
| Label generation succeeds but no PDF | The `documents[]` collection contains entries other than `typeCode == 'label'`. The plugin filters for `label` only. |

Every error message bubbles up with the HTTP code and the `Message-Reference` UUID. Share that reference with DHL support to retrieve their server-side log.

## Related

- [Shipping Settings](../configuration/shipping-settings.md)
- [Product Settings](../configuration/product-settings.md)
