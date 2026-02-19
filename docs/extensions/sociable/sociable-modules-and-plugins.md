---
id: sociable-modules-and-plugins
title: Modules and Plugins
sidebar_label: Modules and Plugins
sidebar_position: 7
---

## Overview

Sociable includes modules for displaying social content throughout your site and plugins for integrating with Joomla's core systems. This guide covers configuration options for each.

## Modules

### Activity Feed Module (mod_sociable_feed)

Displays a feed of recent activities on your site.

**Configuration Options:**

| Setting | Description | Default |
|---------|-------------|---------|
| Limit | Number of activities to display | 5 |
| Show Avatar | Display user avatars | Yes |
| Show Reactions | Display reaction counts | Yes |
| Show Comments Count | Display comment counts | Yes |
| Feed Type | Type of feed to display | All |
| Cache Time | Cache duration in seconds | 300 |

**Feed Types:**

| Type | Description |
|------|-------------|
| all | All public activities |
| following | Activities from followed users (logged-in users) |
| public | Public activities only |

**Setup:**

1. Go to **System → Site Modules**
2. Create new **mod_sociable_feed** module
3. Configure display options
4. Assign to position and pages
5. Publish

---

### Members Module (mod_sociable_members)

Displays a list of community members.

**Configuration Options:**

| Setting | Description | Default |
|---------|-------------|---------|
| Limit | Number of members to display | 8 |
| Display Type | Layout style | Grid |
| Member Type | Filter members by criteria | Newest |
| Show Stats | Display member statistics | Yes |
| Show Follow Button | Show follow/connect button | Yes |

**Display Types:**

| Type | Description |
|------|-------------|
| grid | Grid layout with avatars |
| list | Vertical list layout |
| carousel | Horizontal scrolling carousel |

**Member Types:**

| Type | Description |
|------|-------------|
| newest | Most recently registered members |
| popular | Members with most followers |
| active | Most active members (by posts) |
| verified | Verified members only |

**Setup:**

1. Go to **System → Site Modules**
2. Create new **mod_sociable_members** module
3. Select member type and display options
4. Assign to position
5. Publish

---

### Groups Module (mod_sociable_groups)

Displays community groups.

**Configuration Options:**

| Setting | Description | Default |
|---------|-------------|---------|
| Limit | Number of groups to display | 6 |
| Display Type | Layout style | Grid |
| Group Type | Filter groups by criteria | Popular |
| Category ID | Filter by category (0 = all) | 0 |
| Show Cover | Display group cover images | Yes |
| Show Member Count | Display number of members | Yes |
| Show Join Button | Show join button | Yes |

**Display Types:**

| Type | Description |
|------|-------------|
| grid | Grid layout with covers |
| list | Vertical list layout |
| compact | Compact minimal layout |

**Group Types:**

| Type | Description |
|------|-------------|
| popular | Most members |
| newest | Recently created |
| active | Most recent activity |
| suggested | AI-suggested for current user |
| my_groups | Groups the user belongs to |

**Setup:**

1. Go to **System → Site Modules**
2. Create new **mod_sociable_groups** module
3. Configure display and filter options
4. Assign to position
5. Publish

---

### Notifications Module (mod_sociable_notifications)

Displays user notifications (for logged-in users).

**Configuration Options:**

| Setting | Description | Default |
|---------|-------------|---------|
| Limit | Number of notifications to show | 5 |
| Display Type | Layout style | Dropdown |
| Show Unread Only | Only show unread notifications | No |
| Show Avatar | Display sender avatars | Yes |
| Show Time | Display notification timestamps | Yes |
| Auto Refresh | Automatically check for new notifications | No |
| Refresh Interval | Auto-refresh interval in seconds | 30 |

**Display Types:**

| Type | Description |
|------|-------------|
| dropdown | Bell icon with dropdown menu |
| list | Full list of notifications |
| bell_only | Bell icon with count badge only |

**Setup:**

1. Go to **System → Site Modules**
2. Create new **mod_sociable_notifications** module
3. Configure display and refresh options
4. Assign to header/navigation position
5. Publish

---

## Plugins

### System Plugin (plg_system_sociable)

Core system integration plugin for Sociable.

**Configuration Options:**

| Setting | Description | Default |
|---------|-------------|---------|
| Load Assets | Load Sociable CSS/JS assets | Yes |
| OG Tags | Generate Open Graph meta tags | Yes |
| AJAX Handler | Enable AJAX request handling | Yes |
| Realtime Notifications | Enable real-time notification updates | No |

**Features:**

- **Asset Loading** - Loads required Sociable stylesheets and JavaScript
- **Open Graph Tags** - Adds social sharing metadata to pages
- **AJAX Handling** - Handles background API requests
- **Real-time Updates** - WebSocket/polling for live notifications

**When to Enable:**

- Always enable this plugin for core Sociable functionality
- Required for the React SPA to function properly

**Setup:**

1. Go to **System → Manage → Plugins**
2. Search for "System - Sociable"
3. Enable the plugin
4. Configure options as needed

---

### User Plugin (plg_user_sociable)

Handles user-related Sociable integration.

**Configuration Options:**

| Setting | Description | Default |
|---------|-------------|---------|
| Auto Create Profile | Automatically create Sociable profile for new users | Yes |
| Default Privacy | Default profile privacy level | Public |
| Sync Avatar | Sync user avatar with Joomla | Yes |
| Delete Profile on User Delete | Remove Sociable data when user is deleted | Yes |

**Privacy Levels:**

| Level | Description |
|-------|-------------|
| public | Profile visible to everyone |
| connections | Profile visible to connections only |
| private | Profile visible only to the user |

**Features:**

- **Profile Sync** - Creates Sociable profiles when users register
- **Avatar Sync** - Synchronizes avatars between Joomla and Sociable
- **Deletion Handling** - Cleans up Sociable data when users are deleted
- **Event Triggers** - Fires points/badge events on user actions

**When to Enable:**

- Always enable for proper user integration
- Required for new user profile creation
- Required for points/badge awarding on user events

**Setup:**

1. Go to **System → Manage → Plugins**
2. Search for "User - Sociable"
3. Enable the plugin
4. Configure profile creation options

---

### Content Plugin (plg_content_sociable)

Integrates Sociable with Joomla content.

**Configuration Options:**

| Setting | Description | Default |
|---------|-------------|---------|
| Show Share Buttons | Display social sharing buttons | Yes |
| Position | Button placement | Bottom |
| Show Internal Share | Share to Sociable activity feed | Yes |
| Show Facebook | Facebook share button | Yes |
| Show Twitter | Twitter/X share button | Yes |
| Show LinkedIn | LinkedIn share button | Yes |
| Show Email | Email share button | Yes |

**Position Options:**

| Position | Description |
|----------|-------------|
| top | Before article content |
| bottom | After article content |
| both | Before and after content |

**Features:**

- **Share Buttons** - Add social sharing to articles
- **Activity Integration** - Post articles to activity stream
- **Points Integration** - Award points for reading/creating content
- **Badge Integration** - Award badges for content milestones

**When to Enable:**

- If using Joomla articles with Sociable
- For article sharing functionality
- For points/badges based on article activity

**Setup:**

1. Go to **System → Manage → Plugins**
2. Search for "Content - Sociable"
3. Enable the plugin
4. Configure sharing options

---

### Privacy Plugin (plg_privacy_sociable)

GDPR compliance and privacy integration.

**Features:**

- **Data Export** - Export user Sociable data on privacy request
- **Data Deletion** - Delete user Sociable data on privacy request
- **Privacy Manager Integration** - Works with Joomla Privacy Manager

**Exported Data:**

- Profile information
- Posts and activities
- Comments and reactions
- Connections and messages
- Points and badges
- Group memberships

**When to Enable:**

- Always enable for GDPR compliance
- Required for privacy data export/deletion requests

**Setup:**

1. Go to **System → Manage → Plugins**
2. Search for "Privacy - Sociable"
3. Enable the plugin

---

### Authentication Plugin (plg_authentication_sociable)

Social login authentication handler.

**Features:**

- **OAuth Handler** - Processes OAuth callbacks from social providers
- **Token Management** - Manages social login tokens
- **Account Linking** - Links social accounts to Joomla users

**When to Enable:**

- If using social login (Facebook, Google, etc.)
- Works with authentication providers configured in Sociable settings

**Setup:**

1. Go to **System → Manage → Plugins**
2. Search for "Authentication - Sociable"
3. Enable the plugin
4. Configure OAuth providers in Sociable component settings

---

## Recommended Configuration

### Minimal Setup

Enable these for basic functionality:

1. **plg_system_sociable** - Required for core features
2. **plg_user_sociable** - Required for profile sync

### Full Integration

Enable all plugins for complete functionality:

1. **plg_system_sociable** - Core system integration
2. **plg_user_sociable** - User profile sync
3. **plg_content_sociable** - Article integration
4. **plg_privacy_sociable** - GDPR compliance
5. **plg_authentication_sociable** - Social login (if using)

### Module Placement

Recommended module positions:

| Module | Recommended Position |
|--------|---------------------|
| mod_sociable_notifications | Header/Navigation |
| mod_sociable_feed | Sidebar or Homepage |
| mod_sociable_members | Homepage or Sidebar |
| mod_sociable_groups | Homepage or Community page |

## Troubleshooting

### Module Not Displaying

1. Verify module is published
2. Check menu assignment
3. Ensure position exists in template
4. Clear Joomla cache

### Plugin Not Working

1. Verify plugin is enabled
2. Check plugin ordering (Sociable plugins should load early)
3. Review system logs for errors
4. Ensure dependencies are met

### Real-time Notifications Not Working

1. Enable "Realtime Notifications" in System Plugin
2. Check browser console for WebSocket errors
3. Verify server supports long-polling or WebSockets

## Next Steps

- [Social Login](setting-up-social-login-in-sociable) - Configure OAuth providers
- [Points System](setting-up-the-points-system-for-sociable) - Plugin integration with points
- [Badge System](setting-up-the-badge-system-for-sociable) - Plugin integration with badges
