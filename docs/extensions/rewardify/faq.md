---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
sidebar_position: 19
---

# Frequently Asked Questions

Short answers to the questions admins ask most often when setting up Rewardify. Each answer links to the page with the full detail.

## General

### What is the difference between points and reputation?

`points` (Community Points) are the default spendable currency: members earn them, and they can be deducted and redeemed in the Catalogue. `reputation` is lifetime standing that is never spent or deducted and never expires, and it is what drives a member's Level. See [Currencies](currencies.md) and [Levels](levels.md).

### Do points expire?

They can. Points are issued in lots, and by default a lot lives for 365 days. You can change that lifetime, or turn expiry off completely for lifetime points, under Settings -> Point expiration. Reputation never expires. See [Currencies](currencies.md) and [Settings Reference](settings.md).

### Can I have more than one currency?

Yes. The two currencies in use today are `points` (Community Points) and `reputation` (Reputation). A third currency, `event` (Event Credits), is a seasonal currency that is seeded but planned for a later release. Each currency declares whether it is spendable, whether it expires, how many decimals it uses, and its default lot length. See [Currencies](currencies.md).

### Where do members see their rewards?

In the member site app, which a Joomla menu item points at the Rewardify component. It has tabs for Overview, My rewards, Badges, Campaigns, Catalogue, Leaderboard, How to earn and Privacy. The optional tabs can be hidden under Settings -> Navigation. See [Settings Reference](settings.md).

## Rules and badges

### How do I stop a rule paying twice?

Use the Limits (throttles) part of the rule. You can cap a rule with `perObject` (once ever or once per day), `perUserPerDay`, `perUserLifetime`, or a `cooldown` between fires. See [Rules](rules.md).

### Why did my rule not fire?

Check these first: the rule is Published (only Published rules are evaluated), its Trigger exactly matches the event type, every Condition passes, the Schedule window is open, and no Limit has already been hit. Higher-priority rules win first, so another rule may have matched before it. You can confirm with Simulate and trace, and inspect what arrived in the Event inbox. See [Rules](rules.md) and [Events and Evaluation](events-and-evaluation.md).

### What is the difference between a rule reward and a badge?

A rule reacts to a single event and decides what to award right then (currency or a badge). A badge can also be earned by its own criteria: counted, windowed steps that accumulate over time (for example "publish 10 articles in 30 days"). Use a rule for "this event pays X", and a badge's own criteria for "reach a milestone". See [Rules](rules.md) and [Badges](badges.md).

### What is a streak?

A streak counts consecutive calendar days. On a rule it is a Limit that requires a set number of days in a row before the rule pays, with an optional repeat at each milestone. On a badge step it is a window measured as the longest run of consecutive days. See [Rules](rules.md) and [Badges](badges.md).

### A rule is held instead of awarding. Why?

The event arrived with a trust level below the rule's minimum, so the decision is held for an admin to approve rather than paid automatically. Server-side adapters (such as the Joomla core adapter) report `server_verified` and clear that gate. Approve held events in the Event inbox. See [Events and Evaluation](events-and-evaluation.md).

### Why did my award go to the wrong member, or not at all?

An award names its recipient: `subject`, `actor`, `author`, `purchaser`, or `referrer`. The payload-keyed roles (author, purchaser, referrer) never fall back to the subject, so if the key is missing the award is dropped rather than paid to the wrong person. See [Rules](rules.md).

## Integrations

### Which extensions are supported out of the box?

The package ships adapters for Joomla core (login, registration, article published), Community Builder, Kunena and HikaShop. Installed adapters are listed on the Adapters screen, where each can be enabled or disabled. See [Integrations and Adapters](integrations.md).

### Why does Community Builder need a second plugin?

`plg_rewards_communitybuilder` declares the adapter to Rewardify, but the actual events are emitted by a companion plugin that you install inside Community Builder itself. You need both for Community Builder events to reach the engine. See [Integrations and Adapters](integrations.md).

### Do I need Kunena or HikaShop installed?

Only if you want to reward their activity. The Kunena and HikaShop adapters are inert without their host component, and the Adapters screen flags "Host not installed" when the host is missing. See [Integrations and Adapters](integrations.md).

### Why can't I select a trigger in the Rules editor?

Triggers come from installed adapters: each adapter declares the event types it reports, and those are what become selectable in the Rules and Badges editors. If a trigger is missing, install and enable the adapter (and its host) that provides it. See [Integrations and Adapters](integrations.md).

## Members and data

### Can members hide from the leaderboard?

Yes. Only members who opted in (consent `on_leaderboard`) appear, and they can be shown by an alias instead of their real name. The setting Appearance -> Public leaderboard controls whether non-members can see top earners at all. See [Leaderboard](leaderboard.md) and [Privacy and Member Data](privacy.md).

### How do I manually give a member points?

Use Manual adjustments to post a grant, deduct or adjust against a member. Every manual change is written to the append-only ledger as an audited row. See [Members, Balances and the Ledger](members-and-ledger.md).

### How does GDPR erasure work?

`plg_privacy_rewardify` wires Rewardify into Joomla's data export and "right to be forgotten" requests, and member consent is stored in `#__rewardify_consent`. You manage this from the Privacy and data screen alongside Joomla's own privacy tools. See [Privacy and Member Data](privacy.md).

### What emails does Rewardify send, and can I change them?

It sends member emails such as points awarded, badge earned, level up and points expiring, from a catalogue of templates you can override and toggle on the Email templates screen. Settings -> Email branding sets the sender, header, brand colours and footer. See [Email Notifications](emails.md).

## Operations

### Do I need cron?

The installer seeds four scheduled tasks (drain, expire, reconcile, prune) that run on the Joomla scheduler. For these to run on time you need the scheduler triggered, either by web cron or a real cron job hitting the scheduler. The `drain` task is only needed when Evaluation mode is Queued. See [Scheduled Tasks](scheduled-tasks.md).

### Instant or Queued evaluation, which should I use?

The seeded default on a fresh install is Queued. Queued (asynchronous) stores events for the `drain` scheduled task to evaluate later, so in Queued mode that task must run or awarded events never post. Instant (synchronous) evaluates each event on the spot and posts rewards immediately with no cron required, which is what we recommend for most sites. Switch under Settings -> Evaluation. Events whose type starts with `manual.` always evaluate instantly, regardless of the mode. See [Events and Evaluation](events-and-evaluation.md) and [Settings Reference](settings.md).

### A member's balance looks wrong. How do I fix it?

Balances are a cache projected from the ledger, so they are always rebuildable. Run the reconcile task or use the rebuild projections operation in the Settings Danger zone to repair any drift, and post a Manual adjustment if a genuine correction is needed. See [Members, Balances and the Ledger](members-and-ledger.md).

### Can I edit a rule after it has paid awards?

Yes. Editing a rule bumps its version and snapshots the old definition, and any award already made never changes. Only Published rules are evaluated, and a rule with no trigger is forced to Draft. See [Rules](rules.md).

### How do I test a rule without affecting anyone?

Use Simulate and trace to dry-run a rule against a hypothetical payload. It has no side effects: nothing is awarded and nothing is written to the ledger. See [Events and Evaluation](events-and-evaluation.md).
