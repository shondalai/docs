---
id: overriding-sociable-layouts
title: Overriding Sociable layouts
sidebar_label: Overriding Sociable layouts
sidebar_position: 13
---

Sociable comes by default with themes for bootstrap2, bootstrap3 and bootstrap4. You can override any of these themes to create your own theme.

## How to override a theme

To override a theme, copy a theme folder from **components/com_sociable/layouts/themename** to **/templates/yourtemplatename/html/layouts/com_sociable/themename**. Each theme has set of php files for complete forum pages. Modify the required layout with your changes. Here is the summary of list of layouts which you can override:

- activity- this folder contains all layouts related to activity stream
- common &#8211; all common layouts like pagination are available in this folder
- groups &#8211; this folder contains all layouts related to groups
- profile &#8211; this folder contains all profile related layouts
- activity.php &#8211; main layout file for activity page
- groups.php &#8211; main layout file for groups page
- members.php &#8211; main layout for connect page
- notifications.php &#8211; main layout file for notifications page
- profile.php &#8211; main layout file for profile page

More details about shareable layouts can be found here:
[http://docs.corejoomla.com/Extending_component_shareable_layouts](https://docs.corejoomla.com/Extending_component_shareable_layouts)