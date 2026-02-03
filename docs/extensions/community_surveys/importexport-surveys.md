---
id: importexport-surveys
title: Import & Export Surveys
sidebar_label: Import/Export
sidebar_position: 20
---

Community Surveys allows you to export complete surveys for backup, migration, or duplication across Joomla installations. This guide covers everything you need to know about importing and exporting surveys.

---

## Overview

The import/export feature allows you to:

- **Backup surveys** — Create portable copies of your surveys
- **Migrate surveys** — Move surveys between Joomla installations
- **Duplicate surveys** — Copy surveys with all questions and settings
- **Share templates** — Distribute survey templates to other users

:::tip What's Included in Export
The export includes the complete survey structure: all questions, answer options, conditional rules, page breaks, and survey settings. Responses are **not** included in the export.
:::

---

## Exporting Surveys

### Export a Single Survey

1. Navigate to **Components → Community Surveys → Surveys**

2. Find your survey and click **Edit** (or click the title)

3. Click **Reports** in the toolbar

4. Select **Export Survey** from the options

   ![Export Survey Option](../../../static/img/surveys/export-survey-button.png)

5. The survey downloads as a **JSON file**

### What's Included in the Export

| Element | Included | Notes |
|---------|----------|-------|
| Survey settings | ✅ | Title, description, access, dates |
| All questions | ✅ | Text, settings, order |
| Answer options | ✅ | All choices for each question |
| Conditional rules | ✅ | Skip logic, show/hide conditions |
| Page structure | ✅ | Page breaks and grouping |
| Custom CSS | ✅ | Survey-specific styling |
| Notifications | ✅ | Email notification settings |
| Category assignment | ❌ | Assigned on import |
| Responses | ❌ | Use response export for data |
| Media files | ❌ | Uploaded images not included |
| Integration settings | ❌ | Re-configure after import |

### Export File Format

The export creates a JSON file structured like:

```json
{
  "survey": {
    "title": "Customer Satisfaction Survey",
    "description": "Annual customer feedback survey",
    "settings": { ... },
    "questions": [
      {
        "text": "How satisfied are you?",
        "type": 21,
        "options": { ... }
      }
    ],
    "conditionalRules": [ ... ]
  },
  "exportVersion": "7.0",
  "exportDate": "2025-01-15T10:30:00Z"
}
```

---

## Importing Surveys

### Import a Survey

1. Navigate to **Components → Community Surveys → Surveys**

2. Click **Import** in the toolbar

   ![Import Button](../../../static/img/surveys/import-button.png)

3. Click **Choose File** and select your exported JSON file

   ![Import Dialog](../../../static/img/surveys/import-dialog.png)

4. Configure import options:

   | Option | Description |
   |--------|-------------|
   | **Category** | Select destination category |
   | **Published** | Set initial publish state |
   | **Rename** | Optional: give survey a new title |

5. Click **Import** to complete

6. The survey appears in your surveys list, ready to edit

### Post-Import Checklist

After importing a survey, verify:

- [ ] **Category** — Assigned to correct category
- [ ] **Access level** — Matches your site's user groups
- [ ] **Conditional rules** — Test skip logic works correctly
- [ ] **Question order** — Pages and questions in correct order
- [ ] **Integrations** — Re-configure Google Sheets/Webhooks
- [ ] **Email settings** — Update notification recipients
- [ ] **Media files** — Re-upload any images if needed

---

## Common Use Cases

### Migrating to a New Server

**Scenario:** Moving your Joomla site to a new host

1. **Export all surveys** from the current installation
2. Install Community Surveys on the new server
3. **Import surveys** one by one or use bulk import
4. Re-configure integrations and email settings
5. Test each survey before going live

:::warning Response Data
Survey exports do not include responses. To migrate response data:
1. Export responses as CSV/Excel from the old site
2. Keep a database backup for historical reference
:::

### Creating Survey Templates

**Scenario:** Building reusable survey templates

1. Create a "master" survey with common questions
2. Export the survey
3. Import it each time you need a new survey
4. Rename and customize for specific needs

**Suggested templates:**
- Customer satisfaction baseline
- Event feedback template
- Employee engagement core questions
- Product feedback structure

### Duplicating Surveys

**Scenario:** Creating a variation of an existing survey

1. Export the original survey
2. Import it immediately (same site)
3. Rename the new copy (e.g., "Survey Q2 2025")
4. Modify questions as needed

:::tip Quick Duplicate
You can also duplicate surveys directly from the survey list using the **Duplicate** option in the Actions menu.
:::

### Sharing Between Team Members

**Scenario:** Sharing survey designs with colleagues

1. Export the survey to JSON
2. Share the file via email, cloud storage, etc.
3. Colleague imports on their Joomla installation
4. Each site has its own independent copy

---

## Troubleshooting

### Import Fails

| Issue | Cause | Solution |
|-------|-------|----------|
| Invalid file format | Not a valid JSON file | Ensure file is unchanged from export |
| Version mismatch | Exported from newer version | Upgrade Community Surveys first |
| Missing fields | Corrupted export file | Re-export from original site |
| Upload error | PHP upload limits | Increase `upload_max_filesize` |

### Questions Missing After Import

1. Check the JSON file contains all questions
2. Verify no special characters causing parse errors
3. Try importing to a fresh Community Surveys installation

### Conditional Rules Not Working

After import, conditional rules may need adjustment if:

- Question IDs differ between installations
- Referenced questions were not imported
- Rule references missing answer options

**Solution:** Review and re-save conditional rules in the question editor.

### Styling Not Applied

Custom CSS styles are included in the export, but:

- CSS may reference external resources not available
- Template conflicts may override styles
- Custom CSS needs review after import

---

## Bulk Operations

### Export Multiple Surveys

Currently, surveys export individually. For multiple surveys:

1. Export each survey separately
2. Create a ZIP archive of all JSON files
3. Name files descriptively (e.g., `customer-feedback-2025.json`)

### Bulk Import

For bulk imports:

1. Import surveys one at a time
2. Verify each import before proceeding
3. Keep a log of imported surveys

:::note Feature Request
Bulk import/export is on our feature roadmap. Please [submit feedback](https://www.shondalai.com/forum) for priority requests.
:::

---

## Version Compatibility

| Export From | Import To | Compatible |
|-------------|-----------|------------|
| 7.x | 7.x | ✅ Yes |
| 7.x | 6.x | ✅ Yes |
| 6.x | 7.x | ✅ Yes |
| 5.x | 7.x | ✅ Yes |

*6.x surveys can import to 7.x but may require manual adjustment of new features.

### Upgrading Exported Surveys

If you have surveys from older versions:

1. Install the old version on a test site
2. Import your surveys there
3. Upgrade to the latest version
4. Re-export from the upgraded installation

---

## Best Practices

### Backup Strategy

1. **Regular exports** — Export important surveys monthly
2. **Before major changes** — Export before editing complex surveys
3. **Version naming** — Include dates in filenames (e.g., `survey-2025-01-15.json`)
4. **Multiple locations** — Store exports in different locations

### Export Naming Convention

```
{survey-name}-{version}-{date}.json

Examples:
customer-satisfaction-v2-2025-01-15.json
employee-survey-annual-2024.json
event-feedback-template-v1.json
```

### Documentation

Keep notes with your exports:

- Purpose of the survey
- Target audience
- Key conditional logic
- Required integrations
- Custom configuration needed

---

## Related Topics

- [Creating Surveys](./community-surveys-end-user-documentation)
- [Conditional Rules](./conditional-rules-explained)
- [Survey Integrations](./survey-integrations)
- [FAQs](./community-surveys-faqs)
