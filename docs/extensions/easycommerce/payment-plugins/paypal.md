---
id: paypal
title: PayPal Configuration
sidebar_label: PayPal
sidebar_position: 2
---

# PayPal Configuration

Complete guide to setting up PayPal payments and subscriptions for EasyCommerce. The plugin uses the PayPal Commerce Platform (Orders v2 + Subscriptions v1) and supports PayPal, PayPal Credit, Venmo, and card processing through PayPal.

## Prerequisites

1. A PayPal Business account.
2. REST API credentials from the [PayPal Developer Dashboard](https://developer.paypal.com).

## Getting API Credentials

### Step 1: Access the Developer Dashboard

1. Go to [developer.paypal.com](https://developer.paypal.com).
2. Log in with your PayPal account.
3. Open **Apps & Credentials**.

### Step 2: Create an App

1. Click **Create App**.
2. Enter an app name (for example, "My Store").
3. Select **Merchant** as the app type.
4. Click **Create App**.

### Step 3: Copy Credentials

Both Sandbox and Live environments expose a separate Client ID and Secret. Switch the tab in the dashboard to copy the matching pair.

## Enabling and Opening the Configuration

1. Open **EasyCommerce → Settings → Payments**.
2. Locate the **PayPal** card.
3. Toggle **Enabled** on. The **Configure** button is disabled until you do.
4. Click **Configure** to open the PayPal settings form.

## Configuration Sections

### 1. API Credentials

| Setting | Field name | Description |
|---------|-----------|-------------|
| Environment Mode | `mode` | `sandbox` (testing) or `live` (production). Required. |
| Sandbox Client ID | `sandbox_client_id` | Shown when `mode` = `sandbox`. |
| Sandbox Client Secret | `sandbox_client_secret` | Shown when `mode` = `sandbox`. Stored encrypted. |
| Live Client ID | `live_client_id` | Shown when `mode` = `live`. |
| Live Client Secret | `live_client_secret` | Shown when `mode` = `live`. Stored encrypted. |
| Merchant ID | `merchant_id` | Optional PayPal payer merchant ID. |

Switch to `live` only after thorough testing in `sandbox`. The plugin validates Client IDs match `^A[A-Z0-9-_]+$` and Secrets match `^E[A-Z0-9-_]+$`; mismatched values are rejected on save.

### 2. Payment Settings

| Setting | Field name | Description | Default |
|---------|-----------|-------------|---------|
| Brand Name | `brand_name` | Business name shown on PayPal pages. | (empty) |
| Payment Action | `payment_action` | `CAPTURE` (immediate) or `AUTHORIZE` (hold funds, capture later). | `CAPTURE` |
| Enable PayPal Credit | `enable_paypal_credit` | Offer PayPal Credit financing. | Yes |
| Enable Venmo | `enable_venmo` | Show Venmo option (US only). | Yes |

CAPTURE charges immediately. AUTHORIZE holds funds and lets an operator capture the payment later from the order screen; the admin Capture action funnels through the same `captureApprovedOrder` path the webhook uses, so the two paths cannot diverge.

### 3. Subscription & Recurring Billing

| Setting | Field name | Description | Default |
|---------|-----------|-------------|---------|
| Enable Subscriptions | `enable_subscriptions` | Allow recurring billing. | Yes |
| Default Trial Period | `trial_period_days` | Free trial days (0 to 365). | 0 |

PayPal does not support `cancel_at_period_end` natively. When EasyCommerce schedules a cancellation at period end, the plugin cancels on PayPal immediately and keeps the local subscription in `pending-cancel` until the period elapses.

### 4. Webhooks

| Setting | Field name | Description |
|---------|-----------|-------------|
| Webhook ID | `webhook_id` | Required for signature verification. |

**Webhook endpoint URL** (copy this into the PayPal Dashboard):

```
https://yoursite.com/index.php?option=com_easycommerce&task=webhook.paypal
```

The plugin refuses to process any webhook payload unless `webhook_id` is set and PayPal's verify-webhook-signature endpoint confirms the request. There is no fallback path.

#### Setting Up Webhooks in PayPal

1. Open the PayPal Developer Dashboard.
2. Go to **Apps & Credentials → your app → Webhooks**.
3. Click **Add Webhook**.
4. Enter the Webhook URL above.
5. Select these events (full list — see the legend below for which are critical):

   **One-off orders and captures:**
   - `CHECKOUT.ORDER.APPROVED`
   - `CHECKOUT.ORDER.COMPLETED`
   - `PAYMENT.CAPTURE.COMPLETED`
   - `PAYMENT.CAPTURE.DENIED`
   - `PAYMENT.CAPTURE.DECLINED`
   - `PAYMENT.CAPTURE.REFUNDED`
   - `PAYMENT.CAPTURE.REVERSED`
   - `PAYMENT.CAPTURE.PENDING`

   **Subscriptions (CRITICAL for recurring billing):**
   - `BILLING.SUBSCRIPTION.PAYMENT.COMPLETED` ★
   - `PAYMENT.SALE.COMPLETED` ★ (legacy v1 alias — keep both)
   - `BILLING.SUBSCRIPTION.PAYMENT.FAILED` ★
   - `BILLING.SUBSCRIPTION.CREATED`
   - `BILLING.SUBSCRIPTION.ACTIVATED`
   - `BILLING.SUBSCRIPTION.CANCELLED`
   - `BILLING.SUBSCRIPTION.EXPIRED`
   - `BILLING.SUBSCRIPTION.SUSPENDED`
   - `BILLING.SUBSCRIPTION.RE-ACTIVATED`

   **Disputes (optional but recommended):**
   - `CUSTOMER.DISPUTE.CREATED`
   - `CUSTOMER.DISPUTE.UPDATED`
   - `CUSTOMER.DISPUTE.RESOLVED`

6. Copy the generated **Webhook ID** back into the plugin settings.

:::danger Critical events for subscription renewals
The ★ events are the only signal PayPal sends that tells the plugin a recurring charge succeeded or failed. Without them subscribed:

- **`BILLING.SUBSCRIPTION.PAYMENT.COMPLETED`** missing → every renewal is collected on PayPal's side but no local renewal order materialises, the subscription doesn't advance, the customer's access doesn't extend.
- **`PAYMENT.SALE.COMPLETED`** missing → the legacy v1 webhook shape for the same event isn't caught. PayPal merchants on older Billing API contracts only receive this shape; modern merchants receive both. Subscribe to BOTH so the plugin works regardless of which shape PayPal sends.
- **`BILLING.SUBSCRIPTION.PAYMENT.FAILED`** missing → dunning never starts for failed renewal attempts; failed subscriptions stay in "active" status silently.

If you ever see this log line for an active subscription, the dashboard config is wrong:

```
PayPal subscription payment received but no event handler matched.
```
:::

:::tip v1 vs v2 PayPal Billing
PayPal has two parallel subscription billing shapes — the legacy v1 (Payouts/Billing Agreements, sends `PAYMENT.SALE.COMPLETED`) and v2 (Subscriptions API, sends `BILLING.SUBSCRIPTION.PAYMENT.COMPLETED`). The plugin handles both with the same handler; you should subscribe to both events so older billing-agreement subscriptions on the same merchant account continue to renew correctly.
:::

### 5. Advanced

| Setting | Field name | Description | Default |
|---------|-----------|-------------|---------|
| Disable Funding Sources | `disable_funding` | Hide specific funding sources (card, credit, venmo, sepa, bancontact, eps, giropay, ideal, mybank, p24, sofort). Multi-select. | None |
| Debug Mode | `debug_mode` | Log full API request/response payloads. | No |
| Log Level | `log_level` | `debug`, `info`, `warning`, `error`. | `error` |

:::warning
Debug logs may contain sensitive request data. Enable only while troubleshooting and disable when done.
:::

## Testing in Sandbox

### Test Accounts

Create personal (buyer) and business (merchant) accounts at [developer.paypal.com/developer/accounts](https://developer.paypal.com/developer/accounts).

### Test Card Numbers

| Card | Number |
|------|--------|
| Visa | 4012000077777777 |
| Mastercard | 5426064000424979 |
| Amex | 371449635392376 |

## Going Live

1. Switch **Environment Mode** to `live`.
2. Enter the Live Client ID and Live Client Secret.
3. Update the Webhook ID to the live-app webhook.
4. Place a small real purchase end-to-end.
5. Watch the logs for any signature or capture failures.

## Troubleshooting

### Payment Failed

| Error | Likely cause |
|-------|--------------|
| Invalid credentials | Client ID or Secret does not match current `mode`. |
| Currency not supported | Your PayPal account does not support the order currency. |
| 3D Secure failed | Customer's bank rejected the authentication. |

### Webhooks Not Working

1. Confirm the Webhook URL is reachable from the public internet.
2. Confirm `webhook_id` is set; without it the plugin refuses all webhook requests.
3. Confirm the event subscription list above matches the dashboard.
4. Check the EasyCommerce logs for `signature verification failed` entries.

### Subscription Renewals Not Updating the Local Subscription

Symptom: PayPal charges the customer's billing agreement on the renewal cycle, the money lands in your PayPal balance, but the EasyCommerce subscription doesn't advance, no renewal order appears in admin, the customer's downloads expire.

This happens when the webhook endpoint is **not subscribed to `BILLING.SUBSCRIPTION.PAYMENT.COMPLETED`** (v2) and/or **`PAYMENT.SALE.COMPLETED`** (v1). PayPal sent the renewal payment notification but the plugin never received the event that would have created the local renewal order.

**To fix:**

1. **PayPal Developer Dashboard → Apps & Credentials → your app → Webhooks → Edit** and add both `BILLING.SUBSCRIPTION.PAYMENT.COMPLETED` and `PAYMENT.SALE.COMPLETED` (subscribe to both regardless of which Billing API version your account uses — PayPal sometimes switches between them silently).
2. Save.
3. **Recover any already-affected customers** using the manual flow: **EasyCommerce → Subscriptions → open the affected subscription → "Create Renewal Order"**, then on that new pending order use **3-dot menu → "Mark as Paid"** and paste the PayPal transaction id from the original payment as the transaction reference. This produces the same end-state as a successful webhook would have.

### Migrated Subscription Renewals Are Dropped

If a subscription was migrated from an external platform (WooCommerce, manually re-keyed on PayPal, etc.) and never had its PayPal billing-agreement ID pasted in locally, the renewal webhook arrives but the gateway-id lookup fails. The log shows:

```
Recurring payment webhook received but no local subscription matches its gateway ID.
For migrated subscriptions, paste the PayPal billing-agreement ID into the
subscription's gateway_subscription_id field via the admin UI to enable auto-renewal.
```

**To fix:** open the local subscription in admin, find the PayPal billing-agreement ID (`I-xxx` for v1 or `sub_xxx` for v2) on the PayPal dashboard for that customer, and paste it into the subscription's `gateway_subscription_id` field. Future renewals will then auto-match and advance correctly.

### Manual Capture from Admin

For orders processed in AUTHORIZE mode, open the order in the admin and click **Capture payment**. The plugin reuses the same `PayPalWebhookService::captureApprovedOrder` path the webhook uses, so a successful manual capture and a webhook-driven capture produce identical state.
