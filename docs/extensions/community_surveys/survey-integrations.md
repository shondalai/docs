---
id: survey-integrations
title: Survey Integrations
sidebar_label: Integrations
sidebar_position: 19
---

Community Surveys 7.0+ features a powerful integrations system that allows you to automatically sync survey responses with external services. This enables real-time data flow to spreadsheets, automation platforms, CRMs, and custom backends.

## Overview

The integrations dashboard provides a centralized interface to:

- **Add** new integrations from the available catalog
- **Configure** connection settings and field mappings
- **Test** connections before going live
- **Monitor** sync status and view logs
- **Enable/Disable** integrations with a toggle switch

### Accessing the Integrations Dashboard

1. Go to **Components → Community Surveys → Surveys**
2. Click on a survey to edit it
3. Click the **Integrations** button in the toolbar

## Available Integration Types

### Google Sheets

Automatically sync survey responses to Google Sheets spreadsheets. Each response is added as a new row, with questions mapped to columns.

**Features:**
- OAuth 2.0 secure authentication
- Automatic header row creation
- Customizable field mapping
- Optional metadata columns (IP, location, browser)
- Real-time sync on response submission

[Detailed Google Sheets Setup Guide →](./integrating-survey-with-google-sheets)

### Webhook

Send survey responses to any URL endpoint via HTTP POST/PUT requests. Perfect for integrating with:

- **Zapier** - Connect to 5000+ apps
- **Make (Integromat)** - Visual automation workflows
- **n8n** - Self-hosted workflow automation
- **Custom backends** - Your own API endpoints
- **CRM systems** - Salesforce, HubSpot, etc.

**Features:**
- POST or PUT HTTP methods
- JSON or Form Data content types
- Multiple authentication options (Basic, Bearer, Custom Header)
- Custom headers support
- Automatic retry on failure
- Full response metadata included

---

## Adding an Integration

1. Click the **Add Integration** button on the integrations dashboard
2. Select an integration type from the catalog
3. Enter a descriptive **Title** for the integration
4. For **Google Sheets**: Click **Connect** to authorize with your Google account
5. Configure the required settings (see type-specific sections below)
6. Optionally configure **Field Mapping** to customize how questions map to destination fields
7. Click **Save**

## Configuring Google Sheets Integration

### Prerequisites

Before adding a Google Sheets integration, ensure you have:

1. **Google API Credentials** configured in Community Surveys options
2. A **Google Sheets spreadsheet** created (or one will be created automatically)

### Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Spreadsheet ID** | The ID from your Google Sheets URL (the long string after `/d/`) | Yes |
| **Sheet Name** | The specific sheet tab to use (default: "Survey Responses") | No |
| **Include Metadata** | Add columns for response ID, timestamp, IP, location, browser | No |

### Finding Your Spreadsheet ID

From your Google Sheets URL:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
                                      └──────────────────── Spreadsheet ID ────────────────────┘
```

### Automatic Header Creation

When the first response is synced, Community Surveys automatically creates a header row with:

**Metadata columns (if enabled):**
- Response ID
- Submitted (timestamp)
- Completed (timestamp)
- IP Address
- Country
- City
- Browser

**Question columns:**
- Each question title becomes a column header
- Column order follows the survey question order

---

## Configuring Webhook Integration

Webhooks send HTTP requests to your specified URL whenever a response is submitted.

### Configuration Options

| Option | Description | Required | Default |
|--------|-------------|----------|---------|
| **Webhook URL** | The destination URL for the HTTP request | Yes | - |
| **HTTP Method** | POST or PUT | No | POST |
| **Content Type** | JSON or Form Data | No | JSON |
| **Auth Type** | None, Basic Auth, Bearer Token, or Custom Header | No | None |
| **Auth Value** | Credentials for authentication | No | - |
| **Custom Headers** | Additional HTTP headers (one per line) | No | - |
| **Include Metadata** | Include response metadata in payload | No | Yes |
| **Retry on Failure** | Automatically retry failed requests | No | Yes |

### Authentication Types

**None**  
No authentication headers are added.

**Basic Auth**  
Provide username:password which will be Base64 encoded:
```
username:password
```

**Bearer Token**  
Provide your API token:
```
your-api-token-here
```

**Custom Header**  
Provide a custom header in `Name: Value` format:
```
X-API-Key: your-api-key
```

### Custom Headers

Add multiple custom headers, one per line:
```
X-Custom-Header: value
X-Another-Header: another-value
X-Request-Source: community-surveys
```

### Webhook Payload Structure

When a response is submitted, the webhook receives a JSON payload with this structure:

```json
{
  "event": "response_submitted",
  "timestamp": "2026-02-01T10:30:00+00:00",
  "metadata": {
    "survey_id": 42,
    "survey_title": "Customer Satisfaction Survey",
    "response_id": 1234
  },
  "response": {
    "id": 1234,
    "created": "2026-02-01T10:28:00+00:00",
    "completed": "2026-02-01T10:30:00+00:00",
    "ip_address": "192.168.1.1",
    "country": "United States",
    "city": "New York",
    "browser": "Chrome 120"
  },
  "answers": {
    "question_15": {
      "question_id": 15,
      "question_title": "How satisfied are you?",
      "values": [
        {
          "option_text": "Very Satisfied",
          "option_id": 42
        }
      ]
    },
    "question_16": {
      "question_id": 16,
      "question_title": "Additional comments",
      "values": [
        {
          "text": "Great service!"
        }
      ]
    }
  }
}
```

### Testing Your Webhook

Use these tools to test webhook integrations:

- **[webhook.site](https://webhook.site)** - Free webhook testing and debugging
- **[RequestBin](https://requestbin.com)** - Inspect HTTP requests
- **[Beeceptor](https://beeceptor.com)** - Mock API endpoints

---

## Field Mapping

Field mapping allows you to customize how survey questions are mapped to destination fields.

### How It Works

By default, questions are mapped using their question ID (e.g., `question_15`). With field mapping, you can:

- Rename fields to match your destination schema
- Map to specific spreadsheet columns
- Use custom field names for webhooks

### Configuring Field Mapping

1. Expand the **Field Mapping** section in the integration configuration
2. For each question, enter the desired destination field name
3. Leave blank to use the default mapping

**Example:**
| Survey Question | Default Field | Custom Mapping |
|-----------------|---------------|----------------|
| "What is your name?" | question_15 | customer_name |
| "Email address" | question_16 | email |
| "Satisfaction rating" | question_17 | nps_score |

---

## Sync Triggers

Configure when integrations should sync:

| Trigger | Description |
|---------|-------------|
| **On Response** | Sync immediately when a response is submitted (default) |
| **Manual** | Only sync when triggered manually from the dashboard |

---

## Managing Integrations

### Testing Connection

Click the **bolt icon** (⚡) on any integration to test the connection:

- **Google Sheets**: Verifies access to the spreadsheet
- **Webhook**: Sends a test ping to the URL

### Viewing Logs

Click the **list icon** (📋) to view sync history:

- Timestamp of each sync attempt
- Success or failure status
- Error messages for failed syncs
- Response details from the destination

### Enabling/Disabling

Use the toggle switch to enable or disable an integration without deleting it. Disabled integrations:

- Don't sync new responses
- Retain all configuration
- Can be re-enabled at any time

### Deleting an Integration

Click the **trash icon** to permanently delete an integration. This action:

- Removes the integration configuration
- Does not delete synced data from the destination
- Cannot be undone

---

## Troubleshooting

### Google Sheets Issues

**"Spreadsheet not found"**
- Verify the Spreadsheet ID is correct
- Ensure the spreadsheet hasn't been deleted
- Check that it's a Google Sheets file (not uploaded Excel)

**"No access to spreadsheet"**
- Re-authorize by disconnecting and reconnecting
- Verify you're using the Google account that owns or has edit access to the sheet
- Check Google Sheets sharing settings

**"Token expired"**
- Click **Connect** to re-authorize
- Tokens automatically refresh, but may expire after extended periods of inactivity

### Webhook Issues

**"Connection failed"**
- Verify the URL is accessible from the server
- Check firewall rules allow outbound connections
- Test the URL with a tool like webhook.site

**"Authentication failed"**
- Double-check credentials format
- For Basic Auth, ensure format is `username:password`
- For Bearer tokens, include only the token (no "Bearer" prefix)

**"Timeout errors"**
- Your endpoint may be slow to respond
- Ensure your endpoint responds within 30 seconds
- Consider using an async processing queue

### General Tips

1. **Always test first** - Use the test connection feature before relying on the integration
2. **Check logs** - The sync logs provide detailed error information
3. **Start simple** - Configure with defaults first, then customize
4. **Monitor regularly** - Check the sync status badge for any failures

---

## Platform-Specific Guides

### Zapier Integration

1. Create a **Catch Hook** trigger in Zapier
2. Copy the webhook URL
3. Add a Webhook integration in Community Surveys with the Zapier URL
4. Test the integration to send sample data to Zapier
5. Map the fields in Zapier to your destination app

### Make (Integromat) Integration

1. Create a new scenario with a **Webhooks** module
2. Select **Custom webhook** as the trigger
3. Copy the webhook URL
4. Add a Webhook integration in Community Surveys
5. Run the scenario and submit a test response to structure the data

### n8n Integration

1. Add a **Webhook** node to your workflow
2. Set the HTTP Method to POST
3. Copy the production webhook URL
4. Configure the Webhook integration in Community Surveys
5. Activate the workflow and test

---

## Security Considerations

- **OAuth tokens** are stored encrypted in the database
- **Webhook secrets** are masked in the interface
- Use **HTTPS URLs** for webhooks to encrypt data in transit
- Consider using **authentication** for webhooks to prevent unauthorized access
- Review **field mapping** to ensure sensitive data isn't sent to unauthorized destinations
