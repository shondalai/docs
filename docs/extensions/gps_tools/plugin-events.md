---
id: plugin-events
title: Plugin Events API
sidebar_label: Plugin Events
description: Extend GPS Tools with custom plugins using the comprehensive event system
keywords:
  - GPS Tools
  - Joomla plugins
  - events
  - extensibility
  - developer
---

# Plugin Events API

GPS Tools provides a comprehensive event system that allows developers to extend and customize the component's functionality through Joomla plugins. This guide covers all available events, how to create plugins, and best practices.

## Overview

The event system allows you to:

- **Validate** data before operations (and optionally cancel them)
- **Modify** data before it's saved
- **React** to completed operations (notifications, external sync)
- **Log** and audit user activities
- **Integrate** with third-party services

All events use the `com_gpstools.` prefix followed by the entity and action:

```
com_gpstools.{entity}.{action}
```

## Quick Start

### 1. Create Plugin Structure

```
plg_gpstools_myplugin/
├── services/
│   └── provider.php
├── src/
│   └── Extension/
│       └── MyPlugin.php
├── language/
│   └── en-GB/
│       └── plg_gpstools_myplugin.ini
└── myplugin.xml
```

### 2. Plugin Manifest

```xml title="myplugin.xml"
<?xml version="1.0" encoding="utf-8"?>
<extension type="plugin" group="gpstools" method="upgrade">
    <name>PLG_GPSTOOLS_MYPLUGIN</name>
    <author>Your Name</author>
    <creationDate>2025-01-01</creationDate>
    <copyright>Copyright (C) 2025 Your Company</copyright>
    <license>GNU General Public License version 2 or later</license>
    <version>1.0.0</version>
    <description>PLG_GPSTOOLS_MYPLUGIN_DESC</description>
    <namespace path="src">YourVendor\Plugin\GpsTools\MyPlugin</namespace>
    <files>
        <folder plugin="myplugin">services</folder>
        <folder>src</folder>
        <folder>language</folder>
    </files>
</extension>
```

### 3. Service Provider

```php title="services/provider.php"
<?php

defined('_JEXEC') or die;

use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use YourVendor\Plugin\GpsTools\MyPlugin\Extension\MyPlugin;

return new class implements ServiceProviderInterface
{
    public function register(Container $container): void
    {
        $container->set(
            PluginInterface::class,
            function (Container $container) {
                $dispatcher = $container->get(DispatcherInterface::class);
                $plugin = new MyPlugin(
                    $dispatcher,
                    (array) PluginHelper::getPlugin('gpstools', 'myplugin')
                );
                $plugin->setApplication(Factory::getApplication());
                return $plugin;
            }
        );
    }
};
```

### 4. Plugin Class

```php title="src/Extension/MyPlugin.php"
<?php

namespace YourVendor\Plugin\GpsTools\MyPlugin\Extension;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\GpsTools\Administrator\Event\Track\BeforeTrackCreateEvent;
use Joomla\Component\GpsTools\Administrator\Event\Track\AfterTrackCreateEvent;
use Joomla\Event\SubscriberInterface;

class MyPlugin extends CMSPlugin implements SubscriberInterface
{
    /**
     * Returns an array of events this subscriber will listen to.
     */
    public static function getSubscribedEvents(): array
    {
        return [
            'com_gpstools.track.beforeCreate' => 'onBeforeTrackCreate',
            'com_gpstools.track.afterCreate'  => 'onAfterTrackCreate',
        ];
    }

    public function onBeforeTrackCreate(BeforeTrackCreateEvent $event): void
    {
        $data = $event->getTrackData();
        
        // Validate or modify data
        if (empty($data['title'])) {
            $event->cancel('Track title is required');
            return;
        }
        
        // Modify data before save
        $data['title'] = ucwords($data['title']);
        $event->setTrackData($data);
    }

    public function onAfterTrackCreate(AfterTrackCreateEvent $event): void
    {
        $trackId = $event->getTrackId();
        $track = $event->getTrack();
        
        // Send notification, sync, log, etc.
        $this->getApplication()->enqueueMessage(
            "Track #{$trackId} created: {$track->title}",
            'success'
        );
    }
}
```

---

## Available Events

### Track Events

#### BeforeTrackCreate

Fired before a new track is created. **Cancellable.**

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.track.beforeCreate` | |
| Event Class | `BeforeTrackCreateEvent` | |
| Cancellable | ✅ Yes | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getTrackData()` | `array` | Get the track data being saved |
| `setTrackData(array $data)` | `void` | Modify the track data |
| `cancel(?string $reason)` | `void` | Cancel the operation |
| `isCancelled()` | `bool` | Check if cancelled |
| `getCancelReason()` | `?string` | Get cancellation reason |

**Example - Content Moderation:**

```php
public function onBeforeTrackCreate(BeforeTrackCreateEvent $event): void
{
    $data = $event->getTrackData();
    
    // Check for prohibited content
    if ($this->containsProfanity($data['title'] . ' ' . $data['description'])) {
        $event->cancel('Your submission contains prohibited content');
        return;
    }
    
    // Auto-assign category based on activity type
    if (empty($data['catid']) && !empty($data['activity_type'])) {
        $data['catid'] = $this->getCategoryByActivityType($data['activity_type']);
        $event->setTrackData($data);
    }
}
```

---

#### AfterTrackCreate

Fired after a track is successfully created.

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.track.afterCreate` | |
| Event Class | `AfterTrackCreateEvent` | |
| Cancellable | ❌ No | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getTrackId()` | `int` | Get the new track ID |
| `getTrackData()` | `array` | Get the saved track data |
| `getTrack()` | `?object` | Get the full track object |

**Example - Social Sharing:**

```php
public function onAfterTrackCreate(AfterTrackCreateEvent $event): void
{
    $track = $event->getTrack();
    
    // Only share published tracks
    if ($track->published != 1) {
        return;
    }
    
    // Post to social media
    $this->socialService->shareTrack([
        'title' => $track->title,
        'url' => $this->getTrackUrl($event->getTrackId()),
        'image' => $this->getTrackThumbnail($track),
    ]);
}
```

---

#### BeforeTrackUpdate

Fired before a track is updated. **Cancellable.**

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.track.beforeUpdate` | |
| Event Class | `BeforeTrackUpdateEvent` | |
| Cancellable | ✅ Yes | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getTrackId()` | `int` | Get the track ID |
| `getTrackData()` | `array` | Get the new track data |
| `setTrackData(array $data)` | `void` | Modify the track data |
| `getOldTrack()` | `object` | Get the track before changes |
| `cancel(?string $reason)` | `void` | Cancel the operation |

**Example - Change Protection:**

```php
public function onBeforeTrackUpdate(BeforeTrackUpdateEvent $event): void
{
    $oldTrack = $event->getOldTrack();
    $data = $event->getTrackData();
    
    // Prevent changing category of featured tracks
    if ($oldTrack->featured && isset($data['catid']) && $data['catid'] != $oldTrack->catid) {
        $event->cancel('Cannot change the category of featured tracks');
    }
    
    // Prevent editing tracks older than 30 days
    $createdDate = new \DateTime($oldTrack->created);
    $daysDiff = (new \DateTime())->diff($createdDate)->days;
    
    if ($daysDiff > 30 && !$this->isAdmin()) {
        $event->cancel('Tracks older than 30 days cannot be edited');
    }
}
```

---

#### AfterTrackUpdate

Fired after a track is successfully updated.

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.track.afterUpdate` | |
| Event Class | `AfterTrackUpdateEvent` | |
| Cancellable | ❌ No | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getTrackId()` | `int` | Get the track ID |
| `getTrackData()` | `array` | Get the updated data |
| `getTrack()` | `?object` | Get the updated track |
| `getOldTrack()` | `object` | Get track before changes |
| `wasFieldChanged(string $field)` | `bool` | Check if field changed |
| `getChangedFields()` | `array` | Get all changed field names |

**Example - Changelog Logging:**

```php
public function onAfterTrackUpdate(AfterTrackUpdateEvent $event): void
{
    $changes = $event->getChangedFields();
    
    if (empty($changes)) {
        return;
    }
    
    $oldTrack = $event->getOldTrack();
    $newTrack = $event->getTrack();
    
    // Log each changed field
    foreach ($changes as $field) {
        $this->logChange([
            'track_id' => $event->getTrackId(),
            'field' => $field,
            'old_value' => $oldTrack->$field ?? null,
            'new_value' => $newTrack->$field ?? null,
            'changed_by' => $this->getApplication()->getIdentity()->id,
            'changed_at' => date('Y-m-d H:i:s'),
        ]);
    }
    
    // Special handling for state changes
    if ($event->wasFieldChanged('published')) {
        if ($newTrack->published == 1) {
            $this->notifyFollowers($event->getTrackId(), 'track_published');
        }
    }
}
```

---

#### BeforeTrackDelete

Fired before a track is deleted. **Cancellable.**

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.track.beforeDelete` | |
| Event Class | `BeforeTrackDeleteEvent` | |
| Cancellable | ✅ Yes | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getTrackId()` | `int` | Get the track ID |
| `getTrack()` | `object` | Get the track being deleted |
| `cancel(?string $reason)` | `void` | Cancel the deletion |

**Example - Deletion Protection:**

```php
public function onBeforeTrackDelete(BeforeTrackDeleteEvent $event): void
{
    $track = $event->getTrack();
    
    // Prevent deletion of featured tracks
    if ($track->featured) {
        $event->cancel('Featured tracks cannot be deleted. Please unfeature the track first.');
        return;
    }
    
    // Prevent deletion of tracks with comments
    if ($track->comment_count > 0) {
        $event->cancel('Tracks with comments cannot be deleted. Please remove comments first.');
    }
}
```

---

#### AfterTrackDelete

Fired after a track is successfully deleted.

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.track.afterDelete` | |
| Event Class | `AfterTrackDeleteEvent` | |
| Cancellable | ❌ No | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getTrackId()` | `int` | Get the deleted track ID |
| `getTrack()` | `object` | Get snapshot of deleted track |

**Example - Cleanup External Resources:**

```php
public function onAfterTrackDelete(AfterTrackDeleteEvent $event): void
{
    $track = $event->getTrack();
    $trackId = $event->getTrackId();
    
    // Remove from CDN
    if (!empty($track->file_name)) {
        $this->cdnService->delete("tracks/{$track->file_name}");
    }
    
    // Remove from search index
    $this->searchIndex->remove('track', $trackId);
    
    // Clean up cached thumbnails
    $this->cacheService->deletePattern("track_thumb_{$trackId}_*");
    
    // Notify external systems
    $this->webhookService->send('track.deleted', [
        'track_id' => $trackId,
        'title' => $track->title,
    ]);
}
```

---

#### AfterTrackView

Fired when a track is viewed on the frontend.

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.track.afterView` | |
| Event Class | `AfterTrackViewEvent` | |
| Cancellable | ❌ No | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getTrackId()` | `int` | Get the track ID |
| `getTrack()` | `object` | Get the track object |
| `getUserId()` | `int` | Get the viewing user ID |
| `isGuest()` | `bool` | Check if viewer is guest |

**Example - Analytics Tracking:**

```php
public function onAfterTrackView(AfterTrackViewEvent $event): void
{
    $this->analyticsService->record([
        'event' => 'track_view',
        'track_id' => $event->getTrackId(),
        'track_title' => $event->getTrack()->title,
        'user_id' => $event->getUserId(),
        'is_guest' => $event->isGuest(),
        'timestamp' => time(),
        'referrer' => $_SERVER['HTTP_REFERER'] ?? null,
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
    ]);
}
```

---

### Comment Events

#### BeforeCommentCreate

Fired before a comment is created. **Cancellable.**

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.comment.beforeCreate` | |
| Event Class | `BeforeCommentCreateEvent` | |
| Cancellable | ✅ Yes | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getCommentData()` | `array` | Get the comment data |
| `setCommentData(array $data)` | `void` | Modify comment data |
| `cancel(?string $reason)` | `void` | Cancel creation |

**Example - Spam Filtering:**

```php
public function onBeforeCommentCreate(BeforeCommentCreateEvent $event): void
{
    $data = $event->getCommentData();
    
    // Check with spam service
    $spamScore = $this->akismetService->check([
        'content' => $data['content'],
        'author' => $data['user_name'],
        'email' => $data['user_email'],
        'ip' => $data['ip_address'],
    ]);
    
    if ($spamScore > 0.8) {
        // Definitely spam - reject
        $event->cancel('Your comment was identified as spam');
    } elseif ($spamScore > 0.5) {
        // Possible spam - hold for moderation
        $data['published'] = 0;
        $data['spam'] = 1;
        $event->setCommentData($data);
    }
}
```

---

#### AfterCommentCreate

Fired after a comment is successfully created.

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.comment.afterCreate` | |
| Event Class | `AfterCommentCreateEvent` | |
| Cancellable | ❌ No | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getCommentId()` | `int` | Get the new comment ID |
| `getCommentData()` | `array` | Get the comment data |
| `getTrackId()` | `int` | Get the track ID |
| `getUserId()` | `int` | Get commenter's user ID |
| `isReply()` | `bool` | Check if this is a reply |
| `getParentId()` | `int` | Get parent comment ID |

**Example - Notification System:**

```php
public function onAfterCommentCreate(AfterCommentCreateEvent $event): void
{
    $data = $event->getCommentData();
    
    // Don't notify for unpublished comments
    if (($data['published'] ?? 1) != 1) {
        return;
    }
    
    // Notify track owner
    $track = $this->trackService->getTrack($event->getTrackId());
    if ($track && $track->created_by != $event->getUserId()) {
        $this->notificationService->send($track->created_by, [
            'type' => 'new_comment',
            'track_id' => $event->getTrackId(),
            'comment_id' => $event->getCommentId(),
            'commenter' => $data['user_name'],
        ]);
    }
    
    // Notify parent comment author for replies
    if ($event->isReply()) {
        $parentComment = $this->commentService->getComment($event->getParentId());
        if ($parentComment && $parentComment->user_id != $event->getUserId()) {
            $this->notificationService->send($parentComment->user_id, [
                'type' => 'comment_reply',
                'comment_id' => $event->getCommentId(),
                'replier' => $data['user_name'],
            ]);
        }
    }
}
```

---

#### BeforeCommentDelete / AfterCommentDelete

Similar to track delete events. Available methods:

- `getCommentId()` - Get the comment ID
- `getComment()` - Get the comment object
- `cancel(?string $reason)` - Cancel deletion (before only)

---

### Waypoint Events

#### AfterWaypointsCreate

Fired after waypoints are created (batch operation).

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.waypoint.afterCreate` | |
| Event Class | `AfterWaypointsCreateEvent` | |
| Cancellable | ❌ No | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getTrackId()` | `int` | Get the track ID |
| `getWaypoints()` | `array` | Get all created waypoints |
| `getCount()` | `int` | Get waypoint count |

**Example - Geocoding:**

```php
public function onAfterWaypointsCreate(AfterWaypointsCreateEvent $event): void
{
    foreach ($event->getWaypoints() as $waypoint) {
        // Skip waypoints with names
        if (!empty($waypoint['name'])) {
            continue;
        }
        
        // Reverse geocode to get location name
        $location = $this->geocoder->reverse(
            $waypoint['latitude'],
            $waypoint['longitude']
        );
        
        if ($location) {
            $this->waypointService->updateName(
                $waypoint['id'],
                $location->getFormattedAddress()
            );
        }
    }
}
```

---

### Rating Events

#### AfterTrackRate

Fired after a track or comment is rated (like/dislike).

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.rating.afterRate` | |
| Event Class | `AfterTrackRateEvent` | |
| Cancellable | ❌ No | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getItemId()` | `int` | Get the rated item ID |
| `getItemType()` | `int` | Get item type (1=track, 2=comment) |
| `isTrackRating()` | `bool` | Check if track rating |
| `isCommentRating()` | `bool` | Check if comment rating |
| `getUserId()` | `int` | Get the rater's user ID |
| `getAction()` | `?string` | Get action (like/dislike/null) |
| `wasRemoved()` | `bool` | Check if rating removed |
| `isLike()` | `bool` | Check if like action |
| `isDislike()` | `bool` | Check if dislike action |
| `getLikes()` | `int` | Get current like count |
| `getDislikes()` | `int` | Get current dislike count |
| `getTotalVotes()` | `int` | Get total votes |

**Example - Achievement System:**

```php
public function onAfterTrackRate(AfterTrackRateEvent $event): void
{
    // Only process track likes
    if (!$event->isTrackRating() || !$event->isLike() || $event->wasRemoved()) {
        return;
    }
    
    $totalLikes = $event->getLikes();
    $track = $this->trackService->getTrack($event->getItemId());
    
    // Award badges based on likes
    if ($totalLikes == 10) {
        $this->badgeService->award($track->created_by, 'rising_star');
    } elseif ($totalLikes == 100) {
        $this->badgeService->award($track->created_by, 'popular_track');
    } elseif ($totalLikes == 1000) {
        $this->badgeService->award($track->created_by, 'legendary_explorer');
    }
}
```

---

### File Upload Events

#### BeforeFileParse

Fired before a GPS file is parsed. **Cancellable.**

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.upload.beforeParse` | |
| Event Class | `BeforeFileParseEvent` | |
| Cancellable | ✅ Yes | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getFilePath()` | `string` | Get the file path |
| `getFileType()` | `string` | Get file type (gpx/kml/tcx) |
| `getFileSize()` | `int` | Get file size in bytes |
| `getFileName()` | `string` | Get original file name |
| `cancel(?string $reason)` | `void` | Cancel parsing |

**Example - Security Scan:**

```php
public function onBeforeFileParse(BeforeFileParseEvent $event): void
{
    // Check file size limit
    $maxSize = 50 * 1024 * 1024; // 50MB
    if ($event->getFileSize() > $maxSize) {
        $event->cancel('File size exceeds maximum allowed (50MB)');
        return;
    }
    
    // Virus scan
    $scanResult = $this->virusScanner->scan($event->getFilePath());
    if (!$scanResult->isClean()) {
        $event->cancel('Security scan failed: ' . $scanResult->getThreatName());
    }
}
```

---

#### AfterFileParse

Fired after a GPS file is successfully parsed.

| Property | Type | Description |
|----------|------|-------------|
| Event Name | `com_gpstools.upload.afterParse` | |
| Event Class | `AfterFileParseEvent` | |
| Cancellable | ❌ No | |

**Methods:**

| Method | Return | Description |
|--------|--------|-------------|
| `getFilePath()` | `string` | Get the file path |
| `getFileType()` | `string` | Get file type |
| `getParsedData()` | `array` | Get parsed track data |
| `setParsedData(array $data)` | `void` | Modify parsed data |
| `getPointCount()` | `int` | Get point count |
| `getWaypointCount()` | `int` | Get waypoint count |

**Example - Data Enrichment:**

```php
public function onAfterFileParse(AfterFileParseEvent $event): void
{
    $data = $event->getParsedData();
    
    // Add weather data for each point
    foreach ($data['points'] as $index => &$point) {
        // Only process every 10th point to avoid API limits
        if ($index % 10 !== 0) {
            continue;
        }
        
        $weather = $this->weatherService->getHistorical(
            $point['latitude'],
            $point['longitude'],
            $point['time']
        );
        
        if ($weather) {
            $point['weather'] = [
                'temperature' => $weather->temperature,
                'conditions' => $weather->conditions,
                'wind_speed' => $weather->windSpeed,
            ];
        }
    }
    
    $event->setParsedData($data);
}
```

---

## Event Reference Table

| Event Name | Cancellable | Entity | When Fired |
|------------|:-----------:|--------|------------|
| `com_gpstools.track.beforeCreate` | ✅ | Track | Before creating a new track |
| `com_gpstools.track.afterCreate` | ❌ | Track | After track is created |
| `com_gpstools.track.beforeUpdate` | ✅ | Track | Before updating a track |
| `com_gpstools.track.afterUpdate` | ❌ | Track | After track is updated |
| `com_gpstools.track.beforeDelete` | ✅ | Track | Before deleting a track |
| `com_gpstools.track.afterDelete` | ❌ | Track | After track is deleted |
| `com_gpstools.track.afterView` | ❌ | Track | When track is viewed |
| `com_gpstools.comment.beforeCreate` | ✅ | Comment | Before creating a comment |
| `com_gpstools.comment.afterCreate` | ❌ | Comment | After comment is created |
| `com_gpstools.comment.beforeDelete` | ✅ | Comment | Before deleting a comment |
| `com_gpstools.comment.afterDelete` | ❌ | Comment | After comment is deleted |
| `com_gpstools.waypoint.afterCreate` | ❌ | Waypoint | After waypoints are created |
| `com_gpstools.rating.afterRate` | ❌ | Rating | After a like/dislike |
| `com_gpstools.upload.beforeParse` | ✅ | Upload | Before parsing GPS file |
| `com_gpstools.upload.afterParse` | ❌ | Upload | After parsing GPS file |

---

## Best Practices

### 1. Keep Handlers Fast

Events run synchronously. For heavy operations, queue them for background processing:

```php
public function onAfterTrackCreate(AfterTrackCreateEvent $event): void
{
    // DON'T: Heavy inline processing
    // $this->generateThumbnails($event->getTrackId()); // Slow!
    
    // DO: Queue for background processing
    $this->jobQueue->dispatch(new GenerateThumbnailsJob([
        'track_id' => $event->getTrackId()
    ]));
}
```

### 2. Handle Exceptions Gracefully

Your plugin should never break the main operation:

```php
public function onAfterTrackCreate(AfterTrackCreateEvent $event): void
{
    try {
        $this->externalService->sync($event->getTrackId());
    } catch (\Exception $e) {
        // Log but don't propagate
        $this->logger->error('Sync failed: ' . $e->getMessage());
        
        // Optionally notify user
        $this->getApplication()->enqueueMessage(
            'External sync will retry later',
            'notice'
        );
    }
}
```

### 3. Use Cancellation Responsibly

Only cancel operations when absolutely necessary. Always provide clear reasons:

```php
// Good - Clear, actionable message
$event->cancel('Tracks with more than 100,000 points require Pro plan. Upgrade at /pricing');

// Bad - Vague message
$event->cancel('Operation not allowed');
```

### 4. Avoid Infinite Loops

Don't trigger the same event from within a handler:

```php
public function onAfterTrackUpdate(AfterTrackUpdateEvent $event): void
{
    // DON'T: This triggers another afterUpdate event
    // $this->trackService->updateTrack($event->getTrackId(), [...]);
    
    // DO: Use direct database operations
    $db = Factory::getContainer()->get(DatabaseInterface::class);
    $db->updateObject('#__gpstools_tracks', $record, 'id');
}
```

### 5. Check Event Context

Always verify the event is relevant to your use case:

```php
public function onAfterTrackRateEvent(AfterTrackRateEvent $event): void
{
    // Only process track likes, not comment likes
    if (!$event->isTrackRating()) {
        return;
    }
    
    // Only process new likes, not removals
    if ($event->wasRemoved() || !$event->isLike()) {
        return;
    }
    
    // Now process...
}
```

---

## Debugging

### View Registered Listeners

```php
use Joomla\CMS\Factory;

$dispatcher = Factory::getApplication()->getDispatcher();
$listeners = $dispatcher->getListeners('com_gpstools.track.afterCreate');

foreach ($listeners as $listener) {
    echo get_class($listener[0]) . '::' . $listener[1] . "\n";
}
```

### Debug Event Data

```php
public function onBeforeTrackCreate(BeforeTrackCreateEvent $event): void
{
    // Dump event data during development
    if (JDEBUG) {
        error_log(print_r([
            'name' => $event->getName(),
            'data' => $event->getTrackData(),
        ], true));
    }
}
```

---

## Migration from Legacy Events

If upgrading from older GPS Tools versions using `onContent*` events:

**Before (legacy):**

```php
public function onContentAfterSave($context, $article, $isNew)
{
    if ($context !== 'com_gpstools.track') return;
    // ...
}
```

**After (new):**

```php
public static function getSubscribedEvents(): array
{
    return [
        'com_gpstools.track.afterCreate' => 'onAfterTrackCreate',
        'com_gpstools.track.afterUpdate' => 'onAfterTrackUpdate',
    ];
}

public function onAfterTrackCreate(AfterTrackCreateEvent $event): void
{
    // Type-safe, with full IDE support
}
```

Benefits of the new system:

- ✅ **Type safety** - Full IDE autocompletion
- ✅ **Better encapsulation** - Access only what you need
- ✅ **Cleaner code** - No context checking
- ✅ **More granular** - Separate events for create/update
- ✅ **Cancellable** - Before events can prevent operations
