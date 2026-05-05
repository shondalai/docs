---
id: setting-up-activity-streams-system-for-sociable
title: Setting Up Activity Streams
sidebar_label: Activity Streams
sidebar_position: 4
---

## Overview

The Activity Stream is the heart of Sociable - a dynamic feed where users can share posts, photos, videos, and interact with content from their connections. It supports reactions, comments, sharing, and sophisticated privacy controls.

## Activity Settings Configuration

Configure activity settings in **Components → Sociable → Settings → Activities**:

| Setting | Description | Default |
|---------|-------------|---------|
| Require Post Approval | Posts need admin approval before publishing | No |
| Allow Media Uploads | Allow image and video attachments | Yes |
| Max Media Size (MB) | Maximum file size for uploads | 10 |
| Max Media Per Post | Maximum attachments per post | 10 |
| Allowed Media Types | Accepted file types | JPEG, PNG, GIF, MP4 |
| Enable Reactions | Allow reactions on posts | Yes |
| Enable Comments | Allow comments on posts | Yes |
| Enable Sharing | Allow sharing/reposting | Yes |

## Activity Types

Sociable supports various activity types:

| Type | Description |
|------|-------------|
| **post** | Standard text post |
| **photo** | Photo post with optional caption |
| **video** | Video post with optional caption |
| **share** | Shared/reposted content |
| **status** | Status update |
| **system** | System-generated activity (from integrations) |

## Creating Activities

### From the Frontend

Users can create activities from:

- **Main Feed** - Compose box at the top of the feed
- **Profile Page** - "What's on your mind?" composer
- **Group Page** - Group-specific post composer

**Post Features:**
- Text content with character limit (configurable)
- Multiple media attachments
- Visibility selection (public/friends/private)
- @mentions and #hashtags

### From Administrator

Administrators can manage activities:

1. Go to **Components → Sociable → Activities**
2. View all activities with:
   - Author information
   - Content preview
   - Visibility setting
   - Reaction/comment counts
   - Moderation status
3. Actions available:
   - Edit content/visibility
   - Publish/unpublish
   - Delete

## Post Visibility

Users can control who sees their posts:

| Visibility | Who Can See |
|------------|-------------|
| **Public** | Everyone, including non-logged-in visitors |
| **Friends** | Only approved friends/connections |
| **Private** | Only the author (personal notes) |
| **Group** | Only members of the specified group |

Visibility can be set per-post and defaults to the user's profile setting.

## Reactions

Sociable supports rich reactions beyond simple likes:

| Reaction | Description |
|----------|-------------|
| Like | 👍 General approval |
| Love | ❤️ Strong appreciation |
| Haha | 😂 Funny content |
| Wow | 😮 Surprising content |
| Sad | 😢 Sympathetic response |
| Angry | 😠 Disagreement |

### Enabling/Disabling Reactions

Toggle reactions in settings:
- **Enable Reactions** - Master toggle
- Individual reaction types can be enabled/disabled

## Comments

Comments allow threaded discussions on posts.

### Features

- **Nested Replies** - Reply to specific comments
- **Mentions** - @mention users in comments
- **Reactions** - React to comments
- **Edit/Delete** - Authors can modify their comments

### Moderation

- Post authors can delete comments on their posts
- Group moderators can delete comments in their groups
- Admins can delete any comment

## Sharing

Users can share interesting content:

### Share Types

| Type | Description |
|------|-------------|
| Repost | Share to own feed with optional comment |
| Quote | Share with added commentary |
| External | Share link to other platforms |

### Privacy Considerations

- Only public posts can be shared
- Group posts can only be shared within the group
- Original author is always credited

## Media Handling

### Supported Formats

**Images:**
- JPEG/JPG
- PNG
- GIF (including animated)

**Videos:**
- MP4

### Upload Limits

| Setting | Default | Notes |
|---------|---------|-------|
| Max file size | 10 MB | Per file |
| Max files per post | 10 | Combined images/videos |

### Processing

Uploaded media undergoes:
1. Validation (type, size)
2. Virus scanning (if configured)
3. Thumbnail generation
4. Multiple resolution versions

## Content Moderation

### Post Approval

When enabled, new posts go to a queue:

1. User creates post → Status: pending
2. Admin reviews in **Activities** section
3. Admin approves/rejects
4. User is notified (if configured)

### Spam Detection

Built-in spam filter checks for:
- Banned words/phrases
- URL spam
- Repetitive content
- Known spam patterns

Configure in **Settings → Moderation**:
- Enable Spam Filter
- Banned Words list

### User Reporting

Users can report inappropriate content:

1. Click the "..." menu on any post
2. Select "Report"
3. Choose reason (spam, harassment, etc.)
4. Submit report

Reports appear in **Components → Sociable → Reports**.

### Auto-Hide Threshold

Configure automatic content hiding:
- Posts hidden after X reports (default: 5)
- Hidden posts reviewed by admin
- Admin can restore or delete

## Feed Algorithms

### Feed Types

| Feed | Content Shown |
|------|--------------|
| **Home** | Posts from connections + trending |
| **Profile** | User's own posts |
| **Group** | Posts within a specific group |
| **Discover** | Trending public content |

### Ordering

Activities are ordered by:
- Creation date (newest first)
- Activity (recent comments bump posts)
- Relevance (engagement score)

## Notifications

Activity events trigger notifications:

| Event | Notification |
|-------|-------------|
| Reaction on post | In-app + email |
| Comment on post | In-app + email |
| Reply to comment | In-app + email |
| Post shared | In-app |
| Mentioned in post | In-app + email |

Configure notification preferences in **Settings → Notifications**.

## Activity Feed Module

Display activities anywhere using **mod_sociable_feed**:

| Option | Description |
|--------|-------------|
| Limit | Number of activities to show |
| Feed Type | All, following only, or public only |
| Show Avatar | Display author avatars |
| Show Reactions | Show reaction counts |
| Show Comments Count | Display comment count |
| Cache Time | Cache duration in seconds |

## SDK Integration

Developers can create and manage activities via the SDK. See
[Activity API](sociable-sdk-activity-api) for the complete reference.

```php
$sociable = \Joomla\Component\Sociable\Administrator\SDK\Sociable::getInstance();

// Push an activity. The first argument is an activity rule name — the rule
// must exist in #__sociable_activity_types (see "Activity Rules" below).
$activityId = $sociable->activities()->push(
    'com_myext.article.create',
    'New article published',
    'Short description / preview text',
    $userId,
    ['item_id' => $articleId, 'visibility' => 'public']
);

// Get the public feed.
$feed = $sociable->activities()->getFeed(['limit' => 20, 'offset' => 0]);

// Get activities for a single user.
$personal = $sociable->activities()->getUserActivities($userId, ['limit' => 20]);

// Reactions & comments.
$sociable->activities()->react($activityId, 'like', $userId);
$sociable->activities()->addComment($activityId, 'Great post!', $userId);
```

## Third-Party Integration

Sociable can display activities from integrated extensions. The whole
system is driven by **activity rules** — entries in
`#__sociable_activity_types` that declare which event names are allowed
to appear in the stream and how to render them.

### Activity Rules

Manage activity rules from **Components → Sociable → Badges → Activity
Rules**:

1. Click **Sync Rules** to discover and import every `sociable_rules.json`
   shipped by installed extensions
2. Toggle individual rules active/inactive (deactivated rules silently
   drop new pushes)
3. Edit the title, description, layout, asset name, and ordering
4. Add an ad-hoc rule by hand with **Create Activity Rule**

Sociable also runs the sync automatically on component install/update,
so customers don't usually need to click Sync Rules manually.

### Creating Custom Rules

For developers integrating custom extensions, the recommended path is to
ship a `sociable_rules.json` file at one of the discovery paths. The full
file format and discovery rules live in
[Registering Custom Rules](sociable-sdk-custom-rules).

Minimal example:

```json
{
  "version": "1.0",
  "component": "com_myext",
  "activityRules": [
    {
      "name": "com_myext.article.create",
      "assetName": "com_myext",
      "title": "New Article",
      "description": "Activity emitted when a user publishes an article.",
      "uiLayout": "activity.layouts.article",
      "state": 1
    }
  ]
}
```

## Best Practices

### For Site Administrators

- **Monitor the feed** - Regularly review reported content
- **Set clear guidelines** - Publish community rules
- **Use moderation** - Enable approval for new users if needed
- **Configure limits** - Set appropriate upload sizes

### For Performance

- **Enable caching** - Use page caching for feeds
- **Limit media size** - Smaller uploads = faster loading
- **Archive old content** - Consider archiving very old posts

## Next Steps

- [Points System](setting-up-the-points-system-for-sociable) - Award points for posting
- [Notifications](setting-up-notifications-in-sociable) - Configure activity alerts
- [Moderation](setting-up-moderation-in-sociable) - Advanced content moderation
