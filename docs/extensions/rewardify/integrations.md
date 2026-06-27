---
id: integrations
title: Integrations & Adapters
sidebar_label: Integrations
sidebar_position: 12
---

# Integrations & Adapters

Rewardify does not watch other extensions directly. Instead, small plugins called adapters report what happens in those extensions, and Rewardify decides what each fact is worth. This page explains how that works and how to switch on each adapter that ships with the package.

## What an adapter is

An adapter is a Joomla plugin that listens to a host (Joomla core, a forum, a shop, and so on) and reports normalised events to Rewardify. When a member logs in, posts a topic, or completes an order, the adapter sends a fact such as `user.login` or `commerce.order.completed`. Rewardify then runs that fact through your [Rules](rules.md) and writes the result to the ledger.

A few things follow from this design:

- You do not write any code to use the shipped adapters. Install the plugin, enable it, and its events become available.
- When reporting events, an adapter only reports facts. It never reads balances and never touches the ledger, and Rewardify alone decides the reward. (Some adapters can also _fulfil_ rewards, a separate job covered just below.)
- Each adapter declares its triggers (the list of event types it can report). Those triggers are what you can pick from in the Rules and Badges editors. If an adapter is not present, its events do not appear there.

> An adapter that is installed but not yet wired to its host is harmless. The shipped adapters are written to stay quiet ("inert") when either Rewardify or their host is missing, so nothing breaks.

## Adapters that also fulfil rewards

An adapter can do a second job: as well as (or instead of) reporting events, it can **fulfil** a catalogue redemption. When a member spends a currency on a catalogue item, a fulfilment adapter delivers the real reward, and Rewardify holds the member's points safely in a reservation until it succeeds (if delivery fails, the points are returned). This is how members can earn real goods, not just a number that goes up. Two examples that ship with their own components:

- **EasyCommerce** (`plg_rewards_easycommerce`): redeem points for a single-use discount coupon, or for a product delivered as a zero-cost completed order. It is also an event source, reporting `commerce.order.completed` for purchases.
- **Community Quiz** (`plg_rewards_communityquiz`): redeem points for access to a course, quiz, or exam. It is also an event source, reporting quiz attempts and passes.

These adapters install with their own component (EasyCommerce, Community Quiz), not with the Rewardify package. Once installed and enabled, their providers appear when you build a catalogue item: you pick the provider and configure it (which coupon, which product, which course). See [Catalogue & Campaigns](redemptions.md) for building redeemable items, and [Building adapters](developer/adapters.md) if you want to add fulfilment for your own extension.

## The Adapters screen

Open **Components -> Rewardify -> Adapters** (under the Integrations section of the nav).

At the top you get four counters: Adapters installed, Healthy, Events today, and Needs attention. Below that, each installed adapter is shown as a card. First-party adapters sort to the front.

Each card shows:

- The adapter name, its ID (for example `plg_rewards_joomla`), and a release tag.
- A **First-party** marker on adapters built and maintained as part of Rewardify itself.
- The events the adapter **Emits**, shown as a row of event-type chips.
- Health figures once events start flowing: Last event, the count Today, and an Error rate.
- The adapter's trust level and schema version.
- An **Enable** or **Disable** button.

### Enabling and disabling

Use the **Enable** / **Disable** button on each card to switch an adapter on or off. Disabling an adapter stops it reporting; any rule that listened to its events simply stops receiving them. Enabling it again resumes reporting. Enabling or disabling here is the same as enabling or disabling the underlying plugin in Joomla's Plugins manager.

> When you enable an adapter, its triggers become selectable in the Rules and Badges editors. If you build a rule and cannot find the trigger you expected, check that the matching adapter is installed and enabled first.

### The "Host not installed" flag

Some adapters bridge to a third-party component (Kunena, HikaShop, Community Builder). The adapter card always appears once the plugin is installed, even before its host is, so you can plan ahead. When the host component is missing or disabled, the card shows a **Host not installed** flag. The adapter will not report anything until the host is present, but it is safe to leave enabled in the meantime.

## Shipped adapters

The package installs the following adapters. They live in three Joomla plugin groups: `rewards`, `kunena`, and `hikashop`.

### Joomla core (`plg_rewards_joomla`)

This is the reference adapter and it is always available, because it only needs Joomla itself. It is a first-party adapter in the `rewards` plugin group and reports `server_verified` events (the highest [trust level](rules.md)), so they clear any trust gate on a rule.

It reports these events:

| Event type | When it fires |
| --- | --- |
| `user.login` | A member logs in. Keyed once per member per day, so a "daily login" rule fires once a day. Carries a `method` field (`password` or `cookie`). |
| `user.registered` | A new member account is created. |
| `content.article.created` | An article is first created, in any state. |
| `content.article.published` | An article reaches the published state (including a draft promoted later). |
| `content.article.deleted` | An article is deleted. |
| `content.article.read` | A logged-in member views a single article. Keyed once per article per reader. |

The article events carry fields you can filter on in rule conditions: `article_id`, `author_id`, `category_id`, `word_count`, and `featured`. The read event also lets you reward the author (recipient `author`) rather than the reader.

**To enable:** go to **Adapters** and enable the Joomla core adapter, or enable the `PLG_REWARDS_JOOMLA` plugin in Joomla's Plugins manager.

### Community Builder (`plg_rewards_communitybuilder`)

This adapter connects Rewardify to Community Builder. It needs two halves to work, and this is the most common source of confusion, so read this carefully.

> **You need both halves.** The `plg_rewards_communitybuilder` plugin (in the `rewards` group) only declares the adapter and its triggers so they show up on the Adapters screen and in the rule editor. It does not, by itself, report any events. The actual events come from a companion plugin that installs inside Community Builder. Without that companion plugin, the adapter will appear and offer triggers, but no Community Builder events will ever arrive.

The events it declares:

| Event type | About |
| --- | --- |
| `communitybuilder.user.registered` | A member registers through Community Builder. |
| `communitybuilder.user.approved` | A member account is approved. |
| `communitybuilder.user.confirmed` | A member confirms their account. |
| `communitybuilder.user.firstlogin` | A member's first login. |
| `communitybuilder.user.login` | A member logs in. |
| `communitybuilder.profile.saved` | A member saves their profile. |
| `communitybuilder.connection.requested` | A connection request is sent. |
| `communitybuilder.connection.accepted` | A connection request is accepted. |
| `communitybuilder.connection.removed` | A connection is removed. |
| `communitybuilder.user.deleted` | A member account is deleted. |

The connection events carry `actor_id` and `target_id` so you can reward the right member. Triggers only appear in the editors when Community Builder (`com_comprofiler`) is installed and enabled.

**To enable:**

1. Install and enable the `PLG_REWARDS_COMMUNITYBUILDER` plugin (the `rewards`-group half).
2. Install the companion plugin inside Community Builder (the half that emits the events).
3. Make sure Community Builder itself is installed and enabled. Until it is, the Adapters card shows **Host not installed**.

### Kunena (`plg_kunena_rewardify`)

This adapter rewards forum activity in Kunena. It lives in the `kunena` plugin group, not the `rewards` group, because Kunena delivers forum activity only to plugins in its own group. It needs Kunena installed to do anything, and stays inert without it.

The events it reports:

| Event type | When it fires |
| --- | --- |
| `kunena.topic.created` | A member starts a new topic. |
| `kunena.reply.created` | A member replies to a topic. |
| `kunena.topic.deleted` | A topic is deleted. |
| `kunena.thankyou.given` | A member gives a "thank you". |
| `kunena.thankyou.received` | A member receives a "thank you". |
| `kunena.topic.favorited` | A topic is favourited. |
| `kunena.karma` | Karma is given. Carries a `direction` field (`up` or `down`). |

Topic and reply events carry `topic_id`, `author_id`, and `category_id`; the thank-you events carry `actor_id` and `target_id` so you can reward the giver or the receiver. Triggers appear in the editors only when Kunena (`com_kunena`) is installed and enabled.

**To enable:** install the `PLG_KUNENA_REWARDIFY` plugin, enable it on the Adapters screen (or in Joomla's Plugins manager), and make sure Kunena is installed. Without Kunena the card shows **Host not installed**.

### HikaShop (`plg_hikashop_rewardify`)

This adapter rewards purchases made through HikaShop. It lives in the `hikashop` plugin group and needs HikaShop installed to report anything.

It reports two events, using the shared `commerce.*` namespace:

| Event type | When it fires |
| --- | --- |
| `commerce.order.completed` | An order first enters a confirmed status (for example confirmed or shipped). |
| `commerce.order.refunded` | A confirmed order moves to a cancelled, refunded, or returned status. |

Only real sales count; carts, quotes, and sub-orders are ignored. Each event carries `order_id` and `order_total`, so you can build rules such as "award points worth a fraction of the order total". The adapter reports the fact only; it does not map products to points, because your rules decide the reward.

Because HikaShop and other shops (such as EasyCommerce) share the same `commerce.*` event names, a single "purchase" rule can reward orders from any of them. If you need to treat shops differently, a rule can match on the event source (`com_hikashop`).

**To enable:** install the `PLG_HIKASHOP_REWARDIFY` plugin, enable it on the Adapters screen (or in Joomla's Plugins manager), and make sure HikaShop is installed. Without HikaShop the card shows **Host not installed**.

## Building your own adapter

If you want to reward activity from an extension that has no shipped adapter, you (or your developer) can write one. An adapter is a small plugin that reports facts to Rewardify through its SDK. See the developer guide at [Building adapters](developer/adapters.md) for the event contract and a worked example.
