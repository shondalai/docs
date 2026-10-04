---
title: Customize the learner header and navigation
description: Blend VidyaLMS into your Joomla template or WordPress theme using open layouts, branding, and navigation settings.
---

Open **Settings → Learner experience**. These choices apply to all learners. Learners do not choose their own navigation position.

## Choose a navigation layout

**Top navigation** places the learning links beside your academy name. It suits a course area that forms part of a larger Joomla or WordPress website.

**Left sidebar** gives learning links a dedicated column. It can be useful when the learning area is the main purpose of the website. Both layouts adapt to smaller screens.

The learner pages use an open layout inside your site's content area. Your CMS template or theme remains responsible for the outer page width, site header, and footer. Avoid making both the theme and a page-builder section force the same content to full browser width.

## Decide how much header to show

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Header display | Use it when… |
| --- | --- |
| **Brand and navigation** | The learning area needs its own identity and links. |
| **Navigation only** | Your main website already displays the brand prominently. |
| **Hide learner header** | Your website menu already supplies all the learning links. |

</div>

When hiding the header, first add working links to the catalogue, My learning, achievements, organizations, and preferences elsewhere on your site. The focused course player keeps its own learning controls.

## Add your branding

1. Enter a **Header title**, or leave it empty to use the academy name.
2. Add a short **Header tagline**, or switch **Show tagline** off.
3. Set **Show logo** and supply an absolute HTTPS **Header logo URL** from your media library. An empty URL uses the default mark.
4. Choose a logo height between **24 and 80 pixels**. The image keeps its proportions.
5. Choose **Comfortable** or **Compact** spacing and whether to show the header divider.
6. Review the preview, save, and open the public page at desktop and phone widths.

The header logo is separate from the default issuer logo used by certificates and messages. Changing one does not automatically replace the other.

## Dark mode and page loading

The learner interface responds to supported site-theme and browser color-scheme signals. If part of the page stays light, compare the course area with the surrounding template; a custom template may need to expose its chosen mode consistently. Embedded videos and external tools control their own appearance.

Learning navigation uses an app-like transition where supported, with skeleton placeholders while content loads. Links to a separate shop or another CMS component can perform an ordinary page navigation. That is expected: the destination is outside the learning workspace.

## Account links

On Joomla, when the EasyCommerce integration is available, the learner navigation includes one **Account** link. It opens the EasyCommerce account area, where customers can find orders and subscriptions. VidyaLMS does not maintain a second order or billing history.

On WordPress, use the WooCommerce account page for shop history. Add it to your site's menu if you want a permanent account link.

For learning inactivity settings, see [how training time is counted](../reports/learning-time.md).
