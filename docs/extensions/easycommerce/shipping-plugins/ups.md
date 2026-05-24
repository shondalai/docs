---
id: ups
title: UPS Shipping
sidebar_label: UPS
sidebar_position: 4
---

# UPS Shipping

Configures `plg_easycommerce_ups`, which talks to the modern UPS Developer REST API with OAuth2 client credentials. The legacy XML "Access Key" flow is not used.

## Prerequisites

1. A UPS developer account at [developer.ups.com](https://developer.ups.com).
2. A UPS shipper account number.
3. An app in the developer portal with **Rating**, **Shipping**, **Tracking**, and **Address Validation** products added.

## Getting API Credentials

### Step 1: Register

1. Go to [developer.ups.com](https://developer.ups.com) and sign up.
2. Verify your email and complete your profile (link a shipper account number).

### Step 2: Create an App

1. Open **Apps, Add Apps**.
2. Pick **I want to integrate UPS technology into my business**.
3. Link the UPS account number and add the products you need (at minimum Rating; add Shipping if you want labels, Tracking, and Address Validation).
4. Submit the app.

### Step 3: Capture Credentials

UPS issues both **Test** and **Production** OAuth credentials for the same app:

| Credential | Description |
|------------|-------------|
| Client ID | OAuth `client_id` |
| Client Secret | OAuth `client_secret` |
| Account Number | UPS shipper number (used in `RateRequest.Shipment.Shipper.ShipperNumber`) |

## Authentication Model

The plugin uses **OAuth2 client credentials** against `/security/v1/oauth/token`:

1. The plugin POSTs `grant_type=client_credentials` with HTTP Basic auth (`base64(client_id:client_secret)`).
2. UPS returns an access token with `expires_in` (typically 14400 seconds / 4 hours).
3. The token is cached in the Joomla session, keyed by `mode + sha256(client_id)`, and re-used until 60 seconds before expiry.
4. On HTTP 401 the cached token is dropped and the request is retried once (UPS occasionally rotates tokens mid-flight).

Every API call carries:

| Header | Value |
|--------|-------|
| `Authorization` | `Bearer {access_token}` |
| `Content-Type` | `application/json` |
| `transId` | Per-call 32-char hex token for log correlation. |
| `transactionSrc` | `EasyCommerce` |

## Endpoints

The plugin pins API versions in the path. Bump cautiously; UPS publishes a new version roughly yearly.

| Operation | Method | Path |
|-----------|--------|------|
| OAuth token | POST | `/security/v1/oauth/token` |
| Rate quote (Shop) | POST | `/api/rating/v2409/Shop?additionalinfo=timeintransit` |
| Create shipment / label | POST | `/api/shipments/v2409/ship` |
| Track shipment | GET | `/api/track/v1/details/{trackingNumber}` |
| Validate address | POST | `/api/addressvalidation/v2/3` |

Rate quotes use the **Shop** operation (returns all eligible services in one call), not **Rate** (single service). The `additionalinfo=timeintransit` query parameter asks UPS to include estimated delivery dates.

## Configuration

:::note Configure button
The **Configure** button on the Shipping settings tab is disabled until the plugin is enabled in **System, Manage, Plugins**.
:::

### Credentials

| Setting | Description |
|---------|-------------|
| **Mode** | `test` (sandbox) or `live` (production). |
| **Test Client ID** | Sandbox OAuth `client_id`. Shown when mode is `test`. |
| **Test Client Secret** | Sandbox OAuth `client_secret`. Encrypted at rest. |
| **Live Client ID** | Production OAuth `client_id`. Shown when mode is `live`. |
| **Live Client Secret** | Production OAuth `client_secret`. Encrypted at rest. |
| **Account Number** | UPS shipper number; required. |

### Origin / Shipper

Required: name, address, city, state, postal code, country. Optional: phone. Country defaults to `US`.

### Services

| Service Code | Service Name |
|--------------|--------------|
| `01` | UPS Next Day Air |
| `02` | UPS 2nd Day Air |
| `03` | UPS Ground |
| `07` | UPS Worldwide Express |
| `08` | UPS Worldwide Expedited |
| `11` | UPS Standard |
| `12` | UPS 3 Day Select |
| `13` | UPS Next Day Air Saver |
| `14` | UPS Next Day Air Early |
| `54` | UPS Worldwide Express Plus |
| `59` | UPS 2nd Day Air A.M. |
| `65` | UPS Saver |

Default enabled service is `03` (UPS Ground).

### Options

| Setting | Values | Default |
|---------|--------|---------|
| **Pickup Type** | `01` Daily, `03` Customer Counter, `06` One Time, `07` On Call, `19` Letter Center | `01` |
| **Packaging Type** | `01` Letter, `02` Customer Package, `03` Tube, `04` Pak, `21` Express Box | `02` |
| **Weight Unit** | `LBS`, `KGS` | `LBS` |
| **Dimension Unit** | `IN`, `CM` | `IN` |
| **Default Length / Width / Height** | Fallbacks when product dimensions are missing | 10 / 8 / 4 |
| **Negotiated Rates** | Return your account's negotiated rates when available | No |

### Advanced

| Setting | Description | Default |
|---------|-------------|---------|
| **API Timeout** | cURL timeout in seconds, clamped to 5 to 60 | 15 |
| **Debug Mode** | Logs each request/response (truncated to 4 KB) | No |

## Testing

1. Set **Mode** to `test`. UPS's sandbox host is `wwwcie.ups.com`.
2. Enter sandbox client ID/secret. They differ from production credentials even within the same app.
3. Run a quote against a domestic address; UPS Ground (`03`) should always return for a valid US lane.
4. If only some services return, the others are simply not eligible for the lane; this is expected.

## Going Live

1. Switch **Mode** to `live`. The plugin starts hitting `onlinetools.ups.com`.
2. Enter production client ID/secret.
3. Place a test order, generate a label, void it, and verify tracking comes back.
4. Watch for `401` retries in the log; persistent retries indicate clock skew or a revoked client.

## Troubleshooting

| Symptom | Likely Cause |
|---------|--------------|
| `UPS authentication failed` | Client ID/secret wrong for the active mode. |
| `UPS request failed at the network layer` | Firewall, TLS, or cURL timeout. The bundled `cacert.pem` must exist in the plugin root. |
| 401 on every request | Token rotation; the plugin retries automatically. Persistent 401 means the client was disabled in the portal. |
| Rates missing for international | Account is not enabled for international services, or destination is in an unserviced country. |
| Negotiated rates not applied | Toggle **Negotiated Rates** on; account must be eligible. |
| `400 Bad Request` on tracking | The tracking number is invalid or the locale/return parameters were stripped by a proxy. |

## Related

- [Shipping Settings](../configuration/shipping-settings.md)
- [Product Settings](../configuration/product-settings.md)
