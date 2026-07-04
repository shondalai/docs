---
id: embedding-comments
title: Embedding comments in your extension
sidebar_label: Embedding comments
sidebar_position: 16
---

# Embedding comments in your extension

QuillThreads is not limited to Joomla articles. Any extension can attach a full QuillThreads discussion to its own items, a quote, a GPS track, a product, a recipe, anything with a stable id, by registering a **commentable context**. QuillThreads then handles the thread, moderation, spam and AI checks, notifications, subscriptions, and privacy for that object exactly as it does for articles.

This is a developer page. Two integrations ship today and are the best worked examples:

- **Community Quotes** puts a QuillThreads thread under every quote.
- **GPS Tools** offers QuillThreads as an alternative to its built-in track comments.

## How it works

Every comment is stored against a `(context, object id)` pair. The `context` is a string you own, by convention `com_yourextension.objecttype`, and the object id is your item's primary key. You teach QuillThreads three things:

1. **What a context means** so it can resolve an object's title, URL, owner, and permissions.
2. **Where the thread appears** so it renders on your item's page.
3. **What to do when comments happen** (optional) so you can award points, reindex, or update your own counters.

The whole integration is one small plugin plus a one-line embed in your view.

## Step 1: Register a context

Ship a plugin in the **`quillthreads`** plugin group. On the `onQuillthreadsCollectContexts` event, register a class that implements `CommentContextInterface`. Extending `AbstractCommentContext` means you implement only `key()` and `doResolve()`; caching and sensible permission defaults come for free.

```php
namespace Joomla\Plugin\Quillthreads\Example\Context;

use Shondalai\Component\Quillthreads\Administrator\Context\AbstractCommentContext;
use Shondalai\Component\Quillthreads\Administrator\Context\CommentContextResult;

final class ExampleContext extends AbstractCommentContext
{
    public function __construct(private readonly \Joomla\Database\DatabaseInterface $db) {}

    // Stored verbatim in every comment's `context` column. Keep it stable forever.
    public function key(): string { return 'com_example.item'; }

    public function label(): string { return 'Items (Example)'; }

    protected function doResolve(int $objectId): CommentContextResult
    {
        // Load your row; return CommentContextResult::missing($objectId) if it is gone.
        return new CommentContextResult(
            exists: true,
            objectId: $objectId,
            title: $row->title,               // used in notifications, Finder, and the admin desk
            url: $canonicalUrl,               // permalink to the host object
            ownerUserId: (int) $row->created_by,
            accessLevel: (int) $row->access,  // Joomla view level, use 1 (public) if you have none
            language: (string) $row->language,
            catid: (int) $row->catid,
            meta: ['state' => (int) $row->state]
        );
    }
}
```

The plugin's extension class wires it up:

```php
public static function getSubscribedEvents(): array
{
    return [CollectContextsEvent::NAME => 'onCollectContexts'];
}

public function onCollectContexts(CollectContextsEvent $event): void
{
    $db = \Joomla\CMS\Factory::getContainer()->get(\Joomla\Database\DatabaseInterface::class);
    $event->register(new ExampleContext($db));
}
```

Three rules matter:

- **`key()` is permanent.** It is written into every comment row. Changing it later orphans existing comments.
- **Do not boot `com_quillthreads` from the handler.** Discovery runs while the component is mid-boot. Construct your context with only the services it needs (usually the database).
- **Override `canView()` / `canComment()`** when your objects have their own visibility rules. The default is "the object exists and the viewer has its access level". Community Quotes, for example, gates on a published state instead of an access level.

### Security

The registry is the authorization boundary. A comment request is rejected if the context is not registered, if the object does not resolve, or if the viewer fails `canView` (reads) or `canComment` (writes). A client can never address an arbitrary context or id.

## Step 2: Embed the thread

### Server-rendered views

One line in your template. It resolves the target, loads the assets and config, and returns the thread markup:

```php
use Shondalai\Component\Quillthreads\Administrator\Sdk\QuillThreads;

if (class_exists(QuillThreads::class) && QuillThreads::getInstance()->isReady()) {
    echo QuillThreads::getInstance()->render('com_example.item', (int) $item->id);
}
```

### React and single-page apps

Call `enqueueEmbed()` in the PHP view to load the thread bundle and shared config once, then drop the element wherever the discussion should appear. It is a standard Web Component, so it works in any framework:

```php
QuillThreads::getInstance()->enqueueEmbed();   // in the host view
```

```jsx
<quillthreads-comments context="com_example.item" object-id={item.id} />
```

An imperative API is available too: `window.QuillThreads.mount(el, { context, objectId })`. Each element mounts its own thread, so several can coexist on one page.

:::tip Single-page apps
If your front end is a single-page app that never reloads (like Community Quotes), call `enqueueEmbed()` on **every** page, not just the item page. The Web Component must be defined before the user navigates client-side to an item, or the thread will not appear.
:::

### Other helpers

```php
QuillThreads::getInstance()->count('com_example.item', $id);   // published count, for a badge
QuillThreads::getInstance()->url('com_example.item', $id);     // the object's permalink
```

## Step 3: React to comment activity (optional)

Subscribe to the lifecycle events in the same plugin. Every event exposes `getContext()`, `getObjectId()`, `getCommentId()`, `getUserId()`, `getState()`, and `getParentId()`.

| Event constant | Fires when |
| --- | --- |
| `CommentEvent::AFTER_CREATE` | a comment is created (in any state) |
| `CommentEvent::AFTER_APPROVE` | a moderator approves a comment |
| `CommentEvent::AFTER_DELETE` | a comment is trashed, spammed, or deleted |

```php
public function onCommentCreated(CommentEvent $event): void
{
    if ($event->getContext() !== 'com_example.item') {
        return;
    }
    // Award points, reindex, fire a webhook, bump your own counters, and so on.
}
```

GPS Tools uses these to bridge a published QuillThreads comment back to its own `onGpsToolsAfterCommentCreate` event, so existing Sociable and Rewardify point rules keep working when a track uses the QuillThreads engine.

## Packaging

The context plugin belongs to **your** extension, not to QuillThreads. Ship it in your own package (in the `quillthreads` plugin group) so it installs and updates with your component. It stays dormant until QuillThreads is installed and the plugin is enabled, so it is safe to ship even for sites that do not use QuillThreads.

## Migrating existing comments

If your extension already has its own comment table and you want to move that history into QuillThreads, add an import adapter. Set each record's context to your registered `key()`, and the importer handles sanitising, threading, idempotency, and count rebuilds. See [Custom import adapters](./custom-import-adapters.md).
