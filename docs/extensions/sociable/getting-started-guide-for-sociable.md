---
id: getting-started-guide-for-sociable
title: Getting Started Guide
sidebar_label: Getting Started
sidebar_position: 1
---

## Introduction

This guide walks you through installing and configuring Sociable on your Joomla website. Sociable transforms your site into a fully-featured social networking platform with user profiles, activity feeds, groups, messaging, and gamification features.

## Prerequisites

Before installing Sociable, ensure you have:

- Joomla 5.0 or later
- PHP 8.1 or later
- MySQL 8.0+ or MariaDB 10.4+
- The latest CjLib package installed (download from shondalai.com)

## Installation

1. Download the Sociable package from shondalai.com
2. Go to **System → Install → Extensions** in Joomla administrator
3. Upload and install the package file
4. The installer will deploy all components, plugins, and modules

For detailed Joomla extension installation instructions, see the [official Joomla documentation](https://docs.joomla.org/Installing_an_extension).

## Post-Installation Setup

### Enable Required Plugins

After installation, ensure all essential plugins are enabled:

1. Go to **System → Manage → Plugins**
2. Search for "Sociable"
3. Enable the following plugins:
   - **System - Sociable** (required for authentication overrides and AJAX handling)
   - **User - Sociable** (required for automatic profile creation)
   - **Content - Sociable** (optional, for activity stream integration)
   - **Privacy - Sociable** (optional, for GDPR compliance)
   - **Authentication - Sociable** (optional, for social login)

### Access the Admin Dashboard

Navigate to **Components → Sociable** to access the administrator dashboard. The dashboard provides:

- User statistics and growth metrics
- Activity overview
- Quick access to configuration
- Recent activity monitoring

## Configuration

Sociable provides comprehensive settings organized into logical sections. Access settings through **Components → Sociable → Settings**.

### General Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Community Name | Name displayed across your social network | My Social Network |
| Description | Brief description of your community | - |
| Default Timezone | Timezone for date/time display | UTC |
| Date Format | How dates are formatted | Y-m-d |
| Items Per Page | Number of items in paginated lists | 20 |

### Profile Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Allow Registration | Allow new users to register | Yes |
| Require Approval | New registrations require admin approval | No |
| Default Visibility | Default profile visibility (public/friends/private) | Public |
| Allow Custom Handle | Let users set custom profile handles | Yes |
| Minimum Handle Length | Minimum characters for handles | 3 |
| Max Bio Length | Maximum characters for bio | 500 |

### Activity Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Require Post Approval | Posts require approval before publishing | No |
| Allow Media Uploads | Allow media attachments on posts | Yes |
| Max Media Size (MB) | Maximum upload size | 10 |
| Max Media Per Post | Maximum attachments per post | 10 |
| Enable Reactions | Allow reactions on posts | Yes |
| Enable Comments | Allow comments on posts | Yes |
| Enable Sharing | Allow sharing posts | Yes |

### Group Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Allow Group Creation | Let users create groups | Yes |
| Require Group Approval | New groups require admin approval | No |
| Default Max Members | Default member limit per group | 1000 |

### Event Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Events | Show and allow access to event pages | Yes |
| Allow Event Creation | Allow users to create events | Yes |
| Enable RSVP | Allow RSVP functionality | Yes |
| Enable Invites | Allow event invitations | Yes |
| Show Past Events | Display past events sections | Yes |

### Connection Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Following | Allow one-way follow relationships | Yes |
| Enable Friendships | Allow bidirectional friend connections | Yes |
| Enable Blocking | Allow users to block each other | Yes |
| Require Friend Approval | Friend requests need approval | Yes |

### Messages Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Messages Page | Enable private messaging | Yes |
| Allow Attachments | Allow file attachments in messages | Yes |
| Max Attachment Size (MB) | Maximum attachment size | 10 |
| Max Message Length | Maximum characters per message | 5000 |
| Enable Read Receipts | Show message read status | Yes |
| Enable Typing Indicators | Show typing status | Yes |

### Gamification Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Points | Award points for activities | Yes |
| Enable Badges | Award achievement badges | Yes |
| Badge Tiers | Comma-separated tier names | Bronze,Silver,Gold,Platinum,Diamond |
| Enable Leaderboard | Show public leaderboard | Yes |
| Leaderboard Size | Number of users shown | 100 |

### Notification Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Email | Send email notifications | Yes |
| Enable Push | Send push notifications | Yes |
| Enable In-App | Show in-app notifications | Yes |
| Digest Frequency | Email digest frequency | Weekly |

### Moderation Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Reporting | Allow users to report content | Yes |
| Auto-hide Threshold | Auto-hide after X reports | 5 |
| Enable Spam Filter | Enable spam detection | Yes |

### Authentication Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Override Joomla Login | Redirect Joomla login to Sociable | Yes |
| Override Joomla Registration | Redirect registration to Sociable | Yes |
| Login Redirect URL | Post-login redirect destination | / |
| Registration Redirect URL | Post-registration redirect | /welcome |

#### Social Login (OAuth)

Configure social login providers:

**Google OAuth:**
- Enable Google Login
- Google Client ID
- Google Client Secret

**Facebook OAuth:**
- Enable Facebook Login
- Facebook App ID
- Facebook Client Secret

**Apple OAuth:**
- Enable Apple Login
- Apple Client ID
- Apple Team ID
- Apple Key ID
- Apple Client Secret

### Storage Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Storage Type | Local filesystem or S3 | Local |
| Local Path | Path for local uploads | media/com_sociable/uploads |
| S3 Bucket | Amazon S3 bucket name | - |
| S3 Region | AWS region | us-east-1 |

## Menu Setup

Create menu items to provide access to Sociable pages:

1. Go to **Menus → [Your Menu] → Add New Menu Item**
2. Select **Sociable** from the menu item type list
3. Available menu item types:
   - **Feed** - Main activity feed page
   - **Profile** - User profile page
   - **Groups** - Groups listing
   - **Events** - Events listing
   - **Messages** - Private messaging
   - **Notifications** - Notification center
   - **Search** - User search
   - **Settings** - User settings

**Tip:** Create a dedicated hidden menu for Sociable SEF URLs, then create a menu alias to one item in your main navigation.

## Initial User Sync

When Sociable is installed for the first time, existing Joomla users need to be synced:

1. Go to **Components → Sociable → Users**
2. Click the **Sync Users** button in the toolbar
3. Wait for the sync process to complete

The User - Sociable plugin automatically creates profiles for new users after the initial sync.

## Theme Customization

Customize the appearance of your social network:

1. Go to **Components → Sociable → Theme Settings**
2. Select a color theme
3. Choose display mode (light/dark/system)
4. Customize style options:
   - Navigation position (left sidebar or top toolbar)
   - Card styles (corners, shadows, borders)
   - Avatar shape (circle, rounded, square)
   - Button styles
   - Content spacing
   - Action bar appearance

Changes are applied immediately across all Sociable pages.

## Email Templates

Customize notification emails:

1. Go to **Components → Sociable → Email Templates**
2. Browse templates by category:
   - Engagement (likes, comments, shares)
   - Connections (follows, friend requests)
   - Groups (invites, approvals)
   - Gamification (badges, points)
   - System (welcome, verification)
3. Click a template to edit
4. Customize the subject and body
5. Use placeholders for dynamic content

## Next Steps

After completing basic setup:

- [Configure multiple profiles](configuring-multiple-profiles-in-sociable) for different user types
- [Set up groups](setting-up-groups-in-sociable) for community discussions
- [Configure points system](setting-up-the-points-system-for-sociable) for gamification
- [Set up badges](setting-up-the-badge-system-for-sociable) for achievements
- [Configure social login](setting-up-social-login-in-sociable) for easy authentication
- [Enable referrals](enable-referrals-in-sociable) to grow your community
