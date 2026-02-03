---
id: installing-and-configuring-community-surveys
title: Installing & Configuring Community Surveys
sidebar_label: Installation & Configuration
sidebar_position: 1
---

This guide walks you through installing Community Surveys 7.0 and configuring it for your Joomla 5+ website. Follow these steps to get your survey system up and running.

---

## System Requirements

Before installing, ensure your server meets these requirements:

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| **Joomla** | 5.0+ | Latest 5.x |
| **PHP** | 8.1+ | 8.2+ |
| **MySQL** | 5.7+ / MariaDB 10.3+ | 8.0+ / MariaDB 10.6+ |
| **Memory** | 128MB | 256MB+ |

### Required PHP Extensions

- `json` — JSON processing
- `mbstring` — Multibyte string handling
- `curl` — API integrations (Google Sheets, Webhooks)
- `gd` or `imagick` — Image processing (optional)

---

## Installation

### Step 1: Download the Package

1. Log in to your [Shondalai account](https://www.shondalai.com)
2. Go to **My Downloads**
3. Download the latest **pkg_communitysurveys.zip**

### Step 2: Install via Extension Manager

1. Log in to your Joomla **Administrator** panel

2. Navigate to **System → Install → Extensions**

3. Drag and drop the package file, or click **Upload Package File**


4. Wait for the installation to complete

5. You'll see a success message confirming installation


### Step 3: Verify Installation

After installation, verify all components are installed:

1. Go to **System → Manage → Extensions**
2. Search for "Community Surveys"
3. Confirm these extensions are installed and enabled:

| Extension | Type | Purpose |
|-----------|------|---------|
| Community Surveys | Component | Main survey management |
| Surveys - System | Plugin | Core system functionality |
| Surveys - Content | Plugin | Embed surveys in articles |
| Surveys - User | Plugin | User profile integration |

---

## Initial Configuration

### Access Component Options

1. Navigate to **Components → Community Surveys**
2. Click **Options** in the toolbar


### General Settings

| Setting | Description | Recommended |
|---------|-------------|-------------|
| **Default Category** | Category for new surveys | Create a category first |
| **Surveys Per Page** | List pagination | 10-20 |
| **Date Format** | Display format | Match your site locale |
| **Enable Points** | User points system | Disable unless needed |
| **Default Survey Layout** | Display template | Default |

### Access Settings

Configure how users access surveys:

| Setting | Description | Options |
|---------|-------------|---------|
| **Guest Access** | Allow anonymous responses | Yes/No |
| **Show Author** | Display survey creator | Yes/No |
| **Show Hits** | Display response count | Yes/No |
| **Show Response Link** | After submission link | Yes/No |

---

## Permissions Configuration

Set up who can do what with surveys.

### Access the Permissions Tab

1. Go to **Components → Community Surveys → Options**
2. Click the **Permissions** tab

### Permission Reference

| Permission | Description | Typical Setting |
|------------|-------------|-----------------|
| **Configure** | Edit component options | Administrator only |
| **Access Administration** | Access backend | Manager+ |
| **Create** | Create new surveys | Registered+ |
| **Delete** | Delete surveys | Manager+ |
| **Edit** | Edit any survey | Manager+ |
| **Edit State** | Publish/unpublish | Manager+ |
| **Edit Own** | Edit own surveys | Author+ |
| **Respond to Surveys** | Take surveys | Public (for guest access) |
| **View Results** | See reports | Registered+ |

### Common Permission Scenarios

#### Public Surveys (Anonymous Allowed)

```
Public:
  ✅ Respond to Surveys: Allowed

Registered:
  ✅ Respond to Surveys: Allowed
  ✅ View Results: Allowed

Manager:
  ✅ All permissions: Allowed
```

#### Members-Only Surveys

```
Public:
  ❌ Respond to Surveys: Denied

Registered:
  ✅ Respond to Surveys: Allowed
  ❌ Create: Denied

Manager:
  ✅ All permissions: Allowed
```

#### User-Generated Surveys

```
Registered:
  ✅ Create: Allowed
  ✅ Edit Own: Allowed
  ✅ Respond to Surveys: Allowed
  ✅ View Results: Allowed (own only)

Manager:
  ✅ All permissions: Allowed
```

---

## Email Configuration

Configure email notifications for survey responses.

### Notification Settings

1. Go to **Options → Notifications** tab

| Setting | Description |
|---------|-------------|
| **Admin Notification** | Email admin on new response |
| **Admin Email(s)** | Comma-separated email addresses |
| **User Confirmation** | Email respondent after submission |
| **Email Template** | HTML template for notifications |

### Email Template Variables

Use these variables in email templates:

| Variable | Description |
|----------|-------------|
| `{survey_title}` | Name of the survey |
| `{response_id}` | Response ID number |
| `{response_date}` | Submission date/time |
| `{user_name}` | Respondent's name (if known) |
| `{user_email}` | Respondent's email |
| `{response_link}` | Link to view response |

---

## Integration Settings

Community Surveys 7.0 includes powerful integrations.

### Google Sheets Integration

Enable automatic export to Google Sheets:

1. Go to **Options → Integrations** tab

2. Enter your **Google API Credentials**:
   
   | Field | Description |
   |-------|-------------|
   | **Client ID** | From Google Cloud Console |
   | **Client Secret** | From Google Cloud Console |

3. For setup instructions, see [Google Sheets Setup](./integrating-survey-with-google-sheets)

### Webhook Integration

Connect to external services (Zapier, Make, custom APIs):

1. Webhooks are configured **per-survey**
2. Go to survey → **Integrations** tab
3. Add webhook endpoint

For details, see [Survey Integrations](./survey-integrations)

### User Profile Integration

Integrate with community extensions:

| Extension | Setting |
|-----------|---------|
| **JomSocial** | Enable JomSocial avatars |
| **EasySocial** | Enable EasySocial integration |
| **Community Builder** | Enable CB profile integration |

---

## Advanced Configuration

### Location/Map Questions

Enable Google Maps for location-based questions:

1. Go to **Options → Maps** tab (or General)

2. Enter your **Google Maps API Key**

3. Required APIs (enable in Google Cloud Console):
   - Maps JavaScript API
   - Geocoding API
   - Places API

See [Map Location Questions](./creating-map-location-question) for complete setup.

### PDF Export Settings

Configure PDF report generation:

| Setting | Description |
|---------|-------------|
| **PDF Library** | TCPDF or DOMPDF |
| **Paper Size** | A4, Letter, etc. |
| **Include Logo** | Add company logo to exports |
| **Header/Footer** | Customize PDF headers |

### CAPTCHA Protection

Protect surveys from spam:

1. Go to **Options → Security** tab
2. Enable CAPTCHA
3. Select CAPTCHA type:
   - Joomla Default
   - Google reCAPTCHA
   - hCaptcha

---

## Creating Categories

Organize surveys with categories.

### Add a Category

1. Go to **Components → Community Surveys → Categories**
2. Click **New**
3. Enter:
   - **Title** — Category name
   - **Alias** — URL-safe name (auto-generated)
   - **Description** — Optional description
   - **Parent** — For nested categories
4. Click **Save & Close**

### Category Permissions

Override component permissions per category:

1. Edit the category
2. Click **Permissions** tab
3. Set category-specific permissions

---

## Creating Menu Items

Set up frontend access to surveys.

### Survey List Menu Item

Display a list of available surveys:

1. Go to **Menus → [Your Menu] → Add New Menu Item**
2. Select **Community Surveys → Surveys Home Layout**
3. Configure:
   - **Title** — "Surveys" or similar
   - **Category** — Filter by category (optional)
   - **Access** — Who can see this menu item

### Single Survey Menu Item

Link directly to a specific survey:

1. Create new menu item
2. Select **Community Surveys → Single Survey**
3. Choose the survey from the list
4. Set access level

### My Surveys Menu Item

Let users manage their own surveys:

1. Create new menu item
2. Select **Community Surveys → My Surveys**
3. Set to **Registered** access level

---

## Frontend Setup Checklist

Ensure your frontend is properly configured:

- [ ] **Categories** — At least one category created
- [ ] **Permissions** — Appropriate access levels set
- [ ] **Menu Items** — Survey access points created
- [ ] **Surveys Home** — Required for redirect after submission
- [ ] **Guest Access** — Enable if needed in permissions
- [ ] **Email** — Test notification emails work

---

## Troubleshooting Installation

### Extension Installation Fails

| Issue | Solution |
|-------|----------|
| Package too large | Increase PHP `upload_max_filesize` and `post_max_size` |
| Permission denied | Check folder permissions (755 for directories) |
| Timeout | Increase `max_execution_time` in PHP |

### Component Not Showing

1. Clear Joomla cache (**System → Clear Cache**)
2. Verify component is published in Extensions Manager
3. Check database tables exist (`#__survey_*`)

### Database Errors

If you see database errors after installation:

1. Go to **System → Manage → Database**
2. Select Community Surveys
3. Click **Update Structure** if available

---

## Updating Community Surveys

### Check for Updates

1. Go to **System → Update → Extensions**
2. Click **Find Updates**
3. If available, select and click **Update**

### Manual Update

1. Download latest version from Shondalai
2. Install over existing installation (same as new install)
3. Database updates apply automatically

:::warning Before Updating
Always backup your site before major updates:
- Full database backup
- Export important surveys (see [Import/Export](./importexport-surveys))
:::

---

## Uninstallation

If you need to remove Community Surveys:

1. Go to **System → Manage → Extensions**
2. Search for "Community Surveys"
3. Select the main **pkg_communitysurveys** package
4. Click **Uninstall**

:::danger Data Warning
Uninstalling removes all survey data including:
- All surveys and questions
- All responses
- All categories
- All settings

Export your data first if you need to preserve it.
:::

---

## Next Steps

Now that Community Surveys is installed:

1. [Create Your First Survey](./community-surveys-end-user-documentation)
2. [Learn About Question Types](./community-surveys-end-user-documentation#question-types)
3. [Set Up Conditional Logic](./conditional-rules-explained)
4. [Configure Integrations](./survey-integrations)
5. [Embed in Articles](./display-surveys-in-joomla-articles)

---

## Getting Help

- [Frequently Asked Questions](./community-surveys-faqs)
- [Support Forum](https://www.shondalai.com/forum)
- [User Documentation](./community-surveys-end-user-documentation)
- [Changelog](./community-surveys-changelog)
