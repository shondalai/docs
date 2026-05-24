---
id: license-management
title: License Management
sidebar_label: License Management
sidebar_position: 3
---

# License Management

The plugin generates, validates, activates, suspends, and revokes software licenses. All license records live in `#__easycommerce_licenses`, all activation records in `#__easycommerce_license_activations`.

## License key format

Keys are minted by `LicenseService::createLicenseKey()` as:

```
{prefix}-{uuid-v4}

Example: shondalai-ec5f20ad-fd08-4c6f-b105-0b85af458a25
```

The prefix comes from the plugin parameter `license_key_prefix` (default `shondalai`, normalized to `[a-z0-9_-]`). The UUID v4 segment is fixed at 36 characters, so the total length is always `len(prefix) + 1 + 36`. The `license_key_length` parameter is preserved for forward compatibility but does not truncate the UUID.

## License lifecycle

```
Order paid
   |
   v
License generated (status = active)
   |
   v
Customer activates a domain (slot consumed)
   |
   v
License validates updates and downloads
   |
   v
Subscription renewal -> expires_at advanced to next_payment_date
                       OR
                    -> status = suspended when subscription ends
                       OR
                    -> status = revoked by admin
                       OR
                    -> status = expired when expires_at passes
```

### Status values

| Status | Set by | Effect |
|--------|--------|--------|
| `active` | Initial generation, renewal, reactivation | Validates and grants downloads. |
| `expired` | Auto on `validateLicense()` when `expires_at` is in the past | Read-only, no downloads, no updates. |
| `revoked` | Admin action | Permanent. Cannot be reactivated through the UI. |
| `suspended` | Subscription cancellation | Reversible. A resumed subscription reactivates the license. |

### Expiry rules

| Source | Expiry |
|--------|--------|
| Subscription-linked license | Inherits `subscription.next_payment_date` so the license rolls forward with billing. |
| Non-subscription with product `license_duration` set | `now() + license_duration days` at issuance. |
| Neither | `NULL`, treated as perpetual. |

## Admin views

In the EasyCommerce React admin, licenses are reached from the product details. A dedicated top-level Licenses page is not part of the plugin UI as of this build; licenses are scoped by their owning order, customer, or subscription, and the plugin's REST endpoints (`extensions.plugin&pluginId=downloads`) back any custom list view.

Endpoints accept these filters when calling `extensions.plugin&pluginId=downloads&action=list`:

| Filter | Description |
|--------|-------------|
| `search` | Matches license key, product title, customer first or last name, customer email. |
| `status` | `active`, `expired`, `revoked`, `suspended`. |
| `order_id`, `customer_id`, `subscription_id` | Scope to a single related entity. |
| `orderBy`, `orderDir` | One of `created`, `expires_at`, `status`, `license_key`, `product_title`, `customer_name`, `activations_count`. |

## License detail fields

| Field | Description |
|-------|-------------|
| `license_key` | Full key, unique. |
| `status` | See above. |
| `product_id`, `variation_id` | The licensed product, and the variation row when the schema supports it. |
| `customer_id`, `order_id`, `subscription_id` | Source records. |
| `max_activations` | Cap copied from the product setting at issuance. |
| `activations_count` | Re-synced from `#__easycommerce_license_activations` on every activation, deactivation, or admin edit. |
| `expires_at` | Nullable. |
| `created`, `modified` | Audit timestamps. |

## Activation slot management

Each license has a `max_activations` cap. The plugin enforces it in both `activateLicense()` and `createActivation()`. When the count is at the cap, activation is rejected with `Maximum activations reached`.

Activations record:

| Column | Filled by |
|--------|-----------|
| `license_id`, `domain` | Required, domain is normalized (lowercased, scheme stripped). |
| `ip_address`, `joomla_version`, `php_version` | Sent by the calling site, optional. |
| `metadata` | JSON blob, includes a `source` of `update_check`, `admin`, or whatever the client passes. |
| `activated_at`, `last_seen`, `status` | Maintained by the service. `last_seen` is bumped when an already-activated domain re-activates. |

## Public license APIs

External sites talk to the plugin through EasyCommerce's plugin router. The path is always `option=com_easycommerce&task=extensions.plugin&pluginId=downloads&action=<name>`, not a bare `downloads.<name>` task.

### Validate license

```
POST /index.php?option=com_easycommerce&task=extensions.plugin&pluginId=downloads&action=validate

{
    "license_key": "shondalai-ec5f20ad-fd08-4c6f-b105-0b85af458a25",
    "domain": "customer-site.com"
}
```

Returns `valid`, `status`, `expires_at`, `max_activations`, `activations_count`, `domain_activated`, and `accessible_product_ids` (including bundle and grouped children).

### Activate license

```
POST /index.php?option=com_easycommerce&task=extensions.plugin&pluginId=downloads&action=activate

{
    "license_key": "shondalai-ec5f20ad-fd08-4c6f-b105-0b85af458a25",
    "domain": "customer-site.com"
}
```

If the domain is already activated, `last_seen` is bumped and the call succeeds.

### Deactivate license

```
POST /index.php?option=com_easycommerce&task=extensions.plugin&pluginId=downloads&action=deactivate

{
    "license_key": "shondalai-ec5f20ad-fd08-4c6f-b105-0b85af458a25",
    "domain": "customer-site.com"
}
```

Removes the activation row and re-syncs `activations_count`.

## Admin actions

These actions require an authenticated admin session and use `action=revoke`, `action=suspend`, `action=reactivate`, `action=update`, `action=createActivation`, `action=updateActivation`, `action=deactivate` (admin variant), against the same `extensions.plugin&pluginId=downloads` task.

| Action | Effect |
|--------|--------|
| Revoke | Sets `status = revoked`. Cannot be undone through the UI. |
| Suspend | Sets `status = suspended`, optionally moves `expires_at` to now. |
| Reactivate | Restores a suspended license to `active`, optionally extending `expires_at` to a new billing cycle. |
| Update | Edits key, product, customer, status, `max_activations`, `expires_at`, and `subscription_id`. Refuses to lower `max_activations` below the current active count. |
| Deactivate domain | Deletes a single activation row, freeing a slot. |

## Related

- [Update server](update-server.md)
- [Customer portal](customer-portal.md)
