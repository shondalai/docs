---
id: plugin-endpoints
title: Plugin endpoints
sidebar_label: Plugin endpoints
---

An EasyCommerce plugin can expose small JSON endpoints for its own screens and integrations. The component handles routing and the response envelope. Your plugin validates the input, checks access to the requested records, and calls its service layer.

Start with the plugin package in [Getting started](./getting-started.md). Add `ExtensiblePluginInterface` and `ExtensiblePluginTrait` when the plugin needs endpoints or UI extensions. Business events are a separate integration mechanism; see [Events](./events.md).

## How a request reaches your plugin

The route is a Joomla component task:

```text
index.php?option=com_easycommerce&task=extensions.plugin&pluginId=acme&action=accountSummary&format=json
```

For administrator requests, use the administrator entry point:

```text
administrator/index.php?option=com_easycommerce&task=extensions.plugin&pluginId=acme&action=accountSummary&format=json
```

The request passes through `ExtensionsController`, `ExtensionRegistryService`, and then the plugin's `handleApiRequest()`. The trait selects a declared endpoint and calls its handler. This does not dispatch a Joomla event.

The registry discovers enabled plugins in the `easycommerce` group that implement `ExtensiblePluginInterface`. Keep `getPluginId()` unique and consistent with your installed plugin element. The handler is not a separately accessible PHP file.

These routes do not use Joomla's Web Services `/api/index.php/v1/` API. Do not assume that adding a bearer token authenticates a request to them. The built-in browser endpoints use a Joomla session and CSRF token.

## Declare an endpoint

Each entry in `getApiEndpoints()` contains:

| Key | Purpose |
| --- | --- |
| `action` | The action sent in the URL. Use a distinct name for each operation. |
| `method` | The allowed HTTP method, such as `GET` or `POST`. Always set it explicitly. |
| `handler` | A callable method on your plugin class. A protected method works with the trait. |
| `auth` | Whether the controller requires its normal authenticated access checks. Defaults to `true`. |
| `admin` | Whether the endpoint is restricted to the administrator entry point. Defaults to `false`. |

Use `GET` for reads and `POST` for changes. Do not expose the same action name with different authentication requirements. The administrator controller reads the first matching action's authentication flag, while the trait also resolves the HTTP method and client context.

### A complete read-only example

This is a complete extension class for an `acme` plugin using the manifest and service provider pattern in [Getting started](./getting-started.md). That guide's starter uses `acmecatalog`; when adapting it, also change the installed plugin element, namespace, provider's class import, and language prefix to match this example. It returns only the current session's account identity. No caller-supplied user or customer ID is accepted.

```php
<?php

namespace Acme\Plugin\EasyCommerce\Acme\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Language\Text;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\EasyCommerce\Administrator\Interface\ExtensiblePluginInterface;
use Joomla\Component\EasyCommerce\Administrator\Trait\ExtensiblePluginTrait;

final class Acme extends CMSPlugin implements ExtensiblePluginInterface
{
    use ExtensiblePluginTrait;

    protected $autoloadLanguage = true;

    /** Identify this plugin in the extension registry. */
    public function getPluginId(): string
    {
        return 'acme';
    }

    /** Declare the operations available through extensions.plugin. */
    public function getApiEndpoints(): array
    {
        return [
            [
                'action' => 'accountSummary',
                'method' => 'GET',
                'handler' => 'apiAccountSummary',
                'auth' => true,
                'admin' => false,
            ],
        ];
    }

    /** Return the signed-in account's identity without accepting an ID. */
    protected function apiAccountSummary(array $input): array
    {
        $app = Factory::getApplication();
        $user = $app->getIdentity();

        if (!$user || $user->guest || (int) $user->id <= 0) {
            return $this->apiError(Text::_('JERROR_ALERTNOAUTHOR'), 401);
        }

        $app->setHeader('Cache-Control', 'no-store, private', true);

        return $this->apiResponse(true, [
            'user_id' => (int) $user->id,
            'name' => (string) $user->name,
        ]);
    }
}
```

For an order, subscription, license, or project endpoint, also verify that the requested record belongs to that identity. A Joomla user ID and an EasyCommerce customer ID are different identifiers. Resolve their association on the server; never use an input `customer_id` as proof of ownership.

## Authentication and permissions

The two entry points have different guards:

| Entry point | Controller checks |
| --- | --- |
| Site, `auth: true` | Valid CSRF token, including for `GET`, and a signed-in Joomla identity. |
| Site, `auth: false` | No session or CSRF requirement from this controller. The handler must implement its own authentication where needed. |
| Site, `admin: true` | Request rejected. |
| Administrator | CSRF is always checked. With `auth: true`, `core.manage` on `com_easycommerce` is also required. |

`admin: false` does not mean “site only.” An administrator request can still reach a matching endpoint. If an operation must run only in a particular Joomla client, check that explicitly in the handler.

For an administrator mutation, declare `auth: true` and `admin: true`, then check the permission needed for that operation. General component access is not permission to create, edit, or delete every record.

The following is a guard excerpt for a handler that edits data:

```php
$user = Factory::getApplication()->getIdentity();

if (!$user || (
    !$user->authorise('core.edit', 'com_easycommerce')
    && !$user->authorise('core.admin', 'com_easycommerce')
)) {
    return $this->apiError(Text::_('JERROR_ALERTNOAUTHOR'), 403);
}

// Validate the request, then call your injected application service.
// That service must also enforce any record-specific restrictions.
```

Public integrations, such as remote software-license validation, can legitimately use `auth: false`. That flag is not a security implementation. Validate the credential or signature, limit repeated attempts, restrict the returned information, and avoid putting secrets in query strings. Payment webhooks have their own gateway flow; do not redirect them to an unprotected generic plugin action.

## Call an endpoint from a plugin screen

Use the API URL and token injected by Joomla, so installations in subdirectories and administrator sessions use the correct entry point. The CSRF header value is Joomla's session token name. Do not use the literal string `csrf.token` or hard-code a token.

This complete JavaScript helper is suitable for JSON endpoints inside the EasyCommerce application. It deliberately refuses an API URL on another origin.

```js
export async function callPlugin(pluginId, action, data = {}, method = 'GET') {
  const options = window.Joomla?.getOptions('com_easycommerce') ?? {};
  const base = options.apiUrl || options.baseUrl;
  const token = options.csrfToken || window.Joomla?.getOptions('csrf.token');

  if (!base || !token || !['GET', 'POST'].includes(method)) {
    throw new Error('Plugin API is not available in this context.');
  }

  const url = new URL(base, window.location.href);
  if (url.origin !== window.location.origin) {
    throw new Error('Unexpected plugin API origin.');
  }

  if (method === 'GET') {
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    }
  }

  url.searchParams.set('option', 'com_easycommerce');
  url.searchParams.set('task', 'extensions.plugin');
  url.searchParams.set('pluginId', pluginId);
  url.searchParams.set('action', action);
  url.searchParams.set('format', 'json');

  const response = await fetch(url, {
    method,
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'X-CSRF-Token': token,
      ...(method === 'POST' ? {'Content-Type': 'application/json'} : {}),
    },
    ...(method === 'POST' ? {body: JSON.stringify(data)} : {}),
  });

  if (!(response.headers.get('Content-Type') || '').includes('application/json')) {
    throw new Error('The server did not return a JSON response.');
  }

  const result = await response.json();
  if (!response.ok || result.success !== true) {
    throw new Error(result.message || 'The request could not be completed.');
  }

  return result.data;
}

// Returns the accountSummary handler's data, not another nested envelope.
const account = await callPlugin('acme', 'accountSummary');
```

Present failures using translated UI messages in your screen. Do not automatically retry mutations: a timeout can occur after the operation has succeeded. Use an operation ID and server-side deduplication when retries are part of the design.

The site controller merges query/form input with a JSON body, with body values taking precedence, and removes routing keys before dispatch. The administrator controller prefers a JSON body when supplied and otherwise passes request input. In both cases, treat `$input` as untrusted and explicitly select the fields your operation supports.

## Responses and errors

The trait helpers return arrays for the controller to serialize:

```php
return $this->apiResponse(true, ['id' => $recordId]);
return $this->apiError(Text::_('PLG_EASYCOMMERCE_ACME_INVALID_REFERENCE'), 400);
```

The successful wire response has one data envelope:

```json
{
  "success": true,
  "data": {"id": 42}
}
```

Use safe, translated error messages. Return `apiError()` for expected validation and access failures; do not use a thrown `InvalidArgumentException` for ordinary form validation, because the extension controllers treat it as a missing action and respond with `404`.

Common responses are `400` for validation, `401` for an unauthenticated site request, `403` for access or CSRF failures, and `404` for an unknown plugin/action. A method mismatch currently resolves as a missing action, rather than a guaranteed `405`. Unexpected exceptions become a server error and are logged. The site deliberately conceals exception details.

The administrator controller can preserve the trait's structured `errors` array; the site controller returns the safe error message and does not preserve that array. Do not depend on identical field-error handling across both clients.

File endpoints are an exception to the JSON contract. The Downloads plugin can return a binary attachment; see [Downloads and licensing](./downloads-and-licensing.md).

## Before shipping

Test a signed-in owner, another customer, a guest, an administrator without the relevant permission, a missing CSRF token, a wrong method, and malformed input. Check that disabled plugins are not callable and that logs contain useful identifiers without secrets or private response bodies.

See [Configuration](./configuration.md) for settings and [Security and testing](./security-and-testing.md) for the wider validation checklist.

## Source references

These contracts come from `com_easycommerce/admin/src/Interface/ExtensiblePluginInterface.php`, `admin/src/Trait/ExtensiblePluginTrait.php`, `admin/src/Service/Plugin/ExtensionRegistryService.php`, and the site and administrator `ExtensionsController.php` classes. Paths in this guide are relative to the EasyCommerce repository.
