# Troubleshooting and Logs

This guide helps you diagnose and resolve common issues with EasyForms.

> **Audience:** Site owners and administrators.

[← Back to Overview](/easyforms/overview)

---

## 1. Form Not Showing on the Site

- Confirm the form is **published** and not in trash.
- Check that the **menu item** or **module** is published and assigned to the correct pages.
- Verify access levels – if set to Registered, you must be logged in to see the form.
- If using a shortcode or embed tag, ensure the syntax is correct.

---

## 2. Submissions Not Appearing

- Submit the form yourself and then check **Components → EasyForms → Submissions**.
- Confirm that you’re filtering for the correct form.
- Check for validation errors that may be preventing submission.
- Look for server-side errors in logs if submissions fail silently.

---

## 3. Emails Not Being Delivered

- Verify Joomla **Global Mail Settings** are correct.
- Check that notification and autoresponder settings in the form are configured properly.
- Confirm that emails are not going to spam/junk folders.
- Ask your host or admin about any sending limits or reputation issues.

---

## 4. Integrations Not Receiving Data

- Re-check API keys and connection status in **Integrations**.
- Ensure the integration is **enabled** for the specific form.
- Confirm that required fields are being sent to the external system.
- Submit a test entry and check external logs or dashboards.

---

## 5. AI Assistant or AI Translation Errors

- Make sure AI integration is configured and active.
- Check for network connectivity issues.
- Verify that your user account has permission to use AI features.
- Try a clearer, more detailed description for AI requests.

---

## 6. Where to Find Logs

Depending on your setup, logs may be available:

- Within EasyForms (integration logs, error logs).
- In Joomla’s log directory.
- In your web server logs (Apache, Nginx, etc.).

Your administrator or hosting provider can help you access and interpret these logs.

---

## 7. When to Escalate to Support or Developers

Consider involving your host, developer, or vendor support when:

- Errors persist despite correct configuration.
- You see repeated integration failures with no clear cause.
- You suspect a bug or compatibility issue after an update.

Provide as much information as possible: screenshots, log excerpts, steps to reproduce, and timestamps.

---

## 8. Related Guides

- [Email Notifications and Autoresponders](./emails)
- [Integrations (CRM, Email, Automation, Storage)](./integrations)
- [Security, Permissions, and Data Access](./security-and-permissions)


