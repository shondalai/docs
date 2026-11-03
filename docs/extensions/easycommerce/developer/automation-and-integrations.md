---
id: automation-and-integrations
title: Automation and external integrations
sidebar_label: Automation and integrations
---

An integration can react to EasyCommerce activity without replacing checkout or editing the component. Common examples include sending paid orders to an accounting system, updating CRM contacts, granting access to a course, and synchronizing product data.

Use an `easycommerce` plugin for commerce events and a Joomla `task` plugin for work that runs in the background. Keep remote API calls in an injected service so they can be tested independently. The [quickstart](./getting-started.md) explains how to install and register the plugin; the [event reference](./event-reference.md) lists the available event classes and their payloads.

## Pick the event that represents the business fact

An order being created, an order being marked completed and a payment being confirmed are different facts. Pick the one your integration needs.

| You want to… | Start with… | Important distinction |
| --- | --- | --- |
| Record a new order in a CRM | `AfterOrderCreateEvent` | A new order can still be unpaid |
| Grant a purchased entitlement | `AfterOrderPaymentEvent`, with payment status `paid` | Never fulfill solely from a browser success page |
| Mirror fulfillment status | `AfterOrderStatusChangeEvent` | Order status and payment status are separate |
| Handle a refund | `AfterOrderRefundEvent` | Define partial-refund behavior and prevent duplicate reversals |
| Extend access after renewal | `AfterSubscriptionRenewalEvent` | Use the renewed dates rather than blindly adding another period |
| Update or remove an external catalog item | Product save/delete events | A save can be repeated without creating a new product |
| Synchronize a customer | Customer save/delete events | Joomla user IDs and EasyCommerce customer IDs are different |
| Observe email acceptance | `AfterEmailSendEvent` | Queued mail has been accepted, not necessarily delivered |
| Process a generated invoice | `AfterInvoiceGenerateEvent` | Invoice generation can happen more than once |

These events are dispatched by the current service implementations. A class name in `admin/src/Event/` by itself is not proof that a workflow dispatches that event. Check the dispatch sites and the [event reference](./event-reference.md) before designing around a hook. Direct database writes and import paths can also bypass the ordinary service lifecycle.

### Payment and subscription access

The paid-order path finalizes inventory and coupon allocations before dispatching its payment event. If allocation reconciliation is required, fulfillment is withheld. Let the component make that decision; do not grant access independently from an unverified gateway callback.

`AfterSubscriptionRenewalEvent` exposes the subscription, renewal order ID, next payment date and payment method. Its order ID and next payment date can be `null`, so check them before using them as external keys. For a license or membership integration, reconcile the actual paid-through date. A billing agreement being paused or cancelled does not necessarily remove already paid access immediately.

Avoid fulfilling the same purchase from both the order-payment event and the renewal event. If both listeners are necessary, make them share the same purchase-level idempotency record. See [payments](./payment-plugins.md) and [downloads and licensing](./downloads-and-licensing.md) for the relevant boundaries.

## Example: queue a paid order for export

The following excerpt belongs in a plugin that implements Joomla's `SubscriberInterface`. `$this->exports` is **your own injected service**, not a built-in EasyCommerce queue. Its `enqueueOnce(string $key, int $orderId): void` method should persist a job in your extension's table and enforce a unique key in the database.

```php
use Joomla\Component\EasyCommerce\Administrator\Event\Order\AfterOrderPaymentEvent;

public static function getSubscribedEvents(): array
{
    return [
        AfterOrderPaymentEvent::EVENT_NAME => 'queuePaidOrder',
    ];
}

public function queuePaidOrder(AfterOrderPaymentEvent $event): void
{
    if ($event->getPaymentStatus() !== 'paid') {
        return;
    }

    $orderId = (int) ($event->getOrder()->id ?? 0);

    if ($orderId <= 0) {
        return;
    }

    $this->exports->enqueueOnce('acme-accounting:paid:' . $orderId, $orderId);
}
```

Do not call the accounting provider directly in this listener. Persist a small job, then let a worker load the order through the component's service, map the fields, and make the request. Include the same stable key in the provider request if that provider supports idempotency.

Design your job store with at least these fields:

- A unique operation key and the EasyCommerce order ID.
- State, attempt count, next attempt time and last safe error code.
- The remote record ID once created.
- A claim or lock that prevents two workers processing the same job simultaneously.

An in-memory “already sent” array is not sufficient. Two webhook requests can run in different PHP processes. Enforce uniqueness in persistent storage, and use a transaction when updating the job's local state.

This listener is not an atomic outbox built into EasyCommerce's order transaction. If saving the job fails, the payment may already be persisted. Log the failure and provide a reconciliation task that finds paid orders without an export record. Do not claim exactly-once remote delivery based only on an event callback.

## Background processing with Joomla Scheduled Tasks

EasyCommerce already uses Joomla task plugins for subscription maintenance, payment reconciliation, push delivery and AI maintenance. Follow the same structure for an external-system queue:

```php
// Excerpt from your Joomla task plugin.
protected const TASKS_MAP = [
    'acmecommerce.export_orders' => [
        'langConstPrefix' => 'PLG_TASK_ACMECOMMERCE_EXPORT',
        'method' => 'exportOrders',
        'form' => 'export',
    ],
];

public static function getSubscribedEvents(): array
{
    return [
        'onTaskOptionsList' => 'advertiseRoutines',
        'onExecuteTask' => 'standardRoutineHandler',
        'onContentPrepareForm' => 'enhanceTaskItemForm',
    ];
}
```

The plugin uses Joomla's `TaskPluginTrait`, provides the named method and form XML, and is installed in the `task` group. This map advertises the routine; the site operator still needs an enabled scheduled task and a functioning scheduler runner. Refer to `plg_task_easycommerce_ai` for a complete packaged example with language strings and dependency injection.

Process a bounded number of jobs per run. Set remote connection and request timeouts, retry temporary failures with a delay, and keep permanent configuration errors visible to administrators. Do not retry an ambiguous payment or fulfillment operation using a fresh external idempotency key.

For a worker that changes customer access, reload the relevant records before acting. An order may have been refunded, voided or corrected since the job was queued. Decide whether your external system needs the original purchase snapshot, the latest state, or separate events for both.

## Cart, tax, email and invoice integrations

These hooks participate in different stages of a request and need different handling:

- **Cart:** item, coupon and totals events let integrations observe or validate the cart lifecycle. They can run repeatedly as a shopper changes quantities. Do not create a paid entitlement or charge from a cart event. A cart total displayed in the browser is not the authority for a payment amount.
- **Tax:** `CalculateTaxEvent` is dispatched with the amount, tax class, address and tax breakdown. `TaxService` reads the resulting breakdown and recomputes the total. Use the event's documented methods and deterministic calculations; avoid charging or writing orders during tax calculation.
- **Email:** `BeforeEmailSendEvent` runs after the template and default variables are loaded and can cancel sending. `AfterEmailSendEvent` runs after acceptance by the shared delivery service. For queued messages, delivery and retries belong to the queue, so this event is not a delivery receipt.
- **Invoice:** generation hooks run around producing the invoice file. Do not allocate a second invoice number or assume a new download represents a new sale. Handle repeated generation and keep the generated file private when sending it to a remote service.

Prefer an existing service API to a direct table update. Changing an order row yourself can skip payment reconciliation, stock handling, subscription changes, email logic and integration events. A read-only report may query data, but a business-state transition should go through the component's service boundary.

## Import and migration integrations

The migration subsystem has explicit contracts rather than automatic discovery of arbitrary importer plugins:

- `MigrationAdapterInterface` describes a source, connection schema, connection test, entity counts and paginated fetches.
- `EntityMapperInterface` describes conversion from source entities into destination data.
- `MigrationService::registerAdapter()` registers an adapter instance in the migration service.

The WooCommerce adapter and its entity mappers are the current reference implementation. An adapter is not discovered just because its class implements the interface. A custom integration must register its instance in the service setup used by the migration controller. Do not assume an undocumented `onRegisterImporters` event exists.

For a new importer, start with one entity type and a preview before writing. Keep a persistent mapping from source IDs to destination IDs so rerunning a batch updates or skips the same records. Bound batch sizes, validate money and dates, and keep credentials in encrypted server configuration. Historical imported orders need an explicit policy about fulfillment and customer emails; replaying a historical “paid” state can otherwise grant the purchase again.

AI import clean-up is a separate proposal step. `ImportCleanupService` suggests normalized labels; it is not a general importer registration system and is not permission to write unreviewed AI output to the catalog. See [AI and credits](./ai-and-credits.md).

## Validate the integration before release

Test repeated payment events, two simultaneous worker runs, a remote timeout after the provider accepted the request, and an order refunded before its queued export runs. Also test disabled plugins and missing remote credentials: reading an administrator page should not attempt fulfillment.

Logs should contain local record IDs, operation keys, provider request IDs and safe error codes. Keep credentials, full payment payloads and unnecessary customer data out of logs. Document where the operator can inspect failed jobs and how to retry or reconcile them without duplicating purchases. The [security and testing guide](./security-and-testing.md) covers the common checks.

## Source examples

- `easycommerce/com_easycommerce/admin/src/Service/Order/OrderService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Subscription/SubscriptionService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Customer/CustomerService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Product/ProductService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Cart/CartService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Tax/TaxService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Email/EmailService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Invoice/InvoiceService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Migration/Contract/`
- `easycommerce/plugins/plg_task_easycommerce_ai/src/Extension/AiTask.php`
- `easycommerce/plugins/plg_task_easycommerce_payments/src/Extension/PaymentsTask.php`
