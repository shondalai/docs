---
id: contacts-and-groups
title: Contacts & Groups
sidebar_label: Contacts & Groups
sidebar_position: 40
---

# Contacts & Groups

Your personal contact list inside Community Surveys. Used as the audience picker for invitation campaigns.

**Strict per-user isolation** — every contact and contact group is owned by the admin who created it. No admin (including the site super-user) can see another admin's contacts. If you import a CSV, only you can use those contacts.

Open via **Contacts** in the left rail.

---

## Layout

- **Top toolbar** — search, group filter, plus three actions: **+ Add contact**, **Import**, **+ New list**.
- **Left rail** — your contact lists (groups). Each shows the group name and contact count.
- **Main table** — contacts in the selected list, or all your contacts when "All contacts" is selected.

---

## Adding contacts one at a time

Click **+ Add contact**. Fill in:

- **Name** — display name; shown in invitation emails as the recipient name.
- **Email** — required; must be unique within *your* contact list (other admins can have the same email).
- **Phone** — optional.
- **Company** — optional.
- **Add to lists** — multi-select; assign to one or more contact groups.

Save. The contact appears in the table immediately.

You can edit any contact later by clicking its row.

---

## Importing from CSV

Click **Import** in the toolbar.

Two ways to provide the CSV:

1. **Paste** the CSV text into the textarea.
2. **Upload** a `.csv` file from your computer.

### Header detection

The first non-empty row is treated as the header. Column names are normalised (lowercased, non-alpha chars stripped) and mapped to canonical fields:

| Your header | Maps to |
|---|---|
| `name`, `full_name`, `display_name` | name |
| `first_name`, `firstname` | (combined into name) |
| `last_name`, `lastname`, `surname` | (combined into name) |
| `email`, `email_address`, `mail` | email |
| `phone`, `mobile`, `phone_number` | phone |
| `company`, `organization`, `organisation` | company |

If your file has a `first_name` + `last_name` columns but no `name`, the import combines them ("Jane" + "Doe" → "Jane Doe").

### Required vs optional

- **Email** — required. Without it the row is rejected.
- Everything else — optional. Missing values become empty strings.

### Duplicate handling

Within your contact list, email is treated as the unique key. Re-importing a CSV with existing emails silently skips those rows — no errors, no duplicates created.

If you want to update existing contacts (e.g. fix a phone number), edit them in the UI individually. Bulk update via import isn't supported by design (too easy to overwrite good data with a bad CSV).

### Target list

Below the file/paste field, you can pick a target group. Every newly-imported contact is added to that group automatically. Pick "No group" to leave them un-grouped.

### Result

After import, a summary toast: "*Imported X, skipped Y duplicates*". The table refreshes to show the imported contacts.

---

## Contact groups (lists)

Lists organise contacts for campaign targeting. A contact can belong to multiple lists.

### Creating a list

In the left rail, click **+ New list**. Fill in:

- **Name** — what the list is called. Shown in the campaign wizard's audience picker.
- **Description** — optional one-liner.

Save. The list appears in the rail with a contact count of 0.

### Adding contacts to a list

Two ways:

1. **From the contact edit form** — "Add to lists" is a multi-select.
2. **From the table** — select rows (checkbox) → **Bulk → Add to list** → pick the list.

### Renaming / deleting a list

Right-click any list in the rail (or use the kebab menu on hover):

- **Rename** — change the name. Doesn't affect contact memberships.
- **Description** — edit the one-liner.
- **Delete** — removes the list. Contacts stay (they just lose this membership).

Deleting a list does **not** delete the contacts in it.

---

## Searching and filtering

The toolbar carries:

- **Search** — full-text across name, email, phone, company. Debounced so typing doesn't fire a request per keystroke.
- **Group filter** — defaults to "All contacts"; pick a specific list to narrow.

Both filters combine — search within a specific list, etc.

---

## Bulk actions

Select rows via the row-checkboxes. A bulk-action bar appears above the table:

- **N selected** — count of selected rows.
- **Cancel** — clears the selection.
- **Add to list** — multi-select which list to add into.
- **Remove from list** — only enabled when you're viewing a specific list; removes the selected contacts from *this* list (they stay in others).
- **Delete** — permanent delete of every selected contact. Confirmation dialog.

The "select all" checkbox in the header toggles every row in the current view (i.e. matches your current search + filter).

---

## Privacy and isolation

The strict isolation guarantee:

- Every contact carries a `created_by` column = the Joomla user id who created it.
- Every query in the contact API filters by `created_by = <current user>`.
- The integration runs even for `core.admin` super-users — they see *their own* contacts, not everyone's.

This matches the GDPR concept of "controller" — whoever imported the contacts is responsible for the legal basis on which they were collected. Sharing across admins would muddy that responsibility.

If you genuinely need shared contacts (e.g. a marketing team), each team member imports the same CSV. The duplicate guard scoped per-user means the imports don't conflict.

---

## Audience for invitation campaigns

The Contacts page is the source of the recipient picker in invitation campaigns. When you create a campaign on the **Invitations** page:

1. Pick a survey.
2. Pick recipients — your contact groups and/or individual contacts.
3. The campaign builds one tracked invitation per recipient.

See [Invitations & Campaigns](./invitations-campaigns.md).

---

## Limits

| | Soft limit | Notes |
|---|---|---|
| Contacts per admin | None enforced; tested to 100k | The contact list scales server-side; the UI table is virtualised |
| Lists per admin | None enforced | |
| Lists per contact | None enforced | |
| CSV import size | 5 MB per upload | Configurable via PHP `upload_max_filesize` |
| CSV columns | All extra columns ignored | Unknown headers don't error |
| Bulk delete | All selected at once | DELETE is hard delete; no recycle bin |
