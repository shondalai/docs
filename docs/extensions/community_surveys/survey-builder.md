---
id: survey-builder
title: Survey Builder
sidebar_label: Survey Builder
sidebar_position: 10
---

# Survey Builder

The visual editor where every survey lives. Five tabs: **Builder**, **Design**, **Logic**, **Translations**, **Results**. The middle of the screen is your canvas; the right rail flips between question palette, inspector, or theme controls depending on what you're doing.

This guide walks through each tab. For an admin-wide overview, see the [Admin tour](./admin-tour.md).

---

## Builder tab

The default view when you open a survey.

### Anatomy

- **Top bar** — Title (click to rename), language switcher (for multilingual surveys), Preview, Publish/Close, Delete.
- **Tabs row** — Builder / Design / Logic / Translations / Results.
- **Pages strip** (just below tabs) — every page in the survey as a horizontal chip. Click to switch pages; right-click for rename/duplicate/delete; **+** at the end to add a new page.
- **Canvas** (centre) — the live survey, rendered exactly as a respondent will see it. Click any question to select it.
- **Right rail** (default: question palette) — categorised list of every question type. Drag onto the canvas, or click to append at the end of the current page.

### Adding questions

Two ways:

1. **Drag-and-drop** from the palette. Drop targets highlight as you drag — between any two existing questions, at the top, or at the bottom.
2. **Click** any palette item to append to the current page.

Every question lands with a placeholder title. Click the title on the canvas to edit it inline. Click the description below the title to add a sub-heading.

### Editing a question

Click any question on the canvas to select it. The right rail flips from palette to **Inspector**, with three sub-tabs:

- **Content** — title, description, options (for choice questions), validation message.
- **Behaviour** — required toggle, default value, min/max selections, max length, regex pattern, allow-other, randomise option order.
- **Advanced** — CSS classes (per-question, per-title, per-description, per-field), show-in-report toggle, custom width.

Changes save as you type (debounced 250ms). There's no Save button for individual edits.

### Question types

The palette groups types by purpose:

**Choice**: Radio, Checkbox, Dropdown, Image choice (single), Image choice (multiple), Rank.

**Open text**: Short answer, Long answer, Rich text (HTML), Email, Phone, Password (masked), Hidden (admin-set, not shown to respondent).

**Scales**: NPS (0–10), Slider (numeric or text-labelled).

**Grids**: Likert (rows × scale), Rating grid (rows × scale), Matrix (rows × columns), Checkbox grid (rows × multi-cols), Matching ("match these"), Multi-rating (per-row stars).

**Media & data**: File upload, Signature pad, Date, Geolocation (lat/lng with map picker), Name (structured first/last), Address (multi-field), Multi-input (labelled rows).

**Layout**: Page header (section divider, no answer).

For deep-dives on individual types, see:
- [Map / location questions](./creating-map-location-question.md)
- [Ranking questions](./ranking-questions-in-community-surveys.md)
- [URL-parameter questions (hidden)](./how-url-parameter-questions-work-in-community-surveys.md)
- [Regex validation on text](./setup-regular-expression-validation-on-textbox-questions.md)

### Pages

Surveys can be multi-page (one page per "section" with a Next button) or single-page (all questions on one scroll). Choose by adding more pages or keeping just one.

Pages can have:

- **Title** — shown above the page's questions.
- **Description** — optional intro paragraph.
- **Progress bar** — auto-rendered when the survey has 2+ pages.

Right-click a page chip in the strip for **Rename**, **Duplicate**, **Delete**.

### Answer presets

If you have a recurring answer set (e.g. a 5-point agreement scale), define it once in the **Presets** page (left rail) then click **Use preset** on any choice-style question. The preset's labels populate immediately, including translations if you've defined them.

### AI authoring (optional)

When your site is connected to a shondalai.com account and AI features are enabled, the builder offers:

- **Build with AI** (empty canvas) — type a survey topic, AI drafts the whole survey.
- **Suggest answers** (per choice question) — AI proposes 5–10 answer options based on the question title.
- **Build grid with AI** (per grid question) — AI fills in rows + columns based on the title.
- **Translate with AI** (Translations tab) — bulk-translate every untranslated string.

See [AI features](./ai-features.md) for the credit model and setup.

---

## Design tab

Per-survey theming.

### Base theme

Top of the right rail — a thumbnail picker of every theme available on the site. Themes ship in matched light + dark pairs, so picking "Aurora" gives you both modes automatically.

When you pick a base theme, the canvas re-renders with that theme's defaults.

### Overrides

Below the theme picker, four override controls:

- **Accent colour** — the survey's primary action colour (Next button, focus rings, selected option indicator).
- **Surface tone** — `neutral` (default) or `warm` (slightly tinted backgrounds). Affects every theme.
- **Font family** — sans-serif, serif, or system default.
- **Border radius** — controls the roundedness of buttons and form controls (square / soft / rounded / pill).

Overrides apply *on top of* the base theme. Pick a theme you like 90% of, then nudge the accent and you're done.

### Mode toggle

Above the preview, a Light/Dark toggle. Lets you verify both modes before publishing.

### Custom themes

The Design tab picks from existing themes — it doesn't create new ones. Go to **Themes** (left rail) to author from scratch.

See [Themes & customisation](./themes-and-customization.md).

---

## Logic tab

Conditional rules that show/hide questions, skip pages, or end the survey based on respondents' answers.

A rule has two parts:

- **Conditions** — a tree of comparisons. Each leaf compares a question's answer to a value (`equals`, `does not equal`, `contains`, `is empty`, …). Wrap leaves in AND / OR groups to compose complex logic.
- **Action** — what happens when the conditions match: `show` a question/page, `hide` a question/page, `skip to` a specific page, `end` the survey (with optional thank-you message), `require` a question.

### Adding a rule

1. **+ New rule** in the Logic tab toolbar.
2. **When** dropdown — pick a question to base the rule on.
3. **Operator** — equals / not equals / contains / etc.
4. **Value** — for choice questions, pick from the options; for text/numeric, type the value.
5. **Then** — pick the action and target.
6. Save.

Rules are evaluated top-to-bottom on every respondent interaction. Order matters when actions conflict.

### Best practices

- Keep rules focused — one condition leaf per concern. Nest AND/OR groups instead of cramming everything into one mega-condition.
- Use `skip to page` for branching surveys (e.g. "if customer, jump to page 3; if prospect, jump to page 5").
- Use `end` to short-circuit out of irrelevant remainder when an early answer disqualifies the respondent.
- Use `require` to make a question mandatory only when a prior answer demands it.

See [Conditional rules](./conditional-rules-explained.md) for worked examples.

---

## Translations tab

Side-by-side editor for any Joomla content language enabled on your site.

### Setup

1. In Joomla's admin, enable the content languages you want (Extensions → Languages → Content Languages).
2. In the survey builder, click **Translations** tab.
3. Click **+ Add language** at the top, pick a language. A new locale tab appears.

### Translating

The editor shows the source language on the left, the target on the right. Click any cell on the right to translate it.

Every translatable string is listed:

- Survey title and description
- Page titles and descriptions
- Question titles, descriptions, placeholders, validation messages
- Choice options
- Grid row + column labels
- Slider tick labels
- Submit / Next / Back button labels
- End-of-survey messages

Untranslated cells show the source text greyed out — the survey will fall back to the source when serving translated pages.

### AI bulk-translate

If AI is enabled, the **Translate all** button bulk-fills every untranslated string in one go. You can review and correct individual cells afterwards.

See [Translating surveys](./translating-surveys.md) for more.

---

## Results tab

Embedded analytics overview for *this* survey only. Same charts as the Analytics page's Overview tab — useful while you're still iterating, so you don't have to context-switch.

For the full five-tab analytics workbench, click **Open full report** in the Results tab toolbar or navigate to **Analytics** in the left rail.

See [Analytics & Reports](./analytics-and-reports.md).

---

## Common tasks

### Publishing

Click **Publish** in the top bar. The survey transitions to **Live** state and a public URL appears.

Surveys go through three states:

- **Draft** — only admins can view; respondents see a 404 if they try the URL.
- **Live** — public; respondents can submit responses.
- **Closed** — public URL still works for viewing past responses (if `allow_view_results` is on) but new submissions are rejected.

You can move between states freely; published once, the URL stays stable.

### Duplicating

From the Surveys list, kebab menu → **Duplicate**. Creates a copy with " (Copy)" appended to the title, in Draft state. Every question, rule, theme override, and translation copies over.

### Deleting

From the builder's top bar, kebab menu → **Delete**. Or from the Surveys list, kebab menu → **Delete**.

Deletion cascades to every response and every integration log row. The action is permanent — no soft-delete or recycle bin.

### Importing/exporting

Surveys export as JSON via **Surveys → kebab → Export**. The exported file carries the survey + questions + rules + translations + theme overrides. Import via **Surveys → Import** to restore.

Useful for moving surveys between staging and production sites, or templating a survey across multiple installs.

See [Import / export surveys](./importexport-surveys.md).
