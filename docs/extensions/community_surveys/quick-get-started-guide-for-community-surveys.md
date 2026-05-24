---
id: quick-get-started-guide-for-community-surveys
title: Quick Start Guide
sidebar_label: Quick Start
sidebar_position: 2
---

# Quick Start Guide

Build your first survey in 10 minutes. By the end you'll have a published survey collecting real responses.

This guide assumes Community Surveys is already installed. If not, do that first via [Installation & Configuration](./installing-and-configuring-community-surveys.md).

---

## 1. Open the admin

In Joomla's admin sidebar, **Components → Community Surveys**. The first time you land, you'll see the dashboard with quick-start cards.

The admin is a single-page app, so once it loads the page never reloads — you navigate between Dashboard, Surveys, Responses, Analytics, Contacts, Invitations, Email Templates, Themes, Integrations, Presets, and Settings using the left rail.

> Tip: press <kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd> anywhere in the admin to open the command palette. Type a survey title, a setting name, or an action to jump straight there.

## 2. Create a survey

Click **Surveys** in the left rail, then **New survey** in the top-right.

You'll be prompted for:

- **Title** — what your respondents see at the top of the survey.
- **Description** — optional preamble shown above the first question.
- **Category** — pick a Joomla category for organisation (optional).
- **Language** — defaults to your site's default content language.

Click **Create**. The builder opens with an empty survey scaffold.

## 3. Add your first question

The builder has five tabs along the top: **Builder**, **Design**, **Logic**, **Translations**, **Results**.

You're on Builder. The middle pane is your survey canvas; the right rail is the question-type palette. Drag any type onto the canvas, or click it to append.

For a quick start:

1. Drag **Short answer** onto the canvas. Type the question title, e.g. *"What's your name?"*.
2. Drag **NPS** below it. Title: *"How likely are you to recommend us?"*
3. Drag **Long answer** below that. Title: *"Tell us why."*

Each question has an Inspector panel (right side) where you can mark it required, add validation, change orientation, etc.

> The canvas saves every change as you go — there's no Save button to click for question edits.

## 4. Preview

Click **Preview** in the builder's top bar. A new tab opens with the survey rendered exactly as a respondent will see it. Resize the window to check mobile.

## 5. Style it

Click the **Design** tab. The left side picks a base theme; the right side lets you override the accent colour, fonts, and surface tones for *this* survey only. Themes ship in matched light + dark pairs — you can preview both with the toggle above the canvas.

If none of the themes feel right, you can create your own in **Themes** (left rail → Themes) and pick it here.

## 6. Publish

Click **Publish** in the top-right of the builder. The survey moves to the **Live** state and a public URL appears. Two ways to share it:

- **Public link** — copy from the Publish dialog; open in any browser.
- **Joomla menu item** — create a menu item of type *Community Surveys → Single Survey* and pick your survey.

Both routes hit the same `index.php?option=com_communitysurveys&view=survey&id=X` URL.

## 7. Collect responses

Take the survey yourself (in a private browser window so you're not seen as the admin). Then return to the admin → **Analytics**.

Pick your survey from the picker in the top-left. You'll see:

- **Overview** — total responses, completion rate, NPS, median time, drop-off, plus a responses-over-time chart.
- **By question** — per-question distribution charts; for free-text questions, the actual answers.
- **Segments** — completion status / duration breakdowns.
- **Cross-tab** — pick two questions, see how respondents combined them.
- **Responses** — the raw table; view any response, download as PDF, or export the whole set as CSV.

## 8. Invite people

If you want to send invitations rather than just sharing a link, go to **Contacts** (left rail), import a CSV or add contacts manually, optionally group them, then go to **Invitations → New campaign**:

1. Pick the survey.
2. Pick the contact groups or individual contacts.
3. Review the invitation email (the wizard shows a live preview; you can override the subject and body just for this campaign).
4. **Send invitations** — the system queues + dispatches one tracked email per recipient.

Each invited recipient gets a unique survey URL. From the campaign detail you can see who opened, started, completed, or bounced, and send reminders to people who haven't started yet.

## What's next?

You've built and shipped a survey. From here, branch into whichever feature matters most:

- **Conditional logic** — show/hide questions or skip pages based on earlier answers. See [Conditional rules](./conditional-rules-explained.md).
- **Translations** — translate your survey into any installed Joomla content language. See [Translating surveys](./translating-surveys.md).
- **Branding** — customise themes site-wide. See [Themes & customisation](./themes-and-customization.md).
- **Email templates** — rewrite invitation / reminder / receipt emails to match your voice. See [Email templates](./email-templates.md).
- **Integrations** — pipe responses into Slack, Google Sheets, Webhooks, AcyMailing. See [Integrations overview](./integrations-overview.md).
- **AI authoring** — let AI draft survey questions for you. See [AI features](./ai-features.md).

If you get stuck, the [FAQs](./community-surveys-faqs.md) cover the common questions.
