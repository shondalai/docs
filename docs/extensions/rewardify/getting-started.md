---
id: getting-started
title: Getting Started with Rewardify
sidebar_label: Getting Started
sidebar_position: 1
---

# Getting Started with Rewardify

Welcome to Rewardify! This guide will help you install and set up the gamification system on your Joomla website.

## What is Rewardify?

Rewardify is a comprehensive gamification extension for Joomla that rewards your users with points for various activities on your website. It helps increase user engagement, loyalty, and interaction by providing a points-based reward system.

## Key Features

- **Points System** - Award points for user activities like registration, login, posting content, and more
- **Point Rules** - Flexible rule engine to define when and how points are awarded
- **User Profiles** - Display user points and activity history
- **Leaderboard** - Show top contributors on your site
- **Rate Limiting** - Prevent abuse with configurable rate limits
- **Streak Bonuses** - Reward consistent user behavior (e.g., 7-day login streak)
- **Multiple Integrations** - Works with Community Builder, HikaShop, Kunena, and more
- **Developer API** - Integrate points into your custom extensions

## System Requirements

- **Joomla:** 5.3 or higher
- **PHP:** 8.1 or higher
- **MySQL:** 5.7 or higher / MariaDB 10.3 or higher
- **Web Server:** Apache 2.4+ or Nginx 1.18+

## Installation

### Step 1: Download the Package

Download the latest Rewardify package (`pkg_rewardify.zip`) from your downloads area.

### Step 2: Install via Joomla

1. Log into your Joomla administrator panel
2. Navigate to **System → Install → Extensions**
3. Click the **Upload Package File** tab
4. Click **Browse** and select the `pkg_rewardify.zip` file
5. Click **Upload & Install**

### Step 3: Verify Installation

After installation, you should see a success message. The following will be installed:

- **Component:** Rewardify (com_rewardify)
- **Plugins:**
  - User - Rewardify (awards points for registration and login)
  - Content - Rewardify (awards points for article activities)
  - Community Builder - Rewardify (optional, if you use CB)
  - Privacy - Rewardify (GDPR compliance)
- **Module:**
  - Leaderboard (mod_rewardify_leaderboard)

## Initial Configuration

### Step 1: Configure the Component

1. Go to **Components → Rewardify → Dashboard**
2. Click **Options** (top-right corner)
3. Configure the basic settings:

#### Profile Component
Choose which component to use for user profiles:
- **None** - Use standard Joomla profiles
- **Sociable** - If you use Sociable extension
- **CjForum** - If you use CjForum
- **Community Builder** - If you use Community Builder
- **JomSocial** - If you use JomSocial
- **Kunena** - If you use Kunena forum

#### Avatar Component
Choose which component provides user avatars:
- **Gravatar** - Use Gravatar service (recommended for most sites)
- **Sociable** - If you use Sociable extension
- **Community Builder** - If you use Community Builder
- Or any other supported extension

4. Click **Save & Close**

### Step 2: Enable Required Plugins

1. Go to **System → Plugins**
2. Search for "rewardify"
3. Enable the following plugins:
   - ✅ **User - Rewardify** (required for registration/login points)
   - ✅ **Content - Rewardify** (required for article points)
   - ✅ **Privacy - Rewardify** (required for GDPR compliance)
4. Enable optional plugins based on your needs:
   - Community Builder - Rewardify (if you use CB)
   - HikaShop - Rewardify (if you use HikaShop)
   - Kunena - Rewardify (if you use Kunena)

### Step 3: Review Default Point Rules

1. Go to **Components → Rewardify → Point Rules**
2. Review the pre-configured rules:
   - **Joined the site** - 1 point (enabled by default)
   - **Daily login** - 1 point (enabled by default)
   - **7-day login streak** - 10 points (enabled by default)
   - **Posting an article** - 5 points (disabled by default)
   - And many more...

3. Enable or disable rules based on your needs
4. Adjust point values as desired

## Quick Setup Guide

### For a Basic Blog/Magazine Site

**Enable these rules:**
- ✅ Joined the site (1 point)
- ✅ Daily login (1 point)
- ✅ 7-day login streak (10 points)
- ✅ Posting an article (5 points)
- ✅ Reading an article (1 point)

**Plugins to enable:**
- User - Rewardify
- Content - Rewardify

### For a Community Forum Site

**Enable these rules:**
- ✅ Joined the site (1 point)
- ✅ Daily login (1 point)
- ✅ 7-day login streak (10 points)
- ✅ Community Builder/Kunena specific rules

**Plugins to enable:**
- User - Rewardify
- Content - Rewardify
- Community Builder/Kunena - Rewardify

### For an E-commerce Site

**Enable these rules:**
- ✅ Joined the site (1 point)
- ✅ Daily login (1 point)
- ✅ HikaShop purchase rules

**Plugins to enable:**
- User - Rewardify
- HikaShop - Rewardify
- HikaShop Payment - Rewardify

## Next Steps

Now that you have Rewardify installed and configured:

1. **[Configure Point Rules](point-rules.md)** - Fine-tune when and how points are awarded
2. **[Set Up the Leaderboard](leaderboard.md)** - Display top users on your site
3. **[Manage User Points](managing-points.md)** - Award or deduct points manually
4. **[Customize Display](customization.md)** - Customize how points appear on your site

## Getting Help

If you need assistance:

- 📖 Read the [complete documentation](overview.md)
- 💬 Visit the [support forum](https://shondalai.com/forums/)
- 📧 Contact us on [Get Support](https://shondalai.com/get-support/)

## Troubleshooting

### Points Not Being Awarded

**Check these items:**
1. ✅ Plugins are enabled (System → Plugins)
2. ✅ Point rules are published (Components → Rewardify → Point Rules)
3. ✅ Point values are not zero
4. ✅ User has proper access level
5. ✅ Rate limiting is not preventing the award

### Leaderboard Not Showing

1. ✅ Module is published
2. ✅ Module is assigned to correct menu items
3. ✅ Module position exists in your template
4. ✅ Users have earned points

---

**Next:** [Understanding Point Rules →](point-rules.md)

