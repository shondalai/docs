---
id: overview
title: GPS Tools User Guide
sidebar_label: Getting Started
---

# GPS Tools User Guide

Welcome to GPS Tools! This is a full-featured GPX/KML/TCX visualizer for Joomla 6 with a modern React 19 SPA frontend. Display interactive maps, comprehensive charts, and engage your community with outdoor adventures.

## What You Can Do with GPS Tools

- **Visualize GPS Tracks** - Display GPX, KML, and TCX files on interactive maps with color-coded routes
- **Multiple Map Providers** - OpenStreetMap (15+ tile providers) or Google Maps (7 style presets)
- **Interactive Charts** - Elevation, speed, heart rate profiles with synchronized map highlighting
- **Track Analytics** - Distance, elevation gain/loss, duration, speed, splits analysis
- **Draw Custom Tracks** - Create routes directly on the map without uploading files
- **Photo Gallery** - Attach geolocated images to tracks with lightbox viewing
- **Waypoints System** - Mark points of interest with 11+ custom types
- **Community Features** - Comments, ratings, social sharing, and engagement
- **SEO Optimized** - Search engine friendly URLs and structured data
- **Modern Admin Interface** - React-powered dashboard with real-time updates

## Quick Navigation

### Essential Guides

- **[Installation](installation)** - Install and configure GPS Tools
- **[Quick Start Guide](quick-start-guide)** - Get up and running in minutes
- **[Track Management](track-management)** - Upload, organize, and manage tracks
- **[Configuration](configuration)** - Complete settings reference

### Features

- **[Maps & Charts](maps-and-charts)** - Map providers, tile options, and chart features
- **[Content Plugin](content-plugin)** - Embed tracks in articles with shortcodes
- **[Modules](modules)** - Display maps and track lists anywhere

### Developer Resources

- **[Plugin Events](plugin-events)** - Extend GPS Tools with custom plugins
- **[Troubleshooting](troubleshooting)** - Common issues and solutions
- **[Changelog](gps-tools-changelog)** - Version history and updates

## Getting Started in 5 Minutes

### 1. Install the Package

Download `pkg_gpstools_x.x.x.zip` and install via **System → Install → Extensions**.

### 2. Configure Settings

Go to **Components → GPS Tools → Options** and configure:
- Choose your map provider (OpenStreetMap or Google Maps)
- Set your preferred unit system (Metric or Imperial)
- Configure chart display options and visibility settings

### 3. Create Categories

Organize your tracks by creating categories:
- **Components → GPS Tools → Categories**
- Create categories like "Hiking Trails", "Cycling Routes", etc.

### 4. Upload Your First Track

- Go to **Components → GPS Tools → Tracks → New**
- Upload a GPX, KML, or TCX file (or draw a route on the map)
- The system automatically extracts coordinates, elevation, and statistics
- Add photos, waypoints, and description
- Save and publish your track

### 5. Display on Your Site

Create a menu item to display tracks:
- **Menus → [Your Menu] → Add New Menu Item**
- Select **GPS Tools → Tracks List** or **GPS Tools → Single Track**

## Key Features Overview

### Supported File Formats

| Format | Extension | Description |
|--------|-----------|-------------|
| GPX | .gpx | GPS Exchange Format - most common, full sensor data |
| KML | .kml | Google Earth format |
| TCX | .tcx | Garmin Training Center format with fitness data |
| Drawn | - | Draw routes directly on the map |

### Activity Types

GPS Tools supports multiple activity types with appropriate icons and color schemes:

| Type | Icon | Best For |
|------|------|----------|
| Hiking | 🥾 | Walking trails and hikes |
| Running | 🏃 | Running and jogging routes |
| Trail Running | 🏃‍♂️ | Off-road running |
| Cycling | 🚴 | Road cycling |
| Mountain Biking | 🚵 | Off-road cycling |
| Skiing | ⛷️ | Ski runs and tours |
| Swimming | 🏊 | Open water routes |
| Kayaking | 🛶 | Paddle routes |
| Driving | 🚗 | Road trips |
| Mountaineering | 🧗 | Alpine climbing |

### Difficulty Levels

Classify tracks by difficulty:
- **Easy** - Suitable for beginners and families
- **Moderate** - Some experience needed
- **Difficult** - Experienced users only
- **Expert** - Very challenging, technical skills required

### Waypoint Types

Mark points of interest along your tracks:

| Type | Description |
|------|-------------|
| Summit/Peak | Mountain tops and high points |
| Viewpoint | Scenic overlooks |
| Water | Water sources, lakes, streams |
| Rest Area | Benches, rest stops |
| Food | Restaurants, cafes, snack points |
| Campground | Camping areas |
| Photo Point | Great photo opportunities |
| Warning | Dangerous areas, caution needed |
| Parking | Trailhead parking |
| Information | Information boards, signs |

### Track Visualization

- **Color-coded routes** by speed, elevation, or heart rate
- **Animated playback** to visualize the journey
- **Distance markers** at km/mile intervals
- **Start/End markers** with customizable colors
- **Multi-segment support** for complex routes

## 📦 Package Contents

The GPS Tools package includes:

| Extension | Type | Description |
|-----------|------|-------------|
| `com_gpstools` | Component | Main GPS Tools component |
| `mod_gpstools_map` | Module | Interactive map with track markers |
| `mod_gpstools_tracks` | Module | Track listing with multiple layouts |
| `plg_content_gpstools` | Plugin | Embed tracks using shortcodes |
| `plg_finder_gpstools` | Plugin | Smart Search integration |

## 💡 Need Help?

- Check the **[Troubleshooting Guide](troubleshooting)** for common issues
- Review the **[Configuration Reference](configuration)** for all settings
- Each guide includes step-by-step instructions with examples
