---
id: activation
title: License Activation
sidebar_label: Activation
sidebar_position: 1
---

# License Activation

Activate your Shondalai license to unlock automatic updates through Joomla's built-in updater. The template itself keeps working without a license.

## Where licensing lives

Licensing is managed inside the Template Studio app, on the template style you are using:

1. Go to **System → Site Template Styles**.
2. Open your template's style.
3. Select the **License** tab.

The tab is headed **License & Updates** and shows the current activation state for this site.

## What a license does

A license connects this site to your shondalai.com account so that update downloads are authorised automatically. To be clear about what it does and does not do:

| With an active license | Without a license |
|------------------------|-------------------|
| Automatic update downloads through **System → Update → Extensions** | The template, page builder and all features keep working normally |
| Renewal and support dates visible on the License tab | Joomla still shows that updates exist, but the download is refused |

:::note Nothing switches off
Your template never deactivates or loses features when a license is missing or expires. The only thing gated is downloading updates. See [Updates](updates.md) for how the update flow works.
:::

## Activating

The License tab offers two ways to activate. Use whichever suits you.

### Option 1: Connect your account

Sign in with your shondalai.com account and a covering license is found and activated for you.

1. On the **License** tab, find the **Connect your account** card.
2. Enter your **Username or email** and **Password** for shondalai.com.
3. Click **Activate**.
4. When a license on your account covers this template, it is activated and the message "License activated. Automatic updates are now enabled." appears.

If no license on the account covers this template, the tab tells you so. Check which product your license was purchased for in your shondalai.com account.

### Option 2: Enter a license key

Paste a key you already have.

1. Sign in to your account on shondalai.com and copy the license key for your template. Keys look like `XXXX-XXXX-XXXX-XXXX`.
2. On the **License** tab, find the **Enter a license key** card.
3. Paste the key into the **License key** field.
4. Click **Activate**.

:::tip Key stored but not activated
If the key is valid but this site could not be activated (for example, all domain seats are already in use), the key is kept on the site and the tab explains what went wrong. Free a seat in your account, then use **Check now** to try again.
:::

## The activated view

Once active, the License tab shows a status card with:

| Item | What it shows |
|------|---------------|
| Product | The licensed product name and an Active badge |
| License key | Your key, masked for safety (first and last four characters only) |
| Domain seats | Sites activated out of the seats your license allows, or Unlimited |
| Renews | The renewal date, or Lifetime if the license never expires |
| Support until | When your support period ends |
| Last checked | When the license was last verified with shondalai.com |

Below the card, an update panel shows **Up to date** or **Update available**, together with the installed and latest version numbers. When an update is available, an **Update now** link takes you straight to Joomla's extension updater.

## Managing the activation

Three controls sit at the bottom of the activated view:

| Control | What it does |
|---------|--------------|
| **Check now** | Re-verifies the license with shondalai.com straight away. Use this after renewing or freeing a seat |
| **Deactivate this site** | Frees this site's domain seat but keeps the key stored here, so you can re-activate later without pasting it again |
| **Disconnect** | Removes the key from this site entirely |

Both **Deactivate this site** and **Disconnect** ask you to click a second time to confirm. A **Manage in your account** link opens your shondalai.com account, where you can view seats and renewals across all your sites.

## Health notices

The License tab shows a banner when the license needs attention:

| Notice | Meaning |
|--------|---------|
| License expiring soon | 30 days or fewer remain. Renew to avoid interruption |
| License expired | Updates stop until you renew |
| License suspended | Renew or contact support to restore the license |
| License revoked | Updates and support are disabled for this key |
| All seats in use | Every activation seat is taken. Free one up or manage seats in your account |

Renewals and seat management are handled in your account at shondalai.com. The banner includes a **Renew** or **Manage seats** link that takes you there.

## "License Manager is not enabled"

Activation is handled by the Shondalai License Manager system plugin, which installs with the template package. If the License tab shows **License Manager is not enabled**, the plugin is missing or disabled.

1. Click **Open plugin manager** on the notice, or go to **System → Plugins**.
2. Search for `licensing` and enable **Shondalai - License Manager**.
3. Return to the template style and reload the License tab.

:::warning Shared plugin
The License Manager plugin is shared by all Shondalai extensions on your site, including EasyCommerce. Disabling it stops license checks and automatic update downloads for all of them, so leave it enabled.
:::
