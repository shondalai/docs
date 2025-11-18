---
id: getting-started-guide-for-sociable
title: Getting started guide for Sociable
sidebar_label: Getting started guide for Sociable
sidebar_position: 14
---

## Introduction and setup

This guide allows you to set up a Sociable extension on your website. Before starting, make sure you have the necessary packages, such as the Sociable package and CjLib package, downloaded from the shondalai.com website. To learn more about how to install an extension, please read the following guide:

[https://docs.joomla.org/Installing_an_extension](https://docs.joomla.org/Installing_an_extension)

Once you install the CjLib package, make sure to update your MaxMind API key in the CjLib component options.
Read more at the following documentation.

> [Update GeoIP Database](https://docs.shondalai.com/general/update_geoip_database/)

Sometimes, Joomla does not enable all plugins by default during the installation process. To make sure all Sociable plugins are enabled, go to **Extensions -> Plugins -> Search for Sociable on this page.**. Please enable all required plugins. (make sure to enable Sociable System and User plugins)
Make sure to enable all core plugins. There are many integration plugins that are shipped with the package, you need not enable them if you do not have such a third-party extension installed on your site. For example, all Shondalai extension integration plugins can be found on the plugins page. Enable them only if you have respective extensions installed.

## Configuration

Sociable comes with many configuration options to customize the look and feel, features support, and so on. After installing the extension, go to Components -> Sociable and click on the Options button in the toolbar. Now you will be shown a list of configurable options. Each option is documented on its label for easy reference. Make sure to review all the options and customize them according to your needs.

- **Profile:** These options allow you to customize how the profile page looks and allow you to enable/disable the Sociable core features of profiles.

- **List Layouts:** These settings apply to the list layouts such as group topics listing etc.

- **Media settings:** These settings allow you to customize the behavior of user uploads and how the photos/videos are displayed on the wall etc.

- **Shared options:** These are the common settings that apply to the component.

- **Integration:** Using these settings, you can integrate the extension with third-party extensions, customize the default layout according to your template&#8217;s Bootstrap version, customize the color theme, etc.

- **Permissions:** These are permissions that you can configure to allow your users to authorize the functions available in the component.

## Permissions

On the options page, you can customize the component permissions in the Permissions tab. Every user group has certain permissions that you can allow. For example which user group can create posts etc. Configure the permissions according to your needs.

## Menu items setup

Once you set up the options and permissions, the next step is configuring the menu items. Apart from allowing your user access to the component, menu items define your component URLs. So they are very important in setting up search engine-friendly URLs and easy access to your extension pages. Sociable provides the menu item for each supported feature. You need not show all menu items on your front-end site. Simply add a new Menus, let&#8217;s say Sociable Menu, and add all available menu items of Sociable to these Menus. You can create a Menu Alias type menu item to link to one of these Menus in your Main Menu. This way, your users will be shown only one Menu item which is needed to access the site and other menu items are used to render the URLs. You can set up one of the Sociable menu items as your home page menu item if you would like to use Sociable as a default home page.

To learn more about Joomla menu creation, please read the following documentation.
[https://docs.joomla.org/Menu](https://docs.joomla.org/Menu)
[https://docs.joomla.org/Adding_a_new_menu_item](https://docs.joomla.org/Adding_a_new_menu_item)

## Multi-profile setup

Sociable allows you to configure multiple profiles according to your user groups. You will need to set up at least one profile that will act as a default/favorite profile and apply it to the user automatically when the user registers on your site. Any other profiles that you create can be assigned manually to the users (a feature available from v1.0.2). To learn more about how to set up multiple profiles, read the following documentation.

> [Configuring multiple profiles in Sociable](https://docs.shondalai.com/sociable/configuring_multiple_profiles_in_sociable/)

Please note that you must select Sociable as the profile/avatar system in the component options in order to use the built-in profile system. If you wish to use any supported third-party profile/avatars system you can do so by setting up the respective option in the component options. Go to Components -> Sociable click on the Options button the toolbar and click on the Integration tab to configure the integration settings.

If you are a developer and you would like to integrate Sociable profile and avatar systems into your custom extension, please read the following documentation.
https://docs.shondalai.com/sociable/sociable_profile_api/
[https://docs.shondalai.com/sociable/sociable_avatars_api/](https://docs.shondalai.com/sociable/sociable_avatars_api/)

## Initial user sync

When Sociable is installed for the first time, it will not have any information about your users. It needs to be synced up with your existing users in order to allow them to integrate with the Sociable profile system. To do this, go to Components -> Sociable -> Users and click on the Sync button on the toolbar. The process will show the progress and may take a while depending on the number of users existing on your site. Once the sync is completed, your user profiles are created and assigned default profiles according to the profiles that you created.

After the initial user sync, any new users created on your site will be automatically synced to the Sociable user system. Make sure you have enabled **&#8220;User &#8211; Sociable&#8221;** plugin in Extensions -> Plugins.

## Setting up the Points system

Sociable has a built-in points system that allows you to award points for the actions done on your site. To learn more about how to set up the points system, read the following documentation.

> [Setting up the points system for Sociable](https://docs.shondalai.com/sociable/setting_up_points_system_for_sociable/)

If you are a developer and you would like to extend the Sociable points system to your custom extensions, please read the following documentation.
[https://docs.shondalai.com/sociable/sociable_points_system_api/](https://docs.shondalai.com/sociable/sociable_points_system_api/)

## Setting up the Badge system

Sociable has a built-in badge system that allows users to get rewarded for active participation on your site and get involved. You can reward multiple different badges according to activity, for example when the user posts 10 photos, 20 photos, 50 photos, and so on. This way, your users will get the motivation to be involved in their interested pages.

To learn more about how to set up the badge system, please read the following documentation.

> [Setting up the badge system for Sociable](https://docs.shondalai.com/sociable/setting_up_badge_system_for_sociable/)

If you are a developer and would like to integrate your extension with Sociable badge system, read the following API documentation.
[https://docs.shondalai.com/sociable/sociable_badges_api/](https://docs.shondalai.com/sociable/sociable_badges_api/)

## Setting up the Activity Streams

Sociable has a built-in activity stream system that allows your users to post content directly on their wall and also allows you to integrate the content from supported third-party extensions. User privacy can be maintained using the scopes, i.e. the users can only see the content which they are allowed to see. They can set up the scope for each activity that they post on the wall. For example, the &#8220;Friends&#8221; scope can allow the posts visible to only the friends of the user and hidden from other users.

To learn more about how to set up the activity stream system, please read the following documentation.

> [Setting up activity streams system for Sociable](https://docs.shondalai.com/sociable/setting_up_activity_streams_system_for_sociable/)

If you are a developer and would like to integrate your extension with Sociable activity stream, please read the following API documentation.
[https://docs.shondalai.com/sociable/sociable_activity_stream_api/](https://docs.shondalai.com/sociable/sociable_activity_stream_api/)

## Setting up the Referrals system

Referrals are a great tool to invite like-minded people and grow the user network. By providing incentives such as awarding points, you can encourage your users to invite their friends to your site and grow their network. Sociable has built-in support for implementing the referral system and awards points and badges to the users who refer their friends to your site.

To learn more about setting up the referral system, please read the following documentation.

> [Enable referrals in Sociable](https://docs.shondalai.com/sociable/enable_referrals_in_sociable/)

## Setting up the Groups

User discussion groups in Sociable are the best tool to create private discussion forums on your site. Like-minded people can join the groups and discuss their topics of choice. Groups can be private groups or public groups.

To learn more about user groups, please read the following documentation.

> [Setting up groups in Sociable](https://docs.shondalai.com/sociable/setting_up_groups_in_sociable/)

## Posting comments

Comments can be posted on activities and photos. When posting comments, you can use basic HTML tags even though there is no HTML editor shown for posting comments. The HTML tags are repaired or corrected using a PHP tidy extension. Make sure your PHP installation has tidy installed and the module is enabled in your Apache configuration. If you do not have it installed, you can install it using the following method.

Or the commands

For Ubuntu:

sudo apt install libtidy-dev libtidy5 php-tidy

For Redhat/CentOS:

sudo yum install libtidy libtidy-devel

## Sociable modules and plugins

Sociable comes bundled with several add-ons such as required plugins, apps, etc. You can find more details about them in the following documentation:

> [Sociable modules and plugins](https://docs.shondalai.com/sociable/sociable_modules_and_plugins/)