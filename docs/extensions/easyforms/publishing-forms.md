# Publishing Forms on Your Site

This guide shows how to display EasyForms on your Joomla site using menu items, modules, or content plugins.

> **Audience:** Site owners and editors who publish content.

[← Back to Overview](/easyforms/overview) · [Form Builder Basics](./form-builder)

---

## 1. Using a Menu Item

Publishing via a menu item is ideal when the form should have its own page.

1. In the **Joomla Administrator**, go to **Menus → [Your Menu] → Add New Menu Item**.
2. Enter a **Menu Title** (e.g., "Contact Us").
3. Click **Select** next to **Menu Item Type**.
4. Choose an EasyForms-related type (such as "Single Form" or similar, depending on your installation).
5. Select the form you want to display.
6. Configure access level (Public, Registered, etc.).
7. Save and view the menu item on the frontend.

---

## 2. Using a Module

Modules are useful for showing forms in sidebars, footers, or other template positions.

1. Go to **Extensions → Modules → New**.
2. Choose an EasyForms module type (e.g., "EasyForms Form Module").
3. Name the module and select the form.
4. Choose a **Module Position** (sidebar, footer, etc.).
5. Set the **Menu Assignment** to control where it appears.
6. Save and check the frontend.

---

## 3. Embedding in an Article or Custom HTML

If EasyForms provides a content plugin or embed code, you can place forms directly inside articles.

1. Edit the article where you want the form.
2. Insert the appropriate shortcode or embed tag. For example (actual syntax may vary):

   ```
   {easyform id=123}
   ```

3. Save the article and view it on the frontend.

Check your EasyForms documentation or configuration for the exact shortcode syntax available in your installation.

---

## 4. Access Control and Visibility

When publishing a form, consider who should see it:

- **Public** – anyone can access.
- **Registered** – only logged-in users.
- **Specific user groups** – only certain roles (e.g., staff or members).

Set access levels on the menu item or module to match your needs.

---

## 5. Testing Published Forms

After publishing a form:

1. Open the page on the frontend.
2. Fill out the form as a user would.
3. Confirm that submissions appear in **Components → EasyForms → Submissions**.
4. Check that email notifications and integrations (if configured) work as expected.

---

## 6. Related Guides

- [Frontend Form Management](./frontend-management)
- [Viewing, Filtering, and Exporting Submissions](./form-submissions)
- [Email Notifications and Autoresponders](./emails)


