---
id: seo-settings
title: SEO Settings
sidebar_label: SEO
sidebar_position: 13
---

# SEO Settings

Configure breadcrumbs, structured data, default meta, and the product sitemap.

**Location:** Settings > SEO

## Breadcrumbs

| Field | Description | Default |
|-------|-------------|---------|
| `enable_breadcrumbs` | Render breadcrumb navigation on storefront pages | On |
| `breadcrumb_separator` | Character placed between breadcrumb segments | `›` |
| `breadcrumb_home_text` | Label for the home link in the breadcrumb | `Home` |

## Structured Data

| Field | Description | Default |
|-------|-------------|---------|
| `enable_product_schema` | Emit Schema.org `Product` JSON-LD on product pages | On |
| `enable_organization_schema` | Emit Schema.org `Organization` JSON-LD on the homepage | On |
| `enable_breadcrumb_schema` | Emit Schema.org `BreadcrumbList` JSON-LD on listing and product pages | On |

Product schema picks up price, availability, and aggregate rating from the catalog and review services automatically.

## Meta Defaults

| Field | Description | Default |
|-------|-------------|---------|
| `default_meta_description` | Fallback meta description used when a category or product does not have one | empty |
| `default_og_image` | Fallback Open Graph / Twitter Card image | empty |

Per-product and per-category overrides set on the content item itself take precedence.

## URLs

| Field | Description | Default |
|-------|-------------|---------|
| `enable_canonical_urls` | Emit `<link rel="canonical">` on storefront pages | On |

Product URL shape itself follows the active Joomla SEF configuration.

## XML Sitemap

| Field | Description | Default |
|-------|-------------|---------|
| `enable_xml_sitemap` | Generate `easycommerce-sitemap.xml` | On |
| `sitemap_include_images` | Add product image entries to the sitemap | On |
| `sitemap_include_categories` | Add category pages to the sitemap | On |
| `sitemap_include_tags` | Add tag pages to the sitemap | On |

The sitemap is served at `/<your-site>/easycommerce-sitemap.xml`. Submit the URL to Google Search Console and Bing Webmaster Tools after publishing.

## Related Settings

- [Product Settings](product-settings.md)
