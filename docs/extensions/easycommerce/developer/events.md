---
id: events
title: Listen to EasyCommerce Events
sidebar_label: Events and Lifecycle
description: Use typed events, understand cancellation and payment state, and write listeners that are safe to retry.
---

# Listen to business events

An event tells your plugin that a particular operation is happening. For example, `AfterProductSaveEvent` provides a saved product ID, while `AfterOrderPaymentEvent` provides an order and its new payment status.

EasyCommerce imports enabled `easycommerce` plugins and dispatches the event through Joomla's dispatcher. Your plugin implements `SubscriberInterface` and maps event names to methods. The [first-plugin walkthrough](getting-started.md) provides a complete example.

## Use the exact name and event type

```php
use Joomla\Component\EasyCommerce\Administrator\Event\Order\AfterOrderPaymentEvent;

public static function getSubscribedEvents(): array
{
    return ['onEasyCommerceAfterOrderPayment' => 'afterPayment'];
}

public function afterPayment(AfterOrderPaymentEvent $event): void
{
    if ($event->getPaymentStatus() !== 'paid') {
        return;
    }

    $order = $event->getOrder();
    // Queue your fulfilment job here, using a unique key for this order.
    // Do not make a second payment or directly grant the same access twice.
}
```

This is a handler excerpt, not a complete fulfilment implementation. A persistent job record and duplicate protection are essential before doing external work.

Do not add dots to event names. Despite the namespace helper in the abstract event class, the concrete class's `EVENT_NAME` is the dispatched name. Prefer the typed getter methods shown in the [event reference](event-reference.md).

## Read and change event data

Most events have specific methods such as `getOrder()`, `getProductId()`, or `addRate()`. Other data is exposed through the base event's `getData($key, $default)` and `addData($key, $value)` methods.

For example, this excerpt adds your own namespaced metadata before a product save:

```php
use Joomla\Component\EasyCommerce\Administrator\Event\Product\BeforeProductSaveEvent;

public function beforeProductSave(BeforeProductSaveEvent $event): void
{
    $data = $event->getData('data', []);

    // This example handles the structured metadata payload from the editor.
    if (!is_array($data['metadata'] ?? null)) {
        return;
    }

    $data['metadata']['acme'] = [
        'catalogue_source' => 'internal',
    ];
    $event->addData('data', $data);
}
```

Subscribe to `onEasyCommerceBeforeProductSave` to use that method. Preserve unrelated metadata and validate any submitted fields. `ProductService::save()` reads this event's updated `data` argument before saving it.

Do not assume every event uses that same pattern. Some return an object, some have setters, and others carry a referenced array. Check both the event class and the calling service before changing data. Returning an arbitrary value from your handler does not automatically update the result.

In particular, price, tax, fee, and total hooks affect financial calculations. Use the current currency, preserve the expected result fields, and exercise the complete checkout path. A display-only price change is not a substitute for authoritative server pricing.

## Cancellation and stopping propagation are different

Some `Before...` events support `cancel($reason)`. For example, `ProductService::save()` checks `BeforeProductSaveEvent::isCancelled()` and stops the save when it is true.

```php
use Joomla\CMS\Language\Text;
use Joomla\Component\EasyCommerce\Administrator\Event\Product\BeforeProductSaveEvent;

public function validateProduct(BeforeProductSaveEvent $event): void
{
    $data = $event->getData('data', []);
    $metadata = $data['metadata'] ?? [];

    if (!is_array($metadata) || empty($metadata['acme']['enabled'])) {
        return;
    }

    if (trim((string) ($data['sku'] ?? '')) === '') {
        $this->loadLanguage();
        $event->cancel(Text::_('PLG_EASYCOMMERCE_ACME_SKU_REQUIRED'));
    }
}
```

Add the language key to your plugin's `.ini` file. This example validates only products that opt in to your integration.

`stopPropagation()` prevents later listeners from running; it does not by itself cancel a product save or a payment. Likewise, `cancel()` has no effect on events whose `isCancellable()` returns false. Always confirm that the caller honours cancellation.

## Pick the event that matches the business fact

| Need | Event | Important detail |
| --- | --- | --- |
| Record a newly created order | `onEasyCommerceAfterOrderCreate` | The order may still be unpaid. |
| Fulfil a paid purchase | `onEasyCommerceAfterOrderPayment` | Require `getPaymentStatus() === 'paid'`. Payment transitions are not limited to paid. |
| Respond to a refund | `onEasyCommerceAfterOrderRefund` | Account for partial refunds and which items are affected; do not blindly revoke everything. |
| Observe an operational status change | `onEasyCommerceAfterOrderStatusChange` | This is not interchangeable with a payment event. |
| Update an existing subscription entitlement | `onEasyCommerceAfterSubscriptionRenewal` | Use the subscription and renewal order IDs to make the operation repeatable. |
| React to access ending | `onEasyCommerceAfterSubscriptionExpired` | Read the reason and paid-access state. Do not invent a new charge. |
| Refresh a product search index | `onEasyCommerceAfterProductSave` | Product data and associations have committed before this event in the current save path. |
| Add carrier rates | `onEasyCommerceCalculateCarrierRate` | Filter by the requested carrier; return rates in the documented shape. |
| Add email types | `onEasyCommerceEmailTemplateRegister` | Register the template before trying to send it. |

## Event listeners run inside the caller

Listeners are synchronous. A slow API call delays checkout or the save request. An exception may reach the caller even if some data has already been saved. An `After...` event is not a durable queue, an automatic retry mechanism, or a guarantee of delivery.

For a reliable integration:

1. Validate the event and its relevant state.
2. Derive a stable business key, such as `provider + order_id + order_item_id + operation`.
3. Insert a job into a table your plugin owns, with a unique constraint on that key.
4. Let a scheduled worker process it with bounded retries and a timeout.
5. Record the remote result so a repeated event does not repeat the effect.

Choose the key for the operation. A product can legitimately be saved many times; deduplicating forever by product ID would lose later changes. A recurring credit grant needs the renewal order ID, not only the subscription ID.

## Ordering and recursion

Joomla supports listener priorities, but first write listeners that do not depend on another third-party plugin running before them. See Joomla's [plugin advanced features](https://manual.joomla.org/docs/next/building-extensions/plugins/advanced-features/) for priorities and propagation.

Calling `ProductService::save()` from your own product-save listener can trigger that listener again. Queue follow-up work or add an explicit, narrowly scoped recursion guard if you genuinely need another save. Do not use a process-wide flag as a replacement for database-backed duplicate protection.

## Which events really run?

The [event reference](event-reference.md) separates dispatched events from contracts with no core caller. In particular, the presence of a subscription-creation or shipment event class does not mean the normal checkout dispatches it. Follow the payment and shipping guides before designing around those contracts.

Source: `com_easycommerce/admin/src/Event/`, `EventDispatcherAwareTrait.php`, `ProductService::save()`, and `OrderService::handleOrderPaymentStatusChange()`.
