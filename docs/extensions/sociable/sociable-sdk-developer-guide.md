---
id: sociable-sdk-developer-guide
title: SDK API Index
sidebar_label: SDK API Index
sidebar_position: 10
---

# Sociable SDK API Index

The SDK documentation is now split into smaller, API-focused pages so developers can find methods faster.

## Quick Start

### Prerequisites

- Joomla 5.x or 6.x
- PHP 8.2 or higher
- Sociable component installed and configured

### Basic Usage

```php
use Joomla\Component\Sociable\Administrator\SDK\Sociable;

$sociable = Sociable::getInstance();

$profile = $sociable->profiles()->get($userId);
$sociable->points()->awardByRule('com_myextension.action.create', $userId);
$sociable->activities()->push('post.create', $userId, ['title' => 'New post created']);
```

## API Documents

- [SDK Instance](sociable-sdk-instance)
- [Profile API](sociable-sdk-profile-api)
- [Avatar API](sociable-sdk-avatar-api)
- [Points API](sociable-sdk-points-api)
- [Badge API](sociable-sdk-badge-api)
- [Activity API](sociable-sdk-activity-api)
- [Notification API](sociable-sdk-notification-api)
- [Connection API](sociable-sdk-connection-api)
- [Event API](sociable-sdk-event-api)
- [Group API](sociable-sdk-group-api)
- [Rule Engine](sociable-sdk-rule-engine)

## Advanced Guides

- [Registering Custom Rules](sociable-sdk-custom-rules)
- [Legacy API Migration](sociable-sdk-legacy-migration)
- [SDK Best Practices](sociable-sdk-best-practices)

---

*Documentation Version: 3.0.0*
*Last Updated: February 2026*
