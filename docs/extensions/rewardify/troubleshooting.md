---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 18
---

# Troubleshooting

This page lists the setup problems that come up most often, each shown as a symptom followed by numbered checks to work through in order. If none of these solve it, see the [FAQ](faq.md).

## Points are not being awarded

A member did something that should earn points, but nothing appears in their wallet or the [Transaction ledger](members-and-ledger.md). Work through these checks in order. The fastest way to see where an event stopped is to open **Components -> Rewardify -> Event inbox** and find the event: the **Decision trace** panel on the right tells you exactly what happened.

1. **Is the adapter enabled?** Go to **Adapters**. Find the integration that reports this activity (for example the core adapter for logins and articles, or the Kunena adapter for forum posts). If its button reads **Disable**, it is already enabled. If it reads **Enable**, click it. If the card shows **Host not installed**, see the next section.
2. **Did the event actually arrive?** Open the **Event inbox**. If the event is not in the list at all, the adapter never reported it. Confirm the adapter is enabled and that the action really happened (the right member, the right object).
3. **Does a Published rule match the trigger?** Open **Rules**. A rule is only evaluated when its status is **Published**. The rule's **Trigger** must match the event type exactly. You can confirm the event's type in the **Event inbox** (it is shown on each row and in the normalized event panel).
4. **Do the rule's conditions pass?** If the rule has **Conditions**, every one of them must be true (they are all ANDed). The **Decision trace** in the Event inbox shows whether conditions matched. To test a payload without changing anything, use **Simulate & trace**.
5. **Is the member inside the rule's limits?** A rule's **Limits** (throttles) can stop a repeat award: once ever, once per day, per user per day, per user lifetime, a cooldown, or a streak that needs several consecutive days first. If the member has already hit a limit, the rule will not pay again until the window resets.
6. **Was the event held for trust?** If the event shows the **Held** status, a rule required a higher trust level than the event carried, so the award is waiting for an admin. See [Events are sitting in held](#events-are-sitting-in-held) below.
7. **Is evaluation queued but the drain task not running?** If **Settings -> Evaluation** is set to **Queued**, events wait in `received` until the **drain** task processes them. See [Events are stuck in received status](#events-are-stuck-in-received-status) below.

> If the event type starts with `manual.`, it bypasses rules entirely and always evaluates instantly. Manual admin grants and SDK calls use this, so they are not affected by rule status, conditions, or limits.

## An adapter is missing or shows "Host not installed"

You expected an integration on the **Adapters** screen but it is absent, or its card carries a **Host not installed** tag.

1. **Is the adapter plugin installed and enabled in Joomla?** Adapters are Joomla plugins. Check **Extensions -> Plugins** and confirm the relevant plugin is installed and enabled. Adapters live in the `rewards`, `kunena`, and `hikashop` plugin groups.
2. **"Host not installed" means the host component is missing.** The Kunena adapter needs Kunena, the HikaShop adapter needs HikaShop, and the Community Builder adapter needs Community Builder. Until the host is present, the adapter stays inert and shows this tag. Install the host component and the adapter activates.
3. **Community Builder needs its companion plugin too.** `plg_rewards_communitybuilder` declares the adapter, but the actual events are emitted by a separate companion plugin that is installed inside Community Builder. Both pieces must be in place.
4. **Did you just update Rewardify?** A newly added adapter only appears after its plugin is installed. Reinstall the Rewardify package if an expected adapter never shows.

See [Integrations & Adapters](integrations.md) for the full list of bundled adapters and the events each one reports.

## Events are stuck in "received" status

Events appear in the **Event inbox** but never move past `received`. They are not awarded, held, or marked no match.

1. **Check your Evaluation mode.** Open **Settings -> Evaluation**. If it is set to **Instant**, events should evaluate on the spot, so a stuck queue points to a different problem (re-check the rule itself). If it is set to **Queued**, events are stored and wait for a scheduled task to process them.
2. **Confirm the drain task is scheduled and running.** In **Queued** mode the **drain** routine processes the backlog. Go to **System -> Scheduled Tasks** and confirm the Rewardify drain task exists and is enabled, and that your Joomla scheduler is actually firing (web cron or a real cron hitting the scheduler). See [Scheduled Tasks](scheduled-tasks.md).
3. **Process the queue manually to confirm.** On the **Event inbox** toolbar, click **Process queue**. This runs the drain immediately. If the events clear, your scheduler is the issue, not Rewardify.
4. **Consider switching to Instant.** Instant evaluation is the recommended mode for most sites and removes the dependency on the drain task entirely.

> Events whose type starts with `manual.` always evaluate instantly, even in Queued mode, so they will never sit in `received`.

## Events are sitting in "held"

The **Event inbox** shows events with the **Held** status, and the matching points were never credited.

1. **Held means a trust gate stopped an automatic award.** A rule required a minimum trust level (`server_verified`, `trusted_source`, `client_reported`, or `unverified`), and the event's trust was below it. Rather than pay out, Rewardify holds the event for an admin to decide.
2. **Approve or reject from the Event inbox.** Select the held event. In its **Decision trace** panel use **Approve & credit** to post the award, or **Reject** to discard it.
3. **Check the Anti-abuse setting.** **Settings -> Anti-abuse** has a **hold client-reported events for review** option. If that is on, client-reported events are held by design until you approve them. Turn it off if you trust that source, or leave it on and approve events as they arrive.
4. **Server-side adapters should not be held.** The Joomla core adapter and other server-side sources report `server_verified`, which clears any trust gate. If events from a server-side adapter are being held, double-check the rule's required trust level.

See [Events & Evaluation](events-and-evaluation.md) for more on trust levels and holding.

## The leaderboard is empty or missing members

The member leaderboard, or the `mod_rewardify_leaderboard` site module, shows no one or leaves out members you expected.

1. **Members must opt in.** Only members who gave consent (`on_leaderboard`) appear. A member who has not opted in is hidden, even with a high balance. Members manage this in their **Privacy** tab; you can review consent under **Privacy & data**.
2. **Check the module's Currency parameter.** The module ranks by a chosen currency balance. Its **Currency** parameter defaults to `reputation`. If you set it to a currency that members have not earned yet, the list will look empty. For most sites `reputation` or `points` is the right choice.
3. **Reinstall the module after updating Rewardify.** If you recently updated and the module renders blank or out of date, reinstall the Rewardify package so the module's assets are refreshed.
4. **Public visibility is a separate setting.** Whether logged-out visitors can see the leaderboard is controlled by **Settings -> Appearance -> Public leaderboard** (`appearance.public_leaderboard`). If non-members see nothing, check this first.
5. **Aliases are expected.** Members who chose an alias appear by that alias instead of their real name. That is correct behaviour, not a fault.

See [Leaderboard](leaderboard.md) for the full setup.

## Points never expire, or expire when they should not

1. **Check the master switch.** Open **Settings -> Point expiration**. **Points expire** must be on for any expiry to happen. If it is off, points are kept for life and nothing expires.
2. **Check the lot lifetime.** The **default lot lifetime (days)** sets how long a points lot lives (365 days by default). A very long value can look like points never expiring; a short value can expire them sooner than you intended.
3. **The expire task must run.** Expiry is applied by the **expire** scheduled task, which also notifies members ahead of expiry. If the task is not scheduled, or your Joomla scheduler is not firing, due lots are never expired. Check **System -> Scheduled Tasks** and see [Scheduled Tasks](scheduled-tasks.md).
4. **Reputation never expires.** This is by design. Reputation is lifetime standing and is always kept, regardless of any expiration setting.
5. **The `event` currency uses its own lots.** Campaign `event` currency has its own lot life (90 days by default). If a seasonal balance vanished, it likely reached the end of its lot, which is expected for a time-boxed currency.

## A member's balance looks wrong

A wallet total does not match what you expect from the [Transaction ledger](members-and-ledger.md).

1. **The ledger is the source of truth, not the balance.** Every balance is a cache projected from the append-only ledger. If the two disagree, the cache has drifted and can be rebuilt.
2. **Rebuild projections.** Run the **reconcile** routine, which rebuilds projections and repairs any balance cache drift. You can trigger a rebuild from the **Danger zone** bulk operations in **Settings**, and the reconcile task also runs on the Joomla scheduler. See [Scheduled Tasks](scheduled-tasks.md).
3. **Post a Manual adjustment only if the ledger itself is wrong.** If the ledger is correct but a one-off correction is genuinely needed, use **Manual adjustments** to grant, deduct, or adjust the member. This writes an audited `adjustment` row rather than editing history.
4. **Remember holds and reservations.** A pending redemption reserves its cost (a `reserve` hold), so the spendable balance can be lower than the raw total until the redemption is confirmed or released. That is correct, not drift.

## The member app page is blank

A site visitor opens the menu item for the Rewardify member app and sees an empty page, or nothing renders.

1. **Check the menu item target.** The member experience is a single React app shown by a Joomla menu item that points at the Rewardify component (the **app** view). Confirm the menu item is set to the correct Rewardify view.
2. **Confirm the front-end assets are built and present.** A blank page usually means the SPA bundle did not load. Reinstall the Rewardify package so the member app assets are deployed.
3. **Developer mode should be off in production.** **Settings -> Developer** has a dev server mode and a Vite dev server URL used only while building the SPAs. If dev server mode is on but no dev server is running, the page will not load. Turn it off for production.
4. **Check which tabs are enabled.** If specific tabs are missing rather than the whole page, the optional tabs (Campaigns, Catalogue, Leaderboard, How to earn, Privacy) can be hidden in **Settings -> Navigation**. A hidden tab is expected, not a fault.

## Still stuck?

If your problem is not listed here, the [FAQ](faq.md) covers common questions about how Rewardify behaves. For anything involving the pipeline, the [Events & Evaluation](events-and-evaluation.md) page explains how each event reaches a verdict.
