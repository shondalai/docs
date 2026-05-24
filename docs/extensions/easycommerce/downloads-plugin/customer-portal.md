---
id: customer-portal
title: Customer Portal
sidebar_label: Customer Portal
sidebar_position: 4
---

# Customer Portal

Customers manage their downloads and licenses inside the EasyCommerce **Account** view. The plugin extends that view with two backed APIs: `action=customerLicenses` and `action=customerDownloads`, both gated on the Joomla user matching the EasyCommerce customer record.

## Where customers land

The frontend Account view (`com_easycommerce -> View/Account`) renders a Downloads section once the user has at least one active or expired license. The customer ID is derived from the session, never from input, so a logged-in buyer cannot enumerate other customers' licenses.

## Downloads list

Sourced from `apiGetCustomerDownloads`. One row per accessible product, deduplicated when a bundle grants access to several titles.

| Column | Source |
|--------|--------|
| Product | `product.title`, swapped for variation display name when present. |
| Version | Latest stable version from `product.metadata.versions`. |
| File name | `basename(version.file_path)`. |
| Order | Order number that issued the license. |
| Access expires | `license.expires_at`, nullable. |
| Last downloaded | Most recent `#__easycommerce_download_logs` timestamp for this product. |
| Download button | Triggers `action=getDownloadUrl`. |

Subscription-pending-cancel and active licenses both surface here. Expired licenses are listed in read-only state so customers see what they have lost.

## Download flow

1. Customer clicks the download button.
2. The frontend posts `{ id: licenseId, product_id?, version? }` to `extensions.plugin&pluginId=downloads&action=getDownloadUrl`.
3. The plugin re-verifies session ownership and the effective license status, then resolves the version's file:
   - `storage_provider = local` -> the file is streamed in the response, jailed under `media/easycommerce/downloads` by a `realpath` check. Content-Disposition uses RFC 6266 with an ASCII fallback and a `filename*=UTF-8'...` extension.
   - `storage_provider = s3` -> a presigned URL is generated using the plugin's S3 credentials (or environment / instance role), with `download_url_expiry` lifetime (default 3600 seconds).
4. Every successful download writes a row to `#__easycommerce_download_logs` with order, item, product, customer, user, file path, IP, and user agent.

## License panel

Sourced from `apiGetCustomerLicenses`. One row per license, each with its current activations.

| Field | Description |
|-------|-------------|
| License key | Full key, copyable. |
| Status | `active`, `expired`, `revoked`, or `suspended`. |
| Activations | `activations_count` / `max_activations`. |
| Valid until | `expires_at`, blank for perpetual. |
| Product | Product title plus variation if any. |

### Domain list

Each license expands to show active activations:

| Column | Source |
|--------|--------|
| Domain | Normalized domain. |
| Activated at | `activated_at`. |
| Last seen | `last_seen`, updated on every activation hit. |

Customers can revoke a single domain to free a slot. The same admin-side route is exposed (with ownership check) so the customer cannot deactivate domains on licenses they do not own.

## Version history

The downloads list exposes the full `versions` array per product. Customers can pull an older release by passing `version` to `action=getDownloadUrl`. The plugin refuses unknown versions.

## License renewal

When `license.status = expired` and the source order has a subscription, the customer sees a renew prompt that routes back to the cart with the renewal product. After payment, `LicenseService::renewLicense()` advances `expires_at` to the new `next_payment_date` and flips `status` back to `active`.

For non-subscription licenses, renewal uses `product.license_duration` from the licensing settings to advance `expires_at`.

## Email notifications

The base EasyCommerce email plugin handles these. The downloads plugin does not own templates of its own.

| Event | Trigger |
|-------|---------|
| Order paid | New license issued, download link delivered. |
| New version published | Sent when an admin publishes a new product version, gated by accessible-product entitlement. |
| Expiring soon | Subscription renewal reminder from the subscriptions module. |
| Expired | Sent when `LicenseService::validateLicense()` flips a license to `expired`. |

Configure templates and recipients under **Settings -> Emails**.

## Related

- [License management](license-management.md)
- [Update server](update-server.md)
