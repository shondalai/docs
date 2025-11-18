---
id: troubleshooting-tips-for-community-polls
title: Troubleshooting tips for Community Polls
sidebar_label: Troubleshooting tips for Community Polls
sidebar_position: 1
---

### Embed poll in an article using CONTENTPOLL shortcode does not work, I use JCE editor to insert the code.

In JCK Editor there is an option called “Process HTML Entities”. This option must be disabled. Otherwise the double quotes in `{CONTENTPOLL }` changed in html entities and your code cannot deal with this. The other option is add the short code by clicking Toggle Editor and type in plain textarea shown. Do not toggle editor till you save the article.

### How to I allow users to vote anonymously?

Select Anonymous flag during poll creation/edit. Anonymous polls will not record user location, id, ip address etc.

### How can I allow only few people I would like them to respond to poll?

Set Private flag during poll creation. Private polls will not be listed on front-end and are accessible only through the secret URL which you can find on poll details page after it is created.

### Does polls shared using Polls Anywhere feature require Joomla installed on user&#8217;s machines?

No. Polls Anywhere provides simple JavaScript code which can be used on any websites like blogs, personal websites etc. Every poll shared on user&#8217;s websites will carry your website url and link back.