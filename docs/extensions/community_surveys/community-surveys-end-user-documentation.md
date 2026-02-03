---
id: community-surveys-end-user-documentation
title: Community Surveys User Guide
sidebar_label: User Guide
sidebar_position: 23
---

Welcome to Community Surveys 7.0 — a comprehensive survey and form builder for Joomla. This guide covers everything you need to create, manage, and analyze surveys.

## Quick Start

New to Community Surveys? Start here:
- [Quick Get Started Guide](./quick-get-started-guide-for-community-surveys) - Create your first survey in minutes
- [Installing and Configuring](./installing-and-configuring-community-surveys) - Initial setup

---

## Component Configuration

### Accessing Options

Go to **Components → Community Surveys** and click the **Options** button in the toolbar.

### Permission Settings

Community Surveys uses Joomla's ACL (Access Control List) for granular permissions:

| Permission | Description |
|------------|-------------|
| **Configure** | Edit component options |
| **Access Administration** | Access the backend component |
| **Create** | Create new surveys |
| **Delete** | Delete surveys |
| **Edit** | Edit any survey |
| **Edit State** | Publish/unpublish surveys |
| **Edit Own** | Edit own surveys only |
| **WYSIWYG Editor Access** | Use rich text editors for descriptions |
| **Auto Approve Surveys** | Auto-publish surveys created from frontend |
| **Respond to Surveys** | Take surveys |
| **View Results** | View consolidated reports |

:::tip Category-Level Permissions
These permissions can be set per-category. Category permissions override component permissions when set.
:::

### Integration Settings

Configure third-party integrations:

- **Google Sheets** - Sync responses to spreadsheets
- **Webhooks** - Send data to external services

See [Survey Integrations](./survey-integrations) for detailed setup.

---

## Categories

Surveys must belong to a category. Go to **Components → Community Surveys → Categories** to manage them.

Categories support:
- Hierarchical organization (parent/child)
- Per-category permissions
- SEO-friendly aliases

---

## Creating Surveys

### Backend vs Frontend

- **Backend:** Components → Community Surveys → Surveys → New
- **Frontend:** Access your surveys menu → Create Survey

### Survey Settings

#### Basic Information

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Survey name (shown to respondents) | Yes |
| **Alias** | URL-friendly identifier | Auto-generated |
| **Category** | Organization category | Yes |
| **Introduction** | Welcome message on first page | No |
| **End Message** | Thank you message after completion | No |
| **Custom Header** | Text shown on every page | No |

#### Scheduling & Limits

| Field | Description |
|-------|-------------|
| **Start Date** | When the survey opens for responses |
| **Close Date** | When the survey stops accepting responses |
| **Maximum Responses** | Limit total responses (blank = unlimited) |

#### Survey Behavior

| Setting | Description |
|---------|-------------|
| **Anonymous Survey** | Don't capture user identity; show confidentiality notice |
| **Survey Type** | **Public** (listed on home page) or **Private** (invitation only) |
| **Public Report** | Allow respondents to view aggregate results |
| **Redirect URL** | Custom URL after completion (overrides end message) |
| **Display Template** | Show/hide site template (full-screen mode) |

---

## Question Types

Community Surveys 7.0 includes 25+ question types organized into categories:

### Choice Questions

| Type | Description | Use Case |
|------|-------------|----------|
| **Radio Button** | Single selection from options | Yes/No, satisfaction ratings |
| **Checkbox** | Multiple selections allowed | "Select all that apply" |
| **Dropdown** | Single selection in compact format | Long option lists, countries |
| **Image Choice** | Select from images (single) | Product preferences, visual selection |
| **Multiple Image Choice** | Select multiple images | Gallery selections |
| **SQL Query** | Options from database query | Dynamic data-driven choices |

### Scale Questions

| Type | Description | Use Case |
|------|-------------|----------|
| **Slider** | Drag slider to select value | Ratings, percentages |
| **Net Promoter Score (NPS)** | 0-10 scale with promoter/detractor analysis | Customer loyalty measurement |
| **Likert Scale** | Agreement/satisfaction scales | Opinion surveys |
| **Ranking** | Drag to order items by preference | Priority ranking |
| **Multi-Rating** | Rate multiple items on same scale | Product feature ratings |

### Grid Questions

| Type | Description | Use Case |
|------|-------------|----------|
| **Grid (Radio)** | Matrix with single selection per row | Satisfaction across categories |
| **Grid (Checkbox)** | Matrix with multiple selections per row | Multi-attribute selection |
| **Matching** | Connect items from two lists | Knowledge tests, associations |

### Text Questions

| Type | Description | Use Case |
|------|-------------|----------|
| **Single Line Text** | Short text input | Names, brief answers |
| **Multi-line Text** | Paragraph input | Comments, detailed feedback |
| **Rich Text** | Formatted text with editor | Structured responses |
| **Password** | Masked input | Sensitive data |
| **Multiple Input** | Multiple text fields | Multi-part answers |

### Special Questions

| Type | Description | Use Case |
|------|-------------|----------|
| **Name** | First/Last name fields | Contact information |
| **Email** | Email with validation | Contact, notifications |
| **Date/Time** | Date and/or time picker | Scheduling, birthdates |
| **Address** | Full address fields | Shipping, location data |
| **Location** | Map-based location picker | Geographic data |
| **File Upload** | Upload documents/images | Attachments, photos |
| **Signature** | Digital signature pad | Agreements, consent |
| **Hidden Field** | Invisible field for tracking | URL parameters, tracking codes |

### Layout Elements

| Type | Description |
|------|-------------|
| **Page Header** | Section title/description (not a question) |

---

## Adding Questions

### Question Editor

1. Navigate to your survey's **Edit Questions** page
2. Use the floating **Toolbar** on the left to add questions
3. Click or drag question types to the main area
4. Configure question settings and save

### Common Question Settings

| Setting | Description |
|---------|-------------|
| **Question Title** | The question text shown to respondents |
| **Description** | Additional help text or instructions |
| **Mandatory** | Require an answer to continue |
| **Custom Choice** | Allow "Other" write-in option |

### Question-Specific Settings

Different question types have additional settings:

**Choice Questions:**
- Add/remove/reorder options
- Set default selection
- Enable "Other" option
- Add images to options

**Slider:**
- Minimum/Maximum values
- Step increment
- Custom labels for scale points
- Multiple rows (multi-slider)

**Date/Time:**
- Date only, time only, or both
- Format options
- Min/max date restrictions

**File Upload:**
- Allowed file types
- Maximum file size
- Multiple file upload

### Multi-Page Surveys

1. Click **New Page** to add pages
2. Switch between pages using page numbers
3. Reorder questions within pages using drag handles
4. Delete empty pages with **Remove Page**

:::warning
Save your questions before switching pages to avoid losing changes.
:::

---

## Conditional Logic (Rules)

Make surveys dynamic by showing/hiding questions or redirecting based on answers.

### Rule Types

| Action | Description |
|--------|-------------|
| **Skip to Page** | Jump to a specific page |
| **Finish Survey** | End the survey immediately |
| **Show/Hide Question** | Conditionally display questions |

### Conditions

| Condition | Description |
|-----------|-------------|
| If answered | User provided any answer |
| If not answered | User skipped the question |
| If selected [option] | User chose specific answer |
| If not selected [option] | User didn't choose specific answer |

### Setting Up Rules

1. After adding questions, click **Configure Rules**
2. Select the question to trigger the rule
3. Choose the condition and action
4. Add multiple rules as needed (first match wins)

See [Conditional Rules Explained](./conditional-rules-explained) for advanced usage.

---

## Sharing & Invitations

### Public Surveys

Public surveys appear on your surveys listing page. Anyone with the link can respond.

### Private Surveys

Private surveys require invitation. Options include:

#### Direct URL

Share the survey's unique URL via:
- Email
- Social media
- Website links
- QR codes

#### Unique URLs (Tracking)

Generate individual URLs for tracking:

1. Go to **Invite** → **Unique Survey URLs**
2. Enter the number of URLs to generate
3. Copy and distribute individual URLs
4. Track responses by URL

#### Email Invitations

Built-in email invitation system:

1. Create **Contact Groups**
2. Add **Contacts** (name + email)
3. Compose your invitation message
4. Use placeholders:
   - `{NAME}` - Contact's name
   - `{SURVEY_URL}` - Unique response link
   - `{SITENAME}` - Your site name
5. Send invitations

See [Inviting Users to Take the Survey](./inviting-users-to-take-the-survey) for details.

---

## Response Management

### Viewing Responses

Go to **Components → Community Surveys → Responses** or click **Responses** on a survey.

Each response shows:
- Response ID
- Submission date/time
- Completion status
- User information (if not anonymous)
- IP address and location
- Browser information

### Response Details

Click a response to view:
- All questions and answers
- Timestamps per page
- File upload downloads
- Signature images

### Managing Responses

- **Delete** - Remove individual responses
- **Export** - Download to CSV/Excel
- **Filter** - By date, status, or custom criteria

---

## Reports & Analytics

### Dashboard

The survey dashboard shows:
- Response timeline graph
- Total responses
- Completion rate
- Geographic distribution
- Recent activity

### Consolidated Report

Aggregate analysis of all responses:

#### Choice Questions
- Bar and pie charts
- Response counts and percentages
- "Other" response lists

#### Scale Questions
- Distribution charts
- Average, min, max values
- NPS score calculation (for NPS questions)

#### Grid Questions
- Cross-tabulation tables
- Row/column summaries

#### Text Questions
- Response word clouds
- Full text listings

### Exporting Reports

| Format | Description |
|--------|-------------|
| **CSV** | Spreadsheet-compatible data |
| **PDF** | Formatted report document |
| **Excel** | Native Excel format |

### Real-Time Sync

Connect surveys to external services:
- **Google Sheets** - Auto-sync each response
- **Webhooks** - Send to Zapier, Make, custom APIs

See [Survey Integrations](./survey-integrations) for setup.

---

## Advanced Features

### Survey Templates (Presets)

Save survey configurations as reusable templates:

1. Create a survey with desired questions
2. Save as preset from the survey options
3. Create new surveys from the preset

### Import/Export

Transfer surveys between sites:

- **Export** - Download survey as JSON
- **Import** - Upload JSON to create survey

See [Import/Export Surveys](./importexport-surveys).

### Translations

Create multilingual surveys:

1. Enable survey translation
2. Add language versions
3. Translate questions and options

See [Translating Surveys](./translating-surveys).

### Embedding Surveys

Display surveys in articles or modules:

**Content Plugin:**
```
{LOADSURVEY [id: 123]}
```

**Module:**
Publish Survey Form module to any position.

See [Display Surveys in Articles](./display-surveys-in-joomla-articles).

---

## Email Notifications

Configure automatic emails for:

| Event | Description |
|-------|-------------|
| **Admin Notification** | Alert when response received |
| **User Confirmation** | Send response summary to user |
| **Invitation** | Survey invitation emails |
| **Reminder** | Follow-up for incomplete responses |

See [Survey Email Notifications](./survey-email-notifications).

---

## Restricting Access

Control who can respond:

| Method | Description |
|--------|-------------|
| **Access Levels** | Joomla user groups |
| **One Response Per User** | Prevent duplicate submissions |
| **IP-Based Limiting** | Restrict by IP address |
| **Password Protection** | Require password to access |
| **Date/Time Windows** | Schedule availability |

See [Restricting Multiple Responses](./restricting-users-from-taking-the-survey-multiple-times).

---

## Troubleshooting

### Common Issues

**Survey not showing:**
- Check published status
- Verify start/close dates
- Check access level settings
- Ensure category is published

**Responses not saving:**
- Check server error logs
- Verify database permissions
- Test with caching disabled

**File uploads failing:**
- Check upload directory permissions
- Verify allowed file types
- Check file size limits

### Getting Help

- [FAQs](./community-surveys-faqs)
- [Changelog](./community-surveys-changelog)
- [Support Forum](https://www.shondalai.com/forum)

---

## Related Documentation

- [Quick Start Guide](./quick-get-started-guide-for-community-surveys)
- [Installation Guide](./installing-and-configuring-community-surveys)
- [Conditional Rules](./conditional-rules-explained)
- [Survey Integrations](./survey-integrations)
- [Google Sheets Setup](./integrating-survey-with-google-sheets)
- [Email Notifications](./survey-email-notifications)
- [Plugin Events](./extending-community-surveys-using-plugin-events)
