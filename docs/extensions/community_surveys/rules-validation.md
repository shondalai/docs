---
id: rules-validation
title: Validation & Guards
sidebar_label: Validation & Guards
sidebar_position: 25
---

Three protective layers: cross-question validation, sanity checks against speeders and straight-liners, and anti-spam (honeypot, IP throttle, min-duration). Every check runs server-side as the source of truth. Client checks add UX polish but never replace the server's authority.

| Feature | Authored on | Runs |
|---------|-------------|------|
| [Cross-field validation](#cross-field-validation) | Rule (`validate` action) | Client (UX) plus server (security) |
| [Sanity check](#sanity-check--quality-flags) | Survey settings plus rule conditions on `$quality.*` | Server-only |
| [Anti-spam: honeypot](#honeypot) | Survey settings toggle | Server, with SPA-rendered hidden input |
| [Anti-spam: minimum duration](#minimum-completion-time) | Survey settings | Server |
| [Anti-spam: IP throttle](#ip-throttle) | Hard-coded threshold (10 per hour per IP per survey) | Server |

---

## Cross-field validation

Validate that two answers satisfy a relationship: date ranges, sum totals, sub-string containment. Failure surfaces as a per-question error message (or survey-level if no target is set), and the submit is blocked.

### Authoring

Add a rule, action **Cross-field validation**. The popover composes a predicate from two operands and a comparison operator.

| Field | Description |
|-------|-------------|
| **Left operand** | Pick a kind (`answer`, `length`, `count`, `sum`, `date`, `literal`) and the question or value |
| **Operator** | `==`, `!=`, `>`, `>=`, `<`, `<=` |
| **Right operand** | Same kinds as left |
| **Message** | Shown to the respondent when the predicate fails |
| **Target (optional)** | Question to attach the error to. Leave blank for a survey-level banner. |

### Operand kinds

| Kind | Resolves to |
|------|-------------|
| `answer` | The answer to a question: string for text, number for numerics, picked option's key for choice |
| `length` | Character count of a text answer |
| `count` | Item count of a multi-pick answer |
| `sum` | Sum of all numeric answers (or of all picked option values, for matrix-numeric questions) |
| `date` | Parsed Unix timestamp of a date answer, comparable with `>` or `<` |
| `literal` | A fixed value. Numeric-looking literals are coerced so `"100"` compares as a number. |

### Example: end date must follow start date

```
Q1: "Trip start date"  (date)
Q2: "Trip end date"    (date)

Rule:
  Left:     date(Q2)
  Operator: >
  Right:    date(Q1)
  Message:  "End date must be after start date."
  Target:   Q2
```

If the respondent picks Q2 before Q1, the form refuses submission and highlights Q2 with the message.

### Example: sum of allocations equals 100

```
Q1–Q4: "Allocate budget across 4 categories" (each numeric)

Rule:
  Left:     sum(Q1, Q2, Q3, Q4)   ← a single `sum` operand; runtime sums across the form's numeric answers
  Operator: ==
  Right:    literal(100)
  Message:  "Budget must total exactly 100%."
  Target:   (leave blank → survey-level banner)
```

The submit fails with the banner until the four fields sum to 100.

### Server-side mirror

Every `validate` rule runs **on the server too**. A tampered client that bypasses the in-browser check still gets HTTP 422 with the rule's message and the offending field_key, so the validation cannot be defeated by editing the form HTML.

The server's evaluator (in `ApiController::assertCrossFieldValidations()`) is byte-identical to the SPA's: same operand kinds, same operators, same semantics for unresolvable operands (treated as vacuously true so an unanswered question doesn't cascade into a false-positive validation failure).

---

## Sanity check / quality flags

The server computes a bitmask per response on submit. Bits:

| Bit | Name | Meaning |
|-----|------|---------|
| 1 | `speeder` | Response submitted faster than the survey's minimum completion time |
| 2 | `straight_lining` | Every row in a matrix question got the same column. The canonical disengaged-respondent signature. |
| 4 | `honeypot` | The honeypot field arrived non-empty (bot signature) |
| 8 | `ip_throttle` | The same IP has submitted more than 10 responses to this survey in the last hour |

These flags are **persisted on the response row** as `quality_flags`. They surface to admins in two places:

1. **Analytics → Quality facet**, to filter responses by clean / suspicious.
2. **Rule conditions**: every flag is available as a `$quality.<name>` context field, so authors can write rules that react to them.

### Authoring rules on quality flags

The standard rule conditions work. Pick a `$quality.*` field, pick an operator, pick a value (`0` or `1`).

| Goal | Condition |
|------|-----------|
| Tag every speeder | `$quality.speeder = 1` |
| Auto-close if a single honeypot trips (suspected bot raid) | `$quality.honeypot = 1` |
| Notify on Slack when *any* quality bit fires | `$quality.any = 1` |
| Allow only clean responses through `notify` | `$quality.any = 0` |

### Example: tag speeders for analyst review

```
Rule on any question:
  When $quality.speeder = 1,
  tag response with "speeder"
```

The server runs this at submit, after computing flags. The tag is searchable in Analytics; analysts can decide whether to exclude tagged responses from reports.

### Configuring minimum completion time

Survey Builder → **Settings** tab → **Response quality** card → **Minimum completion time (seconds)**.

| Value | Behaviour |
|-------|-----------|
| `0` | No speeder check (default) |
| `30` | Responses faster than 30 seconds set the speeder bit |
| `120` | Responses faster than 2 minutes set the speeder bit |

The check uses `now - response.created`, where `created` is set when the SPA first calls `responseStart`. Respondents who load the survey, walk away, and come back hours later aren't flagged.

### Straight-lining detection

Built-in, no configuration. Fires when a matrix-style answer maps **every row to the same column** (e.g. all "3"s on a 7-row Likert grid). Surveys with no matrix questions never trip this bit.

### What flags don't do automatically

By default, quality flags **don't reject** responses. They only flag them, so admins retain the option to inspect or include them. To convert flag-into-rejection, write rules:

```
When $quality.speeder = 1, end with message "Please take your time."   ← doesn't reject; just disqualifies
When $quality.honeypot = 1, end with message "Submission failed."      ← a bot probably won't see the message anyway
```

Or combine with the `tag` plus `end_reason` pattern so analytics shows the cohort.

---

## Honeypot

Render an invisible field that humans cannot see but auto-fill bots populate. Submissions arriving with the field populated set quality bit 4.

### Authoring

Survey Builder → **Settings** tab → **Response quality** → toggle **Honeypot field**.

When on:

1. The SPA renders an off-screen `<input>` (position absolute, `tabindex -1`, `aria-hidden`).
2. The respondent never sees or interacts with it. Keyboard navigation skips it, screen readers ignore it.
3. The submit ships the captured value via the `hp` body field.
4. The server flags bit 4 when the value is non-empty.

### Why "flag, not reject"?

Several reasons:

- A misconfigured browser extension might auto-fill the field even on a legitimate user.
- Flagging lets you measure bot activity ("X% of responses are flagged"). Rejecting hides that signal.
- Pair with `When $quality.honeypot = 1, end with message …` if you want hard rejection on top. That's a policy decision per survey.

The schema column was originally documented as "reject"; the current implementation chose flag-only. Honeypot rejection via rule is the upgrade path.

---

## Minimum completion time

Same toggle, different bit. See [Sanity check → configuring minimum completion time](#configuring-minimum-completion-time).

---

## IP throttle

Built-in, no configuration. Fires when the same IP submits more than **10 completed responses to the same survey in the last hour**. Sets quality bit 8 but does not reject.

| Element | Value |
|---------|-------|
| Window | 60 minutes (rolling) |
| Threshold | 10 responses (hard-coded) |
| Scope | Per-survey × per-IP |
| Action | Set bit 8 on `quality_flags`; allow submission to proceed |

### Why not configurable?

A per-survey threshold introduces a tiny attack surface (an author could disable throttling for a campaign that needs it). For now the threshold is intentionally conservative. 10 per hour catches automation while not blocking legitimate kiosk-style use cases where multiple respondents share an IP.

Make the throttle a hard block by writing:

```
When $quality.ip_throttle = 1, end with message "This survey is rate-limited from your network."
```

---

## Combining guards

Quality flags are independent bits. A single response can carry multiple. The `$quality.any` field returns 1 if **any** bit is set, so it's the catch-all for "did this response look at all suspicious":

```
When $quality.any = 1, tag response with "review-needed"
```

For per-bit handling, the four named fields cover the catalogue:

| Field | Bit |
|-------|-----|
| `$quality.speeder` | 1 |
| `$quality.straight_lining` | 2 |
| `$quality.honeypot` | 4 |
| `$quality.ip_throttle` | 8 |
| `$quality.any` | OR of all four |

Rules using these fire **server-side only**. They're evaluated after `quality_flags` is computed but before the response state flips to "complete", so a `tag` or `notify` triggered on a quality bit lands in the same write as the response itself. Client-side rule evaluation treats all `$`-prefixed fields it doesn't recognise as "skip this leaf" so a server-only `$quality` leaf doesn't accidentally fire on the client.

---

## Related

- [Rules Engine Overview](./conditional-rules-explained)
- [Side-effects](./rules-side-effects). Tag, notify, and auto-close are the typical responses to a quality flag.
- [Context fields → quality](./rules-context-fields#quality-fields), the full `$quality.*` reference
- [Settings reference](./settings-reference), survey-level toggles documented in detail
