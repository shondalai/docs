---
id: advanced-settings
title: Advanced Settings
sidebar_label: Advanced
sidebar_position: 14
---

# Advanced Settings

Configure REST API access, webhooks, logging, geolocation, password policy, and data-retention controls.

**Location:** Settings > Advanced

## REST API

| Field | Description | Default |
|-------|-------------|---------|
| `enable_rest_api` | Allow the EasyCommerce REST API | On |
| `enable_legacy_api` | Keep the legacy v0 API enabled for backward compatibility | Off |
| `rest_api_version` | Current API version label | `v1` |

## Webhooks

| Field | Description | Default |
|-------|-------------|---------|
| `enable_webhooks` | Send outbound webhooks for ecommerce events | Off |
| `webhook_delivery_logs_retention_days` | Days to retain webhook delivery logs | 30 |

Webhook events include order created / updated / completed, customer registered, subscription created / cancelled, and payment received. Endpoint URLs and signing secrets are configured per webhook in the dedicated Webhooks admin view.

## Debug & Logging

| Field | Description | Default |
|-------|-------------|---------|
| `enable_debug_mode` | Show debug information on the storefront | Off |
| `enable_script_debug` | Serve unminified JS bundles so they can be stepped through | Off |
| `enable_logging` | Write events to the EasyCommerce log | On |
| `log_level` | Minimum level retained: `emergency`, `alert`, `critical`, `error`, `warning`, `notice`, `info`, `debug` | `error` |
| `log_retention_days` | Days to retain log entries before pruning | 30 |

### Log Levels

| Level | Description |
|-------|-------------|
| Emergency | System unusable |
| Alert | Immediate action required |
| Critical | Critical condition |
| Error | Error condition |
| Warning | Warning condition |
| Notice | Normal but significant |
| Info | Informational message |
| Debug | Verbose diagnostic detail |

Logs sit under `administrator/logs/com_easycommerce.log.php` (path follows the Joomla logging configuration).

## Geolocation

| Field | Description | Default |
|-------|-------------|---------|
| `enable_geolocation` | Detect the visitor's country for defaults | Off |
| `geolocation_provider` | `geoip` (built-in) or `maxmind` | `geoip` |
| `maxmind_license_key` | MaxMind license key (required when `geolocation_provider` is `maxmind`) | empty |

Geolocation is used to prefill the shipping country, choose a tax rate before the cart has an address, and select a currency where multi-currency is enabled.

## Security

| Field | Description | Default |
|-------|-------------|---------|
| `enable_password_strength_meter` | Show a strength meter on password inputs | On |
| `minimum_password_strength` | Required score (0 to 4); the meter labels these as Very Weak through Strong | 3 |

## Data Management

| Field | Description | Default |
|-------|-------------|---------|
| `enable_account_erasure_requests` | Accept erasure requests submitted from the account area | On |
| `enable_personal_data_export_requests` | Accept personal data export requests | On |
| `personal_data_retention_days` | Days personal data is retained after an erasure request before purge | 30 |

These work together with the customer-facing controls under [Account Settings](account-settings.md).

## Related Settings

- [Payment Settings](payment-settings.md)
- [Shipping Settings](shipping-settings.md) for the shipping debug toggle
