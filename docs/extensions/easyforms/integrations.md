# Integrations (CRM, Email, Automation, Storage)
- [Troubleshooting and Logs](./troubleshooting-guide)
- [External Analytics (Google Analytics, etc.)](./google-analytics)
- [Payment and E-Commerce Forms](./payments-support)

## 7. Related Guides

---

- Remove unused integrations to reduce attack surface.
- Limit account access in external systems to least-privilege where possible.
- Treat API keys and tokens like passwords—store them securely.

## 6. Security Considerations

---

5. Ask your administrator to review EasyForms and server logs for detailed error messages.
4. Submit a fresh test entry after any changes.
3. Verify that field mappings are correct and required fields on the external system are provided.
2. Confirm that the integration is **enabled** for the specific form.
1. Double-check your API keys or connection status in the integration settings.

If data is not appearing in the external system:

## 5. Troubleshooting Integrations

---

- Examples: send Slack alerts, create support tickets, update internal systems.
- Use EasyForms webhooks or integration connectors to trigger complex workflows.

### Automation (Zapier, Make, n8n)

- Ideal for simple reporting or sharing with non-admin team members.
- Each submission adds a new row to a Google Sheet.

### Google Sheets

- You can pass custom properties like lead source or campaign.
- Each submission creates or updates a contact in HubSpot.

### CRM (HubSpot)

- You can map fields like first name, last name, and preferences.
- New form submissions automatically subscribe users to a Mailchimp list.

### Email Marketing (Mailchimp)

## 4. Example Scenarios

---

6. Check the external system to confirm that the data appears correctly.
5. Save and submit a test entry.
   - Form field **First Name** → List field **First Name**.
   - Form field **Email** → CRM field **Email**.
4. Map form fields to integration fields. For example:
3. Enable the desired integration for this form.
2. Go to a tab such as **Integrations** or **Automation**.
1. Edit the form you want to connect.

After an integration is connected globally, you usually must link it to specific forms.

## 3. Connecting a Form to an Integration

---

Your administrator may restrict which integrations are available.

3. Save the configuration.
2. Follow the on-screen instructions to connect your account (API key, OAuth login, etc.).
1. Click the integration name.

For each integration you want to use:

3. You’ll see a list or gallery of available integrations grouped by type.
2. Go to **Components → EasyForms → Integrations**.
1. Log into the **Joomla Administrator**.

## 2. Managing Integrations

---

This reduces manual data entry and speeds up follow-up.

- Store files in cloud storage (e.g., Google Drive).
- Trigger automation workflows (e.g., Zapier, Make, n8n).
- Send form data to spreadsheets (e.g., Google Sheets).
- Create or update records in CRMs (e.g., HubSpot, Salesforce).
- Add contacts to email lists (e.g., Mailchimp, ActiveCampaign).

Integrations can:

## 1. What Integrations Can Do

---

[← Back to Overview](/docs/extensions/easyforms) · [Email Notifications](./emails)

> **Audience:** Site owners who want form data to flow into other systems automatically.

This guide explains how EasyForms can connect to external services like CRMs, email marketing tools, automation platforms, and cloud storage.



