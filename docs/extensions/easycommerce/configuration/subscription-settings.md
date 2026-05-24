---
id: subscription-settings
title: Subscription Settings
sidebar_label: Subscriptions
sidebar_position: 7
---

# Subscription Settings

Configure subscription numbering, customer self-service, renewal reminders, payment failure handling, recovery defaults, and trial periods. The tab is split into six sub-sections: **Numbering**, **Customer Options**, **Renewals & Reminders**, **Failed Payments**, **Recovery & Win-back**, and **Trial Periods**.

**Location:** Settings > Subscriptions

## Numbering

| Field | Description | Default |
|-------|-------------|---------|
| `number_prefix` | Token substituted for `{PREFIX}` (up to 10 chars) | `SUB` |
| `number_format` | Pattern that generates subscription numbers | `{PREFIX}-{YEAR}{MONTH}-{SEQ}` |
| `sequence_padding` | Minimum digits in the sequence portion (3 to 7) | 5 |
| `sequence_reset` | When to reset the sequence: `never`, `yearly`, `monthly`, `daily` | `never` |
| `number_start` | Starting sequence value (useful when migrating from another system) | 1 |

The Numbering panel shows live stats (total subscriptions, current sequence, next sequence) and a live-rendered preview of the next subscription number. Switching the "Use custom format" toggle lets you type a free-form format string instead of picking from the preset list.

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
| `{SEQ}` | Sequence number padded to `sequence_padding` digits |
| `{SEQ:N}` | Sequence padded to exactly N digits |
| `{RANDOM:N}` | N random digits |
| `{CUSTOMER}` | Customer ID |

## Customer Options

| Field | Description | Default |
|-------|-------------|---------|
| `allow_pause` | Let customers pause an active subscription from the account area | Off |
| `allow_cancel` | Let customers cancel their own subscription | Off |
| `cancel_at_period_end` | When a customer cancels, schedule the cancellation for the end of the current billing period instead of immediately | Off |

## Renewals & Reminders

| Field | Description | Default |
|-------|-------------|---------|
| `renewal_reminder_days` | Send a renewal reminder this many days before the next charge (0 to 30; 0 disables) | 3 |

## Failed Payments

| Field | Description | Default |
|-------|-------------|---------|
| `failed_payment_retry_days` | Comma-separated list of days at which to retry a failed payment, for example `1,3,5` | `1,3,5` |
| `max_failed_attempts` | Cancel the subscription after this many consecutive failures (1 to 10) | 3 |

## Recovery & Win-back

| Field | Description | Default |
|-------|-------------|---------|
| `dunning_cadence_days` | Comma-separated, non-decreasing day offsets for dunning emails, for example `0,3,7`. First value is conventionally 0 (send immediately on failure). | `0,3,7` |
| `winback_discount_percent` | Default percent off applied to win-back coupons (1 to 90) | 20 |
| `winback_valid_days` | Number of days a win-back coupon stays valid (1 to 365) | 30 |
| `winback_usage_limit` | Maximum redemptions per win-back coupon (1 means single-use) | 1 |

Subscriptions already in the dunning workflow keep the cadence stored when they started. Cadence edits only affect new failures.

## Trial Periods

| Field | Description | Default |
|-------|-------------|---------|
| `default_trial_period` | Trial unit: `none`, `day`, `week`, or `month` | `none` |
| `default_trial_length` | Number of `default_trial_period` units for new subscription products | 7 |

The trial length field only renders when the period is something other than `none`. Per-product trial settings override these defaults.

## Subscription Statuses

Subscription state machine values surfaced throughout the admin:

| Status | Meaning |
|--------|---------|
| Pending | Awaiting the initial payment |
| Trial | In a free trial window |
| Active | Billing normally |
| Paused | Paused by customer or admin |
| On Hold | Renewal payment failed, dunning in progress |
| Pending Cancel | Active but scheduled to cancel at period end |
| Cancelled | Stopped billing |
| Expired | Reached a scheduled end date |

## Related Settings

- [Payment Settings](payment-settings.md) for gateways that support recurring charges
- [Email Settings](email-settings.md) for per-event notification toggles
