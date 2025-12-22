---
id: leaderboard
title: Leaderboard Module
sidebar_label: Leaderboard
sidebar_position: 5
---

# Leaderboard Module

The Rewardify Leaderboard module displays top point earners on your site, encouraging friendly competition and engagement.

## Overview

The leaderboard module shows:
- Top users by points
- User avatars
- Point totals
- User rankings
- Optional badges or indicators

## Installing the Module

The leaderboard module is automatically installed with the Rewardify package.

**Verify installation:**
1. Go to **Extensions → Modules**
2. Search for "rewardify"
3. You should see **Rewardify - Leaderboard**

## Publishing the Module

### Step 1: Create Module Instance

1. Go to **Extensions → Modules**
2. Click **New**
3. Select **Rewardify - Leaderboard**
4. Or find existing module and click to edit

### Step 2: Configure Basic Settings

**Title**
```
Example: "Top Contributors"
Example: "Leaderboard"
Example: "Point Leaders"
```

**Show Title**
- ✅ Show - Display module title
- ❌ Hide - Hide module title

**Position**
- Select a module position from your template
- Common positions: `sidebar-right`, `sidebar-left`, `footer`
- Check your template documentation for available positions

**Status**
- **Published** - Module is visible
- **Unpublished** - Module is hidden

### Step 3: Menu Assignment

Choose where the module appears:

**On all pages**
- Module shows on every page

**Only on the pages selected**
- Select specific menu items
- Use for targeted placement

**On all pages except those selected**
- Show everywhere except certain pages

**No pages**
- Module is not displayed anywhere

**Recommended:**
- Show on all pages for maximum visibility
- Or show on homepage and community pages

### Step 4: Module Options

Click the **Module** tab to configure display options:

#### Number of Users

**Setting:** How many users to display

```
Recommended values:
- 5 users - Compact display
- 10 users - Standard display  
- 20 users - Extended display
```

**Configuration:**
1. Find "Number of Users" field
2. Enter desired number
3. Default is usually 10

#### Time Period

**Setting:** Calculate rankings based on time period

Options:
- **All Time** - Total points since registration
- **This Month** - Points earned this month
- **This Week** - Points earned this week
- **Today** - Points earned today

**Use Cases:**
- **All Time** - Overall champions, long-term engagement
- **Monthly** - Monthly contests, fresh competition
- **Weekly** - Weekly challenges, more dynamic
- **Daily** - Daily activities, real-time competition

#### Display Options

**Show Avatar**
- ✅ Yes - Display user profile pictures
- ❌ No - Text only display

**Show Points**
- ✅ Yes - Display point totals
- ❌ No - Hide point numbers

**Show Ranking**
- ✅ Yes - Display position numbers (1, 2, 3...)
- ❌ No - List without numbers

**Link to Profile**
- ✅ Yes - Username links to profile
- ❌ No - Username is plain text

### Step 5: Advanced Settings

Click the **Advanced** tab for additional options:

**Module Class Suffix**
```
Example: myclass
Result: Module gets CSS class "myclass"
Use for custom styling
```

**Caching**
- **Use Global** - Follow Joomla global cache setting
- **No caching** - Always show fresh data
- **Custom time** - Cache for X minutes

**Cache Time**
- Set in seconds
- Example: `900` = 15 minutes
- Recommended: `1800` (30 minutes) for performance

**Module Tag**
- HTML element for module wrapper
- Default: `div`
- Options: `div`, `section`, `aside`, `nav`

**Header Tag**
- HTML element for module title
- Default: `h3`
- Options: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`

### Step 6: Permissions

Set who can see the module:

**Access Level**
- **Public** - Everyone (including guests)
- **Registered** - Logged-in users only
- **Special** - Higher user groups

**Recommended:** Public (encourage registration)

### Step 7: Save Module

1. Click **Save & Close**
2. Module is now published

## Module Display Examples

### Example 1: Sidebar Leaderboard

```
Title: Top Contributors
Position: sidebar-right
Menu Assignment: All pages
Number of Users: 10
Time Period: All Time
Show Avatar: Yes
Show Points: Yes
Show Ranking: Yes
```

**Result:** Top 10 all-time contributors in right sidebar

### Example 2: Homepage Champions

```
Title: This Month's Champions
Position: top (or showcase)
Menu Assignment: Home page only
Number of Users: 5
Time Period: This Month
Show Avatar: Yes
Show Points: Yes
Show Ranking: Yes
```

**Result:** Top 5 monthly earners on homepage

### Example 3: Weekly Challenge

```
Title: Weekly Leaders
Position: footer
Menu Assignment: All pages
Number of Users: 3
Time Period: This Week
Show Avatar: Yes
Show Points: Yes
Show Ranking: Yes
```

**Result:** Top 3 weekly leaders in footer

### Example 4: Community Page

```
Title: Community Leaders
Position: main content area
Menu Assignment: Community menu items
Number of Users: 20
Time Period: All Time
Show Avatar: Yes
Show Points: Yes
Show Ranking: Yes
```

**Result:** Extended leaderboard on community pages

## Styling the Leaderboard

### Default Styling

The module comes with basic styling that works with most templates.

### Custom Styling

Add custom CSS to override default styling:

**Method 1: Module Class Suffix**

1. Edit module
2. Advanced tab
3. Module Class Suffix: `custom-leaderboard`
4. Add CSS to your template:

```css
.custom-leaderboard .leaderboard-user {
    padding: 15px;
    border-bottom: 1px solid #e0e0e0;
}

.custom-leaderboard .leaderboard-rank {
    font-weight: bold;
    font-size: 24px;
    color: #ff6600;
}

.custom-leaderboard .leaderboard-points {
    background: #f5f5f5;
    padding: 5px 10px;
    border-radius: 5px;
}
```

**Method 2: Template Override**

1. Copy module template to your template
2. From: `/modules/mod_rewardify_leaderboard/tmpl/default.php`
3. To: `/templates/YOUR_TEMPLATE/html/mod_rewardify_leaderboard/default.php`
4. Edit the file to customize HTML structure

### Highlighting Top Positions

Add special styling for top 3:

```css
.leaderboard-user.rank-1 {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
}

.leaderboard-user.rank-2 {
    background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%);
}

.leaderboard-user.rank-3 {
    background: linear-gradient(135deg, #cd7f32 0%, #f4a460 100%);
}
```

## Multiple Leaderboard Instances

You can create multiple leaderboard modules for different purposes:

### Example Setup

**Module 1: Overall Leaders**
- Position: sidebar-right
- Time Period: All Time
- Number: 10 users

**Module 2: Monthly Challenge**
- Position: top
- Time Period: This Month
- Number: 5 users

**Module 3: Daily Active**
- Position: footer
- Time Period: Today
- Number: 3 users

**To create multiple:**
1. Go to **Extensions → Modules**
2. Find your leaderboard module
3. Click **Duplicate** button
4. Edit the duplicated module
5. Change settings as needed
6. Assign to different position

## Responsive Design

The leaderboard is responsive by default:

- **Desktop** - Full display with avatars and details
- **Tablet** - Optimized layout
- **Mobile** - Stacked layout, compact view

### Mobile Optimization

For better mobile experience:
- Reduce number of users (5-7 max)
- Consider hiding avatars on mobile
- Use compact text

## Leaderboard Features

### User Avatars

Avatar sources (configured in component options):
- **Gravatar** - Based on email address
- **Community Builder** - CB avatar
- **JomSocial** - JS avatar
- **Custom component** - Your profile component

**If no avatar:**
- Default placeholder image displays
- Or initials in colored circle

### Point Display

Points shown with formatting:
- **1,234** - Thousands separator
- **Colors** - Can be styled
- **Tooltips** - Optional hover details

### Ranking Numbers

Rankings show position:
- **#1, #2, #3** - Top positions
- **Special icons** - Optional medals/badges
- **Ties** - Same rank for equal points

### Profile Links

Usernames can link to:
- Joomla user profile
- Community Builder profile
- Custom profile component
- Disabled (no link)

## Performance Optimization

### Caching

**Enable caching for better performance:**
1. Edit module
2. Advanced tab
3. Caching: Custom
4. Cache Time: 1800 seconds (30 minutes)

**Benefits:**
- Faster page loads
- Reduced database queries
- Better server performance

**Considerations:**
- Rankings update every 30 minutes
- For real-time rankings, disable cache
- Balance between performance and freshness

### Database Optimization

For large sites (10,000+ users):
- Use database indexes
- Regular database maintenance
- Limit number of users displayed
- Increase cache time

## Troubleshooting

### Module Not Appearing

**Check:**
1. ✅ Module is **Published**
2. ✅ Module **position exists** in template
3. ✅ Menu assignment is correct
4. ✅ Access level allows viewing
5. ✅ Template shows that position

### No Users Showing

**Check:**
1. ✅ Users have earned points
2. ✅ Point rules are active
3. ✅ Plugins are enabled
4. ✅ Time period filter too restrictive

### Avatars Not Displaying

**Check:**
1. ✅ Avatar component configured in options
2. ✅ Users have set avatars
3. ✅ Gravatar emails are valid
4. ✅ Image permissions/paths correct

### Rankings Seem Frozen

**Check:**
1. ✅ Cache is not stuck
2. ✅ Clear Joomla cache
3. ✅ Clear module cache
4. ✅ Points are being awarded

### Styling Issues

**Solutions:**
1. Check template CSS conflicts
2. Use browser inspector
3. Add custom CSS with higher specificity
4. Create template override

## Best Practices

### 1. Strategic Placement

Place leaderboards where users will see them:
- ✅ Homepage (encourage participation)
- ✅ Sidebar (constant visibility)
- ✅ Community pages (relevant context)
- ❌ Buried in footer (less engagement)

### 2. Right Number of Users

Choose based on your site:
- **Small community (< 100 users):** Show 10-20
- **Medium community (100-1000):** Show 10
- **Large community (1000+):** Show 5-10

### 3. Time Period Strategy

Mix different time periods:
- All-time for recognition
- Monthly for active competition
- Weekly/Daily for urgency

### 4. Update Frequency

Balance freshness vs. performance:
- **High traffic:** 30-60 minute cache
- **Low traffic:** 5-15 minute cache
- **Real-time needed:** No cache

### 5. Engagement Tactics

**Increase participation:**
- Show current user's rank (even if not in top)
- Display points needed to reach next rank
- Highlight recent achievers
- Announce new #1 positions

## Advanced Customization

### Adding Custom Fields

Edit the module template override to add:
- User registration date
- Recent activity
- Point trend (up/down arrows)
- User badges/achievements

### Integration with Gamification

Combine with other features:
- Display user badges
- Show achievement icons
- Link to detailed stats page
- Show point breakdown

### Seasonal Themes

Create themed leaderboards:
- Holiday designs
- Seasonal colors
- Special event styling
- Contest-specific branding

## FAQ

**Q: Can I exclude certain users from leaderboard?**
A: Currently not built-in. Use access levels or custom template override.

**Q: Can I show leaderboard by category?**
A: Not built-in. Would require custom development.

**Q: Can users opt-out of leaderboard?**
A: Not currently available. Consider privacy settings for future updates.

**Q: Can I export leaderboard data?**
A: Go to Components → Rewardify → User Points and export.

**Q: How often does ranking update?**
A: Real-time (when cache is disabled) or based on cache time.

---

**Next:** [Plugin Configuration →](plugins.md)

