---
id: setting-up-the-badge-system-for-sociable
title: Setting up the badge system for Sociable
sidebar_label: Setting up the badge system for Sociable
sidebar_position: 11
---

#### Introduction

Badges are one of the effective ways of user retention and growing your site with more user activity. It encourages your users to participate in all activities and rewards them with badges according to their active participation. Sociable has a built-in badge system that allows you to do this.

#### Steps to setup badge system

- **Scan for rules**
Badges are created based on the user actions on your website. It can be something as simple as reading an article or posting a topic. Shondalai components can publish events allowing you to assign badges based on actions performed on the components.

To scan for all such rules, go to Extensions -> Sociable -> Badge Rules and click the Scan Rules button. This will scan all rules that are published by the extensions installed on your site.

- **Customize rules**
Once the rules are scanned, customize the rules by editing them. For example, you may want to assign a badge when 10 articles are posted. If you want to create multiple rules on the same action, edit the rule and click the &#8220;Save as Copy&#8221; button to create a new rule.

Select an image or a FontAwesome icon CSS class name to customize the badge look.

- **Enable plugins**
The badges are usually assigned by listening to the events. In Joomla, this is achieved by plugins. The following plugins should be enabled to assign respective badges to the users.

*Content &#8211; Sociable*: This plugin is needed to assign any articles-related badge.
*User &#8211; Sociable*: This plugin is needed to assign any badge related to the user&#8217;s actions.

* Badges related to the Sociable events does not require any special plugin.

- **Check assigned badges**
To see what badges are assigned to the users, go to Extensions -> Sociable -> Badges page.