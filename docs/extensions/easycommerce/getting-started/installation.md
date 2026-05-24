---
id: installation
title: Installation Guide
sidebar_label: Installation
sidebar_position: 1
---

Install EasyCommerce on a Joomla 5 (or later) site.

## Prerequisites

| Requirement  | Minimum Version           |
|--------------|---------------------------|
| Joomla       | 5.0 or later              |
| PHP          | 8.1 or later              |
| MySQL        | 5.7+ or MariaDB 10.3+     |
| Memory Limit | 128MB (256MB recommended) |

## Step 1: Download the Package

1. Download `pkg_easycommerce.zip` from [shondalai.com](https://shondalai.com).
2. Save the file locally.

The package is an "all-in-one" bundle. It installs the component, its required library, and every official plugin in a single pass.

## Step 2: Install via Joomla

1. Log in to the Joomla **Administrator** panel.
2. Go to **System -> Install -> Extensions**.
3. Open the **Upload Package File** tab.
4. Browse to the downloaded ZIP and click **Upload & Install**.

The installer registers the following extensions:

| Extension                          | Type    | Purpose                              |
|------------------------------------|---------|--------------------------------------|
| `lib_shondalai_core`               | Library | Shared services (email, PDF, etc.)   |
| `com_easycommerce`                 | Component | Main administrator and storefront |
| `plg_easycommerce_paypal`          | Plugin  | PayPal payment gateway               |
| `plg_easycommerce_stripe`          | Plugin  | Stripe payment gateway               |
| `plg_easycommerce_manualshipping`  | Plugin  | Flat-rate / table-rate shipping      |
| `plg_easycommerce_fedex`           | Plugin  | FedEx live shipping rates            |
| `plg_easycommerce_ups`             | Plugin  | UPS live shipping rates              |
| `plg_easycommerce_dhl`             | Plugin  | DHL live shipping rates              |
| `plg_easycommerce_downloads`       | Plugin  | Digital downloads delivery           |
| `plg_finder_easycommerce`          | Plugin  | Smart Search integration             |
| `plg_task_easycommerce_subscriptions` | Plugin | Scheduled subscription renewals   |
| `plg_system_licensing`             | Plugin  | License validation                   |

## Step 3: Verify the Installation

1. Open **Components -> EasyCommerce**.
2. Confirm the EasyCommerce Dashboard loads.
3. The dashboard reports baseline metrics:
   - Total Sales: $0.00
   - Orders: 0
   - Customers: 0

## Step 4: Enable Payment Plugins

Every payment plugin ships disabled. Enable the ones you need before configuring them.

### PayPal

1. Go to **System -> Plugins** and search for "EasyCommerce PayPal".
2. Enable the plugin.
3. Configure it from **Components -> EasyCommerce -> Settings -> Payments**.

### Stripe

1. Go to **System -> Plugins** and search for "EasyCommerce Stripe".
2. Enable the plugin.
3. Configure it from **Components -> EasyCommerce -> Settings -> Payments**.

The built-in **Cash on Delivery**, **Bank Transfer**, and **Check** methods are toggled directly from the Payments settings tab and do not require a separate plugin.

## Step 5: Enable Shipping Plugins

Shipping plugins follow the same pattern as payment plugins.

| Plugin                          | Purpose                          |
|---------------------------------|----------------------------------|
| `plg_easycommerce_manualshipping` | Flat rate, table rate, free shipping |
| `plg_easycommerce_fedex`        | FedEx live rates                 |
| `plg_easycommerce_ups`          | UPS live rates                   |
| `plg_easycommerce_dhl`          | DHL live rates                   |

Enable each plugin in **System -> Plugins**, then configure it from **Components -> EasyCommerce -> Settings -> Shipping**.

## Post-Installation Checklist

- [ ] Configure [General Settings](../configuration/general-settings.md) (store name, address, currency).
- [ ] Set up [Payment Methods](../configuration/payment-settings.md).
- [ ] Configure [Shipping Options](../configuration/shipping-settings.md).
- [ ] Create [Menu Items](menu-setup.md) for the storefront.
- [ ] Add your first [Product](../backend-guide/products.md).

## Troubleshooting

### Installation fails

- Raise the PHP `memory_limit` to at least 256MB.
- Confirm `upload_max_filesize` and `post_max_size` are larger than the package.
- Ensure directory permissions allow Joomla to write (typically `755` for directories, `644` for files).

### Component not visible in the Administrator

- Clear caches via **System -> Clear Cache**.
- Confirm the admin menu entry is present under **Menus -> Administrator Menu**.

### Database errors

- Verify the MySQL/MariaDB version meets the minimum.
- Ensure the database user has `CREATE`, `ALTER`, `INDEX`, and `DROP` privileges.

## Next Steps

- [Quick Setup Guide](quick-setup.md): configure store basics.
- [Menu Setup](menu-setup.md): create the storefront menu items.
