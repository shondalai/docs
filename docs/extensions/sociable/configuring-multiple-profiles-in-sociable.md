---
id: configuring-multiple-profiles-in-sociable
title: Configuring User Profiles
sidebar_label: User Profiles
sidebar_position: 2
---

## Overview

Sociable provides a flexible profile system that supports different profile types for different user groups. Each profile type can have its own set of custom fields, allowing you to collect different information from different types of users (e.g., Teachers vs. Students, Buyers vs. Sellers).

## Profile Features

Each user profile in Sociable includes:

- **Display Name** - User's public display name
- **Handle** - Unique username (e.g., @johndoe)
- **Avatar** - Profile picture with automatic resizing
- **Cover Image** - Banner image for the profile header
- **Bio** - Short description (configurable max length)
- **Location** - User's location
- **Website** - Personal website URL
- **Birthdate** - Date of birth
- **Gender** - User's gender
- **Social Links** - Links to external social profiles
- **Custom Fields** - Additional fields based on profile type

## Profile Privacy Settings

Users can control their profile visibility:

| Setting | Description |
|---------|-------------|
| Public | Profile visible to everyone |
| Friends | Profile visible only to friends/connections |
| Private | Profile visible only to the user |

Individual profile fields can also have their own privacy settings, allowing users to share some information publicly while keeping other details private.

## Setting Up Profile Types

### Step 1: Plan Your Profile Types

Before creating profile types, identify the different categories of users on your site and what information you need from each:

**Example for an educational site:**
- **Teachers** - Bio, experience, qualifications, subjects, office hours
- **Students** - Major, year of study, interests, courses enrolled

**Example for a marketplace:**
- **Buyers** - Interests, wishlist preferences
- **Sellers** - Business name, product categories, contact info

### Step 2: Create Field Groups

Field groups organize related custom fields together and appear as sections on the profile page.

1. Go to **Components → Sociable → Field Groups**
2. Click **New** to create a new field group
3. Configure the field group:
   - **Title** - Section heading displayed on profile
   - **Description** - Optional description
   - **Ordering** - Display order
   - **Published** - Enable/disable the group

**Example field groups:**
- "Professional Information" - for work-related fields
- "Education" - for academic fields
- "Interests" - for hobby-related fields

### Step 3: Create Custom Fields

Custom fields are the building blocks of extended profile information.

1. Go to **Components → Sociable → Profile Fields**
2. Click **New** to create a new field
3. Configure the field:

| Option | Description |
|--------|-------------|
| Name | Internal field identifier (no spaces) |
| Label | Display label shown to users |
| Field Type | Type of input (text, select, checkbox, etc.) |
| Field Group | Which group this field belongs to |
| Required | Whether the field is mandatory |
| Default Value | Pre-filled value |
| Placeholder | Input placeholder text |
| Field Options | Options for select/radio/checkbox fields (JSON) |
| Ordering | Display order within the group |
| Published | Enable/disable the field |

**Supported Field Types:**

| Type | Description |
|------|-------------|
| text | Single-line text input |
| textarea | Multi-line text input |
| select | Dropdown selection |
| radio | Radio button selection |
| checkbox | Single checkbox (yes/no) |
| checkboxes | Multiple checkbox options |
| calendar | Date picker |
| url | URL input with validation |
| email | Email input with validation |
| tel | Phone number input |
| number | Numeric input |
| editor | Rich text editor |
| media | File/image upload |

### Step 4: Create Profile Types

Profile types define which field groups appear for different user categories.

1. Go to **Components → Sociable → Profile Types**
2. Click **New** to create a new profile type
3. Configure the profile type:
   - **Title** - Name of the profile type
   - **Description** - Description for admin reference
   - **Field Groups** - Select which field groups to include
   - **Default** - Set as the default for new users
   - **User Groups** - Automatically assign to specific Joomla user groups
   - **Published** - Enable/disable the profile type

**Important:** At least one profile type should be marked as "Default" to ensure new users get assigned a profile type automatically.

### Step 5: Enable User Plugin

Ensure the **User - Sociable** plugin is enabled for automatic profile creation:

1. Go to **System → Manage → Plugins**
2. Search for "User - Sociable"
3. Enable the plugin if not already enabled
4. Configure plugin settings:

| Setting | Description |
|---------|-------------|
| Auto Create Profile | Automatically create profile on user registration |
| Default Privacy | Default profile visibility for new users |
| Sync Avatar | Sync avatar from Gravatar or Joomla profile |
| Delete Profile on User Delete | Remove Sociable profile when Joomla user is deleted |

## Profile Settings Configuration

Configure global profile settings in **Components → Sociable → Settings → Profiles**:

| Setting | Description |
|---------|-------------|
| Allow Registration | Allow new users to register through Sociable |
| Require Approval | New registrations require admin approval |
| Default Visibility | Default privacy setting for new profiles |
| Allow Custom Handle | Let users choose their own @handle |
| Minimum Handle Length | Minimum characters for handles |
| Max Bio Length | Maximum characters allowed in bio |

## Managing User Profiles

### Admin Profile Management

Administrators can manage profiles from **Components → Sociable → Users**:

- **View/Edit** - Modify user profile information
- **Verify** - Mark a profile as verified (shows badge)
- **Ban/Unban** - Restrict user access
- **Change Profile Type** - Assign a different profile type
- **Sync** - Manually sync with Joomla user data

### Bulk User Sync

To sync all existing Joomla users with Sociable profiles:

1. Go to **Components → Sociable → Users**
2. Click **Sync Users** in the toolbar
3. Wait for the process to complete

This creates Sociable profiles for all Joomla users who don't already have one.

## Avatar Configuration

Sociable generates multiple avatar sizes for different contexts:

| Size | Dimensions | Usage |
|------|------------|-------|
| 16 | 16×16 px | Inline mentions |
| 32 | 32×32 px | Small lists |
| 48 | 48×48 px | Comments |
| 64 | 64×64 px | Activity feed |
| 96 | 96×96 px | Profile cards |
| 128 | 128×128 px | Medium profile |
| 160 | 160×160 px | Profile header |
| 192 | 192×192 px | Large display |
| 256 | 256×256 px | Full-size preview |

## Profile Verification

Verified profiles display a badge to indicate authenticity:

1. Go to **Components → Sociable → Users**
2. Select the user to verify
3. Toggle the **Verified** status
4. Save changes

Verified users appear with a verification badge throughout the site.

## SDK Integration

Developers can access profile data via the Sociable SDK:

```php
$sociable = Sociable::getInstance();

// Get profile by user ID
$profile = $sociable->profiles()->getById($userId);

// Get profile by handle
$profile = $sociable->profiles()->getByHandle('johndoe');

// Get avatar URL
$avatarUrl = $sociable->avatars()->getUrl($userId, 64);

// Search profiles
$results = $sociable->profiles()->search([
    'search' => 'john',
    'profile_type_id' => 1,
    'limit' => 20,
]);
```

## Next Steps

- [Setting Up Groups](setting-up-groups-in-sociable) - Create discussion groups
- [Activity Streams](setting-up-activity-streams-system-for-sociable) - Configure the activity feed
- [Points System](setting-up-the-points-system-for-sociable) - Award points for profile completion
