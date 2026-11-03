---
id: architecture
title: How EasyCommerce Extensions Work
sidebar_label: Architecture
description: Understand EasyCommerce plugin discovery, services, events, and browser extensions.
---

# How extensions fit together

An EasyCommerce integration usually has a PHP plugin and, optionally, a JavaScript bundle. PHP handles trusted operations: checking access, saving data, calling providers, and deciding whether a payment is valid. JavaScript presents the interface and calls those operations.

```text
Joomla loads com_easycommerce
    |
    +-- services/provider.php registers the component and its services
    |
    +-- EasyCommerce imports enabled plugins in the easycommerce group
            |
            +-- event listeners react to business operations
            +-- configurable plugins describe their settings
            +-- extensible plugins describe UI and JSON actions
                    |
                    +-- React loads the plugin's registered components
```

## Pick the smallest extension mechanism

| Mechanism | When you need it |
| --- | --- |
| `CMSPlugin` + `SubscriberInterface` | Listen to typed EasyCommerce events. This is enough for the [starter plugin](getting-started.md). |
| `ConfigurablePluginInterface` | Describe settings that EasyCommerce can display. See [configuration](configuration.md) for discovery and storage rules. |
| `ExtensiblePluginInterface` + `ExtensiblePluginTrait` | Add editor tabs, administrator routes, account pages, report tabs, or JSON actions. The trait supplies empty defaults; override what your plugin uses. |
| `PaymentPluginInterface` or shared hosted-payment base classes | Integrate a payment provider. Follow the full [payment guide](payment-plugins.md), including checkout support. |
| `ShippingCarrierInterface` + carrier-rate events | Describe a carrier and provide shipping quotes. See [shipping plugins](shipping-plugins.md) for zone binding and shipment limits. |
| Joomla `task` plugin | Run scheduled processing. Use this alongside, rather than instead of, an `easycommerce` listener. |

These mechanisms can be combined. Downloads implements several because it has both a purchase workflow and a substantial interface. A simple fulfilment listener does not need all of them.

## Plugin discovery

Joomla uses your manifest's `group="easycommerce"` and plugin element name. Its `services/provider.php` constructs the plugin. EasyCommerce's `EasyCommerceEventDispatcher` imports the group before dispatching business events.

`PluginRegistryService` boots enabled plugin instances for configuration. `ExtensionRegistryService` collects the metadata supplied by `ExtensiblePluginInterface`. There is no general `onEasyCommerceRegisterPlugins` event that you must invent or dispatch.

Keep construction cheap. Importing the group can instantiate plugins that are not the customer's selected gateway. Do not contact a payment API, create an order, or send email in a constructor or `getSubscribedEvents()`.

## Use services for business operations

The component's `EasyCommerceServiceProvider` registers its business services in Joomla's global dependency injection container. A provider can resolve a service after the component has booted, then pass it into your integration's service or plugin.

This example is for code running in an authorised Joomla request. It retrieves an order; it does **not** check whether the visitor owns it:

```php
use Joomla\CMS\Factory;
use Joomla\Component\EasyCommerce\Administrator\Service\Order\Contract\OrderServiceInterface;

$app = Factory::getApplication();
$app->bootComponent('com_easycommerce');

$orders = Factory::getContainer()->get(OrderServiceInterface::class);
$order = $orders->getOrder($orderId);
```

Resolve dependencies at an entry point, such as your provider, and inject them into the class that uses them. Avoid repeated container lookups throughout business logic. Do not repeatedly boot the component from a constructor while it is already importing your plugin.

Useful contracts live under `com_easycommerce/admin/src/Service/`:

| Contract | Responsibility |
| --- | --- |
| `Product\Contract\ProductServiceInterface` | Product reads and saves, including the product event lifecycle. |
| `Order\Contract\OrderServiceInterface` | Orders, payment state, refunds, and their business side effects. |
| `Customer\Contract\CustomerServiceInterface` | EasyCommerce customer records. A customer ID is different from a Joomla user ID. |
| `Settings\Contract\SettingsServiceInterface` | Store settings and plugin configuration. |
| `Pricing\Contract\PricingServiceInterface` | Product pricing and currency-aware price data. |
| `OrderTotals\Contract\OrderTotalsServiceInterface` | Authoritative checkout totals. |
| `Shipping\Contract\ShippingServiceInterface` | Shipping zones, rates, and shipment data. |
| `Subscription\Contract\SubscriptionServiceInterface` | Subscription lifecycle and renewal handling. |

Read the actual interface for method arguments. Do not update core order, subscription, invoice, or licence tables directly to imitate a service operation: doing so skips validation, events, allocations, and access changes.

## Keep these boundaries clear

### Identity and access

An `order_id` identifies an order; it is not permission to read it. Derive the current user from Joomla, resolve their customer record, and check the record belongs to them. Administrator access and a customer's own account access are separate cases. See [plugin endpoints](plugin-endpoints.md).

### Order status and payment status

An order can exist before payment succeeds. Operational status, payment status, and subscription status are separate fields. Fulfil paid purchases from verified payment state, not from order creation, a success-page visit, or the fact that the order is labelled completed.

### Store currency and order currency

An order records the currency the customer agreed to pay. That currency may differ from the store default or the provider's settlement currency. A fee in INR cannot be subtracted directly from a USD sale. Use the saved order and payment evidence, not a current exchange rate or the currency shown in a browser label.

### Database transactions and external work

Events run synchronously in the request that dispatches them. An `After...` name does not guarantee every event runs after a database commit. Product saves currently commit before `AfterProductSaveEvent`; inspect the specific caller for other workflows.

A remote service cannot participate in your Joomla database transaction. For reliable fulfilment, save a job in your own durable queue, make its identity unique, and let a scheduled worker send it with retries. See [automation](automation-and-integrations.md).

### Shared dependencies and uninstall

Use the shared Shondalai core library for existing logging, storage, email, and AI services. Declare your integration's dependencies and check them during installation. Do not bundle another copy of EasyCommerce or remove shared libraries when uninstalling your plugin. Your uninstall script should remove only data and files that your plugin owns.

## Source map

- `com_easycommerce/admin/services/provider.php` — Joomla component entry point.
- `com_easycommerce/admin/src/Extension/EasyCommerceServiceProvider.php` — service registration.
- `com_easycommerce/admin/src/Event/` — typed business events.
- `com_easycommerce/admin/src/Service/Plugin/` — plugin and extension registries.
- `com_easycommerce/admin/src/Interface/` and `Trait/ExtensiblePluginTrait.php` — extension contracts.
- `com_easycommerce/admin/src/Controller/ExtensionsController.php` and `site/src/Controller/ExtensionsController.php` — plugin JSON requests.
- `react-app/src/admin/` and `react-app/src/site/` — the host applications that render extension metadata.

These paths are relative to the EasyCommerce source directory. They are useful when confirming a contract for the release your integration supports.
