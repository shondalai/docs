---
id: quick-start
title: Quick start guide
sidebar_label: Quick start
sidebar_position: 2
---

# Quick start guide

This guide takes you from a fresh install to comments live on an article in about ten minutes. You do not need to touch most settings to get started; the defaults are sensible.

## 1. Install the package

Install it the normal Joomla way:

1. Sign in to **System → Install → Extensions** in your Joomla admin.
2. Drag the `pkg_quillthreads_x.x.x.zip` file onto the upload area, or pick it with the file selector.
3. Wait for the success message.

The package installs the component, the content plugin, the latest-comments module, the Smart Search and privacy plugins, the scheduled task plugin, and the shared Shondalai Core library.

After install, the component sits at **Components → QuillThreads**.

## 2. Enable the content plugin

The comment thread appears on your articles through the content plugin, which is enabled on install. To confirm:

1. Go to **System → Manage → Plugins**.
2. Search for `quillthreads`.
3. Make sure **Content - QuillThreads** shows a green check. If not, open it and set **Status** to Enabled.

While you are there, the same search lists the Smart Search, privacy, and task plugins. The privacy plugin is worth enabling now so data requests are covered from day one.

## 3. Set who can comment

Permissions decide who can post, reply, vote, report, and moderate.

1. Open **Components → QuillThreads**, then click **Settings** in the sidebar.
2. On the **Posting** tab, set **Who can comment** to either everyone (guests and registered users) or registered users only.
3. If you allow guests, leave **Allow guest comments** on.

For the finer-grained Joomla permissions (who can moderate, ban, import, and so on), see [Permissions](./permissions.md). The defaults are fine for a first run.

## 4. Choose how new comments are handled

Still in **Settings**, open the **Moderation** tab and pick a **Moderation mode**:

- **Hold every comment for review** while you find your feet.
- **Hold guest comments only** (the default), so signed-in members post straight away.
- **Hold a user's first comment only**, then trust them afterwards.
- **Publish immediately** once you are confident in your anti-spam settings.

You can change this at any time. See [Moderation](./moderation.md) for the full picture.

## 5. Open an article and check the thread

Visit any published article on your site. The comment thread appears below the article body by default. Post a test comment to see the flow.

If you are signed in as an administrator, you will also see moderator controls inline. The same comment shows up in the admin under **Components → QuillThreads → Comments**.

:::tip
By default the thread renders on the single-article view only, not under every teaser in a blog or category list. You do not need to do anything to get that behaviour.
:::

## 6. Place comments exactly where you want (optional)

By default the thread appears after the article body. You can change the placement, or drop it at a specific point in your text:

- Set the placement to before the content, after the content, or off, in the content plugin options.
- Type `{quillthreads}` anywhere in an article to place the thread at that exact spot.
- Type `{quillthreads off}` to hide comments on a single article.

Full details are in [Placing comments on articles](./placing-comments-on-articles.md).

## 7. Make it yours (optional)

A few settings worth a look before you go live:

- **Appearance**: light, dark, or automatic theme, and an accent colour. See [Appearance and theming](./appearance-and-theming.md).
- **Anti-spam**: the honeypot, dwell time, and rate limits are on with good defaults. See [Anti-spam](./anti-spam.md).
- **Notifications**: turn on email notifications and customise the templates. See [Email and notifications](./email-and-notifications.md).
- **Privacy**: the consent prompt and IP handling. See [Privacy and GDPR](./privacy-and-gdpr.md).

## 8. Bringing comments from another system

If you are moving from JComments or Akeeba Engage, you do not have to start from zero. Open **Components → QuillThreads → Import**, preview the migration as a dry run, and bring your existing discussion across with threading intact. See [Migrating comments](./migrating-comments.md).

## 9. Keeping QuillThreads up to date

When a new version is released, **System → Update → Extensions** picks it up automatically through the update site. Click **Update** next to the QuillThreads row. We recommend a database backup before any major-version upgrade.

## Next steps

- [Placing comments on articles](./placing-comments-on-articles.md)
- [Settings reference](./settings-reference.md)
- [Moderation](./moderation.md)
- [Migrating comments](./migrating-comments.md)
