---
id: configuring-cjblog-badge-system
title: Configuring CjBlog badge system
sidebar_label: Configuring CjBlog badge system
sidebar_position: 8
---

CjBlog comes with integrated badges and points system. We already have corejoomla products integrated and the necessary plugins available for points system and badges system. Apart from corejoomla products, standard Joomla content, User, System and Kunena integrations also available in downloads section. If you would like to integrate your component with CjBlog, please see developer documentation.

## Setting up Badges System

Badges system allow you to assign badges to your users for the achievements. It is similar to ranking system, however user can have any number of badges at a time unlike ranks. To assign a badge to user you need to install the corresponding rule for it. For instance we have badges plugin available for Community Answers to assign badges when a user posts N number of questions etc.

There are two variations in badges:

- A badge assigned to user only one time
- A badge assigned to user any number of times

Consider the following example:

- Assign badge &#8220;Top Answerer&#8221; when user answers 10 questions
- Assign badge &#8220;Top Best Answerer&#8221; when 5 of user&#8217;s answers selected as best answers
- Assign badge &#8220;Top Asker&#8221; when user asks 20 questions
- Assign badge &#8220;Popular Writer&#8221; when one of the user article receives 10k page views

So in above example, a user can have one Top Answerer, one Top Best Answerer, one Top Asker badges assigned to his account. However he can have any number of Popular Writer badge assigned to his account because he can write any number of articles and they can reach 10k page views. In CjBlog, such badge is shown once but a number is shown to display how many times the same badge is won by the user.

So to install a badge rule file, go to Components->CjBlog->Badge Rules page. You can see a file upload box at the bottom of the page. Browse the rule file and click submit to install the rule. Once you install the plugin, you can create badges using the plugin.

There are two steps in creating the badges:

- Create Badge
- Create Badge Rule

## Create Badge

A badge can be used for multiple components. For example &#8220;Top User&#8221; badge can be used to assign to top poster in Kunena as well as Community Answers. So same badge can be appeared multiple times on user account based on participation on different component functions. If you do not want to assign same badge for different component actions, you can create different badges for different components. Two step process is created to allow assigning same badge for different components.

So follow the below step to create your first badge:

- Go to Badges page and click New on Toolbar
- Enter Title which is the name of the badge
- Enter Alias which is going to form your badge url or leave blank to let system create it
- Enter description which is for your reference. This is not shown to users.
- Select published status
- Select badge style &#8211; different color is assigned based on badge style.

## Create Badge Rule

The Second step is to create the badge rule so that badges are assigned responding to user achievements

- Go to Badge Rules page and click New
- You should be shown all installed badge rules. Click on the rule for which you want to add a badge
- Enter Title which is for your identification purpose of the badge
- Select the Badge you would like to assign when this rule is validated true
- Enter description which is unique to this rule &#8211; This description is shown to users &#8211; enter something meaningful like why this badge is assigned to user for example &#8220;Badge assigned for posting 10 questions&#8221;
- Select status and User access level &#8211; only users with selected access level will be assigned the badge. If you do not know what is this, leave it to public.
- Based on the rule you selected appropriate input boxes will be shown to take required input from you. For example, badge rule to assign badge for posting N number of questions require the number N &#8211; the number of questions. So it will show appropriate box and enter the number in it.
- Click Save and Close

Now your badge rule is successfully created and shown in Badge Rules page. When a user met the requirement (eg. the number you enter the previous step), he will be assigned the badge.

## Enabling Required Plugins

Please note that appropriate plugins should be enabled for proper functioning. Please note that these are Joomla plugins not the Badge Rule Plugins that you installed from Badge Rules page.

From plugin manager

- Enable CjBlog content plugin to allow badges assigned to users for posting articles, reaching N number of page views for his article etc.
- Enable CjBlog Kunena plugin to support events in Kunena forum
- Community Answers, Community Polls have built-in integration so no need to have any plugins for them.