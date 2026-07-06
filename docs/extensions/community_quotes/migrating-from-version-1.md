---
id: migrating-from-version-1
title: Migrating from version 1
sidebar_label: Migrate from v1
sidebar_position: 40
---

# Migrating from version 1

If you ran the original Community Quotes, you do not have to start over. Community Quotes 1.0.0 is a complete rebuild on the Joomla 6 platform, and it ships with a built-in migration tool that copies your old quotes, authors, collections, comments, and ratings into the new tables. Row IDs and category IDs are preserved, so your existing links and category structure carry straight across.

The tool lives at **Components -> Community Quotes -> Migration**. It is safe to run: it previews before it writes, it never touches your legacy tables, and it can be run more than once without creating duplicates.

## Before you begin

- **Back up your database.** This is the one rule that never changes. The migration is non-destructive by design, but a backup is your safety net for any upgrade.
- **Install Community Quotes 1.0.0.** The new component and its tables must exist before you migrate. Your old `#__quotes*` tables can stay exactly where they are; the tool reads from them but never changes them. See the [Quick start](./quick-start.md) for install steps.
- **Leave the old component in place until you are done.** The migration reads the legacy tables directly, so keep them until you have confirmed the new content looks right.

## What gets migrated

The tool moves six kinds of records, in this order, then recalculates a few counters:

| Legacy table | New home | Notes |
| --- | --- | --- |
| Quote authors | Authors | Name, alias, category, biography, avatar, birth year, and publish state carry over. |
| Quotes | Quotes | Text, alias, category, author, source, hits, comment count, and likes/dislikes carry over. |
| Quote lists | Collections | Title, alias, owner, and publish state carry over. |
| List items | Collection items | Each quote's place in a collection, skipping any orphaned links. |
| Comments | Discussion | Comment text, author, date, and state carry over as top-level comments. |
| User ratings | Reactions | Each member's like or dislike becomes a per-user reaction. |

After the records are in place, a final **recount** step recalculates the structural counters: how many published quotes each author has, how many published comments each quote has, and how many quotes each collection holds.

### Categories carry over unchanged

Both the old and the new component use Joomla's own category system under the same extension names, so quote categories and author categories keep their exact IDs. You do not migrate categories separately; your quotes and authors simply point at the same categories they always did. The two category trees are explained in [Quotes, authors, and categories](./quotes-authors-and-categories.md).

### What does not carry over

A few legacy fields have no place in the new model and are dropped on purpose. The migration report lists them so nothing is a surprise:

- Author fields like country, hits, likes, dislikes, and access level.
- Quote fields like the submitter's name, email, and IP address, plus access level and publish-up/down dates.
- The legacy email templates. The new component uses the shared Shondalai email and digest system instead, covered in [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).

### How states map

Legacy publish states translate cleanly: published stays published, unpublished stays unpublished, archived becomes unpublished, and anything trashed or negative lands in the trash. Every migrated quote is marked **unverified** for attribution, so you can review and verify quotes at your own pace afterwards. Attribution and verification are covered in [Submissions and moderation](./submissions-and-moderation.md).

## Running the migration

Open **Components -> Community Quotes -> Migration**. The screen adapts to what it finds:

- If no legacy tables are present, you see a short empty state and there is nothing to do.
- If legacy tables are present, you see a panel comparing the legacy record counts against the new tables, along with any warnings.

The steps are:

1. **Read the warnings.** The tool flags anything worth knowing before you start, for example that the new tables already hold quotes, that some legacy tables are missing, or that legacy email templates were found and will not be migrated.
2. **Preview (recommended).** Click **Preview** for a dry run. It reports, per record type, how many rows it will insert and how many it will skip, without writing anything. Nothing changes in your database during a preview.
3. **Decide about overwrite.** Leave **Overwrite existing records** off for a normal run. Off means the tool skips any record whose ID already exists, so a second run only fills in what is missing. Turn it on only if you want to replace records that were already migrated with a fresh copy from the legacy data. See the note below.
4. **Run.** Click **Run**. The tool works through each record type in batches, showing a progress bar, a running log, and a per-step checklist. When it reaches the recount step it finishes and refreshes the counts panel.

The whole run is driven in small batches, so a large library migrates steadily without timing out. You can watch the log to see each batch complete.

:::note Idempotent and repeatable
With overwrite off, running the migration a second time is safe. It skips every record it already imported and only brings across new or previously missing ones. That means you can migrate, add a few more quotes to the old system, and migrate again to pick up just the additions.
:::

:::caution About overwrite
Overwrite replaces already-migrated records with the legacy version. If you have edited quotes, authors, or collections in the new component since a previous migration, an overwrite run will discard those edits for any record that still exists in the legacy tables. Use it deliberately, and back up first.
:::

## Aliases and SEF URLs after migration

The migration is built to keep your old links working:

- **IDs are preserved** for quotes, authors, collections, and comments, so any URL or cross-reference that pointed at a specific ID still resolves.
- **Aliases carry over** for authors, collections, and quotes. Quotes gain an alias column during the migration so the new nested SEF URLs reproduce the legacy quote path.
- **Aliases are made unique.** If two records would end up with the same alias, the tool appends the record's ID (and, if needed, a further suffix) so every alias stays unique. This matters because the "Remove IDs from URLs" option relies on unique aliases.

Once your content is in, set up your menus and, if you want the tidiest URLs, review the "Remove IDs from URLs" option. Both are covered in [Menus and SEF URLs](./menus-and-sef-urls.md). If you turn "Remove IDs from URLs" on and a page 404s afterwards, the cause is almost always a duplicate alias; the [Troubleshooting](./troubleshooting.md) page walks through the fix.

## After the migration

1. **Spot-check your content.** Open the Quotes, Authors, and Collections lists in the admin and confirm the counts match what you expected. Visit a few front-end pages.
2. **Verify the quote counters.** The recount step should have set author, quote, and collection counters correctly. If a count looks off, run the migration again with overwrite off; the recount step runs on every pass.
3. **Review attribution.** Every migrated quote is unverified. Work through them in the moderation and attribution tools when you are ready. See [Submissions and moderation](./submissions-and-moderation.md).
4. **Set up email.** Legacy email templates are not migrated. Configure the digest and subscribers fresh. See [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).
5. **Retire the old component** only once you are satisfied everything moved across.

## Where to go next

- Get your menus and links right: [Menus and SEF URLs](./menus-and-sef-urls.md).
- Understand the content model you migrated into: [Quotes, authors, and categories](./quotes-authors-and-categories.md).
- Verify and moderate your quotes: [Submissions and moderation](./submissions-and-moderation.md).
- Fix a SEF 404 after removing IDs: [Troubleshooting](./troubleshooting.md).
