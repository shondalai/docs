# Email Notifications and Autoresponders

This guide explains how to set up email notifications for admins and automatic confirmation emails for users.

> **Audience:** Users who need to be notified of new submissions or send confirmations.

[← Back to Overview](/docs/extensions/easyforms) · [Viewing Submissions](./form-submissions)

---

## 1. Requirements

Before configuring emails:

- Joomla’s **Global Configuration → Server → Mail Settings** must be correctly set up.
- Your hosting provider must allow outbound email (SMTP or PHP mail).

If emails are not being delivered, ask your administrator to verify these settings.

---

## 2. Admin Notification Emails

Admin notifications alert you when someone submits a form.

### Setting Up Admin Notifications

1. Edit a form in EasyForms.
2. Open the **Email** or **Notifications** tab.
3. Enable **Admin Notification** or similar.
4. Configure:
   - **Recipients** – one or more email addresses.
   - **Subject** – e.g., "New Contact Form Submission".
   - **Message** – include field values using placeholders (syntax depends on your version).
5. Save and submit a test form to confirm delivery.

---

## 3. Autoresponder Emails (User Confirmations)

Autoresponders send a confirmation email to the person who filled out the form.

### Setting Up Autoresponders

1. In the same **Email** or **Notifications** area, look for **Autoresponder** settings.
2. Enable the feature.
3. Choose the field that contains the user’s email (e.g., "Email").
4. Configure:
   - **From name** and **From address**.
   - **Subject** – e.g., "Thanks for contacting us".
   - **Message content** – thank the user and summarize their submission if desired.
5. Save and test using your own email address.

---

## 4. Tips for Effective Emails

- Use clear subject lines so admins recognize important messages.
- Keep user confirmation emails short and friendly.
- Include your contact details or next steps in autoresponders.
- Avoid sending sensitive data in email where possible.

---

## 5. Troubleshooting Email Issues

If emails are not arriving:

1. Check the **Spam/Junk** folder.
2. Verify that Joomla mail settings are correct.
3. Confirm that EasyForms email settings reference valid addresses.
4. Ask your hosting provider or admin about SPF/DKIM settings and any sending limits.

Your admin can also check server logs or EasyForms logs for detailed error messages.

---

## 6. Related Guides

- [Viewing, Filtering, and Exporting Submissions](./form-submissions)
- [Integrations (CRM, Email, Automation, Storage)](./integrations)
- [Troubleshooting and Logs](./troubleshooting-guide)


