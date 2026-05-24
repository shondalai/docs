---
id: rules-scoring
title: Scoring & Calculated Fields
sidebar_label: Scoring & Segments
sidebar_position: 24
---

Three features for computing hidden state per respondent: numeric scores, named segments, and conditional required.

| Feature | Action type | Surface |
|---------|-------------|---------|
| [Compute hidden variable](#hidden-score-variables) | `score` | Score variables visible to downstream rules and exports |
| [Bucket / segment](#buckets--segments) | `score` with `buckets` | Segment tags surface in analytics and the response inspector |
| [Conditional required](#conditional-required) | `require` | Field-level required flag at render time |

---

## Hidden score variables

Compute a named numeric value per respondent from a structured formula. Score variables become available to later rules (as `$score.<name>`) and to subsequent score actions (via `var` formula nodes), so authors can layer scores: `risk_total = service_score + product_score`.

### Authoring

Add a rule, action **Score & segment**. The popover takes:

| Field | Description |
|-------|-------------|
| **Variable** | Name of the variable to write (e.g. `nps_score`, `risk_total`). Used by downstream rules as `$score.<name>`. |
| **Formula** | A structured tree (see below) |
| **Buckets** | Optional. Emit a segment tag when the computed value falls in a range. See [Buckets / segments](#buckets--segments). |

### Formula tree

Formulas are **structured**, not free-text. No expression parser ships with the engine. Authors compose a small tree where each node is one of four kinds:

| Node kind | What it does | Example |
|-----------|--------------|---------|
| `literal` | Fixed number | `10` |
| `ref` | Reads the numeric value of a question's answer. For choice questions, the picked option's id is used. | `ref(nps_question)` |
| `var` | Reads a previously-computed score variable | `var('service_score')` |
| `op` | Arithmetic operator on two children: `+`, `-`, `*`, `/` | `ref(score1) * 2 + ref(score2)` |

The editor renders the tree recursively. Each node has a kind picker, a parameter input, and a **+** button that wraps the node in an `op` with a fresh `literal: 0` sibling. Authoring stays guided and exhaustive; you can't accidentally typo a formula.

### Example: weighted NPS

```
nps_score = ref(nps_question) * 10 + ref(detailed_score)
```

In the editor:

1. Start with `ref`, pick `nps_question`.
2. Click + to wrap in an op.
3. Set op to `*`, set right child to `literal: 10`.
4. Click + on the new op to wrap again.
5. Set outer op to `+`, set new right child to `ref` then `detailed_score`.

### Runtime semantics

| Edge case | Behaviour |
|-----------|-----------|
| `ref` to a missing or unanswered question | Evaluates to `0` |
| `var` to an undefined variable | Evaluates to `0` |
| Divide-by-zero | Evaluates to `0` (no `Infinity` or `NaN` leaks into the column) |
| Empty variable name | Variable isn't stored, but the formula still computes (useful for "score I only need for buckets") |

### Using score in conditions

Other rules reference scores via `$score.<name>`:

```
When $score.nps_score >= 80, tag response with "promoter"
When $score.risk_total > 50, notify on Slack channel #cs-escalations
```

See [Context fields → score variables](./rules-context-fields#score-variables) for the resolver detail.

---

## Buckets / segments

Classify the computed score into one or more named buckets. The engine emits a **segment tag** when the score lands in the bucket's range.

### Authoring

In the **Score & segment** editor, scroll to **Score buckets** and click **Add bucket**. Each bucket has:

| Field | Description |
|-------|-------------|
| **Tag** | The segment tag emitted when the bucket matches (e.g. `detractor`, `promoter`) |
| **Min** | Inclusive lower bound. Leave blank for "no lower bound". |
| **Max** | Inclusive upper bound. Leave blank for "no upper bound". |

Buckets evaluate independently. A respondent can land in multiple buckets if the ranges overlap (rare in practice). Empty-tag buckets are inert; they persist through autosave but never emit, so half-authored buckets don't poison the segments column.

### Example: NPS detractor / passive / promoter

```
Score: nps_score = ref(nps_question)

Buckets:
  - tag: detractor,  max: 6
  - tag: passive,    min: 7,  max: 8
  - tag: promoter,   min: 9
```

Segment tags surface in:

| Surface | How |
|---------|-----|
| **Response detail** | Inline segment chips next to the respondent's name |
| **Analytics → Segments** | Facetable filters; cross-tab by segment vs. any other dimension |
| **Downstream rules** | `$segment.detractor = 1` is a valid condition leaf |
| **CSV export** | Future: planned segment column |

### Layered scoring

Buckets emit tags, and segment tags can drive subsequent rules. A common pattern:

```
Rule 1: Score nps_score from nps_question (no buckets)
Rule 2: Score detail_score from detail_question (no buckets)
Rule 3: Score combined = var(nps_score) + var(detail_score), with buckets
        detractor:  max 80
        passive:    min 81, max 120
        promoter:   min 121
```

Rule 3 reads the variables Rule 1 and Rule 2 wrote, then segments on the combined value.

---

## Conditional required

Make a question required only when a prior answer matches. Useful when a follow-up is optional in general but mandatory in a specific case ("if you selected 'Other', tell us what").

### Authoring

Add a rule, action **Make required**, target the question that should become required. The condition decides when.

### Example: "Please specify" when "Other" is picked

```
Q5 "Reason for cancelling" (radio)
  - Price
  - Features
  - Switched to a competitor
  - Other

Q6 "Please specify" (text, optional by default)

Rule on Q5:
  When Q5 = "Other", make Q6 required
```

Q6 stays optional for any respondent who didn't pick "Other". When they pick "Other", the runtime engine adds Q6 to `requiredQuestionIds` and submit validation blocks empty answers with the standard "this field is required" message.

### Difference vs. `show`

- `require` keeps the question visible in all cases but flips the validation flag.
- `show` keeps the question hidden until conditions match, then reveals it.

Use `require` when the field exists for context but only matters in specific cases; use `show` when the field is purely a follow-up.

### Combining with show

Common pattern: show the follow-up when triggered, *and* require it.

```
Q5 "Are you satisfied?" (radio: Yes / No)
Q6 "Please explain" (text, hidden by default)

Rules on Q5:
  When Q5 = "No", show Q6
  When Q5 = "No", make Q6 required
```

Q6 stays out of sight for satisfied respondents and becomes a mandatory follow-up for the unsatisfied ones. Authoring two rules is cheap, and the engine evaluates them in one pass.

---

## Server-side scoring caveats

The score formula runs **client-side** during rule evaluation. The computed values are written to `scoreVariables` and bucket tags to the response's segment set. On submit, the SPA forwards the answer map; the server re-evaluates the same rules for any side-effect actions that need the segment data (`tag`, `notify` gated on `$segment.detractor`, etc.).

A tampered client could lie about a score value, but it cannot influence anything the server independently re-derives. The pattern is:

- **Use scores for UI and conditional flow.** Branch the survey based on the running score.
- **Use server-evaluated rules for authoritative side-effects.** Let the server tag, notify, or auto-close based on its own evaluation of the same formula.

This means an author writing `When $score.nps_score >= 80, tag response 'promoter'` can trust the tag. Even if a tampered client tried to send a 100, the server's tag insert uses the server's own NPS calculation.

---

## Related

- [Context fields → score variables](./rules-context-fields#score-variables), for the `$score.*` resolver
- [Side-effects](./rules-side-effects), for `tag`, `notify`, `auto_close` actions gated on segment tags
- [Analytics & Reports](./analytics-and-reports), for segment facets in the dashboard
- [Rules Engine Overview](./conditional-rules-explained)
