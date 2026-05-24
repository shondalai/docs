---
id: rules-routing
title: Routing & Branching
sidebar_label: Routing
sidebar_position: 23
---

Four actions that move respondents through the survey in ways that go beyond "next page".

| Feature | Action type | Status |
|---------|-------------|--------|
| [Skip to page](#skip-to-page-number) | `skipto` (page target) | Stable |
| [Skip to named section](#skip-to-named-section) | `skipto` (section target) | Stable |
| [Loop / repeat block](#loop--repeat-block) | `loop` | Authoring plus `$loop.count` runtime. Full block-duplication on the roadmap. |
| [Random A/B path](#random-ab-path) | Any action gated on `$ab` / `$variant3` | Stable |
| [Disqualify with reason](#disqualify-with-reason) | `end` with message plus persisted `end_reason` | Stable |

The `show`, `hide`, and `require` actions also affect navigation by changing question visibility on the same page. Those are covered in [Conditional required](./rules-scoring#conditional-required) and the [overview](./conditional-rules-explained).

---

## Skip to page (number)

The simplest jump: go to page N.

### Authoring

Add a rule, action **Skip to page**, target kind **Page**, pick the page number from the dropdown.

### When to use

- Linear flow, no plans to reorder pages
- Quick prototypes where page slugs aren't worth maintaining

### Limitation

If you reorder pages later, `skipto page 4` keeps pointing at the page that *is now* page 4, not the page you originally meant. Prefer **named sections** for anything that will outlive its first authoring pass.

---

## Skip to named section

Each survey page can carry a stable **section slug**, a short identifier like `eligibility`, `thank-you`, or `power-user-deep-dive`. Skip-to-section targets resolve via slug, so reordering pages doesn't break rules.

### Authoring the slug

In the Builder canvas, every page divider shows a slug input next to its **Page N** label. Type a slug; the editor auto-canonicalises on commit (lowercase, hyphens, `[a-z0-9-]` only).

| Input | Stored as |
|-------|-----------|
| `Thank You Page` | `thank-you-page` |
| `Section 4` | `section-4` |
| `Promoter Path!!!` | `promoter-path` |
| `   ` | (slug cleared) |

Slugs are unique within a survey. The editor rejects a duplicate with a 409 and an error toast.

### Authoring the rule

Add a rule, action **Skip to page**, target kind **Section**, slug input.

### Resolution semantics

At evaluation time, the engine looks up the slug in `pagesBySlug`. Two graceful degrade paths:

- Slug typo or page deleted: the rule fires but the jump target is unresolvable, so it behaves as a no-op.
- Page with that slug exists but has no questions: the engine still navigates; the respondent sees the page's title/description and the "next" button.

### Example: branching to a thank-you variant

```
Pages:
  page 1: Intro
  page 2: Eligibility   (slug: eligibility)
  page 3: Detailed Q's
  page 4: Thank you (qualified)  (slug: thanks-qualified)
  page 5: Thank you (disqualified)  (slug: thanks-disqualified)

Rule on the eligibility question:
  When "Are you 18+?" = No, skipto section thanks-disqualified
```

Even if you later move page 4 between pages 2 and 3, the rule still jumps to the right page.

---

## Loop / repeat block

Repeat a block of pages once per item the respondent listed in an earlier question.

:::warning Partial implementation
The loop **rule action** is fully authorable and persists end-to-end. The engine exposes `$loop.count` so other rules can already gate on the iteration count. **Full canvas block-duplication is on the roadmap**: authors can save loop rules today but the iteration UI will land in a future release. Existing flow is unaffected.
:::

### Authoring

Add a rule, action **Loop over answers**. The popover asks for:

| Field | Description |
|-------|-------------|
| **Source question** | A multi-pick (`checkbox`, `rank`, `image_multi`) or text-with-newlines (`short`, `long`) question. The iteration count comes from the number of selected or listed items. |
| **Block start (section slug)** | The page slug that opens the loop block |
| **Block end (section slug)** | The page slug that closes the loop block |
| **Max iterations** | Safety cap (default 100). Stops a runaway "I pasted 5,000 lines" from rendering a 5,000-page survey. |

### What works today

`$loop.count` is set to the iteration count and surfaces as a score variable. Author other rules conditioned on it:

```
When $loop.count = 0, skipto section no-projects
When $loop.count > 10, end with message "Thanks, that's plenty for our research!"
```

### What's coming

The block range (`block_start_slug` to `block_end_slug`) is stored verbatim. The canvas-duplication renderer will:

1. Read the source answer.
2. Inject N copies of the block into the navigation order.
3. Tag each iteration's answers with the source item value (available via `{{$loop.item}}` piping).

When this ships, authored loop rules light up automatically. The data shape is forward-compatible.

---

## Random A/B path

Split respondents into deterministic buckets so half see flow A and half see flow B. Useful for question-wording experiments, layout A/B tests, or staggered rollouts.

### How the buckets work

Every response gets a stable assignment computed by hashing the response id:

| Context field | Buckets | Values |
|---------------|---------|--------|
| `$ab` | 2 | `A`, `B` |
| `$variant3` | 3 | `A`, `B`, `C` |

The same respondent always sees the same bucket. Closing the tab and resuming via email lands them on the same flow. Different respondents are evenly split (the hash is Wang-style; adjacent ids don't cluster).

### Authoring

The context field works in any rule condition:

```
When $ab = 'A', skipto section flow-a
When $ab = 'B', skipto section flow-b
```

Or layer onto other actions:

```
When $ab = 'A', show question wording-variant-a
When $ab = 'B', show question wording-variant-b
```

### Server enforcement

`$ab` and `$variant3` resolve identically on client and server. PHP mirrors the JavaScript hash, including the 32-bit mask to keep the modulus consistent. So a tag, quota, or auto-close rule gated on `$ab` fires for the same set of respondents on both passes, and analytics stay consistent.

### Example: question-wording A/B

```
Page 2:
  page slug: wording-a
  Q "How likely are you to recommend us?" (1–10)

Page 3:
  page slug: wording-b
  Q "On a scale of 1 to 10, how likely are you to recommend ProductName?" (1–10)

Rules on page 1's last question:
  When $ab = 'A', skipto section wording-a
  When $ab = 'B', skipto section wording-b
```

Then in Analytics, segment responses by which page they came from to measure the effect.

---

## Disqualify with reason

End the survey early with a reason that's stored on the response. The reason is facetable in reports and included in CSV exports.

### Authoring

Add a rule, action **End the survey**. The popover takes one field:

| Field | Description |
|-------|-------------|
| **End message** | The text shown to the respondent and stored on the response row as `end_reason`. Renders on the thank-you page. |

### What gets stored

When an `end` rule fires, the SPA forwards the `message` to the server as `end_reason` on the submit. The server persists it on `#__survey_responses.end_reason`. Visible in:

| Surface | How |
|---------|-----|
| **Response list** | Status badge flips from green "Complete" to neutral "Disqualified", with the reason in the tooltip |
| **Response detail panel** | Warning-tinted callout box surfaces the full reason verbatim |
| **CSV export** | New `end_reason` column. The status cell reads `disqualified` (vs. `complete` or `partial`). |
| **Analytics** | Facet on `end_reason` to filter "show me responses disqualified because of age" |

### Example: age-gate

```
Q "What is your age?"  (numeric)

Rule:
  When answer < 18,
  end with message: "Sorry, this survey is for adults only. Thanks for stopping by."
```

The under-18 respondents see the friendly message; analytics shows them as a separate cohort tagged with that reason.

### Combination: disqualify plus tag

The `end` action ends navigation. To also tag the response (e.g. for follow-up segmentation), pair with a `tag` rule on the same source question:

```
Rules on age question:
  1. When answer < 18, tag response with "under-age"
  2. When answer < 18, end with message "Sorry, this survey is for adults only."
```

Rule order matters. Keep the side-effect rule (`tag`) before the navigation rule (`end`) so the server processes both before the submit completes.

---

## Picking between routing options

| Use case | Best fit |
|----------|----------|
| Simple linear flow with one or two diverges | `skipto` page number |
| Anything you'll edit more than once | `skipto` named section |
| Per-item drill-down ("rate each project") | `loop` (when block-duplication ships) |
| Question-wording experiments | `$ab` plus `skipto` section |
| 50/50 or 33/33/33 cohort assignment | `$ab` (2) or `$variant3` (3) |
| Screening out ineligible respondents | `end` with reason |
| Hard goal stop ("close once we hit 500") | [`auto_close`](./rules-side-effects#auto-close) |

---

## Related

- [Survey Builder](./survey-builder). Page slugs are authored on the canvas dividers.
- [Rules Engine Overview](./conditional-rules-explained)
- [Context fields](./rules-context-fields). `$ab`, `$variant3`, `$loop.count` documented in detail.
- [Side-effects](./rules-side-effects), for "stop accepting responses" once a goal is met.
