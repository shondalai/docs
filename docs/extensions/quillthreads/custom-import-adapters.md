---
id: custom-import-adapters
title: Custom import adapters
sidebar_label: Custom import adapters
sidebar_position: 15
---

# Custom import adapters

This is a developer page. If you just want to migrate from JComments, Akeeba Engage, CSV, or JSON, see [Migrating comments](./migrating-comments.md) instead.

QuillThreads' importer is source-agnostic. Onboarding a new comment system (Komento, Disqus exports, a bespoke table) is one small class plus one line of registration. The orchestrator does everything else: validation, HTML sanitising, threading, idempotency, count rebuilds, orphan detection, and logging.

## The moving parts

| Piece | Role |
| --- | --- |
| `Import\ImportRecord` | The normalised, source-agnostic shape every adapter maps into. |
| `Import\Contract\ImportSourceInterface` | The adapter contract. |
| `Import\Source\AbstractImportSource` | Base class with state mapping, date normalising, BBCode conversion, and flexible column aliasing. |
| `Import\ImportRegistry` | Holds the registered adapters. |
| `Service\ImportService` | The orchestrator. |
| `#__quillthreads_import_map` | Maps `(source key, source id)` to the new comment id, which gives both idempotency and parent resolution. |

The orchestrator never trusts source HTML. Every body is re-rendered through the sanitiser before it is stored.

## Writing an adapter

A source maps its own rows into a stream of `ImportRecord` objects. The JComments adapter is the worked example, and it ships built-in:

```php
namespace Shondalai\Component\Quillthreads\Administrator\Import\Source;

use Shondalai\Component\Quillthreads\Administrator\Import\ImportRecord;

final class JCommentsImportSource extends AbstractImportSource
{
    public function __construct(private readonly \Joomla\Database\DatabaseInterface $db) {}

    public function key(): string   { return 'jcomments'; }
    public function label(): string { return 'JComments'; }
    public function kind(): string  { return 'database'; }   // or 'file'

    public function isAvailable(): bool
    {
        return \in_array($this->db->getPrefix() . 'jcomments', $this->db->getTableList(), true);
    }

    public function records(array $options): iterable
    {
        $q = $this->db->getQuery(true)
            ->select(['id', 'parent', 'object_id', 'userid', 'name', 'email', 'comment', 'published', 'deleted', 'date'])
            ->from($this->db->quoteName('#__jcomments'))
            ->where($this->db->quoteName('object_group') . ' = ' . $this->db->quote('com_content'))
            ->order($this->db->quoteName('id') . ' ASC');
        $this->db->setQuery($q);

        foreach ($this->db->getIterator() as $row) {
            $r = new ImportRecord();
            $r->sourceId       = (string) $row->id;
            $r->sourceParentId = (int) $row->parent > 0 ? (string) $row->parent : null;
            $r->articleId      = (int) $row->object_id;   // JComments stores the content id directly
            $r->userId         = (int) $row->userid;
            $r->guestName      = (string) $row->name;
            $r->guestEmail     = (string) $row->email;
            $r->body           = $this->bbcodeToHtml((string) $row->comment);  // BBCode source
            $r->state          = $this->mapState((int) $row->published);
            $r->created        = $this->toSql((string) $row->date);
            yield $r;
        }
    }
}
```

Then register it in the component's service provider:

```php
$registry->register(new JCommentsImportSource($c->get(DatabaseInterface::class)));
```

It now appears in the Import dialog with full dry-run preview and idempotent runs.

## The contract

| Method | Returns |
| --- | --- |
| `key()` | A unique, stable machine key, for example `komento`. |
| `label()` | The human label for the Import dialog. |
| `kind()` | `'file'` (needs an upload) or `'database'` (reads existing tables). |
| `isAvailable()` | Whether the source can run now. A database adapter typically checks its tables exist. |
| `validateOptions($options)` | Language-key error strings, or an empty array when the options are fine. |
| `records($options)` | An iterable of `ImportRecord` objects. Yield parents before children so threading resolves in one pass. |

## Helpers from the base class

`AbstractImportSource` gives you:

- `mapState($value, $default)`: maps common state values (`published`, `approved`, `1`, `pending`, `unapproved`, `0`, `spam`, `trash`, `unpublished`) to a comment state.
- `bbcodeToHtml($text)`: converts a BBCode body (`[b] [i] [u] [s] [url] [quote] [code] [list] [img] [email]`) into the limited HTML the sanitiser keeps, with newlines as breaks. Reuse it for any BBCode source.
- `tolerantSelect($db, $table, $alias, $wanted)`: builds a SELECT that survives schema differences between versions of a source. Pass `canonical => [candidate column names]`; the first candidate that exists is aliased to the canonical name, and any canonical with no matching column is selected as `NULL` so the row object always carries it (read with `?? default`). It returns `[$selectExpressions, $actualColumnMap]`, so you can reference the real column name in `WHERE`, `JOIN`, and `ORDER BY`. The built-in JComments and Akeeba Engage adapters use this, which is why they import cleanly even when a column like `deleted` is absent or a key is named differently.
- `toSql($value)`: normalises any parseable date to SQL, or null.
- `recordFromAssoc($row, $options)`: flexible column aliasing for file adapters.

## What the orchestrator does for you

Once your adapter yields records, `ImportService` handles validation (empty body, missing article, bad state), re-sanitising every body, resolving threading and the materialised path, skipping anything already imported, the orphan guard, count rebuilds, and logging. A dry run does all of this except the final write, so the preview is honest.

For a file adapter, return `kind() === 'file'`, read the uploaded file in `records()`, and call `$this->recordFromAssoc($row, $options)` per row. See the built-in `CsvImportSource` and `JsonImportSource` for the pattern.
