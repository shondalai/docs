---
id: rules
title: Building Rules
sidebar_label: Rules
sidebar_position: 4
---

# Building Rules

Rules are where you decide what members earn. Nothing in Rewardify awards points or badges on its own: a rule is the instruction that says "when this happens, give that to this member". This page covers the Rules screen and walks the rule editor from top to bottom.

You will find the Rules screen under **Components -> Rewardify -> Rules**.

## What a rule is

A rule is a versioned decision built from five parts. When an event arrives, Rewardify reads each part in turn:

1. **Trigger** - the one event type the rule reacts to.
2. **Conditions** - optional filters on the event, so the rule only fires in the cases you want.
3. **Actions** - what to award (currency and/or a badge), and to whom.
4. **Limits** - throttles that stop a member earning from the rule too often, plus the new streak requirement.
5. **Schedule** - when the rule is allowed to fire.

Only **Published** rules are ever evaluated. A rule you are still working on stays a **Draft** and is ignored by the engine until you publish it.

> A rule with no trigger can never match an event, so Rewardify will not let you publish one. If you try to publish a rule that has no trigger selected, it is saved as a Draft instead.

## The Rules list

The Rules screen lists every rule, sorted with the **highest priority first**. Each card shows the rule name, its source (taken from the first part of the trigger, for example `content` or `user`), its status, version number, priority, and a summary of all five parts.

### Filtering and finding rules

- The status tabs along the top filter by **All**, **Published**, **Draft**, **Paused**, or **Retired**.
- When rules come from more than one source, a **source** dropdown lets you narrow to one subsystem (Content, User, Commerce, Forum, and so on).
- The search box matches the rule name, the trigger, and the plain-English summary.
- A **Clear** button resets the filters.

### Statuses (what each one means)

| Status | Evaluated? | Use it for |
|--------|------------|------------|
| Draft | No | A rule you are still building or testing. |
| Published | Yes | A live rule that awards members. |
| Paused | No | A live rule you want to switch off for now without deleting it. |
| Retired | No | A rule you have replaced or no longer use. |

Only **Published** rules fire. To switch a rule off, set it to Paused or Retired; both stop it firing while keeping its history.

### Priority and first-match-wins

When an event arrives, Rewardify looks at every published rule whose trigger matches that event, then works through them **from the highest priority number down**. The **first rule that fully matches wins**, and evaluation stops there. "Fully matches" means its conditions pass, its schedule is active, and its limits allow another award.

This is why priority matters when two rules could apply to the same event:

- Put your **more specific** rule at a **higher** priority than your general one. For example, "published article over 1000 words" at priority 60 should sit above "any published article" at priority 50, so the long article earns the bigger reward and the general rule does not also fire.
- If the high-priority rule does not match (its conditions fail, or its limit is already used up), evaluation falls through to the next rule down.

> First-match-wins is per event. One event awards from at most one rule. If you want a single event to grant points **and** a badge, put both actions in the **same** rule rather than splitting them across two.

The priority field lives in the editor and has a hint: higher runs first, and it affects stacking and stop-processing (the two lifecycle toggles described later).

## Opening the editor

Click **+ New rule** to start a blank rule, or **Edit** on any card to open an existing one. The editor fills the screen and presents the five parts as numbered stages. Above the stages are a **Rule name**, a **Priority**, and a **Release scope** (MVP or Later, a tag for your own planning).

The toolbar at the top has **Simulate**, **Save draft**, and **Publish** (which reads **Publish new version** when you are editing a rule that is already live). Editing existing rules also shows a **Delete** button.

## Stage 1: Trigger

The trigger is the single event type the rule listens for. It is matched exactly, so a rule on `user.registered` reacts only to that event and nothing else.

Pick the trigger from the dropdown. The list is populated from your **installed adapters**: every adapter declares the events it can report, and those are what appear here.

> If the trigger you expect is missing, the adapter that reports it is probably not installed or not enabled. Go to **Components -> Rewardify -> Adapters**, enable the adapter (and make sure its host component is installed), then come back. See [Integrations & Adapters](integrations.md).

Changing the trigger clears any conditions you had added, because the available fields come from the trigger's payload and a new trigger has different fields.

## Stage 2: Conditions

Conditions are optional filters on the event's data. A rule with no conditions fires on **every** event of its trigger. Add conditions when you only want to reward some of those events, for example articles over a certain length, or orders above a certain value.

Each condition is a field, an operator, and a value. The **fields come from the trigger** you chose in Stage 1, so you can only test data the event actually carries.

The operators are:

| Operator | Meaning |
|----------|---------|
| `eq` | equals |
| `neq` | does not equal |
| `gt` | greater than |
| `gte` | greater than or equal to |
| `lt` | less than |
| `lte` | less than or equal to |
| `in` | is one of a list |
| `nin` | is not in a list |
| `contains` | the field contains this value |
| `exists` | the field is present |

You can add several conditions and choose how they combine:

- **All** (the default): every condition must pass.
- **Any**: at least one condition must pass.

## Stage 3: Actions

Actions are what the rule awards. Each action becomes one transaction in the ledger. There are two kinds:

- **Grant currency**: choose a currency, an amount (a whole number), and a recipient. The currency list comes from your [Currencies](currencies.md) screen.
- **Award badge**: choose a badge and a recipient. The badge list comes from your [Badges](badges.md) screen.

Add as many actions as you need with **+ Add action**, and remove one with the cross at the end of its row.

### Recipients (who gets paid)

Every action names who it pays. The choices are:

| Recipient | Who it is |
|-----------|-----------|
| **Subject** | The member the event is about. |
| **Actor** | The member who performed the action. |
| **Author** | The author named in the event (`author_id`). |
| **Purchaser** | The buyer named in the event (`user_id`). |
| **Referrer** | The referrer named in the event (`referrer_id`). |

> Author, Purchaser, and Referrer read a specific value from the event. If that value is missing, the award is **dropped** rather than paid to the wrong person. They never fall back to the subject. Use Subject or Actor when you simply want to reward the member at the centre of the event.

You cannot publish a rule while any action is incomplete. A "Grant currency" action needs a currency, and an "Award badge" action needs a badge. The **Publish** button stays disabled with a note until every action is filled in.

## Stage 4: Limits

Limits keep a rule from being abused or paying out more than you intend. They are all optional. The per-event limits are:

| Limit | What it does |
|-------|--------------|
| **Per object** | How often the rule can pay for the same item (the same article, order, post, and so on). Choose **once per object**, **once per day**, or **unlimited**. |
| **Max awards / user / day** | The most times one member can earn from this rule in a single day. Leave blank for unlimited. |
| **Cooldown** | The minimum gap before the same member can earn from this rule again. Enter a number and a unit (seconds, minutes, hours, or days). |
| **Per lifetime** | How many times a member can ever earn from this rule. Choose **Unlimited**, **Only once, ever**, or **At most N times**. |

These four limits are checked at the moment an event arrives, and a held event has already passed its limit checks before it goes for approval.

### Streak requirement (new in v2)

Below the per-event limits is a separate **Require a streak** option. Turn it on when the reward should only be paid after a member performs the trigger on several **consecutive calendar days**, such as a daily login streak.

When you tick **Require a streak**, two controls appear:

- **Consecutive days**: how many days in a row are needed (2 to 366).
- **Repeat at each milestone (day N, 2N, 3N...)**: if ticked, the member earns again every time they complete another full run of N days. If left off, the streak pays once.

> A streak rule works differently from the per-event limits. The reward is granted by the streak engine **when the run completes**, not on every matching event along the way. Because of that, the four per-event limits above do not apply to a streak rule.

> Two important caveats:
>
> - A day that is **held** for approval (waiting on a moderator) breaks the run, because the engine has not confirmed that day yet. Keep the trigger's events trusted (server-verified) so the run is not broken by pending days. See [Events & Evaluation](events-and-evaluation.md) for trust and holds.
> - The **Simulate** tool does not simulate streak completion. It checks the trigger, conditions, and schedule, but it cannot tell you whether a member has reached day N of a streak.

#### Worked example: a 7-day login streak

You want to give members 100 bonus points for logging in seven days in a row, and to repeat the bonus for every further week-long run.

1. Trigger: `user.login`.
2. Conditions: none.
3. Actions: Grant **100 points** to **Subject**.
4. Limits: tick **Require a streak**, set **Consecutive days** to **7**, and tick **Repeat at each milestone**.
5. Schedule: **Always**.
6. Publish.

A member who logs in on seven consecutive days earns 100 points on the seventh day. If they keep logging in daily, they earn another 100 on day 14, day 21, and so on. Miss a day (or have a day held for review) and the run resets.

## Stage 5: Schedule

The schedule decides **when** the rule is allowed to fire. Outside its active window the rule simply does not evaluate. There are three modes:

- **Always** (the default): the rule is active whenever it is published.
- **Date window**: active only between a **From** and a **Through** date. Use this for a one-off promotion. The end date is inclusive of the whole final day.
- **Recurring**: active only on chosen days of the week and, optionally, within a daily time window. Pick the active days (leave them all off for every day) and set an **Active from** and **Until** time (leave both blank for all day). Times use the site timezone.

The schedule is checked against the time the event actually happened, so a delayed or retried event is judged fairly.

## Versioning: editing live rules safely

Rules are versioned so that history stays honest. When you **edit a published rule and publish the change, Rewardify saves a new version** and snapshots the old definition. The version number is shown on each rule card and in the editor header, and the editor's right-hand **Lifecycle** panel lists the version history.

> An award that has already been made never changes. If you raise a reward from 10 to 20 points, members who earned under the old version keep their 10. Only events that arrive after you publish the new version use the new amount.

This means you can adjust a live rule without rewriting the past. Past ledger transactions keep their original meaning.

### The Lifecycle panel

The right-hand panel in the editor also carries two toggles next to the status:

- **Stop processing**: when this rule matches, stop evaluating any lower-priority rules for that event.
- **Allow stacking**: whether this rule can combine with others (related to priority order).

Deleting a rule (from the editor's **Delete** button) removes the rule and its version history, but **past ledger transactions are kept**. Deletion cannot be undone.

## Trying a rule before you trust it: Simulate

The **Simulate** button (in the editor toolbar) dry-runs the rule against a payload you supply, with **no side effects**: nothing is awarded and nothing is written to the ledger. It tells you whether the trigger, conditions, and schedule would let the rule fire.

Simulate needs a trigger to be selected first. It does not check stateful limits (cooldowns, per-day caps, lifetime caps) or streak completion, because those depend on a member's real history. For the full picture, including the Event inbox and held events, see [Events & Evaluation](events-and-evaluation.md).

## Worked examples

### 1. Welcome bonus on registration

Give every new member 50 points when they register.

1. Trigger: `user.registered`.
2. Conditions: none.
3. Actions: Grant **50 points** to **Subject**.
4. Limits: set **Per lifetime** to **Only once, ever** (a member only registers once, but this is good practice).
5. Schedule: **Always**.
6. Publish.

### 2. Points for a published article over 500 words

Reward authors for substantial articles, but not short ones, and only once per article.

1. Trigger: `content.article.published`.
2. Conditions: add `word_count` `gt` `500` (use the field your content adapter provides). Match: **All**.
3. Actions: Grant **25 points** to **Author**.
4. Limits: set **Per object** to **once per object**, so re-publishing the same article does not pay again.
5. Schedule: **Always**.
6. Publish.

> If your general "any published article" rule already exists, give this 500-word rule a **higher priority** so the longer article earns the larger reward and the general rule does not also fire on the same event.

### 3. Daily login points

Give members 5 points for logging in, at most once a day.

1. Trigger: `user.login`.
2. Conditions: none.
3. Actions: Grant **5 points** to **Subject**.
4. Limits: set **Max awards / user / day** to **1** (or set a 24-hour **Cooldown**).
5. Schedule: **Always**.
6. Publish.

This is the per-event version of a login reward. If you instead want to reward a **run** of consecutive logins, use the streak requirement shown earlier.

## A note on manual grants

Events whose type starts with `manual.` skip rules entirely. That is how admin awards from [Manual adjustments](members-and-ledger.md) and developer SDK grants work: they post straight to the ledger without being evaluated by a rule. You do not build rules for those.

## Related pages

- [Currencies](currencies.md) - the currencies your Grant actions can award.
- [Badges](badges.md) - badges your Award badge actions can grant, and badges that earn themselves by their own criteria.
- [Events & Evaluation](events-and-evaluation.md) - the Event inbox, held events, trust levels, and the full Simulate & trace tool.
- [Integrations & Adapters](integrations.md) - enabling the adapters that supply your triggers.
