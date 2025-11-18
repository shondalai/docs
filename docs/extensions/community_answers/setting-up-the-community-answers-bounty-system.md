---
id: setting-up-the-community-answers-bounty-system
title: Setting up the Community Answers bounty system
sidebar_label: Setting up the Community Answers bounty system
sidebar_position: 2
---

## Introduction

Community Answers bounty system allows your users to use thier points to trade for best answers. Users can create bounties on thier questions with any amount of points. The points will be deducted immediately from the user account. The points will be awarded to the user who submitted the best answer. Users can setup expiry date or can choose to run bounty till an answer is accepted as best answer.

## Installing the rules

Point rules are provided for deducting points to the user who creates bounty and who wins the bounty. Depending on which points system you are using, you need to install the rules.

- CjForum: Rules are automatically installed through CjForum package. Go to CjForum rules page and click scan rules button to discover all available rules.
- CjBlog: Rules are available in CjBlog downloads section. Download and install the rules from CjBlog point rules page.
- Alpha User Points: Rules are available for download under Community Answers downloads section
- JomSocial: Points rules are bundled in main component package. After installing CA, go to JomSocial points rules page and discover points.
- EasySocial: Points rules are bundled in main component package. After installing CA, go to JomSocial points rules page and discover points.

After installing points rules, please enable them so that CA can takeover the control of them. No need to enter any point details on rules as the points are dynamic. By default question asker or users with manage access can create bounties.

## Bounties States

- Bounty runningState
- Bounty successfully awarded. User accepted an answer as best answer.
- Bounty returned, through the &#8220;Refund Points&#8221; link by the bounty creator. There are no answers received before the bounty expiry date.
- Answers received. Bounty is waiting to get awarded. It will be awarded when an answer accepted or an answer gets 2+ rating.
- No answers received before deadline. Bounty creator can either ask for refund or extend deadline.

## Cron Task

A manual cron task will run every 30 minutes to check the expired bounties and changes the state automatically. No manual intervention is required.

If you would like to disable bounty system, you can do so from Community Answers options.