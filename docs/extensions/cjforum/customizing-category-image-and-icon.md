---
id: customizing-category-image-and-icon
title: Customizing category image and icon
sidebar_label: Customizing category image and icon
sidebar_position: 16
---

CjForum allow you to configure category icon in two ways.

- Upload image

- Use FontAwesome icon

## Upload Icon

- Go to Components->CjForum->Categories

- Click on your category link

- Click Options tab

- Select and upload image in the Image option

- Clear your server and browser cache

## Use FontAwesome Icon

- Make sure &#8220;Content &#8211; CjForum&#8221; plugin is enabled in Plugin Manager

- Go to Components->CjForum->Categories

- Click on your category link

- Click Forum Options tab

- Enter FontAwesome css class in &#8220;Category Icon Class&#8221; text box, for example: fa fa-bullhorn fa-3x. This is the large icon.

- Enter FontAwesome css class in &#8220;Sub Category Icon Class&#8221; text box, for example: fa fa-bullhorn. This is small icon for subcategorie

Optionally you can customize the category row color using Bootstrap classes. Enter any of the following class name in &#8220;Category Row Class&#8221; text box (or your own custom class name)

- list-group-item-success

- list-group-item-warning

- list-group-item-danger

- list-group-item-info

- Clear your server and browser cache

FontAwesome class names are usually in the format fa fa-ICONNAME. Add fa-3x/fa-2x for showing large icon for the patent category. Please refer to FontAwesome documentation for most customization options. You can find all icons and their names at [https://fontawesome.com/v4.7.0/icons/](https://fontawesome.com/v4.7.0/icons/) 

Note: Top level categories will not show any category as they are used as sections.