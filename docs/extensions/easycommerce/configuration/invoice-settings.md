---
id: invoice-settings
title: Invoice Settings
sidebar_label: Invoices
sidebar_position: 9
---

# Invoice Settings

Configure when invoices are generated, how they are numbered, which template renders the PDF, and how they are delivered. The tab is split into four sub-sections: **General**, **Numbering**, **Templates**, and **Delivery**.

**Location:** Settings > Invoices

## General

| Field | Description | Default |
|-------|-------------|---------|
| `auto_generate_enabled` | Generate invoices automatically based on the trigger below | On |
| `generate_trigger` | Event that creates the invoice: `order_created`, `payment_complete`, `status_change`, or `manual` | `order_created` |
| `trigger_statuses` | Statuses that fire the invoice when the trigger is `status_change` (multi-select: pending, processing, on-hold, completed, cancelled, refunded, failed) | `completed`, `processing` |
| `pdf_renderer` | Preferred PDF engine: `auto`, `gotenberg`, `chrome`, or `dompdf` | `auto` |
| `gotenberg_url` | URL of the Gotenberg service, for example `http://gotenberg:3000`, used when `pdf_renderer` is `gotenberg` | empty |

The General sub-tab also shows a renderer status card so admins can see which engine the system is currently selecting.

## Numbering

| Field | Description | Default |
|-------|-------------|---------|
| `number_prefix` | Token substituted for `{PREFIX}` | `INV` |
| `number_format` | Pattern that generates invoice numbers | `{PREFIX}-{YEAR}{MONTH}-{SEQ}` |
| `sequence_padding` | Minimum digits in the sequence portion (3 to 7) | 5 |
| `sequence_reset` | When to reset the sequence: `never`, `yearly`, `monthly`, `daily` | `never` |
| `number_start` | Starting sequence value (useful when migrating from another system) | 1 |

The Numbering panel includes an invoice stats banner (total count, current sequence, next sequence) and a live preview powered by the same renderer the storefront uses.

### Format Placeholders

| Placeholder | Replacement |
|-------------|-------------|
| `{PREFIX}` | The `number_prefix` value |
| `{YEAR}` / `{YYYY}` | Four-digit year |
| `{YY}` | Two-digit year |
| `{MONTH}` / `{MM}` | Two-digit month |
| `{DAY}` / `{DD}` | Two-digit day |
| `{WEEK}` / `{WW}` | ISO week number |
| `{QUARTER}` / `{Q}` | Quarter, `Q1` through `Q4` |
| `{SEQ}` | Sequence padded to `sequence_padding` digits |
| `{SEQ:N}` | Sequence padded to exactly N digits |
| `{RANDOM:N}` | N random digits |
| `{ORDER}` | Order number |

## Templates

| Field | Description |
|-------|-------------|
| `template` | One of `premium`, `minimal`, or `detailed` |

| Template | Description |
|----------|-------------|
| `premium` | Swiss Spa design with elegant typography and full branding |
| `minimal` | Clean and simple, essentials only |
| `detailed` | Comprehensive layout including tax breakdown and terms |

Each template can be previewed in a modal and edited inline. Customizations are stored alongside the template selection and survive component upgrades.

### Business Information

These fields are surfaced in the templates and stored on invoice settings:

| Field | Description |
|-------|-------------|
| `company_name` | Legal business name; falls back to `store_name` when blank |
| `store_tax_id` | Tax / VAT registration number |
| `store_registration` | Business registration number |
| `terms_and_conditions` | Free-form text rendered as the invoice footer |

## Delivery

| Field | Description | Default |
|-------|-------------|---------|
| `auto_email_enabled` | Email the invoice to the customer when it is generated | On |
| `include_in_order_confirmation` | Attach the invoice PDF to the order confirmation email | Off |

## Standard Invoice Layout

Generated invoices include:

- Header: store logo, company name, address, invoice number, and invoice date
- Customer block: billing address, plus shipping address when different
- Line items: product name, SKU, quantity, unit price, line total
- Totals: subtotal, discounts, shipping, tax breakdown, grand total
- Footer: terms and conditions, "Computer-generated document" note, registration numbers

## Related Settings

- [General Settings](general-settings.md) for the store address and logo
- [Email Settings](email-settings.md) for invoice email branding
