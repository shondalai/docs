# Validation and Anti-Spam Protection

This guide explains how to ensure clean, valid data and protect your forms from spam and abuse.

> **Audience:** Users responsible for data quality and security.

[← Back to Overview](/docs/extensions/easyforms) · [Form Builder Basics](./form-builder)

---

## 1. Field Validation Basics

Every field can have validation rules that control what is considered a valid answer.

### Common Validation Options

- **Required** – the field must be filled in before the form can be submitted.
- **Email format** – checks that the input looks like a valid email address.
- **Number range** – minimum and/or maximum value.
- **Length limits** – minimum and/or maximum number of characters.

### Configuring Validation

1. Open your form in the **Form Builder**.
2. Click a field to open its settings.
3. Look for a section like **Validation** or **Rules**.
4. Turn on the options you need and, if possible, customize the error messages.

---

## 2. CAPTCHA and reCAPTCHA

CAPTCHA helps ensure that a real person, not an automated bot, is submitting the form.

### Enabling CAPTCHA

1. Ensure a CAPTCHA or reCAPTCHA plugin is configured by your Joomla administrator.
2. In EasyForms or Joomla global settings, confirm that CAPTCHA keys (site key and secret key) are set.
3. Edit your form and open **Form Settings**.
4. Enable **CAPTCHA** or **Spam Protection** and choose the desired CAPTCHA type.

### Types of CAPTCHA

Depending on configuration, you may see:

- Classic "I am not a robot" checkboxes.
- Invisible CAPTCHA that runs in the background.
- reCAPTCHA Enterprise (for advanced security scenarios).

---

## 3. Preventing Multiple or Duplicate Submissions

To limit how often users can submit a form, your configuration may allow options such as:

- **One submission per logged-in user**.
- **One submission per browser/device** (using cookies).
- **Rate limiting** based on IP address or other signals.

Check the **Submission** or **Advanced** section of your form settings, or consult your admin, to see what options are available on your site.

---

## 4. User-Friendly Error Messages

Good error messages help users correct mistakes quickly.

- Use clear language: "Please enter a valid email address" rather than "Invalid input".
- Indicate which field has a problem.
- Keep error messages near the relevant field.

Preview and test your form to ensure validation messages make sense.

---

## 5. Balancing Security and Convenience

- Don’t make every field required unless it’s truly necessary.
- Use CAPTCHA on public forms that are visible without login.
- Consider lighter protection (or none) on internal forms used only by staff.

If your form starts receiving spam despite CAPTCHA, contact your administrator; advanced options like reCAPTCHA Enterprise or further rate limiting may be needed.

---

## 6. Related Guides

- [Conditional Logic and Smart Forms](./conditional-logic)
- [Security, Permissions, and Data Access](./security-and-permissions)
- [Troubleshooting and Logs](./troubleshooting-guide)


