---
id: setting-up-groups-in-sociable
title: Setting Up Groups
sidebar_label: Groups
sidebar_position: 3
---

## Overview

Groups in Sociable allow users to create communities around shared interests, topics, or organizations. Members can discuss, share content, and organize events within groups.

## Group Types

Sociable supports three group visibility types:

| Type | Description |
|------|-------------|
| **Public** | Anyone can see the group, its posts, and join freely |
| **Private** | Anyone can see the group exists, but membership requires approval to view posts |
| **Secret** | Only members can see the group exists or find it in search |

## Group Roles

Each group has a role hierarchy:

| Role | Permissions |
|------|-------------|
| **Owner** | Full control - edit, delete group, manage all members and roles |
| **Admin** | Edit group settings, approve members, manage moderators and members |
| **Moderator** | Approve pending posts, remove content, manage members |
| **Member** | Post content, comment, participate in discussions |

## Group Settings Configuration

Configure global group settings in **Components → Sociable → Settings → Groups**:

| Setting | Description | Default |
|---------|-------------|---------|
| Allow Group Creation | Let users create groups from the frontend | Yes |
| Require Group Approval | New groups require admin approval before going live | No |
| Default Max Members | Maximum members per group (default limit) | 1000 |
| Allowed Group Types | Which group types users can create | All (public, private, secret) |

## Creating Groups

### From the Frontend

Users can create groups if enabled in settings:

1. Navigate to the Groups page
2. Click **Create Group**
3. Fill in required information:
   - **Name** - Group title
   - **Description** - Purpose and rules
   - **Type** - Public, private, or secret
   - **Category** - Optional category classification
   - **Avatar** - Group profile image
   - **Cover Image** - Group banner
4. Click **Create**

### From Administrator

Administrators can create groups directly:

1. Go to **Components → Sociable → Groups**
2. Click **New**
3. Configure all group settings
4. Set join approval preferences
5. Assign initial admins/moderators
6. Save the group

## Managing Groups

### Group Administration Panel

Group owners and admins can access group settings:

1. Open the group page
2. Click the settings/gear icon
3. Available options:
   - **Edit Group** - Update name, description, type
   - **Manage Members** - View and manage membership
   - **Pending Approvals** - Approve/reject join requests (private groups)
   - **Delete Group** - Permanently remove the group

### Member Management

Group admins can manage members:

**Approving Members (Private Groups):**
1. Go to the group's Members tab
2. Click **Pending** to view join requests
3. Approve or reject each request

**Changing Member Roles:**
1. Find the member in the Members list
2. Click the role dropdown
3. Select new role (member, moderator, admin)

**Removing Members:**
1. Find the member in the Members list
2. Click the remove/kick button
3. Confirm the removal

## Group Features

### Group Activity Feed

Each group has its own activity feed where members can:

- Create posts visible only to group members
- Share media (images, videos)
- React and comment on posts
- See all group activity in one place

### Group Events

Groups can host events:

- Group admins/moderators can create events
- Events appear in the group and in members' event feeds
- RSVP and attendance tracking
- Event discussions within the group

### Group Categories

Organize groups by category:

1. Go to **Components → Sociable → Categories**
2. Create categories for groups (e.g., Sports, Technology, Music)
3. Users can filter groups by category when browsing

## Join Policies

### Join Approval

Configure whether new members need approval:

| Policy | Behavior |
|--------|----------|
| **Open Join** | Anyone can join instantly |
| **Approval Required** | Join requests go to admins for review |

When approval is required:
1. User clicks "Join Group"
2. Request status becomes "pending"
3. Group admins receive notification
4. Admin approves or rejects
5. User is notified of the decision

### Invitations

Group members can invite others:

1. Go to group settings
2. Click **Invite Members**
3. Search for users to invite
4. Send invitation

Invited users receive a notification with the option to accept or decline.

## Group Notifications

Members receive notifications for:

| Event | Notification |
|-------|-------------|
| Invited to group | In-app + email (if enabled) |
| Join request approved | In-app + email |
| Join request rejected | In-app |
| New post in group | In-app (configurable) |
| Role changed | In-app + email |
| Removed from group | In-app + email |

## Admin Management

### Viewing All Groups

Administrators can manage all groups:

1. Go to **Components → Sociable → Groups**
2. View list of all groups with:
   - Name and description
   - Type (public/private/secret)
   - Member count
   - Creation date
   - Status

### Group Moderation

Administrators can:

- **Publish/Unpublish** - Toggle group visibility
- **Edit** - Modify any group settings
- **Delete** - Remove groups entirely
- **Assign Owners** - Change group ownership
- **View Activity** - Monitor group content

### Reported Content

When users report group content:

1. Go to **Components → Sociable → Reports**
2. Filter by group context
3. Review reported posts/comments
4. Take action (delete, warn, ignore)

## SDK Integration

Developers can interact with groups via the Sociable SDK:

```php
$sociable = Sociable::getInstance();

// Get group by ID
$group = $sociable->groups()->getById($groupId);

// List user's groups
$myGroups = $sociable->groups()->getUserGroups($userId);

// Check membership
$isMember = $sociable->groups()->isMember($groupId, $userId);

// Get member role
$role = $sociable->groups()->getMemberRole($groupId, $userId);
```

## Groups Module

Display groups anywhere on your site using the **Sociable Groups Module**:

1. Go to **Extensions → Modules**
2. Create new **mod_sociable_groups** module
3. Configure options:

| Option | Description |
|--------|-------------|
| Limit | Number of groups to display |
| Display Type | Grid, list, or compact view |
| Group Type | Popular, newest, active, suggested, or my groups |
| Category | Filter by specific category |
| Show Cover | Display group cover images |
| Show Member Count | Display number of members |
| Show Join Button | Show join/leave button |

4. Assign to module position and publish

## Best Practices

### For Site Administrators

- **Set clear guidelines** - Establish rules for group creation and moderation
- **Monitor activity** - Regularly review group reports and activity
- **Use categories** - Organize groups for easier discovery
- **Configure notifications** - Balance engagement without spam

### For Group Owners

- **Write clear descriptions** - Help users understand the group's purpose
- **Set appropriate visibility** - Choose the right group type
- **Moderate actively** - Keep discussions on-topic and respectful
- **Delegate moderation** - Assign moderators for larger groups

## Next Steps

- [Activity Streams](setting-up-activity-streams-system-for-sociable) - Configure post settings
- [Events](setting-up-events-in-sociable) - Set up group events
- [Notifications](setting-up-notifications-in-sociable) - Configure group notifications
