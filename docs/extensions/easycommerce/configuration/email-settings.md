---
id: email-settings
title: Email Settings
sidebar_label: Emails
sidebar_position: 8
---

# Email Settings

Configure the email sender, branding applied to all templates, and per-event notification toggles. The tab also hosts the in-browser template editor and preview.

**Location:** Settings > Emails

## Sender & Branding

| Field | Description |
|-------|-------------|
| `email_from_name` | Name shown on the From header |
| `email_from_address` | Address used as the From sender |
| `email_header_image` | Logo or banner rendered at the top of branded templates |
| `email_header_title` | Optional header title text |
| `email_header_subtitle` | Optional header subtitle text |
| `email_footer_text` | Custom footer message added to all templates |
| `email_base_color` | Primary brand color, hex |
| `email_background_color` | Outer email background, hex |
| `email_body_background_color` | Content card background, hex |
| `email_text_color` | Body text color, hex |

Colors flow through the shared `base.html` wrapper so every transactional message picks up the same look.

## Customer Notification Toggles

### Order Lifecycle

| Field | Trigger |
|-------|---------|
| `order_confirmation_enabled` | Order placed |
| `order_status_update_enabled` | Order status changes |
| `order_status_update_statuses` | Multi-select of statuses that fire the status-update email (defaults to `processing`, `completed`) |
| `order_shipped_enabled` | Order marked as shipped |
| `order_delivered_enabled` | Order marked as delivered |
| `order_cancelled_enabled` | Order cancelled |
| `order_refunded_enabled` | Refund processed |

### Subscriptions

| Field | Trigger |
|-------|---------|
| `subscription_created_enabled` | New subscription |
| `subscription_renewed_enabled` | Successful renewal |
| `subscription_cancelled_enabled` | Subscription cancelled |
| `subscription_expiring_enabled` | Renewal reminder before expiration |
| `subscription_expired_enabled` | Subscription reached its scheduled end |
| `subscription_paused_enabled` | Subscription paused |
| `subscription_suspended_enabled` | Subscription suspended after dunning |
| `subscription_resumed_enabled` | Subscription resumed after a pause |
| `subscription_failed_enabled` | Renewal payment failed |

### Customer Touchpoints

| Field | Trigger |
|-------|---------|
| `customer_welcome_enabled` | Customer account created |
| `invoice_enabled` | Invoice generated |
| `download_ready_enabled` | Digital download made available |
| `review_approved_enabled` | Submitted review approved |
| `review_response_enabled` | Store replied to a review |
| `payment_link_enabled` | Admin sends a payment link |

### Admin Alerts

| Field | Trigger |
|-------|---------|
| `admin_new_order_enabled` | New order received |
| `admin_low_stock_enabled` | Product crossed the low-stock threshold |
| `admin_new_review_enabled` | New review submitted |

## Template Editor

Each template appears under one of five categories (Orders, Reviews, Subscriptions, Admin, System). From the row actions you can:

- **Preview** the template with sample data, scoped to the selected language.
- **Edit** the subject and body in the rich editor.
- **Send Test** to email yourself the rendered template.
- **Reset** the customizations and fall back to the bundled default.
- **Translate** the active template into another published Joomla language using the configured AI provider.

Templates support a wildcard `*` language tag for "default for all languages" and per-tag overrides for installed published languages.

## Common Email Variables

Brand variables (store name, store URL, base colors, header image, footer text) are injected automatically by the shared template wrapper. Common per-message variables include:

- `{{site_name}}`, `{{site_url}}`, `{{current_year}}`, `{{current_date}}`
- `{{order_number}}`, `{{order_date}}`, `{{order_total}}`, `{{customer_name}}`, `{{billing_address}}`, `{{shipping_address}}`
- `{{subscription_name}}`, `{{subscription_amount}}`, `{{next_billing_date}}`

The exact variable set depends on the template; the editor lists supported tokens beside each template.

## Troubleshooting

- **Mail not sending:** Joomla still owns SMTP delivery. Check **System > Global Configuration > Server > Mail Settings**.
- **Mail going to spam:** keep the From domain aligned with your store domain and publish SPF / DKIM / DMARC records.

## Related Settings

- [General Settings](general-settings.md)
- [Invoice Settings](invoice-settings.md)
