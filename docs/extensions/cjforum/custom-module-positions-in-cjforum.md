---
id: custom-module-positions-in-cjforum
title: Custom module positions in CjForum
sidebar_label: Custom module positions in CjForum
sidebar_position: 17
---

CjForum provides named Joomla module positions for placing banners and other administrator-managed content between categories/forums, between topics, and inside topic pages. These positions work with all five CjForum site templates: Classic, Pulse, Community, Broadsheet, and Ledger.

Joomla renders these modules on the server. CjForum then loads the rendered markup into the React page, so you do not need to place PHP or a Joomla module tag in a topic.

## Categories/forums positions

| Position | Location |
| --- | --- |
| `categories-view-after-category-X` | Immediately after category/forum card number `X` in the categories directory. For example, `categories-view-after-category-2` appears after the second visible card. |

Replace `X` with a number from 1 to 100. Numbering follows the visible top-level cards after filtering and sorting. Child categories displayed as links or chips inside a card do not count as separate positions. A position appears only when the directory contains that many visible cards; an empty or unpublished position leaves no box or extra spacing.

Modules match the active CjForum template's styling. In Classic, positions work in list, compact, and grid layouts, with modules spanning the full width of the grid.

## Topic-list positions

| Position | Location |
| --- | --- |
| `topics-view-after-topic-X` | Immediately after topic number `X` in Browse Topics or a category/forum's topic list. For example, `topics-view-after-topic-3` appears after the third visible topic. |

Replace `X` with a number from 1 to 100. Numbering follows the visible, filtered topics and restarts on each page. A position appears only when the current page contains that many topics; an empty or unpublished position leaves no box or extra spacing.

Modules use the active CjForum template's module box styling. In Classic, this works in list, compact, and grid layouts; modules span the full width of the grid.

These positions are supported on **Browse Topics** and individual **category/forum** pages. They are not inserted into dashboard, profile, or search-result topic lists.

## Topic detail positions

| Position | Location |
| --- | --- |
| `topic-view-above-replies` | Between the original post and the list of replies. |
| `topic-view-after-reply-X` | Immediately after reply number `X` on the current page. Replace `X` with a number, such as `topic-view-after-reply-1`. |
| `topic-view-above-reply-form` | Immediately before the reply form. |
| `topic-view-below-reply-form` | Immediately after the reply form. |

`X` is a one-based, page-local reply position. For example, `topic-view-after-reply-1` appears after the first visible reply on each paginated page. The original topic is not counted as a reply.

Only numbered positions needed by the current page are requested, up to 50 visible replies. An unpublished or empty position produces no placeholder or extra spacing.

## Publish a Joomla Banners module

1. Create the banner and its client/category in Joomla's **Banners** component.
2. Go to **Content → Site Modules** and create a **Banners** module.
3. In the module's **Position** field, type one of the CjForum positions. Use `categories-view-after-category-2` to show the banner after the second category/forum card, `topics-view-after-topic-3` after the third topic in a topic list, or `topic-view-after-reply-1` after the first reply inside a topic.
4. Set the module's status to **Published**.
5. Configure its menu assignment, access level, language, publication dates, and other Joomla options as required.
6. Open the categories directory, Browse Topics, a category/forum, or a CjForum topic, as appropriate, and verify the placement. For a numbered position, the current page must contain at least that many visible category cards, topics, or replies.

The module is rendered separately for its position, so Joomla's normal Banners selection and tracking remain in control. If several published modules use the same position, CjForum renders them in Joomla's module ordering. The positions use Joomla's `none` module chrome: CjForum supplies a box matching the surrounding forum content, without a Joomla template-provided module wrapper or title.

Do not copy the rendered banner HTML into a topic or the Classic Layout Manager's Custom HTML block.

## Publish other content

You can publish other server-rendered site modules to the same positions. A **Custom** module is suitable for a static image, sponsor message, or ordinary HTML link.

Keep these limitations in mind:

- Forum module positions accept rendered HTML, but remove executable and embedded content such as `script`, `iframe`, `object`, `embed`, and form markup before inserting it into the page.
- Inline styles, `<style>` elements, event-handler attributes, and arbitrary `data-*` attributes are removed. Use classes whose styles are supplied by the site template or another trusted site asset.
- JavaScript placed inside a Custom module is therefore not executed.
- A third-party ad provider that requires its own script, iframe, consent integration, or Content Security Policy changes needs a dedicated site integration. Do not paste its script into a topic module and expect it to run.
- If a module depends on JavaScript, its Joomla assets must already be registered by an appropriate plugin or template integration. Core image/link Banners do not have this requirement.
- A module error does not prevent the forum page itself from loading; the affected position remains empty.

## How the React integration works

CjForum's React application cannot execute Joomla PHP modules directly. The categories directory requests positions for its visible top-level category cards. Browse Topics and individual category/forum pages request positions for their visible topic lists. A topic detail page requests only the supported reply or reply-form family needed by the active layout. Joomla resolves the modules for the current visitor and menu item, renders them, and returns the resulting markup. React inserts each result at its named location.

The endpoints never accept arbitrary module position names. Category and topic lists send the IDs of the displayed items; Joomla checks their publication and access before rendering the corresponding numbered positions. Category/forum topic lists also carry their current category context. For numbered reply positions, CjForum verifies the current page and filters against its own reply model before rendering modules. This prevents forged reply counts from recording impressions for positions that do not exist. In Classic, no topic-detail family is requested when its corresponding Layout Manager block is absent.

Joomla module rules still apply, including publication status, dates, access level, language, and menu assignment. CjForum carries the current `Itemid` when loading module positions so that menu assignments continue to work during React navigation.

:::warning Do not put module tags in posts

Do not place `{loadposition ...}`, `{loadmodule ...}`, PHP, ad scripts, or iframe markup in a topic or reply. Posts are user-authored content and use a separate sanitizer. Keeping module rendering in the administrator-controlled module positions prevents authors from invoking unrelated modules or exposing data from them.

:::

## Other legacy positions

The React module bridge described on this page supports the categories directory, Browse Topics, category/forum topic lists, and the four topic-detail position families. Older CjForum layouts also documented the following names, but the current React templates do not automatically render them. Publishing a module to one of these names has no effect unless a custom Joomla template or layout explicitly renders that position.

### Forums (index) page

- `forums-view-after-forum-X-Y`: after forum `Y` in section `X`. For example, `forums-view-after-forum-1-1` targets the first forum in the first section.
- `forum-categories-above-toolbar`: above the category-page toolbar.

### Topic listings

- `topics-list-above-toolbar`: above the topic-list toolbar.

### Profile page

- `profile-view-above-summary`: immediately before the profile summary, below the avatar.
