---
id: display-surveys-in-joomla-articles
title: Display Surveys in Joomla Articles
sidebar_label: Display in Articles
sidebar_position: 18
---

Community Surveys ships a content plugin that embeds a survey directly inside any Joomla article using a body-text shortcode. The embed mounts the same React experience visitors see on a standalone survey page — same theming, same rule engine, same submit flow — wherever you put the shortcode in your article.

## Prerequisites

1. The **Content - Surveys** plugin is enabled (Extensions → Plugins).
2. The survey is **published**.
3. The viewing user satisfies the survey's **view access level** (Public / Registered / Special). The plugin enforces this server-side — denied users see an inline "no permission" notice instead of an empty mount.

## Basic Syntax

Add a shortcode anywhere in the article body:

```text
{survey id="123"}
```

Replace `123` with the survey's id (visible in the **Surveys** list page).

That's it. When the article is rendered the plugin:

- Validates the survey is published and that the current user can view it.
- Validates the publish window (`publish_up` / `publish_down`) — closed surveys show "this survey is closed".
- Drops a `<div>` mount point and loads the Community Surveys SPA bundle once per page.
- The React app finds the mount and renders the survey inline.

:::tip Multiple surveys per article
You can include several `{survey id="…"}` shortcodes in the same article. Each gets its own React root and its own theme — the page bundle is loaded only once.
:::

## Optional Attributes

| Attribute   | Description                                                                                                                                     | Default              |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `id`        | **Required.** The survey id.                                                                                                                    | —                    |
| `container` | DOM `id` of the mount element. Useful for targeting from custom CSS or anchor links. Letters, digits, hyphens and underscores only.            | Auto-generated id    |

Example with a custom container id:

```text
{survey id="42" container="feedback-survey"}
```

## Legacy Syntax

Articles written for Community Surveys v6/v7 used a different shortcode:

```text
{LOADSURVEY ["id":42]}
{LOADSURVEY ["id":42,"container":"feedback-survey"]}
```

The plugin still recognises this form so your existing articles keep rendering without rewrites. New articles should prefer the cleaner `{survey id="…"}` syntax.

## Access Control

The plugin runs the same gating logic as the rest of the site:

- **View access level** — Joomla's per-row access. Public surveys render for everyone; Registered/Special surveys only render for users in those groups.
- **Private surveys** — guests are blocked; signed-in users only.
- **Publish window** — surveys before `publish_up` or after `publish_down` are blocked with a user-friendly notice.

If any gate fails the mount is **not** emitted — the article shows a polite inline message instead. The survey id never reaches the browser as a mountable element when the user can't access it.

## Theming and Styling

Each embedded survey reads its own theme from the **Design** tab in the survey builder (accent colour, surface palette, font pairing, density, custom CSS). Two embeds in the same article can use completely different themes — they don't bleed into each other.

The mount renders as:

```html
<div id="cs-embed-42-a1b2c3" class="cs-site cs-survey-embed" data-survey-id="42" data-survey-title="…"></div>
```

If you need to target embeds from your template CSS:

```css
/* All embeds on the page */
.cs-survey-embed {
  margin: 2rem 0;
}

/* A specific survey by id */
.cs-site[data-survey-id="42"] {
  /* Your overrides */
}

/* A specific embed by container id */
#feedback-survey {
  max-width: 720px;
  margin-inline: auto;
}
```

The component's own design tokens are scoped to `.cs-site`, so anything you add inside the mount inherits them. The host page's typography and chrome stay untouched.

## How It Works

1. The plugin's `onContentPrepare` listener scans the article body for `{survey}` and `{LOADSURVEY}` shortcodes.
2. For each match it does a lightweight survey lookup (no full graph fetch) and runs the access/window gates.
3. Allowed surveys get a mount div; blocked surveys get an inline notice.
4. Once per page, the plugin injects the site SPA's CSS + JS bundles and the script options the React app needs (CSRF token, API base, current user, theme, locale).
5. The SPA boots, walks the DOM for `.cs-survey-embed[data-survey-id]` mounts, and renders a survey experience into each.

Submitting an embedded survey lands the visitor on the standard thank-you page — the same flow as a full-page survey.

## Troubleshooting

**Survey doesn't appear**
- Confirm **Content - Surveys** is enabled.
- Check the survey id is correct and the survey is published.
- View the page as the target audience (e.g. log out to test a Public survey).

**"You do not have permission to view this survey."**
- The survey's access level is higher than the visitor's groups. Either lower the access level on the survey or grant the visitor's group access.

**"This survey is closed." / "This survey has not opened yet."**
- The current time is outside the survey's publish window. Adjust `publish_up` / `publish_down` on the survey.

**Embed appears but stays blank / shows a spinner forever**
- Open the browser console. Errors loading `communitysurveys-site.js` usually mean Joomla's web-asset cache is stale — clear the asset cache and reload.
- Confirm the article isn't running through a content filter that strips the mount div's `data-*` attributes.

## Alternatives

For surveys you want to surface in a sidebar or any fixed template position, the **Survey Form** module (`mod_surveyform`) is a better fit than the content plugin. Use modules for layout, the content plugin for inline narrative placement.
