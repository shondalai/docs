---
id: configuration
title: Plugin settings and configuration
sidebar_label: Settings and configuration
---

EasyCommerce can build a payment or shipping plugin's settings form from a PHP schema. Your plugin describes the fields, EasyCommerce displays them, and the plugin reads the saved values on the server.

Start with the [plugin quickstart](./getting-started.md) for the manifest, namespace and service provider. This page explains the configuration contract you add to that plugin.

## Choose where settings belong

There are three different stores for configuration. They are not interchangeable.

| Configuration | Where it lives | Typical use |
| --- | --- | --- |
| Joomla plugin parameters | `#__extensions.params`, exposed through `$this->params` | Options declared in the plugin's Joomla XML form |
| EasyCommerce plugin configuration | `#__easycommerce_plugin_config`, keyed by plugin element and field name | Gateway credentials, carrier options and the schema-driven settings dialog |
| Product metadata | The product's `metadata` object, under your own key | Whether a particular product grants credits or uses an integration |

`ConfigurableTrait::getConfig()` reads EasyCommerce plugin configuration directly. It does not automatically merge Joomla parameters. Use the correct source consistently, and avoid keeping two editable copies of the same credential.

## Implement the configuration interface

The interface is `Joomla\Component\EasyCommerce\Administrator\Interface\ConfigurablePluginInterface`. It requires these methods:

```php
public function getConfigurationSchema(): array;
public function validateConfiguration(array $config): array;
public function getConfig(?string $key = null, $default = null);
public function isConfigured(): bool;
```

The companion `Joomla\Component\EasyCommerce\Administrator\Trait\ConfigurableTrait` supplies `getConfig()` and a basic `isConfigured()`. Override `isConfigured()` to check the fields your integration actually needs. The default only checks whether any configuration exists.

The following methods belong inside your plugin class. The class must implement the interface and use the trait.

```php
use Joomla\CMS\Language\Text;
use Joomla\Component\EasyCommerce\Administrator\Trait\ConfigurableTrait;

// Inside the plugin class:
use ConfigurableTrait;

public function getConfigurationSchema(): array
{
    return [
        [
            'type' => 'section',
            'title' => Text::_('PLG_EASYCOMMERCE_ACME_CONNECTION'),
        ],
        [
            'name' => 'mode',
            'type' => 'select',
            'label' => Text::_('PLG_EASYCOMMERCE_ACME_MODE'),
            'default' => 'test',
            'options' => [
                ['value' => 'test', 'label' => Text::_('PLG_EASYCOMMERCE_ACME_TEST')],
                ['value' => 'live', 'label' => Text::_('PLG_EASYCOMMERCE_ACME_LIVE')],
            ],
        ],
        [
            'name' => 'api_secret',
            'type' => 'password',
            'label' => Text::_('PLG_EASYCOMMERCE_ACME_API_SECRET'),
            'description' => Text::_('PLG_EASYCOMMERCE_ACME_API_SECRET_DESC'),
            'encrypted' => true,
            'required' => true,
        ],
    ];
}

public function validateConfiguration(array $config): array
{
    $errors = [];

    if (!in_array($config['mode'] ?? 'test', ['test', 'live'], true)) {
        $errors['mode'] = Text::_('PLG_EASYCOMMERCE_ACME_INVALID_MODE');
    }

    if (trim((string) ($config['api_secret'] ?? '')) === '') {
        $errors['api_secret'] = Text::_('PLG_EASYCOMMERCE_ACME_SECRET_REQUIRED');
    }

    return $errors;
}

public function isConfigured(): bool
{
    return $this->validateConfiguration([
        'mode' => $this->getConfig('mode', 'test'),
        'api_secret' => $this->getConfig('api_secret', ''),
    ]) === [];
}
```

These are method excerpts, not a complete installable plugin. Add the language keys to your plugin's language files and retain `defined('_JEXEC') or die;` in the PHP file.

## Schema fields the dialog supports

`getConfigurationSchema()` returns a flat list of fields, not a JSON Schema document and not an object containing a `fields` property.

| Property | Meaning |
| --- | --- |
| `name` | Saved key; omit for section headings |
| `type` | `text`, `password`, `textarea`, `select`, `multiselect`, `countries`, `number`, `checkbox` or `section` |
| `label`, `description` | Translated text for a field |
| `title` | Translated heading for a section |
| `default` | Initial form value when no stored value exists |
| `required` | Form requirement; it does not replace server validation |
| `options` | A list of `['value' => '...', 'label' => '...']` choices |
| `encrypted` | Encrypt this value when EasyCommerce saves it |
| `min`, `max`, `step` | Numeric input constraints |
| `placeholder`, `maxlength`, `readonly` | Input presentation options |
| `visible_if` | Conditional display using another field's value |

For example, a price field can follow a checkbox:

```php
[
    'name' => 'handling_fee',
    'type' => 'number',
    'label' => Text::_('PLG_EASYCOMMERCE_ACME_HANDLING_FEE'),
    'default' => 0,
    'min' => 0,
    'step' => 0.01,
    'visible_if' => ['field' => 'handling_enabled', 'value' => true],
]
```

`visible_if` supports `equals` by default, plus `not_equals`, `contains` and `in`. Hiding a field does not revoke permission or make its submitted value trustworthy.

## Discovery and placement

EasyCommerce discovers installed plugins in Joomla's `easycommerce` group. The settings service identifies payment plugins through `PaymentPluginInterface` and shipping plugins through `ShippingCarrierInterface`. This discovery expects the class naming pattern `Joomla\Plugin\EasyCommerce\ClassName\Extension\ClassName`, with the class in `src/Extension/ClassName.php`. For example, the supplied carrier is `Joomla\Plugin\EasyCommerce\ManualShipping\Extension\ManualShipping`.

Follow this convention for plugins that must appear in the Payments or Shipping settings lists. An arbitrary vendor namespace may boot correctly through Joomla and receive events while still being missed by this settings discovery. Implementing `ConfigurablePluginInterface` alone does not remove that limitation.

The plugin registry obtains the schema from the actual plugin instance. Merely implementing `ConfigurablePluginInterface` does not create a new settings tab for every kind of integration. For a credit, CRM or other general integration, either use Joomla's plugin parameters or register a settings tab through the [UI extension contract](./ui-extensions.md).

EasyCommerce appends country-availability fields to payment and shipping schemas. Payment configuration also receives the `checkout_currency` field. Do not create duplicate controls with those names. See [payment plugins](./payment-plugins.md) and [shipping plugins](./shipping-plugins.md) for their checkout behavior.

## Saving, defaults and validation

The administrator dialog reads `settings.getPluginConfig` and saves through `settings.savePluginConfig`. Both require `core.admin`; saving also uses the component's mutation request and CSRF checks. Use the existing dialog or an authenticated [plugin endpoint](./plugin-endpoints.md), rather than exposing credentials through a storefront route.

The current generic save path validates the shared country and currency settings, but **does not call your plugin's `validateConfiguration()` method**. That interface method alone will not reject a bad configuration on save. Check credentials and business rules before using them, as the `isConfigured()` example does. A custom save handler should call your validator explicitly and return translated field errors.

Additional details matter when building a custom settings screen:

- Schema defaults populate the form. For server reads, pass the same default to `getConfig('key', $default)`; schema defaults are not automatically merged by the trait.
- Ordinary keys are saved as a replacement configuration, not a general partial update. Include the full set of ordinary settings when using the generic save service.
- The service specially preserves omitted country/currency fields and existing encrypted secrets. Do not assume that preservation applies to every key.
- Arrays and booleans are JSON-encoded in storage. The trait decodes arrays, objects and JSON booleans. Numeric values can remain strings: validate and cast them where used.
- Configuration is cached in the plugin instance. `clearConfigCache()` is available to a plugin that changes settings during the same request.

## Credentials and dependency injection

Set both `type: password` and `encrypted: true` for a secret. A password input only masks the screen; the encryption flag controls storage. The settings response returns an empty value plus `configured: true` for a saved secret. Blank or masked secret submissions preserve the saved value. Do not build a “clear secret” feature by assuming an empty string deletes it.

At runtime, the trait asks `EncryptionServiceInterface` to decrypt the value. If decryption fails, that key is skipped rather than returned as ciphertext. Your integration should report that configuration needs attention, without logging the key itself.

Register your API client and business services in `services/provider.php`, then inject them into the plugin. Reading configuration or booting a plugin should not create a payment, call a remote API or send an email. Keep those actions in explicit event handlers or service methods. The [architecture guide](./architecture.md) explains the service boundary.

## Source examples

Paths below are relative to the multi-extension workspace:

- `easycommerce/com_easycommerce/admin/src/Interface/ConfigurablePluginInterface.php`
- `easycommerce/com_easycommerce/admin/src/Trait/ConfigurableTrait.php`
- `easycommerce/com_easycommerce/admin/src/Service/Plugin/PluginRegistryService.php`
- `easycommerce/com_easycommerce/admin/src/Service/Settings/SettingsService.php`
- `easycommerce/com_easycommerce/admin/src/Controller/SettingsController.php`
- `easycommerce/react-app/src/admin/components/settings/plugin_config_modal.tsx`
- `easycommerce/plugins/plg_easycommerce_manualshipping/src/Extension/ManualShipping.php`
