---
id: modules-and-plugins
title: Modules and plugins
sidebar_label: Modules and plugins
sidebar_position: 13
---

# Modules and plugins

The QuillThreads package is more than the component. It includes a module and a set of plugins that connect comments to the rest of your site. They all install with the package; this page explains what each one does and when to use it.

## Content plugin

**Content - QuillThreads** (`plg_content_quillthreads`) is the one that puts the comment thread on your articles. It is enabled on install. Placement, the `{quillthreads}` token, and category exclusions are covered in [Placing comments on articles](./placing-comments-on-articles.md).

## Latest comments module

**Latest comments** (`mod_quillthreads_latest`) is a small widget that lists your most recent comments. Drop it in a sidebar or footer to show that your site is active and to pull readers back into discussions.

1. Go to **Content → Site Modules → New** and choose **Latest comments**.
2. Pick a module position and the pages it should appear on.
3. Set how many comments to show.
4. Save and publish.

It is a simple, effective way to surface fresh conversation across your site.

## Smart Search plugin

**Smart Search - QuillThreads** (`plg_finder_quillthreads`) indexes comment content for Joomla's Smart Search (Finder), so a site search can turn up comments, not just articles.

1. Enable it under **System → Manage → Plugins** (search `quillthreads`).
2. Make sure Joomla's **Smart Search** content plugin is enabled too.
3. Run an index from **Components → Smart Search → Index** the first time, so existing comments are picked up. New comments are indexed as they are posted.

Enable this if you use Smart Search on your site and want discussions to be findable. If you do not use Smart Search, you can leave it disabled.

## Privacy plugin

**Privacy - QuillThreads** (`plg_privacy_quillthreads`) connects comments to Joomla's data export and removal flow, so subject-access and erasure requests include comment data. Enable it so your GDPR handling is complete. See [Privacy and GDPR](./privacy-and-gdpr.md).

## Task plugin

**Task - QuillThreads** (`plg_task_quillthreads`) adds four background routines to Joomla's Scheduler: a moderator digest, maintenance, counter rebuilds, and AI scanning. See [Scheduled tasks](./scheduled-tasks.md).

## Shared platform pieces

The package also installs two shared pieces used across all Shondalai extensions:

- **Shondalai Core library**: the platform library that provides email, storage, the AI client, and more. QuillThreads will not run without it, and it is safe to keep even if you uninstall the component while other Shondalai extensions are present.
- **Licensing plugin** (`plg_system_licensing`): handles your licence and updates. Keep it enabled so QuillThreads receives updates through Joomla's updater.

## Which ones do I need?

| Piece | Enable it if |
| --- | --- |
| Content plugin | Always (it renders the thread). |
| Privacy plugin | You need GDPR data requests to cover comments. Recommended. |
| Task plugin | You want digests, retention enforcement, or background AI scanning. Recommended. |
| Latest comments module | You want a recent-comments widget. Optional. |
| Smart Search plugin | You use Joomla Smart Search and want comments indexed. Optional. |
| Licensing plugin | Always (it delivers updates). |
