---
id: sample-data
title: Demo Store Sample Data
sidebar_label: Sample Data
sidebar_position: 3
---

# Demo Store Sample Data

Every Studio template ships with a one-click demo store that shows the template exactly as it appears on the product page. It builds a themed catalog, a storefront menu and matching template styling in three quick steps.

## What you get

Each template installs its own complete demo store identity, with a fitting store name, product range, preset, announcement bar, hero copy, story block, footer columns and social links:

| Template   | Demo store       | What it sells                        |
|------------|------------------|--------------------------------------|
| Forge      | Forge Works      | Workshop-grade hand tools            |
| Pulse      | Pulse Supply     | Activewear and street-ready basics   |
| Kaffa      | Kaffa Roasters   | Specialty coffee                     |
| Meridian   | Meridian Living  | Handmade homeware                    |
| Basket     | Basket           | Everyday superstore range            |
| Mercantile | Mercantile & Co  | Curated everyday goods               |

Any other templates that will be released in the future.

## Before you start

:::warning EasyCommerce is required for the catalog step
Step 1 builds the store catalog inside EasyCommerce. If EasyCommerce is not installed and enabled, that step is skipped with a notice and you get no products. Install EasyCommerce first if you want the full demo.
:::

The sample data is additive. As the installer itself puts it, it is safe to run on an existing store: "it only adds content". It does not delete or overwrite any products, categories or menus you already have.

:::note Step 3 restyles your template
The final step applies the demo's branding, preset, hero, story and footer to your template style. If you have already customised the template, running the sample data will replace those style settings with the demo look. Run it before you customise, not after.
:::

## Running the sample data

1. Go to the administrator **Home Dashboard**.
2. Find the **Sample Data** module and locate your template's demo store entry, for example "Meridian Living demo store".
3. Start the installation. The module runs three steps in order and reports each result:

| Step | What it does                                                                          |
|------|----------------------------------------------------------------------------------------|
| 1    | Creates the store catalog: EasyCommerce categories, products and imagery               |
| 2    | Creates a storefront menu and sets it as the site home                                 |
| 3    | Configures the template style to match the demo: brand, preset, hero, story and footer |

When the steps finish, open your site front end. You should see the complete demo store with the template's signature look.

:::tip Sample Data module not visible?
The Sample Data module lives on the administrator Home Dashboard by default. If you cannot see it, check that the module is published under **Content → Administrator Modules**.
:::

## Undoing the sample data

There is no automated undo. If you want to remove the demo content later, take it out manually:

1. Delete the demo categories and products in EasyCommerce.
2. Delete the demo storefront menu and its menu items under **Menus**, and set your preferred menu item as the site home.
3. Open your template style in **System → Site Template Styles** and set your own brand, preset and footer. See [Quick Setup](quick-setup.md).
