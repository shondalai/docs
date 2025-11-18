# AI Form Builder Assistant – End User Guide

The AI Form Builder Assistant helps you create forms quickly by turning natural language descriptions into suggested fields and sections.

> **Audience:** Non-technical admins and editors who want to build forms faster.

[← Back to Overview](/easyforms/overview) · [Form Builder Basics](./form-builder)

---

## 1. What the AI Assistant Can Do

The AI Assistant can:

- Suggest relevant fields based on a plain-language description.
- Choose appropriate field types (text, email, rating, select, etc.).
- Propose logical ordering and grouping of fields.
- Add all suggested fields as a new section in your form with one click.

It does **not** replace your judgment—you can review, edit, or remove anything it suggests.

---

## 2. Requirements and Permissions

Before you can use the AI Assistant, your site admin must:

1. Configure the **AI service** in EasyForms integrations.
2. Ensure your Joomla user group has permission to use AI features.
3. Allow the server to connect to the AI service over HTTPS.

If you do not see the AI Assistant button, contact your Joomla administrator.

---

## 3. Opening the AI Form Builder Assistant

1. In the **Joomla Administrator**, go to **Components → EasyForms → Forms**.
2. Edit an existing form or create a new one, then open the **Form Builder**.
3. In the builder toolbar, click the **AI Assistant** button (sparkles or magic-wand icon).
4. A dialog opens with:
   - A large description textarea.
   - Example prompts to help you phrase your request.
   - Buttons to generate and apply suggestions.

---

## 4. Writing a Good Description

In the description box, explain what you’re trying to achieve. Include:

- **Context** – Who is filling the form? (customers, job applicants, event attendees)
- **Purpose** – What are you trying to learn or collect?
- **Important details** – Topics to cover, required fields.

### Example Prompts

- "Customer feedback form for a restaurant".
- "Job application form for a senior software engineer".
- "Registration form for a 3-day tech conference".
- "Post-purchase satisfaction survey for our online store".

The more specific your description, the better the suggestions.

---

## 5. Generating and Reviewing Suggestions

1. Type your description.
2. Click **Generate Fields**.
3. The AI service analyzes your description and returns a list of suggested fields.
4. In the results area, you’ll see:
   - Field labels (e.g., "Food Quality", "Service Rating").
   - Field types (rating, radio, email, textarea, etc.).
   - Required vs optional flags.
   - Any help text or placeholder suggestions.

### Reviewing Suggestions

- Remove any fields you don’t need.
- Edit labels to match your tone of voice.
- Adjust which fields are required.

You remain in full control—the AI is simply a starting point.

---

## 6. Applying Suggestions to Your Form

When you’re satisfied with the suggestions:

1. Click **Apply to Form**.
2. The suggested fields are added as a **new section** at the end of your form.
3. You can then:
   - Move fields to different sections or pages.
   - Combine AI-generated fields with manually added ones.
   - Add conditional logic or validation rules as needed.

Save your form when you are done.

---

## 7. Example Scenarios

### Restaurant Customer Satisfaction Survey

**Description:**
"I need a form to collect customer feedback about our restaurant."

**Typical AI suggestions:**

- Food Quality (rating)
- Service Rating (rating)
- Ambiance (rating, optional)
- Would you recommend us? (radio: Yes / No / Maybe)
- Additional Comments (textarea)
- Visit Date (date)
- Email (optional email field)

### Job Application Form

**Description:**
"Job application form for a software developer position."

**Typical AI suggestions:**

- Full Name (text)
- Email (email)
- Phone (phone)
- Resume (file upload)
- Years of Experience (number or dropdown)
- Key Skills (multi-select or textarea)
- Cover Letter (textarea)
- References (textarea)

### Event Registration

**Description:**
"Registration form for a tech conference."

**Typical AI suggestions:**

- Full Name
- Email
- Company
- Job Title
- Dietary Restrictions (textarea or multi-select)
- Session Preferences (checkboxes)
- T-shirt Size (dropdown)

Use these examples as templates for your own prompts.

---

## 8. Troubleshooting

### The AI button is missing

- Ensure your EasyForms version includes the AI Assistant.
- Ask your Joomla administrator to confirm that AI integration is configured and that your user group has access to it.

### Error messages when generating

- Temporary network issues – try again after a few seconds.
- Invalid or missing AI credentials – your admin needs to update the integration settings.
- Very short or unclear descriptions – write a more detailed prompt.

### Suggestions don’t match what I need

- Refine your description with more detail (audience, purpose, required fields).
- Manually adjust or delete fields after applying suggestions.

---

## 9. Related Guides

- [Building Forms with the Visual Form Builder](./form-builder)
- [Advanced Fields and Special Form Types](./advanced-fields)
- [Conditional Logic and Smart Forms](./conditional-logic)


