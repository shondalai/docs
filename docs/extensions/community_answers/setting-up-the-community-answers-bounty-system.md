---
id: setting-up-the-community-answers-bounty-system
title: Setting up the Community Answers bounty system
sidebar_label: Bounty system
sidebar_position: 2
---

The Community Answers bounty system lets users spend points to attract better answers. A bounty is attached to a question, shown on the question feed and bounty board, and awarded to the answer author when an answer is accepted.

## How Bounties Work

1. A signed-in user opens a question that is still open and has no accepted answer.
2. Community Answers checks the user's bounty permission and connected points balance.
3. The user selects an amount, duration, and optional message.
4. Points are deducted immediately from the connected points provider, or from Community Answers reputation when no external provider is used.
5. The bounty appears on the question, question feed, right sidebar block, and bounty board.
6. When an answer is accepted, active bounties on the question are awarded to the answer author.
7. Expired bounties are processed by the Joomla task plugin.

Users cannot start a bounty without sufficient balance. The bounty form is hidden once the question has an accepted answer or an awarded bounty.

## Enable the Bounty System

1. Go to **Components > Community Answers > Settings > Bounties**.
2. Enable bounties.
3. Configure the minimum amount, maximum amount, default duration, maximum duration, amount choices, and duration choices.
4. Configure whether expired bounties are refundable and whether they can be awarded after expiry.
5. Save the settings.

## Configure Permissions

Open **Components > Community Answers > Options > Permissions** and grant `ca.bounty.create` to the user groups that can start bounties.

Most sites should grant bounty creation to registered or trusted users only. Moderators and administrators can be allowed separately through Joomla ACL.

## Configure Reputation Gates

Go to **Settings > Reputation** and review the bounty threshold.

The bounty threshold controls the minimum reputation or connected points balance required before a user can create a bounty. If you use an external points provider, Community Answers reads the connected wallet balance and validates the selected bounty amount before saving.

## Connect a Points Provider

Go to **Settings > Integrations > Points** and choose a provider.

Recommended option:

- `auto`: Community Answers uses the Shondalai Core integration layer to detect a supported provider.

Specific provider options may include:

- Rewardify
- Sociable
- EasySocial
- JomSocial
- AlphaUserPoints

If no supported provider is available, Community Answers can fall back to its internal reputation balance. For production bounty communities, a connected points provider is recommended.

## Rewardify Rules

Community Answers ships Rewardify rules in the component package. Rewardify can discover these rules from the component admin directory.

Important bounty-related rules include:

- Create bounty
- Win bounty

Other Q&A actions such as asking, answering, voting, accepting answers, bookmarking, and moderation-related activity can also be connected through the available rules.

After installing or updating Community Answers, open Rewardify and scan or refresh rules so the latest Community Answers actions are available.

## Bounty Board

The bounty board is a frontend page with status tabs for:

- Active
- Expiring
- Awarded
- Expired

Create a Joomla menu item for **Community Answers > Bounty Board** so the page has a stable SEF URL. The question feed button should be labeled as the bounty board to avoid confusion with the leaderboard.

## Expiry Task Plugin

Community Answers includes the Joomla task plugin **Community Answers - Bounties**.

Enable it in **System > Plugins**. Then configure a scheduled task in Joomla to run the task plugin regularly.

Suggested interval: every 30 minutes.

The task checks expired bounties, updates their state, optionally refunds points depending on your settings, and writes notifications.

## Notifications

Bounty events can create in-app and email notifications:

- Bounty created
- Bounty awarded to the answer author
- Bounty awarded sponsor notice
- Bounty expired

Email templates can be edited in **Components > Community Answers > Email Templates**. The answer author and bounty sponsor use different notification content so awards are clear.

## Best Practices

- Set a realistic minimum bounty so bounties feel meaningful.
- Keep the maximum amount aligned with the points economy on your site.
- Use short duration choices such as 3, 7, and 14 days.
- Enable the bounty board menu item so users can find open rewards.
- Keep the task plugin running so expired bounties do not remain active.
- Test bounty creation with a low-balance user before launch.
