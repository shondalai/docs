---
id: configure-cjforum-personal-messaging-pm-system
title: Configure CjForum personal messaging (PM) system
sidebar_label: Configure CjForum personal messaging (PM) system
sidebar_position: 20
---

CjForum includes a built-in personal messaging system designed to facilitate private conversations among forum members. Unlike an email server or a comprehensive messaging platform, the Personal Messaging (PM) system is specifically tailored for one-to-one communication within the forum community.

### Enabling the PM System

To activate the personal messaging system, utilize the permissions configurations. This provides the flexibility to permit or restrict access to the messaging system for various Joomla! user groups. To configure messaging permissions, navigate to Components -> CjForum and select the Options button on the toolbar. Proceed to the Permissions tab to access the CjForum permissions configuration and grant the &#8220;Messaging&#8221; permission to the desired user groups. It&#8217;s important to note that the PM system is exclusive to registered users; Public users cannot utilize this feature even if permissions are enabled.

### Creating a Menu Item

By default, any page in Joomla! defaults to the home page menu item unless a specific menu item is created. For the PM system, create a dedicated menu item for the &#8220;CjForum -> Messaging&#8221; view. This allows the pages related to the PM system to have their menu view.

### Using Personal Messaging

Once the Messaging permission is enabled for a particular user group, users can view the PM icon beneath the avatar of participants in topic replies. Additionally, a notification icon appears on the toolbar for any new messages. To send a quick PM, users can click on the PM button below the avatar, initiating a PM modal box where they can enter the title and message.

Users can access Messaging pages by clicking on the notification icon. Filters on the Messaging page enable users to sort Inbox and send items. The &#8220;Compose&#8221; button allows users to send messages to other registered users. When a user receives a PM, the notification icon on the toolbar indicates the number of unread messages. Conversations within personal messages are private and only visible to the involved parties.

When composing a new message, users can select recipients from the forum members. To exclude specific user groups from this listing, use the &#8220;Exclude User Groups&#8221; option in the CjForum component settings.

### Email Notifications

Users can receive email notifications for new messages and message replies. To enable email notifications, navigate to Extensions -> Plugins and edit the &#8220;CjForum – Topics&#8221; plugin. Under the Emails tab, activate the &#8220;New Message&#8221; and &#8220;New Message Reply&#8221; options. Subsequently, users will be notified via their registered email addresses when they receive a new PM.