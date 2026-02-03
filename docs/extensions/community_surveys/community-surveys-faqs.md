---
id: community-surveys-faqs
title: Frequently Asked Questions
sidebar_label: FAQs
sidebar_position: 22
---

Find answers to common questions about Community Surveys. If you don't find what you're looking for, check the [support forum](https://www.shondalai.com/forum).

---

## Getting Started

### How do I create my first survey?

1. Go to **Components → Community Surveys → Surveys**
2. Click **New** in the toolbar
3. Enter a title and select a category
4. Click **Save & Close**
5. Click **Edit Questions** to add your questions
6. Add questions by clicking or dragging from the toolbar
7. Click **Finish** when done

For a complete walkthrough, see the [User Guide](./community-surveys-end-user-documentation).

### What question types are available?

Community Surveys 7.0 includes 25+ question types:

| Category | Types |
|----------|-------|
| **Choice** | Radio, Checkbox, Dropdown, Image Choice, SQL Query |
| **Scale** | Slider, NPS, Likert, Ranking, Multi-Rating |
| **Grid** | Radio Grid, Checkbox Grid, Matching |
| **Text** | Single Line, Multi-line, Rich Text, Password, Multiple Input |
| **Special** | Name, Email, Date/Time, Address, Location, File Upload, Signature, Hidden |

### Can I create surveys from the frontend?

Yes, if you have the **Create** permission enabled for your user group:

1. Go to **Components → Community Surveys → Options**
2. Click the **Permissions** tab
3. Set **Create** to **Allowed** for the desired user group
4. Create a menu item with **Surveys Home Layout** or **My Surveys** view

---

## Permissions & Access

### My users get "Unauthorized" error when taking a survey

Check these settings:

1. **Component Permissions**
   - Go to **Components → Community Surveys → Options → Permissions**
   - Ensure **Respond to Surveys** is allowed for the user's group

2. **Category Permissions**
   - Edit the survey's category
   - Check the **Permissions** tab
   - Ensure access is not restricted

3. **Survey Access Level**
   - Edit the survey
   - Check the **Access** field matches your user's view level

4. **Menu Item Access**
   - Verify your survey menu item's access level

### How do I allow guest users to take surveys?

1. Go to **Components → Community Surveys → Options**
2. Click the **Permissions** tab
3. Find the **Public** user group
4. Set **Respond to Surveys** to **Allowed**
5. Click **Save & Close**

:::note Anonymous vs Guest
Guest users can take surveys, but their responses won't be linked to a user account. For truly anonymous surveys, also enable the **Anonymous Survey** option when creating the survey.
:::

### How do I set up permissions correctly?

Permission levels in order of priority:

1. **Component Options** — Default permissions for all surveys
2. **Category Permissions** — Override for specific categories
3. **Survey Settings** — Access level for individual surveys

| Permission | Description |
|------------|-------------|
| Configure | Edit component options |
| Access Administration | Access backend |
| Create | Create new surveys |
| Delete | Delete surveys |
| Edit | Edit any survey |
| Edit State | Publish/unpublish |
| Edit Own | Edit own surveys only |
| Respond to Surveys | Take surveys |
| View Results | See consolidated reports |

---

## Response Limits & Restrictions

### How do I prevent duplicate responses?

Multiple methods are available when creating/editing a survey:

| Method | How It Works | Best For |
|--------|--------------|----------|
| **Cookie** | Stores browser cookie | Anonymous surveys, casual prevention |
| **IP Address** | Tracks respondent IP | Non-anonymous surveys, static IPs |
| **Username** | Checks logged-in user | Registered users only |
| **Unique URLs** | One-time-use links | Email campaigns, invitations |

See [Restricting Multiple Responses](./restricting-users-from-taking-the-survey-multiple-times) for details.

### My survey says "no credits available"

This appears when using the points system:

1. The survey owner doesn't have enough points
2. Points system is enabled but not properly configured

**To fix:**
- Disable points system in Options if not needed
- Ensure survey owner has sufficient points
- Check points plugin is installed and configured

### How do I limit the number of responses?

When creating or editing a survey:

1. Find the **Maximum Responses** field
2. Enter a number (e.g., 100)
3. Leave blank for unlimited

The survey automatically closes when the limit is reached.

---

## Survey Flow & Logic

### How do I create branching surveys?

Use [Conditional Rules](./conditional-rules-explained):

1. Edit your survey questions
2. Add a choice question (Radio, Checkbox, etc.)
3. Click the **Conditional Rules** tab
4. Create rules like:
   - If user selects "Yes" → Skip to Page 3
   - If user selects "No" → Finalize response

### Why is my survey creating an infinite loop?

This usually happens when:

1. **Missing home page** — No "Surveys Home Layout" menu item exists
2. **Redirect loop** — Survey redirects back to itself

**Solution:**
- Create a **Surveys Home Layout** menu item (can be hidden from menus)
- Check your redirect URL settings
- Verify conditional rules don't create circular paths

### Can I randomize question order?

Yes, when editing the survey:

1. Open the survey settings
2. Find **Randomize Questions** option
3. Choose: None, Per Page, All Pages

---

## Reports & Data

### How do I view survey results?

1. Go to **Components → Community Surveys → Surveys**
2. Click **Reports** on your survey (or the reports icon)
3. Choose:
   - **Dashboard** — Overview and individual responses
   - **Consolidated Report** — Aggregate statistics and charts
   - **Export** — Download as CSV, PDF, or Excel

### Can I export responses to Excel?

Yes, multiple export options are available:

1. Go to your survey's **Reports** section
2. Click **Export** button
3. Choose format:
   - **CSV** — Universal spreadsheet format, comma-separated values
   - **PDF** — Formatted report document

### How do I sync responses to Google Sheets?

1. Set up Google API credentials ([Google Sheets Setup](./integrating-survey-with-google-sheets))
2. Configure credentials in Component Options
3. Go to your survey → **Integrations**
4. Add Google Sheets integration
5. Connect and configure spreadsheet

See [Survey Integrations](./survey-integrations) for complete guide.

---

## Technical Issues

### Survey not displaying on the frontend

Check these common causes:

| Issue | Solution |
|-------|----------|
| Survey unpublished | Publish the survey |
| Category unpublished | Publish the category |
| Wrong access level | Match access to user's view level |
| Date restrictions | Check start/close dates |
| No menu item | Create appropriate menu item |

### Responses not saving

1. **Check server logs** for PHP errors
2. **Database permissions** — Ensure write access
3. **Session issues** — Clear cache and try again
4. **JavaScript errors** — Check browser console
5. **Required fields** — Ensure all mandatory questions are answered

### File uploads failing

| Issue | Solution |
|-------|----------|
| File too large | Increase `upload_max_filesize` in PHP |
| Wrong file type | Check allowed extensions in question settings |
| Permission denied | Ensure upload folder is writable |
| Disk space | Verify server has available space |

### Maps not working on Location questions

1. Verify Google Maps API key is entered in Options
2. Check that required APIs are enabled (Maps, Geocoding, Places)
3. Ensure your domain is in the API key's allowed referrers
4. Check browser console for specific error messages

See [Map Location Questions](./creating-map-location-question) for setup guide.

---

## Email & Notifications

### How do I send survey invitations?

Multiple methods available:

1. **Built-in Email** — Components → Community Surveys → [Survey] → Invite
2. **Unique URLs** — Generate trackable one-time links
3. **AcyMailing Integration** — Include surveys in newsletters

See [Inviting Users](./inviting-users-to-take-the-survey) for details.

### How do I get notified of new responses?

1. Edit your survey
2. Go to the **Notifications** tab
3. Configure:
   - **Admin notification** — Email when response received
   - **Recipient emails** — Who receives notifications
   - **Email template** — Customize notification content

See [Email Notifications](./survey-email-notifications).

---

## Integration & Extensions

### Can I embed surveys in articles?

Yes, use the content plugin:

```
{LOADSURVEY [id: 123]}
```

Replace `123` with your survey ID. See [Display in Articles](./display-surveys-in-joomla-articles).

### Does it integrate with other components?

Supported integrations:

| Type | Supported |
|------|-----------|
| **User Profiles** | JomSocial, EasySocial, Community Builder |
| **Avatars** | JomSocial, EasySocial, Gravatar |
| **Points** | CjBlog, JomSocial, EasySocial, AlphaUserPoints |
| **Email** | AcyMailing |
| **External** | Google Sheets, Webhooks (Zapier, Make, etc.) |

### Can I use webhooks to connect to other services?

Yes, Community Surveys 7.0+ includes webhook integration:

1. Go to survey → **Integrations**
2. Add **Webhook** integration
3. Enter your webhook URL (Zapier, Make, custom API)
4. Configure authentication if needed

See [Survey Integrations](./survey-integrations).

---

## Multilingual & Translation

### Can I create surveys in multiple languages?

Yes, Community Surveys supports multilingual surveys:

1. Enable translation on your survey
2. Add language versions
3. Translate questions, options, and messages
4. Users see the survey in their language

See [Translating Surveys](./translating-surveys).

---

## Migration & Backup

### How do I move a survey to another site?

Use the import/export feature:

1. Go to survey **Reports → Export Survey**
2. Download the JSON file
3. On the new site, go to **Surveys → Import**
4. Upload the JSON file

See [Import/Export Surveys](./importexport-surveys).

### How do I backup my surveys?

Options for backup:

1. **Export individual surveys** — JSON format includes all questions
2. **Database backup** — Full Joomla database backup
3. **File backup** — Include media folder for uploaded files

---

## Still Need Help?

- [Complete User Guide](./community-surveys-end-user-documentation)
- [Installation Guide](./installing-and-configuring-community-surveys)
- [Changelog](./community-surveys-changelog)
- [Support Forum](https://www.shondalai.com/forum)
