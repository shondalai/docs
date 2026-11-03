---
id: getting-started
title: Build Your First EasyCommerce Plugin
sidebar_label: Your First Plugin
description: Install a small Joomla plugin that listens for an EasyCommerce product save.
---

# Build your first plugin

This walkthrough creates **Acme Catalog**, a plugin that writes a product ID to the EasyCommerce log when a product is saved. It does not change the product, take payments, or send data anywhere.

You can [download the complete starter plugin](/downloads/easycommerce/plg_easycommerce_acmecatalog.zip), or create the files below. Use a local or staging Joomla site with EasyCommerce and its shared core library installed. Enable EasyCommerce logging at the **Info** level before testing.

The PHP examples use the Joomla plugin construction pattern used by EasyCommerce's Joomla 5/6 integrations. Check Joomla's [plugin methods guide](https://manual.joomla.org/docs/5.4/building-extensions/plugins/methods-and-arguments/) for the event subscription model.

## 1. Create the package

Create this directory structure. Put the manifest at the root of the ZIP, beside `services`, `src`, and `language`:

```text
acmecatalog/
├── acmecatalog.xml
├── services/
│   └── provider.php
├── src/
│   └── Extension/
│       └── AcmeCatalog.php
└── language/
    └── en-GB/
        ├── plg_easycommerce_acmecatalog.ini
        └── plg_easycommerce_acmecatalog.sys.ini
```

The plugin element, `acmecatalog`, is its installed name. Choose a unique name for a real integration. Use the same value in the manifest, `PluginHelper::getPlugin()`, language filenames, and any plugin metadata you later add.

## 2. Describe the plugin

Create `acmecatalog.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension type="plugin" group="easycommerce" method="upgrade">
    <name>PLG_EASYCOMMERCE_ACMECATALOG</name>
    <author>Example Developer</author>
    <version>1.0.0</version>
    <description>PLG_EASYCOMMERCE_ACMECATALOG_DESCRIPTION</description>
    <namespace path="src">Acme\Plugin\EasyCommerce\AcmeCatalog</namespace>
    <files>
        <folder plugin="acmecatalog">services</folder>
        <folder>src</folder>
        <folder>language</folder>
    </files>
    <languages folder="language">
        <language tag="en-GB">en-GB/plg_easycommerce_acmecatalog.ini</language>
        <language tag="en-GB">en-GB/plg_easycommerce_acmecatalog.sys.ini</language>
    </languages>
</extension>
```

`group="easycommerce"` makes the plugin available to EasyCommerce's event dispatcher. The namespace maps classes to `src`; Joomla creates this mapping during installation.

This event-only example can use a vendor namespace. Payment and shipping configuration discovery has additional naming conventions; read [configuration](configuration.md) before adapting this into a provider plugin.

## 3. Construct the plugin

Create `services/provider.php`:

```php
<?php

defined('_JEXEC') or die;

use Acme\Plugin\EasyCommerce\AcmeCatalog\Extension\AcmeCatalog;
use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use Psr\Log\NullLogger;

return new class implements ServiceProviderInterface {
    /** Register the plugin without doing any external work. */
    public function register(Container $container): void
    {
        $container->set(PluginInterface::class, static function (Container $container): PluginInterface {
            $plugin = new AcmeCatalog(
                $container->get(DispatcherInterface::class),
                (array) PluginHelper::getPlugin('easycommerce', 'acmecatalog')
            );
            $plugin->setApplication(Factory::getApplication());

            $services = Factory::getContainer();
            $plugin->setLogger($services->has('easycommerce.logger')
                ? $services->get('easycommerce.logger')
                : new NullLogger());

            return $plugin;
        });
    }
};
```

The provider injects the application and logger. EasyCommerce normally registers `easycommerce.logger` before it imports the plugin group. The null logger keeps this harmless example loadable if something boots it without EasyCommerce's services. It does not authorise an operation or hide a payment failure; the example only records a diagnostic message.

Do not call a remote API while constructing a plugin. Joomla may load your plugin when another payment or shipping method is selected.

## 4. Listen for the product event

Create `src/Extension/AcmeCatalog.php`:

```php
<?php

namespace Acme\Plugin\EasyCommerce\AcmeCatalog\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\EasyCommerce\Administrator\Event\Product\AfterProductSaveEvent;
use Joomla\Event\SubscriberInterface;
use Psr\Log\LoggerAwareInterface;
use Psr\Log\LoggerAwareTrait;

/** A minimal, read-only example of an EasyCommerce business-event listener. */
final class AcmeCatalog extends CMSPlugin implements SubscriberInterface, LoggerAwareInterface
{
    use LoggerAwareTrait;

    /** Map the exact event name to this plugin's handler. */
    public static function getSubscribedEvents(): array
    {
        return ['onEasyCommerceAfterProductSave' => 'afterProductSave'];
    }

    /** Record a product ID without logging its content or customer data. */
    public function afterProductSave(AfterProductSaveEvent $event): void
    {
        $this->logger?->info('Acme Catalog received product save', [
            'plugin' => 'acmecatalog',
            'product_id' => $event->getProductId(),
            'is_new' => $event->isNew(),
        ]);
    }
}
```

The event name is exact: `onEasyCommerceAfterProductSave`. The handler accepts **one event object**, not several positional arguments. The string subscription also avoids loading an EasyCommerce event class just to inspect this plugin's subscriptions.

Product saves can happen more than once, especially with autosave. A log entry per save is expected. A real integration must make external fulfilment or credits safe to retry.

## 5. Add the language files

Put these same two lines in both language files:

```ini
PLG_EASYCOMMERCE_ACMECATALOG="EasyCommerce - Acme Catalog Example"
PLG_EASYCOMMERCE_ACMECATALOG_DESCRIPTION="Records product-save events in the EasyCommerce log. This example does not change products or contact another service."
```

The `.sys.ini` file supplies extension-manager text. The regular `.ini` file is for plugin runtime translations. If you add messages used by PHP handlers, load your plugin language and use `Text::_('YOUR_KEY')`. React text is registered separately in [UI extensions](ui-extensions.md).

## 6. Install and test

1. ZIP the contents of the `acmecatalog` directory, or use the download above.
2. Install it through **System → Install → Extensions** in Joomla.
3. Open **System → Manage → Plugins**, search for **Acme Catalog**, and enable it.
4. In EasyCommerce, save a test product. You can edit a draft; no purchase is needed.
5. Open `easycommerce.log.php` in the log directory configured in Joomla. Look for **Acme Catalog received product save** and the product ID.
6. Disable the plugin and save the product again. No new Acme entry should be added.

For example, PowerShell can package your source directory like this:

```powershell
Compress-Archive -Path .\acmecatalog\* -DestinationPath .\plg_easycommerce_acmecatalog.zip
```

This guide's downloadable package is an instructional example, not a payment gateway or an external catalogue connector. Remove it when you finish experimenting.

## If nothing happens

| Symptom | Check |
| --- | --- |
| Joomla cannot install the ZIP | The XML manifest is at the archive root, and every listed directory exists. |
| Class not found | The namespace in XML matches the PHP class, including letter case and the `Extension` directory. Reinstall after changing the namespace. |
| No handler call | The plugin is enabled in the `easycommerce` group and implements `SubscriberInterface`. Check the exact event name. |
| No log entry | Logging is enabled, the minimum level includes Info, and you are reading Joomla's configured log directory. |
| More than one entry | Autosave or another save request ran. Do not assume one browser click equals one business event. |
| Save fails after adding your own code | Read the EasyCommerce log and PHP error log. An exception in a synchronous listener can fail the request. |

Next, learn about [event payloads and cancellation](events.md), or add [plugin settings](configuration.md) and [a customer-facing endpoint](plugin-endpoints.md).
