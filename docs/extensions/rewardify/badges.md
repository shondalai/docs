---
id: badges
title: Creating Badges
sidebar_label: Badges
sidebar_position: 5
---

# Creating Badges

Badges are the visible achievements members collect. This page covers the **Badges** screen and the full-page badge editor: the two ways a badge can be earned, how to build earning criteria, prerequisites, repeat limits, the reward on earning, hidden badges, and the tier and rarity taxonomy.

You will find the Badges screen under **Components -> Rewardify**, in the **Rules & rewards** section.

## The Badges screen

The screen shows every badge as a card. Each card displays the badge gem (its icon and tier), its rarity tag, a "repeatable" pill where it applies, and three stats: **Holders** (how many members have earned it), **Reward** (the currency granted on earning), and **Tier**.

- Click **+ New badge** to open a blank editor.
- Click any card to open that badge in the editor.

If you have not created any badges yet, the screen shows a "No badges yet" message. Create your first badge to start awarding achievements.

## The two ways a badge is earned

A badge can be granted in two completely different ways, and you choose by where you set it up. Both paths are idempotent, which means a member can never accidentally be awarded the same badge twice for the same reason.

### 1. By a rule action (`grant_badge`)

A rule on the [Rules](rules.md) screen can include a `grant_badge` action. When that rule matches a single event, it grants the named badge to a recipient there and then. Use this when:

- The badge should be earned from **one** thing happening (for example, "completed your profile" or "made your first post").
- You want the badge tied to the same filters, trust gate, and throttles you already set on a rule.

With this path you do **not** need to fill in any earning criteria on the badge itself. The badge just needs to exist and be set to Active. The rule does the deciding.

### 2. By the badge's own criteria

The badge editor has a **Criteria** tab where you describe what earns the badge using one or more steps. Rewardify watches incoming events, counts the ones that qualify, and awards the badge when the steps are satisfied. Use this when:

- Earning depends on a **count over time** (for example, "publish 10 articles", "log in on 7 consecutive days").
- You want a **progress bar**: members see how far along they are before they finish.

Criteria badges are always earned by the **subject** of the event, meaning the member the activity is about.

> Which to choose? If it is a single moment, use a rule's `grant_badge` action. If it is "do X a number of times", use the badge's own criteria. You do not need both for the same badge.

## Building earning criteria

Open a badge and go to the **Criteria** tab. At the top is a **Match all** / **Match any** control that decides how the steps combine:

- **Match all**: every step must be satisfied before the badge is awarded.
- **Match any**: satisfying any one step awards the badge.

Each step is lettered (A, B, C, and so on) and reads as a sentence:

> [trigger] happens [count] times [window] where [conditions]

### The fields in a step

| Field | What it does |
|-------|--------------|
| **Trigger** | The event type the step listens for. The list comes from your installed adapters (see [Integrations & Adapters](integrations.md)). |
| **Count** | How many qualifying events are needed. For example, `10`. |
| **Window** | The period the count is measured over (see below). |
| **where** (conditions) | Optional filters on the event payload. Leave empty to count every matching event. |

Click **+ Add another step** to add more, and the **x** on a step to remove it.

### The window options

The window controls how Rewardify counts:

- **over their lifetime**: every qualifying event the member has ever produced.
- **in last 365 days**, **in last 90 days**, **in last 30 days**: only events inside that rolling period count.
- **on consecutive days** (the streak window): this is special. Instead of counting events, Rewardify finds the longest run of back-to-back calendar days on which a qualifying event happened. A count of `7` with this window means "did this on 7 days in a row".

> The streak window counts **distinct calendar days**, not events. Three logins on Monday still count as one day towards a streak. The run resets if a day is missed.

### Conditions

Each step can carry conditions, shown under the word **where**. These filter the events the step counts, using the same operators as rules (`eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `in`, `nin`, `contains`, `exists`). Each step has its own all / any toggle for its conditions, so you can require every filter or just one. The available fields depend on the trigger you picked.

### The progress bar

While a member has not yet met the criteria, Rewardify stores a progress fraction. With **Match all**, progress is the average of how far each step has come (so two steps each half done shows roughly 50 percent). With **Match any**, the badge completes as soon as one step is finished. Members see this progress on their Badges tab in the front-end, which gives them something to work towards.

## Identity: name, icon, tier, rarity, status, visibility

The **Identity** tab covers how the badge looks and whether it is live.

- **Name**: the badge title members see.
- **Slug**: a stable identifier used in URLs and the API. It **cannot be changed after the first award**, so pick it carefully.
- **Description (private)**: internal notes shown only to admins.
- **Public criteria**: the plain-language "how to earn" text shown to members. This is separate from the actual criteria steps, so write it in friendly language.
- **Tier** and **Rarity**: chosen from the lists you maintain in **Settings -> Badge taxonomy** (see below).
- **Icon**: the glyph shown on the gem. Pick from the icon palette (spark, trophy, medal, crown, star, flame, and more).
- **Status**: **Active** or **Draft**. Draft badges are hidden from members and are never awarded. Set a badge to Draft to retire it without deleting it.
- **Visibility before earning**: how the badge appears to members who have not earned it yet.

| Visibility | What members see |
|------------|------------------|
| **Visible** | The badge and its criteria. |
| **Teased** | A silhouette and "???" with the earning conditions hidden. |
| **Secret** | Nothing at all. The badge is hidden entirely until earned. |

Use **Secret** for surprise or easter-egg badges. Use **Teased** when you want members to know something exists without telling them how to get it.

## Awards: reward, repeat limits, and schedule

The **Awards** tab covers what earning the badge grants and how often it can be earned.

### Reputation awarded (the currency reward on earning)

A badge can grant a currency the moment it is earned. By default this is **reputation**, set with the **Reputation awarded** field (entered as a whole number, shown as REP). The reward is posted to the [ledger](members-and-ledger.md) as a normal transaction. If for any reason the reward cannot be posted, the badge is still awarded; the reward is best-effort and never blocks the badge.

### Max times a member can earn

The **Max times a member can earn** field, together with **Repeatable achievement**, controls repeats:

- If **Repeatable achievement** is off, the badge is a one-time, unique achievement. A member earns it once and never again.
- If **Repeatable achievement** is on, the member can earn it up to the **Max times a member can earn** value.

> Repeatable re-earning works through the rule action path: each separate rule fire is a fresh earn. Criteria badges award once per member. If you want a badge a member can earn again and again from a count, grant it from a [rule](rules.md) action instead of from criteria.

### Other Awards options

- **Manual award**: when on, admins can grant this badge directly to a member without the criteria being met. The grant is recorded and audited.
- **Notify member on earn**: members are emailed when they earn the badge (see [Email Notifications](emails.md)).

### Schedule (availability)

The Awards tab also has a **Schedule** card that limits when the badge can be earned, which is handy for seasonal or campaign badges:

- **Always** (the default): the badge is always earnable.
- **Date window**: the badge can only be earned between an **Available from** and **Available until** date. Events outside the window do not earn it.
- **Recurring**: saved but not yet enforced. A badge set to Recurring stays earnable until a recurrence pattern is configured, so treat it like Always for now.

## Prerequisites

On the **Criteria** tab, the **Prerequisites** card lets you require other badges first. A member must already hold every prerequisite badge before this one can be earned. Pick badges from the **+ Add prerequisite** list; remove one with its **x**. Use this to build ladders, for example requiring a "First Article" badge before a member can earn "Prolific Author".

## Tier and rarity (Badge taxonomy)

The **Tier** and **Rarity** dropdowns on the Identity tab draw their options from **Settings -> Badge taxonomy**. Tiers (such as bronze, silver, gold) and rarities (such as common, rare, legendary) are configured there and shared across all badges, so define them once and reuse them. See the [Settings Reference](settings.md) for how to manage the taxonomy. Rarity also drives the colour of the badge's tag on the cards and in the editor.

## Deleting a badge

The **Delete** button (shown only when editing an existing badge) removes the badge definition. You cannot delete a badge that members have already earned. To retire such a badge, set its **Status** to **Draft** on the Identity tab instead.

## Worked examples

### Example 1: "First Article" (a rule action)

A member earns this the moment they publish their first article. Set it up as a single moment, so use a rule:

1. Create the badge in the Badges editor. Set the Name, Identity, and leave the Criteria tab empty. Set Status to **Active**.
2. Go to [Rules](rules.md) and create a rule.
3. Trigger: `content.article.published`.
4. Add a limit of **once ever** (perObject) so it only fires on the first article.
5. Add a `grant_badge` action that grants the "First Article" badge to the **author**.
6. Publish the rule.

### Example 2: "Prolific Author" (10 articles, lifetime)

A counted, criteria-based badge with a progress bar:

1. Create the badge. On the **Criteria** tab, leave the logic on **Match all**.
2. Add one step:
   - Trigger: `content.article.published`
   - Count: `10`
   - Window: **over their lifetime**
3. On the **Awards** tab, set **Reputation awarded** to whatever the badge is worth, for example `500`.
4. On the **Identity** tab, set Status to **Active**.

Members now see their progress climb from 0 of 10 as they publish, and the badge is awarded automatically on the tenth article.

### Example 3: "On a Roll" (7-day login streak)

A streak badge that rewards consistency:

1. Create the badge. On the **Criteria** tab, keep **Match all**.
2. Add one step:
   - Trigger: `user.login`
   - Count: `7`
   - Window: **on consecutive days**
3. On the **Awards** tab, decide whether it should be **Repeatable** (so members can earn it again on a fresh streak through a rule, or leave it as a one-time badge for criteria).
4. Set Status to **Active**.

A member who logs in 7 days in a row earns the badge. Missing a day resets the run, so the streak has to be unbroken.

## Related pages

- [Rules](rules.md) for the `grant_badge` action and trust, conditions, and throttles.
- [Settings Reference](settings.md) for the Badge taxonomy (tiers and rarities) and member tab visibility.
