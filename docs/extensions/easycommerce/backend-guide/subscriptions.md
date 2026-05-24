---
id: subscriptions
title: Managing Subscriptions
sidebar_label: Subscriptions
sidebar_position: 7
---

# Managing Subscriptions

Monitor recurring billing, dunning, and lifecycle changes.

## Subscription List

### Stat Cards

| Metric | Description |
|--------|-------------|
| Active | Currently billing |
| On Hold | Awaiting payment retry |
| MRR | Monthly Recurring Revenue |
| ARR | Annual Recurring Revenue |

### Toolbar

| Control | Purpose |
|---------|---------|
| Search | Subscription number, customer name, customer email |
| Status tabs | All, Active, Trial, On Hold, Suspended, Pending Cancel, Cancelled, Expired |
| Filters | Product, creation date range |
| Recovery and Win-back | Open the dunning and recovery dashboard |

### Subscription Statuses

| Status | Description |
|--------|-------------|
| Pending | Awaiting first payment |
| Trial | In trial period, will convert to Active |
| Active | Billing on schedule |
| On Hold | Payment failed; dunning retry in progress |
| Suspended | Manually suspended; will not bill |
| Pending Cancel | Will cancel at the end of the current period |
| Cancelled | No longer billing |
| Expired | Reached scheduled end date |

## Bulk Actions

When subscriptions are selected:

- **Activate** sets selected rows to Active
- **Hold** sets selected rows to On Hold
- **Cancel** opens a confirmation that cancels every selected subscription

## Subscription Detail

Click a subscription to open the detail screen.

### Header Actions

The action set depends on current status:

| Action | Enabled When |
|--------|--------------|
| Pause | Active or Trial |
| Resume | On Hold |
| Cancel | Any non-terminal status |

Cancel offers two options: **Cancel Immediately** ends the subscription now, **Cancel at Period End** lets the current period finish and then transitions to Cancelled.

### Overview

| Field | Description |
|-------|-------------|
| Subscription Number | Unique identifier |
| Status | Current status badge |
| Product | Subscription product |
| Amount | Recurring amount per period |
| Billing Cycle | Period (day, week, month, year) and interval |
| Next Payment | Next scheduled charge date |
| Customer | Linked customer |

### Payment History

Per-charge history with date, amount, gateway transaction ID, and success or failure status.

### Related Orders

Orders generated from this subscription, with quick links to the order detail.

### Notes

Free-text notes scoped to the subscription. System notes log status transitions, dunning retries, and gateway events.

## Recovery and Win-back

The Recovery dashboard is opened from the **Recovery and Win-back** toolbar action. It surfaces dunning campaigns, recently churned customers, and reactivation candidates.

## Related

- [Subscription Settings](../configuration/subscription-settings.md)
- [PayPal Plugin](../payment-plugins/paypal.md)
- [Stripe Plugin](../payment-plugins/stripe.md)
