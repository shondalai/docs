---
id: moderating-posts-in-cjforum
title: Moderating posts in CjForum
sidebar_label: Moderating posts in CjForum
sidebar_position: 8
---

CjForum moderation features are built into the permission system which allows greater control on which user group you want to allow post moderation.

To access permission settings, go to Components -> CjForum -> Click on Options button on the toolbar and click on the Permissions tab.

The following permissions are used for moderating topics and replies created by the users.

- Edit
- Edit State
- Delete
- Moderate Topics
- Moderate Replies

Tip: All these permissions can also be set up at the category level.

The permissions are divided into two groups based on whom they should be applied, i.e. moderators and users.

## Moderator Permissions

These permissions are given to the moderators or admin users whom you would like to give extra powers. The permissions can be given to any user group, so please take precaution before choosing the right group.

### Edit

Allow this permission to the user group whom you would like to allow editing posts. This permission gives the ability to edit any post in the allowed categories.

### Edit State

This is the superset of Edit permission and allows the users in the selected group to publish/unpublish topics and replies

### Delete

Users allowed for this permission can delete any topic or reply.

## User Permissions

### Moderate Topics

Topics created by any user with this permission will be sent for moderation. That means the user topics will not be published automatically and require moderator intervention. By default, an email will be sent to the predefined user group with the links to approve or reject the topic.

### Moderate Replies

All replies created by any user with this permission will be sent for moderation. That means the user replies will not be published automatically and require moderator intervention. By default, an email will be sent to the predefined user group with the links to approve or reject the reply.

**Note 1:** The default user group to whom the approval email sent is set up in the &#8220;CjForum &#8211; Topics&#8221; plugin options.
**Note 2:** Posts can always be published from backend by an administrative user.

## Custom Moderators (starting v3.1.0)

Starting v3.1.0, you can add moderator capabilities to regular forum users without giving above permissions. Of course, the moderators should have to Create and View permissions to see the forum posts.

### Adding new moderators

- Go to Components -> CjForum -> Moderators
- Click on New button on the toolbar
- Choose the user and category to which the user will be made as a moderator
- Optionally you can select date range during which the user can be a moderator
- Save

### How it works

The selected moderator will be given permissions to the following action on the selected category

- Edit posts
- Unpublish/trash posts

The custom selected moderators cannot delete the posts permanently. An admin is required to do this.