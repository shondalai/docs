---
id: multilingual-support
title: Multilingual Support
sidebar_label: Multilingual Support
description: Configure Joomla languages, multilingual products and categories, storefront navigation, customer emails and invoice languages in EasyCommerce.
---

# Multilingual Support

EasyCommerce uses Joomla's languages to control which products customers discover, which interface labels they see, and the language retained for orders and their messages. Configure Joomla first, then assign languages to your catalogue and translate the text your customers will read.

## What the language settings mean

| Setting | What it controls |
|---------|------------------|
| Joomla site language | The current storefront and account interface language |
| Product or category **Content language** | Where that record appears in the multilingual catalogue |
| **All languages (*)** | Makes one record available across languages; it does not translate its text |
| Email template language | A language-specific version of an email's subject and body |
| Order language | The language recorded at checkout for later customer messages and documents |

Installing a Joomla language pack translates Joomla's own interface. EasyCommerce labels also need EasyCommerce translations or Joomla language overrides. Product names, descriptions and other text you write are not automatically translated.

## 1. Configure Joomla languages

In the Joomla administrator:

1. Open **System → Install → Languages** and install the site language packs you need.
2. Open **System → Manage → Content Languages**. Publish each language and check its language tag and URL language code, such as `fr-FR` and `fr`.
3. In **System → Manage → Languages**, select the default **Site** language. This is also the fallback for transactions without a usable recorded language.
4. Open **System → Manage → Plugins** and enable **System - Language Filter**. Set **Item Associations** to **Yes** to let the language switcher open equivalent products and categories. EasyCommerce's public catalogue language filtering follows this plugin.
5. Configure a published home menu item for each language. It can be your existing Joomla homepage; the shop does not need to become the homepage.
6. Publish Joomla's **Language Switcher** site module in a visible template position and assign it to the store pages.

See Joomla's [multilingual setup guide](https://guide.joomla.org/user-guide/languages/languages-setup-a-multilingual-site) and [Language Switcher reference](https://guide.joomla.org/help-pages-references/modules-site/site-modules-language-switcher) for the full Joomla configuration.

Published content languages supply the product/category selectors. Installed site language packs supply the languages available for transaction rendering. Set up both for every language you intend customers to use.

## 2. Create store menu items for each language

Use Joomla menu items to give each language a clear entry into the store:

| Page | Menu Item Type | Example English / French titles |
|------|----------------|---------------------------------|
| Shop | **EasyCommerce → Shop** | Shop / Boutique |
| Cart | **EasyCommerce → Cart** | Cart / Panier |
| Account | **EasyCommerce → Account - My Account** | My Account / Mon compte |
| Optional category landing page | **EasyCommerce → Category View** | Books / Livres |

Set each menu item's **Language** to its intended language and publish it. A shared menu item can use **All**, but language-specific entries give you translated menu titles and distinct routing bases. You do not need a separate menu item for every product or nested category. Checkout is reached from the cart; it does not have a dedicated EasyCommerce menu item type.

For a catalogue listing, open each Shop menu item's **Display** tab and set **Page Layout** to **Shop Page Layout**. The home layout is a storefront landing page and may include a hero section instead.

For a category menu item, choose a category in the same language or a shared category. Its catalogue boundary remains in effect when customers filter, sort or paginate. Selecting another category narrows that boundary; it does not open the whole shop.

Use Joomla's menu-item associations to link equivalent shop entry pages. Link equivalent products and categories in their EasyCommerce editors as described below. Provide a published, accessible Shop or matching catalogue menu for each target language so Joomla can build the destination URL. A suitable shared menu also works; language-specific menus take precedence.

Navigation between languages or different Joomla menu contexts may reload the page. With item associations enabled, entering or leaving a product or category also reloads the page so Joomla's Language Switcher and alternate-language links describe the page currently being viewed.

See [Menu Configuration](../getting-started/menu-setup.md) for the available store menu types.

## 3. Assign languages to products and categories

### Products

1. Open **Components → EasyCommerce → Products**.
2. Edit a product and open the **General** tab.
3. Set **Content language** to a published Joomla content language or **All languages (*)**.
4. Select compatible categories, save the product, then reopen it to check the saved assignment.

### Categories

Open **EasyCommerce → Categories**, create or edit a category, and set **Content language** in the category form. Category names and descriptions remain the text you enter.

The following rules keep the category tree consistent:

| Assignment | Allowed |
|------------|---------|
| French product → French category | Yes |
| French product → shared `*` category | Yes |
| French product → English category | No |
| Shared `*` product → English and French categories | Yes |
| French category → shared `*` parent | Yes |
| French category → French parent | Yes |
| French or shared category → English parent | No |

Changing a category's language also checks its descendants and assigned products. For example, you cannot make a shared parent French while it still contains an English branch. Adjust the affected records first. Invalid assignments show a validation message without saving the change.

### Find and maintain records by language

The **Content language** filter on the product and category lists has two distinct shared/all choices:

- **Show all languages** shows records from every language, including shared records.
- **All languages (*)** shows only records explicitly assigned to `*`.
- A named language shows records assigned to that language.

These administrator filters are independent of your administrator interface language. Filtering a category picker does not remove already selected memberships from other language branches when you save a shared product.

Full-product import/export preserves the language assignment. When moving a catalogue to another site, publish the corresponding Joomla content languages there before importing. Invalid language or category combinations are rejected. A partial product update that omits the language keeps the existing assignment. Association IDs are not portable between sites; link the imported records in the destination site's editors.

### Link equivalent products and categories

Create and save the records in each language first, then:

1. Edit a product's **General** tab or open the category edit form.
2. Under **Content language**, find **Language associations**.
3. Search for the equivalent record in each target language and select it. Products link to products; categories link to categories.
4. Save. Reopen either record to verify the reciprocal links. A group can contain one record per language.
5. Visit the storefront page and use Joomla's **Language Switcher** to open its equivalent page.

Associations use Joomla's native association storage and Language Switcher. Manage them in the EasyCommerce editors; Joomla's separate **Multilingual Associations** side-by-side editor is not used for these records.

Records assigned to **All languages (*)** cannot have associations. To change a linked record's language, remove its associations and save first. Removing an association does not delete either record. A target already linked to another group must be unlinked there first; saving will not silently replace another group's links.

Only available, published destinations that the visitor can access are offered as equivalent pages. The target language must be published and installed, and a suitable target-language or shared menu must be available. If there is no eligible equivalent, Joomla uses its normal menu association or language-home fallback; it does not expose an unpublished or restricted product.

Product associations connect navigation only. Prices, inventory, variations, downloads, licences and purchase rights still belong to each product record. Switching languages does not replace a product already in the cart with its associated product.

### Example: an English and French bookshop

Create a shared parent category **Books**, an English child **English books**, and a French child **Livres en français**. Assign the English edition of an ebook to English and the English category; assign a separately sold French edition to French and the French category.

If one product should be available in both storefronts with the same text and purchase rights, keep that product at `*` and assign it to both language branches. It remains one product with one commercial identity.

Separate product records are separate offers. You can associate equivalent editions for navigation, but duplicating a product does not automatically link it or create a shared stock pool or shared variations.

## 4. Translate the interface

EasyCommerce loads its English labels as a fallback, then applies the selected language's translations and Joomla language overrides. A partial translation can therefore coexist with English labels for missing entries.

For a few wording changes, use **System → Manage → Language Overrides**:

1. Choose the target language and the correct client: **Site** for storefront/account labels or **Administrator** for the admin interface.
2. Create an override for the EasyCommerce language constant you want to change.
3. Enter the translated text and save it.
4. Reload the relevant EasyCommerce page. If page caching is enabled, clear the affected cache.

For example, to change the French storefront's add-to-cart button, create a **French (France) - Site** override with language constant `COM_EASYCOMMERCE_UI_ADD_TO_CART` and text `Ajouter au panier`. Use **Search For → Constant** when looking up a known key; enter the constant directly if the search does not list it.

Use overrides for local wording changes rather than editing EasyCommerce's bundled English files, which updates may replace. For a complete translation, install or maintain an EasyCommerce translation package for that language. Joomla's core language pack alone does not provide those extension strings.

The administrator and storefront can use different interface languages. Neither changes product prices, tax settings or currency.

## 5. Configure customer emails and documents

### Translate email templates

Open **EasyCommerce → Settings → Emails** and edit a template:

1. Select the target language in the editor. Language selection appears when more than one Joomla content language is published.
2. Translate the subject and body, keeping variables such as `{{order_number}}` and `{{customer_name}}` intact.
3. Save the language-specific version.
4. Use **Preview** and **Send Test** with that same language before using it for customers.

**Default (All Languages)** is the shared template. EasyCommerce chooses a saved template for the exact language first, then a shared template, then the bundled template. A custom shared template containing English sentences stays English until you add a translation; it is not translated merely because the order is French.

If your AI service is connected, the editor's **Translate** action uses the default template as its source to create the selected-language version. It uses AI credits and saves the translated override. Review the result and send a test message. AI is optional; you can translate templates manually.

See [Email Settings](email-settings.md) for delivery, branding and notification controls.

### Understand which language is used

| Operation | Language used |
|-----------|---------------|
| New storefront order | Joomla's resolved site language at checkout, recorded on the order |
| Renewal or subscription plan-change order | The original transaction's language |
| Customer email related to an order | The recorded transaction language |
| Staff notification | The configured site default; it does not inherit the customer's checkout language |
| Old order with missing, shared `*`, or unavailable language | The configured installed site language, with English as the final fallback |
| Issued invoice | Its recorded document language; later browser/admin language changes do not switch it |

New orders record a concrete language such as `fr-FR`, not `*`. Switching the customer's account interface later does not rewrite the order or translate its stored product names. An administrator-created order without an explicit transaction language uses the site default, not the administrator's interface language.

Bundled email and document labels use translatable strings with English fallback. Custom template text, store branding, invoice terms and historical order item text still need your own translations where applicable. Existing invoice PDFs are reused rather than silently regenerated when someone changes language. See [Invoice Settings](invoice-settings.md).

The invoice template editor does not have a per-language selector. Translate its built-in labels through EasyCommerce language strings or Joomla language overrides; literal text entered in a custom invoice template is shared across languages.

Stripe and PayPal receive a supported locale derived from the transaction language, and payment-return links retain that language. The provider may use its own fallback where a locale is unsupported. This changes presentation only: it does not convert currencies or alter the charge.

## 6. Refresh search and test the storefront

If you use AI semantic search or similar products, open **Settings → AI → Product search index** and select **Rebuild AI index** after upgrading an existing index. The index needs the new language metadata. The section appears when either feature is enabled. Rebuilding uses AI services and credits; ordinary keyword search remains available while older entries lack that metadata.

Before opening a multilingual store to customers, check these cases with published English, French and shared test products:

1. Visit each language's Shop page. English should show English/shared products; French should show French/shared products when **System - Language Filter** is enabled.
2. Open a category landing page, change filters, sort and paginate. Products, totals and filter counts should describe the same language and category scope.
3. Open an associated product and category, switch languages in both directions, and refresh each destination directly. Confirm the equivalent record, menu context and language remain correct. Check an unassociated or unpublished target too: the switcher should use Joomla's normal fallback.
4. Add an item to the cart, then switch languages. The product, variation, quantity and price should remain unchanged.
5. Use a test payment environment to check checkout and the return page in each language. Check customer email previews and generated invoices too.
6. Sign in and confirm existing orders, subscriptions and purchased downloads remain accessible after switching the account language.

Language filtering controls catalogue discovery. It is not a purchase permission or an account access rule, and it does not remove an owned item because its language differs from the current interface.

## Current limits

- **No automatic product translation:** `*` means shared availability. It does not create translated names, descriptions, aliases or SEO text for one product.
- **Associations do not merge products:** associated language editions keep their own IDs, prices, stock and purchase rights.
- **No per-language versions of merchant settings:** store notices, checkout instructions, policy links and branding remain the values you configured unless a particular editor explicitly offers language versions.
- **No automatic currency conversion:** language selection does not change the order currency, prices, tax location or payment rules.
- **No historical rewrite:** changing translations does not replace saved order content or issued invoice PDFs.

## Troubleshooting

| Symptom | What to check |
|---------|---------------|
| A language is missing from a product/category selector | Publish it under Joomla **Content Languages**. Install its site pack too for checkout and document rendering. |
| All language-specific products still appear together | Enable Joomla **System - Language Filter**. Also check whether the products are deliberately assigned to `*`. |
| A product disappears from one language | Check publication, access, visibility, its Content language, category assignments and the active category menu's boundary. |
| Saving a category reports a language conflict | Check its parent, descendants and assigned products; a shared parent can hold different language branches. |
| A page shows a mixture of English and another language | The EasyCommerce translation is incomplete. Add the missing extension strings or the appropriate Site/Administrator overrides. |
| The switcher opens a homepage instead of an equivalent product or category | Enable **Item Associations** in **System - Language Filter**, save the links in the EasyCommerce editor, and check the target's publication/access, installed and published language, and target-language store menu. |
| An association cannot be saved | Use one saved record per concrete language. Unlink a target from its existing group before moving it to another group. Shared `*` records cannot be linked. |
| An email is still English | Check the order's language, the installed site pack, and the exact-language template. A shared custom English template remains English. |
| An older invoice stays in its original language | This is expected; issued documents retain their language and existing PDF. |
| AI search needs the updated catalogue | Run **Rebuild AI index** in the AI settings; check the ordinary catalogue results separately. |

## Related guides

- [Managing Products](../backend-guide/products.md)
- [Menu Configuration](../getting-started/menu-setup.md)
- [Email Settings](email-settings.md)
- [Invoice Settings](invoice-settings.md)
