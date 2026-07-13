---
id: building-a-page
title: "Building a Page"
sidebar_label: Building a Page
sidebar_position: 2
---

# Building a Page

Every page starts from a preset, then you shape it in a three-pane editor: a section stack on the left, a live themed preview in the centre and an inspector on the right.

## Start from a preset

1. Go to **Components → Studio Pages**.
2. Click **+ New page**.
3. On the **Start a new page** screen, pick a starting point. Every section stays fully editable afterwards.

| Preset | Sections included | Good for |
|--------|-------------------|----------|
| Blank page | None (opens with the Add section panel ready) | Starting from an empty canvas and adding sections one by one |
| About / Story | Hero, Rich text, Stats, Testimonial, Call to action | Your story, some numbers, a customer quote and a closing prompt |
| Campaign landing | Hero, Trust bar, Product grid, Featured product, Call to action | A promotion with sale picks and one featured product |
| Help & FAQ | Hero, FAQ, Call to action | A quiet support page with expandable common questions |
| Collection showcase | Hero, Category band, Product grid, Testimonial | Shop categories, a product grid and social proof |

Picking a preset opens the editor straight away with the sections pre-filled with sample copy. The page is not saved yet; it only exists on the server after your first **Save**.

## The editor tour

### Top bar

- A back arrow returns to the pages list.
- The page title is edited inline at the top. Under it the editor previews the URL alias, generated from the title while the alias field is blank.
- A dirty indicator shows **Unsaved changes** or **All changes saved**.
- A **Desktop / Mobile** toggle switches the preview between a wide frame and a phone-width frame.
- **Preview** enters full-preview mode, and **Save** stores the page.

### Left rail: the section stack

The **Sections** panel lists every section on the page with an icon, its name and a one-line summary of its content. Sections that are empty carry a small **hidden** tag.

- Click a section to select it.
- Drag a section by its handle to reorder the page.
- Click **+ Add section** to open the add panel. Sections are grouped under **Content**, **Commerce** and **Joomla** headings, each with a short description. Clicking one inserts it after the currently selected section (or at the end of the page) and selects it.

### Centre: the canvas

The canvas is a live preview rendered with your active template's design, shown between a mock storefront header and footer that use your own brand name. It is a faithful stand-in for how the page will look on your site.

- Click a section on the canvas to select it. A type badge and a small toolbar appear with four buttons: **Move up**, **Move down**, **Duplicate** and **Remove**.
- Sections can also be dragged directly on the canvas to reorder them.
- Empty sections render faded with the tag **Empty, won't render on the live site**. They are kept in the editor so you can fill them in later, but visitors never see them.
- Click the canvas background to deselect; the inspector switches back to Page settings.

The **Preview** button enters full-preview mode: the side panels disappear and empty sections are hidden, exactly as the live template renders them. The Desktop / Mobile toggle still works, and **Back to editor** returns you to editing.

### Right: the inspector

With a section selected, the inspector shows that section's fields: text boxes, text areas, segmented choices, toggles and item lists with **Add** and **Remove** buttons. Short hints under fields explain the less obvious ones. All fields are listed per section in the [Section Reference](sections-reference.md).

With nothing selected, the inspector shows **Page settings**:

| Setting | Options | What it does |
|---------|---------|--------------|
| Title | Free text | The page name. Required before you can save. Also used as the browser tab title on the live site |
| Alias | Free text | The SEF URL segment. Leave blank to auto-generate from the title on save |
| Status | Published / Unpublished / Archived | Only Published pages are visible to visitors |
| Access | Your site's view levels (Public, Registered, Special and so on) | Who may view the page on the front end |
| Meta description | Free text | The description search engines show for this page |

## Saving

Click **Save** in the top bar. The button reads **Saving...** while the page is stored, and the indicator switches to **All changes saved**. Saving with an empty title shows the message "Give the page a title first".

:::warning No autosave
The editor never saves automatically, and it does not warn you when you leave. Going back to the pages list, closing the tab or navigating away discards every unsaved change silently. A page created from a preset does not exist at all until its first save. Make **Save** a habit.
:::

:::note Check the alias after saving
The alias is the page's URL segment and must be unique across all pages. If the alias you chose is already taken, the saved URL gets a unique suffix appended automatically, and the editor shows the final alias after saving. Check it before you share links or create menu items.
:::

## Next steps

- Look up any field in the [Section Reference](sections-reference.md).
- Give the page a URL in [Publishing and Menu Items](publishing-and-menus.md).
