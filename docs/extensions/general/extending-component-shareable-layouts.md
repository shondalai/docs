---
id: extending-component-shareable-layouts
title: Extending component shareable layouts
sidebar_label: Extending component shareable layouts
sidebar_position: 8
---

All corejoomla components uses Joomla shareable layout system so that they can be used anywhere with less configuration.

Please read more about shareable layouts here:
[https://docs.joomla.org/J3.x:Sharing_layouts_across_views_or_extensions_with_JLayout](https://docs.joomla.org/J3.x:Sharing_layouts_across_views_or_extensions_with_JLayout)

To override any component layout:

- Identify the layout file you would like to override
- Copy the layout files to your override directory
- Make modifications and you are good to go.

Joomla will search the overrides in specific folders in the order below. Whichever finds it first, it will use it.

 => /templates/yourtemplatename/html/layouts/com_componentname
 => /components/com_componentname/layouts
 => /templates/yourtemplatename/html/layouts
 => /layouts

So, for example, if you would like to override the layout file components/com_communityanswers/layouts/default/toolbar.php; copy the toolbar.php file to /templates/yourtemplatename/html/layouts/com_communityanswers/default/toolbar.php and do your modifications.