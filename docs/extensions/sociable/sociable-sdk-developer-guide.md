# Sociable SDK - Developer Documentation

The Sociable SDK provides a modern, developer-friendly API for integrating with Sociable's social networking features. This guide covers all available APIs, usage examples, and best practices.

## Table of Contents

1. [Getting Started](#getting-started)
2. [SDK Instance](#sdk-instance)
3. [Profile API](#profile-api)
4. [Avatar API](#avatar-api)
5. [Points API](#points-api)
6. [Badge API](#badge-api)
7. [Activity API](#activity-api)
8. [Notification API](#notification-api)
9. [Connection API](#connection-api)
10. [Event API](#event-api)
11. [Group API](#group-api)
12. [Rule Engine](#rule-engine)
13. [Registering Custom Rules](#registering-custom-rules)
14. [Legacy API Migration](#legacy-api-migration)
15. [Best Practices](#best-practices)

---

## Getting Started

### Prerequisites

- Joomla 5.x or 6.x
- PHP 8.2 or higher
- Sociable component installed and configured

### Installation

The SDK is included with the Sociable component. No additional installation is required.

### Basic Usage

```php
use Joomla\Component\Sociable\Administrator\SDK\Sociable;

// Get the SDK instance (singleton pattern)
$sociable = Sociable::getInstance();

// Use any API
$profile = $sociable->profiles()->get($userId);
$sociable->points()->awardByRule('com_myextension.action.create', $userId);
$sociable->activities()->push('post.create', $userId, ['title' => 'New post created']);
```

---

## SDK Instance

The `Sociable` class is the main entry point for all SDK functionality. It uses a singleton pattern to ensure consistent state across your application.

### Getting the Instance

```php
use Joomla\Component\Sociable\Administrator\SDK\Sociable;

$sociable = Sociable::getInstance();
```

### Available API Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `profiles()` | ProfileApi | User profile management |
| `avatars()` | AvatarApi | Avatar image handling |
| `points()` | PointsApi | Points/rewards system |
| `badges()` | BadgeApi | Badge/achievement system |
| `activities()` | ActivityApi | Activity stream |
| `notifications()` | NotificationApi | Notification system |
| `connections()` | ConnectionApi | User relationships |
| `events()` | EventApi | Event management |
| `groups()` | GroupApi | Group/community management |
| `ruleEngine()` | RuleEngine | Rule evaluation and management |
| `legacy()` | LegacyBridge | Backward compatibility layer |

### Quick Shortcut Methods

For common operations, the SDK provides convenient shortcuts:

```php
// Award points
$sociable->awardPoints('com_extension.rule.name', $userId);

// Trigger badge evaluation
$sociable->triggerBadge('com_extension.badge.rule', $userId, ['posts' => 10]);

// Push activity to stream
$sociable->pushActivity('post.create', $userId, ['title' => 'New Post']);

// Send notification
$sociable->notify($recipientId, 'new_comment', ['actor_id' => $commenterId]);
```

---

## Profile API

Manage user profiles with full CRUD operations.

### Get a Profile

```php
$profile = $sociable->profiles()->get($userId);

// Returns array with user profile data:
// [
//     'id' => 123,
//     'user_id' => 42,
//     'handle' => 'johndoe',
//     'display_name' => 'John Doe',
//     'bio' => 'Software developer',
//     'location' => 'New York',
//     'website' => 'https://example.com',
//     'points' => 1500,
//     'followers_count' => 250,
//     'following_count' => 180,
//     ...
// ]
```

### Get Profile by Handle

```php
$profile = $sociable->profiles()->getByHandle('johndoe');
```

### Get Multiple Profiles (Batch)

```php
$userIds = [1, 2, 3, 4, 5];
$profiles = $sociable->profiles()->getBatch($userIds);

// Returns associative array keyed by user_id
// [1 => [...], 2 => [...], 3 => [...], ...]
```

### Update Profile

```php
$sociable->profiles()->update($userId, [
    'bio' => 'Updated bio text',
    'location' => 'San Francisco',
    'website' => 'https://newsite.com',
]);
```

### Check if Profile Exists

```php
if ($sociable->profiles()->exists($userId)) {
    // Profile exists
}
```

### Get Profile URL

```php
$url = $sociable->profiles()->getUrl($userId);
// Returns: '/community/profile/johndoe'
```

### Get Profile Link (HTML)

```php
$link = $sociable->profiles()->link($userId);
// Returns: '<a href="/community/profile/johndoe">John Doe</a>'

// With custom attributes
$link = $sociable->profiles()->link($userId, [
    'class' => 'profile-link',
    'target' => '_blank',
]);
```

---

## Avatar API

Handle user avatars with various sizes and formats.

### Available Sizes

| Size Key | Typical Dimension |
|----------|------------------|
| `xs` | 24x24 |
| `sm` | 32x32 |
| `md` | 50x50 (default) |
| `lg` | 100x100 |
| `xl` | 200x200 |

### Get Avatar URL

```php
$url = $sociable->avatars()->url($userId);
$url = $sociable->avatars()->url($userId, 'lg');  // Large size
```

### Get Avatar Image Tag

```php
$img = $sociable->avatars()->image($userId);
// Returns: '<img src="..." alt="John Doe" class="sociable-avatar sociable-avatar-md">'

// With options
$img = $sociable->avatars()->image($userId, 'lg', [
    'class' => 'rounded-circle',
    'loading' => 'lazy',
]);
```

### Get Linked Avatar (Clickable)

```php
$linkedAvatar = $sociable->avatars()->linked($userId);
// Returns avatar wrapped in profile link

$linkedAvatar = $sociable->avatars()->linked($userId, 'lg', [
    'class' => 'avatar-img',
], [
    'class' => 'avatar-link',
]);
```

### Check if User Has Avatar

```php
if ($sociable->avatars()->hasAvatar($userId)) {
    // User has uploaded a custom avatar
}
```

### Delete Avatar

```php
$sociable->avatars()->delete($userId);
```

---

## Points API

Award points to users and manage the points/rewards system.

### Award Points by Rule

```php
// Award points based on a registered rule
$sociable->points()->awardByRule('com_myextension.post.create', $userId);

// With reference to specific content
$sociable->points()->awardByRule(
    'com_myextension.post.create',
    $userId,
    $postId,      // Reference ID
    'posts'       // Reference table
);
```

### Award Custom Points

```php
// Award a specific number of points (bypass rules)
$sociable->points()->awardCustom(
    $userId,
    50,                  // Points amount
    'Bonus points',      // Description
    'bonus',             // Type
    $refId,              // Optional reference ID
    'bonuses'            // Optional reference table
);
```

### Get User Balance

```php
$balance = $sociable->points()->getBalance($userId);
// Returns: 1500
```

### Get Points History

```php
$history = $sociable->points()->getHistory($userId, [
    'limit' => 20,
    'offset' => 0,
    'type' => null,      // Filter by type
    'from_date' => null, // Filter by date range
    'to_date' => null,
]);

// Returns:
// [
//     'items' => [
//         ['id' => 1, 'points' => 10, 'description' => '...', 'created' => '...'],
//         ...
//     ],
//     'total' => 150
// ]
```

### Get Leaderboard

```php
$leaderboard = $sociable->points()->getLeaderboard([
    'limit' => 10,
    'period' => 'all',  // Options: all, year, month, week, today
]);

// Returns:
// [
//     'items' => [
//         ['user_id' => 1, 'points' => 5000, 'rank' => 1],
//         ['user_id' => 2, 'points' => 4500, 'rank' => 2],
//         ...
//     ],
//     'total' => 100
// ]
```

### Transfer Points

```php
$sociable->points()->transfer($fromUserId, $toUserId, 100, 'Gift transfer');
```

### Check Daily Limit

```php
if ($sociable->points()->canEarnMore($userId, 'com_myextension.post.create')) {
    // User can earn more points for this action today
}
```

---

## Badge API

Trigger badge evaluations and manage user achievements.

### Trigger Badge by Rule

```php
// Trigger badge evaluation based on rule conditions
$awardedBadges = $sociable->badges()->triggerByRule(
    'com_myextension.posts.milestone',
    $userId,
    ['posts' => 100]  // Values to evaluate against conditions
);

// Returns array of awarded badge IDs
// [5, 12]
```

### Award Badge Directly

```php
// Simple award
$sociable->badges()->award($userId, $badgeId);

// With reason (recommended - stored for audit/display purposes)
$sociable->badges()->award($userId, $badgeId, [], 'Reached 100 articles');

// With metadata and reason
$sociable->badges()->award($userId, $badgeId, [
    'source' => 'promotion',
    'campaign_id' => 123,
], 'Won the monthly writing challenge');
```

### Revoke Badge

```php
$sociable->badges()->revoke($userId, $badgeId);
```

### Check if User Has Badge

```php
if ($sociable->badges()->userHasBadge($userId, $badgeId)) {
    // User has this badge
}
```

### Get User Badges

```php
$badges = $sociable->badges()->getUserBadges($userId);

// Returns:
// [
//     'items' => [
//         ['id' => 1, 'title' => 'First Post', 'image' => '...', 'awarded_date' => '...'],
//         ['id' => 5, 'title' => 'Contributor', 'image' => '...', 'awarded_date' => '...'],
//     ],
//     'total' => 2
// ]
```

### Get All Available Badges

```php
$badges = $sociable->badges()->getAll(['published' => true]);
```

---

## Activity API

Push activities to the social stream and manage user activity feeds.

### Push Activity

```php
$activityId = $sociable->activities()->push('post.create', $userId, [
    'title' => 'John created a new post',
    'content' => 'Post content preview...',
    'context' => 'posts',
    'context_id' => $postId,
    'privacy' => 'public',
    'group_id' => null,
    'metadata' => ['category' => 'tech'],
]);
```

### Get Activity Feed

```php
// Get public feed
$feed = $sociable->activities()->getFeed([
    'user_id' => null,     // Filter by user
    'group_id' => null,    // Filter by group
    'type' => null,        // Filter by activity type
    'limit' => 20,
    'offset' => 0,
]);

// Get user's personal feed
$feed = $sociable->activities()->getFeedForUser($userId, [
    'limit' => 20,
]);
```

### Get Single Activity

```php
$activity = $sociable->activities()->get($activityId);
```

### Remove Activity

```php
$sociable->activities()->remove($activityId);
```

### Add Reaction

```php
$sociable->activities()->addReaction($activityId, $userId, 'like');
$sociable->activities()->addReaction($activityId, $userId, 'love');
```

### Remove Reaction

```php
$sociable->activities()->removeReaction($activityId, $userId, 'like');
```

### Add Comment

```php
$commentId = $sociable->activities()->addComment($activityId, $userId, 'Great post!');
```

### Get Comments

```php
$comments = $sociable->activities()->getComments($activityId, [
    'limit' => 20,
    'offset' => 0,
]);
```

---

## Notification API

Send notifications to users and manage notification preferences.

### Send Notification

```php
$notificationId = $sociable->notifications()->send($recipientId, 'new_comment', [
    'actor_id' => $commenterId,
    'message' => 'John commented on your post',
    'url' => '/posts/123#comment-456',
    'context' => 'posts',
    'context_id' => 123,
    'image' => '/path/to/image.jpg',
]);
```

### Send Bulk Notifications

```php
$recipientIds = [1, 2, 3, 4, 5];
$results = $sociable->notifications()->sendBulk($recipientIds, 'announcement', [
    'message' => 'New feature available!',
    'url' => '/announcements/1',
]);
```

### Get User Notifications

```php
$notifications = $sociable->notifications()->getForUser($userId, [
    'limit' => 20,
    'offset' => 0,
    'unread_only' => false,
    'type' => null,
]);

// Returns:
// [
//     'items' => [...],
//     'total' => 45,
//     'unread_count' => 12
// ]
```

### Mark as Read

```php
// Mark single notification
$sociable->notifications()->markAsRead($notificationId);

// Mark multiple notifications
$sociable->notifications()->markAsRead([1, 2, 3]);

// Mark all for user
$sociable->notifications()->markAllAsRead($userId);
```

### Get Unread Count

```php
$count = $sociable->notifications()->getUnreadCount($userId);
```

### Delete Notification

```php
$sociable->notifications()->delete($notificationId);
```

### User Preferences

```php
// Get preferences
$prefs = $sociable->notifications()->getPreferences($userId);

// Update preferences
$sociable->notifications()->updatePreferences($userId, [
    'email_enabled' => true,
    'push_enabled' => false,
    'types' => [
        'new_comment' => ['email' => true, 'push' => false],
        'new_follower' => ['email' => false, 'push' => true],
    ],
]);
```

---

## Connection API

Manage user relationships: followers, friends, and blocks.

### Follow/Unfollow

```php
$sociable->connections()->follow($followerId, $targetUserId);
$sociable->connections()->unfollow($followerId, $targetUserId);
```

### Check if Following

```php
if ($sociable->connections()->isFollowing($userId, $targetUserId)) {
    // User is following target
}
```

### Friend Requests

```php
// Send friend request
$sociable->connections()->sendFriendRequest($senderId, $recipientId);

// Accept friend request
$sociable->connections()->acceptFriendRequest($recipientId, $senderId);

// Reject friend request
$sociable->connections()->rejectFriendRequest($recipientId, $senderId);

// Cancel sent request
$sociable->connections()->cancelFriendRequest($senderId, $recipientId);
```

### Check Friend Status

```php
if ($sociable->connections()->areFriends($userId1, $userId2)) {
    // Users are friends
}
```

### Block/Unblock

```php
$sociable->connections()->block($blockerId, $targetId);
$sociable->connections()->unblock($blockerId, $targetId);

if ($sociable->connections()->isBlocked($userId, $targetId)) {
    // User has blocked target
}
```

### Get Followers/Following

```php
$followers = $sociable->connections()->getFollowers($userId, [
    'limit' => 20,
    'offset' => 0,
]);

$following = $sociable->connections()->getFollowing($userId, [
    'limit' => 20,
    'offset' => 0,
]);
```

### Get Friends

```php
$friends = $sociable->connections()->getFriends($userId, [
    'limit' => 20,
    'offset' => 0,
]);
```

### Get Mutual Friends

```php
$mutualFriends = $sociable->connections()->getMutualFriends($userId1, $userId2);
```

### Get Connection Counts

```php
$counts = $sociable->connections()->getCounts($userId);
// Returns: ['followers' => 250, 'following' => 180, 'friends' => 45]
```

---

## Event API

Create and manage events with RSVP functionality.

### Create Event

```php
$eventId = $sociable->events()->create([
    'title' => 'Community Meetup',
    'description' => 'Monthly community gathering',
    'start_date' => '2025-02-15 18:00:00',
    'end_date' => '2025-02-15 21:00:00',
    'location' => '123 Main Street',
    'organizer_id' => $userId,
    'group_id' => $groupId,  // Optional
    'privacy' => 'public',
    'max_attendees' => 50,
]);
```

### Get Event

```php
$event = $sociable->events()->get($eventId);
```

### Update Event

```php
$sociable->events()->update($eventId, [
    'title' => 'Updated Event Title',
    'location' => 'New Location',
]);
```

### Delete Event

```php
$sociable->events()->delete($eventId);
```

### List Events

```php
$events = $sociable->events()->getList([
    'user_id' => null,      // Filter by organizer
    'group_id' => null,     // Filter by group
    'upcoming' => true,     // Only future events
    'limit' => 20,
    'offset' => 0,
]);
```

### RSVP Management

```php
// RSVP to event
$sociable->events()->rsvp($eventId, $userId, 'attending');
// Status options: attending, maybe, declined

// Get user's RSVP
$status = $sociable->events()->getUserRsvp($eventId, $userId);

// Cancel RSVP
$sociable->events()->cancelRsvp($eventId, $userId);
```

### Get Attendees

```php
$attendees = $sociable->events()->getAttendees($eventId, [
    'status' => 'attending',  // Filter by status
    'limit' => 50,
]);
```

### Check Attendance

```php
if ($sociable->events()->isAttending($eventId, $userId)) {
    // User is attending
}
```

---

## Group API

Manage groups/communities with membership controls.

### Create Group

```php
$groupId = $sociable->groups()->create([
    'name' => 'Tech Enthusiasts',
    'description' => 'A group for technology discussions',
    'owner_id' => $userId,
    'privacy' => 'public',  // public, private, secret
    'category_id' => 5,
]);
```

### Get Group

```php
$group = $sociable->groups()->get($groupId);
```

### Update Group

```php
$sociable->groups()->update($groupId, [
    'name' => 'Updated Group Name',
    'description' => 'New description',
]);
```

### Delete Group

```php
$sociable->groups()->delete($groupId);
```

### List Groups

```php
$groups = $sociable->groups()->getList([
    'category_id' => null,
    'search' => null,
    'limit' => 20,
    'offset' => 0,
]);
```

### Membership

```php
// Join group
$sociable->groups()->join($groupId, $userId);

// Leave group
$sociable->groups()->leave($groupId, $userId);

// Check membership
if ($sociable->groups()->isMember($groupId, $userId)) {
    // User is a member
}
```

### Get User's Groups

```php
$groups = $sociable->groups()->getUserGroups($userId, [
    'role' => null,  // owner, admin, moderator, member
    'limit' => 20,
]);
```

### Get Group Members

```php
$members = $sociable->groups()->getMembers($groupId, [
    'role' => null,
    'limit' => 50,
    'offset' => 0,
]);
```

### Member Roles

```php
// Update member role
$sociable->groups()->updateMemberRole($groupId, $userId, 'moderator');

// Get member role
$role = $sociable->groups()->getMemberRole($groupId, $userId);
```

### Invitations

```php
// Invite user
$sociable->groups()->invite($groupId, $userId, $inviterId);

// Accept invitation
$sociable->groups()->acceptInvitation($groupId, $userId);

// Decline invitation
$sociable->groups()->declineInvitation($groupId, $userId);

// Get pending invitations
$invitations = $sociable->groups()->getPendingInvitations($userId);
```

---

## Rule Engine

The Rule Engine handles points and badge rule evaluation with JSON-based conditions.

### Condition Format

Rules use a JSON structure for defining conditions:

```json
{
    "condition": "AND",
    "rules": [
        {"field": "posts", "operator": "greater_or_equal", "value": 10},
        {"field": "comments", "operator": "greater", "value": 5}
    ]
}
```

### Supported Operators

| Operator | Description |
|----------|-------------|
| `equal`, `eq` | Equals |
| `not_equal`, `neq` | Not equals |
| `less`, `lt` | Less than |
| `less_or_equal`, `lte` | Less than or equal |
| `greater`, `gt` | Greater than |
| `greater_or_equal`, `gte` | Greater than or equal |
| `between` | Between two values (array) |
| `not_between` | Not between |
| `in` | In array of values |
| `not_in` | Not in array |
| `contains` | String contains |
| `not_contains` | String doesn't contain |
| `starts_with` | String starts with |
| `ends_with` | String ends with |
| `is_empty` | Value is empty |
| `is_not_empty` | Value is not empty |
| `regex`, `matches` | Regex match |

### Nested Conditions

```json
{
    "condition": "AND",
    "rules": [
        {"field": "posts", "operator": "gte", "value": 10},
        {
            "condition": "OR",
            "rules": [
                {"field": "likes_received", "operator": "gte", "value": 100},
                {"field": "comments_received", "operator": "gte", "value": 50}
            ]
        }
    ]
}
```

### Direct Rule Evaluation

```php
$ruleEngine = $sociable->ruleEngine();

$conditions = [
    'condition' => 'AND',
    'rules' => [
        ['field' => 'posts', 'operator' => 'gte', 'value' => 10],
        ['field' => 'followers', 'operator' => 'gte', 'value' => 100],
    ],
];

$userValues = [
    'posts' => 25,
    'followers' => 150,
];

if ($ruleEngine->evaluate($conditions, $userValues)) {
    // Conditions are met
}
```

### Get Rules

```php
// Get points rule by name
$rule = $sociable->ruleEngine()->getPointsRule('com_myextension.post.create');

// Get all points rules
$rules = $sociable->ruleEngine()->getPointsRules();

// Get badge rules by name
$badgeRules = $sociable->ruleEngine()->getBadgeRules('com_myextension.milestone');

// Get all badge rules
$allBadgeRules = $sociable->ruleEngine()->getAllBadgeRules();
```

---

## Registering Custom Rules

Third-party extensions can register their own points and badge rules.

### Register Points Rule

```php
$ruleEngine = $sociable->ruleEngine();

$ruleEngine->registerPointsRule([
    'name' => 'com_myextension.article.publish',
    'asset_name' => 'com_myextension',
    'title' => 'Publish Article',
    'description' => 'Points awarded when user publishes an article',
    'points' => 10,
    'type' => 'custom',
    'state' => 1,
    'auto_approve' => 1,
    'access' => 1,
]);
```

### Register Badge Rule

```php
$ruleEngine->registerBadgeRule([
    'name' => 'com_myextension.author.prolific',
    'asset_name' => 'com_myextension',
    'title' => 'Prolific Author',
    'description' => 'Awarded for publishing 50 articles',
    'rule_content' => [
        'condition' => 'AND',
        'rules' => [
            ['field' => 'articles', 'operator' => 'gte', 'value' => 50],
        ],
    ],
    'image_path' => 'media/com_myextension/badges/prolific.png',
    'state' => 1,
    'access' => 1,
]);
```

### Import Rules from XML

For batch importing rules, use XML format:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rules>
    <points_rule>
        <name>com_myextension.article.publish</name>
        <asset_name>com_myextension</asset_name>
        <title>Publish Article</title>
        <description>Points for publishing an article</description>
        <points>10</points>
        <type>custom</type>
        <state>1</state>
        <auto_approve>1</auto_approve>
        <access>1</access>
    </points_rule>
    
    <badge_rule>
        <name>com_myextension.author.prolific</name>
        <asset_name>com_myextension</asset_name>
        <title>Prolific Author</title>
        <description>Published 50 articles</description>
        <rule_content>{"condition":"AND","rules":[{"field":"articles","operator":"gte","value":50}]}</rule_content>
        <image_path>media/com_myextension/badges/prolific.png</image_path>
        <state>1</state>
        <access>1</access>
    </badge_rule>
</rules>
```

```php
$result = $sociable->ruleEngine()->importFromXml(JPATH_PLUGINS . '/sociable/myextension/rules.xml');
// Returns: ['points' => 1, 'badges' => 1]
```

---

## Legacy API Migration

If you're migrating from the legacy Sociable APIs, use the LegacyBridge for a smooth transition.

### Legacy to Modern Mapping

| Legacy Method | Modern Equivalent |
|---------------|-------------------|
| `SociableApi::getPointsApi()->awardPoints()` | `$sociable->points()->awardByRule()` |
| `SociableApi::getProfileApi()->getUserAvatar()` | `$sociable->avatars()->url()` |
| `SociableApi::getBadgesApi()->trigger()` | `$sociable->badges()->triggerByRule()` |
| `SociableApi::getStreamApi()->push()` | `$sociable->activities()->push()` |
| `SociableApi::getNotificationsApi()->push()` | `$sociable->notifications()->send()` |

### Using the Legacy Bridge

```php
// For gradual migration, use the legacy bridge
$bridge = $sociable->legacy();

// These methods work the same as old SociableApi
$bridge->getPointsApi()->awardPoints('rule.name', $userId);
$bridge->getProfileApi()->getUserAvatar($userId);
$bridge->getBadgesApi()->trigger('rule.name', $userId, $values);
$bridge->getStreamApi()->push($userId, 'post', 'create', 'Description');
$bridge->getNotificationsApi()->push($userId, $actorId, 'type');
```

> **Note:** Legacy methods will trigger E_USER_DEPRECATED warnings. Plan to migrate to modern SDK methods.

---

## Best Practices

### 1. Use Rule Names Consistently

Always use fully qualified rule names with your extension prefix:

```php
// Good
'com_myextension.article.publish'
'com_myextension.comment.create'

// Bad
'article.publish'
'publish'
```

### 2. Handle Errors Gracefully

The SDK methods return type-hinted values. Check for failures:

```php
$activityId = $sociable->activities()->push($type, $userId, $data);
if ($activityId === false) {
    // Handle error
    Log::error('Failed to push activity');
}
```

### 3. Use Batch Operations

When working with multiple users, use batch methods:

```php
// Good - single database call
$profiles = $sociable->profiles()->getBatch([1, 2, 3, 4, 5]);

// Bad - multiple database calls
foreach ($userIds as $userId) {
    $profiles[] = $sociable->profiles()->get($userId);
}
```

### 4. Leverage Caching

The SDK automatically caches frequently accessed data. Profiles and avatars benefit from caching.

### 5. Use Proper Event Types

Define clear activity types that describe the action:

```php
// Good
'post.create', 'post.update', 'post.delete'
'comment.create', 'comment.like'
'group.join', 'group.leave'

// Bad
'action', 'update', 'change'
```

### 6. Register Rules on Installation

Register your extension's rules during installation:

```php
// In your extension's install script
public function postflight($type, $parent)
{
    if ($type !== 'install' && $type !== 'update') {
        return true;
    }
    
    $sociable = Sociable::getInstance();
    $rulesFile = __DIR__ . '/sociable_rules.xml';
    
    if (file_exists($rulesFile)) {
        $sociable->ruleEngine()->importFromXml($rulesFile);
    }
    
    return true;
}
```

### 7. Clean Up on Uninstall

Remove your extension's rules when uninstalling:

```php
// Clean up points rules
$db = Factory::getContainer()->get(DatabaseInterface::class);
$query = $db->getQuery(true)
    ->delete('#__sociable_points_rules')
    ->where('asset_name = ' . $db->quote('com_myextension'));
$db->setQuery($query)->execute();

// Clean up badge rules
$query = $db->getQuery(true)
    ->delete('#__sociable_badge_rules')
    ->where('asset_name = ' . $db->quote('com_myextension'));
$db->setQuery($query)->execute();
```

---

## Support

For issues or feature requests related to the Sociable SDK, please contact support or visit the documentation portal.

---

*Documentation Version: 3.0.0*
*Last Updated: February 2026*
