---
id: security-and-testing
title: Test and Ship an EasyCommerce Integration
sidebar_label: Security, Testing, and Packaging
description: Check permissions, payment evidence, duplicate handling, logs, and upgrade behaviour before releasing a plugin.
---

# Test and ship your integration

A useful integration needs predictable behaviour when everything works and when a request is repeated, interrupted, or made by the wrong user. Test those cases before asking a merchant to install it.

## Keep the server in charge

The browser can request an action, but it cannot prove that an order was paid, choose the owner of a download, or decide the final amount. Apply these checks in PHP even if your React form already checks them:

- Validate the HTTP method and Joomla CSRF token where the endpoint requires them.
- Check the signed-in user's permission and the owner of the requested record.
- Load prices, currency, order items, and payment state from trusted services.
- Verify provider signatures and payment evidence before settling an order.
- Return only the data that the caller is entitled to see.

Read [plugin endpoints](plugin-endpoints.md) for the built-in checks. Endpoint registration does not replace your handler's resource-level access checks.

## A record ID is not authorisation

For example, a customer endpoint must not call `getOrder($input['order_id'])` and return the result to any signed-in user. The order must belong to the customer linked to that Joomla account.

This excerpt shows the shape of a restricted read inside a plugin handler. `$db` is an injected `DatabaseInterface`; `$orderId` has already been validated as a positive integer:

```php
use Joomla\CMS\Language\Text;
use Joomla\Database\ParameterType;

$identity = $this->getApplication()->getIdentity();
$userId = (int) $identity->id;

if ($identity->guest || $userId <= 0) {
    throw new \RuntimeException(Text::_('JERROR_ALERTNOAUTHOR'), 403);
}

$query = $db->getQuery(true)
    ->select($db->quoteName(['o.id', 'o.order_number', 'o.payment_status']))
    ->from($db->quoteName('#__easycommerce_orders', 'o'))
    ->join('INNER', $db->quoteName('#__easycommerce_customers', 'c')
        . ' ON ' . $db->quoteName('c.id') . ' = ' . $db->quoteName('o.customer_id'))
    ->where($db->quoteName('o.id') . ' = :order_id')
    ->where($db->quoteName('c.user_id') . ' = :user_id')
    ->bind(':order_id', $orderId, ParameterType::INTEGER)
    ->bind(':user_id', $userId, ParameterType::INTEGER);

$order = $db->setQuery($query)->loadObject();

if (!$order) {
    // Use the same response for a missing order and another user's order.
    throw new \RuntimeException(Text::_('PLG_EASYCOMMERCE_ACME_ORDER_NOT_FOUND'), 404);
}
```

Add the translation to your plugin and load its language before using it. This is a read example, not permission to update core tables. Use EasyCommerce's services for state changes.

Never link a guest purchase to an account merely because someone typed a matching email address. Use the verified guest-purchase claim flow described in [downloads and licensing](downloads-and-licensing.md).

## Design retries before contacting a provider

An HTTP timeout does not prove that an external operation failed. The provider may have completed it while the response was lost.

For payments, refunds, fulfilment jobs, and credit grants:

1. Create a stable operation identifier before the external call.
2. Save it in your own durable record and use a provider idempotency key where available.
3. Record the provider identifier and outcome.
4. If the outcome is uncertain, look it up before creating another operation.
5. Make repeated and concurrent callbacks safe at the database level.

A PHP flag or session variable only protects one process or browser session. A unique database constraint protects concurrent requests. Choose keys around the business operation: a renewal and an initial order are different operations, while two webhook event types can describe the same payment.

## Make logs useful without exposing secrets

Inject a PSR-compatible logger and use structured context:

```php
$this->logger->warning('Acme fulfilment will be retried', [
    'plugin' => 'acme',
    'order_id' => $orderId,
    'operation' => 'fulfil',
    'attempt' => $attempt,
    'provider_status' => $statusCode,
]);
```

The [starter plugin](getting-started.md) uses `easycommerce.logger`. For a dedicated file, create a logger from the shared factory after the core services are available:

```php
use Joomla\CMS\Component\ComponentHelper;
use Shondalai\Library\Core\Service\Logger\LoggerServiceFactory;
use Shondalai\Library\Core\Service\Logger\LogLevel;

$params = ComponentHelper::getParams('com_easycommerce');
$logger = $services->get(LoggerServiceFactory::class)->create(
    category: 'com_easycommerce.plugins.acme',
    logFile: 'easycommerce.acme.log.php',
    enabled: (bool) $params->get('enable_logging', true),
    minLevel: $params->get('log_level', LogLevel::INFO)
);
```

Here `$services` is the booted Joomla global container. Share this logger with your plugin services. The factory follows EasyCommerce's logging settings and request context.

Log operation names, local IDs, provider status codes, and safe correlation identifiers. Do not log secret keys, signatures, card details, download tokens, complete request bodies, or customer addresses. A detailed provider exception may contain those values; review it before including its message.

Store technical failures in logs and give the customer a useful, translated response. Avoid telling a customer to repeat a payment while the previous result is uncertain.

## Test at three levels

### Small service tests

Keep provider HTTP calls behind an injected client so tests can return controlled responses. Test parsing, validation, result mapping, currency precision, and duplicate handling without contacting a live provider.

For an event listener, construct the real event class and pass it to the handler. Check the side effect your integration owns, such as a queued job or a logger call. Do not make a real charge to prove that an event subscription works.

### Joomla integration tests

Install the packaged plugin on a disposable Joomla site. This catches errors that isolated tests miss: namespace discovery, plugin enablement, missing files, language loading, configuration storage, CSRF, and application context.

Use separate test accounts with different orders. Keep a paid order, an unpaid order, a refunded order, and a guest purchase. Give every fixture an identifiable name and remove only the fixtures your test created.

### Browser checks

Exercise the actual workflow from the administrator and storefront. Check success, invalid input, session expiry, permissions, and an empty result. Test plugin dialogs and account pages in light and dark modes and at a narrow viewport.

If you build React assets, ensure your bundle uses the host's React runtime. Loading a second copy can break hooks even if TypeScript compilation succeeds. See [UI extensions](ui-extensions.md).

## A practical test matrix

| Area | Cases to cover |
| --- | --- |
| Discovery | Fresh install, enabled/disabled plugin, renamed namespace, required dependency missing. |
| Configuration | Empty required fields, invalid credential format, secret fields left unchanged, validation performed on the server. |
| Access | Guest, authorised customer, different customer, administrator with and without the relevant permission. |
| JSON actions | Correct/wrong method, missing CSRF token, expired session, unregistered action, malformed input. |
| Payments | Success, failure, abandoned checkout, invalid signature, amount/currency mismatch, timeout after provider success. |
| Webhooks | Replay, two event types for the same payment, concurrent delivery, out-of-order delivery, unknown order. |
| Refunds | Partial, full, repeated, provider timeout, refund in the saved charge currency. |
| Renewals | First payment, subsequent payment, failure then recovery, duplicate notification, cancellation without removing valid paid access. |
| Shipping | Supported/unsupported country, no address, no rate, weight/unit conversion, virtual-only cart, provider failure. |
| Downloads | Unpaid/refunded purchase, another user's item, expired access, verified guest claim, local file, remote storage, path traversal. |
| AI | Feature disabled, missing entitlement, insufficient credits, malformed response, provider timeout, wrong-user data, interrupted stream. |
| Upgrade | Existing settings preserved, migration repeated safely, old jobs understood, previous purchases still accessible. |

Test only the areas your integration implements, but do not skip failure cases in those areas.

## Package the files your plugin owns

- Keep `services/provider.php`, PHP classes, and language files in the plugin package.
- Include production JavaScript and CSS through the manifest's media declarations if your plugin has an interface.
- Do not ship `node_modules`, local credentials, test customer data, development URLs, or source maps containing private configuration.
- Use Joomla install/update SQL or an installer script for your own tables. Make upgrades repeatable and preserve merchant settings.
- State supported Joomla, PHP, EasyCommerce, and shared-library versions in your release notes and installer checks.
- Keep a record of changes to your endpoint payloads and stored metadata.
- On uninstall, remove your plugin's files and data according to a documented policy. Never uninstall a shared library needed by another extension.

Before release, install the ZIP rather than copying source files into a development site. A working source tree is not proof that the package includes every required file.

## Debugging a merchant report

Ask for the plugin and EasyCommerce versions, the action attempted, the time of the failure, and matching redacted log entries. For a browser failure, identify the failing `task` and HTTP status in the Network panel. “Request failed with status code 500” alone does not identify the failing service.

Follow one operation through its IDs: order, payment attempt, provider transaction, refund, or fulfilment job. Inspect saved state before replaying anything. Never ask a merchant to delete payment records or disable ownership checks as a diagnostic step.
