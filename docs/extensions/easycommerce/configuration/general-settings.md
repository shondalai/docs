---
id: general-settings
title: General Settings
sidebar_label: General
sidebar_position: 2
---

# General Settings

Configure store identity, currency, checkout fields, and the email sender. The tab is split into four sub-sections: **Store Details**, **Currency**, **Checkout**, and **Email**.

**Location:** Settings > General

## Store Information

| Field | Description |
|-------|-------------|
| `store_name` | Display name for invoices, emails, and the storefront |
| `store_url` | Public URL of the store |
| `store_phone` | Contact phone number |
| `admin_email` | Address that receives admin notifications |
| `store_logo` | Logo used on invoices and emails (PNG, JPG, SVG, or WebP up to 2 MB). Upload via drag-and-drop, file picker, or paste an existing media path. |

## Store Address

| Field | Description |
|-------|-------------|
| `store_address` | Street address line |
| `store_city` | City |
| `store_state` | State or province |
| `store_country` | Country picker with flag-based search |
| `store_postcode` | ZIP or postal code |

The store address is the "shop base" used for tax calculation when **Calculate Tax Based On** is set to **Shop base address**.

## Store Notice

| Field | Description |
|-------|-------------|
| `enable_store_notice` | Toggle a banner on storefront pages |
| `store_notice_text` | Message body shown in the banner (only saved when the toggle is on) |

## Currency

| Field | Description |
|-------|-------------|
| `currency` | ISO currency code. Built-in options: USD, EUR, GBP, JPY, AUD, CAD, CHF, INR. |
| `currency_position` | `left`, `right`, `left_space`, or `right_space` |
| `thousand_separator` | Single-character separator for thousands |
| `decimal_separator` | Single-character separator for the decimal place |
| `number_of_decimals` | Integer 0 to 8 |

The Currency sub-tab shows a live preview built from the four fields above.

### Format Examples

| Configuration | Output |
|---------------|--------|
| `left`, `.`, `,`, 2 decimals | `$1,234.56` |
| `right_space`, `,`, `.`, 2 decimals | `1.234,56 €` |
| `left_space`, `.`, `,`, 2 decimals | `$ 1,234.56` |

## Checkout

| Field | Description |
|-------|-------------|
| `enable_guest_checkout` | Allow ordering without an account |
| `checkout_require_phone` | Make the phone field mandatory |
| `checkout_require_company` | Make the company field mandatory |
| `checkout_require_tax_id` | Collect a tax/VAT ID |
| `checkout_require_address` | Require the primary address line (always enforced for physical goods) |
| `checkout_require_address_2` | Require the secondary address line |
| `enable_terms_and_conditions` | Show a terms checkbox at checkout |
| `terms_url` | Link target rendered on the terms checkbox label (only saved when terms are enabled). Leave blank for plain text. |

The settings UI does not expose dedicated "Terms Page" or "Privacy Policy Page" pickers on the General tab. Privacy policy linking lives on the [Accounts](account-settings.md) tab.

## Email Sender

| Field | Description |
|-------|-------------|
| `from_name` | Display name shown in customer inboxes |
| `from_email` | Address used as the From header on transactional mail |

Per-event toggles and template branding (header image, colors, footer text) are configured under [Email Settings](email-settings.md).

## Related Settings

- [Payment Settings](payment-settings.md)
- [Shipping Settings](shipping-settings.md)
- [Tax Settings](tax-settings.md)
