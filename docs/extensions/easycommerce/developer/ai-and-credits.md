---
id: ai-and-credits
title: AI features and credit integrations
sidebar_label: AI and credits
---

There are two separate integration jobs: calling an AI service from a store, and selling usage credits for an AI platform. EasyCommerce includes examples of both. Choose the appropriate starting point before copying a plugin.

| Integration | Responsibility | Reference implementation |
| --- | --- | --- |
| EasyCommerce AI features | Generate drafts, summaries and answers using the store's connected AI account | `easycommerce/com_easycommerce/admin/src/Service/AI/` |
| EasyCommerce AI event plugin | Update the product search index after product changes | `easycommerce/plugins/plg_easycommerce_ai/` |
| AI scheduled tasks | Refresh narratives, review summaries and the search index | `easycommerce/plugins/plg_task_easycommerce_ai/` |
| AICore AI Credits plugin | Grant purchased usage and display the customer's balance and usage | `aicore/plugins/plg_easycommerce_aicredits/` |

The AI Credits plugin belongs to the **AICore package**. It is an example of a third-party application integrating with EasyCommerce through payment events, product tabs and account pages. It is not required simply to add an AI feature to an EasyCommerce store.

## Calling an AI service

Reuse `Shondalai\Library\Core\Service\Ai\AiServiceClient` through dependency injection. The shared client handles the connected account, authentication and the AICore response envelope. Do not put an AI credential in a React bundle or make the browser the authority for credit charges.

The usual flow is:

1. Authorize the Joomla user and the record they want to use.
2. Check the feature switch and connection.
3. Load the minimum required context from the server.
4. Call the service and inspect its completed response.
5. Validate the proposed fields, show a preview, and save only what the user accepts.

For example, `ProductContentService::generate()` returns a draft. Its separate `apply()` method saves accepted fields through the product service. Generating text does not itself update the product.

### Service names and switches

`AiCatalog` defines EasyCommerce's built-in service names:

| Service slug | Purpose |
| --- | --- |
| `ec_product_content` | Product descriptions, SEO fields, bullets, tags and image text |
| `ec_support_reply` | Draft a reply grounded in one order and store policies |
| `ec_store_narrative` | Explain the store's weekly figures |
| `ec_import_normalise` | Propose consistent import labels |
| `ec_storefront_assistant` | Answer questions about the signed-in shopper's own records |

Review summaries, screening, embeddings and email translation also use platform services. Do not redefine platform services under the same slug in your extension.

Built-in features require `ai.enabled`, the corresponding feature switch such as `ai.product_content_enabled`, and a connected account. `AiFeatureGate` enforces these checks on the server. Account credits and permission to invoke a particular AICore service are separate checks; a nonzero balance does not prove that a service is available.

`AiCatalog::FEATURES` is a fixed built-in list. A third-party service does not become available by passing an arbitrary feature name to `AiFeatureGate`. Give your extension its own configuration and permission checks, provision its service in AICore, and inject the shared client into your own service class.

### Structured requests and output

The client offers this non-streaming method:

```php
$response = $client->invoke(
    $slug,
    $params,
    $segments,
    ['output_mode' => 'structured', 'max_output_tokens' => 1200],
    $callOptions
);
```

`$params` must match the declared inputs of that specific AICore service. `$segments` is an optional ordered list of prompt segments. The result is either `AiServiceResponse` or `AiServiceRefusal`; it is not a bare model-generated JSON string.

Treat catalog titles, reviews, customer messages and imported content as untrusted data. The existing product service wraps such parameters using the shared `Untrusted::param()` helper or `['value' => $value, 'trust' => Untrusted::PARAM_TRUST]`. Preserve that trust boundary in the service definition too. A customer message must not become a system instruction.

Inspect `schemaValid()` and `output()` on a successful response. `schemaValid() === null` means validation was not reported; it does not mean the output passed. EasyCommerce's `AiOutputGuard::requireObject()` also rejects truncated output and requires an object-shaped result. Add feature-specific checks after schema validation: an order identifier, URL or product field still needs local authorization and validation.

For account assistance, filter records by the signed-in customer **before** sending context. Include timestamps, timezone and factual payment states when answering date or payment questions. Never let a name in the question select another customer's records, or let generated prose decide whether an order was paid.

## Streaming without accepting partial results

`AiServiceClient::invokeStream()` uses the structured invocation contract and returns `AiStreamResult`. Its event callback receives `(string $event, ?array $data)`. The protocol includes `open`, `delta`, `progress`, `heartbeat`, `done`, `error` and `end`.

Use deltas for provisional feedback only. Do not parse a growing JSON buffer and save fields from it. Require a successful terminal result, then validate the completed envelope.

This example assumes `$client` and `$logger` were injected, and `$slug`, `$params` and `$runId` were prepared by an authorized server action. The run ID must identify the same operation on a retry; a new user-requested generation gets a new ID.

```php
use Shondalai\Library\Core\Service\Ai\Request\AiCallOptions;

$policy = AiCallOptions::none()
    ->withDeadline(120)
    ->withIdempotencyKey(hash('sha256', 'acme-draft:' . $runId));

$result = $client->invokeStream(
    $slug,
    $params,
    [],
    ['output_mode' => 'structured', 'max_output_tokens' => 1200],
    static function (string $event, ?array $data): void {
        // A host controller may forward safe progress to its own SSE response.
        // This callback must not persist provisional model output.
    },
    $policy
);

if (!$result->isOk()) {
    $logger->warning('AI draft did not complete', [
        'reason' => $result->refusal()?->reasonKey(),
        'request_id' => $result->refusal()?->requestId(),
    ]);

    // Return a translated error from the controller; do not apply the draft.
    return;
}

$completion = $result->completion();
$draft = $completion?->output();

if ($completion?->schemaValid() !== true || !is_array($draft)
    || array_is_list($draft)
    || in_array($completion->finishReason(), ['length', 'max_tokens', 'content_filter'], true)) {
    return;
}

// Validate the expected fields and offer the draft for review.
```

Streaming from PHP to AICore does not automatically stream the browser response. The controller must send an appropriate SSE response, and the browser must consume it. EasyCommerce's AI controller and shared stream support demonstrate that additional layer. The shared client also has `withStreamObserver()` to scope streaming around a feature operation that normally calls `invoke()`.

PHP cURL streaming support is required. Configure web-server timeouts and buffering to permit the stream; streaming cannot bypass every proxy timeout. For larger batches, use the shared job API (`submitJob`, `jobStatus`, `jobResult`) rather than keeping one browser request open indefinitely. Product-content bulk generation demonstrates this pattern.

A connection closing after generation begins is not proof that nothing was charged. Preserve request IDs and idempotency keys. Do not automatically issue a new generation with a new key after an ambiguous disconnect. `AiStreamResult` can retain a completion alongside a refusal, including incomplete terminal framing or unsettled billing; inspect its state rather than treating any text as success.

## Selling AI credits through products

The `aicredits` plugin adds an AI Credits product tab. Its React component updates the normal product metadata, preserving other keys:

```json
{
  "aicredits": {
    "enabled": true,
    "amount": 10
  }
}
```

`enabled` selects products that grant usage. The optional positive `amount` specifies a fixed allowance in major currency units per purchased quantity. Without that override, the plugin uses stored order-line amounts, with fallbacks to subtotal and price times quantity. It does not use the current catalog price as the amount paid.

The grant handler reads the product's **current** `metadata.aicredits` configuration; checkout does not snapshot that configuration into the order item. Account for this when changing product allowances or replaying old fulfillment. For an integration that needs immutable entitlement rules, deliberately snapshot those rules at order creation and test renewal behavior.

The payment flow is:

1. Listen for `AfterOrderPaymentEvent` and return unless `getPaymentStatus()` is `paid`.
2. Resolve the normalized billing email from the persisted order.
3. Sum qualifying credit lines into one grant for that order.
4. Call AICore's ledger with `easycommerce_order_<order ID>` as the purchase key.

The actual ledger call is:

```php
$result = $ledger->recordGrant(
    $email,
    'easycommerce_order_' . $orderId,
    $integerLedgerUnits,
    $grantMetadata
);
```

Here `$ledger` is `Joomla\Component\AICore\Site\Service\CreditsService`. `recordGrant()` returns `credited: false` with `reason: already_processed` for an already recorded purchase. Use a stable purchase reference; a random key would grant credits again on replay. A separate integration should use its own reference prefix and must not grant the same purchase alongside the supplied plugin.

Money is converted to integer units using the order currency's decimal precision. That is **not currency exchange**. The ledger carries currency metadata but does not make unlike currencies equivalent. Establish a consistent allowance currency before supporting purchases in multiple currencies; do not treat INR minor units as USD minor units.

Both one-time packs and subscription renewals create non-expiring grants. Subscription dates describe billing; unused credits remain available until spent. Each separately paid renewal order has a separate purchase key.

### Refunds and failures need an explicit policy

The supplied AI Credits plugin subscribes to paid-order events. It does **not** automatically reverse grants on a refund, chargeback, cancellation or subscription expiration. There is no public `revokeGrant()` method in the current `CreditsService` contract.

If your product needs credit reversal, implement and test that ledger operation separately. Define how partial refunds, already-spent units and duplicate refund events behave. Do not simulate a refund by issuing a negative `recordGrant()` call; that method requires a positive grant.

The handler logs grant failures instead of failing an already paid checkout. Keep a reconciliation process for purchases that paid successfully but did not receive a grant. Replaying fulfillment should use the original purchase key and original entitlement terms. An event listener alone is not a durable retry queue.

## Showing a customer's usage

The plugin registers `MyAICreditsTab` at `/account/aicredits` through `getAccountMenuItems()`. Its account endpoints are:

| Action | Method | Response purpose |
| --- | --- | --- |
| `entitlements` | GET | Credit entitlements and purchase link |
| `summary` | GET | Balance and account usage summary |
| `usage` | GET | Paginated usage, with optional `service_type` filter |

They use the normal extension route, for example:

```text
index.php?option=com_easycommerce&task=extensions.plugin&pluginId=aicredits&action=summary
```

All three require authentication and derive the account email from Joomla's current identity on the server. They do not accept a caller-selected email to choose whose balance to read. `usage` bounds its page size to at most 200 records. Follow this ownership model for your own customer-facing integration.

See [plugin endpoints](./plugin-endpoints.md) for request handling, [UI extensions](./ui-extensions.md) for bundle registration, and [security and testing](./security-and-testing.md) for authorization checks.

## Source examples

- `easycommerce/com_easycommerce/admin/src/Service/AI/AiCatalog.php`
- `easycommerce/com_easycommerce/admin/src/Service/AI/AiFeatureGate.php`
- `easycommerce/com_easycommerce/admin/src/Service/AI/ProductContentService.php`
- `easycommerce/com_easycommerce/admin/src/Service/AI/AiOutputGuard.php`
- `easycommerce/com_easycommerce/admin/src/Controller/AiController.php`
- `packages/core/src/Service/Ai/AiServiceClient.php` and its `Request/` and `Response/` classes
- `aicore/plugins/plg_easycommerce_aicredits/src/Extension/AICredits.php`
- `aicore/plugins/plg_easycommerce_aicredits/react-src/components/ProductAICreditsTab.tsx`
- `aicore/com_aicore/site/src/Service/CreditsService.php`
