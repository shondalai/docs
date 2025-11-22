# Integrations Guide

> **Audience:** Site owners who want form data to flow into other systems automatically.

This comprehensive guide explains how EasyForms can connect to external services like CRMs, email marketing tools, automation platforms, cloud storage, payment processors, and more.

[← Back to Overview](/easyforms/overview) · [Email Notifications](./emails)

---

## Table of Contents

1. [Overview](#1-overview)
2. [Getting Started](#2-getting-started)
3. [Email Marketing Integrations](#3-email-marketing-integrations)
4. [CRM Integrations](#4-crm-integrations)
5. [Cloud Storage Integrations](#5-cloud-storage-integrations)
6. [Analytics Integrations](#6-analytics-integrations)
7. [Communication Integrations](#7-communication-integrations)
8. [Payment Integrations](#8-payment-integrations)
9. [Automation & Webhooks](#9-automation--webhooks)
10. [Security & CAPTCHA](#10-security--captcha)
11. [Credential Management](#11-credential-management)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Overview

### What Integrations Can Do

EasyForms integrations allow you to automatically:

- **Add contacts to email lists** (Mailchimp)
- **Create or update CRM records** (HubSpot)
- **Store data in spreadsheets** (Google Sheets)
- **Save files to cloud storage** (Google Drive)
- **Track form analytics** (Google Analytics)
- **Send notifications** (Slack, Twilio, Twitter/X)
- **Process payments** (Stripe, PayPal)
- **Trigger automation workflows** (Zapier, Webhooks)
- **Prevent spam** (reCAPTCHA, hCaptcha, Turnstile)

This reduces manual data entry, speeds up follow-up, and ensures your data flows seamlessly across your business tools.

---

## 2. Getting Started

### Accessing Integrations

1. Log into the **Joomla Administrator**
2. Go to **Components → EasyForms → Forms**
3. Open the form you want to configure
4. Click the **Integrations** tab in the form builder toolbar

### Adding an Integration to a Form

1. In the **Integrations** tab, click **Add Integration**
2. Select the integration type from the available options
3. Configure the integration settings (see specific integration guides below)
4. Test the connection to ensure it works
5. Enable the integration and save

### Using Saved Credentials

Many integrations support **saved credentials** that can be reused across multiple forms:

- **Save time**: Configure once, use everywhere
- **Secure**: Credentials are encrypted and stored safely
- **Easy management**: Update credentials in one place

When configuring an integration, look for the **"Use Stored Credentials"** option to select existing credentials or save new ones.

---

## 3. Email Marketing Integrations

### Mailchimp

Automatically add form subscribers to your Mailchimp email lists.

#### Prerequisites

- Active Mailchimp account
- Mailchimp API key
- At least one audience (list) created in Mailchimp

#### Getting Your API Key

1. Log into your Mailchimp account
2. Click your profile icon → **Account**
3. Navigate to **Extras → API keys**
4. Click **Create A Key**
5. Copy the generated API key

#### Configuration Steps

1. **Add Mailchimp Integration** to your form
2. **Authentication Tab:**
   - **Option A - New Credentials:**
     - Enter your API key
     - Click **Test Connection** to verify
     - Enable **Save as New Credential** to reuse later
     - Provide a credential name (e.g., "Company Mailchimp")
   - **Option B - Use Stored Credentials:**
     - Toggle **Use Stored Credentials**
     - Select from existing credentials dropdown
     - Click **Test Connection** to verify

3. **List Settings Tab:**
   - Select your Mailchimp **Audience** from the dropdown
   - Choose **Interest Categories** (optional)
   - Map form fields to Mailchimp merge fields:
     - Email field (required)
     - First name, last name, etc.
   - Configure subscription options:
     - Enable/disable double opt-in
     - Set update existing subscribers preference

4. **Advanced Tab:**
   - Set integration name for easy identification
   - Enable/disable the integration
   - Configure tags to apply to subscribers

5. Click **Save Integration**

#### Best Practices

- Always enable double opt-in for GDPR compliance
- Use interest categories to segment your audience
- Map all relevant form fields to merge fields
- Test with a real submission before going live

---

## 4. CRM Integrations

### HubSpot

Sync form submissions directly to HubSpot as contacts, leads, or deals.

#### Prerequisites

- HubSpot account (free or paid)
- HubSpot access token with appropriate scopes

#### Getting Your Access Token

1. Log into HubSpot
2. Navigate to **Settings → Integrations → Private Apps**
3. Click **Create private app**
4. Give it a name (e.g., "EasyForms Integration")
5. Under **Scopes**, select:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `crm.lists.read`
   - `crm.lists.write`
6. Click **Create app** and copy the access token

#### Configuration Steps

1. **Add HubSpot Integration** to your form
2. **Authentication Tab:**
   - **Option A - New Credentials:**
     - Paste your access token
     - Click **Test Connection**
     - Enable **Save as New Credential**
     - Provide a credential name
   - **Option B - Use Stored Credentials:**
     - Toggle **Use Stored Credentials**
     - Select existing credentials
     - Click **Test Connection**

3. **Contact Mapping Tab:**
   - Select HubSpot contact properties to map
   - Map form fields to HubSpot properties:
     - Email (required)
     - First name, last name
     - Company, phone, etc.
   - Choose whether to update existing contacts

4. **Lists Tab:**
   - Select HubSpot lists to add contacts to
   - Configure list membership options

5. **Advanced Tab:**
   - Set lead source
   - Configure custom properties
   - Enable/disable the integration

6. Click **Save Integration**

#### Tips

- Use HubSpot's default properties when possible
- Create custom properties in HubSpot first before mapping
- Set up workflows in HubSpot to trigger actions on new contacts
- Use lists to segment contacts based on form submissions

---

## 5. Cloud Storage Integrations

### Google Sheets

Export form submissions to Google Sheets in real-time.

#### Prerequisites

- Google account
- Google Cloud Project with Sheets API enabled
- OAuth 2.0 credentials configured

#### Setup Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google Sheets API**
4. Configure **OAuth consent screen**
5. Create **OAuth 2.0 Client ID** credentials
6. Add authorized redirect URI: `https://yourdomain.com/administrator/index.php?option=com_easyforms&task=integrations.googleSheetsCallback`

#### Configuration Steps

1. **Add Google Sheets Integration** to your form
2. **Authentication Tab:**
   - **Option A - New OAuth Connection:**
     - Click **Connect to Google**
     - Authorize EasyForms to access your sheets
     - Connection status will show as "Connected"
     - Enable **Save as New Credential** (optional)
   - **Option B - Use Stored Credentials:**
     - Select existing Google account credentials
     - Verify connection status

3. **Spreadsheet Settings Tab:**
   - **Select Spreadsheet:**
     - Choose existing spreadsheet from dropdown, OR
     - Enter spreadsheet ID manually, OR
     - Create new spreadsheet
   - **Select Worksheet:**
     - Choose the specific sheet/tab
     - Default is first sheet

4. **Field Mapping Tab:**
   - Map form fields to spreadsheet columns
   - Configure header row (auto-created if new sheet)
   - Set data format options

5. **Advanced Tab:**
   - Configure append vs update behavior
   - Set unique identifier for updates
   - Enable timestamp column

6. Click **Save Integration**

#### Best Practices

- Create a dedicated spreadsheet for each form
- Use header row for column names
- Enable timestamp to track when data was added
- Use data validation in Google Sheets for consistency

### Google Drive

Automatically upload form file attachments to Google Drive.

#### Prerequisites

- Google account
- Google Cloud Project with Drive API enabled
- OAuth 2.0 credentials configured (similar to Google Sheets)

#### Configuration Steps

1. **Add Google Drive Integration** to your form
2. **Authentication Tab:**
   - Click **Connect to Google** for new connection, OR
   - Select stored credentials

3. **Upload Settings Tab:**
   - **Select Destination Folder:**
     - Choose folder from dropdown, OR
     - Enter folder ID manually
   - **File Organization:**
     - Create subfolder per submission (optional)
     - Set folder naming pattern
   - **File Settings:**
     - Map form file upload fields
     - Set file naming convention
     - Configure allowed file types

4. **Permissions Tab:**
   - Set file sharing settings
   - Configure who can access uploaded files

5. **Advanced Tab:**
   - Enable file versioning
   - Set maximum file size
   - Configure upload notifications

6. Click **Save Integration**

#### Tips

- Create a dedicated Drive folder for form uploads
- Use submission ID in folder names for easy tracking
- Set appropriate sharing permissions for security
- Monitor storage quota usage

---

## 6. Analytics Integrations

### Google Analytics

Track form submissions and conversions in Google Analytics.

#### Prerequisites

- Google Analytics 4 property
- Measurement ID (starts with G-)
- Measurement Protocol API Secret

#### Getting Measurement Protocol API Secret

1. Log into Google Analytics
2. Go to **Admin → Data Streams**
3. Select your web stream
4. Scroll to **Measurement Protocol API secrets**
5. Click **Create** and give it a name
6. Copy the secret value

#### Configuration Steps

1. **Add Google Analytics Integration** to your form
2. **Authentication Tab:**
   - **Option A - New Credentials:**
     - Enter your Measurement ID (G-XXXXXXXXXX)
     - Enter API Secret
     - Click **Test Connection**
     - Enable **Save as New Credential**
   - **Option B - Use Stored Credentials:**
     - Select existing GA credentials

3. **Event Tracking Tab:**
   - **Event Name:** Default is "form_submission"
   - **Event Parameters:**
     - form_id (automatic)
     - form_name (automatic)
     - Add custom parameters from form fields
   - **User Properties:**
     - Map form fields to GA user properties

4. **E-commerce Tab** (if applicable):
   - Enable e-commerce tracking
   - Set transaction ID
   - Configure items and revenue

5. **Advanced Tab:**
   - Set client ID source
   - Configure session tracking
   - Enable debug mode for testing

6. Click **Save Integration**

#### Best Practices

- Use consistent event naming across forms
- Track conversion events in GA4
- Set up custom reports for form analytics
- Use form submissions as conversion goals

---

## 7. Communication Integrations

### Slack

Send form submission notifications to Slack channels.

#### Prerequisites

- Slack workspace with admin access
- Incoming webhook URL from Slack

#### Getting Webhook URL

1. Go to [Slack API Apps](https://api.slack.com/apps)
2. Click **Create New App** → **From scratch**
3. Give it a name and select your workspace
4. Navigate to **Incoming Webhooks**
5. Activate **Incoming Webhooks**
6. Click **Add New Webhook to Workspace**
7. Select the channel and authorize
8. Copy the webhook URL

#### Configuration Steps

1. **Add Slack Integration** to your form
2. **Connection Tab:**
   - Paste your webhook URL
   - Click **Test Connection**

3. **Message Settings Tab:**
   - **Message Template:**
     - Use placeholders like `{field_name}` for dynamic content
     - Example: `"New submission from {name}: {email}"`
   - **Formatting:**
     - Enable Slack markdown formatting
     - Add emojis for visual appeal
   - **Attachments:**
     - Include form field data
     - Show submission metadata

4. **Channel Settings Tab:**
   - Customize bot name
   - Set bot icon/emoji
   - Choose notification level

5. **Advanced Tab:**
   - Enable/disable for specific submission types
   - Set notification conditions

6. Click **Save Integration**

#### Tips

- Use mention syntax (@username) for notifications
- Format important data with bold or code blocks
- Create dedicated channels for different forms
- Test message formatting before going live

### Twilio (SMS/Voice)

Send SMS notifications or make voice calls based on form submissions.

#### Prerequisites

- Twilio account
- Account SID
- Auth Token
- Twilio phone number

#### Getting Credentials

1. Sign up at [Twilio](https://www.twilio.com/)
2. From your console dashboard, copy:
   - Account SID
   - Auth Token
3. Purchase or configure a phone number

#### Configuration Steps

1. **Add Twilio Integration** to your form
2. **Authentication Tab:**
   - **Option A - New Credentials:**
     - Enter Account SID
     - Enter Auth Token
     - Click **Test Connection**
     - Enable **Save as New Credential**
   - **Option B - Use Stored Credentials:**
     - Select existing Twilio credentials

3. **Phone Settings Tab:**
   - **From Number:** Your Twilio phone number
   - **To Number:** 
     - Static number, OR
     - Map to form field for dynamic recipient

4. **Message Tab:**
   - **SMS Body:**
     - Write message template
     - Use `{field_name}` placeholders
     - Stay within 160 character limit for single SMS
   - **Message Type:**
     - SMS (text message)
     - MMS (with media)

5. **Advanced Tab:**
   - Set status callback URL
   - Configure delivery reports
   - Set priority

6. Click **Save Integration**

#### Best Practices

- Keep messages concise and clear
- Include unsubscribe option for compliance
- Test with your own number first
- Monitor Twilio logs for delivery status
- Be aware of SMS costs

### Twitter/X

Post tweets or updates when forms are submitted.

#### Prerequisites

- Twitter/X Developer account
- App created in Twitter Developer Portal
- OAuth 2.0 credentials configured

#### Getting Started

1. Apply for [Twitter Developer Account](https://developer.twitter.com/)
2. Create a new app in the Developer Portal
3. Set app permissions to "Read and Write"
4. Configure OAuth 2.0 settings
5. Add callback URL for your site

#### Configuration Steps

1. **Add Twitter Integration** to your form
2. **Authentication Tab:**
   - **Option A - New Credentials:**
     - Click **Connect to X (Twitter)**
     - Authorize the application
     - Connection verified automatically
     - Enable **Save as New Credential**
   - **Option B - Use Stored Credentials:**
     - Toggle **Use Stored Credentials**
     - Select existing Twitter credentials
     - Click **Verify Credentials**

3. **Post Settings Tab:**
   - **Tweet Template:**
     - Write tweet content
     - Use `{field_name}` for dynamic content
     - Stay within 280 character limit
   - **Auto-Tweet:**
     - Enable to post automatically on submission
     - Disable for manual approval
   - **Hashtags:**
     - Add relevant hashtags
     - Separate with commas

4. **Advanced Tab:**
   - **Reply Settings:** Configure who can reply
   - **Media Attachments:** Include form images (if applicable)
   - **Thread Settings:** Create tweet threads for long content

5. Click **Save Integration**

#### Important Notes

- Review Twitter's automation rules to avoid violations
- Don't include sensitive user data in public tweets
- Monitor your tweets for engagement and responses
- Test thoroughly before enabling auto-posting

---

## 8. Payment Integrations

### Stripe

Accept credit card payments through your forms.

#### Prerequisites

- Stripe account
- API keys (publishable and secret)
- Test mode keys for development

#### Getting API Keys

1. Log into [Stripe Dashboard](https://dashboard.stripe.com/)
2. Click **Developers** in the menu
3. Go to **API keys** tab
4. Copy both:
   - Publishable key (starts with `pk_`)
   - Secret key (starts with `sk_`)
5. For testing, toggle to **Test mode** and copy test keys

#### Configuration Steps

1. **Add Stripe Integration** to your form
2. **Authentication Tab:**
   - **Mode:** Select Live or Sandbox (Test)
   - **Option A - New Credentials:**
     - **If Live Mode:**
       - Enter Publishable Key
       - Enter Secret Key
     - **If Sandbox Mode:**
       - Enter Test Publishable Key
       - Enter Test Secret Key
     - Click **Test Connection**
     - Enable **Save as New Credential**
   - **Option B - Use Stored Credentials:**
     - Select existing Stripe credentials for the chosen mode

3. **Payment Settings Tab:**
   - **Payment Type:**
     - One-time payment
     - Recurring subscription
   - **Amount:**
     - Fixed amount, OR
     - Map to form field for dynamic pricing
   - **Currency:** Select from dropdown (USD, EUR, GBP, etc.)
   - **Description:** What the charge is for

4. **Product Configuration Tab:**
   - **Product Name**
   - **Product Description**
   - Map form fields to Stripe metadata

5. **Checkout Tab:**
   - **Payment Methods:** Card, Apple Pay, Google Pay, etc.
   - **Success URL:** Where to redirect after payment
   - **Cancel URL:** Where to redirect if cancelled
   - **Collect Billing Address:** Yes/No
   - **Collect Shipping Address:** Yes/No

6. **Webhooks Tab:**
   - Configure webhook endpoint for payment events
   - Select events to listen to:
     - `payment_intent.succeeded`
     - `payment_intent.failed`
     - `charge.refunded`

7. **Advanced Tab:**
   - Set statement descriptor
   - Configure receipt emails
   - Enable/disable integration

8. Click **Save Integration**

#### Testing Payments

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Authentication: `4000 0025 0000 3155`

Any future expiry date and any 3-digit CVC will work.

#### Best Practices

- Always test in sandbox mode first
- Set up webhooks to handle async payment events
- Provide clear payment descriptions
- Configure email receipts
- Handle failed payments gracefully
- Comply with PCI DSS requirements

### PayPal

Accept PayPal payments through your forms.

#### Prerequisites

- PayPal Business account
- Client ID and Secret from PayPal Developer

#### Getting Credentials

1. Go to [PayPal Developer](https://developer.paypal.com/)
2. Log in with your PayPal account
3. Navigate to **My Apps & Credentials**
4. Create a new app or use existing
5. Copy Client ID and Secret
6. Use Sandbox credentials for testing

#### Configuration Steps

1. **Add PayPal Integration** to your form
2. **Authentication Tab:**
   - **Mode:** Live or Sandbox
   - Enter Client ID
   - Enter Secret
   - Click **Test Connection**

3. **Payment Settings Tab:**
   - **Amount:** Fixed or field-mapped
   - **Currency**
   - **Item Description**

4. **Checkout Settings Tab:**
   - **Return URL:** Success page
   - **Cancel URL:** Cancellation page
   - **Notify URL:** IPN endpoint

5. **Advanced Tab:**
   - Enable shipping
   - Configure tax
   - Set invoice prefix

6. Click **Save Integration**

#### Tips

- Test thoroughly with PayPal Sandbox
- Set up IPN (Instant Payment Notification)
- Verify payment status server-side
- Handle pending payments appropriately

---

## 9. Automation & Webhooks

### Zapier

Connect EasyForms to 5,000+ apps through Zapier.

#### Prerequisites

- Zapier account (free or paid)
- Access to create Zaps

#### Configuration Steps

1. **Add Zapier Integration** to your form
2. **Webhook URL Tab:**
   - In Zapier, create a new Zap
   - Choose **Webhooks by Zapier** as trigger
   - Select **Catch Hook**
   - Copy the webhook URL provided
   - Paste into EasyForms Zapier integration

3. **Data Mapping Tab:**
   - Select which form fields to send
   - Configure data format (JSON recommended)
   - Add custom fields if needed

4. **Trigger Settings Tab:**
   - Choose when to trigger:
     - All submissions
     - Approved submissions only
     - Based on field conditions

5. **Advanced Tab:**
   - Set timeout
   - Configure retry logic
   - Enable debugging

6. In Zapier:
   - Submit a test form to trigger the webhook
   - Verify data received in Zapier
   - Configure action steps in your Zap
   - Turn on the Zap

#### Popular Zap Examples

- **Form → Google Sheets:** Log all submissions
- **Form → Gmail:** Send custom notifications
- **Form → Trello:** Create cards for requests
- **Form → Salesforce:** Add leads automatically
- **Form → Airtable:** Build custom databases

### Custom Webhooks

Send form data to any custom endpoint.

#### Configuration Steps

1. **Add Webhook Integration** to your form
2. **Endpoint Tab:**
   - **Webhook URL:** Your endpoint URL
   - **HTTP Method:** POST, PUT, GET
   - **Content Type:** JSON or Form Data

3. **Headers Tab:**
   - Add custom headers
   - Set authentication headers
   - Configure API keys

4. **Payload Tab:**
   - **Payload Format:**
     - All form fields (automatic)
     - Selected fields only
     - Custom JSON template
   - Use `{field_name}` for dynamic values

5. **Response Handling Tab:**
   - Expected success status codes
   - How to handle errors
   - Retry configuration

6. **Security Tab:**
   - Enable HMAC signature
   - Set secret key
   - Configure IP allowlist

7. Click **Save Integration**

#### Example Webhook Payload

```json
{
  "event": "form_submission",
  "form_id": 123,
  "form_name": "Contact Form",
  "submission_id": 456,
  "timestamp": "2025-11-22T10:30:00Z",
  "fields": {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }
}
```

#### Best Practices

- Secure your webhook with authentication
- Validate incoming data on your endpoint
- Return appropriate HTTP status codes
- Implement idempotency for retries
- Log webhook calls for debugging

---

## 10. Security & CAPTCHA

### Google reCAPTCHA

Protect forms from spam and bots.

#### Types of reCAPTCHA

1. **reCAPTCHA v2:** Checkbox "I'm not a robot"
2. **reCAPTCHA v3:** Invisible, score-based
3. **reCAPTCHA Enterprise:** Advanced protection

#### Getting Site Keys

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Register a new site
3. Choose reCAPTCHA type
4. Add your domains
5. Copy Site Key and Secret Key

#### Configuration Steps

1. **Add reCAPTCHA Integration** to your form
2. **Settings:**
   - Enter Site Key
   - Enter Secret Key
   - Choose version (v2/v3/Enterprise)
   - For v3: Set score threshold (0.0 - 1.0)

3. **Appearance:**
   - Choose badge position (for v3)
   - Select theme (light/dark) for v2

4. **Actions:**
   - What to do on failure:
     - Block submission
     - Flag for review
     - Send to spam folder

### hCaptcha

Privacy-focused alternative to reCAPTCHA.

#### Configuration Steps

1. Sign up at [hCaptcha](https://www.hcaptcha.com/)
2. Get Site Key and Secret Key
3. Add hCaptcha integration to form
4. Configure similar to reCAPTCHA

### Cloudflare Turnstile

Cloudflare's user-friendly CAPTCHA.

#### Configuration Steps

1. Enable Turnstile in Cloudflare dashboard
2. Get Site Key and Secret Key
3. Add Turnstile integration
4. Configure appearance and behavior

#### Best Practices

- Use v3/invisible CAPTCHA for better UX
- Set appropriate score thresholds
- Combine with other anti-spam measures
- Monitor false positives
- Provide fallback for accessibility

---

## 11. Credential Management

EasyForms provides a secure credential management system to store and reuse API keys, tokens, and other sensitive information across multiple forms.

### Benefits of Stored Credentials

- **Reusability:** Configure once, use in multiple forms
- **Security:** Credentials are encrypted at rest
- **Easy Updates:** Update credentials in one place
- **Organization:** Name and categorize credentials
- **Audit Trail:** Track which forms use which credentials

### Saving Credentials

When configuring any integration:

1. Enter your credentials (API key, token, etc.)
2. Click **Test Connection** to verify
3. Enable **Save as New Credential** checkbox
4. Provide a descriptive name (e.g., "Production Mailchimp", "Test Stripe Account")
5. Complete the integration setup
6. Credentials are saved and encrypted

### Using Stored Credentials

When adding a new integration:

1. Toggle **Use Stored Credentials** switch
2. Select from the dropdown of available credentials
3. Click **Test Connection** to verify
4. Continue with integration setup

### Managing Credentials

#### Viewing Credentials

In the integration authentication tab:
- Toggle **Use Stored Credentials**
- View list of available credentials
- See credential names and creation dates

#### Editing Credentials

To update stored credentials:

1. Open any integration using those credentials
2. Go to Authentication tab
3. Select the credential
4. Click **Edit Credential** (if available) OR
5. Create new credentials and update integrations

#### Deleting Credentials

1. Open an integration using the credential
2. Go to Authentication tab
3. Select the credential
4. Click **Delete Credential**
5. Confirm deletion
6. **Warning:** This will affect all integrations using this credential

### Security Considerations

- Credentials are encrypted using strong encryption
- Only authorized users can access credentials
- Credential values are never exposed in frontend code
- All API calls use backend proxy for security
- Audit logs track credential usage

### Best Practices

- Use descriptive names for credentials (include environment)
- Separate production and test credentials
- Regularly rotate API keys and tokens
- Remove unused credentials
- Limit access to sensitive integrations
- Monitor credential usage through logs

---

## 12. Troubleshooting

### Common Issues

#### Integration Not Sending Data

**Symptoms:** Form submits successfully but data doesn't appear in external system

**Solutions:**

1. **Verify Integration is Enabled**
   - Check integration settings
   - Ensure toggle is ON
   - Confirm form is saved

2. **Check Credentials**
   - Test connection in integration settings
   - Verify API keys haven't expired
   - Check account permissions in external system

3. **Review Field Mappings**
   - Ensure required fields are mapped
   - Verify field types match (email to email, etc.)
   - Check for empty/missing values

4. **Check Integration Logs**
   - Go to **Components → EasyForms → Logs**
   - Filter by integration type
   - Look for error messages
   - Check response codes

5. **Test with Simple Data**
   - Submit a form with minimal data
   - Avoid special characters initially
   - Test one field at a time

#### Connection Test Fails

**Symptoms:** "Test Connection" button shows error

**Solutions:**

1. **Verify Credentials**
   - Double-check API key/token
   - Ensure no extra spaces
   - Check if credentials are for correct environment (test vs production)

2. **Check API Permissions**
   - Verify API key has necessary scopes
   - Check account permissions
   - Ensure API access is enabled

3. **Network Issues**
   - Check server firewall settings
   - Verify outbound connections allowed
   - Test from server command line

4. **Service Status**
   - Check if external service is down
   - Look for service status pages
   - Try again later

#### Data Mapping Issues

**Symptoms:** Some fields sync but others don't

**Solutions:**

1. **Field Type Mismatch**
   - Ensure data types match (text to text, number to number)
   - Check date format requirements
   - Verify dropdown values match

2. **Required Fields**
   - Check which fields are required in external system
   - Ensure all required fields are mapped
   - Provide default values if needed

3. **Field Length Limits**
   - Check character limits in external system
   - Truncate or validate on form side
   - Use text areas for long content

#### Webhook Not Triggering

**Symptoms:** Webhook endpoint not receiving data

**Solutions:**

1. **Verify URL**
   - Ensure webhook URL is correct
   - Check for HTTPS requirement
   - Test endpoint independently

2. **Check Trigger Conditions**
   - Review when webhook should fire
   - Verify conditions are met
   - Check for filters or rules

3. **Review Headers**
   - Ensure authentication headers are correct
   - Check content-type header
   - Verify API key format

4. **Test Endpoint**
   - Use tools like Webhook.site for testing
   - Check server logs on receiving end
   - Verify endpoint returns 200 status

#### Payment Integration Issues

**Symptoms:** Payment processing fails or redirects incorrectly

**Solutions:**

1. **Mode Mismatch**
   - Verify using correct mode (test vs live)
   - Check credentials match mode
   - Use test cards in test mode

2. **Currency Issues**
   - Ensure currency is supported
   - Check amount format (no symbols)
   - Verify decimal places

3. **Redirect URLs**
   - Ensure URLs are absolute (not relative)
   - Check URLs are accessible
   - Verify SSL certificate if using HTTPS

4. **Webhook Verification**
   - Set up payment webhooks
   - Verify webhook signatures
   - Handle async payment events

### Error Messages and Solutions

| Error Message | Cause | Solution |
|---------------|-------|----------|
| "API key is required" | Missing or invalid credentials | Enter valid API key and test connection |
| "Authentication failed" | Invalid credentials | Verify credentials in external system |
| "Field mapping error" | Required field not mapped | Map all required fields |
| "Connection timeout" | Network or firewall issue | Check server connectivity |
| "Invalid webhook URL" | Malformed URL | Use full HTTPS URL |
| "Permission denied" | Insufficient API permissions | Grant necessary scopes in external system |
| "Rate limit exceeded" | Too many API calls | Reduce submission frequency or upgrade plan |
| "Invalid response format" | API version mismatch | Check API documentation for correct format |

### Getting Help

If you continue to experience issues:

1. **Check Logs**
   - Enable debug mode in integration settings
   - Review detailed error messages
   - Check Joomla error logs

2. **Documentation**
   - Review integration-specific guides above
   - Check external service documentation
   - Look for API changelog updates

3. **Test in Isolation**
   - Create a simple test form
   - Use minimal field mapping
   - Eliminate variables

4. **Contact Support**
   - Provide integration type and version
   - Include error messages from logs
   - Share anonymized configuration
   - Describe steps to reproduce

### Debugging Tips

#### Enable Debug Mode

1. Edit the integration
2. Go to Advanced tab
3. Enable "Debug Mode"
4. Submit test forms
5. Review detailed logs

#### Check System Requirements

- PHP version compatible
- Required PHP extensions enabled
- cURL available for API calls
- SSL certificates valid
- Sufficient server resources

#### Monitor API Usage

- Track API call quotas
- Monitor rate limits
- Review billing/usage in external services
- Set up alerts for limits

---

## Related Guides

- [Email Notifications](./emails) - Configure form email notifications
- [Google Analytics](./google-analytics) - Detailed analytics setup
- [Payments Support](./payments-support) - Payment processing guide
- [Troubleshooting Guide](./troubleshooting-guide) - General troubleshooting

---

## Security Best Practices

### Credential Security

- **Store safely:** Use the built-in credential manager
- **Rotate regularly:** Update API keys and tokens periodically
- **Least privilege:** Grant only necessary permissions
- **Separate environments:** Use different credentials for test/production
- **Monitor access:** Review integration logs regularly

### Data Protection

- **Encrypt data:** Ensure SSL/TLS for all API communications
- **Sanitize inputs:** Validate and clean data before sending
- **PII compliance:** Follow GDPR, CCPA regulations
- **Audit trails:** Maintain logs of data transfers
- **Access control:** Limit who can configure integrations

### Best Practices Summary

1. ✅ Use stored credentials for reusability
2. ✅ Test connections before going live
3. ✅ Enable debug mode when troubleshooting
4. ✅ Monitor integration logs regularly
5. ✅ Keep API credentials secure and rotated
6. ✅ Map only necessary fields
7. ✅ Set up error notifications
8. ✅ Test with real submissions
9. ✅ Document your integration setup
10. ✅ Remove unused integrations

---

**Need more help?** Check our [Troubleshooting Guide](./troubleshooting-guide) or contact support.

[← Back to Overview](/easyforms/overview)

