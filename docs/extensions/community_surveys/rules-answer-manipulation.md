---
id: rules-answer-manipulation
title: Answer Manipulation
sidebar_label: Answer Manipulation
sidebar_position: 22
---

Five rule features that shape the answers themselves: what they default to, how options are presented, and which options remain visible to subsequent respondents.

| Feature | Authored on | Runs |
|---------|-------------|------|
| [Pre-fill / default](#pre-fill--default-value) | Question → Advanced tab | Client (render time) |
| [Pipe value](#pipe-value) | Question text fields (titles, descriptions, option labels) | Client (render time) |
| [Carry-forward options](#carry-forward-options) | Rule (`carry_forward` action) | Client (render time) |
| [Randomize / rotate](#randomize--rotate) | Question → Advanced tab | Client. Per-respondent, stable across reloads. |
| [Quota / cap](#quota--cap) | Rule (`quota` action) | Client hide plus server enforce |

---

## Pre-fill / default value

Seed a question's initial answer from one of three sources, evaluated in order. The first non-empty source wins. The respondent can always overwrite the pre-filled value; the chain only fires when no answer exists yet.

### Authoring

Question Inspector → **Advanced** tab → **Pre-fill / default value** section.

Click **Add prefill source** and pick one of:

| Kind | Reads from | Example |
|------|------------|---------|
| **URL parameter** | `?<name>=<value>` on the survey page URL | `?utm_campaign=summer-2026` seeds `campaign_id` |
| **Earlier answer** | The respondent's answer to another question in this survey | Q1 "Your name" seeds Q12 "Confirm name" |
| **Contact field** | The signed-in Joomla user's profile: `name`, `email`, `username`, or `id` | Auto-populate "Your email" for logged-in users |

### Source chain semantics

You can stack multiple sources on one question. The engine tries each in order, and the first to return a non-empty value seeds the answer. If none resolve (anonymous visitor, missing URL param, the earlier answer is blank), the question stays empty for the respondent to fill in.

### Example: fall back gracefully

```
Question: "Your email"
Sources (in order):
  1. URL parameter: email
  2. Contact field: email
```

A visitor opening `/survey?email=alice@example.com` gets `alice@example.com` regardless of login state. A logged-in visitor without that URL parameter gets the email from their Joomla profile. An anonymous visitor with no parameter sees an empty field.

### URL parameter security

Parameter names are sanitised on save. Only `[A-Za-z0-9_-]` is allowed, with a 64-character cap. The raw URL value goes straight into the answer field, so the question's existing validation (regex, required, etc.) still applies. There is no "trust the URL because it came from the URL" loophole.

---

## Pipe value

Inject a respondent's answer into later question text. Use cases:

- "Earlier you said you live in **`{{city}}`**. What's your zip code?"
- "How would you rate the **`{{product_picked.label}}`** for value?"
- "Tell us about your **`{{role}}`** experience."

### Syntax

| Placeholder | Resolves to |
|-------------|-------------|
| `{{field_key}}` | The respondent's answer to that question: text value, picked option label, or empty string |
| `{{field_key.label}}` | For choice questions, the picked option's human label |
| `{{field_key.value}}` | For choice questions, the picked option's stable key (`yes`, `red`, `option_2`, etc.) |
| `{{field_key\|Fallback}}` | Use "Fallback" when the field is empty. Survives the case where the respondent hasn't answered yet. |

### Where you can pipe

| Surface | Supported |
|---------|-----------|
| Question title | ✅ |
| Question description | ✅ |
| Option labels | ✅ |
| Validation error messages | ✅ |
| Email templates (follow-up invitation, notify) | ✅ |

### Example: dynamic option labels

```
Q1: "Which products did you buy?"  (checkbox)
  □ Coffee maker
  □ Toaster
  □ Blender

Q2 (per product): "Rate the {{Q1.label}}"
```

Q2's title updates as the respondent fills in Q1. Choice-family answers pipe the picked option's label by default; use `.value` if you want the stable key.

### Fallback gotcha

If you reference a question that hasn't been answered yet, the placeholder evaluates to the fallback, or to an empty string if you didn't supply one. Always include a fallback for any pipe that could fire before its source is answered:

```
"Hi {{first_name|there}}, …"
```

This renders "Hi there," for visitors who haven't typed their name yet.

---

## Carry-forward options

Narrow a target question's options to those the respondent picked (or did not pick) in an earlier multi-pick question.

### Authoring

Add a rule on any question, set action to **Carry-forward options**. The popover asks for:

| Field | Description |
|-------|-------------|
| **From (source)** | A multi-pick question: `checkbox`, `rank`, or `image_multi` |
| **Into (target)** | Any choice-family question: `radio`, `checkbox`, `dropdown`, `image`, etc. |
| **Mode** | `Include selected` (only show picked options) or `Exclude selected` (hide picked options) |

### Two patterns

**Include, "rate what you used":**

```
Q4 "Which features do you use?" (checkbox)
  ☑ Search
  ☐ Calendar
  ☑ Messaging
  ☐ Profile

Q6 "Rate each feature you use" (matrix, rows = features)
  Carry-forward: Q4 → Q6 rows, mode: include
```

Q6 only shows rows for "Search" and "Messaging".

**Exclude, "which one didn't you try":**

```
Q4 "Which features did you try?" (checkbox)
  ☑ A
  ☑ B
  ☐ C

Q7 "Pick a feature you haven't tried" (radio)
  Carry-forward: Q4 → Q7, mode: exclude
```

Q7 only offers "C".

### Composition with quotas

Carry-forward and `quota` share the same option-filter pipeline at render time. A carry-forward rule narrows the list, then any quota rule removes options that have hit their cap. The respondent only ever sees options that pass both filters.

---

## Randomize / rotate

Shuffle a question's options per respondent. The shuffle is **deterministic**: the same respondent always sees the same order, so reloads and resume-from-email do not surprise them. Different respondents see different orders.

### Authoring

Question Inspector → **Advanced** tab → **Randomization** section.

| Control | What it does |
|---------|--------------|
| **Shuffle options per respondent** (checkbox) | Turns randomization on |
| **Always show last** (option list) | Pick options that should appear at the end regardless of shuffle |

### "Always last" pins

For options like **Other** or **Prefer not to say**, you want them randomized out of the way of the real choices but still visible, ideally always at the bottom so respondents trained on form patterns find them.

Tick each option you want pinned; pinned options appear in the order you ticked them, after the shuffled remainder.

Pinning requires a saved option (so the stable `option_key` exists). Brand-new options get a "(save the question first to enable pinning)" hint until they round-trip through the server.

### How the shuffle stays stable

The engine seeds a per-respondent random by combining hashes of `responseId` and `questionId` (XOR'd, Wang-style mixer) and runs a Fisher-Yates shuffle. The same respondent submitting the same survey on a different day still gets the same order on each question.

### Question type support

Any question with an `options` array: `radio`, `checkbox`, `dropdown`, `image`, `image_multi`, `rank`. Matrix `rows` and `cols` are not yet shuffleable. The indices are part of the answer's serialised shape.

---

## Quota / cap

Once N respondents have picked an option, hide it for everyone else.

### Authoring

Add a rule on any question, set action to **Quota / cap option**. The popover asks for:

| Field | Description |
|-------|-------------|
| **Target question** | The choice-family question carrying the cap |
| **Option** | Which option to cap (picker reads from the question's option list) |
| **Cap** | Maximum number of respondents who can pick this option. `0` means "always full", useful as a hard kill switch. |

### How it works

1. **Render time (client):** The SPA hits `siteApi.quotaAvailability(surveyId)` every 60 seconds and filters at-cap options out of the rendered choice list. Already-full options simply don't appear.
2. **Submit time (server):** Even if a tampered client tries to submit a capped option, the server runs an atomic `UPDATE … SET count = count + 1 WHERE count < cap`. The rows-affected count tells the server whether the slot was claimed. Lost races return HTTP 409 with a `quota_full` payload identifying the option.

### Example: workshop sign-ups

```
Q "Pick a workshop time"  (radio)
  9 AM, 11 AM, 1 PM, 3 PM

Rules:
  When option = 9 AM, quota cap 20
  When option = 11 AM, quota cap 20
  When option = 1 PM, quota cap 20
  When option = 3 PM, quota cap 20
```

Once 20 people pick 9 AM, that radio button disappears for the 21st respondent. If two people submit simultaneously and only one slot remains, the server picks one winner and 409s the other with a banner suggesting another time.

### Composition with carry-forward

Carry-forward narrows options first; quota then removes at-cap options. Both filters compose in a single render-time pass, with no double scanning and no flicker.

### Counter behaviour

Counters live in `#__survey_option_counters`. Manual reset (e.g. "open a new batch of slots") is currently a SQL operation; an admin UI for it is on the roadmap.

---

## Related

- [Routing](./rules-routing), for jumping vs. hiding
- [Rules Engine Overview](./conditional-rules-explained)
- [Context fields](./rules-context-fields#variant-fields). Combine with `$ab` for A/B-tested option ordering.
