---
id: payment-plugins
title: Build a payment integration
sidebar_label: Payment plugins
---

A payment integration creates a checkout with a provider, verifies the result, and tells EasyCommerce when payment has actually succeeded. The browser starts that process, but it must never decide whether an order is paid.

Read [Getting started](./getting-started.md) for the Joomla plugin package and [Configuration](./configuration.md) for settings and credentials. This guide explains the payment-specific contracts and the additional integration work required by the current checkout.

## Choose an integration approach

EasyCommerce has two payment implementations:

| Approach | Existing examples | Use it when |
| --- | --- | --- |
| Shared hosted checkout | Razorpay, Mollie, Square, Authorize.Net, PayFast, Mercado Pago, QuickPay, Redsys, eWAY | Customers pay on the provider's page and you need one-time payments. |
| Provider-specific plugin and checkout flow | Stripe and PayPal | The integration needs provider-specific checkout, subscription handling, or operations outside the shared hosted contract. |

Both use Joomla's `easycommerce` plugin group. The settings screen identifies payment plugins through `PaymentPluginInterface` and obtains their configuration through `ConfigurablePluginInterface`.

:::important Current extension boundary

The PHP interfaces are useful contracts, but installing a plugin for a completely new gateway is **not sufficient** to make it work throughout the current storefront. Hosted callbacks, browser checkout handling, outbound API hosts, and scheduled reconciliation contain explicit provider lists. A new gateway requires reviewed integration changes in those locations as well as its plugin. See [Registration points](#registration-points-for-a-new-hosted-gateway) below before planning a release.

:::

## Keep the plugin identity consistent

Use one lowercase code, such as `examplepay`, for the plugin element, gateway code, settings identifier, event filtering, and stored payment method. Changing this identity after orders exist breaks the relationship between those orders and their provider.

The current settings discovery also expects the extension-class convention used by the shipped plugins:

```text
plugins/easycommerce/examplepay/
  examplepay.xml
  services/provider.php
  src/Extension/Examplepay.php
  src/Service/ExamplepayAdapter.php
  language/en-GB/plg_easycommerce_examplepay.ini
  language/en-GB/plg_easycommerce_examplepay.sys.ini
```

Use namespace `Joomla\Plugin\EasyCommerce\Examplepay` in the manifest and `Joomla\Plugin\EasyCommerce\Examplepay\Extension\Examplepay` for the extension class. An arbitrary vendor namespace is not automatically recognized by the current settings discovery.

For a hosted integration, the extension class is small:

```php
<?php

namespace Joomla\Plugin\EasyCommerce\Examplepay\Extension;

defined('_JEXEC') or die;

use Joomla\Component\EasyCommerce\Administrator\Service\Payment\Hosted\GatewayAdapter;
use Joomla\Component\EasyCommerce\Administrator\Service\Payment\Hosted\HostedPaymentPlugin;
use Joomla\Plugin\EasyCommerce\Examplepay\Service\ExamplepayAdapter;

final class Examplepay extends HostedPaymentPlugin
{
    protected function createAdapter(array $config): GatewayAdapter
    {
        return new ExamplepayAdapter($config);
    }
}
```

This is the wrapper only. `ExamplepayAdapter`, the provider protocol, and the registration points below still need implementation. Use the [Joomla service-provider pattern](./getting-started.md) to register `PluginInterface` and set the application. The Razorpay plugin is a concrete reference for wiring the shared logging service into a hosted plugin.

Do not contact the provider in a constructor, `code()`, `name()`, or `fields()`. EasyCommerce calls these while discovering plugins and rendering settings, sometimes with an empty configuration array.

## Implement the hosted adapter

Extend `Joomla\Component\EasyCommerce\Administrator\Service\Payment\Hosted\GatewayAdapter`.

| Method | Responsibility |
| --- | --- |
| `code(): string` | Return the stable gateway code. |
| `name(): string` | Return the provider's display name. |
| `fields(): array` | Describe configuration fields using language keys. |
| `checkoutHosts(): array` | Return exact allowed HTTPS checkout authorities. |
| `create(array $context): array` | Create a checkout using the reserved, server-owned payment context. |
| `verify(array $attempt, array $request): array` | Authenticate provider evidence and return a normalized payment result. |

Override these methods where needed:

| Method | Default and guidance |
| --- | --- |
| `validateConfiguration(): array` | Returns no errors. Add credential, account and environment validation. Return `field => language key`. |
| `validateCheckoutConfiguration(): array` | Calls the general validator. Keep new-checkout policy separate from the credentials needed to verify older payments. |
| `supportsCurrency(string $currency): bool` | Accepts all currencies by default. Override this with the provider's actual supported currencies. |
| `webhookReference(array $request): string` | Reads `query.reference`. Override when the provider places the local reference elsewhere. This is a routing hint, not proof of payment. |
| `supportsRefunds(): bool` | Returns `false`. Enable only when `refund()` is implemented and tested. |
| `canRestart(array $attempt): bool` | Returns `false`. Return `true` only after an authenticated provider read proves that the old checkout cannot collect payment. |

### Configuration fields

Hosted adapter fields use language keys; `HostedPaymentPlugin` translates them for the settings UI. For example, the body of `fields()` can return:

```php
return [
    [
        'name' => 'mode',
        'type' => 'select',
        'label' => 'PLG_EASYCOMMERCE_EXAMPLEPAY_MODE',
        'required' => true,
        'default' => 'sandbox',
        'options' => [
            ['value' => 'sandbox', 'label' => 'PLG_EASYCOMMERCE_EXAMPLEPAY_SANDBOX'],
            ['value' => 'live', 'label' => 'PLG_EASYCOMMERCE_EXAMPLEPAY_LIVE'],
        ],
    ],
    [
        'name' => 'api_secret',
        'type' => 'password',
        'label' => 'PLG_EASYCOMMERCE_EXAMPLEPAY_API_SECRET',
        'required' => true,
        'encrypted' => true,
    ],
];
```

Add the corresponding keys to the plugin language files. Use `encrypted: true` for credentials. The settings screen keeps encrypted fields write-only; do not expose them through `publicConfiguration()` or a payment-method response.

The hosted base computes an account fingerprint from the active configuration. Fields participate unless marked `account_binding => false`. Only exclude display or pricing preferences that cannot change the merchant account. API credentials, account identifiers and environment must remain bound to the payment attempt.

See [Configuration](./configuration.md) for conditional fields and validation. Do not read credentials from request parameters or depend on settings copied into Joomla plugin `params`.

### Create a checkout

`HostedPaymentService` reloads the saved order, checks that it can be paid, locks its payment work, and reserves an attempt before calling your adapter. The context includes:

| Key | Meaning |
| --- | --- |
| `reference` | Local reference: 12 decimal digits. Send it as provider metadata or merchant reference. |
| `idempotency_key` | Reserved UUID for this operation. Use it with the provider's idempotency mechanism. |
| `amount`, `minor_amount`, `currency` | Decimal major-unit string, exact integer minor-unit amount, and uppercase currency code. |
| `order_number` | Display reference, not a replacement for the local attempt reference. |
| `return_url`, `cancel_url` | Storefront return destinations created by the service. |
| `notify_url`, `webhook_url` | Per-attempt notification URL and global gateway notification URL. |
| `email`, `first_name`, `last_name` | Customer details supplied by the saved order context. Send only what the provider needs. |

Use these amounts unchanged. Never create a charge from a total submitted by the browser. Use `PaymentRules::minor()` and `PaymentRules::decimal()` when converting provider amounts; they account for zero-, two- and three-decimal currencies and reject excess precision.

After validating the provider response, return one of these shapes:

```php
// Redirect checkout; illustrative values, not a real provider endpoint.
return [
    'id' => 'checkout_123',
    'redirect_url' => 'https://checkout.example.com/session/123',
];
```

```php
// Providers that require a browser form POST.
return [
    'id' => 'checkout_123',
    'form' => [
        'action' => 'https://checkout.example.com/pay',
        'fields' => [
            'checkout_id' => 'checkout_123',
            'signature' => 'provider-defined-checkout-signature',
        ],
    ],
];
```

Declare `checkout.example.com` in `checkoutHosts()` for this illustrative response. Production values must be the provider's exact hosts. Form fields must be bounded scalar values. Return a structured descriptor, not HTML or JavaScript.

The service retains the create result privately as `attempt['session']`. Include the provider identifiers needed for later verification, but never credentials or an entire raw API response. Only validated checkout fields are projected to the browser.

### Verify callbacks and webhooks

`verify()` receives the saved attempt and a request envelope containing `payload`, lowercase `headers`, `query`, `post`, `url`, `method`, `webhook`, and `remote_addr`. `payload` is the original request body. `remote_addr` is the immediate peer, not an automatically trusted forwarded address.

Before returning success:

1. Authenticate the notification using the provider's documented signature protocol, or fetch the resource with authenticated server credentials. Some providers require both.
2. Bind it to the merchant account and test/live environment used for the original attempt.
3. Match provider checkout, order or payment identifiers against the stored session.
4. Check the payment reference, amount and currency. Map only a settled/captured success to `paid`.

Return a normalized result after those checks:

```php
// Shape returned only after authenticating and binding a provider response.
return [
    'reference' => $attempt['reference'],
    'transaction_id' => $verifiedTransactionId,
    'amount' => $verifiedAmount,
    'currency' => $verifiedCurrency,
    'status' => 'paid', // Or 'pending' / 'failed', based on provider state.
];
```

The `$verified...` variables represent values obtained from the authenticated response. Do not fill them from unverified query parameters. The shared service checks the returned evidence against the reserved amount, currency and reference before fulfilling the order.

A customer returning to the success URL is not evidence of payment. Likewise, a cancel button or elapsed timeout does not prove that a payment failed. If a create request times out after the provider accepted it, preserve that uncertain attempt and reconcile it rather than creating another charge.

The shared service preserves a verified transaction before order fulfillment. Repeated callbacks can finish interrupted local work without deliberately creating another payment. Your provider logic must also normalize different events for the same payment to a consistent transaction identity. This matters when a provider sends both a payment event and an invoice event.

## Registration points for a new hosted gateway

The paths below are relative to the `easycommerce/` source repository. Review them as part of adding a provider; do not simply remove their allowlists.

| Location | Required integration work |
| --- | --- |
| `com_easycommerce/site/src/Controller/HostedpaymentController.php` | Register the gateway in `GATEWAYS` for `hostedpayment.notify`, `hostedpayment.complete` and `hostedpayment.status`. The controller boots the matching hosted plugin. |
| `react-app/src/site/utils/hosted-payment.ts` | Register it in `hostedPaymentMethods`. The browser validates the gateway identity, HTTPS destination, allowed hosts and form descriptor. |
| `com_easycommerce/admin/src/Service/Payment/Hosted/GatewayHttpClient.php` | Register the provider API hosts if using the shared HTTP client. `checkoutHosts()` does not authorize outbound API calls. |
| `com_easycommerce/admin/src/Service/Payment/Hosted/HostedPaymentService.php` | Review the explicit reconciliation gateway list before enabling polling. |
| `com_easycommerce/admin/src/Service/Payment/Hosted/HostedPaymentReconciler.php` | Include a verified, pollable provider in the scheduler's candidate selection. |
| `com_easycommerce/admin/src/Service/Payment/Hosted/HostedPaymentLogger.php` | Review the diagnostic gateway and host rules so safe provider diagnostics are retained. |

The base adapter's `request()` uses the shared HTTP client unless a test transport callable is supplied. A provider-owned client needs the same protections: fixed trusted endpoints, TLS verification, timeouts, bounded responses and a controlled redirect policy. Never accept an API base URL from a checkout request.

## Country availability and currency pricing

EasyCommerce adds country availability fields to payment plugin settings:

```php
[
    'availability_mode' => 'include', // 'all', 'include' or 'exclude'
    'availability_countries' => ['IN'],
]
```

Payment availability uses the customer's billing country. A restricted method is unavailable when the country is missing or invalid. Do not replace this with an IP address, browser language, or a browser-only visibility check.

The shared `checkout_currency` field selects the gateway's pricing currency. An empty value uses the store currency. For example, a store can price an ebook at USD 20 and INR 1999 and select INR for a gateway that requires it. Checkout must use complete, server-calculated prices in one currency; it does not apply a current exchange rate in the adapter.

If the cart cannot be priced in the requested currency, the quote marks that gateway unavailable and provides default-currency totals so the customer can choose another gateway. Alternate-currency checkout requires the signed pricing acceptance token produced by `CheckoutPricingService`.

There are deliberate limits in the current totals service: alternate fixed prices do not support subscription billing or carts requiring shipping. Fixed-amount coupons, currency-bound coupon limits and custom fees also need compatible currency data. Do not bypass these checks in a payment plugin. See `CheckoutPricingService` and `OrderTotalsService` when integrating a custom checkout.

For saved orders and refunds, use the stored currency and original amounts, even if store prices or gateway settings have since changed.

## Refunds and financial reporting

A hosted adapter enables refunds by overriding `supportsRefunds()` and implementing:

```php
public function refund(
    array $attempt,
    string $amount,
    string $reason,
    string $idempotencyKey
): array
```

The method declaration above is a contract excerpt, not a complete implementation. The expected verified result is:

```php
return [
    'refund_id' => $verifiedRefundId,
    'amount' => $verifiedRefundAmount,
    'currency' => $verifiedRefundCurrency,
    'status' => 'completed', // 'pending' is not a completed refund.
];
```

The shared service reserves the refund before sending it, checks the amount and currency, and keeps uncertain operations for reconciliation. Reuse the supplied idempotency key. Never report success merely because the provider accepted a request, and never retry an unknown result with a fresh key.

Provider processing fees are different from customer-facing checkout surcharges. Record the actual provider fee with its currency and payment evidence. Do not subtract an INR fee directly from a USD order total or assume an unavailable fee is zero.

The current hosted financial projection accepts optional authenticated evidence shaped like this:

```php
'fee_evidence' => [
    'amount' => '60.00',
    'currency' => 'INR',
    'base_amount' => '1999.00',
    'base_currency' => 'INR',
]
```

Here `base_amount` is the provider's gross amount in the same settlement currency as the fee. `PaymentFinancialEvidence` projects it to the order currency using the captured amounts and retains settlement metadata. It does not fetch today's exchange rate.

**Current limitation:** that helper currently writes `source: razorpay_payment`. It was implemented for Razorpay evidence; a different provider must review and extend provenance handling before reusing this fee path. Stripe and PayPal have their own financial-evidence handling. Always test order details and reports as well as payment success.

## Provider-specific payments and subscriptions

`PaymentPluginInterface` defines initialization, processing, capture, refund, void and subscription methods, but declaring the interface does not implement their behavior. Stripe and PayPal additionally subscribe to typed events such as `GetPaymentMethodsEvent`, `InitializePaymentEvent`, `ProcessPaymentEvent`, `RefundPaymentEvent` and `HandleWebhookEvent`. See the [event reference](./event-reference.md).

Filter every event by the selected payment method or gateway before constructing an API client or making a request. Advertise only implemented capabilities through `supportsFeature()` and the method's `supports` data. Return a clear unsupported result for operations you do not provide.

The existing webhook routes are `task=webhook.stripe` and `task=webhook.paypal`. `WebhookController` exposes those two methods; there is no generic `payment.webhook` endpoint for a new code. A custom integration also needs its authorized endpoints and storefront behavior connected. The interface alone does not add a card form or redirect behavior to checkout.

The shared hosted base supports one-time payment and optional refunds, not a recurring billing mandate. Its normal checkout checks reject subscription orders; overriding a capability flag is insufficient to add recurring billing. A subscription integration must cover initial payment, renewal identity, cancellations, pauses, failure/recovery, period dates, refunds and reconciliation. Use the Stripe and PayPal service layers as references, including how verified renewal evidence is passed to EasyCommerce's subscription services. Never extend access from an unsigned callback or create two renewal orders for two events describing the same payment.

## Validate before shipping

Run provider sandbox tests and automated tests with a deterministic transport. The adapter constructor accepts a transport callable with `(method, url, headers, body)` that returns a decoded response array, allowing malformed responses and timeouts to be tested without charging anyone.

At minimum, check:

- New checkout, resumed checkout and repeated Place Order requests use the intended attempt.
- A wrong signature, merchant account, environment, reference, amount or currency cannot mark an order paid.
- A browser success URL without provider evidence grants no access.
- Duplicate and out-of-order events fulfill once, including concurrent requests.
- A timeout after remote creation or refund does not trigger a second operation.
- Full and partial refunds preserve the original currency and distinguish pending from completed.
- Restricted countries and unsupported currencies fail on the server as well as in the UI.
- Missing alternate prices fall back to another usable gateway without mixing currencies.
- Financial fees, fee currency, renewals and refunds produce correct order/report values.
- Logs identify the operation and local order safely without credentials, signatures, raw payment data or customer addresses.

Follow [Security and testing](./security-and-testing.md) for authorization, logging and release checks. A passing mocked adapter test is not evidence that a new gateway is connected to all checkout, callback and scheduler paths.

## Source map

Start with these files in the EasyCommerce source:

- `com_easycommerce/admin/src/Interface/PaymentPluginInterface.php`
- `com_easycommerce/admin/src/Service/Payment/Hosted/GatewayAdapter.php`
- `com_easycommerce/admin/src/Service/Payment/Hosted/HostedPaymentPlugin.php`
- `com_easycommerce/admin/src/Service/Payment/Hosted/HostedPaymentService.php`
- `com_easycommerce/admin/src/Service/Payment/Hosted/PaymentRules.php`
- `com_easycommerce/admin/src/Service/Pricing/CheckoutPricingService.php`
- `plugins/plg_easycommerce_razorpay/src/Service/RazorpayAdapter.php`
- `plugins/plg_easycommerce_stripe/src/Extension/Stripe.php`
- `plugins/plg_easycommerce_paypal/src/Extension/Paypal.php`

Check both the interface and its caller when adapting an example. The caller determines which fields are actually consumed and which operations are reachable.
