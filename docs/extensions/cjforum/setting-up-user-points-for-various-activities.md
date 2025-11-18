---
id: setting-up-user-points-for-various-activities
title: Setting up user points for various activities
sidebar_label: Setting up user points for various activities
sidebar_position: 4
---

CjForum points system allows any Joomla extension to award points to users based on the activity they perform such as writing an article, reading an article, asking a question, voting on a poll etc. To make it possible, it comes with an extendable points rules system which can be used by the extensions to award points.

## Setup points rules

- Go to Extensions -> Plugin Manager -> Publish all required CjForum plugins
- Go to Components -> CjForum -> Points Rules page
- Click on Scan Rules button

Now all the rules available across all extensions will automatically gets scanned and installed automatically. You will be shown the list of rules installed after the above step. Once you install required points rule, all you need is to edit the rule and configure its options such as amount of points need to be awarded. The points can be negative which is equivalent to deducting points. This can be useful in situations like when a user deletes his points, his points shall also be deducted.

Now you have your rules setup, you can start using your components which are integrated with CjForum points system. To check out how many points awarded, for which rules etc, go to Components -> CjForum -> Points page.