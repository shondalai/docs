---
id: community-surveys-changelog
title: Changelog
sidebar_label: Changelog
sidebar_position: 24
---

# Community Surveys Changelog

All notable changes to Community Surveys will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
## [8.0.0] - 2026-05-24

### 🐛 Fixed
- Final fixes
- Fixed bugs
- Security issues part 4
- Security issues part 4
- Security issues phase 3

## [8.0.0] - 2026-05-24

**Major Release: New Survey Builder, Smarter Rules, Friendlier Admin**

Community Surveys 8 is a fresh build of the component, modules, and plugins. The survey builder, the admin pages, the public survey experience, and the rules engine have all been redesigned. Your existing surveys keep working after the upgrade and start picking up the new features as soon as you author them.

### What's new at a glance

- **AI-powered authoring.** Generate a complete survey from a short description, get answer suggestions for choice questions, fill in grid rows and columns, and translate a survey into any language with one click.
- **Ten ready-made themes** plus a new **Design** tab in the builder. Pick a theme, then fine-tune the accent colour, font pairing, corner radius, density, and surface tone for that specific survey.
- A new survey builder with two ways to author rules side by side: a **visual Flow graph** that shows where each answer leads, and a compact **Logic list** for editing rules quickly.
- A much bigger rules toolbox. You can now pre-fill answers, carry options forward, randomise choices, cap an option to N respondents, jump to named sections, run A/B experiments, score and segment respondents, validate across fields, send Slack and webhook alerts, queue follow-up surveys, auto-close, tag responses, and more.
- **Beautiful new emails** with a redesigned template system. Override any built-in email, edit subject and body, and your logo plus brand colours are wired in automatically.
- A new **Thank-you page** customisation panel with three modes (message, answer recap, consolidated report) and full control over the copy, icons, and call-to-action chips respondents see after submitting.
- A new **Integrations** screen with one-click setup for Webhook, Slack, Google Sheets, AcyMailing, and a new free-form Email Notification.
- Built-in **anti-spam** (honeypot, IP throttle, minimum completion time) and **quality flagging** for speeders and straight-line responses.
- A new **Demographics** question type that auto-captures respondent context (country, city, browser, OS, device, language, timezone, screen, referrer, UTM params) without asking the respondent anything. Surfaces as a breakdown panel on the Analytics overview and as `$demo.*` context fields in the rules engine.
- A cleaner **Analytics** screen with a quick-jump button from the survey list, and a redesigned **Responses** screen that shows when a respondent was disqualified and why.

### AI-powered authoring

Every screen in the builder where you'd normally type from a blank slate now has an AI helper. The work is done by a hosted assistant that returns suggestions you can accept, edit, or discard.

- **Build a survey from a description.** Tell the assistant what you want ("Onboarding feedback for a SaaS product, 12-15 questions, mix of NPS, multiple-choice, and free text") and you get back a fully-structured proposal: pages, questions, options, the lot. Review it in a diff-style modal, tick the items you want to keep, and they land on your canvas.
- **Suggest answer options.** Stuck on a multiple-choice question? Click the sparkle button next to the options list and the assistant proposes a set based on the question title.
- **Suggest grid rows and columns.** Same idea for matrix and grid questions. You type "Rate each product on these factors" and the assistant suggests both the rows (products) and the columns (factors).
- **Translate a whole survey.** Pick a target language and the assistant rewrites every question, option, description, and validation message into that language, keeping the structure intact. Translations live alongside the original so the survey can serve both audiences at once.
- **Translate answer presets.** Reusable preset lists (countries, satisfaction scales, etc.) translate the same way, so the work you do once flows through every survey that uses the preset.

The AI assistant runs against the Shondalai service. You stay in control: every AI result is shown before it's saved, you decide what to keep, and nothing reaches a respondent until you publish.

### Themes and design

Surveys ship with **ten ready-made themes**, each designed for a different tone and audience:

| Theme | Mood |
|-------|------|
| Swiss Sage (default) | Calm sage with a clean neutral surface |
| Ink Slate | Editorial neutral with a deep slate-grey accent |
| Terracotta | Warm ochre on a cream surface, softer for research |
| Indigo Editorial | Bold indigo accent on a tight neutral surface |
| Marigold Studio | Energetic amber for product feedback |
| Coral Bloom | Soft coral on a warm surface, friendly and inviting |
| Pacific Mist | Calm teal, suited to healthcare and wellness |
| Carbon Pro | Sharp crimson on a tight neutral surface |
| Midnight Plum | Premium violet for luxury and brand surveys |
| Forest Lab | Emerald with generous radii, modern product feel |

You can browse them on the **Theming** page, set one as the default, and create your own from scratch.

#### The new Design tab in the builder

Each survey has its own **Design** tab now. Pick a base theme, then customise it for that survey without touching the underlying theme:

- **Accent colour** picker.
- **Font pairing** picker (Inter Tight, Geist, Instrument Serif, Söhne, and others).
- **Corner radius** slider for the overall feel (sharp to soft).
- **Density** (compact, medium, airy) for how breathing-room is allocated.
- **Surface** (neutral or warm) for the page background.
- **Custom CSS** for the rare case where you need to override one rule.

The live preview on the right of the Design tab updates as you tweak. When you save, the survey's public form picks up the changes immediately.

### Email templates

The email side of the component got a full refresh. Templates are now organised around a shared base wrapper with brand variables (logo, colours, footer) wired in automatically, plus a content fragment per email type. The output looks consistent across every email Community Surveys sends and renders well in Gmail, Outlook (including older Outlook with the VML fallback), Apple Mail, and the popular webmail providers.

You'll find a dedicated **Email templates** screen in the admin that lists every email the component can send:

- Invitation
- Invitation reminder
- Response thank-you
- New response (to author)
- New survey (to site admin)
- Survey created (to author)
- Survey published (broadcast template)
- Survey closed (results summary)
- **Follow-up survey invitation** (new in v8, used by the follow-up rule)

For each template you can:

- See the shipped default and the current effective output side by side.
- Edit subject and HTML body, with the variable picker right above the editor so you don't have to remember every placeholder.
- Use Handlebars-style conditionals (`{{#if recipient_name}}...{{/if}}`) for sections that should only show in some cases.
- Preview with example data without sending a real message.
- Revert to the default if your override doesn't work out.

Brand variables (`{{site_name}}`, `{{primary_color}}`, `{{email_logo_html}}`, `{{footer_text}}`, etc.) are computed once per send so every template stays consistent with your settings.

### Thank-you page customisation

Right after a respondent submits, the **Thank-you** page is the last impression they take away. v8 gives that page its own builder tab with three modes and full control over the copy.

#### Three modes

- **Message.** A clean confirmation page with your headline, body copy, and a call-to-action. The simplest case.
- **User answers.** A recap of every answer the respondent just gave, so they can review what they submitted. Useful for forms that double as agreements or applications.
- **Consolidated report.** A live aggregate report showing how everyone's answers add up so far. Useful for polls and "live results" surveys. Access is gated by a one-shot key issued at submit time, so the URL can't be scraped.

#### Customisation panel

In the builder's **Thanks** tab you can author every part of the page:

- **Eyebrow** (the small label above the headline) and **Headline** copy.
- **Body** in auto mode (use the survey's thank-you message), custom mode (your own HTML), or none.
- **What's next chips** with icons. Pick from a small set (check, calendar, mail, lock, share, sparkles, clock, users), write a short line of text per chip, and arrange them.
- **Back-to-survey** and **Share** button labels.
- Toggles for the badge, response stats, what's-next section, action buttons, share buttons, and trust footer.

Every option is per-survey so different surveys can end with different post-submit experiences.

### Authoring surveys

#### Smarter question defaults
- **Pre-fill from a URL, an earlier answer, or the logged-in user's profile.** Open a question's *Advanced* tab and add one or more sources. The first one that has a value populates the field. Respondents can still type over the value.
- **Pipe answers into later questions.** Use `{{q3.label}}` to insert an earlier answer into a title, description, option label, or email. Supports a fallback like `{{first_name|there}}` so you never show an empty placeholder.

#### Smarter option lists
- **Carry options forward.** Show in question 6 only the options the respondent picked in question 4 (or hide them, for an "anything you missed?" variant).
- **Randomise option order** per respondent. The order is stable across reloads and resume-from-email, so the same respondent always sees the same arrangement.
- **Pin options to the end.** "Other" and "Prefer not to say" can be marked as *always last* even when the rest of the list is shuffled.
- **Quota cap on an option.** Once N respondents have picked it, the option disappears for everyone else. If two people race for the last slot, the server picks a winner and asks the other to choose again.

#### Smarter flow
- **Named page sections.** Give a page a short name (like `thanks-qualified` or `power-user-deep-dive`) and point a *skip to section* rule at it. The rule keeps working when you reorder pages.
- **A/B paths.** Half your respondents see flow A, half see flow B (or three-way with A/B/C). The split is stable per respondent, so resuming an email link lands on the same flow.
- **End early with a reason.** When a screening rule disqualifies someone, the reason you wrote shows up on the response list, in the response details, and as a column in the CSV export.

#### Scoring & segments
- **Hidden score variables.** Build a points formula visually: pick a question, multiply it, add another question, divide by a literal, and so on. Author as many scores as you need; later scores can reference earlier ones.
- **Segment buckets.** Turn a score into a named segment automatically. "0-6 → detractor", "7-8 → passive", "9-10 → promoter", and so on. Segments show up next to each respondent and become filters in Analytics.
- **Make a question required only when needed.** A "please explain" field becomes mandatory only when an earlier answer triggers it.

#### Validation
- **Cross-field validation.** "End date must be after start date." "Allocations must add up to 100." Compose the rule visually from two operands and a comparison. The check runs as the respondent submits, and runs again on the server so it can't be skipped.

### Sending alerts and queuing follow-up actions

When a response comes in, you can have a rule do more than route the respondent:

- **Send a notification** to a Webhook, Slack channel, AcyMailing list, or email address. Slack messages can use your own wording, and emails support pipe placeholders so the subject can read "VIP response from `{{q_5_email}}`".
- **Tag the response** with labels like `churn-risk` or `vip` and filter on them in Analytics later.
- **Queue a follow-up survey.** When a power user finishes a feedback survey, the next survey lands in their inbox automatically using a dedicated follow-up email template you can customise.
- **Auto-close the survey** when a goal is reached. "Stop accepting responses once we hit 500" or "close after business hours".

Side-effects always run on the server, so a respondent can't fiddle with the form to skip them.

### Time, locale, and device

Every rule's condition can also check the current context:

- **Time of day, day of week, deadline date.** Show a "talk to sales" question only on weekday business hours, or close a survey at midnight on a specific date.
- **Language and country.** Show a GDPR consent question only to EU locales, or swap option lists by language.
- **Device.** Hide a file-upload question on mobile, or show a mobile-only variant.
- **Response quality.** Reach for `$quality.speeder`, `$quality.straight_lining`, `$quality.honeypot`, `$quality.ip_throttle`, or `$quality.any` to flag, tag, or end the survey on suspicious submissions.

### Integrations

- **Webhook.** Post a JSON or form-encoded payload to any URL. Optional HMAC-SHA256 signing means receivers can verify the request really came from your site.
- **Slack.** Connect with an incoming webhook URL or a bot token. Messages use Slack's Block Kit so they look good in the channel.
- **Google Sheets.** Connect once via Google sign-in; new responses appear in the spreadsheet you choose. Field mapping lets you control which columns get which answers.
- **AcyMailing.** Add respondents to a list when a rule fires. No HTTP layer, no extra setup beyond picking the list.
- **Email Notification (new).** Send a free-form transactional email to any address (including `{{q_5_email}}` substitutions). Choose between an auto-generated answer summary or your own HTML.
- **Activity log.** Every integration call is logged so you can see what fired, when, and whether it succeeded. Failed deliveries retry automatically with a back-off and surface in the Activity tab if they exhaust their retries.

### Anti-spam and response quality

- **Honeypot field** rendered invisibly on the survey. Bots that auto-fill fill it; humans never see it. Responses that trip the honeypot are flagged.
- **Minimum completion time.** Set a per-survey "must take at least N seconds" guard. Responses faster than that are flagged as speeders.
- **Straight-line detection** for matrix questions. When every row gets the same answer, the response is flagged.
- **IP throttle.** When the same IP submits more than 10 responses to the same survey within an hour, the extras are flagged.

Flags don't reject responses by default. You see them in Analytics and can write a rule like "When `$quality.any = 1`, tag response with `review-needed`" or "When `$quality.honeypot = 1`, end the survey".

### Admin experience

- **Survey list.** New layout with a sparkline, status badge, response counter, and a one-click chart button that jumps straight to that survey's Analytics.
- **Responses screen.** Disqualified responses show a clear status badge and surface the reason inline. The CSV export carries a new `end_reason` column and a `disqualified` status value.
- **Email templates.** A dedicated screen lets you override any built-in template (invitation, reminder, response thank-you, follow-up, survey closed, etc.). Brand variables like logo and primary colour are wired in automatically.
- **Cold-load polish.** Opening the admin no longer flashes a black panel before the page paints. The mount area picks up your colour mode (light, dark, or auto) from the start.

### Public survey experience

- **Fluid width** layouts that scale across mobile and desktop without the cramped feel of the older responsive forms.
- **Per-survey design tokens** (colours, fonts, density, corner radius) apply consistently to the public form.
- **Three layouts** to pick from in the builder's *Design* tab: single page, multi page, or conversational.
- **Three Thank-you modes**: a custom message, a recap of the respondent's own answers, or a live consolidated report (gated by a one-shot key so URLs can't be scraped).
- **Save and resume** still works via a secure key, now with cleaner UX.

### Changed

- The component, modules, and plugins have all been rewritten. Some legacy modules and plugins that relied on old helpers are temporarily held back from the package until they're updated. Your surveys keep working without them.
- The admin survey list shows the new row layout with the analytics quick-link.
- The response detail panel now flips the status row to "Disqualified" and shows the reason in a callout when an end-rule fired.
- The admin dashboard picks up your light/dark/auto colour mode immediately on load.

### Fixed

- **Add Bucket** in the score and segment editor no longer disappears after autosave. The server was silently dropping empty-tag buckets, so a fresh bucket would vanish the moment you added it.
- The **admin dashboard flicker** between page load and the React mount is gone. The mount area paints the right colour from the start.
- Rules pointing at deleted options now show a clear "stale" pill so you can spot them, instead of looking unset.
- **Duplicating a survey** now carries the pages, page titles, and section slugs along with the questions and rules.
- Half-authored rules no longer break a save. Anything that looks malformed is collapsed to a safe placeholder you can finish later.

### Security

- **Side-effects run on the server.** Tag, quota, auto-close, notify, and follow-up rules never trust the client. They re-evaluate at submit time using the actual submitted answers.
- **Quota counts are race-safe.** Two people racing for the last slot can't both succeed. The server picks one winner and rejects the other with a friendly "this option just filled up" message.
- **Cross-field validation runs twice.** Once in the browser for instant feedback, and once on the server so a tampered form can't slip past the check.
- **Honeypot, IP throttle, and minimum completion time** all run on the server so they can't be bypassed by editing the page.
- **Webhook signing** with HMAC-SHA256, using the same `sha256=` prefix convention GitHub and Stripe use, so your receivers can verify each payload.
- **URL pre-fill values** are restricted to safe characters and a sensible length cap; the question's own validation still applies before the answer is saved.
- **Follow-up rules** can't target the survey they're attached to, so a runaway invite loop is impossible.

### Documentation

Seven new docs cover the rules engine end to end:

- [Rules engine overview](./conditional-rules-explained)
- [Answer manipulation](./rules-answer-manipulation): prefill, pipe, carry-forward, randomize, quota
- [Routing](./rules-routing): page sections, A/B paths, loop, disqualify
- [Scoring & segments](./rules-scoring): formula composer, buckets, conditional required
- [Validation & guards](./rules-validation): cross-field, sanity checks, anti-spam
- [Side-effects](./rules-side-effects): notify, contact list, tag, follow-up, auto-close
- [Context fields](./rules-context-fields): the full `$`-prefix reference

### Requirements

- Joomla 5.0+ or 6.0+ (unchanged from v7)
- PHP 8.1+ (unchanged from v7)
- MySQL 5.7+ or MariaDB 10.3+ (unchanged from v7)
- Shondalai Core Library 1.0+ (a one-time install bundled with the package)

### Upgrading from v7

- Install over your current version. The database upgrade runs automatically the first time you open the component after install.
- Your existing surveys, questions, rules, responses, contacts, invitations, and integrations are preserved. Legacy rules are translated to the new format on first read with no extra work.
- A handful of legacy modules and plugins are intentionally held back from the v8 package until they migrate. Surveys themselves don't depend on them.

---
## [7.0.18] - 2026-05-04

### 🐛 Fixed
- Issue with sending emails after survey
- Unable to delete multiple unique keys from admin

## [7.0.17] - 2026-04-29

### 🚀 Added
- New license management wizard

### 🐛 Fixed
- Fixed the file-attachment download link on the Result view going to the template's home page.
- Fixed completion/thank-you emails never being sent for guest respondents.
- Fixed file-upload answers showing only a filename on the result page.
- Relaxed access checks on the consolidated report to honor the `core.results` ("View Results") permission
- Fixed `mod_surveyresults` always reporting zero responses by populating `$data->responseCount` from the model.
- Fixed `mod_surveyresults` template referencing the unimported `SurveyHelper` class and the wrong layout path
- Fixed `mod_surveyresults` ("Community Surveys Consolidated Report") module producing a fatal error by adding the method to the site `ReportModel`
- Tighten security for the download folders with IIS hosts
- Fixed update sites URLs
- Unable to delete survey invitations
- Add missing language strings
- Dark mode enhancements

## [7.0.16] - 2026-04-05

### 🐛 Fixed
- Resolved untranslated strings
- Restored conditional rules after JSON import
- Displayed answer text instead of IDs after page reload

## [7.0.15] - 2026-04-02

### 🚀 Added
- Added a button to bulk assign contacts to a group

### 🐛 Fixed
- Fixed contact groups menu showing 0 contact groups in left navigation
- Fixed selected contact group not assigned when editing a contact
- Fixed contacts list showing empty group name
- Fixed conditional rule showing id instead of answer title
- Fixed contact id not saved with response when inviting contact groups

## [7.0.14] - 2026-03-30

### 🐛 Fixed
- Resolved issue preventing Google Sheets integration on specific webhosts

## [7.0.13] - 2026-03-26

### 🐛 Fixed
- Removed hardcoded language strings
- Resolved issue with starting survey when intro was enabled
- Enabled creation of private survey from frontend

## [7.0.12] - 2026-03-12

### 🐛 Fixed
- Fixed issue preventing survey editing from frontend

## [7.0.11] - 2026-03-10

### 🐛 Fixed
- Fixed issue where emails were not sent after users responded to the survey

## [7.0.10] - 2026-03-10

### 🚀 Added
- Added advanced filters to filter reports by questions

### 🐛 Fixed
- Fixed expiry date not set in email invitations
- Fixed error when opening survey form from the frontend

## [7.0.9] - 2026-03-08

### 🚀 Added
- Added option to force light or dark mode

### 🐛 Fixed
- Fixed continue button display when intro page was disabled

## [7.0.8] - 2026-03-07

### 🐛 Fixed
- Updated response count after deleting responses
- Saved first page responses when intro was disabled

## [7.0.7] - 2026-03-06

### 🐛 Fixed
- Resolved issue preventing survey editing after previous update

## [7.0.6] - 2026-03-06

### 🐛 Fixed
- Resolved error saving checkout value when mysql null dates were disabled
- Enabled survey loading when intro page was disabled

## [7.0.5] - 2026-03-05

### 🚀 Added
- Added button to view all text responses on the reports page

### 🐛 Fixed
- Removed duplicate cancel button on View Response page
- Enabled cancel button functionality on View Response page
- Resolved error for single survey menu item when intro is disabled
- Removed PHP notice and warning messages on the survey page

## [7.0.4] - 2026-02-17

### 🐛 Fixed
- Fixed issue where URL parameter question response was not saved

## [7.0.3] - 2026-02-16

### 🚀 Fixed
- Addressed survey response form pushing sidebar down
- Resolved reports not loading on some servers
- Fixed error in latest surveys module
- Corrected survey response failure with rules enabled

## [7.0.2] - 2026-02-15

### 🐛 Fixed
- Minor bug fixes

## [7.0.1] - 2026-02-13

### 🐛 Fixed
- Added missing language strings
- Unable to load survey after upgrade

## [7.0.0] - 2026-02-03

**Major Release: Complete Rewrite for Joomla 5/6**

This is a complete architectural rewrite of Community Surveys, modernizing the codebase for Joomla 5 and 6 compatibility with native APIs and eliminating the need for backward compatibility plugins.

### 🎉 Breaking Changes
- **Joomla 5/6 Native**: Complete rewrite using Joomla 5/6 APIs - no backward compatibility plugin required
- **Minimum Requirements**: Joomla 5.0+ or Joomla 6.0+
- **Modern Architecture**: PSR-4 autoloading, namespaced classes, dependency injection, and MVC Factory pattern
- **React Frontend**: Survey forms and admin interface rebuilt with React 18 and modern JavaScript (ES6+)

### ✨ Added

#### Core Features
- **AI-Powered Translations**: Integrated AWS Bedrock AI for automatic survey translation into 40+ languages
- **Enhanced Conditional Rules**:
    - Show/hide questions on the same page based on answers
    - Skip to specific pages dynamically
    - End survey with custom messages based on responses
    - Conditional rules now properly filter response reports
- **Advanced Question Types**: Full support for all question types including grids, sliders, ratings, and file uploads
- **Answer Presets**: Reusable answer sets with one-click application to questions
- **Question Library**: Save and reuse questions across multiple surveys

#### Integrations
- **Integrations Framework**: Comprehensive system to connect surveys with third-party services
- **Google Sheets Integration**: Automatically sync survey responses to Google Spreadsheets with OAuth 2.0 security
- **Webhook Integration**: Real-time data streaming to custom endpoints via HTTP POST/GET
- **AcyMailing Plugin**: Joomla 6 compatible plugin with tag support and shortcode updates

#### Reporting & Analytics
- **Advanced Reports Dashboard**: Interactive charts with Chart.js and real-time analytics
- **Detailed Response View**: Administrative interface for inspecting individual survey submissions
- **Enhanced CSV Export**: Configurable column selection and filtering options
- **PDF Reports**: Generate professional PDF reports with custom styling
- **Report Filtering**: Filter by date range, completion status, and custom fields

#### User Experience
- **Frontend Redesign**: "Swiss-inspired" minimalist design with premium look and feel
    - Responsive design optimized for desktop, tablet, and mobile
    - Smooth animations and transitions
    - Progress indicators for multi-page surveys
    - Dark mode support
- **Invitations Workflow**: Redesigned invite system with bulk email capabilities
- **My Responses**: User dashboard to view and manage their survey submissions
- **Continue Later**: Save progress and resume surveys with unique secure keys

#### Admin Interface
- **Modern Admin UI**: Compact, premium layout using Bootstrap 5 and custom CSS
- **React-Based Form Builder**: Drag-and-drop question management with live preview
- **Inline Editing**: Edit questions, answers, and pages without page reloads
- **Bulk Operations**: Manage multiple items efficiently with batch actions
- **Advanced Search**: Enhanced filtering with multiple criteria and saved searches

#### Developer Features
- **Service Layer Architecture**: Dedicated services for Email, PDF, Storage, and AI operations
- **API-First Design**: RESTful API endpoints for all operations
- **Shared UI Library**: `@shondalai/ui-commons` with 25+ reusable React components
- **Build System**: Modern npm-based build with `@shondalai/build-tools`
- **Type Safety**: JSDoc annotations for better IDE support

### 🔄 Changed
- **Database Schema**: Optimized tables with proper indexes and foreign keys
- **File Structure**: Reorganized following Joomla 5/6 standards with proper namespacing
- **Form Builder Interface**: Complete redesign with compact and modern layout
- **Response Storage**: Improved data structure for better query performance
- **Language System**: Enhanced multilingual support with AI translation integration
- **Email Templates**: Redesigned email templates with responsive HTML layout
- **Media Management**: Centralized media handling with the Storage service

### 🐛 Fixed
- **Conditional Rules**:
    - Questions not appearing in conditional rule dropdowns
    - Answer presets showing "[object Object]" instead of text
    - Rules not refreshing after adding/removing answers
    - Questions not appearing after creation until page refresh
    - Finalize rules showing questions on subsequent pages in reports
    - Skip-to-page rules not properly hiding skipped pages
    - Conditionally hidden questions appearing when they shouldn't
- **Response Reports**: Now correctly respect conditional rules and display only relevant questions
- **Question Form**: Fixed multiple issues with question editing and validation
- **File Uploads**: Improved reliability and error handling for file attachments
- **Date Handling**: Fixed MySQL null date issues across the board
- **Grid Questions**: Resolved display issues with radio and checkbox grids
- **Slider Questions**: Fixed value submission and display in reports
- **Translation Sync**: Questions now immediately reflect translated content
- **OAuth Callbacks**: Improved reliability with dual-channel communication (postMessage/Storage)
- **CSV Export**: Headers now appear at the top (not bottom) with proper encoding
- **Search Functionality**: Frontend search now correctly filters by survey title
- **Authorization Checks**: Enhanced security with proper permission validation

### 🔒 Security
- **CSRF Protection**: Enhanced token validation across all forms
- **Input Sanitization**: Comprehensive XSS protection with proper escaping
- **SQL Injection Prevention**: Prepared statements throughout the codebase
- **Access Control**: Granular permission checks for all operations
- **OAuth Security**: Secure token storage and refresh mechanisms

### 📚 Documentation
- Comprehensive API documentation for developers
- Updated user guides with screenshots for all features
- Migration guide from v6.x to v7.0.0
- Integration setup guides for Google Sheets and Webhooks

### 🎯 Performance
- Optimized database queries with proper indexing
- Lazy loading for improved page load times
- Reduced JavaScript bundle sizes with code splitting
- Caching strategies for frequently accessed data
- Efficient React component rendering

### ⚠️ Deprecations
- Legacy v6.x JavaScript libraries removed
- Old BC plugin compatibility layer removed
- Deprecated helper methods removed
- Legacy database queries replaced with Joomla 5/6 QueryInterface

### 📦 Dependencies
- Joomla 5.0+ or Joomla 6.0+
- PHP 8.1+
- MySQL 5.7+ or MariaDB 10.3+
- Node.js 18+ (for development)

### 🙏 Credits
- Complete rewrite and modernization by Shondalai Technologies
- UI/UX design inspired by premium Swiss aesthetics
- Community feedback incorporated throughout development

## [6.5.6] - January 15, 2026

### 🐛 Fixed
- Fixed issue with the content plugin

---

## [6.5.5] - January 10, 2026

### 🐛 Fixed
- Do not include unpublished responses in the CSV download

---

## [6.5.4] - January 5, 2026

### ✨ Added
- Upgrade modules and plugins for Joomla 6 compatibility

### 🐛 Fixed
- Fix for allowing same selections in matching question type
- Unable to delete the trashed responses
- Create survey page shows error when compat plugin is disabled
- Fixed issue with unauthorised json download

---

## [6.5.3] - December 20, 2025

### ✨ Added
- Add an option to allow multiple same selections in Match the Following question

---

## [6.5.2] - November 15, 2025

### ✨ Added
- Allow HTML in question answers

### 🐛 Fixed
- Fixed issue with generating custom reports
- Unable filter response status in CSV download

---

## [6.5.1] - October 5, 2025

### ✨ Added
- **Joomla 6 Compatibility Update** - Full support for Joomla 6
- **Custom Reports** - Generate custom reports using scheduled tasks

### 🔄 Changed
- Updated copyright headers

### 🐛 Fixed
- Unable to save 0 in textbox questions
- Fixed issues with PHP warnings
- Fixed issues related to dark mode

---

## [6.4.1] - March 2, 2025

### 🐛 Fixed
- Fixed database entry error
- Radio grid consolidated report do not show the question titles

---

## [6.4.0] - February 8, 2025

### ✨ Added
- Added button to close in progress responses

### 🔄 Changed
- Set default date values in the install script

### 🐛 Fixed
- Import survey json failed with error
- Unable to search survey titles on front-end search form
- Fixed issue with MySQL null dates

---

## [6.3.9] - November 29, 2024

### ✨ Added
- Update ChartJS library to latest version

### 🔄 Changed
- Fixed UX related issues

### 🐛 Fixed
- Unable sort by title on responses page
- CSV export header is added at bottom

---

## [6.3.8] - November 23, 2024

### 🐛 Fixed
- Unable to edit survey from front-end

---

## [6.3.7] - October 1, 2024

### 🐛 Fixed
- Fixed issue with CSV report download

---

## [6.3.6] - September 27, 2024

### 🐛 Fixed
- Updated Google sheets integration to allow latest APIs

---

## [6.3.5] - September 11, 2024

### 🐛 Fixed
- Fixed issue with loading survey on Joomla 4

---

## [6.3.4] - August 30, 2024

### ✨ Added
- Fixed issue with captcha plugins

---

## [6.3.3] - August 10, 2024

### 🐛 Fixed
- CSV Download file is not opening in Excel
- Fixed issue with report shown after response completion
- Fixed issue with loading JCE editor on page header question form

---

## [6.3.2] - August 6, 2024

### ✨ Added
- Allow 1000 responses to download in CSV report

### 🐛 Fixed
- Applying limit filter is limiting number of questions in CSV download report
- JCE Editor is not loading when composing questions

---

## [6.3.1] - July 8, 2024

### 🐛 Fixed
- Revert changes for PDF generation

---

## [6.3.0] - July 7, 2024

### ✨ Added
- **Send PDF Report** - Improved PDF generation
- **Refactored Response Form** - Better developer support for response form layout
- Improved print/pdf button on results page

### 🔄 Changed
- Renamed the buttons on survey form for better understandability
- Removed TCPDF support

### 🐛 Fixed
- Question customization body class does not apply to question body
- Fixed alignment of grid header on result page
- Answer selected for conditionally hidden question is not cleared
- Checkbox shown instead of radio in the grid question report

---

## [6.2.3] - May 26, 2024

### 🐛 Fixed
- Fixed the answer form layouts in survey builder page

---

## [6.2.2] - May 25, 2024

### ✨ Added
- Added support for handling failed emails in AcyMailing plugin

### 🐛 Fixed
- Answer placeholders in question titles does not show correct values
- Custom placeholder option does not work in textbox and textarea type questions
- Fixed issue with ordering email templates
- Fixed PHP warning with editor plugin
- Fixed margin in the address field response form

---

## [6.2.1] - March 23, 2024

### ✨ Added
- Added support for Rewardify Points
- Added options to show/hide individual fields in the Address question type

### 🔄 Changed
- Added missing language string

### 🐛 Fixed
- Fixed issue with slider question's last row border
- Fixed issue with smart search plugin
- Empty list is shown when the database option to allow null dates is disabled

---

## [6.2.0] - December 2, 2023

### ✨ Added
- **Answer Presets** - New feature for bulk import answers
- New question option to customize custom answers with regular expressions
- Do not show already selected options in matching question type subquestions

### 🐛 Fixed
- Create component specific language strings for Cancel, Save and Previous buttons
- Fixed issue with same color shown with multislider consolidated report charts
- Fixed the margin of batch button on admin toolbar

---

## [6.1.1] - September 26, 2023

### 🐛 Fixed
- Fix for install script failing

---

## [6.1.0] - September 24, 2023

### ✨ Added
- **Joomla 5 Support** - Breaking Change: Added support for Joomla 5

### 🔄 Changed
- Breaking Change: Removed legacy layer for Joomla 3

---

## [6.0.11] - September 9, 2023

### 🐛 Fixed
- Unable to install the package on older MySQL databases
- Slider question tooltips overflow screen border on mobile devices

---

## [6.0.10] - August 14, 2023

### 🐛 Fixed
- Unable to install the extension when using MySQL 5.5

---

## [6.0.9] - August 10, 2023

### 🐛 Fixed
- Fixed issue with installer

---

## [6.0.8] - August 8, 2023

### ✨ Added
- Ignore survey redirect URL if there is a conditional rule to end survey with custom message

### 🔄 Changed
- Few performance improvements with report queries

### 🐛 Fixed
- Fixed issue with loading survey with Rich Text Editor question type
- Fixed issue with PHP7 function call
- Fixed issues with AcyMailing plugin

---

## [6.0.7] - July 19, 2023

### ✨ Added
- New option to show number textbox for answers in the sliders question type

### 🐛 Fixed
- Fixed JavaScript error on responses list page
- Fixed issue with responding to survey using global survey URL
- Question types toolbar links are in dark color on Joomla 3 surveys form

---

## [6.0.6] - June 27, 2023

### ✨ Added
- New option to restrict maximum responses per user and per survey

### 🐛 Fixed
- Fixed JavaScript error when google charts not loaded on the report page

---

## [6.0.5] - June 4, 2023

### 🔄 Changed
- Do not show survey title on the survey responses list items to save space
- Move ID & Status columns on responses list report to front

### 🐛 Fixed
- Fixed issue with database error message

---

## [6.0.4] - May 23, 2023

### 🐛 Fixed
- Responses menu page in administrator does not show contact name
- Fixed finder plugin issue in J4.3
- Fixed acymailing error on manual send
- Fixed installer bugs when upgrading from older versions
- Fixed issue with CSV file creation of large survey results
- Invite button do not give visual feedback when clicked and causing multiple clicks

---

## [6.0.3] - April 25, 2023

### ✨ Added
- Adding AUTHOR_NAME placeholder for invitation email subject

### 🔄 Changed
- Replaced JFile/JFolder deprecated wrappers with respective file system functions

### 🐛 Fixed
- Fixed issue with copy function of survey
- NPS report is not scaled properly on print to PDF report
- Fixed issues with mysql zerodate sqlmode

---

## [6.0.2] - April 13, 2023

### 🐛 Fixed
- Fixing issue with empty invitation email body

---

## [6.0.1] - April 12, 2023

### ✨ Added
- Adding AUTHOR_NAME tag in the invite email templates

### 🔄 Changed
- Updated label of Hide Template option
- Add better name to contact groups filter dropdown on invite page
- Show Community Groups tab on Invite page only if relevant extension installed
- Use global list limit by default on the contacts listing section of invite page

### 🐛 Fixed
- Clear the contacts info in the modal form after saving them
- Fixed issue with filters on consolidated report
- Fixed bug with creating new survey on a fresh installation (string mysql)
- Removed extra space below the introtext

---

## [6.0.0] - April 2, 2023

### ✨ Added
- **Login Redirect** - Redirect users to login page if a non-logged in user access My Surveys or My Responses pages
- Add Trash button on My Surveys listing page
- Attach PDF response to thank you mail
- New option to restrict maximum allowed invitations per survey
- Adding button to trash/delete email templates
- Adding a button to go back to languages list from translations form page
- Adding support for inviting individual contacts in the invite contact groups page
- Adding support for trashing/deleting surveys from My Surveys page
- Adding support for searching surveys from My Surveys page
- Show already uploaded file name in the File Upload question type when user navigate to previous page

### 🔄 Changed
- Adding icon to the export link on My Surveys page

### 🐛 Fixed
- Fixed issue with assigning contacts from front-end
- When marker is dragged the map is also getting dragged in Location type question
- Survey validation error element has invalid HTML markup
- Hide the start survey button when the user already took survey and error is shown
- Wrong name used in responses list header for response status column
- Use locale supported date format for the dates on invite page URLs section
- Fixed Javascript error on invitations page
- Removed redundant "Show Notice" option
- Remove redundant buttons on the backend responses listing page
- Finder plugin causing error
- Fixed error message shown when no surveys exist
- Fixed typo in email templates
- Fixed UX issues with invite pages on bootstrap 5 layout
- Fixed PHP notices on translations page

---

## [5.9.6] - March 2, 2023

### 🐛 Fixed
- Fixed error on multilingual site with no associations defined

---

## [5.9.5] - March 1, 2023

### 🐛 Fixed
- Editor is not loading after saving question

---

## [5.9.4] - February 27, 2023

### ✨ Added
- Show new question title help in placeholder

### 🔄 Changed
- Code cleanup

### 🐛 Fixed
- The consolidated report shows error when there are no choice questions in the survey
- Site throws error when CjLib component is uninstalled
- Fixed issue with advanced filter in consolidated report page
- Fixed error shown on new installation without any categories

---

## [5.9.3] - February 5, 2023

### 🐛 Fixed
- Missing font causing errors when creating pdf response
- Form layout menu shows error when SEF is disabled
- Consolidated report filters are not shown for surveys with large number of questions
- Removed unused language strings

---

## [5.9.2] - November 7, 2022

### 🐛 Fixed
- Fixes for PHP 8.1 compatibility
- Admin surveys listing batch modal cannot be closed with close button
- Image type question breaks result page layout on bootstrap5 layout
- Fixed issue with Download PDF button does not work when filter rules are empty
- Fixed issue with sliders validation error is showing for multiple sliders
- Cannot use survey original description without processed by content plugins

---

## [5.9.1] - October 9, 2022

### ✨ Added
- Added support for PHP 8.1

### 🔄 Changed
- Removed unused options and language strings

### 🐛 Fixed
- Fixed error shown while editing survey on Joomla 3.10.x
- Consolidated report do not load properly when only NPS question present in survey
- Question customization options are not imported using JSON import file

---

## [5.9.0] - July 30, 2022

### ✨ Added
- **Privacy Integration** - Adding integration with Joomla privacy module

### 🔄 Changed
- Removing redundant save as copy button in favor of import button
- Increase the records limit of CSV report downloaded from dashboard page to 500

### 🐛 Fixed
- Tags are not saving in Joomla 3.10 or later versions
- Survey import fails when the category id is empty
- Fixed unclosed HTML tag in NPS question
- Cannot take survey when the survey shown with Survey Form Module
- Page shows error when the component redirect to login/any page
- Added tfoot on Joomla3 admin list screens for consistent look
- Fixed issue with saving new translation language
- Fixed layout issue with backend responses list page

---

## [5.8.3] - May 7, 2022

### 🔄 Changed
- Adding content encoding to the exported CSV file

### 🐛 Fixed
- Fixed issue with sliders question values not saved if the user does not move the slider
- Fixed the slider question form fields does not show with proper styles in bootstrap5 layout
- Text answers with value 0 are not saved in the response
- Fixed issue with value 0 not showing on the response report
- Consolidated report shows text answers of in-progress responses
- Multislider CSV export does not produce correct values
- Survey selection modal dialog does not show correct survey title

---

## [5.8.2] - March 26, 2022

### 🐛 Fixed
- CSV Download timed out for very large sets of data (no limit)
- Advanced filter do not work after applying filter

---

## [5.8.1] - January 28, 2022

### 🐛 Fixed
- When Redirect URL is used, the survey does not complete
- Fixed issue with showing CSV report for Multi-Input question type
- Fixed issue with single survey menu selection modal in Joomla3
- Single survey menu item is not editable

---

## [5.8.0] - January 14, 2022

### ✨ Added
- **Multiple Text Boxes** - New question type for multiple text inputs
- Added new RESPONDER_NAME tag in email templates

### 🐛 Fixed
- Choose Different Report button does not work on backend in Joomla4
- Fixed layout display issue of invite contacts page on bootstrap5
- Fixed issue with survey report module do not show on Joomla 4
- Fixed issue with consolidated report do not show to guest users
- Editor button plugin does not open correct modal window
- Fixed issue with survey selection modal in Single Survey menu item

---

## [5.7.4] - December 18, 2021

### 🐛 Fixed
- Fixed issue with content plugin

---

## [5.7.3] - December 1, 2021

### 🔄 Changed
- Small performance improvements with the content plugins

### 🐛 Fixed
- Unable to export survey to json file from front-end
- Fixed issue with loading survey in an article using content plugin

---

## [5.7.2] - November 28, 2021

### 🐛 Fixed
- Data labels values are incorrect on the slider question report
- The charts shown on Slider question consolidated report are too small
- The charts shown on Grid question consolidated report are too small

---

## [5.7.1] - November 24, 2021

### ✨ Added
- New option to send email notification to the email address in response submitted to the Email type question

### 🔄 Changed
- Show percentage on data labels shown on the consolidated report charts

### 🐛 Fixed
- Fixed issue with save button on email template form
- Show reports & invite links only to survey author and administrator
- Answers in ranking question report are not ordered properly
- Consolidated report does not summarize single slider responses

---

## [5.7.0] - October 21, 2021

### ✨ Added
- **Google Sheets Integration** - Sync new responses to Google Sheets
- Added new option to show/hide extended options tab on front-end form

### 🐛 Fixed
- Fixed issue with unpublish/trash links on front-end page not working
- PHP warning message shown when editor plugin is enabled
- Fixed issue with tags field does not show correctly on the front-end

---

## [5.6.7] - September 20, 2021

### 🐛 Fixed
- Removed unused options from category list menu item
- Fixed issue with the error when using category list menu item
- Fixed issue with tags field does not show correctly on the front-end

---

## [5.6.6] - September 5, 2021

### ✨ Added
- New "Default value" option for Calendar type question
- New option (global and survey) to control the response workflow

### 🐛 Fixed
- Survey creation form do not open when editor button is published
- Community Surveys - Surveys plugin does not show user groups list in the plugin configuration
- Fixed select box appearance in matching question (on bootstrap5)

---

## [5.6.5] - August 24, 2021

### ✨ Added
- Added new "Body CSS Class" option in question edit form

### 🐛 Fixed
- Fix for Field CSS Class option does not apply to bootstrap3/4 layout
- Fixed issue with question title class option not applied
- Min/Max select select boxes appear as textbox in bootstrap5 form

---

## [5.6.4] - August 19, 2021

### ✨ Added
- **Export/Import** - Export surveys as json file and import json export files

### 🐛 Fixed
- Fixed layout issues with question options
- Unable to save Name question response if title field is hidden
- Fixed styling in admin dashboard on Joomla 4
- Import button is non-responsive on Joomla 4
- Hide in report option do not hide question in response result report

---

## [5.6.3] - July 21, 2021

### 🔄 Changed
- Display tweaks with Bootstrap 5 layout reports pages

### 🐛 Fixed
- Fixed issues in opening accordion tabs in front-end invite page (bs5)
- Fixed issues with dropdown on the front-end reports page with bs5
- Unable to print or download individual response pdf

---

## [5.6.2] - July 18, 2021

### ✨ Added
- **Joomla 4 RC 4 Support** - Added compatibility for Joomla 4 RC 4

### 🔄 Changed
- Added proper spacing below the blocks on advanced search page
- PHP minimum version required for Joomla 4 is updated to 7

### 🐛 Fixed
- Category page shows error when accessed through menu
- Error shows when trying to create single survey menu item
- Breadcrumbs for single survey menu item do not show menu alias
- Question types list on the left sidebar are not showing properly on IE
- Editor survey button do not work on front-end editor

---

## [5.6.1] - May 15, 2021

### ✨ Added
- New import & export survey buttons in My Surveys page

### 🐛 Fixed
- Consolidated report text response includes trashed responses

---

## [5.6.0] - May 9, 2021

### ✨ Added
- Added two new options in Map Location question type to accept default latitude and longitude values

### 🔄 Changed
- Redirect user to the survey redirect URL if the survey URL is opened after completing the response

### 🐛 Fixed
- Response is not saved when survey is embedded in an article
- Location map does not show marker groups in colored groups
- Map Location responses are not available in the CSV Report
- Grid charts shows wrong labels in the chart legend
- Charts in sliders consolidated report shows smaller in size
- Grid report charts show smaller in size
- Star rating is not selectable on mobile devices
- Preview survey button on form page is not working in backend

---

## [5.5.12] - March 25, 2021

### ✨ Added
- **PHP 8 Support** - Added support for PHP 8
- **Bootstrap 5 Layout** - Added new layout to support Bootstrap 5 & Joomla v4 Beta 7
- New option to configure show/hide chart data labels

### 🐛 Fixed
- Consolidated reports charts do not display with special characters
- Single survey menu item do not show survey title on browser title bar

---

## [5.5.11] - February 20, 2021

### ✨ Added
- Added batch invitation reminder feature in survey reports page (Invitations)
- Added data labels on doughnut charts

### 🐛 Fixed
- Slider question report not showing on consolidated report

---

## [5.5.10] - February 13, 2021

### ✨ Added
- Added new question option to customize the HTML field CSS class name

### 🔄 Changed
- Show answers in same order as they are added to avoid confusion

### 🐛 Fixed
- View all text answers popup do not work if dates are in wrong format
- Print/PDF button shows 404 error when the advanced filter is applied
- Charts are not displayed properly in the print window
- The survey level options are not effective when showing survey using content plugin

---

## [5.5.9] - January 26, 2021

### ✨ Added
- **ChartJS Integration** - Replacing Google charts with ChartJS in consolidated report
- New choice for "Show Report" option to show consolidated report after user completing the response
- Export survey invitation URLs in a file from invite page

---

## [5.5.8] - January 23, 2021

### ✨ Added
- New invitations page to see all invitations sent via invitations page

---

## [5.5.7] - January 19, 2021

### 🐛 Fixed
- Single page survey is closed only after second attempt

---

## [5.5.6] - January 18, 2021

### 🐛 Fixed
- Colors in pie and bar charts do not match in consolidated report

---

## [5.5.5] - January 14, 2021

### 🐛 Fixed
- Unable to select the marker on the location map

---

## [5.5.4] - January 4, 2021

### ✨ Added
- **OpenStreetMaps Support** - Added support for OpenStreetMaps for location type question
- Added new question customize option to show/hide description in report

### 🐛 Fixed
- When custom answer is enabled, the validation not works properly

---

## [5.5.3] - November 29, 2020

### ✨ Added
- Added css class names to survey result page
- Added css class names to question and description blocks

### 🐛 Fixed
- Show report option of the question is disabled by default
- Search function shows error when searching with 2 characters
- All image checkbox answers are not saved

---

## [5.5.2] - October 30, 2020

### 🐛 Fixed
- The installer failed to create tables when null dates are not allowed

---

## [5.5.1] - October 18, 2020

### 🐛 Fixed
- Slider report do not show on consolidated report

---

## [5.5.0] - October 11, 2020

### ✨ Added
- **Privacy Plugin** - New plugin to integrate with Joomla Privacy framework
- All questions and answers as a variable for e-mail template
- New conditional rule outcome - Finalize survey with custom end of survey message
- Added new option to switch to modern routing in Joomla 3.9.x
- New option in survey results module to show/hide custom text answers
- **AcyMailing 6 Support** - Added support for AcyMailing 6
- Show answers report of choice questions sorted by number of votes

### 🔄 Changed
- Changed the zero date format to NULL dates for future compatibility

### 🐛 Fixed
- Missing file type customization option of file upload question in bootstrap 4 layout
- Disallow the users to take survey if the access is not allowed
- JCE editor do not load when the questions loaded on the form page
- Translations of question title does not accept HTML tags

---

## [5.4.9] - August 12, 2020

### 🐛 Fixed
- Unable to submit mandatory checkbox question when using bootstrap3 layout
- View all Responses button on Consolidated Report Module is not working

---

## [5.4.8] - July 18, 2020

### 🐛 Fixed
- Unable to complete mandatory question which has custom answer

---

## [5.4.7] - July 10, 2020

### 🔄 Changed
- Joomla 4 Beta 2 support added

### 🐛 Fixed
- Preview modal do not show close button on front-end when using bootstrap4 layout

---

## [5.4.6] - June 21, 2020

### 🐛 Fixed
- End of survey response report do not show sliders result
- Fixed css issues with choice question result

---

## [5.4.5] - June 20, 2020

### 🐛 Fixed
- Unable to start survey when using IE 11

---

## [5.4.4] - June 10, 2020

### 🔄 Changed
- Joomla 4 beta support

### 🐛 Fixed
- Checkbox answers are not saved when custom answer is enabled

---

## [5.4.3] - June 5, 2020

### 🐛 Fixed
- Questions form submit automatically when a chat application loaded on the same page

---

## [5.4.2] - May 31, 2020

### 🐛 Fixed
- Slider questions results are not showing correctly

---

## [5.4.1] - May 16, 2020

### ✨ Added
- Added support for AcyMailing 6

### 🔄 Changed
- Custom answer should be enabled only by selecting checkbox/radio in choice type questions
- Fallback to default layout when layout override file not found

### 🐛 Fixed
- Contact name is not shown in consolidated report custom answers when the respondent is a contact in contact group
- Applying filter in consolidated report redirect page back to home

---

## [5.4.0] - March 20, 2020

### ✨ Added
- **Clickable Images** - Show images in Image type questions as clickable images
- Added new filter to filter the translations based on its type
- **Reminder Emails** - New feature to send remind mail to complete the pending survey
- Show asterisk icon beside the question title if the question is marked as mandatory
- Show datetime picker in the language of the survey being shown
- New option to hide selected question from showing in the survey results/reports
- Allow customizing title and description CSS classes for page header question
- **Cancel Button URL** - New option to customize cancel button URL
- Allow a translation to be deleted by entering empty value

### 🔄 Changed
- Removed unused scripts to improve performance

### 🐛 Fixed
- Fixed the conflict with adminForm element name with other extensions
- Calendar labels are not translated in the survey language
- No validation message shown when all questions in mandatory grid question are not selected
- Validation error does not go away after selecting mandatory value in select boxes
- Translations are not deleted when the question is deleted
- Translations not shown on listing page when using language switcher module
- Empty title is shown on listing page when the title is not translated in the language
- Data from survey rules and tracking tables are not cleared when permanently deleting the survey
- An extra empty page is created when importing a survey from xml file
- Fixed a case where registered users unable to respond to survey
- Name field in result page do not show correctly when using bootstrap3/bootstrap4 layout
- Survey results module do not show all charts

---

## [5.3.4] - January 11, 2020

### ✨ Added
- **URL Parameter Question** - New question type - URL Parameter (Hidden)

### 🔄 Changed
- Show validator message as soon as a field is changed

### 🐛 Fixed
- Calendar box shows on last question when there are multiple calendar questions on the survey page
- Rating widget do not shown when using content plugin to display survey

---

## [5.3.3] - January 3, 2020

### ✨ Added
- Added new sef tag for lang url parameter in language translations

### 🐛 Fixed
- Surveys listing page do not show the translation of titles and descriptions
- Unicode urls are not created when saving the items
- Calendar box shows on last question when there are multiple calendar questions on the survey page

---

## [5.3.2] - November 21, 2019

### ✨ Added
- Show invited contact name in responses listing and csv download

### 🐛 Fixed
- Unable to download csv file when redirect to reports from invite page

---

## [5.3.1] - November 5, 2019

### 🐛 Fixed
- Fixed issue with the input box in calendar question

---

## [5.3.0] - October 16, 2019

### ✨ Added
- **SQL Select Question** - New question type to select answers using SQL query
- **Map Location Question** - New question type to select location on the Google map
- New option to limit max number of characters in text fields
- **Multisliders** - New multisliders feature for sliders questions
- Support to restrict max points selected for multisliders
- Support for slider question in pdf report attached in email
- Added 6 different themes of sliders
- Added icons to the survey navigation buttons
- Added new module positions (see documentation for updates)
- **Sociable Support** - Added integration with Sociable

### 🔄 Changed
- Joomla 4 alpha 11 compatibility updates

### 🐛 Fixed
- Calendar field do not show when clicking on the button
- Conditionally hidden questions are not shown in pdf and results page
- Question description cannot be saved when using TinyMCE editor
- Added missing language string for EasySocial user points setup
- Ranking question orders consolidated report items in incorrect order
- XML export of survey does not include question customization options

---

## [5.2.2] - September 8, 2019

### 🐛 Fixed
- Survey translations table missing column and causing error
- Joomla 4 alpha 11 compatibility updates

---

## [5.2.1] - August 30, 2019

### 🐛 Fixed
- Grid questions shows duplicate answers in mobile view

---

## [5.2.0] - August 26, 2019

### ✨ Added
- **Multi-Language Support** - Added multi-language support for the surveys

### 🐛 Fixed
- Date field does not work in the backend question edit form
- Users with access to administration access cannot download csv report

---

## [5.1.8] - August 13, 2019

### 🐛 Fixed
- NPS question result is not exported in CSV file
- Last question of the CSV report is not exported correctly
- Questions in csv report are not sorted based on pages order

---

## [5.1.7] - August 11, 2019

### ✨ Added
- Added Sociable support

### 🔄 Changed
- Stylize radio buttons and checkboxes on all types of templates
- Removed Google+ references

### 🐛 Fixed
- Hidden questions results are not shown on admin reports page
- Hover on elements with tooltips disappear if mootools loaded on page
- PHP warning message shown in response result page
- Custom answers are not added to CSV report file
- Editor button plugin do not respond when selecting survey

---

## [5.1.6] - June 22, 2019

### 🐛 Fixed
- Required flag do not work with matching type question
- Conditional rules do not work with text boxes
- Star rating values are not shown in the response details
- Previous button is not shown when intro disabled and retaking survey

---

## [5.1.5] - June 15, 2019

### 🐛 Fixed
- Custom answer given in ranking questions is not saved
- Unable to continue with response when the page has multirating type questions

---

## [5.1.4] - June 14, 2019

### 🐛 Fixed
- Print to PDF takes too much server memory, switched to browser side print to PDF option
- Multiple language categories are not shown on front-end
- Radio grid question headers are not aligned properly
- PHP warning message shown on survey results module

---

## [5.1.3] - June 2, 2019

### 🔄 Changed
- Joomla 4 alpha9 support

### 🐛 Fixed
- Error while saving single survey menu item
- Strip html tags of introtext in surveys listing

---

## [5.1.2] - May 8, 2019

### ✨ Added
- Added options to configure min/max dates for calendar question
- Added new option in Name field to hide Title part of the name
- CSV report download now shows grid questions in separate columns

### 🐛 Fixed
- Editor is not loading on questions form when loading pages
- Checkbox grid answers are not saved when using bootstrap 4 layout
- Fixed css issues with bootstrap 4 layout
- NPS question type mandatory flag is not working
- Response page stuck after submitting answers when no sortable fields exist on the form
- Content plugin does not show survey description
- Survey description shows empty text
- Editor button to insert survey shortcode is not working
- Front-end consolidated report do not show question filters

---

## [5.1.1] - March 15, 2019

### ✨ Added
- **Mobile Radio Grid** - Radio Grid type question is upgraded to support mobile view
- Added a new option to customize allowed file types at question level in the file upload question type

### 🔄 Changed
- Updated DateTime picker control with a better plugin

### 🐛 Fixed
- The validation messages do not hide after moving to next page
- Custom answer entered in the grid question is not showing in the result page
- Edit does not load all buttons after saving the question
- Captcha cannot be validated when guest users taking survey
- Backend responses listing does not show correctly on Joomla 4
- Advanced filter do not work when there are no choice type questions
- Ranking question answers are duplicated on consolidated report
- Export CSV downloads only first 20 rows

---

## [5.1.0] - February 16, 2019

### ✨ Added
- **Styled Form Controls** - Added support for FontAwesome/Bootstrap styled Checkboxes and Radio buttons in the response form
- New option in Surveys plugin to send survey notification to a custom list of users
- New option in Surveys plugin to send response notification to a custom list of users
- New survey option to send email notification about the new response to custom email ids
- Added link to the changelog of the component in the dashboard page
- Added new option to customize multirating question rating hints

### 🔄 Changed
- Changed the help text of the single survey menu item
- Updated copyright year

### 🐛 Fixed
- Private survey URL lost survey key after user login redirect
- Color of responses count on the consolidated report is too dark when dark theme is selected
- Wrong placeholder text shown in start/end date filters in the response page
- When filtering on the date in responses page, DB error is thrown
- Latest available version is not showing on dashboard

---

## [5.0.8] - December 19, 2018

### 🐛 Fixed
- Unable to save surveys in Joomla 3

---

## [5.0.7] - December 18, 2018

### ✨ Added
- **Response Comments** - New feature to add comments to responses from backend reports
- Add survey title to the reports pages

### 🔄 Changed
- Redirect to the previous page when the cancel button is clicked on reports
- Replaced RuntimeException with Exception

### 🐛 Fixed
- Unexpected quote character shown after image radio answers
- Default layout does not show questions edit form

---

## [5.0.6] - November 7, 2018

### 🐛 Fixed
- Unable to change the min/max selections option in Image Checkbox question type
- Conditional rule is not working to skip to a page when the question is unanswered
- Response report shows answers of name type question with "|" names separator

---

## [5.0.5] - October 7, 2018

### 🐛 Fixed
- Free text responses are not shown when filters are applied

---

## [5.0.4] - October 5, 2018

### 🐛 Fixed
- Hotfix for v5.0.3, the corrupted package file

---

## [5.0.3] - October 4, 2018

### 🐛 Fixed
- Component cannot be loaded when using Joomla 3.6.5
- Preview questions page shows the same questions multiple times
- Consolidated report does not show custom answers when the filter is applied

---

## [5.0.2] - September 21, 2018

### 🐛 Fixed
- Consolidated report shows error when applying filters
- The total number of responses shows on question header of the consolidated report does not match with actual numbers
- No spacing between admin links on front-end survey listing

---

## [5.0.1] - September 17, 2018

### 🐛 Fixed
- PDF report of the responses contains empty results

---

## [5.0.0] - September 16, 2018

🎉 **Major Release** - Complete rewrite for Joomla 4 compatibility!

### ✨ Added
- **Joomla 4 Compatibility** - Full rewrite of code for Joomla 4 support
- **Bootstrap 4 Theme** - New Bootstrap 4 based layout/theme
- **Modern Router** - New router with remove IDs capability
- **Thank You Email** - New email type to send thank you email to users after responding to survey
- Send notification emails to guest users based on name and email question type responses
- Redirect guest users to the login page when they access report pages
- Hide questions in report page which are skipped with conditional rules
- Click on the table cell selects radio/checkbox in grid-type questions

### 🔄 Changed
- Added custom class names to all question blocks in response and reports pages
- Unauthorised guest users should redirect to login page when trying to access the survey
- Applied bootstrap styling for textarea form controls on the response page

### 🐛 Fixed
- Multiple response restrictions cannot be removed
- TextArea question type box width is not automatically adjusted
- Response form go to next page only when clicking continue button two times when the form contains freetext type questions
- PDF response shows all questions which are hidden with conditional rules
- tcpdf library throws an error in PHP 7
- Email notifications contain non-SSL URLs
- Content plugin executing other content plugins for survey description
- Captcha loading is failed
- Added missing language string
- User response report do not hide questions hidden with conditional rules
- Modified by username do not show login name

---

## Version History (Legacy)

For older versions prior to 5.0.0, please refer to the [archived changelog](./archived/community-surveys-changelog-legacy.md) or contact support.

---

**Website:** https://shondalai.com/products/community-surveys/  
**Documentation:** https://docs.shondalai.com/community-surveys/overview

