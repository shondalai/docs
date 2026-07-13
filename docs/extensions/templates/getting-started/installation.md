---
id: installation
title: Installation
sidebar_label: Installation
sidebar_position: 1
---

# Installation

Install a Shondalai Studio template on your Joomla site. Every template ships as a single package that carries the template plus everything it needs.

## Requirements

| Requirement  | Minimum                | Notes                                                                                     |
|--------------|------------------------|-------------------------------------------------------------------------------------------|
| Joomla       | 5.4 or later           | Joomla 6 is supported                                                                      |
| PHP          | 8.1 or later           | The installer stops with a clear message if the server is below the minimum               |
| EasyCommerce | Optional               | Needed for store features: the storefront home page, product sections and the demo store  |

:::note EasyCommerce is not bundled
The template package does not include EasyCommerce. The template works perfectly well without it. If you want the store features or the full demo store, install EasyCommerce first.
:::

## What the package installs

Uploading one template package installs six pieces in a single pass:

| Piece                          | Type      | What it does                                                              |
|--------------------------------|-----------|---------------------------------------------------------------------------|
| The template                   | Template  | The site template itself, for example Meridian or Forge                   |
| Template Studio framework      | Library   | The shared engine behind the Template Studio configuration app            |
| Template Studio system plugin  | Plugin    | Powers the live preview inside the Template Studio app                    |
| Shondalai License Manager      | Plugin    | Handles license activation and unlocks automatic update downloads         |
| Studio Pages                   | Component | A section-based page builder for landing and content pages                |
| Sample data plugin             | Plugin    | Builds the template's demo store from the admin Home Dashboard            |

:::tip One package, one update
All bundled pieces install together and update together. When a new version is released, Joomla's built-in updater updates the whole package in one step, so the template, the framework and the plugins never drift out of sync.
:::

## Install the package

1. Download the template package zip from your account at [shondalai.com](https://shondalai.com).
2. Log in to your Joomla administrator panel.
3. Go to **System → Install → Extensions**.
4. Open the **Upload Package File** tab.
5. Select the downloaded zip and click **Upload & Install**.

Joomla confirms the installation and lists the bundled extensions it registered.

## Make the template your site default

The template is installed but not yet active. To switch your site over:

1. Go to **System → Site Template Styles**.
2. Find the style for your new template.
3. Click the star in the **Default** column next to it, or tick its checkbox and click **Default** in the toolbar.

Your site front end now uses the new template. Open the same style whenever you want to configure it: the Template Studio app loads right on the style edit screen. See [Quick Setup](quick-setup.md) for a guided first run.

## Updates

Update notifications appear in **System → Update → Extensions** like any other Joomla extension. Downloading an update requires an activated license; see [License Activation](../licensing/activation.md). The template itself keeps working without a license.

## Uninstalling

Always uninstall the package, not the individual pieces:

1. Go to **System → Manage → Extensions**.
2. Search for the template name and filter **Type** to Package.
3. Select the package and click **Uninstall**.

Two safety guards protect shared pieces:

- The Template Studio framework library refuses to uninstall while other Studio templates on the site still need it. Joomla shows a message naming the templates that depend on it, and the library stays in place.
- Studio Pages refuses to uninstall while another Studio template is still installed, so the pages you built stay safe.

:::warning Removing your last Studio template
When you uninstall the only remaining Studio template package, the shared pieces are removed with it, including Studio Pages and every page you built with it. Back up your site first if you might want that content later.
:::
