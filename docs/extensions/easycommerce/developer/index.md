---
id: index
title: EasyCommerce Developer Guide
sidebar_label: Developer Overview
description: Build EasyCommerce plugins for payments, shipping, downloads, customer accounts, AI, and other integrations.
---

# Build an EasyCommerce integration

EasyCommerce plugins let you connect a store to another service, add tools to its administrator, and extend the customer account. Most integrations belong in a Joomla plugin in the **`easycommerce` plugin group**. You can ship that plugin separately from EasyCommerce.

Start with a small, working plugin. Then add only the features your integration needs. You do not need to build a React application to listen for an order or product event.

## Start here

1. [Build your first plugin](getting-started.md). Install a small product-save listener and check its output.
2. [Understand the architecture](architecture.md). Learn where plugin code runs and how it gets EasyCommerce services.
3. [Add settings](configuration.md), [handle events](events.md), or choose a guide below.
4. [Test and package your integration](security-and-testing.md) before distributing it.

## Choose your integration

| You want to… | Start with | What to expect |
| --- | --- | --- |
| Send paid orders to a fulfilment or accounting service | [Events](events.md) and [automation](automation-and-integrations.md) | Listen to payment changes, queue work, and prevent duplicate processing. |
| Add a payment gateway | [Payment plugins](payment-plugins.md) | Implement provider verification and refunds, and check the current checkout and hosted-provider registration requirements. Installing an arbitrary gateway plugin alone is not enough for every checkout path. |
| Quote delivery prices | [Shipping plugins](shipping-plugins.md) | Return rates through the carrier event. Label creation and live tracking have separate integration limits. |
| Sell files or add software licences | [Downloads and licensing](downloads-and-licensing.md) | Reuse purchase access and secure delivery. An ebook does not need a software licence. |
| Add a product editor tab or customer account page | [UI extensions](ui-extensions.md) | Register metadata in PHP and components in a separate JavaScript bundle. |
| Give your plugin a JSON endpoint | [Plugin endpoints](plugin-endpoints.md) | Declare the action and HTTP method, then enforce permissions and ownership in the handler. |
| Show AI usage or sell AI credits | [AI and credits](ai-and-credits.md) | Follow the AICore credits plugin for paid fulfilment and account usage. |
| Call AI from a store feature | [AI and credits](ai-and-credits.md) | Use the shared client, feature checks, response validation, and streaming where appropriate. |
| Extend email, tax, or subscription workflows | [Automation and integrations](automation-and-integrations.md) | Use the relevant service events and keep expensive work outside the customer request. |

## What these guides cover

The examples follow the EasyCommerce source available with this documentation. They explain both the extension contract and the code that actually calls it. Check the matching source when targeting another EasyCommerce release; an event class or interface method alone does not prove that a screen uses it.

Complete starter files are identified as such. Shorter snippets are examples to place in your own plugin or service. Example names such as `acmecatalog` are placeholders for your company's unique plugin name.

There is a [typed event reference](event-reference.md) for finding event names, payload methods, and their dispatching services. The task endpoints described here are EasyCommerce's Joomla component endpoints; they are not a promise of a separate public REST SDK or automatic Joomla API-token authentication.

## Useful reference implementations

Source paths below are relative to the multi-extension source workspace. Inside an installed Joomla site, a plugin such as `easycommerce/plugins/plg_easycommerce_downloads` is installed as `plugins/easycommerce/downloads`.

| Source | What it demonstrates |
| --- | --- |
| `easycommerce/plugins/plg_easycommerce_downloads` | Product settings, packages, licences, protected downloads, administrator routes, and account tabs. |
| `easycommerce/plugins/plg_easycommerce_stripe` and `plg_easycommerce_paypal` | Provider-specific checkout, webhooks, refunds, and recurring payments. |
| `easycommerce/plugins/plg_easycommerce_razorpay` | An adapter using the shared hosted-payment services. |
| `easycommerce/plugins/plg_easycommerce_manualshipping` | A shipping provider without an external carrier API. |
| `easycommerce/plugins/plg_easycommerce_fedex`, `plg_easycommerce_ups`, and `plg_easycommerce_dhl` | Carrier-rate integrations. |
| `aicore/plugins/plg_easycommerce_aicredits` | An integration owned by another component that extends EasyCommerce products and accounts. |
| `easycommerce/plugins/plg_easycommerce_ai` and `plg_task_easycommerce_ai` | Store AI hooks and scheduled AI work. |

Use these as references, rather than copying an entire plugin and changing its name. Their credentials, database tables, permissions, and provider-specific checks have different purposes.
