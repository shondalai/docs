---
id: faq
title: "Frequently Asked Questions"
sidebar_label: FAQ
sidebar_position: 90
---

# Frequently Asked Questions

Quick answers to the most common questions about the Shondalai templates, Template Studio, and Studio Pages. Each answer links to the guide that covers the topic in depth.

## Pages

### Why does my page show a 404 on the live site?

A Studio Page only renders for visitors when its status is Published. Open the page in **Components → Studio Pages**, set **Page settings → Status** to Published, and save. Keep in mind that the menu item picker only lists published pages, but if you unpublish a page later its menu item stays behind and returns a 404. If the page uses a restricted access level, visitors without permission see a 403 instead. See [Studio Pages overview](pages/overview.md).

### The product grid looks fine in the editor but is empty on the live site. Why?

The editor canvas previews the Product grid section with demo products, never your real store data. On the live site the section only renders when EasyCommerce is installed and enabled, and when the chosen source actually returns products. If the store is unavailable or empty, the section is dropped silently rather than showing an empty box. Check that EasyCommerce is enabled, and either mark some products as featured or switch the section's **Source** to Newest. See [Studio Pages overview](pages/overview.md).

### Why did my page URL get a long number added to the end?

Every page alias is the page's URL segment, so it must be unique across all Studio Pages. If you save a page with an alias that is already taken, a timestamp suffix is added automatically and the corrected alias is shown back in the editor. To fix it, open **Page settings → Alias**, type a unique alias, and save again.

### I left the editor and lost my edits. What happened?

The page editor has no autosave and no unsaved-changes warning, so leaving the editor with pending edits discards them silently. Watch the indicator in the top bar: it reads "Unsaved changes" until you press **Save**. A page created from a preset does not exist at all until its first save.

:::warning Save before you navigate
Always press **Save** before using the back button, switching pages, or closing the browser tab. There is currently no prompt to stop you.
:::

### Where do I upload a hero image?

There is no image or media picker in the page builder today. The hero section's **Image shown** toggle renders a decorative panel styled by your active template, not a photo, and the featured product section works the same way. Only the Product grid section shows real images, taken from your store products. If you need a specific photo on a page, publish a custom Joomla module containing the image and place it with a **Module position** section. See [Studio Pages overview](pages/overview.md).

### Can I delete a page?

Not from the Pages list screen today: there is no delete button. Instead, open the page and set **Page settings → Status** to Unpublished, then save. Unpublished pages return a 404 to visitors, so also remove or hide any menu item that points to the page.

### I switched templates and my pages look different. Is something broken?

No, that is by design. Studio Pages are stored globally rather than belonging to one template, and every Studio template ships its own styling for each section type. When you activate a different template, all your pages automatically re-theme to match it while the content stays exactly as you wrote it. See the [template gallery](templates/gallery.md).

## Design and layout

### How do I change the announcement bar at the top of the site?

Edit your template style in **System → Site Template Styles** and open the **Layout** tab. Turn on **Show the top bar** and type your message into **Announcement text**. The same bar can also show social icons and, on multilingual sites, a language switcher. If everything in the bar is empty it is hidden entirely. See the [Template Studio overview](configuration/studio-overview.md).

### My logo is hard to see in dark mode. What can I do?

Add a light version of your logo in the **Style** tab under **Brand → Dark surface logo**. When both logos are set, the template shows the right one for the current colour scheme and uses the dark-surface version in the footer. If you only set the main logo, the footer shows it unchanged, which can be hard to read on the dark footer band, so a dark surface logo is worth adding. See the [Template Studio overview](configuration/studio-overview.md).

### My mega menu is not showing. Why?

There are two common causes. First, the **Minimal** header style renders no navigation at all, which also disables mega menus and menu item icons, so check **Layout → Header style**. Second, mega menus attach to your menu module, so a menu module must be published in the header navigation position. See the [Template Studio overview](configuration/studio-overview.md).

### Can visitors switch between light and dark mode?

No. The colour scheme is a site-wide choice you make in the **Style** tab: Light, Dark, or Auto. Auto follows each visitor's device preference, but there is no on-page toggle for visitors and the setting you save always wins.

### I entered my analytics ID but nothing is being tracked.

The **Analytics / GTM ID** field in the **Advanced** tab only accepts Google IDs in the form `G-XXXXXXX` or `GTM-XXXXXXX`. Any other value is ignored silently, even though the field lets you type it. Copy the exact measurement ID or container ID from your Google Analytics or Tag Manager account and save the style again.

### Does the live preview follow me when I click around the site?

Yes. Clicking a normal link inside the preview carries your draft along, so you can browse the shop, a product page or the cart and keep seeing your unsaved changes. Only navigation that is not a plain link, such as a form submission or a link opened in a new tab, shows the published settings until your next change refreshes the preview. If the preview fails to load with an error, make sure the **System - Template Studio** plugin is enabled in **System → Plugins**.

## Installation, sample data, and licensing

### The sample data said a step was skipped. Why?

The first sample data step builds a demo catalogue of categories and products, which requires EasyCommerce to be installed and enabled. The template package does not include EasyCommerce, so install it first, then run the sample data again from the Sample Data module on the administrator Home Dashboard. The sample data is safe to run on an existing store because it only adds content. See [Installation](getting-started/installation.md).

### I tried to uninstall Studio Pages and Joomla blocked it. What does the message mean?

Studio Pages refuses to uninstall while Studio templates that depend on it are still installed, and your pages stay safe in the database while that guard blocks removal. Actually uninstalling Studio Pages, once the templates are gone, deletes every page from the database permanently. If you plan to remove it, note down any page content you want to keep first.

### Does the template stop working without a license?

No. The template keeps working normally with no feature lockout, whether or not a licence is active. A licence is only needed for automatic update downloads through the Joomla updater. To receive one-click updates, activate your licence in the **License** tab of the Template Studio app. See [Activation](licensing/activation.md).
