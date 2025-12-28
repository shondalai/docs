---
id: community-quiz-built-in-module-positions
title: Built-in Module Positions
sidebar_label: Module Positions
sidebar_position: 8
---

Community Quiz provides several "virtual" module positions that allow you to inject custom Joomla! modules into specific parts of the quiz interface without modifying any code. This is perfect for displaying advertisements, related links, or extra instructions.

---

## How to Use These Positions

1. Go to **Content** → **Site Modules**.
2. Open or create the module you want to display.
3. In the **Position** field, simply **type** the name of one of the positions listed below (e.g., `quiz-view-above-quiz-details`) and press Enter.
4. Set the **Menu Assignment** to either "On all pages" or specify your Community Quiz menu items.

---

## List of Available Positions

| Position Name | Location Description |
|---------------|----------------------|
| `quiz-view-above-quiz-details` | Displays at the very top of the quiz landing/introduction page. |
| `quiz-view-below-quiz-details` | Displays after the quiz description but before the "Start Quiz" button. |
| `quiz-view-above-response-form` | Displays above the pagination, quiz timer, and questions on the response page. |
| `quiz-view-above-questions-list`| Displays directly above the first question of the current page. |
| `quiz-view-below-navigation` | Displays at the bottom of the page, after the navigation buttons. |

---

## Example Use Cases

### Displaying Advertisements

Assign a Banner or Custom HTML module to `quiz-view-above-response-form` to show ads to users while they are taking the quiz.

### Related Content

Use a "Related Articles" module in the `quiz-view-below-navigation` position to suggest further reading after a user finishes a page of questions.

### Custom Sidebar inside Quiz

Use `quiz-view-above-questions-list` to provide a cheat sheet or reference material that stays visible while the user answers questions.

---

## Tips for Layout

- **Responsiveness**: Ensure the modules you place in these positions are responsive, as they will be constrained by the width of the quiz container.
- **Styling**: You can use the "Module Class" setting in your module to add CSS classes for specific styling within the quiz layout.
- **Mobile View**: Be careful with large modules in `above-response-form` as they may push the questions below the fold on mobile devices.
