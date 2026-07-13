---
id: updates
title: Updates
sidebar_label: Updates
sidebar_position: 2
---

# Updates

Shondalai templates update through Joomla's standard extension updater. One update refreshes the whole template package in a single step.

## How updates arrive

Each template package registers its own update server on your site when you install it. From then on, new releases appear under **System → Update → Extensions**, exactly like any other Joomla extension.

Updates apply to the whole package at once, so everything stays in step:

| Included in every update | Role |
|--------------------------|------|
| The template | Your site's design and layouts |
| Template Studio framework | The shared library behind the Studio configuration app |
| Studio Pages | The page builder component |
| System plugins | Live preview and the License Manager |
| Sample data plugin | The demo store installer |

You never update these pieces individually, and you should not try to. Updating the package keeps every part on matching versions.

## How the license connects

After you activate a license on the **License** tab, the key is applied to the template's update site automatically. There is nothing to paste under **System → Update Sites** and no manual Download Key entry.

Without an active license, Joomla still checks the update server and shows that a new version exists, but the download itself is refused. Activate a license and the same update installs normally. See [License Activation](activation.md).

## Updating your template

1. Go to **System → Update → Extensions**.
2. Click **Check for Updates** in the toolbar.
3. Tick the template package in the list (it appears as a single package entry, for example `Meridian Template Package`).
4. Click **Update**.
5. Wait for the success message, then visit your site to confirm everything looks right.

You can also start from the template style itself: when an update is available, the **License** tab on **System → Site Template Styles → your style** shows **Update available** with an **Update now** link that takes you to the same updater screen.

:::tip Back up first
As with any extension update, take a site backup before updating, especially on a live store.
:::

## Version requirements

| Requirement | Minimum |
|-------------|---------|
| Joomla | 5.4, up to and including the 6.x series |
| PHP | 8.1 |

The installer checks these before it runs and stops with a clear message if your site is below the minimum.

:::tip Keep EasyCommerce in step
If your site runs EasyCommerce, update it around the same time as your template. The templates are designed against the current EasyCommerce release, and matching versions avoids styling or storefront surprises.
:::

## Troubleshooting

**An update should exist but Joomla does not show it**

1. Go to **System → Update → Extensions** and click **Check for Updates**.
2. If it still does not appear, click **Clear Cache** in the same toolbar to discard Joomla's cached update information, then check again.

**Joomla shows the update but the download fails**

1. Open **System → Site Template Styles → your style → License** tab.
2. Confirm the status is Active. If a banner reports the license as expired, suspended or out of seats, resolve that first in your shondalai.com account.
3. Click **Check now** to re-verify the license, then run the update again.

**The License tab says License Manager is not enabled**

Enable the Shondalai License Manager plugin under **System → Plugins**. Without it, activation and licensed downloads cannot work. See [License Activation](activation.md) for the steps.
