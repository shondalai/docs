---
id: quillthreads-changelog
title: Changelog
sidebar_label: Changelog
sidebar_position: 17
---

# Changelog

Release notes for QuillThreads. The newest version is always at the top. You can update from within Joomla at **System → Update → Extensions** whenever a new release appears.

## [1.0.2] - 2026-07-06

### 🚀 Added
- Added import from GPS Tools comments system
- Added SDK for third-party components to integrate comments support
- Showed source type on comments page
- Added device detection support
- Improved admin dashboard
- Added initial project files

## [1.0.0] - 2026-06-28

The first public release. QuillThreads launches as a complete, modern comments system for Joomla 5 and 6 articles.

**Reading and posting**

- Threaded or flat discussions with a configurable nesting depth.
- Up and down voting, optional emoji reactions, and @mentions.
- Sort by newest, oldest, or top, with page-by-page loading and full-thread search so busy articles stay fast.
- Light, dark, and automatic theming, plus an accent colour you can match to your brand.
- Guest or registered-only commenting, in plain text, Markdown, or limited HTML, all sanitised.
- A per-article edit window, length and link limits, and a strict link policy.
- Server-rendered first paint for SEO, with a no-JavaScript fallback.

**Moderation**

- A dashboard, a full comments list with filters, and a focused review queue.
- One-click and bulk approve, feature, pin, unpublish, spam, and trash.
- A spam score on every comment and per-comment review with signals and an audit trail.
- Hold rules (everything, guests, first comment, or none), auto-approval for trusted users, hold-on-links, and auto-unpublish on reports.
- Reader reporting with configurable reasons.
- Bans by keyword, email, or IP.

**Anti-spam**

- Honeypot and dwell-time checks, per-author rate limits, blocked words and link domains, and optional CAPTCHA for guests.

**AI moderation (optional)**

- Spam and toxicity scoring through the Shondalai AI service, with optional auto-hold.
- On-demand "Review with AI" in the admin, and public discussion summaries for long threads.
- A background scan task for efficient, batched scoring.

**Privacy**

- Consent prompts, encrypted commenter emails, configurable IP storage and retention, and a privacy plugin for Joomla data export and removal.

**Notifications**

- Moderator and author notifications, reader subscriptions to articles and replies, and fully editable, branded email templates with a live preview and test send.

**Migration**

- Import from JComments, Akeeba Engage, and CSV or JSON, with a dry-run preview, idempotent re-runs, and orphan detection.
- An extensible adapter framework for onboarding other systems.

**Included in the package**

- The component, content plugin, latest-comments module, Smart Search plugin, privacy plugin, scheduled task plugin, and the shared Shondalai Core library.

---

For help with any release, see [Troubleshooting](./troubleshooting.md) or write to support@shondalai.com.
