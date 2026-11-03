---
id: shipping-plugins
title: Build a shipping integration
sidebar_label: Shipping plugins
---

A shipping plugin answers a simple question: which delivery services can carry this cart to this address, and what do they cost? EasyCommerce matches a shipping zone, calls the selected carrier plugin and uses its rates during checkout.

Start with [Getting started](./getting-started.md) for packaging and [Configuration](./configuration.md) for settings. This guide covers the rate contract, a small example, and the limits of shipment and tracking integration in the current component.

## What is connected today?

| Capability | Current behavior |
| --- | --- |
| Plugin settings | Shipping plugins implementing `ShippingCarrierInterface` can appear under Settings → Shipping. |
| Carrier rates | An enabled zone method of type `carrier` dispatches `CalculateCarrierRateEvent` to the selected plugin. |
| Country restrictions | Plugin country rules and shipping-zone matching both apply. |
| Selecting a carrier for a zone | The backend supports `settings.carrier`. The current zone editor offers the carrier method type but does not render a carrier selector. Developer setup is needed to bind that method to a plugin. |
| Buying labels and live tracking | Carrier interfaces and event classes exist, and bundled plugins have handlers. The core shipment service does not currently dispatch those carrier events automatically. |

Do not promise automatic label purchasing simply because a class implements `createShipment()`. See [Shipment and tracking integration](#shipment-and-tracking-integration) before adding those operations.

## Follow the rate request

1. `ShippingService` matches the delivery address to an enabled shipping zone.
2. It loads the zone's enabled methods. A carrier method stores the plugin code in `settings.carrier`.
3. It checks that carrier's country availability against the delivery country.
4. It dispatches `CalculateCarrierRateEvent($carrier, $cart, $zoneData)`.
5. The selected plugin adds zero or more rate arrays to the event.
6. Checkout displays those services. Before creating an order, the selected rate is calculated again on the server.

The event is `Joomla\Component\EasyCommerce\Administrator\Event\Shipping\CalculateCarrierRateEvent`, with event name `onEasyCommerceCalculateCarrierRate`.

Its useful methods are:

```php
$event->getCarrier(); // Plugin code, for example 'exampleshipping'.
$event->getCart();    // Cart object.
$event->getZone();    // Zone data merged with delivery address fields.
$event->addRate($rate);
$event->getRates();
```

Always check `getCarrier()` before doing any work. All enabled subscribers may receive the event; another carrier's request must not cause your plugin to call its API.

### Address and cart data

The zone array contains address fields at the top level, such as `country`, `state`, `postcode`, `city`, `address_1` and `address_2`. Do not look for a nested `zone['address']` object.

The cart contains `items`, and the totals path supplies a freshly priced cart with `currency`, `store_currency` and `totals->subtotal`. Items include quantity and weight; product dimensions may be carried as a `dimensions` structure. Define how your integration packs items instead of assuming every product is one parcel or that every call supplies all optional fields.

Use the store's origin address and explicitly configured weight and dimension units. Convert units before calling a provider; changing a `KG` label to `LB` does not convert a weight. Exclude non-shippable items, account for quantity, and define a clear response when required parcel data is missing. Purely digital carts should not need a shipping quote.

### Return rate arrays

A carrier rate consumed by the current service looks like this:

```php
[
    'service_code' => 'standard',
    'label' => 'Standard delivery',
    'cost' => 5.00,
    'delivery_time' => '3–5 business days',
]
```

Translate customer-facing labels with Joomla language strings. `service_code` must be stable and unique within that carrier's returned rates. Checkout identifies a service using the numeric zone-method ID and service code, such as `12-standard`. The `id` field from a provider response is not used as the checkout selection ID.

The shipping service maps `label` to the title, `delivery_time` to the description, and uses the zone method's `tax_status` setting. Return a finite, nonnegative cost in the store currency. Validate every API response before adding a rate; a missing provider amount must not accidentally become free shipping.

**Currency limitation:** the carrier-rate mapping does not retain a separate rate currency, and `OrderTotalsService` currently refuses alternate product-currency checkout for carts requiring shipping. Adding `currency => 'INR'` to a rate does not enable currency conversion. Keep rate costs in the store currency until the complete shipping-currency contract is extended.

## A small rate-only plugin

The following example offers one configured rate. It makes no network requests, buys no label and does not pretend to validate an address with a carrier. It is useful for learning the event flow before replacing the calculation with a real carrier service.

Use these identities with the package and service-provider instructions in [Getting started](./getting-started.md):

| Item | Value |
| --- | --- |
| Joomla group | `easycommerce` |
| Plugin element | `exampleshipping` |
| Manifest namespace | `Joomla\Plugin\EasyCommerce\ExampleShipping` |
| Extension file | `src/Extension/ExampleShipping.php` |
| Extension class | `Joomla\Plugin\EasyCommerce\ExampleShipping\Extension\ExampleShipping` |
| Language prefix | `PLG_EASYCOMMERCE_EXAMPLESHIPPING` |

The namespace and class convention matters: current EasyCommerce settings discovery derives the class from the PHP filename under `src/Extension`.

### Extension class

```php
<?php

namespace Joomla\Plugin\EasyCommerce\ExampleShipping\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Language\Text;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\EasyCommerce\Administrator\Event\Shipping\CalculateCarrierRateEvent;
use Joomla\Component\EasyCommerce\Administrator\Interface\ConfigurablePluginInterface;
use Joomla\Component\EasyCommerce\Administrator\Interface\ShippingCarrierInterface;
use Joomla\Component\EasyCommerce\Administrator\Trait\ConfigurableTrait;
use Joomla\Event\SubscriberInterface;

final class ExampleShipping extends CMSPlugin implements
    SubscriberInterface,
    ShippingCarrierInterface,
    ConfigurablePluginInterface
{
    use ConfigurableTrait;

    protected $autoloadLanguage = true;

    public static function getSubscribedEvents(): array
    {
        return [CalculateCarrierRateEvent::EVENT_NAME => 'onCalculateRate'];
    }

    public function getCode(): string
    {
        return 'exampleshipping';
    }

    public function getName(): string
    {
        return Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING');
    }

    public function getConfigurationSchema(): array
    {
        return [[
            'name' => 'rate',
            'type' => 'number',
            'label' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING_RATE'),
            'description' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING_RATE_DESC'),
            'required' => true,
            'default' => 5,
            'min' => 0,
            'step' => 0.01,
        ]];
    }

    public function validateConfiguration(array $config): array
    {
        $rate = $config['rate'] ?? null;

        if (!is_numeric($rate) || !is_finite((float) $rate) || (float) $rate < 0) {
            return ['rate' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING_INVALID_RATE')];
        }

        return [];
    }

    public function isConfigured(): bool
    {
        return $this->validateConfiguration($this->getConfig()) === [];
    }

    public function onCalculateRate(CalculateCarrierRateEvent $event): void
    {
        if ($event->getCarrier() !== $this->getCode()) {
            return;
        }

        foreach ($this->calculateRates($event->getCart(), $event->getZone()) as $rate) {
            $event->addRate($rate);
        }
    }

    public function calculateRates(object $cart, array $zone): array
    {
        if (!$this->isConfigured() || !$this->isAvailableForZone($zone)) {
            return [];
        }

        return [[
            'service_code' => 'standard',
            'label' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING_STANDARD'),
            'cost' => (float) $this->getConfig('rate'),
            'delivery_time' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING_DELIVERY_TIME'),
        ]];
    }

    public function isAvailableForZone(array $zone): bool
    {
        return is_string($zone['country'] ?? null)
            && preg_match('/^[A-Z]{2}$/D', $zone['country']) === 1;
    }

    public function getSupportedServices(): array
    {
        return ['standard' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING_STANDARD')];
    }

    public function createShipment(object $order, array $options = []): array
    {
        return $this->unsupported();
    }

    public function getTrackingInfo(string $trackingNumber): array
    {
        return $this->unsupported();
    }

    public function validateAddress(array $address): array
    {
        return [
            'valid' => false,
            'message' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING_UNSUPPORTED'),
        ];
    }

    public function cancelShipment(string $shipmentId): bool
    {
        return false;
    }

    private function unsupported(): array
    {
        return [
            'success' => false,
            'message' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING_UNSUPPORTED'),
        ];
    }
}
```

`ConfigurableTrait` reads the central EasyCommerce plugin configuration and implements `getConfig()`. The example overrides its default `isConfigured()` check because having any saved setting is not enough to prove the rate is valid.

The current rate pipeline does not call `isAvailableForZone()` for you. The example calls it from `calculateRates()`. Central country availability is checked by the service; this plugin-level method performs its own basic destination check.

### Language strings

Add these to `language/en-GB/plg_easycommerce_exampleshipping.ini`:

```ini
PLG_EASYCOMMERCE_EXAMPLESHIPPING="Example Shipping"
PLG_EASYCOMMERCE_EXAMPLESHIPPING_XML_DESCRIPTION="Adds a configured delivery rate to EasyCommerce."
PLG_EASYCOMMERCE_EXAMPLESHIPPING_RATE="Delivery rate"
PLG_EASYCOMMERCE_EXAMPLESHIPPING_RATE_DESC="Amount in the store currency. Save this setting before using the carrier."
PLG_EASYCOMMERCE_EXAMPLESHIPPING_INVALID_RATE="Enter a valid delivery rate of zero or more."
PLG_EASYCOMMERCE_EXAMPLESHIPPING_STANDARD="Standard delivery"
PLG_EASYCOMMERCE_EXAMPLESHIPPING_DELIVERY_TIME="3–5 business days"
PLG_EASYCOMMERCE_EXAMPLESHIPPING_UNSUPPORTED="This example provides rates only."
```

Include the name and XML description keys in the `.sys.ini` file as well. Add both language files to the plugin manifest.

### Install, configure and bind a zone method

1. Package and install the plugin, using its matching element, namespace and extension class in `services/provider.php`.
2. Enable it in Joomla/EasyCommerce and save the rate under Settings → Shipping.
3. Create or select a shipping zone that matches the test delivery address.
4. Create a carrier method bound to `exampleshipping` in that zone.

The last step needs developer setup in the current version because the zone editor has no carrier selector. The existing concrete `ShippingService::createMethod(int $zoneId, array $data)` accepts this data:

```php
$methodData = [
    'method_id' => 'carrier',
    'title' => Text::_('PLG_EASYCOMMERCE_EXAMPLESHIPPING'),
    'enabled' => 1,
    'settings' => [
        'carrier' => 'exampleshipping',
        'tax_status' => 'taxable',
    ],
];
```

This is setup data, not a public API request. Use it from an authorized setup action after selecting and validating a real zone ID. Check existing zone methods first so repeated setup does not create duplicates. `createMethod()` is a concrete-service method, not currently part of `ShippingServiceInterface`; do not assume every replacement service implements it. A distributable integration should provide a reviewed setup UI or contribute the missing carrier selector instead of asking merchants to edit database rows.

Test with a shippable product. An enabled plugin without an enabled, matching zone method will not receive a rate request.

## Add a real carrier API

Keep the Joomla event handler small. Put authentication, HTTP requests, response parsing and provider status mapping in a separate service, as the bundled carrier plugins do.

For a network-backed calculation:

- Check credentials only for the active test/live environment.
- Use trusted provider endpoints, TLS verification and bounded timeouts. Never use a customer-supplied API URL.
- Validate destination, origin, package weight, dimensions and service restrictions before requesting a quote.
- Validate cost, currency and service code in every response. Return only services the customer can actually buy.
- Handle unavailable services with an empty rate list. Do not turn an API error into a zero-cost rate.
- If caching quotes, bind them to the account/environment, destination, cart contents, package dimensions, currency and service. Expire them according to the provider's rules.
- Log the operation, carrier and safe correlation identifiers through the shared logger. Do not log authorization headers, complete addresses or raw provider responses.

`CalculateCarrierRateEvent` has no error-result setter. A plugin normally returns no rates when it cannot quote and logs a safe diagnostic. Other available shipping methods may still be offered. See [Security and testing](./security-and-testing.md) for logging and error handling.

Country availability fields are added centrally to configurable shipping plugins. They use the **delivery country**, with modes `all`, `include` and `exclude` and an ISO two-letter country list. A restricted plugin should remain unavailable while the destination is unknown. These rules complement zone matching; they do not replace it.

## Shipment and tracking integration

The carrier interface includes these methods in addition to rates:

```text
createShipment(object $order, array $options = []): array
getTrackingInfo(string $trackingNumber): array
validateAddress(array $address): array
cancelShipment(string $shipmentId): bool
getSupportedServices(): array
isAvailableForZone(array $zone): bool
```

There are also typed events with handlers in the bundled carrier plugins:

| Event | Input and result helpers |
| --- | --- |
| `CreateShipmentEvent` (`onEasyCommerceCreateShipment`) | Construct with an order and options. `getCarrier()` reads `options['carrier']`. Use `setSuccessResult($trackingNumber, $labelUrl, $data)` or `setErrorResult($message)`. |
| `GetTrackingInfoEvent` (`onEasyCommerceGetTrackingInfo`) | Construct with a tracking number and carrier code. Use `setSuccessResult($status, $events, $estimatedDelivery)` or `setErrorResult($message)`. |

These events live under `Joomla\Component\EasyCommerce\Administrator\Event\Shipping`. Read the [event reference](./events.md) before dispatching or subscribing.

In the current core, `ShippingService::createShipment()` saves a local shipment record. It does not dispatch `CreateShipmentEvent` or buy a provider label. Similarly, the service's `getTrackingInfo()` reads saved shipment information and dispatches `AfterShippingTrackingEvent`; it does not dispatch the carrier's `GetTrackingInfoEvent`. A handler's existence alone does not make it reachable from a normal order workflow.

If you provide a custom shipment action, connect the workflow explicitly: authorize the administrator, validate the order and parcel data, reserve a local operation, call the selected carrier, then save the verified result. Use provider idempotency where available. A timeout after label creation needs reconciliation, not an automatic second purchase. Validate label and tracking URLs and enforce order access when exposing them to customers. Reuse EasyCommerce's local shipment service for persistence after success rather than writing shipment tables directly.

Keep customer-facing shipping charges separate from the actual carrier cost when recording shipment costs for reports. A quoted customer price is not evidence of the carrier invoice amount.

## Test your integration

Begin with the fixed-rate example in a local installation, then use the real carrier's sandbox and mocked HTTP failures. Check:

- The plugin is discovered, enabled and configurable; invalid settings prevent quoting.
- A matching zone and carrier binding produces the expected service and cost.
- Other carriers' events do not call your API or add your rates.
- Included/excluded countries, missing country, unmatched zones and disabled methods behave correctly.
- The selected service is recalculated before order creation; a tampered or stale browser cost is not accepted.
- Quantities, units, mixed digital/physical carts, missing dimensions and multiple parcels are handled deliberately.
- Invalid provider amounts, currency mismatches, timeouts and malformed responses do not become free shipping.
- Store taxes and the method's tax status produce the intended final total.
- Any custom label action handles duplicate requests and uncertain remote results without duplicate purchases.
- Customer tracking access is restricted to the correct order, and logs contain no credentials or personal address data.

The example above has been checked against the current PHP contracts. Installing it and exercising a local checkout is still necessary to validate the particular Joomla version, zone setup and storefront in which you will distribute it.

## Source map

Paths are relative to the `easycommerce/` source repository:

- `com_easycommerce/admin/src/Interface/ShippingCarrierInterface.php`
- `com_easycommerce/admin/src/Interface/ConfigurablePluginInterface.php`
- `com_easycommerce/admin/src/Trait/ConfigurableTrait.php`
- `com_easycommerce/admin/src/Event/Shipping/CalculateCarrierRateEvent.php`
- `com_easycommerce/admin/src/Event/Shipping/CreateShipmentEvent.php`
- `com_easycommerce/admin/src/Event/Shipping/GetTrackingInfoEvent.php`
- `com_easycommerce/admin/src/Service/Shipping/ShippingService.php`
- `com_easycommerce/admin/src/Service/Availability/CountryAvailabilityService.php`
- `com_easycommerce/admin/src/Service/OrderTotals/OrderTotalsService.php`
- `plugins/plg_easycommerce_fedex/src/Extension/FedEx.php`
- `react-app/src/admin/components/settings/shipping_zone_modal.tsx`

Review caller behavior as well as interface comments. This is especially important for shipment labels, tracking and currency support, where the declared contracts cover more than the current core workflow invokes.
