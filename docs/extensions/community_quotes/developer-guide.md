---
id: developer-guide
title: Developer guide
sidebar_label: Developer guide
sidebar_position: 50
---

# Developer guide

This page is for developers who want to understand how Community Quotes is put together, call its JSON API, react to the events it fires, or embed quotes from their own extension. Everything here is grounded in the shipped 1.0.0 code. If you are a site administrator, the pages you want are the [Settings reference](./settings-reference.md), [Modules and plugins](./modules-and-plugins.md), and [Menus and SEF URLs](./menus-and-sef-urls.md).

## Architecture at a glance

Community Quotes is a single React application that renders on both the admin and the front end, backed by a thin Joomla component.

- **Component**: `com_communityquotes`, PHP namespace `Shondalai\Component\Communityquotes\{Administrator|Site}`, database prefix `#__cquotes_`, version 1.0.0.
- **One SPA, two mounts**: the admin bundle mounts into `#cquotes-admin-root`; the site bundle mounts into `#cquotes-site-root`. Both add the class `cquotes-scope cq-body` to their root and read their configuration from `Joomla.getOptions('com_communityquotes')`.
- **Thin controllers, fat services**: the controllers parse input, enforce access control and CSRF, then hand off to a domain service. There is no business logic or database work in a controller.
- **Services live in the administrator namespace**: every domain service (for example `QuoteService`, `AuthorService`, `ModerationService`) is registered in the admin `services/provider.php`. Joomla loads that provider for the site application too, so both the admin `AjaxController` and the site `ApiController` resolve the same services.

### The service layer

The public services and their headline methods are:

| Service | Responsibility |
| --- | --- |
| `SettingsService` | Read and write component settings in `#__cquotes_settings`. Single source of truth for every configurable value. |
| `QuoteService` | The quote wall, single quotes, quote of the day, similar quotes, create/update, state, featured, delete, search. |
| `AuthorService` | Author lists and profiles, author matching for the submit flow, life-event timelines, save, state, delete. |
| `CollectionService` | Curated collections, membership, follows. |
| `CommentService` | The native comment thread and votes, plus the admin comment list. |
| `ReactionService` | The four per-user reactions (inspired, agree, think, disagree) and their counters. |
| `ModerationService` | The moderation queue, approve/reject/flag, and reports. |
| `StatsService` | Dashboard KPIs, activity series, per-user stats, and category counts. |
| `TagService` | Tag suggestions, popularity, and quote-to-tag syncing. |
| `AttributionService` | Attribution verification (heuristic, or the AI path when AI is enabled). |
| `EmbedRenderer` | Server-side HTML for the `{cquote}` embed styles, shared with the content plugin. |
| `MigrationService` | The admin-driven legacy data migration. See [Migrating from version 1](./migrating-from-version-1.md). |

Data returned by a service is already typed and shaped as the API DTO for that entity (ints as int, bools as bool, JSON fields decoded). Field names are camelCase.

## The JSON API surface

Both applications speak the same envelope:

- Success: `{"success": true, "data": ...}`
- Error: `{"success": false, "error": "message"}` with an appropriate HTTP status.

Responses are `application/json; charset=utf-8`, encoded with `JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE` so that a stray invalid byte substitutes rather than blanking the whole response.

**CSRF.** Every mutating call must carry a valid token. The API accepts any one of: a Joomla form token in the POST body, the same token as a GET parameter, or an `X-CSRF-Token` request header equal to `Session::getFormToken()`. The bundled React client sends the header.

### Site API

```
index.php?option=com_communityquotes&task=api.<name>&format=json
```

Handled by `site/src/Controller/ApiController.php`. Reads are public and need no token. Writes need a token, and most also need a logged-in user.

Read endpoints (public, no token):

| Task | Purpose |
| --- | --- |
| `wall` | The quote wall payload: quote of the day, the list, category counts, featured collections, rising authors, and the viewer's stats when logged in. |
| `quotes` | A plain quote list with the same filters, without the rail extras. |
| `quote` | A single quote plus its comment thread and three similar quotes. Increments the hit counter. |
| `authors` | The authors directory list. |
| `author` | A single author profile plus a page of that author's published quotes. |
| `collections` | The collections index. |
| `collection` | A single collection with its member quotes. |
| `search` | Mixed search across quotes, authors, and collections. |
| `authormatch` | Minimal author matches for the submit-flow lookup. |
| `tags` | Tag suggestions for the submit flow. |

Write endpoints (token required; login required unless noted):

| Task | Notes |
| --- | --- |
| `submit` | Create a quote submission. Enforces the submission length and per-day limits and the moderation setting. |
| `verify` | Run an attribution check on the current text and author. |
| `react` | Toggle a reaction on a quote. |
| `comment` | Post a comment, or a reply when `parentId` is set. |
| `commentvote` | Up, down, or clear a comment vote. |
| `bookmark` | Add or remove a bookmark. |
| `follow` | Follow or unfollow an author or a collection. |
| `collectioncreate` | Create a collection owned by the current user. |
| `collectionadd` | Add or remove a quote from a collection. |
| `report` | Report a quote or a comment. |
| `play` | Record a listen. Token required, login not. |
| `pickerlist` | Quotes for the editor picker modal. |
| `subscribe` | Newsletter sign-up. No login and no token, but requires an empty `website` honeypot field and a valid email. |
| `unsubscribe` | A GET that matches an unsubscribe token to a subscriber row, deactivates it, then redirects to the wall with a message. |

Visibility is enforced server-side: an unpublished, pending, rejected, or trashed quote reads as "not found" to anyone who is not its author or a moderator, so ids cannot be probed. The same rule applies to author profiles and collections.

Before a payload is returned, the controller walks it and attaches Joomla-routed `url` (and `authorUrl`) fields to every quote, author, and collection DTO, so the SPA always has real SEF links to render.

### Admin API

```
index.php?option=com_communityquotes&task=ajax.<name>&format=json
```

Handled by `admin/src/Controller/AjaxController.php`. Every task requires `core.manage`; mutations also require a token; `settingssave` and `migrationrun` additionally require `core.admin`.

The read tasks are `dashboard`, `quotes`, `moderation`, `authors`, `collections`, `comments`, `categories`, `authorcategories`, `tags`, `settings`, `subscribers`, `licenseproxy`, `migrationstatus`, and `migrationpreview`. The write tasks are `quotesave`, `quotesstate`, `quotesfeature`, `quotesdelete`, `moderate`, `reportresolve`, `authorsave`, `authorsstate`, `authorsdelete`, `collectionsave`, `collectionsstate`, `collectionsdelete`, `commentsstate`, `commentsdelete`, `settingssave`, `subscriberdelete`, and `migrationrun`.

Unknown tasks return a 404. Domain exceptions map to sensible statuses: an `InvalidArgumentException` becomes 400, a `RuntimeException` becomes 409, anything else becomes 500.

## Routing and SEF

The site router (`site/src/Service/Router.php`) extends `RouterView`. It carries the legacy component's nested URL scheme forward, with two Joomla category trees:

- Quote categories under the extension `com_communityquotes`.
- Author categories under the extension `com_communityquotes.author`.

Quotes nest under a quote category and authors nest under an author category, so the SEF paths read `.../category-path/quote-alias` and `.../author-path/author-alias`. The flat screens (wall, collections, collection, submit) are registered alongside the nested trees.

The dispatcher (`site/src/Dispatcher/Dispatcher.php`) folds every public view name onto the single host view and stashes the originally requested route under the input key `cquotes_route`, so the host `HtmlView` can resolve the initial SPA screen while the router still produces clean nested URLs.

When the **Remove IDs from URLs** setting (`routing.sef_ids`) is on, the router drops the numeric id prefixes and resolves items purely by alias, scoped to the parent category. This requires unique, populated aliases. See [Menus and SEF URLs](./menus-and-sef-urls.md) and the [Troubleshooting](./troubleshooting.md) page.

## The site bootstrap

The site `HtmlView` injects a bootstrap object under the script-options key `com_communityquotes` (and also inline on `window.CQUOTES_BOOTSTRAP` for resilience). It carries the CSRF token, the JSON `apiBase`, the `rootBase` (the subfolder-safe root path, not `window.origin`), the router base path, the SEF route strings, the resolved initial route, the current user, the caller's permissions, the public subset of settings, the category counts, and the strings map for the front-end `t(key, fallback)` lookups.

## Dispatched events (Rewardify integration)

Community Quotes dispatches integration events on the application dispatcher so the bundled Rewardify adapter (`plg_rewards_communityquotes`) can reward activity. The adapter is dormant until Rewardify is present, and you do not modify it. Before dispatching, the component imports both the `rewards` and the `communityquotes` plugin groups, and the whole dispatch is wrapped so a listener can never break the host action.

The events, each constructed as `new Joomla\Event\Event($name, $args)` so arguments are readable by name:

| Event | Arguments | Fired by |
| --- | --- | --- |
| `onCommunityQuotesAfterQuoteSave` | `quote` (object with `id`, `created_by`, `catid`), `isNew` (bool) | `QuoteService::save`, after an insert or update, and on the site submit path. |
| `onCommunityQuotesAfterQuoteDelete` | `quote` (object) | `QuoteService::delete`, once per deleted quote. |
| `onCommunityQuotesAfterVote` | `vote` (object with `user_id`, `quote_id`, `direction`), `quote` (object with `id`, `created_by`) | `ReactionService::react`, only when a reaction is set (not when it is cleared). `direction` is -1 for the `disagree` reaction and +1 for any other. |

To reward Community Quotes activity from your own rewards adapter, subscribe to these event names in a plugin in the `rewards` group and read the named arguments off the event.

## Comments and discussion

The component ships a native comment data model (`#__cquotes_comments` and `#__cquotes_comment_votes`) with a full `CommentService` and the `comment` and `commentvote` API tasks. On the front end, quote discussion is delivered through QuillThreads: the site view enqueues the QuillThreads embed assets when the QuillThreads SDK class is available, and the bundled `plg_quillthreads_communityquotes` plugin registers a `com_communityquotes.quote` commentable context with QuillThreads. That plugin is dormant unless com_quillthreads is installed. See [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).

## Embedding quotes in content and articles

You have two supported ways to place a quote outside the component:

- **The `{cquote}` shortcode**, handled by the content plugin `plg_content_communityquotes`. The syntax is `{cquote id="123"}` with optional `style="card|blockquote|pullquote|inline"` and `link="true|false"`. Values tolerate single, double, or no quotes. An article containing the `{cquote off}` escape token keeps every shortcode literal. Each match is rendered by `EmbedRenderer::render(...)` and the `com_communityquotes.embed` style is loaded once when at least one match is present.
- **The editor button**, `plg_editors-xtd_communityquotes`, which opens the quote picker in a modal and inserts the shortcode for the quote you choose.

Both routes go through the same `EmbedRenderer`, so an embed you insert with the editor button and one you type by hand render identically. See [Modules and plugins](./modules-and-plugins.md).

If you are building your own extension and want to render a quote server-side, boot the component and resolve `EmbedRenderer` from the container:

```php
Factory::getApplication()->bootComponent('com_communityquotes');
$renderer = Factory::getContainer()->get(
    \Shondalai\Component\Communityquotes\Administrator\Service\EmbedRenderer::class
);
echo $renderer->render($quoteId, 'card', true);
```

## The React app and developer mode

The React source lives in `react-app/` and builds into `com_communityquotes/media`. The build emits `media/js/admin.js`, `media/js/site.js`, `media/css/admin.css`, and `media/css/site.css`, registered through `media/joomla.asset.json` as the assets `com_communityquotes.admin`, `com_communityquotes.site`, and `com_communityquotes.embed`.

`ReactAppHelper` decides which assets load. In production it registers the built bundles. When the **Developer** settings enable Vite dev mode, and the request is on a local host (or Joomla debug is on), and the Vite dev server is actually reachable, it injects the dev-server module and the HMR runtime instead. Any failure falls back to the built bundle, so a live site is never left without assets. The dev server runs on port 5183 by default. Leave dev mode off on a live site.

Styling uses inline React styles that reference `--cq-*` CSS variables, all scoped under `.cquotes-scope`. There are no bundled webfonts; font families are declared and fall back to system fonts.

## Where to go next

- Call the same API the SPA uses: the tables above.
- React to activity: the [dispatched events](#dispatched-events-rewardify-integration).
- Move legacy data: [Migrating from version 1](./migrating-from-version-1.md).
- Everything an administrator can change: [Settings reference](./settings-reference.md).
