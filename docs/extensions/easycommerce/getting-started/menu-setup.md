---
id: menu-setup
title: Menu Configuration
sidebar_label: Menu Setup
sidebar_position: 3
---

Create the Joomla menu items that expose the EasyCommerce storefront.

## Available Menu Item Types

EasyCommerce ships these menu item types under the **EasyCommerce** group:

| Menu Item Type             | Purpose                                  |
|----------------------------|------------------------------------------|
| Shop                       | Storefront landing / catalog             |
| Cart                       | Shopping cart                            |
| Account - My Account       | Customer dashboard (orders, downloads, profile) |
| Category View              | Products for a single category           |
| Product View               | A single product page                    |

The checkout, payment-return, and order-confirmation pages do not have dedicated menu item types. The storefront routes to them internally from the cart and from the gateway callbacks.

## Required Menu Items

At minimum, create:

| Page       | Menu Item Type                    |
|------------|-----------------------------------|
| Shop       | EasyCommerce -> Shop              |
| Cart       | EasyCommerce -> Cart              |
| My Account | EasyCommerce -> Account - My Account |

## Creating Menu Items

### Step 1: Open the Menu Manager

1. Go to **Menus -> Main Menu** (or whichever menu hosts your public navigation).
2. Click **New**.

### Step 2: Create the Shop page

| Field          | Value                       |
|----------------|-----------------------------|
| Menu Title     | Shop                        |
| Menu Item Type | EasyCommerce -> Shop        |
| Status         | Published                   |

Click **Save & Close**.

The Shop menu item also exposes layout, theme, and grid options in the **Options** panel (home vs. shop layout, hero banner, featured products, dark mode, sticky header, and custom JSON layout).

### Step 3: Create the Cart page

| Field          | Value                  |
|----------------|------------------------|
| Menu Title     | Cart                   |
| Menu Item Type | EasyCommerce -> Cart   |
| Status         | Published              |

Click **Save & Close**.

Cart options include toggles for "Continue Shopping" link, related products, and coupon entry.

### Step 4: Create the My Account page

| Field          | Value                                  |
|----------------|----------------------------------------|
| Menu Title     | My Account                             |
| Menu Item Type | EasyCommerce -> Account - My Account   |
| Status         | Published                              |

Click **Save & Close**.

Account options control which sections appear: profile, orders, downloads, subscriptions.

## Optional Menu Items

### Category page

Link directly to a product category.

| Field            | Value                          |
|------------------|--------------------------------|
| Menu Title       | Electronics                    |
| Menu Item Type   | EasyCommerce -> Category View  |
| Select Category  | Pick a category (modal field)  |

Category options include products-per-page, default sort order, grid columns, and toggles for subcategories, category description, and filters.

### Single product page

Link directly to a product. The product selector now uses a modal product picker.

| Field            | Value                          |
|------------------|--------------------------------|
| Menu Title       | Featured Product               |
| Menu Item Type   | EasyCommerce -> Product View   |
| Select Product   | Pick a product (modal field)   |

Product View options cover breadcrumbs, related products, reviews, and the related-products count.

## Link Pages in Settings

Open **Components -> EasyCommerce -> Settings -> Products** and map your new menu items.

| Setting          | Select                            |
|------------------|-----------------------------------|
| Shop Page        | Your Shop menu item               |
| Cart Page        | Your Cart menu item               |
| Checkout Page    | Leave empty unless you route checkout through a Joomla article or wrapper |
| My Account Page  | Your My Account menu item         |

This mapping drives add-to-cart redirects, "View Cart" links, and post-login destinations.

## Access Levels

Choose the right access level for each menu item:

| Page       | Recommended Access            |
|------------|-------------------------------|
| Shop       | Public                        |
| Cart       | Public                        |
| My Account | Registered                    |

Guest checkout is controlled separately under **Settings -> General -> Enable Guest Checkout**. The cart menu item itself can stay Public regardless.

Set the value in the menu item's **Access** dropdown.

## Next Steps

- [General Settings](../configuration/general-settings.md): store, currency, and checkout-field requirements.
- [Product Settings](../configuration/product-settings.md): page links, inventory, and review options.
