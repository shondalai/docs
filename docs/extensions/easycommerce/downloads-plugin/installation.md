---
id: installation
title: Installing the Downloads Plugin
sidebar_label: Installation
sidebar_position: 2
---

# Installing the Downloads Plugin

## Install the package

1. Download `plg_easycommerce_downloads.zip` from your account.
2. In Joomla, go to **System -> Install -> Extensions** and upload the ZIP.
3. Go to **System -> Manage -> Plugins**, search for "EasyCommerce - Downloads", and enable it.

The plugin runs under the `easycommerce` plugin group, so EasyCommerce auto-discovers it once enabled.

## Database tables

The installer creates these tables:

| Table | Purpose |
|-------|---------|
| `#__easycommerce_licenses` | One row per issued license key |
| `#__easycommerce_license_activations` | One row per (license, domain) pair |
| `#__easycommerce_extensions` | Maps a product to a Joomla extension element (`com_xyz`, `pkg_xyz`, ...) |
| `#__easycommerce_extension_versions` | Uploaded version records with checksum and platform metadata |
| `#__easycommerce_download_logs` | Per-download audit trail (used by reports) |

Version files themselves are not stored in a dedicated table. They live as entries inside the product's `metadata.versions` JSON, with a `file_path` and a `storage_provider` of either `local` or `s3`.

## File storage

The download URL resolver inspects each version's `storage_provider`:

| Provider | Where files live |
|----------|------------------|
| `local` | Under `JPATH_ROOT/<local_download_path>`, default `media/easycommerce/downloads`. Streamed directly with `readfile()` after a `realpath` jail check. |
| `s3` | The S3 bucket configured on the plugin (or in env / EC2 instance role). Customers are redirected to a presigned URL valid for `download_url_expiry` seconds. |

Keep local download files outside `images/` or any other publicly-listed directory. The streamer enforces a `realpath` confinement check, but the directory itself should not be browseable.

## Plugin parameters

Edit the plugin under **System -> Plugins -> EasyCommerce - Downloads**.

| Field | Default | Notes |
|-------|---------|-------|
| License key prefix | `shondalai` | Prepended to the UUID. Lowercased and stripped to `[a-z0-9_-]`. |
| License key length | `24` | Bounded `16..48`. UUID v4 segment is fixed; this field is retained for backward compat and does not change the actual key length. |
| Max activations | `1` | Default cap when a product does not set its own `max_activations`. |
| Download URL expiry | `3600` | Seconds. Applied to S3 presigned URLs and to local stream cache headers. |

## Creating a download product

1. **EasyCommerce -> Products -> New**.
2. Set the product to a downloadable type (digital).
3. Save the product, then open the **Downloads** tab provided by the plugin.
4. Add at least one version with a file (uploaded to local storage or referenced in S3).
5. On the same tab, set:
   - License duration in days, leave blank for perpetual.
   - Max activations per license.
   - Optional: the Joomla extension element this product represents (for example `pkg_easyforms`). This is what binds the product to the update server route.

## Verifying the installation

1. Place a test order for a digital product and mark it paid.
2. Confirm a row appears in `#__easycommerce_licenses` with `status = active`.
3. Sign in as the buyer, open **My Account**, and confirm the license and download link are listed.
4. Hit `index.php?option=com_easycommerce&task=updates.check&extension=<your_element>` in a browser and confirm a valid `<updates>` XML is returned.

## Next steps

- [License management](license-management.md)
- [Update server](update-server.md)
