---
id: stripe
title: Stripe Configuration
sidebar_label: Stripe
sidebar_position: 3
---

# Stripe Configuration

Complete guide to setting up Stripe payments and subscriptions for EasyCommerce. The plugin uses Stripe Payment Intents for one-time payments and Stripe Subscriptions for recurring billing, with 3D Secure, Apple Pay, and Google Pay support.

## Prerequisites

1. A Stripe account at [stripe.com](https://stripe.com).
2. API keys from the Stripe Dashboard.

## Getting API Keys

### Step 1: Access the Dashboard

1. Log in to [dashboard.stripe.com](https://dashboard.stripe.com).
2. Open **Developers → API keys**.

### Step 2: Copy Keys

| Key | Format | Purpose |
|-----|--------|---------|
| Publishable Key | `pk_test_...` or `pk_live_...` | Client-side (public, embedded in the storefront). |
| Secret Key | `sk_test_...` or `sk_live_...` | Server-side. Stored encrypted. |

Test keys contain `_test_`, live keys contain `_live_`. Never paste a live secret key into the test field.

## Enabling and Opening the Configuration

1. Open **EasyCommerce → Settings → Payments**.
2. Find the **Stripe** card.
3. Toggle **Enabled** on. The **Configure** button is disabled until you do.
4. Click **Configure** to open the Stripe settings form.

## Configuration Sections

### 1. API Credentials

| Setting | Field name | Description |
|---------|-----------|-------------|
| Environment Mode | `mode` | `test` or `live`. Required. |
| Test Publishable Key | `test_publishable_key` | Shown when `mode` = `test`. |
| Test Secret Key | `test_secret_key` | Shown when `mode` = `test`. Stored encrypted. |
| Live Publishable Key | `live_publishable_key` | Shown when `mode` = `live`. |
| Live Secret Key | `live_secret_key` | Shown when `mode` = `live`. Stored encrypted. |

The `showon` rules hide whichever pair does not match the current mode, so only the active environment's fields appear.

### 2. Payment Settings

| Setting | Field name | Description | Default |
|---------|-----------|-------------|---------|
| Payment Description | `payment_description` | Description sent to Stripe per charge. Supports `{order_number}`. | `Payment for Order #{order_number}` |
| Capture Method | `capture_method` | `automatic` (charge immediately) or `manual` (authorize, capture later). | `automatic` |
| Enable 3D Secure | `enable_3ds` | Strong customer authentication when required. | Yes |
| Enable Apple Pay | `enable_apple_pay` | Accept Apple Pay. Requires domain verification. | Yes |
| Enable Google Pay | `enable_google_pay` | Accept Google Pay. | Yes |

3D Secure prompts are driven by Stripe Radar and card-issuer rules; the toggle controls whether the plugin will surface a `requires_action` step in checkout.

### 3. Subscription & Recurring Billing

| Setting | Field name | Description | Default |
|---------|-----------|-------------|---------|
| Enable Subscriptions | `enable_subscriptions` | Support recurring billing. | Yes |
| Default Trial Period | `trial_period_days` | Free trial days (0 to 365). | 0 |
| Proration Behavior | `proration_behavior` | `create_prorations`, `none`, or `always_invoice`. | `create_prorations` |

### 4. Webhooks

| Setting | Field name | Description |
|---------|-----------|-------------|
| Webhook Signing Secret | `webhook_secret` | From the Stripe Dashboard. Stored encrypted. Required. |

**Webhook endpoint URL** (copy this into the Stripe Dashboard):

```
https://yoursite.com/index.php?option=com_easycommerce&task=webhook.stripe
```

The plugin refuses any webhook payload without a configured `webhook_secret` AND a `Stripe-Signature` header that verifies. There is no fail-open path.

The plugin also cross-checks the PaymentIntent's `amount` and `currency` against the local order before marking it paid; mismatches are logged and rejected.

#### Setting Up Webhooks in Stripe

1. Open the Stripe Dashboard.
2. Go to **Developers → Webhooks**.
3. Click **Add endpoint**.
4. Enter the Webhook URL above.
5. Select these events (full list — see the legend below for which are critical):

   **One-off payments:**
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `payment_intent.canceled`
   - `charge.succeeded`
   - `charge.failed`
   - `charge.refunded`

   **Subscriptions (CRITICAL for recurring billing):**
   - `invoice.payment_succeeded` ★
   - `invoice.payment_failed` ★
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `customer.subscription.trial_will_end`

6. Click **Add endpoint**.
7. Copy the endpoint's **Signing secret** back into the plugin's `webhook_secret` field.

:::danger Critical events for subscription renewals
The ★ events (`invoice.payment_succeeded` and `invoice.payment_failed`) are the only signal Stripe sends that carries the subscription context for a recurring charge. If your endpoint isn't subscribed to them, **every renewal payment will be collected by Stripe but never recorded locally** — your customer is billed but their access doesn't extend, and your admin panel shows no renewal order.

`payment_intent.succeeded` and `charge.succeeded` also fire on each renewal, but they don't carry the subscription ID. The plugin tries a defensive Stripe-customer-id fallback when it sees these without an invoice linkage, but the canonical path is `invoice.payment_succeeded`. If you ever see this log line, the dashboard config is wrong:

```
[Stripe Webhook] payment_intent.succeeded fallback: FALLBACK recovered renewal via Stripe-customer match...
```
:::

:::tip Stripe API version
The plugin handles both legacy (`invoice.subscription`) and the March 2025 Stripe API (`invoice.parent.subscription_details.subscription`) shapes for locating the gateway subscription id. No action required when Stripe migrates your account to a new API version — the handler probes both locations.
:::

### 5. Advanced

| Setting | Field name | Description | Default |
|---------|-----------|-------------|---------|
| Statement Descriptor | `statement_descriptor` | Text on card statements (max 22 chars). | (empty) |
| Debug Mode | `debug_mode` | Log full API request/response payloads. | No |
| Log Level | `log_level` | `debug`, `info`, `warning`, `error`. | `error` |

## Apple Pay and Google Pay

### Requirements

**Apple Pay:**

- Domain verification in the Stripe Dashboard.
- HTTPS required.
- Customer on Safari or an iOS device.

**Google Pay:**

- No extra setup. Works on Chrome and Android.

### Domain Verification (Apple Pay)

1. Open **Stripe Dashboard → Settings → Payment methods → Apple Pay**.
2. Click **Add new domain**.
3. Enter your domain.
4. Download the verification file.
5. Upload it to `yoursite.com/.well-known/apple-developer-merchantid-domain-association`.

## Testing in Test Mode

### Test Card Numbers

| Scenario | Card Number |
|----------|-------------|
| Successful payment | 4242 4242 4242 4242 |
| Declined | 4000 0000 0000 0002 |
| Requires 3D Secure | 4000 0027 6000 3184 |
| Insufficient funds | 4000 0000 0000 9995 |

Test card details:

- Expiry: any future date
- CVC: any 3 digits
- ZIP: any 5 digits

## Going Live

1. Switch **Environment Mode** to `live`.
2. Enter the live Publishable Key and Secret Key.
3. Replace `webhook_secret` with the live endpoint's signing secret.
4. Place a small real purchase end-to-end.
5. Verify webhooks deliver under **Stripe Dashboard → Developers → Webhooks**.

## Troubleshooting

### Payment Failed

| Error | Likely cause |
|-------|--------------|
| Invalid API key | Key does not match current `mode` (test vs. live). |
| Card declined | Customer must contact their bank. |
| 3D Secure failed | Authentication challenge was abandoned or rejected. |

### Webhooks Not Firing

1. Confirm the endpoint URL is reachable from the public internet.
2. Confirm `webhook_secret` is set; without it the plugin refuses all webhook requests.
3. Open **Stripe Dashboard → Webhooks → your endpoint → Recent deliveries** and inspect the response body for the rejection reason.
4. Confirm your server returns 2xx within 30 seconds.

### Subscription Renewals Not Updating the Local Subscription

Symptom: Stripe charges the customer's card successfully on the renewal cycle, but the EasyCommerce subscription doesn't advance, no renewal order appears in admin, the customer's downloads expire. The plugin log shows entries like:

```
[Stripe Webhook] No order ID in payment intent metadata
[Stripe Webhook] No order found for payment intent: pi_xxx
```

This happens when the webhook endpoint is **not subscribed to `invoice.payment_succeeded`**. Stripe delivers only the lower-level `payment_intent.succeeded` and `charge.succeeded` events, neither of which carries the subscription ID — the plugin has no way to know which local subscription the payment belongs to.

**To fix:**

1. **Stripe Dashboard → Developers → Webhooks → your endpoint → "Listen to events"** and add `invoice.payment_succeeded` AND `invoice.payment_failed`. Save.
2. To verify, return to the endpoint view and confirm both events appear in the "Listening to" list.
3. **Recover any already-affected customers** using the manual flow: **EasyCommerce → Subscriptions → open the affected subscription → "Create Renewal Order"**, then on that new pending order use **3-dot menu → "Mark as Paid"** and paste the Stripe `pi_xxx` from the failed event as the transaction id. This produces the same end-state as a successful webhook would have.

After fixing the dashboard config, subsequent renewals will deliver the canonical event. To confirm the healthy path is running, look for this log line on the next renewal:

```
[Stripe Webhook] Processing webhook event: invoice.payment_succeeded
Subscription renewal recorded from Stripe invoice webhook (subscription_id=X, ...)
```

### Subscription Renewal Logs Show "FALLBACK recovered renewal via Stripe-customer match"

The defensive fallback fired because `invoice.payment_succeeded` did not reach the handler. The renewal was recovered (the customer got their access), but the dashboard config is still wrong. Re-check the events list as above. The fallback is a safety net, not the canonical path.

### Migrated Subscription Renewals Are Dropped

If a subscription was created outside EasyCommerce (e.g. migrated from WooCommerce) and never had its Stripe subscription ID pasted in locally, `invoice.payment_succeeded` arrives but the gateway-id lookup fails. The log shows:

```
invoice.payment_succeeded received but no local subscription matches its gateway ID.
For migrated subscriptions, paste the Stripe subscription ID (sub_xxx) into the
subscription's gateway_subscription_id field via the admin UI to enable auto-renewal.
```

**To fix:** open the local subscription in admin, find the Stripe subscription ID (`sub_xxx`) in your Stripe Dashboard, and paste it into the subscription's `gateway_subscription_id` field. The Stripe-customer-id fallback will catch the *current* renewal if the customer mapping is intact, but future renewals deserve the proper linkage.

### Apple Pay Not Showing

1. Confirm the domain is registered in Stripe.
2. Confirm the verification file is reachable at the well-known path.
3. Test on Safari/iOS only.
4. HTTPS is required.

### "PaymentIntent amount mismatch" in logs

The PaymentIntent's `amount` does not match the order total. This usually means the order total changed (coupon, address-driven tax) after the intent was created. Recreate the intent by restarting checkout.
