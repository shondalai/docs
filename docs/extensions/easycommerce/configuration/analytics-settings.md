---
id: analytics-settings
title: Analytics Settings
sidebar_label: Analytics
sidebar_position: 12
---

# Analytics Settings

Configure tracking and conversion integrations.

**Location:** Settings > Analytics

## Google Analytics

| Field | Description | Default |
|-------|-------------|---------|
| `enable_google_analytics` | Inject the Google Analytics tag on storefront pages | Off |
| `google_analytics_id` | GA4 measurement ID (format `G-XXXXXXXXXX`) | empty |
| `enable_enhanced_ecommerce` | Emit GA4 ecommerce events (view_item, add_to_cart, begin_checkout, purchase) | Off |
| `anonymize_ip` | Anonymize visitor IP addresses for GDPR compliance | Off |
| `track_user_id` | Attach the logged-in customer ID to GA events | Off |

### Finding the Measurement ID

1. Open [analytics.google.com](https://analytics.google.com).
2. Open the property, then **Admin > Data Streams > Web**.
3. Copy the Measurement ID that starts with `G-`.

## Facebook Pixel

| Field | Description | Default |
|-------|-------------|---------|
| `enable_facebook_pixel` | Inject the Meta Pixel script | Off |
| `facebook_pixel_id` | Numeric Pixel ID | empty |

### Finding the Pixel ID

1. Open [business.facebook.com/events_manager](https://business.facebook.com/events_manager).
2. Select the Pixel.
3. Copy the numeric Pixel ID from the data source overview.

## Conversion Tracking

| Field | Description | Default |
|-------|-------------|---------|
| `enable_conversion_tracking` | Emit purchase-conversion events to enabled providers | Off |

## Storefront Events

When tracking is enabled and providers are configured, the storefront emits the following events. Names follow the GA4 spec; Meta Pixel receives equivalent standard events.

| Event | When |
|-------|------|
| `page_view` | Every page load |
| `view_item` | A product detail page is viewed |
| `add_to_cart` | A product is added to the cart |
| `remove_from_cart` | A line is removed from the cart |
| `begin_checkout` | The checkout flow starts |
| `purchase` | The order is completed |

## Privacy

Disclose tracking in your privacy policy. `anonymize_ip` truncates the last octet on the GA side, and `track_user_id` should remain off unless your consent flow explicitly covers it.

## Related Settings

- [Account Settings](account-settings.md) for the privacy policy page binding
