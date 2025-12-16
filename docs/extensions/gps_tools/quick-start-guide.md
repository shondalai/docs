---
id: quick-start-guide
title: Quick Start Guide
sidebar_label: Quick Start
sidebar_position: 2
---

# Quick Start Guide

Get GPS Tools up and running in 10 minutes.

## Prerequisites

Before you begin, ensure you have:

- ✅ Joomla 5.0 or later installed
- ✅ PHP 8.1 or later
- ✅ A GPS track file (GPX, KML, or TCX)

## Step 1: Install GPS Tools

1. Download `pkg_gpstools_x.x.x.zip`
2. Go to **System → Install → Extensions**
3. Upload and install the package
4. You should see a success message

## Step 2: Enable Plugins

1. Go to **System → Plugins**
2. Search for "gpstools"
3. Enable both plugins:
   - **Content - GPS Tools** (for shortcodes)
   - **Finder - GPS Tools** (for search)

## Step 3: Create Your First Category

1. Go to **Components → GPS Tools → Categories**
2. Click **New**
3. Enter a category name (e.g., "Hiking Trails")
4. Click **Save & Close**

## Step 4: Upload Your First Track

1. Go to **Components → GPS Tools → Tracks**
2. Click **New**
3. Fill in the details:

| Field | Value |
|-------|-------|
| **Title** | My First Trail |
| **Category** | Hiking Trails |
| **Activity Type** | Hiking |
| **Difficulty** | Easy |

4. Click **Upload GPX/KML/TCX** and select your file
5. Wait for parsing to complete
6. Click **Save & Close**

:::tip
The system automatically extracts coordinates, elevation, distance, and other statistics from your file.
:::

## Step 5: Create a Menu Item

1. Go to **Menus → Main Menu → Add New Menu Item**
2. Click **Select** for Menu Item Type
3. Choose **GPS Tools → Tracks List**
4. Enter a title: "Our Trails"
5. Click **Save & Close**

## Step 6: View on Your Site

1. Go to your site's frontend
2. Click on "Our Trails" in your menu
3. You should see your track listing!

Click on a track to view:
- Interactive map
- Elevation chart
- Track statistics

## What's Next?

### Configure Settings

Go to **Components → GPS Tools → Options** to configure:

- Map provider (OpenStreetMap or Google Maps)
- Unit system (Metric or Imperial)
- Chart display options
- Upload limits

### Add More Tracks

Upload more GPX, KML, or TCX files:
- From GPS devices (Garmin, Suunto, etc.)
- From apps (Strava, Komoot, AllTrails)
- From online sources

### Customize Display

- **[Modules](modules)** - Add map widgets to any position
- **[Content Plugin](content-plugin)** - Embed tracks in articles
- **[Configuration](configuration)** - Full settings reference

### Engage Your Community

Enable community features:
- Comments on tracks
- Star ratings
- Social sharing

## Quick Reference

### Shortcode for Articles

Display a track in any article:

```
{gpstools track="1"}
```

### Common Settings Locations

| Setting | Location |
|---------|----------|
| Map Provider | Options → Map Settings |
| Unit System | Options → Display Settings |
| Permissions | Options → Permissions |
| Categories | GPS Tools → Categories |
| Track List | GPS Tools → Tracks |

### Useful Menu Types

| Menu Type | Shows |
|-----------|-------|
| Tracks List | All published tracks |
| Single Track | One specific track |
| Category Tracks | Tracks in a category |

## Getting Help

If you run into issues:

1. Check the **[Troubleshooting Guide](troubleshooting)**
2. Review the **[Configuration](configuration)** reference
3. Ensure plugins are enabled
4. Clear Joomla and browser cache

---

**Congratulations!** You've successfully set up GPS Tools. Explore the documentation to learn about advanced features like custom waypoints, module configuration, and API integration.
