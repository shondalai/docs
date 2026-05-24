---
id: fedex
title: FedEx Shipping
sidebar_label: FedEx
sidebar_position: 3
---

# FedEx Shipping

Configures `plg_easycommerce_fedex`, which talks to the modern FedEx REST API (`https://developer.fedex.com/api/en-us/catalog.html`). The legacy WSDL/SOAP integration is not used.

## Prerequisites

1. A FedEx developer account at [developer.fedex.com](https://developer.fedex.com).
2. A FedEx shipping account number (9 to 12 digits).
3. A project on the developer portal with **Ship**, **Rate**, **Track**, and **Address Validation** APIs subscribed.

## Getting API Credentials

### Step 1: Register

1. Go to [developer.fedex.com](https://developer.fedex.com).
2. Create an account and verify your email.

### Step 2: Create a Project

1. Sign in to the developer portal.
2. Open **My Projects, Create a Project**.
3. Select the **Ship, Rate, and Other APIs** project type.
4. Accept the terms and create the project.

### Step 3: Capture Credentials

Each project issues distinct **Test** and **Production** credentials. Capture both:

| Credential | Description |
|------------|-------------|
| API Key | Acts as the OAuth `client_id`. |
| API Secret | Acts as the OAuth `client_secret`. |
| Account Number | Your FedEx shipper account number. |
| Meter Number | Optional, only required for some legacy reports. |

## Authentication Model

The plugin uses **OAuth2 client credentials**:

1. The plugin POSTs `grant_type=client_credentials` with the API key/secret to `/oauth/token`.
2. FedEx returns an access token with `expires_in` (typically 3600 seconds).
3. The token is cached in the Joomla session, keyed by `mode + sha256(api_key)`, and re-used until 60 seconds before expiry.
4. On HTTP 401 the cached token is dropped and the request is retried once.

Every API call carries:

| Header | Value |
|--------|-------|
| `Authorization` | `Bearer {access_token}` |
| `Content-Type` | `application/json` |
| `X-locale` | `en_US` |
| `x-customer-transaction-id` | Per-call 32-char hex token. FedEx support uses this to trace a specific call. |

## Endpoints

| Operation | Method | Path |
|-----------|--------|------|
| OAuth token | POST | `/oauth/token` |
| Rate quote | POST | `/rate/v1/rates/quotes` |
| Create shipment / label | POST | `/ship/v1/shipments` |
| Cancel shipment | PUT | `/ship/v1/shipments/cancel` |
| Track shipment | POST | `/track/v1/trackingnumbers` |
| Validate address | POST | `/address/v1/addresses/resolve` |

Rate requests use the **Rate Request Type** field (`ACCOUNT`, `LIST`, `PREFERRED`) and ask for transit times via `rateRequestControlParameters.returnTransitTimes`.

Shipment creation requests labels with `labelResponseOptions: 'URL_ONLY'`, so labels are downloaded from URLs FedEx returns rather than streamed inline.

## Configuration

:::note Configure button
The **Configure** button on the Shipping settings tab is disabled until the plugin is enabled in **System, Manage, Plugins**.
:::

### Credentials

| Setting | Description |
|---------|-------------|
| **Mode** | `test` (sandbox) or `live` (production). |
| **Test API Key** | Sandbox `client_id`. Shown when mode is `test`. |
| **Test API Secret** | Sandbox `client_secret`. Encrypted at rest. |
| **Live API Key** | Production `client_id`. Shown when mode is `live`. |
| **Live API Secret** | Production `client_secret`. Encrypted at rest. |
| **Account Number** | FedEx shipper account; required. |
| **Meter Number** | Optional, legacy. |

### Origin / Shipper

Required fields: name, address, city, state, postal code, country. Optional: company, address line 2, phone, residential flag. Country defaults to `US`.

### Services

| Service Code | Service Name |
|--------------|--------------|
| `FEDEX_GROUND` | FedEx Ground |
| `GROUND_HOME_DELIVERY` | FedEx Home Delivery |
| `SMART_POST` | FedEx Ground Economy |
| `FEDEX_2_DAY` | FedEx 2Day |
| `FEDEX_2_DAY_AM` | FedEx 2Day A.M. |
| `FEDEX_EXPRESS_SAVER` | FedEx Express Saver |
| `STANDARD_OVERNIGHT` | Standard Overnight |
| `PRIORITY_OVERNIGHT` | Priority Overnight |
| `FIRST_OVERNIGHT` | First Overnight |
| `FEDEX_INTERNATIONAL_PRIORITY` | International Priority |
| `FEDEX_INTERNATIONAL_PRIORITY_EXPRESS` | International Priority Express |
| `INTERNATIONAL_ECONOMY` | International Economy |
| `FEDEX_INTERNATIONAL_CONNECT_PLUS` | International Connect Plus |
| `FEDEX_REGIONAL_ECONOMY` | Regional Economy |

Only enabled services appear at checkout. The default selection is `FEDEX_GROUND`.

### Options

| Setting | Values | Default |
|---------|--------|---------|
| **Pickup Type** | `USE_SCHEDULED_PICKUP`, `CONTACT_FEDEX_TO_SCHEDULE`, `DROPOFF_AT_FEDEX_LOCATION` | `DROPOFF_AT_FEDEX_LOCATION` |
| **Packaging Type** | `YOUR_PACKAGING`, `FEDEX_ENVELOPE`, `FEDEX_PAK`, `FEDEX_TUBE`, `FEDEX_SMALL_BOX`, `FEDEX_MEDIUM_BOX`, `FEDEX_LARGE_BOX`, `FEDEX_EXTRA_LARGE_BOX`, `FEDEX_10KG_BOX`, `FEDEX_25KG_BOX` | `YOUR_PACKAGING` |
| **Rate Request Type** | `ACCOUNT`, `LIST`, `PREFERRED` | `ACCOUNT` |
| **Weight Unit** | `LB`, `KG` | `LB` |
| **Dimension Unit** | `IN`, `CM` | `IN` |
| **Default Length / Width / Height** | Fallbacks when product dimensions are missing | 10 / 8 / 4 |
| **Enable Insurance** | Yes / No | No |
| **Return Transit Times** | Yes / No | Yes |

### Advanced

| Setting | Description | Default |
|---------|-------------|---------|
| **API Timeout** | cURL timeout in seconds, clamped to 5 to 60 | 15 |
| **Debug Mode** | Logs each request/response (truncated to 4 KB) | No |

## Testing

1. Set **Mode** to `test`.
2. Enter sandbox API key and secret.
3. Add the plugin to a shipping zone with valid US origin and destination.
4. Place a test cart through checkout; rates should populate for every enabled service that supports the lane.
5. If no rates appear, enable **Debug Mode** and inspect the plugin log for the FedEx error payload.

## Going Live

1. Switch **Mode** to `live`.
2. Enter the live API key and secret (these are different from sandbox).
3. Run a low-value test order end to end, including label generation if you use it.
4. Monitor logs for 401s or rate-failure responses.

## Troubleshooting

| Symptom | Likely Cause |
|---------|--------------|
| `FedEx authentication failed` | API key/secret wrong for the active mode, or test credentials used in live mode. |
| `FedEx request failed at the network layer` | Firewall, TLS, or cURL timeout. Check `cacert.pem` is still present in the plugin folder. |
| No services returned but HTTP 200 | The selected service codes are not eligible for the lane (e.g., domestic codes on an international shipment). |
| Rates much higher than expected | Switch **Rate Request Type** to `ACCOUNT` to use your negotiated rates instead of list rates. |
| All requests fail with `4xx` and "invalid account" | Account number does not match the API key environment (sandbox accounts ≠ production accounts). |

## Related

- [Shipping Settings](../configuration/shipping-settings.md)
- [Product Settings](../configuration/product-settings.md)
