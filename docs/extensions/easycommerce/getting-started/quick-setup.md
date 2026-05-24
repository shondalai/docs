---
id: quick-setup
title: Quick Setup Guide
sidebar_label: Quick Setup
sidebar_position: 2
---

Get a fresh EasyCommerce install ready to accept orders.

## Step 1: Configure Store Basics

Open **Components -> EasyCommerce -> Settings -> General**.

### Store information

| Setting        | What to enter                  | Example              |
|----------------|--------------------------------|----------------------|
| Store Name     | Your business name             | "My Online Shop"     |
| Admin Email    | Where order notifications land | `shop@example.com`   |
| From Name      | Sender name on outgoing email  | "My Online Shop"     |
| From Email     | Sender address on outgoing email | `noreply@example.com` |
| Store Address  | Physical business address      | "123 Main St"        |
| Store City     | City                           | "New York"           |
| Store Country  | Country selector               | "United States"      |
| Store Phone    | Contact number                 | "+1 555-123-4567"    |

### Currency

| Setting             | Recommended | Notes                              |
|---------------------|-------------|------------------------------------|
| Currency            | USD         | USD, EUR, GBP, INR, and others     |
| Currency Position   | Left        | Left, Right, Left with space, Right with space |
| Thousand Separator  | `,`         | Single character                   |
| Decimal Separator   | `.`         | Single character                   |
| Number of Decimals  | 2           | 0 to 4                             |

Click **Save** when done.

## Step 2: Enable a Payment Method

Open **Settings -> Payments**.

### Fast path: Cash on Delivery

1. Toggle **Enable Cash on Delivery** to ON.
2. Click **Save**.

### Or configure PayPal

1. Enable the **EasyCommerce PayPal** plugin under **System -> Plugins**.
2. Back in **Settings -> Payments**, click **Configure** next to PayPal.
3. Pick the **Environment Mode** (Sandbox for testing).
4. Enter the **Client ID** and **Secret**.
5. Click **Save**.

Bank Transfer and Check methods can also be toggled directly in this tab without any extra plugin.

## Step 3: Set Up Shipping

Open **Settings -> Shipping**.

### Fast path: flat-rate shipping

1. Enable **Shipping**.
2. Enable the **EasyCommerce Manual Shipping** plugin under **System -> Plugins**.
3. In **Shipping Zones**, click **Add Zone**:
   - Name: "Domestic"
   - Add at least one location (country, state, or postcode range).
4. Add a shipping method to the zone:
   - Method: Flat Rate
   - Title: "Standard Shipping"
   - Cost: 5.99
5. Click **Save**.

## Step 4: Add Your First Product

Open **Components -> EasyCommerce -> Products** and click **New**.

| Field         | Value               |
|---------------|---------------------|
| Name          | Your product name   |
| Regular Price | 19.99               |
| Status        | Published           |

1. Drag a product image into the media field.
2. Click **Save**.

## Step 5: Create Menu Items

Open **Menus -> Main Menu -> Add New Menu Item** and create one entry for each storefront page.

| Menu Title  | Menu Item Type         |
|-------------|------------------------|
| Shop        | EasyCommerce -> Shop   |
| Cart        | EasyCommerce -> Cart   |
| My Account  | EasyCommerce -> Account - My Account |

The checkout page is reached automatically from the cart; it does not have its own menu item type. See [Menu Setup](menu-setup.md) for the full walkthrough.

## Step 6: Link Pages in Settings

Open **Settings -> Products** and map the menu items you just created:

| Setting         | Select               |
|-----------------|----------------------|
| Shop Page       | Your Shop menu item  |
| Cart Page       | Your Cart menu item  |
| Checkout Page   | The Joomla article or menu item that hosts checkout (typically left empty so the cart redirects internally) |
| My Account Page | Your My Account menu item |

Linking ensures add-to-cart buttons and redirect-after-purchase URLs resolve correctly.

## Step 7: Test the Storefront

1. Visit the **Shop** page on the frontend.
2. Add a product to the cart.
3. Proceed to checkout.
4. Complete a test order using Cash on Delivery or a sandbox gateway.

## You're Ready

For deeper configuration:

- [General Settings](../configuration/general-settings.md): store details, currency, checkout fields.
- [Product Settings](../configuration/product-settings.md): reviews, inventory, page links.
- [Payment Plugins](../payment-plugins/index.md): PayPal and Stripe setup.
- [Backend Guide](../backend-guide/index.md): managing products, orders, and customers.
