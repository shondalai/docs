---
id: migrating-comments
title: Migrating comments
sidebar_label: Migrating comments
sidebar_position: 14
---

# Migrating comments

Switching comment systems usually means losing your history, and that is reason enough for many people to never switch. QuillThreads is built so you do not have to. It imports your existing comments, shows you exactly what will happen before it touches anything, and never creates duplicates if you run it twice.

The importer lives at **Components → QuillThreads → Import**. Running it needs the **Import** permission ([Permissions](./permissions.md)).

## What you can import from

| Source | Type | Notes |
| --- | --- | --- |
| **JComments** | Database | Reads your `#__jcomments` table directly. |
| **Akeeba Engage** | Database | Reads your `#__engage_comments` table directly. |
| **CSV** | File | A comma-separated file with a header row. |
| **JSON** | File | A JSON array, or `{ "comments": [...] }`. Round-trips the QuillThreads export. |

Database sources are detected automatically. If a source's tables are not present on your site, it shows as "not detected" and cannot be selected.

## The safe way: preview first

Every import has two steps, and the first one writes nothing:

1. **Preview (dry run)** reads the source and reports what it found: the total, how many will import, how many are duplicates that will be skipped, and how many failed, with a breakdown by state and a sample of any issues.
2. **Run import** does the actual work, reusing what the preview already read.

Always preview first. It is the moment to catch a wrong file or a surprise before anything lands in your database.

## How to import

1. Open **Components → QuillThreads → Import**.
2. Choose your **Source**.
3. For a file source, choose the file. For a database source, there is nothing to upload.
4. Optionally set a **Fallback article id**, used for any record that does not name its own article.
5. Click **Preview (dry run)** and read the report.
6. If it looks right, click **Run import**.

After a database import on a large site, it is worth running the **Rebuild counts** task once so every article's comment count is exact. See [Scheduled tasks](./scheduled-tasks.md).

## What the importer handles for you

- **Threading**: replies keep their parent, so nested conversations come across intact.
- **Re-run safety**: every imported comment is remembered, so running the same import again imports nothing new. You can preview, run, and re-run without fear of duplicates.
- **Orphan detection**: a comment that points at an article which no longer exists is reported as a "missing article" failure rather than imported as something invisible. The preview surfaces these before you commit.
- **Clean content**: imported bodies are re-sanitised through the same strict filter as live comments, so nothing unsafe comes across with your history.

## Notes per source

### JComments

- Only comments on articles (the `com_content` object group) are migrated. Comments on other content types are skipped.
- BBCode bodies (`[b]`, `[quote]`, `[url]`, and so on) are converted to formatting QuillThreads keeps.
- States map across as follows: deleted comments become trashed, published comments stay published, and unapproved comments (published off) land in your moderation queue as pending.

### Akeeba Engage

- Each Engage comment is tied to a Joomla article through its asset, which the importer resolves back to the article id.
- Engage's enabled flag maps to published or unpublished.

### CSV and JSON

- Column names are matched flexibly, so `id`/`comment_id`, `parent`/`parent_id`, `article_id`/`content_id`, `body`/`comment`/`text`, `name`/`author`, and similar all work.
- The QuillThreads CSV and JSON **exports** carry the ids needed for a faithful round-trip, so export and re-import is lossless, and a re-import is a no-op thanks to the duplicate guard.

## After the move

Once your comments are in, point QuillThreads at your articles ([Placing comments on articles](./placing-comments-on-articles.md)) and disable the old extension's display so you are not showing two threads. Keep the old data until you are happy, then remove it at your leisure. Because the import is repeatable, you can always run it again if you imported a subset first.

## Migrating from something not listed here?

The importer is built to be extended. If your comments live in a system not in the table above, a developer can add a source with a single small class. See [Custom import adapters](./custom-import-adapters.md).
