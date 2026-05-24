---
id: rules-context-fields
title: Context Fields ($-prefixed)
sidebar_label: Context Fields
sidebar_position: 27
---

A rule's condition leaf normally references a **question** by its `field_key`. Sometimes you want to gate on something the survey itself can sense: the current time, the respondent's device, an A/B bucket, or a computed score. The engine reserves the `$`-prefix for those "pseudo-fields", which are context resolvers built into the engine.

Each context field plugs into the **same operator catalogue** as any answer comparison. `$hour < 9` uses the same `<` operator that compares a numeric question's answer; no special-cased branching in the engine.

| Family | Fields | Runs |
|--------|--------|------|
| [Schedule](#schedule-fields) | `$hour`, `$weekday`, `$dom`, `$month`, `$year`, `$now` | Client |
| [Locale](#locale-fields) | `$locale`, `$lang` | Client |
| [Device](#device-fields) | `$device`, `$viewport_w` | Client |
| [Quality](#quality-fields) | `$quality.speeder`, `$quality.straight_lining`, `$quality.honeypot`, `$quality.ip_throttle`, `$quality.any` | Server |
| [A/B variant](#variant-fields) | `$ab`, `$variant3` | Both |
| [Loop](#loop-fields) | `$loop.count` | Both |
| [Score](#score-variables) | `$score.<name>` | Client |
| [Segment](#segment-tags) | `$segment.<tag>` | Client |

---

## How `$`-fields are evaluated

The rule engine sees a condition leaf and inspects the `field`:

| Field shape | Behaviour |
|-------------|-----------|
| `field_key` (no `$`) | Look up the question with that field_key; resolve its answer; compare |
| `$<name>` or `$<ns>.<key>` | Call the registered context resolver; compare its return value |
| Unknown `$`-field | Treat the leaf as "not applicable". Returns `null`, which makes the leaf fail safely. |

Resolvers run **at evaluation time**, so dynamic state like `$now` reflects the current moment, not the moment the survey was authored.

### Operators that apply

Every operator works on context fields the same way it works on answers:

- `=`, `!=`: string-style equality
- `>`, `>=`, `<`, `<=`: numeric comparison (operands coerced to floats)
- `contains`, `not_contains`: substring match (string fields only)
- `empty`, `filled`: null-test

A non-comparable mismatch (e.g. `$device > 5`) just doesn't fire. No crash, no log noise.

---

## Schedule fields

| Field | Returns | Range | Notes |
|-------|---------|-------|-------|
| `$hour` | Current hour (number) | 0–23 | Reads the browser's local clock |
| `$weekday` | Current weekday (number) | 0–6 | 0 = Sunday, 6 = Saturday |
| `$dom` | Day of month (number) | 1–31 | |
| `$month` | Current month (number) | 1–12 | Jan = 1 |
| `$year` | Current year (number) | 4-digit | |
| `$now` | Epoch milliseconds (number) | int | Useful for `before/after deadline` rules |

### Example: business-hours only

```
Rule on every question (or use `show` on key questions):
  When $hour < 9, hide the support question
  When $hour > 17, hide the support question
```

Or compose:

```
When $weekday < 6 AND $hour >= 9 AND $hour < 17,
show question "Talk to a sales rep"
```

### Example: hard deadline

```
Rule on first page:
  When $now > 1735689600000,   ← 2025-01-01 00:00:00 UTC in ms
  end with message "This survey closed at the end of 2024."
```

---

## Locale fields

| Field | Returns | Example |
|-------|---------|---------|
| `$locale` | Primary language subtag | `en`, `fr`, `de` |
| `$lang` | Full BCP-47 tag | `en-GB`, `pt-BR`, `zh-Hans` |

Both read `navigator.language` on the client. Surveys served to users whose browsers report `en-GB` can branch on `$locale = 'en'` (broad match) or `$lang = 'en-GB'` (precise match).

### Example: GDPR consent only for EU locales

```
Rule on the first page:
  When $locale = 'de' OR $locale = 'fr' OR $locale = 'it',
  show "GDPR consent" question
```

Or invert with `not_contains` for a quick exclude:

```
When $lang contains '-eu',
show … (won't fire; this is illustrative since locales don't carry a "-eu" tag)
```

---

## Device fields

| Field | Returns | Example values |
|-------|---------|----------------|
| `$device` | Coarse device class | `mobile`, `tablet`, `desktop` |
| `$viewport_w` | Viewport width in px | `360`, `1024` |

Breakpoints (match the SPA's CSS):

| Width | Class |
|-------|-------|
| `< 600px` | `mobile` |
| `< 960px` | `tablet` |
| `>= 960px` | `desktop` |

Both re-evaluate on every rule pass, so a respondent who rotates or resizes mid-survey gets the right gating without losing their answers.

### Example: hide a desktop-only question on mobile

```
Rule on the file-upload question:
  When $device = 'mobile',
  hide question
```

Or invert: show a mobile-friendly variant:

```
Rule on a mobile-specific photo question:
  When $device != 'mobile',
  hide question
```

---

## Quality fields

Bitmask flags computed server-side after the answers are written. Each field returns `1` or `0` (string) so the standard `=` operator works.

| Field | Bit | When it's 1 |
|-------|-----|-------------|
| `$quality.speeder` | 1 | Response submitted faster than the survey's `min_duration_seconds` |
| `$quality.straight_lining` | 2 | Every row of a matrix answer got the same column |
| `$quality.honeypot` | 4 | The hidden honeypot field arrived non-empty |
| `$quality.ip_throttle` | 8 | The same IP has submitted more than 10 responses to this survey in the last hour |
| `$quality.any` | OR of all four | Convenience for "any quality concern" |

See [Validation & Guards → sanity check](./rules-validation#sanity-check--quality-flags) for the underlying signals.

### Server-only evaluation

The SPA cannot know quality flags until submit, so these fields are **server-only**. Client-side rule passes skip them; the server runs the same rule against `$context` after computing the flags. This means:

- `tag`, `notify`, and `auto_close` rules gated on `$quality.*` fire reliably.
- A `skipto` rule gated on `$quality.*` doesn't make sense (the page transition happens on the client). The engine treats it as "not applicable", which is `false`.

### Example: alert when a bot probe arrives

```
When $quality.honeypot = 1,
notify Slack #security
message: "Honeypot tripped on survey {{survey.title}}"
```

Pair with auto-close if you want hard rejection on top:

```
When $quality.honeypot = 1,
auto-close with reason "Honeypot tripped, manual review needed"
```

---

## Variant fields

Stable per-respondent A/B (or A/B/C) assignment. Computed by hashing the response id with a Wang-style mixer; the same respondent always lands in the same bucket.

| Field | Buckets | Values | Use case |
|-------|---------|--------|----------|
| `$ab` | 2 | `A`, `B` | 50/50 question-wording experiments |
| `$variant3` | 3 | `A`, `B`, `C` | Three-way feature comparisons |

### Identical on client and server

PHP's hash mirrors the JavaScript bit-perfectly (32-bit mask matches `>>> 0`). A rule like `When $ab = 'A', tag …` fires for the same respondents on both the client's `show`/`hide` pass and the server's `tag` pass. There's no risk of skew between "what the respondent saw" and "what the server recorded".

### Example: question-wording A/B test

```
Page 1, Intro
Page 2 (slug: variant-a), "How satisfied are you?" (1–5)
Page 3 (slug: variant-b), "On a scale of 1 to 5, how would you rate us today?" (1–5)
Page 4, Wrap-up

Rule on Page 1's last question:
  When $ab = 'A', skipto section variant-a
  When $ab = 'B', skipto section variant-b
```

The bucket is fixed per respondent, so resuming from email lands them on the same flow.

### Anonymous surveys

`$ab` and `$variant3` only work when a response id has been issued, so `responseStart` must have fired. Fully anonymous "no row" responses (which the engine doesn't currently support) would return `null` and the leaf safely no-ops.

---

## Loop fields

| Field | Returns | Notes |
|-------|---------|-------|
| `$loop.count` | Number of items the source question collected | `0` when the source is unanswered |

Currently set by the `loop` action's runtime stub. See [Routing → loop / repeat](./rules-routing#loop--repeat-block). Full canvas duplication is on the roadmap, but `$loop.count` is already usable for branching.

### Example: skip the loop section when there's nothing to iterate

```
Rule on the source question:
  When $loop.count = 0, skipto section after-loop
```

The respondent who picked zero items in the source question skips the entire loop block.

---

## Score variables

Score `score` actions write to named variables; downstream rules read them via `$score.<name>`.

| Field shape | Resolves to |
|-------------|-------------|
| `$score.<variable_name>` | The numeric value set by a prior `score` rule. `0` when undefined. |

### Example: branch on combined score

```
Rule 1: Score `nps_score` = ref(nps_question)
Rule 2: Score `feedback_quality` = length(detailed_feedback) / 10

Rule 3: When $score.nps_score >= 9 AND $score.feedback_quality >= 5,
        tag response with "actionable-promoter"
```

Rule 3 reads the variables Rules 1 and 2 wrote. Order matters within a single submit: scores are accumulated in the same pass as the conditions that read them, so authors should keep score rules above the rules that depend on them.

### Special variable: `$loop.count`

`$loop.count` is technically a score variable. The loop runtime writes to `scoreVariables.set('$loop.count', count)`. The `$loop.*` namespace is reserved for engine-managed variables; don't write to it from authored `score` actions.

---

## Segment tags

`score` actions with buckets emit segment tags. Downstream rules read whether a tag was emitted via `$segment.<tag>`.

| Field shape | Resolves to |
|-------------|-------------|
| `$segment.<tag>` | `1` (string) if the segment tag was emitted by a prior `score` rule, `0` otherwise |

### Example: chain segments

```
Rule 1: Score `nps` from nps_question, buckets:
          detractor (max 6)
          passive   (7–8)
          promoter  (min 9)

Rule 2: When $segment.detractor = 1 AND plan = 'enterprise',
        notify Slack #cs-vip-escalations
        message: "Enterprise detractor, {{q_5_email}}"
```

Segment tags compose with answer-field conditions just like any other leaf.

---

## Custom context fields

The context registry is **extensible**. Adding a new field is one line on the client and one branch on the server.

Built-ins live in [`react-app/src/site/hooks/context-fields.ts`](https://github.com/shondalai/communitysurveys/tree/main/react-app/src/site/hooks/context-fields.ts). Server-side resolution is in `ApiController::resolveServerContextField()` for `$quality.*`, `$ab`, and `$variant3`. A future plugin event will let third-party extensions register their own resolvers; until then, custom fields require code changes.

---

## Operator quick-reference

The full operator catalogue applies to every context field:

| Operator | Description | Works on |
|----------|-------------|----------|
| `=` | Strict equality (string-style) | All |
| `!=` | Inequality | All |
| `>`, `>=`, `<`, `<=` | Numeric comparison | Numeric fields |
| `contains` | Substring match | String fields |
| `not_contains` | Substring non-match | String fields |
| `empty` | Field is null / empty string | All |
| `filled` | Field has any value | All |

Numeric-only operators silently return `false` on string fields. No crash, no log noise.

---

## Related

- [Rules Engine Overview](./conditional-rules-explained)
- [Routing → A/B path](./rules-routing#random-ab-path)
- [Validation → quality flags](./rules-validation#sanity-check--quality-flags)
- [Scoring → score variables](./rules-scoring#hidden-score-variables) and [→ buckets](./rules-scoring#buckets--segments)
- [Answer manipulation](./rules-answer-manipulation), for question-answer conditions
