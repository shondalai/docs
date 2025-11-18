# Payment and E-Commerce Forms

This guide explains how to collect payments, donations, or fees through EasyForms using supported payment integrations.

> **Audience:** Site owners who need to accept payments via forms.

[← Back to Overview](/easyforms/overview) · [Integrations](./integrations)

---

## 1. Typical Use Cases

- Event or workshop registration fees.
- Membership or subscription signups.
- Donations for non-profits.
- Simple product or service orders.

---

## 2. Requirements

Before building payment forms, you need:

- An account with a supported payment provider (e.g., Stripe, PayPal).
- API credentials or connection details for that provider.
- HTTPS (SSL certificate) enabled on your website.

Your administrator should configure the basic integration first.

---

## 3. Configuring Payment Integrations

1. Log into the **Joomla Administrator**.
2. Go to **Components → EasyForms → Integrations**.
3. Find your payment provider (e.g., Stripe, PayPal) and click it.
4. Enter required credentials (API keys, client IDs, etc.).
5. Choose **test mode** or **live mode** depending on your stage.
6. Save and, if available, run any built-in connection tests.

---

## 4. Building a Payment Form

1. Create or edit a form in the **Form Builder**.
2. Add fields for user details (name, email) and what they are paying for.
3. Add payment-related fields, such as:
   - **Product / Item** selection.
   - **Amount** (fixed or calculated).
4. Configure pricing options (currency, fixed vs variable amounts).
5. Save the form.

The exact field types and options vary based on your EasyForms version and payment provider integration.

---

## 5. Testing Payments

Always test in **test/sandbox mode** first:

1. Set your payment provider to test mode in the integration settings.
2. Submit the form using test card numbers provided by your payment provider.
3. Confirm that:
   - The form submission is recorded in EasyForms.
   - The payment appears in the provider’s dashboard as a test transaction.

Only switch to live mode once everything works as expected.

---

## 6. Handling Payment Failures

If a payment fails:

- The user should see a clear error message (e.g., card declined).
- The submission may or may not be saved, depending on configuration.
- You can check details in your payment provider’s dashboard.

If users report issues, test the form yourself and check server or integration logs.

---

## 7. Compliance and Best Practices

- Be transparent about pricing and any additional fees.
- Make sure your site’s privacy policy covers payment processing.
- Keep your payment provider credentials secure.
- Follow any applicable regulations in your jurisdiction.

---

## 8. Related Guides

- [Advanced Fields and Special Form Types](./advanced-fields)
- [Integrations (CRM, Email, Automation, Storage)](./integrations)
- [Troubleshooting and Logs](./troubleshooting-guide)


