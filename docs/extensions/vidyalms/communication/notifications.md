---
title: Configure notifications and delivery
description: Choose delivery channels, decide which events send messages, and resolve missing notifications.
---

Open **Notifications** in the VidyaLMS workspace. A useful setup has three parts: a working delivery channel, a rule that decides when to send, and a template containing the message.

## Choose the channels you need

Use **Channels** to enable and configure the available delivery methods. **Email** uses your CMS's configured mail service. Check Joomla's mail settings or your WordPress mail delivery setup before investigating the LMS queue.

Optional packages can add in-app messages, webhooks, text messages, and device notifications. A channel being listed does not prove that its external service is connected. Complete its configuration and check whether the status still says setup is required.

If a field asks for a **credential reference**, it expects the name of a securely stored credential, not the password itself. References beginning with `env:` or `store:` point to credentials managed by the server administrator. Ask that person to create the credential and give you its reference.

## Decide what sends a message

Open **Notification rules** in the relevant site or course context. Choose the event, audience, delivery channel, timing, and template offered by the rule editor. For example, an assignment submission can notify the course instructors, while a graded attempt can notify the learner.

Review the audience before enabling the rule. An organization administrator audience should resolve to the relevant organization, not every administrator on the site.

Rules use available triggers and audiences supplied by installed features. Technical names such as token resolvers or schedule anchors describe supporting capabilities; they are not additional email providers that each need enabling.

## Pausing a rule versus disabling a channel

Pausing a rule prevents it from creating new messages. Messages already queued may still be processed.

Disabling a channel stops delivery through that channel, including important account or credential messages. Queued deliveries can be recorded as skipped. Use this wider control only when you intend to stop that delivery method entirely.

## Preferences, consent, and blocked addresses

Learners use **Notification preferences** to choose the available frequency for each message category and channel. Some essential messages are mandatory; the interface explains when a preference cannot suppress them.

Use the consent record to review recorded choices. Keep transactional messages and marketing messages in their appropriate categories. Enabling a rule does not override the consent requirements of that message type.

**Blocked addresses** or suppression records hold addresses that should not receive delivery, for example after bounces or complaints. Investigate the cause before clearing a block. **Delivery feedback** records supported bounce and delivery reports; a message accepted by the mail service is not proof that the recipient read it.

## Test without sending to everyone

Preview the [template](email-templates.md), then test the workflow with a designated account and a narrowly scoped event. Check queue processing, delivery feedback, preferences, and the recipient's inbox. Use [scheduled tasks](../maintenance/scheduled-tasks.md) if queued messages do not move.

For a multi-step sequence with conditions or delays, use [Automations](automations.md).
