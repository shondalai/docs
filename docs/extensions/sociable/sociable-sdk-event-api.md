---
id: sociable-sdk-event-api
title: Event API
sidebar_label: Event API
sidebar_position: 19
---

# Event API

Create and manage events with RSVP support.

## Create Event

```php
$eventId = $sociable->events()->create([
    'title' => 'Community Meetup',
    'description' => 'Monthly community gathering',
    'start_date' => '2025-02-15 18:00:00',
    'end_date' => '2025-02-15 21:00:00',
    'location' => '123 Main Street',
    'organizer_id' => $userId,
    'group_id' => $groupId,
    'privacy' => 'public',
    'max_attendees' => 50,
]);
```

## Read, Update, Delete

```php
$event = $sociable->events()->get($eventId);
$sociable->events()->update($eventId, ['title' => 'Updated Event Title']);
$sociable->events()->delete($eventId);
```

## List Events

```php
$events = $sociable->events()->getList([
    'user_id' => null,
    'group_id' => null,
    'upcoming' => true,
    'limit' => 20,
    'offset' => 0,
]);
```

## RSVP and Attendees

```php
$sociable->events()->rsvp($eventId, $userId, 'attending');
$status = $sociable->events()->getUserRsvp($eventId, $userId);
$sociable->events()->cancelRsvp($eventId, $userId);

$attendees = $sociable->events()->getAttendees($eventId, ['status' => 'attending', 'limit' => 50]);
```
