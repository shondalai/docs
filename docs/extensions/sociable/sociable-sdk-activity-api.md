---
id: sociable-sdk-activity-api
title: Activity API
sidebar_label: Activity API
sidebar_position: 16
---

# Activity API

Push activities into the stream and manage feeds, reactions, and comments.

## Push Activity

Push an activity into the stream. The first argument is the **activity rule
name** (a row in `#__sociable_activity_types`) — you must register it first
through a `sociable_rules.json` file or the admin Activity Rules tab,
otherwise the push fails.

```php
$activityId = $sociable->activities()->push(
    'com_myext.article.create', // Activity rule name
    'Hello world',              // Title
    'Short description / preview text', // Description
    $userId,                    // User ID (optional — defaults to current user)
    [
        'item_id'    => $articleId,
        'parent_id'  => 0,
        'visibility' => 'public', // public | friends | private | group
        'group_id'   => null,
        'featured'   => false,
        'language'   => '*',
        'attribs'    => ['category' => 'tech'],
    ]
);
```

Returns the new activity ID, or `false` on failure (most commonly because
the activity rule is missing or unpublished, or the user is a guest).

Visibility constants are exposed for clarity:

```php
ActivityApi::VISIBILITY_PUBLIC;
ActivityApi::VISIBILITY_FRIENDS;
ActivityApi::VISIBILITY_PRIVATE;
ActivityApi::VISIBILITY_GROUP;
```

## Get Feed

```php
$feed = $sociable->activities()->getFeed([
    'user_id'    => null,
    'group_id'   => null,
    'visibility' => null,
    'limit'      => 20,
    'offset'     => 0,
    'order_by'   => 'created',
    'order_dir'  => 'DESC',
]);

// Convenience: just one user's activities.
$personalFeed = $sociable->activities()->getUserActivities($userId, [
    'limit' => 20,
]);
```

Both methods return `['items' => [...], 'total' => N]`.

## Reactions

```php
// Add the current user's reaction (defaults to 'like').
$sociable->activities()->react($activityId, 'like', $userId);

// Remove the current user's reaction.
$sociable->activities()->unreact($activityId, $userId);
```

## Comments

```php
$commentId = $sociable->activities()->addComment(
    $activityId,
    'Great post!',
    $userId
);

$comments = $sociable->activities()->getComments($activityId, [
    'limit'  => 20,
    'offset' => 0,
]);
```

## Get and Delete

```php
$activity = $sociable->activities()->getById($activityId);

// Both delete the activity; `delete()` is the preferred name.
$sociable->activities()->delete($activityId);
$sociable->activities()->remove($activityId);
```

## Registering an Activity Rule

`push()` only works for activity rules that have been registered. The
recommended way is to ship them as part of a `sociable_rules.json` file —
see [Registering Custom Rules](sociable-sdk-custom-rules) for the format
and discovery rules.

Admins can also create one-off activity rules by hand from
**Components → Sociable → Badges → Activity Rules**.
