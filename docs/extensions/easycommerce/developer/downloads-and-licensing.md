---
id: downloads-and-licensing
title: Downloads, licenses, and purchased access
sidebar_label: Downloads and licensing
---

The Downloads plugin connects paid orders to downloadable packages. It also supports software license keys, domain activations, and Joomla extension updates. These are related capabilities, but a purchased ebook does **not** need a software license.

Use this guide when building a customer download screen, publishing releases from your own tooling, or integrating a separate fulfillment service. Begin with [Getting started](./getting-started.md), and use [Plugin endpoints](./plugin-endpoints.md) for the authentication and request format used below.

## Choose the right access model

| Product | Access model |
| --- | --- |
| A paid ebook or other one-time download without licensing | The paid order item establishes entitlement. No license key is generated. |
| Software with license keys and domain activations | The Downloads plugin creates and manages a license for the purchase. |
| Downloads supplied by a subscription or a licensed bundle | Access follows the applicable license, product coverage, and subscription state. |
| A custom video platform or another external service | Build an event-driven integration and maintain that service's entitlement records. A downloadable file package is not a video-streaming or DRM service. |

Do not enable licensing merely to make a non-software file appear in My Downloads. Also, do not replace the built-in access check with “a paid order exists for this email.” The current session, ownership, refund state, and the type of purchase all matter.

## Packages and versions

A product can have several packages, each with its own version history. For example, a course can have an ebook package and a worksheet package. Software can have an installable extension and a separate quickstart package.

The canonical package collection is `packages` inside the product's JSON `metadata`. This excerpt illustrates its shape:

```json
{
  "packages": [
    {
      "key": "ebook",
      "label": "Course ebook",
      "kind": "file",
      "icon": "",
      "description": "The downloadable course book.",
      "extension_element": "",
      "extension_type": "",
      "versions": [
        {
          "version": "1.1.0",
          "file_path": "courses/example/ebook-1.1.0.pdf",
          "storage_provider": "local",
          "release_date": "2026-11-01",
          "is_stable": true,
          "is_bugfix": true,
          "is_security": false,
          "changelog": "Corrected two examples in chapter 3."
        }
      ]
    }
  ]
}
```

`key` is the package's stable identifier; `label` is its customer-facing name. Supported `kind` values are `file`, `extension`, and `quickstart`. Use the extension fields for Joomla software updates, not for a PDF.

`is_stable`, `is_bugfix`, and `is_security` are independent booleans. A stable version can contain both bug fixes and security fixes. Set these flags on the version; they describe the release, not the whole product's purchase entitlement.

The plugin sorts versions and prefers the latest stable release when a customer does not request a particular version. It also understands older flat `metadata.versions` data and maintains a primary extension mirror for update serving. Use the current package-aware API or product editor rather than writing only the old flat field.

The metadata shape is useful when integrating with the product editor, but the normal write path is the API. Preserve unrelated product metadata, and do not make direct database updates part of a public integration contract.

## Publish a version

The built-in plugin ID is `downloads`. Its administrator endpoints include:

| Action | Method | Use |
| --- | --- | --- |
| `addVersion` | `POST` | Add a version to an existing or new package. |
| `listVersions` | `GET` | Inspect the product's configured versions. |
| `removeVersion` | `POST` | Remove a version entry. |
| `registerExtension` | `POST` | Associate a product with a Joomla extension element for updates. |

These require an authenticated administrator request and CSRF protection. They are not anonymous upload endpoints or a bearer-token release API. If you need unattended publishing, design a separately authenticated server-side integration instead of disabling these checks.

Upload the file to the configured storage first. Then send the following complete JSON body to:

```text
administrator/index.php?option=com_easycommerce&task=extensions.plugin&pluginId=downloads&action=addVersion&format=json
```

```json
{
  "product_id": 42,
  "package": {
    "key": "ebook",
    "label": "Course ebook",
    "kind": "file"
  },
  "version": "1.1.0",
  "file_path": "courses/example/ebook-1.1.0.pdf",
  "storage_provider": "local",
  "release_date": "2026-11-01",
  "is_stable": true,
  "is_bugfix": true,
  "is_security": false,
  "changelog": "Corrected two examples in chapter 3."
}
```

Required fields are `product_id`, `version`, and `file_path`. Set `storage_provider` explicitly to `local` or `s3`. Omitting it can result in the download path using the plugin's S3 default.

For later releases, `package` can be just the key, such as `"ebook"`. Omitting it targets `main`. A package object can supply its label, kind, description, icon, and extension mapping. A duplicate version within the selected package is rejected; the endpoint is not an overwrite operation. Inspect the existing versions before retrying a release after an ambiguous response.

Software releases can also include `min_joomla_version`, `max_joomla_version`, `min_php_version`, `stability`, and `checksum`. This call registers metadata; it does not transfer file bytes or prove that a configured local file is readable. Validate the resulting customer download after publishing.

## Read a customer's downloads

The site endpoint is:

```text
index.php?option=com_easycommerce&task=extensions.plugin&pluginId=downloads&action=customerDownloads&format=json
```

Use `GET`, the signed-in Joomla session, and the CSRF header. The handler resolves the customer from the session. Do not send another customer's ID or build your own email lookup.

The response combines eligible license-backed products and eligible one-time purchases. Package and version descriptions are returned without their private storage paths. Use the returned package collection when rendering a new UI; older top-level version fields are a compatibility convenience.

For a plain purchase, use the returned `order_item_id`. For licensed access, use the returned `license_id` as the download endpoint's `id` field. The identifiers are not interchangeable.

### Request the file

Send `POST` to the same route with `action=getDownloadUrl`. Supply exactly one access identifier.

An unlicensed paid purchase uses this complete body:

```json
{
  "order_item_id": 314,
  "product_id": 42,
  "package": "ebook",
  "version": "1.1.0"
}
```

A licensed purchase uses this complete body:

```json
{
  "id": 271,
  "product_id": 42,
  "package": "main"
}
```

`product_id`, `package`, and `version` are selectors, not authorization. The handler checks ownership and entitlement again. The client never supplies a storage path or arbitrary download URL. An unlicensed purchase grants its own product only; it does not inherit a licensed bundle's other products.

### Handle both response types

Despite its name, `getDownloadUrl` can return the file itself:

| Storage | Successful response |
| --- | --- |
| Local | Binary response with `Content-Disposition: attachment`. |
| S3 | JSON response with `success: true` and `data.url` containing a temporary signed URL. |

A JSON-only fetch helper can therefore cause the familiar symptom where a download button spins and then does nothing. A custom client must check the response before trying to parse JSON:

1. Reject an unsuccessful HTTP response and show a safe, translated error.
2. For an attachment, read a blob, use a sanitized filename, create an object URL, trigger a download link, and revoke the URL after the browser has started the download.
3. Otherwise require a JSON content type and validate `success` and `data.url` before navigating to the signed URL.
4. Reject HTML login pages and empty responses instead of saving them as files.

The complete built-in implementation is `plugins/plg_easycommerce_downloads/react-src/lib/api.ts`, function `downloadPluginFile()`. It also handles UTF-8 filenames, object URL cleanup, and safe failure categories. It is source to study or adapt, not an exported global SDK function that an independent plugin can import from the running site.

## How one-time purchase access is decided

The current `PurchaseDownloadService` deliberately uses a conservative fallback for unlicensed downloads. It requires an order linked to the authenticated customer's Joomla user, payment status `paid`, and an order status of `processing`, `completed`, `shipped`, or `delivered`.

The purchase must have positive quantity and a valid product/variation relationship. The product must be digital or explicitly downloadable. Refunded orders, subscription and renewal records, plan changes, licensing/subscription metadata, and existing license records are excluded from this fallback. An expired or revoked license must not be bypassed by falling back to the original paid order.

This path currently supports an unlimited download count (`download_limit = -1`). A configured expiry in days is still enforced from the paid or creation date. Finite download-count limits need a separate grant/counting implementation; do not advertise them as supported by this fallback.

These are the current built-in access rules, not a generic SQL recipe for third parties to duplicate. Prefer the authenticated endpoints. If your product needs different entitlements, implement and test a dedicated service rather than weakening this check.

The component also contains `Service/Download/DownloadService` and `DownloadServiceInterface`, which use download records and token-based permission records. Those are a separate data model from the Downloads plugin's package metadata and purchase fallback. A package key, license ID, order-item ID, download ID, and permission token are not interchangeable. Do not assume that calling a method in that service populates the package-based My Downloads screen.

## Guests who register after buying

A matching email address alone does not establish ownership. Some Joomla sites permit registration without email activation, so automatically attaching old purchases on email match would expose purchases to an unverified account.

The built-in account screen provides a guest-purchase claim flow:

1. The buyer signs in using an account with the checkout email address.
2. The buyer requests a verification code from the account page.
3. EasyCommerce sends the code to the stored guest customer's mailbox.
4. The buyer confirms the code. The service links the existing customer to the signed-in user without replacing the original order and license relationships.

The component tasks are `guestclaim.status` (`GET`), `guestclaim.request` (`POST`), and `guestclaim.confirm` (`POST`, JSON `{ "code": "12345678" }`). They are component tasks, not actions under `pluginId=downloads`. The POST requests require CSRF protection. No email, customer ID, or user ID is accepted as a claim target.

Codes expire, have limited attempts, and cannot be reused. Conflicting ownership is rejected. A custom account interface should use this flow and preserve its generic responses rather than reveal whether arbitrary email addresses have purchases.

## Storage and file safety

The Downloads configuration is stored in the component's `downloads` settings section. See [Configuration](./configuration.md). For local storage, `local_download_path` defaults to `media/easycommerce/downloads`, relative to the Joomla root.

A version can reference a key relative to that configured directory, such as `courses/example/ebook-1.1.0.pdf`, or an appropriate Joomla-root-relative path within the same directory. A leading slash is treated as a Joomla-root path, not an operating-system root. The resolver rejects traversal, URL schemes, drive paths, and paths that resolve outside the allowed directory, including escaping symlinks.

The web server must also prevent direct public access to paid local files. If a visitor can append the stored path to the site URL and download the file without signing in, that request bypasses the PHP entitlement check. Test direct HTTP access separately from the authenticated download button. Use server rules appropriate to the site's Apache or Nginx configuration.

For S3, keep objects private and configure the bucket, region, and credentials on the server. The customer receives a temporary signed URL after authorization; the default lifetime is 3,600 seconds. Do not put storage credentials or permanent public object URLs in the browser manifest, product card data, or logs.

The current customer download implementation explicitly supports `local` and `s3`. Shared storage adapters exist, but simply adding an arbitrary `storage_provider` string to product metadata does not register a working delivery integration.

## Software licensing and Joomla updates

For software, the Downloads plugin implements `LicenseablePluginInterface` and `UpdateServerPluginInterface`. The former describes generation, validation, activation, deactivation, renewal, and revocation operations. The latter describes extension mappings, update XML, version metadata, and authorized package delivery.

Implementing an interface alone does not arrange payment fulfillment. The built-in plugin also subscribes to order-payment, order-status, and subscription events and connects those events to its services. A replacement integration must supply its own lifecycle wiring and durable records. See [Events](./events.md), especially duplicate delivery and state-change handling.

For an ebook, leave licensing off and use `kind: file`. For Joomla software updates, provide an extension package with the correct element and type and configure the update-server integration. A release label in the store does not edit the extension's own XML manifest for you.

When calling license operations directly inside PHP, remember that a service method is not a browser ownership boundary. Authorize the caller before looking up or returning a license. Keep license keys out of general diagnostics and never treat a client-provided product, customer, or domain as already verified.

### Validate a license from installed software

The Downloads plugin exposes site actions `validate`, `activate`, and `deactivate` using `POST`. These actions do not require a Joomla session on the store: the license key is the credential. Call them from your extension's server-side code over HTTPS, keep keys out of public JavaScript, and use a bounded HTTP timeout.

For `validate`, send the following body to the site `extensions.plugin` route with `pluginId=downloads` and `action=validate`:

```json
{
  "license_key": "the-key-entered-by-the-site-administrator",
  "domain": "customer.example",
  "extension_element": "pkg_acme"
}
```

The validation handler checks the license and, when `extension_element` is provided, that its product covers that extension. Check both the HTTP response and the JSON `success` value. `activate` accepts the same identifiers and requires a domain; it can also record `joomla_version` and `php_version`. `deactivate` requires `license_key` and `domain`. Distinguish an unreachable store from an explicit invalid-license response in your customer-facing message.

### Serve Joomla update XML

Joomla's updater needs raw XML, so point it at the dedicated component task:

```text
https://store.example/index.php?option=com_easycommerce&task=updates.check&extension=pkg_acme
```

Do not use `extensions.plugin&pluginId=downloads&action=updates` as an update-server URL: that plugin action wraps its XML in JSON. `updates.check` returns the XML itself. The corresponding package task is `updates.download`; it validates the license and delegates delivery to the Downloads plugin. Preserve the generated package URL and download-key flow instead of replacing it with a public file path.

The built-in `UpdatesController` specifically resolves plugin ID `downloads`. Implementing `UpdateServerPluginInterface` on a plugin with another ID does not automatically replace that route. A different update-server implementation must provide its own routing and authorization.

## Validate the complete purchase flow

Test both a registered buyer and a guest who later verifies their account. Confirm that a paid, unlicensed ebook appears without generating a license, and that a different customer cannot request its file by changing `order_item_id`.

Repeat the download with local storage and S3, with an explicit version and with the default version selection. Test missing files, invalid package keys, expired access, refunded orders, inactive licenses, and attempts to request a product outside a licensed bundle. Verify that Bugfix and Security labels describe the selected release and do not alter access decisions.

For a custom fulfillment service, also test replayed payment events and refunds after fulfillment. See [Security and testing](./security-and-testing.md).

## Source references

Read `plugins/plg_easycommerce_downloads/src/Extension/Downloads.php`, its `CustomerApiTrait`, `PublicApiTrait`, `VersionApiTrait`, and `ProductHelperTrait`, and its `Service/PurchaseDownloadService.php` and `Service/LocalDownloadPath.php`. Guest ownership verification lives in `com_easycommerce/admin/src/Service/Customer/GuestPurchaseClaimService.php` and `site/src/Controller/GuestclaimController.php`. Joomla update responses use `com_easycommerce/site/src/Controller/UpdatesController.php`. Paths are relative to the EasyCommerce repository.
