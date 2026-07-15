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
| **Komento** | Database | Reads your `#__komento_comments` table directly. |
| **Akeeba Engage** | Database | Reads your `#__engage_comments` table directly. |
| **GPS Tools** | Database | Moves the built-in GPS Tools track comments into QuillThreads. |
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

### Komento

- Only comments on articles (Komento's `com_content` component) are migrated. Comments on other components, such as K2 or EasyBlog, are skipped.
- Reply threads are preserved from the parent column, and bodies are converted to formatting QuillThreads keeps.
- States map across as follows: soft-deleted comments become trashed, published comments stay published, and unpublished comments land in your moderation queue as pending.

### Akeeba Engage

- Each Engage comment is tied to a Joomla article through its asset, which the importer resolves back to the article id.
- Engage's enabled flag maps to published or unpublished.

### GPS Tools

- Moves the native GPS Tools track comments into QuillThreads, keeping each comment attached to its track and preserving reply threads.
- States map across as follows: spam-flagged comments become spam, published comments stay published, and unpublished comments land in your moderation queue as pending.
- The move is one-way and non-destructive. Your existing GPS Tools comments are left exactly as they are, and re-running the import brings in nothing new.
- To show the migrated threads on your track pages, set the comment engine to QuillThreads. See [QuillThreads comments](/gps-tools/quillthreads-comments) in the GPS Tools documentation.

### CSV and JSON

You can build your own file to import comments from a spreadsheet or another system. A CSV needs a header row; JSON is either an array of comment objects or an object with a `comments` array (which is what the QuillThreads export produces). Each row or object is one comment.

**Get a template.** On the Import screen, pick **CSV** or **JSON** as the source. A **File format** panel appears with a **Download CSV template** and a **Download JSON template** button. Each gives you a ready-to-edit sample with every column filled in, so the quickest path is to download one, replace the sample rows with yours, and import it.

**Columns.** Column names are matched by name and are case-insensitive, so `Article ID`, `article_id`, and `content_id` are all the same column. Only `body` is required; everything else is optional. The first matching name in each row wins.

| Column | Also accepted as | What it is |
| --- | --- | --- |
| `body` | `comment`, `text`, `content`, `body_raw`, `message` | The comment text. Required. Plain text or basic HTML; it is re-sanitised on import. |
| `article_id` | `articleid`, `content_id`, `contentid` | Which article the comment belongs to. If empty, the **Fallback article id** from the Import screen is used. |
| `id` | `source_id`, `comment_id` | A unique id for this row within the file. Only needed so replies can point at it. |
| `parent_id` | `parentid`, `parent` | The `id` of the comment this one replies to. Empty or `0` means a top-level comment. |
| `user_id` | `userid`, `created_by` | The Joomla user id of a registered author. Leave empty or `0` for a guest. |
| `name` | `author`, `guest_name`, `fullname` | Guest author name. |
| `email` | `guest_email` | Guest author email. |
| `website` | `url`, `homepage` | Guest author website. |
| `state` | `published`, `enabled`, `approved`, `status` | `published`, `pending`, `unpublished`, `spam`, or `trashed`. Defaults to `published`. |
| `created` | `created_on`, `date`, `datetime`, `start_date` | The post date, in any readable format such as `2026-02-10 09:30:00`. Defaults to now. |
| `language` | `lang` | Language tag, for example `en-GB`. Defaults to `*` (all). |
| `ip` | `ip_address` | The author's IP address. |
| `likes` | `likes_count` | Upvote count. |
| `dislikes` | `dislikes_count` | Downvote count. |

**States** accept the friendly names above, or the numbers `0` pending, `1` published, `2` unpublished, `3` spam, `4` trashed, or common synonyms (`approved`, `hold`, `junk`, `deleted`, and so on).

**Threading**: give each comment an `id`, then set a reply's `parent_id` to the id of the comment it answers. Parents do not have to come before their replies in the file. Leave `parent_id` empty for top-level comments.

**Registered vs guest**: set `user_id` for a comment by a logged-in member (the name and email are taken from that account, so you can leave `name`/`email` empty). For a guest, leave `user_id` empty and fill in `name` and `email`.

A CSV example (quote any value that contains a comma):

```csv
id,parent_id,article_id,user_id,name,email,website,body,state,created,likes
1,,42,0,Jane Doe,jane@example.com,https://jane.example,"Great article, thanks for sharing!",published,2026-02-10 09:30:00,3
2,1,42,0,Sam Lee,sam@example.com,,"I agree with Jane.",published,2026-02-10 10:15:00,1
3,,42,505,,,,Comment by registered user 505.,published,2026-02-11 14:00:00,0
4,,58,0,Anon,anon@example.com,,Held for review.,pending,2026-02-12 08:05:00,0
```

The same data as JSON:

```json
{
  "comments": [
    { "id": 1, "parent_id": null, "article_id": 42, "name": "Jane Doe", "email": "jane@example.com", "body": "Great article, thanks for sharing!", "state": "published", "created": "2026-02-10 09:30:00", "likes": 3 },
    { "id": 2, "parent_id": 1, "article_id": 42, "name": "Sam Lee", "email": "sam@example.com", "body": "I agree with Jane.", "state": "published" },
    { "id": 3, "article_id": 42, "user_id": 505, "body": "Comment by registered user 505.", "state": "published" },
    { "id": 4, "article_id": 58, "name": "Anon", "email": "anon@example.com", "body": "Held for review.", "state": "pending" }
  ]
}
```

The QuillThreads CSV and JSON **exports** use these same columns, so an export re-imports losslessly, and a re-import brings in nothing new thanks to the duplicate guard.

## After the move

Once your comments are in, point QuillThreads at your articles ([Placing comments on articles](./placing-comments-on-articles.md)) and disable the old extension's display so you are not showing two threads. Keep the old data until you are happy, then remove it at your leisure. Because the import is repeatable, you can always run it again if you imported a subset first.

## Migrating from something not listed here?

The importer is built to be extended. If your comments live in a system not in the table above, a developer can add a source with a single small class. See [Custom import adapters](./custom-import-adapters.md).
