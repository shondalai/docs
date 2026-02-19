---
id: overview
title: Sociable
sidebar_label: Overview
---

# Sociable

Sociable is a comprehensive social networking extension for Joomla 5+ that transforms your website into a full-featured social community platform.

## Overview

Sociable provides a modern, React-based frontend with a robust PHP API backend, enabling you to build engaging social experiences for your Joomla website. The component follows a single-page application (SPA) architecture for smooth user interactions while leveraging Joomla's security and user management features.

## Key Features

### User Profiles

- **Customizable profiles** with display name, bio, location, website, and birthdate
- **Custom handles** - Users can set unique profile handles (e.g., @username)
- **Profile visibility** - Public, friends-only, or private profiles
- **Avatar and cover images** with multiple size variants
- **Social links** integration
- **Profile types** - Assign different profile types to user groups
- **Custom fields** support for extended profile information

### Activity Feed

- **Activity stream** with posts, media, and shared content
- **Media uploads** - Images, videos, and file attachments
- **Reactions** - Like, love, laugh, wow, sad, and angry reactions
- **Comments** with nested replies
- **Sharing** - Share posts with followers or to groups
- **Visibility controls** - Public, friends-only, or private posts
- **Mentions and tags** - @mention users in posts and comments

### Groups

- **Group types** - Public, private, and secret groups
- **Group management** - Create, edit, and delete groups
- **Membership controls** - Join requests, approvals, and invitations
- **Group roles** - Owner, admin, moderator, and member roles
- **Group activities** - Dedicated activity feed within groups
- **Group categories** - Organize groups by category

### Events

- **Event creation** - Create online or in-person events
- **RSVP system** - Going, interested, and not going responses
- **Event invitations** - Invite friends and group members
- **Recurring events** support
- **Event reminders** - Automated reminder notifications
- **Group events** - Events associated with specific groups

### Connections

- **Following** - One-way follow relationships
- **Friendships** - Bidirectional friend connections with approval
- **Blocking** - Block users from viewing your content
- **Connection suggestions** - Discover people to follow

### Private Messaging

- **Direct messages** - One-on-one conversations
- **Group conversations** - Multi-participant chat threads
- **Attachments** - Share files in messages
- **Read receipts** - See when messages are read
- **Typing indicators** - Real-time typing status
- **Message archiving** - Archive old conversations

### Gamification

- **Points system** - Award points for user activities
- **Badges** - Achievement badges with multiple tiers
- **Leaderboards** - Public ranking of top users
- **Points rules** - Configurable rules for earning points
- **Badge rules** - Automatic badge awards based on conditions

### Notifications

- **In-app notifications** - Real-time notification center
- **Email notifications** - Configurable email alerts
- **Push notifications** support
- **Notification preferences** - User-controlled notification settings
- **Email digest** - Daily or weekly summary emails

### Moderation

- **Content reporting** - Users can report inappropriate content
- **Auto-hide** - Automatically hide content after threshold reports
- **Spam filter** - Built-in spam detection
- **Banned words** - Configure prohibited content

### Authentication

- **Social login** - Sign in with Google, Facebook, or Apple
- **Joomla integration** - Override Joomla login/registration pages
- **Configurable redirects** - Custom post-login and post-registration URLs

### Theme Customization

- **Multiple color themes** - Pre-built themes to choose from
- **Dark mode** - System, light, or dark mode options
- **Style customization** - Customize card styles, avatars, buttons, and more
- **Custom CSS** support

## System Requirements

- Joomla 5.0 or later
- PHP 8.1 or later
- MySQL 8.0+ or MariaDB 10.4+
- Modern web browser with JavaScript enabled

## Package Contents

The Sociable package includes:

- **com_sociable** - Main component
- **plg_system_sociable** - System plugin for authentication overrides and AJAX handling
- **plg_user_sociable** - User plugin for profile sync
- **plg_content_sociable** - Content plugin for activity integration
- **plg_privacy_sociable** - Privacy plugin for GDPR compliance
- **plg_authentication_sociable** - Authentication plugin for social login
- **mod_sociable_feed** - Activity feed module
- **mod_sociable_members** - Members display module
- **mod_sociable_groups** - Groups display module
- **mod_sociable_notifications** - Notifications module

## Developer SDK

Sociable includes a comprehensive SDK for third-party developers to integrate with the social features:

```php
// Get SDK instance
$sociable = Sociable::getInstance();

// Access profile data
$profile = $sociable->profiles()->getById($userId);

// Award points
$sociable->points()->award('com_myext.action', $userId);

// Trigger badge rules
$sociable->badges()->trigger('com_myext.achievement', ['count' => 10]);

// Create notifications
$sociable->notifications()->send($userId, 'type', 'Message');
```

## Next Steps

- [Getting Started Guide](getting-started-guide-for-sociable) - Installation and initial setup
- [Configuring Profiles](configuring-multiple-profiles-in-sociable) - Set up profile types
- [Setting Up Groups](setting-up-groups-in-sociable) - Configure group features
- [Points System](setting-up-the-points-system-for-sociable) - Configure gamification
- [SDK Developer Guide](sociable-sdk-developer-guide) - API reference for developers
