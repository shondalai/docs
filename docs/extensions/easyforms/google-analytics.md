# External Analytics (Google Analytics, etc.)

This guide describes how form activity can be tracked in external analytics tools like Google Analytics.

> **Audience:** Users already familiar with Google Analytics or similar platforms.

[← Back to Overview](/easyforms/overview) · [Analytics and Reporting](./form-analytics)

---

## 1. Why Use External Analytics?

External analytics tools let you:

- See form activity in the context of the entire user journey.
- Combine form submissions with other site events.
- Build funnels and conversion reports across multiple pages.

EasyForms can send events or data to these tools when forms are viewed or submitted.

---

## 2. Typical Google Analytics Setup

1. Ensure Google Analytics (GA4 or Universal Analytics) is installed on your Joomla site.
2. In EasyForms **Integrations** or **Analytics** settings (admin area):
   - Enter your GA **Measurement ID** (for GA4).
   - Enable any available options to track **form views** and **submissions** as events.
3. In Google Analytics:
   - Confirm that events (such as `form_view` or `form_submit`) are being received.
   - Optionally mark certain events as **conversions**.

Specific event names and configuration details depend on your EasyForms version and analytic settings.

---

## 3. Privacy and Consent

When tracking user behavior:

- Follow local privacy laws (GDPR, CCPA, etc.).
- Use consent banners or opt-in mechanisms if required.
- Be clear with users about what you track and why.

Consult your legal or compliance advisor if you are unsure which rules apply.

---

## 4. Troubleshooting External Analytics

If you don’t see form events in your analytics tool:

- Check that your site’s tracking code is installed and firing.
- Verify that EasyForms integration settings are correct.
- Use your browser’s developer tools to confirm that tracking requests are sent.
- Remember that some tools (like GA4) may take a short time to show new events.

For advanced debugging, involve a developer or analytics specialist.

---

## 5. Related Guides

- [Analytics and Reporting](./form-analytics)
- [Integrations (CRM, Email, Automation, Storage)](./integrations)


