---
id: installing-and-configuring-cjblog
title: Installing and configuring CjBlog
sidebar_label: Installing and configuring CjBlog
sidebar_position: 4
---

## Installation

Installing CjBlog no different than other Joomla extensions. A quick guide is available here: [http://docs.joomla.org/Installing_an_extension](http://docs.joomla.org/Installing_an_extension)

## Configuration Options

The first step after installation is configuring CjBlog. Go to Components->CjBlog in your administration control panel (ACP) and click on Options button on toolbar. You will be presented with a popup which has the following tabs. Every option is documented on their labels. So please go through each option documentation carefully.

### Articles

These are the options that change the behavior of CjBlog article listings pages. Please note that these are not the options for Joomla article pages. For Joomla article pages, you can still use your standard Joomla content options.

### Categories

These are the options that change the display of Categories listing page. Please note that the categories listing page is not a tree structure that you normally see in nested tree categories, rather it displays in user friendly table like structure with two level categories.

### Integration

These are the options that change the behavior of external integrations such as avatars, feeds etc.

### Features

While presently there is only option feature in this page, we will add new features as and when they are developed.

### Permissions

These are the permission settings for CjBlog component front-end as well as back-end.

## Menu items

**Note:** Menu items are the basic building blocks of CjBlog. Please do not skip this step.

CjBlog will not show its markup on articles which fall under Home menu item (for example top level categories which do not have corresponding menu item)

Menu items for CjBlog build the basic structure of front-end component. Without proper menu items in place, CjBlog will not display the features meant for them. By default CjBlog installer creates a menu &#8220;CjBlog&#8221; with all the required menu items. You can move these menu items to any other menu or under any other submenu items. CjBlog just needs these menu items published. Please configure the access levels of menu items as per your requirement (most common settings are already given to them).

Menu items not just control displaying features, they are also building blocks of your sef urls. All menu items are by default created under a parent menu item (Text Seperator) &#8220;blogs&#8221;. And other menu items such as user, profile, categories, articles, bloggers, badges, blog, form etc are created under &#8220;blogs&#8221; parent menu.

You may want to move these child menu items to another menu or use them as parent menu item itself. For example consider the profile menu item. You would want to have your user profile common across your website, so it would be good idea to have profile urls like below

http://www.mycommunitywebsite.com/profile/100-username.html

instead of

http://www.mycommunitywebsite.com/blogs/profile/100-username.html

so in this case you would change profile menu item&#8217;s parent as root instead of some other menu. Here are the list of menu items and their functions ( Name (alias) &#8211; functionality).

- Categories (categories) &#8211; Displays the categories table.
- Articles (articles) &#8211; Displays articles listings including latest, trending and popular articles listings.
- Users (users) &#8211; Displays the list of bloggers &#8211; latest and popular
- Badges (badges) &#8211; Displays all available badges by component
- Profile (profile) &#8211; Displays user profile
- Blog (blog) &#8211; Forms the urls for user blogs
- Form (form) &#8211; Displays front-end article submission form

Please note that all these menu items need NOT required to be visible on front-end through menu module. The toolbar available on CjBlog front-end will automatically take care of most functions. You just need these menu items at least in a hidden menu.

And finally, you need to have proper sef enabled URLs for your articles. The best practice is to create &#8220;Category Blog&#8221; or &#8220;Category List&#8221; menu item for each top level category for your Joomla articles. However yoou can create menu item for each category if you desire so.

## Users

The users page lists all users with their activity such as points, badges, articles etc. For the first time use, please click on Sync Users button to sync already existing users.