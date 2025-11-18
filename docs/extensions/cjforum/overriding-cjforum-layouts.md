---
id: overriding-cjforum-layouts
title: Overriding CjForum layouts
sidebar_label: Overriding CjForum layouts
sidebar_position: 7
---

CjForum comes by default with a couple of themes, one based on Bootstrap v2 and other based on Bootstrap v3. You can override any of these themes to create your own theme.

## How to override a theme

To override a theme, copy a theme folder from **components/com_cjforum/layouts/themename** to **/templates/yourtemplatename/html/layouts/com_cjforum/themename**. Each theme has set of php files for complete forum pages. Modify the required layout with your changes. Here is the summary of list of layouts which you can override:

- profile &#8211; the folder contains list of layouts corresponding to profile page
- topic &#8211; the folder contains list of layouts corresponding to topic details page
- activities_list.php &#8211; this is the template file for listing activities
- attachments.php &#8211; this is layout file for showing attachments. most of the time you may not need to modify this.
- category_list.php &#8211; this is the layout for displaying categories list on the index page
- credits.php &#8211; this is the layout file for credits page. please keep the credits unchanged to give us credit.
- footer.php &#8211; this is the footer page on the categories/list layouts, shows forum statistics
- header.php &#8211; layout to display the header block including the logged in user avatar, login/logout form and shortcut urls.
- online_users.php &#8211; display online users statistics above footer
- toolbar.php &#8211; layout to show toolbar on top of each page
- topic_list.php &#8211; layout to display topics listing

More details about shareable layouts can be found here:
[http://docs.corejoomla.com/Extending_component_shareable_layouts](https://docs.corejoomla.com/Extending_component_shareable_layouts)