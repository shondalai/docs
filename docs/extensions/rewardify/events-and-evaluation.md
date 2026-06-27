---
id: events-and-evaluation
title: Events & Evaluation
sidebar_label: Events & Evaluation
sidebar_position: 10
---

# Events & Evaluation

Every reward in Rewardify starts as an event: a fact reported by an adapter, such as "a member logged in" or "an order completed". This page explains where those events land (the Event inbox), how to test a rule safely before it goes live (Simulate & trace), and the two groups of settings that decide how events are processed (Evaluation and Anti-abuse).

## The event pipeline at a glance

When an adapter reports a fact, Rewardify turns it into a normalised event and moves it through a short pipeline:

1. **Received**: the event is recorded.
2. **Validated**: schema checks and duplicate detection run.
3. **Evaluated**: the rule engine decides what the event earns.
4. **Awarded**: a matching rule fired and the result is posted to the ledger.

The Event inbox shows this flow as a funnel strip across the top: Received, Validated, Evaluated, Awarded, and a final "Held / failed" stage for anything that needs your attention. The funnel is read straight from today's event counts, so it tells you at a glance how much activity is converting into rewards.

## Event inbox

The Event inbox lives under **Components -> Rewardify**, in the **Pipeline** section. It is a master and detail screen: a filtered list of events on the left, and the selected event's full detail on the right.

### Status filters

Above the list is a row of filter tabs. Each tab shows a live count:

| Tab | What it shows |
|-----|---------------|
| All | Every event, whatever its status |
| Awarded | Events that matched a rule and posted to the ledger |
| Held | Events waiting for an admin decision |
| Retrying | Events that hit a processing error and will be retried |
| Dead-letter | Events that exhausted their retries and need a human |

The list columns are Event (the event type, plus the rule it matched or the object it refers to), Source (the adapter that reported it, such as `joomla` or `kunena`), Subject (the member the event is about), Status, and When. You can sort by any column and page through the results. The **Export** button downloads every event matching the current filter as a CSV, not just the page you are viewing.

### What each status means

An event always carries exactly one status. These are the ones you will see:

- **Received**: the event has been recorded but not yet evaluated. This is normal and brief when Evaluation mode is Instant. In Queued mode an event stays Received until the drain task picks it up.
- **Awarded**: a Published rule matched and the result was posted to the ledger. This is the success state.
- **No match**: the event was evaluated and no Published rule applied to it. This is not an error. It simply means nothing was configured to reward that event. (No match events are filtered into the All tab rather than having their own tab.)
- **Duplicate**: the same event was reported twice and the repeat was safely ignored. Rewardify deduplicates on a per-source key so a host that double-fires cannot double-pay.
- **Held**: the event matched a rule, but it could not be awarded automatically because of trust or anti-abuse rules. It is waiting for you to approve or reject it. See [Approving a held event](#approving-a-held-event) below.
- **Retrying**: processing hit a temporary error. Rewardify will retry it automatically on the scheduler with a growing delay between attempts.
- **Dead-letter**: the event failed repeatedly (after five attempts) and gave up. It needs you to look at it.

> An event that is Held is different from one that is No match. A Held event would have earned something, but is waiting for a verdict. A No match event matched no rule at all and will never pay unless you add or change a rule.

### Reading an event's detail

Select any row and the right-hand panel shows two cards.

**Normalized event** is the full envelope: the event id, the event type, the schema version, the source adapter and its version, when it occurred, the actor and subject, the object it refers to, the correlation and idempotency keys, the trust level, and the raw payload as it was reported. This is exactly what the rule engine saw.

**Decision trace** explains the verdict. It names the rule the event was evaluated against (with its version), lists each condition as passed (a tick) or failed (a cross) with the value it actually got, and ends with a plain-language outcome such as "Reward issued", "No reward, conditions not met", "Held for moderation", or "Ignored, duplicate event". If a reward was issued, the trace also lists the resulting transactions: the recipient and amount for each currency, or the badge granted. For more on how rules reach these verdicts, see [Rules](rules.md).

### Approving a held event

Events are Held when Rewardify is not confident enough to pay automatically: the report came from a low-trust source, or an anti-abuse setting asked for client-reported events to be reviewed. The decision is frozen at the moment it was held, so approving it later pays exactly what it would have paid then, even if you have since edited the rule.

To clear a held event:

1. Open the **Event inbox** and select the **Held** tab.
2. Click the event to open its detail panel.
3. Read the **Decision trace** to confirm what it would award and to whom.
4. Click **Approve & credit** to post the reward to the ledger, or **Reject** to discard it with no ledger entry.

Approving credits the member straight away. Rejecting leaves no balance change and marks the event as resolved.

### Retrying and processing the queue

The toolbar at the top of the inbox has a few maintenance actions:

- **Process queue**: evaluates any queued events and any failed events that are due for another attempt, right now, without waiting for the scheduler. It is the on-demand equivalent of the `drain` scheduled task, running exactly the same work. It is handy for testing or to clear a backlog on demand.
- **Retry all failed**: re-queues every event currently in the Retrying state.
- On a single Retrying or Dead-letter event, **Retry now** re-queues just that one event from its detail panel.

## Simulate & trace

Simulate & trace, also in the **Pipeline** section, lets you test a rule against a made-up event before you turn it loose on real members. It runs the actual rule engine, so the verdict is the real one, but it writes nothing to the ledger. There are no side effects.

To run a simulation:

1. Open **Components -> Rewardify -> Simulate & trace**.
2. Under **Rule under test**, pick the rule and version you want to check.
3. Under **Simulate for member**, choose a member to run it as.
4. Fill in the **Event payload** fields. The event type is fixed by the rule's trigger and is shown for you. The payload fields offered are the ones the rule's trigger declares.
5. Click **Run simulation**.

The result panel shows the same **Decision trace** you see in the Event inbox: each condition marked passed or failed with the value it received, the outcome verdict, and the transactions that would post. Below it, the **Plain-language rule** card restates the rule in ordinary English so you can confirm it does what you intended.

> The simulator evaluates the rule's schedule and its conditions, and it shows what the actions would award. It does not apply throttles. Limits and cooldowns are not checked in a dry run, because those depend on real history that the simulation does not touch. Treat the simulated award as "what this rule would grant if no throttle were in the way".

A couple of things worth knowing:

- If you simulate a rule that is not Published, the panel warns you that the rule would not evaluate live events. The dry run still shows you the trace so you can check your work before publishing.
- Because nothing is written, you can run a simulation as many times as you like with different payloads to see exactly where a condition trips.

## Evaluation mode

Evaluation mode decides *when* events are evaluated. You set it under **Settings -> Evaluation** (see the [Settings Reference](settings.md)). There are two choices:

- **Instant** (recommended for most sites): the event is evaluated the moment it arrives. The member sees their reward immediately, and the event moves straight to Awarded, Held, or No match. This is the simplest setup because it posts rewards on the spot and needs no cron. It is recommended for most sites, but it is **not** the out-of-the-box default.
- **Queued** (the seeded default): incoming events are stored as Received and the `drain` scheduled task evaluates them in batches later. This spreads the work out and keeps the host action that reported the event fast, which can help on very high-traffic sites. Because this is the seeded default, a fresh install **requires** the `drain` scheduled task to be running, otherwise awarded events never post.

The trade-off is straightforward. Instant gives members an immediate reward but does the evaluation work inside the request that triggered it. Queued keeps those requests light, at the cost of a short delay before rewards appear.

> Out of the box the mode is Queued, so you **must** have the `drain` scheduled task running, otherwise events will pile up in the Received state and never pay out. See [Scheduled Tasks](scheduled-tasks.md) for how to set this up. If you would rather avoid cron entirely, switch the mode to Instant under **Settings -> Evaluation**, and the drain task is no longer needed for normal operation.

Whichever mode you pick, manual admin grants and any event whose type begins with `manual.` always evaluate instantly. They never wait in the queue.

## Anti-abuse settings

The Anti-abuse settings, under **Settings -> Anti-abuse**, are guard rails that stop the reward economy from being gamed. Each one is optional. Turn on the ones that match your risk.

### Global daily points cap per member

Sets a ceiling on how many points a single member can earn from all rules combined in one day. Once a member hits the cap, further awards that day are stopped. Use this when you want a predictable maximum and want to blunt anyone farming activity to run up a balance. Leave it off (or high) if you would rather not limit genuine power users.

### Cooldown between identical events

Ignores repeats of the *same* event from the same member within a short window. This catches accidental double-clicks and rapid-fire repeats of one action. It is a blunt, global guard. For fine-grained throttling tied to a specific rule (once per day, once ever, a cooldown of a chosen length), use that rule's own **Limits** instead. See [Rules](rules.md).

### Hold client-reported events for review

When on, any event that arrives below `trusted_source` trust is Held instead of awarded, so you can approve it by hand in the Event inbox. In practice that means `client_reported` and `unverified` events enter the moderation queue, while `trusted_source` and `server_verified` events pass straight through. Server-side adapters such as the Joomla core adapter report at `trusted_source` or above and are not affected. Turn this on while you are getting to know a new or less-trusted adapter, then turn it off once you are confident its reports are sound.

### Self-referral and self-vote prevention

Stops a member from earning by acting on their own content: voting for their own post, referring themselves, and so on. This is on the safe side to leave enabled. It works by checking that the member being rewarded is not the same person who performed the action.

> Anti-abuse settings apply across the whole site, on top of each rule's own limits. A rule's per-rule limits and the global anti-abuse guards both apply. The stricter one wins.

## Where to go next

- [Rules](rules.md) covers triggers, conditions, actions, limits, and how the engine reaches a verdict.
- [Scheduled Tasks](scheduled-tasks.md) explains the drain task that Queued mode depends on, plus expiry, reconcile, and prune.
- [Settings Reference](settings.md) lists every option in the Evaluation and Anti-abuse sections.
