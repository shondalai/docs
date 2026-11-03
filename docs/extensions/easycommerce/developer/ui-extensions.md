---
id: ui-extensions
title: Extend the administrator and customer interface
sidebar_label: UI extensions
---

An EasyCommerce plugin can add a product tab, an administrator page, a report, or a customer-account page without modifying the component's React application. PHP describes where the extension belongs. A JavaScript bundle supplies the React components.

Follow [Getting started](./getting-started.md) for the Joomla package and service provider. The examples here extend an `acme` plugin that implements `ExtensiblePluginInterface` and uses `ExtensiblePluginTrait`. If adapting the `acmecatalog` starter, update its element, namespace, provider, and language filenames consistently; the [endpoint example](./plugin-endpoints.md#a-complete-read-only-example) shows the `Acme` class.

## How the host loads a screen

1. EasyCommerce collects definitions from enabled `easycommerce` plugins.
2. The application receives the extension manifest and finds the component name for the selected tab or route.
3. It loads the URL returned by `getReactBundleUrl()`.
4. Your bundle registers its components with `window.EasyCommerce.registerPlugin()`.
5. EasyCommerce renders the selected component inside its existing React tree.

The administrator loads bundles through dynamic `import()`. The storefront uses a classic script element. Build a self-contained **IIFE** bundle so the same file works in both contexts. A bundle containing unresolved imports or top-level ES module exports will not work in the storefront loader.

## Available extension points

| PHP method | Where it appears | Component input |
| --- | --- | --- |
| `getMenuItems()` | Administrator navigation | Links to paths declared by `getRoutes()`. |
| `getRoutes()` | An administrator application route | No record props; use the host router to read route parameters. |
| `getProductTabs()` | Product editor | `formData`, `onChange(field, value)` |
| `getCustomerTabs()` | Customer detail tabs | `customerId` |
| `getOrderTabs()` | Sections on order detail | `orderId` |
| `getSettingsTabs()` | Settings tabs | `settings`, `onChange(completeSection)` |
| `getReportTabs()` | Reports tabs | `filters` from the reports page |
| `getAccountMenuItems()` | Customer-account navigation | A `component` also creates the associated account route. |
| `getAccountTabs()` | Customer-account route registration | Route is `/account/{id}`; no customer identity props. |
| `getLanguageStrings()` | Plugin translations | Map of language keys to translated strings. |

IDs must be unique within the relevant screen. Component names are case-sensitive and must match the names registered by the bundle. The registry supplies `pluginId`; your PHP definition does not need to add it to each entry. Lower `order` values appear first.

`getDashboardWidgets()` is present in the interface and extension manifest, but the current dashboard does not render those declarations. Do not promise a dashboard widget based on that method alone. Likewise, the current order extension point renders sections rather than a separate tab strip, despite the method's name.

## Add a product tab

Add the following methods to the extension class. This is an excerpt, not a second plugin class:

```php
public function getProductTabs(): array
{
    return [
        [
            'id' => 'acme-product',
            'labelKey' => 'PLG_EASYCOMMERCE_ACME_PRODUCT_TAB',
            'icon' => 'Package',
            'component' => 'ProductDetailsTab',
            'order' => 70,
            'showIf' => ['simple', 'variable', 'digital'],
        ],
    ];
}

public function getLanguageStrings(): array
{
    $language = \Joomla\CMS\Factory::getApplication()->getLanguage();
    $extension = 'plg_easycommerce_acme';

    $language->load($extension, JPATH_ADMINISTRATOR, 'en-GB', true);
    $language->load($extension, JPATH_ADMINISTRATOR, $language->getTag(), true);

    return [
        'PLG_EASYCOMMERCE_ACME_PRODUCT_TAB' =>
            \Joomla\CMS\Language\Text::_('PLG_EASYCOMMERCE_ACME_PRODUCT_TAB'),
        'PLG_EASYCOMMERCE_ACME_REFERENCE' =>
            \Joomla\CMS\Language\Text::_('PLG_EASYCOMMERCE_ACME_REFERENCE'),
    ];
}
```

Omit `showIf`, or return an empty array, to show a product tab for every product type. This controls visibility only; validate supported product types again when processing backend requests.

Install the language file through the plugin manifest. For this example, its English entries are:

```ini
PLG_EASYCOMMERCE_ACME_PRODUCT_TAB="Acme details"
PLG_EASYCOMMERCE_ACME_REFERENCE="External reference"
```

The following complete component edits a namespaced metadata value and preserves metadata owned by other plugins. It uses the product editor's normal save flow instead of issuing a separate save request on each keystroke.

```tsx
import type {ChangeEvent} from 'react';

type Metadata = Record<string, unknown>;

type Props = {
  formData: {metadata?: Metadata};
  onChange: (field: string, value: unknown) => void;
};

export function ProductDetailsTab({formData, onChange}: Props) {
  const metadata = formData.metadata ?? {};
  const existing = metadata.acme;
  const acme = existing && typeof existing === 'object' && !Array.isArray(existing)
    ? existing as Metadata
    : {};
  const reference = typeof acme.reference === 'string' ? acme.reference : '';

  const update = (event: ChangeEvent<HTMLInputElement>) => {
    onChange('metadata', {
      ...metadata,
      acme: {...acme, reference: event.target.value},
    });
  };

  return (
    <label style={{display: 'grid', gap: '0.5rem', padding: '1rem'}}>
      {window.Joomla.Text._('PLG_EASYCOMMERCE_ACME_REFERENCE')}
      <input type="text" value={reference} onChange={update} maxLength={120} />
    </label>
  );
}
```

Declare the `window.Joomla` typing in your project's global types, or use the declarations already supplied by your build. Product metadata is editable data, not trusted configuration: do not use this reference as authorization or store an API secret there.

## Register the bundle

This complete `src/index.ts` registers the component when the host is ready:

```ts
import type {ComponentType} from 'react';
import {ProductDetailsTab} from './ProductDetailsTab';

type Host = {
  registerPlugin: (
    id: string,
    components: Record<string, ComponentType<any>>
  ) => void;
};

const components = {ProductDetailsTab};

function register() {
  const host = (window as Window & {EasyCommerce?: Host}).EasyCommerce;
  host?.registerPlugin('acme', components);
}

if ((window as Window & {EasyCommerce?: Host}).EasyCommerce?.registerPlugin) {
  register();
} else {
  window.addEventListener('easycommerce-loaded', register, {once: true});
}
```

Registration replaces the plugin's component map. Register the complete map once rather than registering each component separately with the same plugin ID.

Do not call `createRoot()` or mount a second application. Your components already run under the host's router, query client, language provider, and theme provider. Do not bundle a second copy of React; it can cause invalid hook calls even when the code looks correct.

## Build and package assets

The following complete Vite configuration builds the small example above. Use versions compatible with the EasyCommerce release you support; do not assume the host's shared packages have a permanent independent ABI.

```ts
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../media/js',
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      name: 'EasyCommerceAcme',
      formats: ['iife'],
      fileName: () => 'bundle.js',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
});
```

Add any other host libraries you import to `external` and `globals`:

| Import | Host global |
| --- | --- |
| `react-dom` | `ReactDOM` |
| `react-router-dom` | `ReactRouterDOM` |
| `@tanstack/react-query` | `ReactQuery` |
| `@shondalai/ui-commons` | `UICommons` |
| `lucide-react` | `LucideReact` |
| `react-hot-toast` default import | `reactHotToast` |

The Lucide global contains a curated set of icons, not the entire package. Verify the icon in `react-app/src/shared/lucide-registry.ts`. The host does not expose a `react-dom/client` global. `EasyCommerceAdminUI` is administrator-only; the storefront exposes no working administrator components through it.

The plugin XML media section installs the built file in the location used by the trait:

```xml
<media destination="plg_easycommerce_acme" folder="media">
    <folder>js</folder>
</media>
```

The default `getReactBundleUrl()` looks for `media/plg_easycommerce_acme/js/bundle.js`. Override it to add a cache version, as the Downloads plugin does:

```php
public function getReactBundleUrl(): ?string
{
    $relative = 'media/plg_easycommerce_acme/js/bundle.js';
    $absolute = JPATH_ROOT . '/' . $relative;

    return is_file($absolute)
        ? \Joomla\CMS\Uri\Uri::root() . $relative . '?v=' . filemtime($absolute)
        : null;
}
```

Returning a JavaScript URL does not automatically load a separate CSS file. If you generate CSS, package it and load it through Joomla's Web Asset Manager, or deliberately include scoped styles in your bundle. Do not assume the host's Tailwind build has scanned a third-party plugin's class names.

## Add pages and navigation

An administrator menu entry and route are separate declarations. This excerpt adds both:

```php
public function getMenuItems(): array
{
    return [[
        'id' => 'acme-library',
        'path' => '/acme-library',
        'labelKey' => 'PLG_EASYCOMMERCE_ACME_LIBRARY',
        'icon' => 'Package',
        'order' => 80,
    ]];
}

public function getRoutes(): array
{
    return [[
        'path' => '/acme-library',
        'component' => 'LibraryPage',
    ]];
}
```

Register `LibraryPage` in the same component map and return its translated label from `getLanguageStrings()`. Route paths are application paths, not complete Joomla URLs. The administrator router does not use the interface's historical `exact` flag; define paths using the host router's current conventions.

For an account page, use `getAccountMenuItems()` with a `component`:

```php
public function getAccountMenuItems(): array
{
    return [[
        'id' => 'acme-library',
        'path' => '/account/acme-library',
        'labelKey' => 'PLG_EASYCOMMERCE_ACME_LIBRARY',
        'icon' => 'Package',
        'component' => 'MyLibraryPage',
        'order' => 60,
    ]];
}
```

Account menu routes take precedence when an account-tab definition produces the same path. Choose one declaration for each route. No customer ID is passed to these pages: call an authenticated endpoint that derives the customer from the server-side session.

## Settings, reports, and permissions

A settings tab ID such as `acme-settings` maps to the `acme` settings section. Its component receives the section object and must call `onChange({...settings, changedField: value})` with the complete new section. This edits the form state; it does not register a backend settings section or make it persist automatically. Follow [Configuration](./configuration.md) for the supported storage and validation path.

Report components receive the page's current `filters` object. Include the filters in your query key, send supported values to your backend, and validate them there. Do not assume an object captured on the first render remains current after a date-range change.

Navigation entries and hidden tabs are presentation, not authorization. A user can call an endpoint directly. Enforce ownership and Joomla ACL in the backend as explained in [Plugin endpoints](./plugin-endpoints.md) and [Security and testing](./security-and-testing.md). The site extension manifest is public, so keep secrets and private records out of every manifest definition.

## Theme, overlays, and accessibility

Use the host's shared controls when they fit. Keep styling scoped to your plugin, use the host's colour variables, and test light and dark modes separately. Avoid setting classes or theme attributes on the whole Joomla document.

Dialogs and menus need the same theme and stylesheet scope as their trigger. The built-in Downloads plugin's portal helper looks inside `#easycommerce-app`, then `#ec-store-root`, then `.app-container`. Prefer the shared dialog components or a portal container within the active application rather than an unstyled portal directly under `document.body`. Treat those DOM selectors as integration details to check when upgrading, not as a universal Joomla API.

Give form controls visible labels, preserve keyboard focus, expose loading and error states, and return focus when a dialog closes. Do not display raw HTML from an API error or trust record IDs because they came from a visible UI control.

## Test the installed plugin

Build and install the plugin package, then confirm that the manifest contains its definitions, its bundle request returns JavaScript, and its component appears in `window.EasyCommerce.plugins.acme`. Test administrator and storefront screens independently: they use different bundle loaders and different API permissions.

Save and reopen a product to verify metadata persistence. Test route reloads, browser back navigation, missing permissions, another customer's record ID, translations, mobile widths, and light/dark dialogs. A menu label appearing successfully does not prove that the bundle or its endpoints work.

For backend lifecycle work, continue with [Events](./events.md).

## Source references

The implementation lives in `com_easycommerce/admin/src/Service/Plugin/ExtensionRegistryService.php`, `react-app/src/admin/contexts/PluginContext.tsx`, `react-app/src/site/contexts/PluginContext.tsx`, and the administrator/store entry files. `plugins/plg_easycommerce_downloads/react-src/index.ts` and its `vite.config.ts` provide a complete built-in bundle example. Paths are relative to the EasyCommerce repository.
