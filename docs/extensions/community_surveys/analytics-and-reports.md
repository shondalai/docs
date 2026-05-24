---
id: analytics-and-reports
title: Analytics & Reports
sidebar_label: Analytics & Reports
sidebar_position: 30
---

# Analytics & Reports

A five-tab analytics workbench scoped to one survey: **Overview**, **By Question**, **Segments**, **Cross-tab**, **Responses**.

Open via **Analytics** in the left rail, then pick a survey from the top-left picker.

This page documents every chart, breakdown, and export. For a feature-level introduction, see the [Admin tour](./admin-tour.md#analytics).

---

## The landing page

Open Analytics with no survey selected and you'll see a welcoming landing page:

- **Hero** — a personalised greeting and a one-line description of what the page does.
- **Recent surveys** — up to six one-click cards showing your most recent surveys with their response count and a sparkline trend. Click any card to jump straight into that survey's overview.
- **What you can do here** — a feature-preview grid (Overview / By question / Segments / Cross-tab / Responses) with one-line descriptions so newcomers know what each tab offers.

If your workspace has no surveys yet, the cards section disappears and a "Pick a survey to see analytics" hint shows centred.

---

## Overview tab

The default tab. Five KPI tiles + responses-over-time chart + per-question distribution snapshots.

### KPIs

- **Responses** — total count, all time. Not filtered by the visible date range.
- **Completion %** — share of responses in `complete` state.
- **Median time** — average time-to-complete across all completed responses.
- **NPS** — calculated when the survey has at least one NPS question. Composite when there are multiple.
- **Drop-off %** — share of responses that started but didn't complete.

### Responses over time

A line chart showing daily / weekly / cumulative response volume. Three modes via the toggle in the chart's top-right:

- **Daily** — one point per day in the date range.
- **Weekly** — sums into 7-day buckets.
- **Cumulative** — running total. Starts from your pre-window baseline (responses dated before the current range) so the y-axis reflects all-time totals at each point, not just in-window. This means a 30-day cumulative view on a survey with 200 prior responses starts the line at 200, not 0.

The date range is controlled by the **Range** button in the toolbar — clicks toggle between 7 / 30 / 90 days.

Hover any point on the chart for an exact (date, count) tooltip.

### Per-question snapshots

Below the timeline, a 2-column grid with one panel per question:

- **Choice / image / rank questions** — horizontal bar chart with answer label, count, and bar.
- **NPS / slider** — same bar chart, sorted appropriately (NPS by value 0–10, slider by frequency).
- **Grid questions** (matrix / rgrid / cgrid / likert / multirating / matching) — heat-shaded matrix with row labels, column labels, cell counts, and row/column totals.
- **Free-text questions** (short / long / rich / email / phone / date / geo / address / signature / file) — a one-line summary: "*N answers · open-ended*".

NPS questions get an extra badge with the calculated score.

---

## By Question tab

Drill into one question at a time.

Layout: question list on the left, detail panel on the right.

### Question list

Every question in the survey, in `sort_order`. Each row shows:

- Question number (Q1, Q2, …) and title.
- Answer count + question type ("12 answer(s) · radio").

Click a row to switch detail panes. Selected row is highlighted.

### Detail pane

What renders depends on the question type:

- **Choice / image / rank** — bar chart of every answer option's pick count.
- **NPS** — bar chart sorted by value, plus the NPS score breakdown (`+42 · 60% promoters · 18% detractors`).
- **Slider** — bar chart sorted by frequency.
- **Grid** — heat-shaded row × column matrix.
- **Free-text** — drill-down list of the actual answers (up to 100 most recent). Each entry shows the submitted value and the submission timestamp.
- **Signature** — rendered as the actual image (decoded from base64).
- **Geolocation** — coordinates as a clickable link to OpenStreetMap.
- **Address / Name** — fields auto-detected from the legacy pipe-separated storage and rendered in a friendly format.
- **File upload** — filename + clickable link.
- **Catch-all** — "N answer(s)" line for any question type that doesn't have a dedicated renderer.

The left pane scrolls independently from the right — useful for long surveys, so clicking a question at the bottom doesn't push the detail panel out of view.

---

## Segments tab

Side-by-side breakdowns:

- **Completion status** — bars for `complete`, `partial`, `abandoned`. Computed from each response's `state` column.
- **Time to complete** — bucketed: under 1 minute, 1–5 min, 5–15 min, 15+ min, plus "Did not complete" for responses with no completion timestamp.
- **Languages** — only renders when the survey has multi-language responses. Currently this requires the survey to be served in multiple languages and respondents to pick different ones.

Bar widths reflect raw counts (not percentages) so big segments dominate visually.

The top of the panel shows the total response count being analysed.

---

## Cross-tab tab

Pick two finite-answer questions and see how respondents combined them.

### Picker

Two dropdowns at the top: **Row** and **Column**. Both list every question on the survey that has a fixed answer set (radio / checkbox / dropdown / image / rank). NPS, slider, free-text, and grid questions don't appear — they don't have a finite answer catalogue to tabulate.

### Matrix

The matrix renders cell counts of `(row answer × column answer)`. Cells are heat-shaded — darker means more respondents. Row totals appear on the right, column totals at the bottom, grand total in the bottom-right corner.

Pre-seeds every (row, col) pair at zero so you can tell "no respondents picked this combo" from "no data captured".

Below the matrix, a one-line summary: "*42 respondent(s) answered both*".

### When it's useful

- "Did our happiest customers (NPS 9-10) come from a particular acquisition channel?" — but NPS isn't tabbable; use a derived 3-bucket categorical question instead.
- "How does product preference vary by region?" — region (radio) × product (radio).
- "What's the overlap between selected features?" — multi-select question on both axes.

---

## Responses tab

The raw table.

### List pane (left)

Paginated list of every response on the survey. Each row shows:

- **Status icon** — green check for complete, hollow circle for partial.
- **Respondent** — display name + Joomla username (or `r_<id>` for anonymous).
- **Started** — when the response was opened.
- **Status badge** — `Complete` (green) or `Partial` (grey).
- **Actions** — PDF download icon and Trash icon (per-row).

Click any row to load its full answers in the right pane.

The top of the list has a select-all checkbox; check any row to enable the bulk-action bar (Cancel / Delete selected) above the list.

### Detail pane (right)

The selected response's full answers + metadata.

Header: respondent avatar (initials), name, email, then a PDF download button on the right.

Below the header, a metadata grid (Status, Duration, Started, Survey).

Then the **Answers** section — each answered question rendered with the appropriate display:

- **Choice** — picked option(s) as filled pills.
- **NPS / slider** — visual scale with the picked value highlighted.
- **Grid** — row-by-row list with the picked column shown as a tag.
- **Free-text** — the actual text.
- **Signature** — the rendered image.
- **Geolocation** — the address (if present) plus a coordinates link to OpenStreetMap.
- **Address / Name** — friendly multi-line display, even for legacy pipe-separated storage.
- **File** — filename, click to open.

Unanswered questions show "*not answered*" greyed out.

### Bulk actions

Check one or more rows to expose:

- **Cancel** — clears the selection.
- **Delete** — permanent delete of every checked row. Confirmation dialog before action.

Delete cascades to the response's `response_details` rows and any integration logs that reference it.

### CSV export

The top-right of the toolbar (when on the Responses tab) shows an **Export CSV** button. One click downloads a CSV of *every* response on the survey, with:

- **Header row** — `response_id`, `survey_id`, `respondent`, `username`, `started`, `completed`, `status`, `duration_seconds`, then every question's title as a column.
- **One row per response** — metadata + every answer projected into the matching column.

Multi-value answers (checkbox / rank / grid) collapse to a `;`-separated string inside the cell. Grid answers come through as `row → col; row → col`.

Pasting into Excel / Google Sheets just works — the file ships with a UTF-8 BOM so non-ASCII characters survive.

### PDF download

Each response also has a per-row PDF download. The PDF carries the survey title, response metadata, every question + answer, and the brand-driven header/footer from Settings → PDF.

The exact same PDF service powers the per-response download from the standalone Responses page (left rail → Responses) and the receipt attached to the response-receipt email.

---

## Performance

For workspaces with very large response volumes (hundreds of thousands+), the per-question and segment charts can take a second or two on first render. After that, charts are React-cached and switching tabs is instant.

The CSV export runs in-process; for surveys with 100k+ responses you'll want to bump PHP's `max_execution_time` or run the export from CLI. Future work will move large exports to a background task.

---

## Tips

- **Range button is per-tab** — the Range setting on Overview doesn't affect the Responses or Segments tabs (those are always all-time).
- **Cross-tab needs ≥2 finite-answer questions** — if your survey is heavy on free-text, the Cross-tab tab will show "this survey has fewer than two questions with a fixed answer set."
- **Signature image too big?** — the inline render scales to fit; click for full-size.
- **Need a custom report?** — export CSV and pivot in your tool of choice. We don't have a custom-report builder; the CSV is the universal escape hatch.
- **Where's the old "consolidated report"?** — the public-facing consolidated report is still available; see [Showing consolidated report to users](./showing-consolidated-report-to-users.md). The admin's Overview tab is its replacement for admin use.
