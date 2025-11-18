---
id: configure-search-engine-friendly-urls-for-cjforum
title: Configure Search Engine Friendly URLs for CjForum
sidebar_label: Configure Search Engine Friendly URLs for CjForum
sidebar_position: 19
---

Search engine optimization is the key in developing any forum extension. CjForum comes with many search engine optimizations built-in such as proper meta tags, titles, microdata elements for topics, authors etc. However few things which you have to take care of in order to make these things complement to your SEO optimizations. Url structure is one such thing you need to build. Make a note of the following points.

- Once you build your URLs, it will become pretty touch to change them later as such changes will result in 404 page not found errors. So planning is the key to building any website.
Use htaccess URL rewriting as
- it will provide you the short URLs and removes unnecessary inde.php words from the urls. See [https://docs.joomla.org/Preconfigured_htaccess](https://docs.joomla.org/Preconfigured_htaccess)
it will add additional security to your website. You can harden security by extending htacces, see below
- [https://docs.joomla.org/Htaccess_examples_%28security%29](https://docs.joomla.org/Htaccess_examples_%28security%29)

- Create the menu items for all your top-level forum categories. Sub-categories menu items would make urls pretty, but they are optional. Menu item per category means you have more control over how you display the topics in each category, not just the URL structure.

Try to create menu items for all menu types provided by CjForum such as leaderboard, user profile, activity etc. They produce pretty SEO urls as well as provide you the per menu customization options. Apart from these, you can also do regular SEO optimizations like using metadata and meta key fields of categories, topics, menus etc.

CjForum nicely integrated with most of the features of Joomla CMS. Routing is one of the important aspects of it. The URLs of your forum are tightly integrated with the forums (categories) that you are going to create and their menu items.

- All URLs will take clues from their corresponding menu items
- URL for a topic may include the slugs taken from menu items, category etc.
- For better-looking URLs, menu items play a crucial role.

The following is the structure of any topic URL (when sef is enabled). sitename/menuitemname/category/../topicslug

You can replace the category names using the corresponding menu item. A typical menu structure looks like below.

![](/img/extensions/cjforum/2020-05-Cjforum_menu_struture.jpg)