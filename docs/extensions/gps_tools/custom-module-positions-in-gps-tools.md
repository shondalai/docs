---
id: custom-module-positions-in-gps-tools
title: Custom Module Positions
sidebar_label: Custom Module Positions
sidebar_position: 5
---

# Custom Module Positions in GPS Tools

GPS Tools provides custom module positions that allow you to display Joomla modules at strategic locations within the component's views. These positions are independent of your template's module positions and offer fine-grained control over content placement.

## Overview

Custom module positions enable you to:
- Display additional content or widgets at specific locations
- Add advertisements, notifications, or custom HTML
- Integrate third-party modules within GPS Tools views
- Enhance user experience with contextual information

:::info
These module positions are specific to GPS Tools and won't appear in your template's position list. You need to manually enter the position name when configuring a module.
:::

## Available Positions

### Track List View Positions

Use these positions to enhance your tracks listing pages:

| Position Name | Location | Use Case |
|---------------|----------|----------|
| `tracks-list-above-categories` | Below toolbar, above category filters | Welcome messages, search tips, advertisements |
| `tracks-list-below-categories` | Below category filters, above track list | Featured content, promotional banners |
| `tracks-list-above-pagination` | Below track list, above pagination | Call-to-action buttons, related links |
| `tracks-list-below-pagination` | At the bottom of the page | Footer content, additional navigation |

#### Visual Layout - List View

```
┌─────────────────────────────────────┐
│         Toolbar                     │
├─────────────────────────────────────┤
│  tracks-list-above-categories       │
├─────────────────────────────────────┤
│         Category Filters            │
├─────────────────────────────────────┤
│  tracks-list-below-categories       │
├─────────────────────────────────────┤
│                                     │
│         Track Listings              │
│                                     │
├─────────────────────────────────────┤
│  tracks-list-above-pagination       │
├─────────────────────────────────────┤
│         Pagination                  │
├─────────────────────────────────────┤
│  tracks-list-below-pagination       │
└─────────────────────────────────────┘
```

### Track Details View Positions

Use these positions to enhance individual track detail pages:

| Position Name | Location | Use Case |
|---------------|----------|----------|
| `tracks-details-below-toolbar` | Below toolbar, at top of page | Social share buttons, breadcrumbs |
| `tracks-details-above-map` | Above the interactive map | Map legend, viewing instructions |
| `tracks-details-above-charts` | Above elevation/speed charts | Chart interpretation guide |
| `tracks-details-above-track-info` | Above track statistics | Data explanation, units information |
| `tracks-details-above-suggestions` | Above related tracks section | Promotional content, recommendations |
| `tracks-details-above-comments` | Above comments section | Comment guidelines, moderation notice |

#### Visual Layout - Details View

```
┌─────────────────────────────────────┐
│         Toolbar                     │
├─────────────────────────────────────┤
│  tracks-details-below-toolbar       │
├─────────────────────────────────────┤
│  tracks-details-above-map           │
├─────────────────────────────────────┤
│         Interactive Map             │
├─────────────────────────────────────┤
│  tracks-details-above-charts        │
├─────────────────────────────────────┤
│    Elevation/Speed/HR Charts        │
├─────────────────────────────────────┤
│  tracks-details-above-track-info    │
├─────────────────────────────────────┤
│       Track Information             │
├─────────────────────────────────────┤
│  tracks-details-above-suggestions   │
├─────────────────────────────────────┤
│      Related Tracks                 │
├─────────────────────────────────────┤
│  tracks-details-above-comments      │
├─────────────────────────────────────┤
│         Comments                    │
└─────────────────────────────────────┘
```

## How to Use Custom Module Positions

### Step 1: Create or Edit a Module

1. Navigate to **Content** → **Site Modules**
2. Create a new module or edit an existing one
3. Configure your module content

### Step 2: Assign the Module Position

1. In the module editor, find the **Position** field
2. Type the exact position name (e.g., `tracks-details-above-map`)
3. Press **Enter** to confirm the custom position

:::tip
Custom positions won't appear in the dropdown list. You must type them manually exactly as shown above.
:::

### Step 3: Configure Module Assignment

1. Go to the **Menu Assignment** tab
2. Select **Only on the pages selected** or **On all pages except those selected**
3. Choose the GPS Tools menu items where you want the module to appear

### Step 4: Publish the Module

1. Set the module **Status** to **Published**
2. Configure the **Access** level as needed
3. Save the module

## Example Use Cases

### Example 1: Add a Welcome Message

**Module Type**: Custom HTML  
**Position**: `tracks-list-above-categories`  
**Content**: Welcome text explaining how to use the track listing

### Example 2: Social Sharing Buttons

**Module Type**: Custom HTML or third-party social module  
**Position**: `tracks-details-below-toolbar`  
**Content**: Social media sharing buttons for tracks

### Example 3: Advertisement Banner

**Module Type**: Custom HTML or ad module  
**Position**: `tracks-list-below-categories`  
**Content**: Promotional banner or advertisement

### Example 4: Map Legend

**Module Type**: Custom HTML  
**Position**: `tracks-details-above-map`  
**Content**: Explanation of map markers and track colors

## Best Practices

- **Performance**: Avoid loading heavy modules in multiple positions simultaneously
- **Mobile Responsiveness**: Test how your modules appear on different screen sizes
- **Consistency**: Use similar styling across modules for a cohesive look
- **User Experience**: Don't overcrowd pages with too many modules
- **Access Control**: Set appropriate access levels for your target audience

## Troubleshooting

**Module not appearing?**
- Verify the position name is typed exactly as shown (case-sensitive)
- Check module is published and assigned to the correct menu items
- Ensure the access level allows the current user to view it
- Clear Joomla cache (System → Clear Cache)

**Module appears on wrong page?**
- Review the Menu Assignment tab settings
- Check if "On all pages" is selected unintentionally
