---
id: using-gps-tools-content-plugin-to-display-track-in-articles
title: Display GPS Tracks in Articles
sidebar_label: Content Plugin Usage
sidebar_position: 1
---

# Display GPS Tracks in Articles

The GPS Tools content plugin allows you to embed GPS tracks directly into your Joomla articles using simple shortcodes. This guide shows you how to enable and use the plugin effectively.

## Prerequisites

- Joomla 5.x
- GPS Tools component installed
- At least one GPS track uploaded to your system

## Enabling the Plugin

1. Navigate to **System** → **Plugins** (or **Extensions** → **Plugins** in Joomla 4.x)
2. Use the search filter or select **content** from the type dropdown
3. Find and enable the **Content - GPS Tools** plugin
4. Click on the plugin name to configure default settings (optional)

## Basic Usage

### Simple Track Display

To display a GPS track in your article, use the following shortcode:

```
{GPSCONTENT ["id": 21]}
```

This will render the track with ID 21 using default settings. You can find the track ID in:
- The track's URL when viewing it (e.g., `index.php?option=com_gpstools&view=track&id=21`)
- The **ID** column in the Tracks list in the administrator area

## Customization Options

### Display Components

You can control which elements are displayed by adding parameters to the shortcode. Set parameter values to `1` to show or `0` to hide.

#### Title and Description

```
{GPSCONTENT ["id": 1, "title": 1, "description": 1]}
```

#### Charts

Control the visibility of various data charts:

```
{GPSCONTENT ["id": 1, "elevation": 1, "speed": 1, "hr": 1]}
```

**Available chart parameters:**
- `elevation` - Elevation/altitude chart
- `speed` - Speed chart
- `hr` - Heart rate chart

#### Track Information and Waypoints

```
{GPSCONTENT ["id": 1, "trackinfo": 1, "waypoints": 1]}
```

**Parameters:**
- `trackinfo` - Display track statistics (distance, duration, max speed, etc.)
- `waypoints` - Show waypoint markers and details

### Complete Example

Here's a comprehensive example showing all available options:

```
{GPSCONTENT ["id": 1, "title": 1, "description": 1, "elevation": 1, "speed": 1, "hr": 1, "trackinfo": 1, "waypoints": 1]}
```

### Minimal Example

To display only the map without any additional information:

```
{GPSCONTENT ["id": 1, "title": 0, "description": 0, "elevation": 0, "speed": 0, "hr": 0, "trackinfo": 0, "waypoints": 0]}
```

## Parameter Reference

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | integer | required | The track ID to display |
| `title` | 0 or 1 | plugin default | Show/hide track title |
| `description` | 0 or 1 | plugin default | Show/hide track description |
| `elevation` | 0 or 1 | plugin default | Show/hide elevation chart |
| `speed` | 0 or 1 | plugin default | Show/hide speed chart |
| `hr` | 0 or 1 | plugin default | Show/hide heart rate chart |
| `trackinfo` | 0 or 1 | plugin default | Show/hide track statistics |
| `waypoints` | 0 or 1 | plugin default | Show/hide waypoint information |

## Tips

- **Performance**: If you're embedding multiple tracks on a single page, consider hiding charts you don't need to improve page load times
- **Default Settings**: Configure default display settings in the plugin configuration to avoid repeating the same parameters in every shortcode
- **Responsive Design**: The embedded tracks are responsive and will adapt to different screen sizes automatically

## Troubleshooting

**Track not displaying?**
- Verify the track ID is correct
- Ensure the track is published
- Check that the plugin is enabled
- Clear Joomla cache (System → Clear Cache)

**Missing charts?**
- Ensure your GPS track file contains the relevant data (e.g., heart rate data for HR charts)
- Check plugin settings for default visibility options
