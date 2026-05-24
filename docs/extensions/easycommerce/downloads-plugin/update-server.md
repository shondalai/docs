---
id: update-server
title: Joomla Update Server
sidebar_label: Update Server
sidebar_position: 5
---

# Joomla Update Server

The downloads plugin emits a Joomla-compatible update XML for each registered extension. Customer sites point their `<updateservers>` at the plugin's endpoint, Joomla calls it on every update check, and the plugin returns the latest version (with a signed download URL) when the calling license validates.

## Endpoint contract

The plugin serves two routes through the EasyCommerce site-side `UpdatesController`:

| Route | Purpose |
|-------|---------|
| `task=updates.check&extension={element}` | Returns the update XML. Joomla appends `&license_key={key}` automatically once the customer has saved a Download Key. |
| `task=updates.download&extension={element}&license_key={key}&domain={domain}` | Streams or redirects to the actual ZIP after validating license + domain. |

Both are public routes. Validation happens inside the handlers.

### URL format

```
https://yoursite.com/index.php?option=com_easycommerce
    &task=updates.check
    &extension={EXTENSION_ELEMENT}
    [&license_key={LICENSE_KEY}]
    [&domain={DOMAIN}]
```

`{EXTENSION_ELEMENT}` is the manifest element such as `com_easyforms` or `pkg_easyforms`. The plugin maps `com_xyz` to `pkg_xyz` (and vice versa) automatically when looking up the matching product, so packages and their inner components both resolve.

## Registering an extension for updates

There are two paths.

### Through the admin Downloads tab

1. Open the product, switch to the **Downloads** tab.
2. Fill in the licensing block, including the **Extension element** (for example `pkg_easyforms`) and the **Extension type** (`package`, `component`, `module`, `plugin`, `library`, `template`).
3. Click **Register extension**. The plugin writes a row to `#__easycommerce_extensions` and stamps `metadata.licensing.extension_element` on the product so legacy lookups still resolve.

### Through the admin API (release pipelines)

```
POST /index.php?option=com_easycommerce
    &task=extensions.plugin
    &pluginId=downloads
    &action=registerExtension

{
    "product_id": 123,
    "element": "pkg_easyforms",
    "type": "package",
    "metadata": {
        "name": "EasyForms",
        "client": "site",
        "info_url": "https://shondalai.com/easyforms",
        "changelog_url": "https://shondalai.com/easyforms/changelog",
        "maintainer": "BulaSikku Technologies",
        "maintainer_url": "https://shondalai.com"
    }
}
```

## Uploading a new version

A release pipeline calls:

```
POST /index.php?option=com_easycommerce
    &task=extensions.plugin
    &pluginId=downloads
    &action=addVersion

{
    "product_id": 123,
    "version": "6.0.15",
    "file_path": "downloads/easyforms/easyforms_v6.0.15.zip",
    "storage_provider": "s3",
    "release_date": "2026-04-15",
    "changelog": "- Fixed...",
    "min_joomla_version": "4.4",
    "max_joomla_version": "",
    "min_php_version": "8.1",
    "stability": "stable",
    "checksum": "sha256-here"
}
```

The version is stored on the product's `metadata.versions` array. SHA-256 checksum and file size are computed at insert time when the file is local. For S3, supply the checksum yourself.

| Field | Notes |
|-------|-------|
| `version` | Semantic version, used as-is in the update XML `<version>` element. |
| `file_path` | For `local`, path under `media/easycommerce/downloads`. For `s3`, the object key. |
| `storage_provider` | `local` or `s3`. Controls how the download URL is generated. |
| `stability` | `stable`, `beta`, `alpha`, `dev`. Only `stable` is returned as the latest version by default. |
| `min_joomla_version`, `max_joomla_version` | Targets the `<targetplatform>` element. |
| `min_php_version` | Targets `<php_minimum>`. |
| `changelog` | Plain text or markdown. Surfaced in the customer downloads list. |

## Pointing your extension at the update server

In each shipped extension's manifest:

```xml
<updateservers>
    <server type="extension" name="EasyForms Updates" priority="1">
        https://yoursite.com/index.php?option=com_easycommerce&amp;task=updates.check&amp;extension=pkg_easyforms
    </server>
</updateservers>
```

Use the matching `type`:

| Extension kind | `type` value |
|----------------|--------------|
| Component | `extension` |
| Package | `extension` |
| Plugin | `extension` |
| Module | `extension` |

The plugin handles the package/component aliasing internally, so a single feed works for both `com_easyforms` and `pkg_easyforms`.

## Download Key handshake

The plugin emits a `<dlid prefix="license_key=" suffix=""/>` element. Joomla 4 and 5 surface this as a **Download Key** field on the matching `#__update_sites` row. Once the customer pastes their license key there, Joomla appends `&license_key={KEY}` to every subsequent `updates.check` and `updates.download` request. The plugin uses that key to:

1. Validate the license.
2. Auto-activate the calling site's `Uri::root()` if it is not yet in `#__easycommerce_license_activations`.
3. Return a personalized `<downloadurl>` that resolves to the ZIP.

If the license is missing or invalid, the response is still a well-formed `<updates>` document, but the `<downloadurl>` points at the unauthenticated placeholder, which forces Joomla to prompt for the key.

## Sample update XML

```xml
<?xml version="1.0" encoding="utf-8"?>
<updates>
  <update>
    <name>EasyForms</name>
    <description>EasyForms package</description>
    <element>pkg_easyforms</element>
    <type>package</type>
    <version>6.0.15</version>
    <infourl title="EasyForms">https://shondalai.com/easyforms</infourl>
    <changelogurl>https://shondalai.com/easyforms/changelog</changelogurl>
    <downloads>
      <downloadurl type="full" format="zip">
        https://yoursite.com/index.php?option=com_easycommerce&amp;task=updates.download&amp;extension=pkg_easyforms&amp;license_key=...&amp;domain=...
      </downloadurl>
    </downloads>
    <sha256>...</sha256>
    <filesize>1234567</filesize>
    <tags><tag>stable</tag></tags>
    <maintainer>BulaSikku Technologies</maintainer>
    <maintainerurl>https://shondalai.com</maintainerurl>
    <targetplatform name="joomla" version="4.4" />
    <php_minimum>8.1</php_minimum>
    <stability>stable</stability>
    <dlid prefix="license_key=" suffix=""/>
  </update>
</updates>
```

## Validation flow

`UpdateServerService::validateUpdateRequest()` runs these checks in order:

1. Resolve the extension to a set of product IDs (registry row, `metadata.licensing.extension_element`, product alias, version file path tokens).
2. Call `LicenseService::validateLicense($key, $domain)`.
3. Confirm the license grants access to one of the resolved product IDs (covers bundles).
4. If the domain is not yet activated, attempt activation. If the cap is full, fail with the activation error.

Any failure returns an empty `<updates></updates>` body so Joomla simply reports no update is available.

## Best practices

1. Use semantic versions in `version`.
2. Provide a `changelog_url` so Joomla 4+ can surface release notes in the update UI.
3. Keep `min_joomla_version` and `max_joomla_version` accurate, otherwise sites on the wrong platform will see updates that fail at install.
4. Stamp checksums on every release.
5. Hold beta versions in `stability = beta`; only stable releases are returned as the latest.

## Related

- [License management](license-management.md)
- [Customer portal](customer-portal.md)
