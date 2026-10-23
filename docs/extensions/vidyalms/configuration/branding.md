---
title: Design your learning area
description: Choose colors, fonts and spacing, preview your changes, and save reusable VidyaLMS themes on Joomla or WordPress.
---

Open **VidyaLMS → Settings → Appearance**. The branding editor is included in Free and Pro on both Joomla and WordPress. You do not need to edit component files or rebuild the frontend.

Your design applies to the catalogue, course details, My learning, assessments and the course player. These pages share a brand, but keep their own layouts: a course listing still looks like a listing, and a lesson keeps its study controls.

## Start with a design

1. Choose **VidyaLMS**, **Ocean**, **Forest** or **Site template** as a starting point.
2. Choose an **Appearance mode**. **VidyaLMS appearance** uses the component's own defaults. **Follow site template** takes its font and supported color values from the surrounding website wherever you leave colors on **Automatic**.
3. Set the **Color scheme**. You can follow the site's choice, follow the browser preference, or keep the learning area light or dark.
4. Adjust typography, reading text size, content spacing and corner shapes.
5. Open **Light colors** and **Dark colors** to edit each palette. Use the reset icon beside a color to return it to **Automatic**.
6. Check each screen in the preview, then select **Save changes** at the bottom of Settings.

Your website template always controls the outer header, footer and available content width, in both appearance modes. VidyaLMS does not expand the learning area beyond that container. To avoid showing your logo twice, use **Settings → Learner experience → Navigation only** or **Hide learner header**. See [header and navigation settings](learner-experience.md).

## Use the preview

The preview updates as you edit. Switch between **Catalogue**, **Course details**, **My learning**, **Course player** and **Assessment**, and use the desktop or phone button to check a narrower frame.

The **Light colors** or **Dark colors** tab selects the preview's palette, regardless of the color scheme you plan to save. This lets you check both palettes before publishing them. The preview uses sample courses and questions; its buttons do not enrol anyone or submit an assessment.

The site-template preset uses sample template colors in the editor. The administration page may use a different template from the public website, so check a public course after saving to see the real inherited colors and font. External video players, embedded tools and shop checkout pages keep their own styling.

## Keep text readable

The contrast check shows text, secondary text, button text and links against their backgrounds. Aim for at least **4.5:1** for these text pairs. If a pair is flagged, change its text or background color.

These checks use your selected colors and VidyaLMS's fallback colors. They cannot certify an entire site: inherited template colors, focus indicators, pictures and embedded content still need a visual and keyboard check. A template accent that works as a link may need a different **Text on accent** color for buttons.

## Save designs you want to use again

Enter a **New preset name** and select **Save as preset**, then **Save changes**. You can keep up to 12 named presets. Each contains both palettes, the appearance mode, color scheme, typography, shapes and spacing.

Choose a saved preset and select **Apply preset** to preview it. Applying a preset does not affect learners until you save the settings. **Remove preset** removes it from your collection; it does not change the design currently applied. To keep a revised design as another preset, give it a new name.

**Reset design** returns the active design to VidyaLMS defaults. It keeps your saved presets. Use **Discard changes** to reload the last saved settings, including the previous design and preset collection.

## Move branding to another site

Select **Export branding** to download a JSON file. It includes the current design and your saved presets, including any unsaved edits. On the other site, select **Import branding**, choose that file, review the preview and select **Save changes**.

Import replaces the branding collection in the editor; it does not merge collections. Export the destination site's branding first if you want to keep a copy. Importing does not save automatically, so you can discard it if the result is not what you wanted.

Branding files contain design values only. They do not include logos, header wording, courses, users, passwords or licenses. Set the destination site's header separately. The importer accepts version 1 VidyaLMS branding files up to 32 KB and checks their contents before using them.

## After saving or updating VidyaLMS

Reload an already-open learner page to see saved changes. If your website caches public pages, clear the relevant page cache. Do not cache personalized learning pages for other visitors.

Branding and named presets live in the site's VidyaLMS settings, not in distributed CSS or JavaScript. Installing an update does not replace them. Back up the database and keep a branding export when moving sites.

For template developers, the supported color, font and styling hooks are described in the [template integration contract](template-integration.md).
