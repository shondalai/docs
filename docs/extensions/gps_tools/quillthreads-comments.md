---
id: quillthreads-comments
title: QuillThreads comments
sidebar_label: QuillThreads comments
description: Use QuillThreads as the comment system for GPS Tools track pages
keywords:
  - GPS Tools
  - QuillThreads
  - comments
  - moderation
  - integration
---

# QuillThreads comments

GPS Tools ships with its own track comments. If you also run [QuillThreads](/quillthreads/overview), you can switch a track's discussion to QuillThreads instead and get threaded replies, a full moderation desk, spam and optional AI checks, email notifications, and subscriptions, without changing anything else about your tracks.

The two systems coexist. Your built-in comments stay exactly as they are, and you can switch back at any time.

## Requirements

1. Install the **QuillThreads** package.
2. In **Extensions → Plugins**, enable **QuillThreads - GPS Tools**. This plugin ships with GPS Tools and registers tracks as a commentable context in QuillThreads. It stays dormant until QuillThreads is installed, so it is safe to leave in place either way.

## Switching a site to QuillThreads

1. Open **Components → GPS Tools → Settings → Display**.
2. Make sure **Show Comments** is on.
3. Set **Comment Engine** to **QuillThreads** and save.

Track pages now render the QuillThreads thread in place of the built-in comment form. Set the option back to **Built-in (GPS Tools)** to restore the native comments.

Because this is a standard component option, a specific GPS Tools menu item can override it, so you can use QuillThreads on some track views and the built-in comments on others.

## Rewards and gamification

If you award points for comments through Sociable or Rewardify, those rules keep working. When the QuillThreads engine is active, the **QuillThreads - GPS Tools** plugin bridges each *published* QuillThreads comment on a track back to the native `onGpsToolsAfterCommentCreate` event, so your existing point rules fire exactly as before. The bridge is on by default and can be turned off in the plugin's options.

## What to expect

- **Separate stores.** Built-in comments and QuillThreads comments are kept separately. Switching the engine changes which thread is shown; it does not move existing comments between the two systems.
- **Moderation moves to QuillThreads.** With the QuillThreads engine active, moderate track discussions from **Components → QuillThreads**, where GPS track comments appear alongside every other QuillThreads discussion, correctly labelled as coming from GPS Tools.
- **One comment system per track view at a time.** The engine option decides which one renders.

For the developer view of how this integration is built, see [Embedding comments in your extension](/quillthreads/embedding-comments) in the QuillThreads docs.
