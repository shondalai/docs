---
id: levels
title: Levels & Ranks
sidebar_label: Levels
sidebar_position: 6
---

# Levels & Ranks

A level is a rank, such as Newcomer or Veteran, that a member reaches as their lifetime reputation grows. You define the ladder of levels on the **Levels** screen, under Components -> Rewardify in the Rules & rewards section.

## How levels are derived

A level is never stored against a member. It is worked out from the member's lifetime [reputation](currencies.md) balance every time the engine posts to the ledger. The level screen sub-heading says it plainly: "Based on lifetime Reputation. Recomputed on each posting."

Because reputation is append-only (it can only rise and is never spent or deducted), a member's level only ever goes up. The single way a member can drop a level is if an administrator lowers their reputation, for example by posting a manual adjustment on the [ledger](members-and-ledger.md).

> Levels are derived from reputation, not from Joomla user groups. A level can optionally add members to a Joomla group as a side effect (see below), but the rank itself is always computed from the ledger. This means you can rebuild member ranks at any time, and removing a level simply recomputes everyone from the remaining levels.

## You need reputation rules for levels to mean anything

Levels read the reputation balance, and reputation only enters the ledger when a [rule](rules.md) awards it. Out of the box no member earns reputation until you publish rules whose actions grant the `reputation` currency.

So the practical setup order is:

1. Decide what behaviour should build long-term standing (publishing an article, completing an order, daily logins, and so on).
2. On the **Rules** screen, publish rules with a `grant` action that awards the `reputation` currency to the right recipient.
3. Keep the **Levels** ladder in step, so the reputation totals members accumulate map to sensible ranks.

If no rule grants reputation, every member stays on the lowest level forever.

## The seeded ladder

Rewardify installs with a five-band ladder you can edit, rename, or replace:

| Level | Reputation range |
|-------|------------------|
| Newcomer | 0 to 999 |
| Contributor | 1,000 to 4,999 |
| Regular | 5,000 to 14,999 |
| Veteran | 15,000 to 39,999 |
| Luminary | 40,000 and above |

Luminary is the top band: it has a lower bound but no upper limit.

## The Levels screen

The screen lists every level in a table with these columns:

- **Level**: the level name shown as a colour-tinted pill. A level that is not published shows a **Draft** tag.
- **Reputation range**: the band, for example `5,000 - 14,999`. The top level shows its floor followed by a `+`.
- **Perk**: the optional perk text for that rank.
- **Joomla group**: the Joomla user group mapped to this rank, or **None**.
- **Members**: how many members currently sit at this rank.

Each row has **Edit** and **Delete** buttons. The toolbar has **+ Add level** to create a new band and **Map to Joomla groups...** to set up group assignments in one place.

> Deleting a level cannot be undone, and member ranks recompute from the levels that remain. Removing a band does not remove reputation; it only changes which name a reputation total maps to.

## Editing a level band

Click **Edit** on a row, or **+ Add level** for a new one. The editor has these fields:

- **Name**: the rank name, for example `Veteran`.
- **Reputation from**: the lowest lifetime reputation that reaches this rank.
- **Up to**: the highest reputation still in this band. Leave this for the top level (see next).
- **Top level (no upper limit)**: turn this on for your highest rank. **Up to** is then ignored and the band runs from its floor upwards with no ceiling.
- **Rank colour**: pick one of the preset colours or choose any custom colour. A live preview pill shows how the rank will look, and the tint adapts to light and dark themes.
- **Perk**: optional free text describing what the rank gives, for example `Featured-author eligible`. This is descriptive only; it does not grant anything by itself.
- **Joomla user group**: optional. Members who reach this rank are added to the chosen group automatically. Leave it as **None** if you do not want any group change.
- **Published (drafts are not used for ranking)**: only published levels count when working out a member's rank. Leave a band as a draft while you are still designing it.

Save is blocked until the level has a name and a valid range. For a band that is not the top level, the **Up to** value must not be below **Reputation from**.

### Ranges must not overlap or leave gaps

The ladder works only if the bands line up cleanly from zero upwards:

- Each band's **Reputation from** should be one more than the previous band's **Up to**. In the seeded ladder, Contributor ends at `4,999` and Regular begins at `5,000`.
- Do not let two bands cover the same reputation value. If ranges overlap, a member's reputation could fall in two bands and the result is unpredictable.
- Do not leave a gap between bands. A reputation total that falls in a gap matches no level.
- Start the lowest band at `0` so brand-new members always have a rank.
- Give exactly one band the **Top level (no upper limit)** setting so the very highest earners always match.

> The editor checks a single band's own range (it stops you setting **Up to** below **Reputation from**), but it does not check one band against another. Lining the bands up with no overlaps and no gaps is down to you.

## Designing a sensible ladder for your site

A good ladder reflects how fast your members actually earn reputation. A few pointers:

1. **Work out a typical week's reputation.** Add up the reputation a fairly active member would earn in a week from your published rules. That tells you how quickly people climb.
2. **Make the early bands quick.** Members should reach the second rank within their first week or two so they feel progress early. Keep the first band small.
3. **Stretch out the higher bands.** Each band should take noticeably longer to reach than the one before, so a top rank stays a genuine achievement. The seeded ladder roughly triples each threshold.
4. **Keep the number of bands manageable.** Four to six ranks is usually enough. Too many and the names lose meaning.
5. **Use perks and colours to make ranks feel different.** Even short perk text and a distinct colour help members understand what each rank means.

Use the **Reputation range** column and the **Members** count to sanity-check your ladder after a week or two. If almost everyone sits in one band, your thresholds are probably too wide or too narrow for how your rules award reputation.

## Showing levels next to usernames

The **Settings** screen has an Appearance section with a **Show level beside usernames** option. When it is on, a member's current rank pill appears next to their name in the member-facing experience. Turn it off if you would rather keep ranks private to each member's own dashboard. See the [Settings reference](settings.md) for the full list of appearance options.

## Where members see their level

Members see their current level and how far they are from the next one on the Overview tab of the member site experience. Because the level is recomputed on every posting, a member's rank updates as soon as a rule grants them more reputation.
