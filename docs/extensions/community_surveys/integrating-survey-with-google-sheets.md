---
id: integrating-survey-with-google-sheets
title: Google Sheets Integration Setup
sidebar_label: Google Sheets Setup
sidebar_position: 20
---

Community Surveys supports Google Sheets integration, allowing survey responses to automatically sync to a Google Sheets spreadsheet in real-time. This guide covers the initial setup of Google API credentials required for the integration.

:::tip New Integrations Dashboard
Community Surveys 7.0+ includes a comprehensive [Integrations Dashboard](./survey-integrations) that provides a unified interface for managing Google Sheets, Webhooks, and other integrations. See the [complete integrations documentation](./survey-integrations) for details on configuring and managing all integration types.
:::

## Prerequisites

Before setting up Google Sheets integration, you need:

1. A Google account
2. Access to [Google Cloud Console](https://console.developers.google.com/)
3. Administrator access to your Joomla site

## Step 1: Create Google OAuth Credentials

First, create an OAuth 2.0 application in Google Cloud Console:

### 1.1 Access Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Create a new project or select an existing one

### 1.2 Enable Required APIs

1. Navigate to **APIs & Services → Library**
2. Search for and enable:
   - **Google Sheets API**
   - **Google Drive API**

### 1.3 Configure OAuth Consent Screen

1. Go to **APIs & Services → OAuth consent screen**
2. Select **External** user type (or Internal for Google Workspace)
3. Fill in the required fields:
   - App name: "Community Surveys Integration"
   - User support email: Your email
   - Developer contact email: Your email
4. Add scopes:
   - `https://www.googleapis.com/auth/spreadsheets`
   - `https://www.googleapis.com/auth/drive.file`
5. Add your email as a test user (for External apps)

### 1.4 Create OAuth Credentials

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → OAuth client ID**
3. Select **Web application**
4. Configure the application:
   - **Name**: Community Surveys
   - **Authorized redirect URIs**: Add your callback URL

### Determining Your Callback URL

The callback URL format is:
```
https://yoursite.com/your-surveys-menu?task=integration.oauth
```

Where `your-surveys-menu` is the alias of your **Surveys Listing** menu item.

**Examples:**
- `https://example.com/surveys?task=integration.oauth`
- `https://example.com/feedback/surveys?task=integration.oauth`

:::warning Important
The callback URL must exactly match what you enter in Google Cloud Console, including the protocol (https) and any subdirectories.
:::

5. Click **Create** and note your **Client ID** and **Client Secret**

[![Create credentials button](/img/extensions/community_surveys/2021-11-google-app-step-create-credentials-1024x329.jpg)](https://docs.shondalai.com/wp-content/uploads/2021/11/google-app-step-create-credentials.jpg)

[![OAuth client type selection](/img/extensions/community_surveys/2021-11-google-app-step-oauth-client.jpg)](https://docs.shondalai.com/wp-content/uploads/2021/11/google-app-step-oauth-client.jpg)

[![Authorized redirect URIs](/img/extensions/community_surveys/2021-11-google-app-step-auth-urls.jpg)](https://docs.shondalai.com/wp-content/uploads/2021/11/google-app-step-auth-urls.jpg)

## Step 2: Configure Community Surveys

Add your Google OAuth credentials to Community Surveys:

1. Go to **Components → Community Surveys**
2. Click **Options** in the toolbar
3. Navigate to the **Integrations** tab
4. Enable **Google Sheets Integration**
5. Enter your **OAuth Client ID**
6. Enter your **OAuth Client Secret**
7. Click **Save & Close**

Your site is now configured for Google Sheets integration.

## Step 3: Connect a Survey to Google Sheets

With credentials configured, you can now connect individual surveys:

### Using the Integrations Dashboard (Recommended)

1. Go to **Components → Community Surveys → Surveys**
2. Click on a survey to edit
3. Click the **Integrations** button in the toolbar
4. Click **Add Integration**
5. Select **Google Sheets** from the catalog
6. Click **Connect** to authorize with Google
7. Enter your **Spreadsheet ID** (or create a new spreadsheet)
8. Configure additional options as needed
9. Click **Save**

For detailed configuration options, see the [Integrations Documentation](./survey-integrations#configuring-google-sheets-integration).

### Finding Your Spreadsheet ID

From your Google Sheets URL:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```

The Spreadsheet ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## How It Works

Once connected:

1. When a user submits a survey response, the integration is triggered
2. Response data is formatted and sent to Google Sheets API
3. A new row is appended to your spreadsheet with the response data
4. Headers are automatically created on first sync
5. Sync status is logged for monitoring

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Spreadsheet ID** | The ID from your Google Sheets URL | Yes |
| **Sheet Name** | The specific sheet tab to use (default: "Survey Responses") | No |
| **Include Metadata** | Add columns for response ID, timestamp, IP, location, browser | No |

## Troubleshooting

### "Access Denied" or "Invalid Client"

- Verify Client ID and Secret are copied correctly
- Ensure the redirect URI matches exactly
- Check that required APIs are enabled

### "Token Expired"

- Re-authorize by clicking Connect in the integration settings
- Tokens are automatically refreshed but may expire after long periods

### "Spreadsheet Not Found"

- Verify the Spreadsheet ID is correct
- Ensure the spreadsheet exists and hasn't been deleted
- Check that you're using the same Google account

For more troubleshooting tips, see the [Integrations Troubleshooting Guide](./survey-integrations#troubleshooting).

## Next Steps

- [Complete Integrations Documentation](./survey-integrations) - Full guide to all integration features
- [Webhook Integration](./survey-integrations#configuring-webhook-integration) - Connect to Zapier, Make, and custom backends
- [Field Mapping](./survey-integrations#field-mapping) - Customize how data is mapped
