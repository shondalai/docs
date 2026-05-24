---
id: index
title: Downloads and Licensing Plugin
sidebar_label: Overview
sidebar_position: 1
---

# Downloads and Licensing Plugin

Sell Joomla extensions and other software with license key management, domain activation tracking, and a Joomla-compatible update feed.

The plugin is shipped as `plg_easycommerce_downloads` and registers itself with EasyCommerce through the `extensions.plugin` router.

## Features

| Feature | Description |
|---------|-------------|
| License key generation | Unique keys minted automatically when a digital order is paid |
| Activation tracking | Per-domain activation records with a configurable cap |
| Domain management | View and revoke activations from admin or the customer account |
| Secure downloads | Files served from local storage (stream) or S3 (presigned URL), default expiry 3600 seconds |
| Joomla update feed | Per-extension XML feed at `task=updates.check`, signed download URLs at `task=updates.download` |
| Subscription-aware expiry | Subscription-linked licenses inherit `next_payment_date` as their expiry |
| Bundle entitlement | A license to a parent product grants downloads of grouped and bundled child products |

## How it works

1. Customer buys a digital product.
2. The plugin generates a license key in the form `shondalai-{uuid-v4}` and stores it in `#__easycommerce_licenses`.
3. Customer signs in and opens **My Account** to view licenses and downloads.
4. Customer installs the extension on a site. The extension calls the activation endpoint and a row is written to `#__easycommerce_license_activations`.
5. Joomla checks the update server. The plugin validates the license, auto-activates the calling domain if needed, and returns the update XML with a signed download URL.
6. The customer's Joomla downloads and installs the new version.

## Use cases

- Selling Joomla extensions with auto-updates
- Selling WordPress plugins or generic ZIP packages
- Distributing software with domain-locked licensing
- Bundling multiple downloadable products under a single license

## Getting started

1. [Installation](installation.md)
2. [License management](license-management.md)
3. [Customer portal](customer-portal.md)
4. [Update server](update-server.md)

## Related

- [Product settings](../configuration/product-settings.md)
- [Email settings](../configuration/email-settings.md)
