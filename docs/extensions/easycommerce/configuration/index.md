---
id: index
title: Settings Overview
sidebar_label: Overview
sidebar_position: 1
---

# Settings Overview

EasyCommerce settings are organized into logical sections. The settings UI is reachable from **Components > EasyCommerce > Settings** and is gated on the Joomla `core.admin` permission for the EasyCommerce component.

## Settings Sections

| Section | Purpose |
|---------|---------|
| [General](general-settings.md) | Store info, currency, checkout fields, email sender |
| [Products](product-settings.md) | Display, inventory, reviews, measurement units |
| [Payments](payment-settings.md) | Checkout toggle, offline methods, gateway plugins |
| [Shipping](shipping-settings.md) | Shipping options, zones, provider plugins |
| [Tax](tax-settings.md) | Calculation rules, classes, zones, rates |
| [Subscriptions](subscription-settings.md) | Numbering, customer self-service, dunning, trials |
| [Emails](email-settings.md) | Sender branding, per-event toggles, template editor |
| [Invoices](invoice-settings.md) | Auto-generation, numbering, templates, delivery |
| [Accounts](account-settings.md) | Registration, deletion, privacy, GDPR features |
| [Appearance](appearance-settings.md) | Shop header, layout, trust badges, theme |
| [Analytics](analytics-settings.md) | Google Analytics, Facebook Pixel, conversion events |
| [SEO](seo-settings.md) | Breadcrumbs, schema, sitemap, canonical URLs |
| [Advanced](advanced-settings.md) | REST API, webhooks, logging, geolocation, security |

## Saving Settings

- Click **Save** to persist changes; a dot indicator appears beside the save button while there are unsaved edits.
- **Reset** discards unsaved changes for the current tab.
- The settings endpoint only accepts updates from users with `core.admin` on `com_easycommerce`.

## Plugin Configuration

Payment and shipping plugins expose their own settings behind a **Configure** button on the Payments and Shipping tabs:

1. Locate the plugin in the gateway or method list.
2. Toggle the plugin **on** first. The Configure button is disabled until the plugin is enabled.
3. Click **Configure** to open the plugin modal.
4. Fill in plugin-specific settings and **Save**.

See [Payment Plugins](../payment-plugins/index.md) and [Shipping Plugins](../shipping-plugins/index.md) for per-plugin guides.
