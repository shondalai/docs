---
id: conditional-rules-explained
title: Conditional Logic & Rules Engine
sidebar_label: Rules Engine Overview
sidebar_position: 21
---

Community Surveys ships with a structured rules engine that goes well beyond "skip to page". Every rule has the same shape: **WHEN** a condition is true, **THEN** an action fires. The catalogue of actions covers everything from prefilling answers to running A/B experiments, throttling bots, and emailing a Slack channel when an NPS detractor submits.

This page is the index. Each rule category has its own deep-dive doc; bookmark the ones that match your survey style.

---

## What you can do

A rule is `WHEN <condition> THEN <action>`. The catalogue:

### Answer manipulation [(details)](./rules-answer-manipulation)

| Feature | What it does |
|---------|--------------|
| **Pre-fill / default** | Pre-populate a question from a URL parameter, an earlier answer, or the signed-in user's profile |
| **Pipe value** | Inject `{{q3.label}}` into a later question's title, description, or options |
| **Carry-forward** | Only show options in Q5 that were picked in Q4, or exclude them (the inverse) |
| **Randomize** | Shuffle options or question order per respondent, with optional "always last" pins for "Other" |
| **Quota / cap** | Once N respondents have picked option X, hide it for everyone else |

### Routing [(details)](./rules-routing)

| Feature | What it does |
|---------|--------------|
| **Skip to page** | Jump to a specific page number |
| **Skip to named section** | Jump to a page by stable slug, which survives reorder |
| **Loop / repeat** | Repeat a block once per item the respondent listed earlier. Authoring is complete; full canvas rendering is on the roadmap. |
| **Random A/B path** | Split respondents 50/50 (or 33/33/33) deterministically into A, B, or C |
| **Disqualify with reason** | End early with a stored reason that surfaces in reports and exports |

### Scoring & calculated fields [(details)](./rules-scoring)

| Feature | What it does |
|---------|--------------|
| **Hidden variables** | Compute a named score from a structured formula (refs to answers, literals, arithmetic, references to other scores) |
| **Buckets / segments** | Classify respondents into named segments based on score ranges ("detractor", "promoter") |
| **Conditional required** | Make a question required only when a prior answer matches |

### Validation & guards [(details)](./rules-validation)

| Feature | What it does |
|---------|--------------|
| **Cross-field validation** | "End date must be after start date"; "sum of allocations must equal 100" |
| **Sanity check** | Flag speeders and straight-liners using a server-side bitmask and react via `$quality.*` conditions |
| **Anti-spam** | Honeypot field rendered off-screen, IP throttling, per-survey minimum completion time |

### Side-effects [(details)](./rules-side-effects)

| Feature | What it does |
|---------|--------------|
| **Notify** | Email, Slack, or webhook when a condition matches ("if NPS is 3 or lower, alert #cs-escalations") |
| **Add to contact list** | Push respondent into an AcyMailing list |
| **Tag response** | Auto-apply tags like `churn-risk` or `vip` for filtering in Results |
| **Open follow-up survey** | Queue a one-shot invitation to a different survey, branded as a follow-up |
| **Auto-close** | Stop accepting responses once a goal is met |

### Time, locale, device, and synthetic context [(details)](./rules-context-fields)

| Feature | What it does |
|---------|--------------|
| **Schedule-based** | `$hour`, `$weekday`, `$dom`, `$month`, `$year`, `$now`. Gate questions to business hours or before a deadline. |
| **Locale-based** | `$locale` and `$lang`. Show different options by language or country. |
| **Device-based** | `$device` (mobile/tablet/desktop), `$viewport_w` |
| **Quality** | `$quality.speeder`, `$quality.honeypot`, `$quality.straight_lining`, `$quality.ip_throttle`, `$quality.any` |
| **A/B variant** | `$ab` (A/B), `$variant3` (A/B/C). Stable per-respondent assignment. |
| **Loop count** | `$loop.count`. Number of items the loop's source question collected. |

---

## Where to author rules

Every rule type is editable from **two surfaces**:

1. **Survey Builder → Flow tab**. Visual graph where each question's outgoing rules render as a fan of labelled exits. Click any exit to open the inline editor.
2. **Survey Builder → Logic tab on a selected question**. Compact list editor for power users who prefer to scroll through rules quickly.

Both editors save to the same backing data, so you can switch between them freely.

:::tip "WHEN" is the same everywhere
Every rule shares the same condition shape: a tree of AND / OR groups of leaves. A leaf compares one field (question answer, score variable, or `$context` field) against a value using one of `=`, `!=`, `>`, `>=`, `<`, `<=`, `contains`, `not_contains`, `empty`, `filled`. The catalogue above only varies the **THEN** half.
:::

---

## Anatomy of a rule

Authored rules persist in this canonical shape:

```js
{
  question_id: 12,                 // the source question whose answers trigger evaluation
  conditions: {                    // boolean tree; null means "always match"
    all: [
      { field: 'nps_score',  op: '<=', value: '6' },
      { field: '$quality.speeder', op: '=', value: '0' }
    ]
  },
  action_data: {                   // discriminated union, the THEN payload
    type: 'notify',
    integration_id: 7,
    message: 'NPS detractor, see response #{{response.id}}'
  },
  published: true,                 // unpublished rules don't fire
  sort_order: 0                    // see "rule ordering" below
}
```

The two halves are documented in the per-category pages:

- **WHEN** semantics, operators, and `$`-context fields: see [rules-context-fields](./rules-context-fields).
- **THEN** action payloads: see the category page that owns the action type.

---

## Client vs. server evaluation

The engine runs in two places:

| Concern | Where it runs |
|---------|---------------|
| Show/hide questions, skip-to navigation, end-survey, conditional require | **Client**, for instant UI feedback |
| Cross-field validation | **Both**: client for UX, server for security |
| Tag, quota, auto-close, notify, followup | **Server only**. These are authoritative side-effects. |
| Score & segment | **Client** engine emits to `scoreVariables` and `segments`; the server uses the persisted values |
| Honeypot, speeder, IP throttle | **Server**. Surfaced to rules via `$quality.*` context fields. |

The server is always the source of truth for anything that writes data, so a tampered client cannot bypass a quota cap or sneak past a validation rule.

---

## Rule ordering

Rules are pre-sorted by `sort_order` (lowest first) before evaluation. For jump-style actions (`skipto`, `end`) that target the same source question, **the last matching rule wins**: each match overwrites the previous entry in the engine's jump map. If you want a specific rule to take precedence, give it a higher `sort_order` than the others on that question.

Show / hide / require accumulate across all matching rules; a question is hidden if any `hide` rule matched, shown if any `show` rule fired, required if any `require` rule matched.

Side-effect actions (`tag`, `quota`, `auto_close`, `notify`, `followup`) all fire when their conditions match; they do not compete with each other.

---

## Best practices

1. **Plan flow first.** Sketch the branching on paper before clicking. The Flow tab is for verifying, not designing from scratch.
2. **Use named sections, not page numbers.** `skipto → section: thank-you` survives a page reorder; `skipto → page 4` does not. See [rules-routing](./rules-routing#skip-to-named-section).
3. **Compose, do not duplicate.** A "VIP detractor" segment is a `score` rule plus a `tag` rule, not two parallel `notify` rules with hard-coded conditions.
4. **Leave failed evaluations safe.** Empty conditions evaluate as "always match", never as "never match". Unfinished rules with blank fields are inert by design (`tag = ''` is a no-op, `integration_id = 0` doesn't dispatch).
5. **Mind rule order for jumps.** When multiple `skipto` or `end` rules could fire on the same question, the highest `sort_order` wins. Order rules in the canvas with this in mind.

---

## Troubleshooting

| Symptom | Likely cause |
|---------|--------------|
| Rule shows in the editor but never fires | Check `published`. Disabled rules render greyed-out. |
| Section-target rule does nothing | The destination page's `slug` is blank. Set it on the page divider in the canvas. |
| `notify` action does nothing | Picked integration does not list `rule.notified` in its events. Check the Integrations marketplace card. |
| `quota` never hides the option | Cap is 0 (always full) or the option_key changed since the rule was authored. Look for the orange "stale" pill. |
| Quality-flag rule fires for everyone | Conditions write the operator backwards: `$quality.speeder = 1` matches speeders, `= 0` matches non-speeders. |

---

## Related documentation

- [Survey Builder](./survey-builder), where the rule editors live
- [Survey Types Explained](./survey-types-explained). Choice-family questions are the most common rule sources.
- [Integrations Overview](./integrations-overview). `notify` actions delegate here.
- [Email Templates](./email-templates). The `followup` rule renders `survey_followup_invitation`.
- [Analytics & Reports](./analytics-and-reports). Score variables and segment tags surface as facets.

---

## Category deep-dives

- **[Answer manipulation](./rules-answer-manipulation)**: pre-fill, pipe, carry-forward, randomize, quota
- **[Routing](./rules-routing)**: section jumps, loops, A/B paths, disqualify
- **[Scoring & calculated fields](./rules-scoring)**: score formula, segment buckets, conditional required
- **[Validation & guards](./rules-validation)**: cross-field, sanity, anti-spam
- **[Side-effects](./rules-side-effects)**: notify, contact list, tag, follow-up, auto-close
- **[Context fields](./rules-context-fields)**: schedule, locale, device, quality, variant, loop
