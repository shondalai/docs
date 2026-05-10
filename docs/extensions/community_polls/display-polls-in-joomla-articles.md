---
id: display-polls-in-joomla-articles
title: Display polls in Joomla articles
sidebar_label: Embed polls in articles
sidebar_position: 5
---

# Display polls in Joomla articles

Community Polls gives you four ways to surface a poll on your Joomla site. Pick whichever fits the page you are working on:

- The [editor button](#editor-button) — easiest for content editors.
- The [`{poll}` shortcode](#poll-shortcode) — works in any article and lets you tweak how the poll renders.
- The [Random Poll module](#random-poll-module) — drops a single poll into any module position.
- The [Latest Polls module](#latest-polls-module) — lists recent or popular polls in a sidebar.

If you are looking for the categories tile grid that the public listing uses, that's the [Categories module](#categories-module).

## Editor button

The simplest way to add a poll to an article is the editor button.

1. Open an article in the Joomla editor.
2. Click the **Poll** button in the editor toolbar (it sits with the other "insert" buttons such as Article and Module).
3. The picker opens with a searchable list of every published poll. Filter by category or status, click the poll you want, optionally adjust the mode, layout, and link options at the bottom, and click **Insert poll**.
4. The right shortcode is dropped into the article at the cursor.

The picker is the same dialog whether you use TinyMCE, JCE, or Code Mirror. If you do not see the **Poll** button, open **Plugin Manager → Plugins** and make sure the **Editor Button - Community Polls** plugin is enabled.

## Poll shortcode

The content plugin scans every published article for the `{poll ...}` shortcode and replaces it with the poll. This is what the editor button inserts for you, but you can also type it yourself.

### Basic syntax

```
{poll id=12}
```

That single line embeds poll number 12 with default settings — the same vote form a visitor would see on the dedicated poll page, with the brand chart style and palette.

### All attributes

| Attribute | Values | What it does |
| --- | --- | --- |
| `id` | A poll ID, e.g. `12` | **Required.** Which poll to show. |
| `mode` | `auto` (default), `vote`, `results` | Force the vote form (`vote`) or results-only view (`results`). `auto` uses whichever is appropriate based on whether the visitor has already voted. |
| `layout` | `auto`, `bars`, `subtle-bars`, `percent-list`, `donut`, `columns` | Override the chart style for the embedded copy. `auto` uses the poll's own setting. |
| `link` | `1` (default) or `0` | Show or hide the "Open full poll" link below the embedded poll. |

### Examples

Embed poll 7 and force the results view (useful at the bottom of an article that already discusses the poll):

```
{poll id=7 mode=results}
```

Embed poll 18 as a donut chart with no out-link:

```
{poll id=18 layout=donut link=0}
```

Embed poll 24 with the simple percent list layout and let voters vote inline:

```
{poll id=24 layout=percent-list mode=vote}
```

### When the shortcode does not render

If the shortcode shows as plain text in the published article, check three things:

1. The **Content - Community Polls** plugin is enabled in the Plugin Manager.
2. The article is published in a category that runs through Joomla's content events. Custom views that bypass `JEventDispatcher` will not trigger the plugin.
3. Your editor is not converting the curly braces into HTML entities. JCE Editor's "Process HTML Entities" option will do this; turn it off, or paste the shortcode in the source-view (Toggle editor) before saving.

## Random Poll module

The Random Poll module shows one published poll in any module position. By default it picks one at random; you can also fix it to a specific poll or restrict it to a category.

1. Go to **Content → Site Modules → New** and pick **Random Poll**.
2. Choose a module position from your template.
3. In the module options, optionally set:
    - A specific poll ID (overrides the random pick).
    - A category to restrict the random pick to.
    - Whether the module shows the vote form or jumps straight to results.
    - Whether to show the "Open full poll" link.
4. Set the menu assignment, save, and refresh the front end.

## Latest Polls module

The Latest Polls module lists several polls instead of just one. Useful in a sidebar or footer for "latest" or "most voted" listings.

1. Go to **Content → Site Modules → New** and pick **Community Polls**.
2. In the options, choose:
    - **Mode** — Latest, Most voted, or Featured.
    - **Count** — how many polls to list.
    - **Category** — optional filter.
3. Save and assign to menu items as needed.

## Categories module

The Categories module surfaces poll categories with a poll count and a glimpse of the most recent poll in each. It is a good fit for a "browse by topic" landing page or a dashboard widget.

1. Go to **Content → Site Modules → New** and pick **Community Polls — Categories**.
2. Pick the module position and menu assignment.
3. Save.

## Embed a module inside an article

If you want a module inside an article — say, a Random Poll between two paragraphs — Joomla itself has a `{loadmoduleid N}` and `{loadposition NAME}` shortcode you can use, provided the **Content - Load Modules** plugin is enabled. See the Joomla documentation for details:

[How do you put a module inside an article?](https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F)
