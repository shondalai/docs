---
id: configuration
title: Configuration Reference
sidebar_label: Configuration
sidebar_position: 3
---

# GPS Tools Configuration Reference

Complete configuration reference for GPS Tools. Access settings via **Components → GPS Tools → Options**.

## General Map Settings

Core settings that apply to all map displays.

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Default Map Provider** | OpenStreetMap | OpenStreetMap, Google Maps | Primary map provider. Google Maps requires API key. |
| **Default Zoom Level** | 13 | 1-20 | Initial map zoom level |
| **Track Color** | #3B82F6 | Color picker | Default track line color |
| **Track Width** | 4 | 1-10 | Track line width in pixels |

### Map Provider Comparison

| Feature | OpenStreetMap | Google Maps |
|---------|--------------|-------------|
| Cost | Free | Paid (free tier available) |
| API Key Required | No | Yes |
| Map Quality | Good | Excellent |
| Satellite View | Via tile providers | Full |
| Terrain View | Yes | Yes |
| Customization | High | Medium |
| Tile Providers | 15+ options | 4 map types + styles |

## OpenStreetMap Settings

Configure OpenStreetMap (Leaflet) display options.

### Tile Providers

| Setting | Default | Description |
|---------|---------|-------------|
| **Tile Provider** | OpenStreetMap Standard | Base map tile source |

**Available Tile Providers:**

| Provider | Description | API Key Required |
|----------|-------------|------------------|
| OpenStreetMap Standard | Default OSM tiles | No |
| Humanitarian (HOT) | Humanitarian focus | No |
| OpenTopoMap | Topographic maps | No |
| Stadia Smooth | Clean, modern style | Yes (Stadia) |
| Stadia Smooth Dark | Dark theme | Yes (Stadia) |
| Stadia Outdoors | Outdoor activities | Yes (Stadia) |
| CartoDB Positron | Light, minimal | No |
| CartoDB Dark Matter | Dark, minimal | No |
| CartoDB Voyager | Colorful, detailed | No |
| Esri World Street | Detailed streets | No |
| Esri World Topo | Topographic | No |
| Esri World Imagery | Satellite imagery | No |
| Thunderforest Outdoors | Hiking/outdoor | Yes (Thunderforest) |
| Thunderforest Landscape | Landscape focus | Yes (Thunderforest) |
| Thunderforest OpenCycleMap | Cycling routes | Yes (Thunderforest) |
| Custom | Your own tile URL | Varies |

### OSM Controls

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Show Zoom Control** | Yes | Yes/No | Display zoom buttons |
| **Zoom Control Position** | Top Right | 4 positions | Where to place zoom control |
| **Show Scale** | Yes | Yes/No | Display scale bar |
| **Show Attribution** | Yes | Yes/No | Display map attribution |

### OSM Behavior

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Scroll Wheel Zoom** | Yes | Yes/No | Zoom with mouse scroll |
| **Map Dragging** | Yes | Yes/No | Pan by dragging |
| **Double Click Zoom** | Yes | Yes/No | Zoom on double-click |
| **Touch Zoom** | Yes | Yes/No | Pinch-to-zoom on mobile |
| **Minimum Zoom** | 1 | 1-18 | Minimum zoom level allowed |
| **Maximum Zoom** | 19 | 10-22 | Maximum zoom level allowed |

### Custom Tile Configuration

When using custom tiles:

| Setting | Description |
|---------|-------------|
| **Custom Tile URL** | URL template with `{s}`, `{z}`, `{x}`, `{y}` placeholders |
| **Custom Attribution** | Attribution text for the tile provider |
| **Thunderforest API Key** | Required for Thunderforest tiles |
| **Stadia API Key** | Required for Stadia Maps tiles |

**Example Custom Tile URL:**
```
https://{s}.tile.example.com/{z}/{x}/{y}.png
```

## Google Maps Settings

Configure Google Maps display options. Requires a valid API key.

### Core Settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Google Maps API Key** | - | Your Google Maps JavaScript API key |
| **Map Type** | Roadmap | Default Google Maps type |
| **Map Style** | Standard | Visual style preset |
| **Map ID** | - | Optional Cloud-based Map ID |

**Map Types:**

| Type | Description |
|------|-------------|
| Roadmap | Standard road map |
| Satellite | Satellite imagery |
| Terrain | Physical terrain view |
| Hybrid | Satellite with labels |

**Map Styles:**

| Style | Description |
|-------|-------------|
| Standard | Default Google Maps look |
| Silver | Subtle, gray tones |
| Retro | Vintage, muted colors |
| Dark | Dark theme |
| Night | Optimized for night viewing |
| Aubergine | Purple-tinted dark theme |
| Minimal | Clean, minimal elements |
| Custom | Your own JSON style |

### Google Maps Controls

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Show Zoom Control** | Yes | Yes/No | Display zoom buttons |
| **Zoom Control Position** | Bottom Right | 8 positions | Where to place zoom control |
| **Show Map Type Control** | Yes | Yes/No | Allow switching map types |
| **Show Street View Control** | No | Yes/No | Display Street View pegman |
| **Show Fullscreen Control** | Yes | Yes/No | Native fullscreen button |
| **Show Scale Control** | Yes | Yes/No | Display scale bar |

**Control Positions:**
- TOP_LEFT, TOP_CENTER, TOP_RIGHT
- LEFT_CENTER, RIGHT_CENTER
- BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT

### Google Maps Behavior

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Scroll Wheel** | Yes | Yes/No | Zoom with mouse scroll |
| **Draggable** | Yes | Yes/No | Pan by dragging |
| **Double Click Zoom** | Yes | Yes/No | Zoom on double-click |
| **Gesture Handling** | Auto | See below | Touch gesture behavior |
| **Minimum Zoom** | 1 | 1-18 | Minimum zoom level |
| **Maximum Zoom** | 20 | 10-22 | Maximum zoom level |

**Gesture Handling Options:**

| Value | Description |
|-------|-------------|
| Cooperative | Two-finger scroll to pan, Ctrl+scroll to zoom |
| Greedy | One-finger scroll/drag works |
| None | No gesture interaction |
| Auto | Cooperative on mobile, greedy on desktop |

### Google Polyline Settings

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Geodesic** | No | Yes/No | Curved lines following Earth's curvature |
| **Clickable** | Yes | Yes/No | Track responds to click events |

## Track Display Settings

Configure how GPS tracks are rendered.

### Track Appearance

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Track Opacity** | 0.85 | 0.1-1.0 | Track line transparency |
| **Line Cap** | Round | Butt, Round, Square | Track line end style |
| **Line Join** | Round | Miter, Round, Bevel | Track corner style |

### Track Shadow

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Show Track Shadow** | Yes | Yes/No | Display shadow under track |
| **Shadow Color** | #000000 | Color | Shadow color |
| **Shadow Opacity** | 0.15 | 0.05-0.5 | Shadow transparency |

### Markers

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Show Start Marker** | Yes | Yes/No | Display green start marker |
| **Start Marker Color** | #22C55E | Color | Start marker color |
| **Show End Marker** | Yes | Yes/No | Display red end marker |
| **End Marker Color** | #EF4444 | Color | End marker color |
| **Marker Size** | 8 | 4-16 | Marker radius in pixels |

### Animation & Playback

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Enable Playback** | Yes | Yes/No | Enable route animation |
| **Playback Speed** | Normal | Slow, Normal, Fast, Very Fast | Animation speed |
| **Playback Marker Color** | #3B82F6 | Color | Moving marker color |

**Playback Speed Values:**

| Speed | Delay (ms) | Description |
|-------|------------|-------------|
| Slow | 60 | Detailed viewing |
| Normal | 30 | Standard speed |
| Fast | 15 | Quick overview |
| Very Fast | 5 | Rapid playback |

### Color Modes

Dynamic track coloring based on data:

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Default Color Mode** | Default | See below | Initial coloring mode |
| **Enable Speed Coloring** | Yes | Yes/No | Allow speed-based colors |
| **Enable Elevation Coloring** | Yes | Yes/No | Allow elevation-based colors |
| **Enable Heart Rate Coloring** | Yes | Yes/No | Allow HR-based colors |

**Color Modes:**

| Mode | Description | Data Required |
|------|-------------|---------------|
| Default | Solid track color | None |
| Speed | Green (slow) → Red (fast) | GPS timestamps |
| Elevation | Blue (low) → Red (high) | Elevation data |
| Heart Rate | Green (low) → Red (high) | HR sensor data |

### Map UI Settings

Configure toolbar and UI elements:

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Show Color Mode Switcher** | Yes | Yes/No | Display color mode dropdown |
| **Show Playback Controls** | Yes | Yes/No | Display play/pause buttons |
| **Show Fullscreen Button** | Yes | Yes/No | Display fullscreen toggle |
| **Show Reset View Button** | Yes | Yes/No | Display reset button |
| **Map Height** | 400 | 200-800 | Default map height in pixels |
| **Map Border Radius** | 8 | 0-24 | Map container corner radius |

## Chart Settings

Configure how elevation, speed, and other charts are displayed.

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Show Elevation Chart** | Yes | Yes/No | Display elevation profile |
| **Show Speed Chart** | Yes | Yes/No | Display speed chart |
| **Show Heart Rate Chart** | Yes | Yes/No | Display heart rate (if available) |
| **Show Cadence Chart** | Yes | Yes/No | Display cadence (if available) |
| **Elevation Chart Color** | #22C55E | Color | Green by default |
| **Speed Chart Color** | #3B82F6 | Color | Blue by default |
| **Heart Rate Chart Color** | #EF4444 | Color | Red by default |
| **Cadence Chart Color** | #8B5CF6 | Color | Purple by default |
| **Chart Height** | 200 | 100-500 | Chart height in pixels |
| **Fill Charts** | Yes | Yes/No | Fill area under line |
| **Show Grid Lines** | Yes | Yes/No | Display chart grid |

### Available Chart Types

| Chart | Data Source | When Shown |
|-------|-------------|------------|
| Elevation | GPS altitude data | Always (if data exists) |
| Speed | Calculated from GPS points | Always (if data exists) |
| Heart Rate | Heart rate sensor | Only if recorded |
| Cadence | Cadence sensor | Only if recorded |
| Power | Power meter | Only if recorded |

## Display Settings

Configure general display options.

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Unit System** | Metric | Metric, Imperial | Distance and elevation units |
| **Date Format** | Y-m-d | PHP date format | How dates are displayed |
| **Time Format** | H:i | PHP time format | How times are displayed |
| **Show Track Stats** | Yes | Yes/No | Display statistics panel |
| **Show Waypoints** | Yes | Yes/No | Display waypoint markers |
| **Show Comments** | Yes | Yes/No | Enable comment system |
| **Show Ratings** | Yes | Yes/No | Enable rating system |
| **Tracks Per Page** | 20 | 5-100 | Pagination limit |

### Unit System Details

| Measurement | Metric | Imperial |
|-------------|--------|----------|
| Distance | km | mi |
| Elevation | m | ft |
| Speed | km/h | mph |
| Temperature | °C | °F |

## Upload Settings

Configure file upload options.

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Allowed Extensions** | gpx,kml,tcx | Comma-separated | Allowed file types |
| **Max File Size** | 10 | 1-100 | Maximum upload size (MB) |
| **Auto Parse** | Yes | Yes/No | Parse track on upload |
| **Store Original File** | Yes | Yes/No | Keep original uploaded file |
| **Generate Thumbnails** | Yes | Yes/No | Create map preview thumbnails |

### Supported File Formats

| Format | Extension | Description | Features |
|--------|-----------|-------------|----------|
| GPX | .gpx | GPS Exchange Format | Full support - coordinates, elevation, time, waypoints |
| KML | .kml | Keyhole Markup Language | Coordinates, elevation, styles |
| TCX | .tcx | Training Center XML | Coordinates, heart rate, cadence, power |

## SEO Settings

Configure search engine optimization options.

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Use SEF URLs** | Yes | Yes/No | Search engine friendly URLs |
| **Add Canonical** | Yes | Yes/No | Add canonical link tag |
| **Meta Description Template** | - | Text | Template for auto-generated descriptions |
| **Enable Structured Data** | Yes | Yes/No | Add JSON-LD schema markup |
| **Enable Open Graph** | Yes | Yes/No | Social sharing meta tags |

### Meta Description Template Variables

Use these variables in your meta description template:

| Variable | Description |
|----------|-------------|
| `{title}` | Track title |
| `{distance}` | Total distance |
| `{elevation}` | Elevation gain |
| `{activity}` | Activity type |
| `{category}` | Category name |

**Example Template:**
```
Explore {title} - a {distance} {activity} track with {elevation} elevation gain in {category}.
```

## Advanced Settings

Configure advanced options.

| Setting | Default | Options | Description |
|---------|---------|---------|-------------|
| **Cache Tracks** | Yes | Yes/No | Cache parsed track data |
| **Cache Lifetime** | 3600 | Seconds | Cache duration |
| **Debug Mode** | No | Yes/No | Enable debug logging |
| **Simplify Tracks** | Yes | Yes/No | Reduce track points for display |
| **Max Display Points** | 1000 | 100-5000 | Maximum points for map display |

### Track Simplification

When enabled, tracks are simplified for display to improve performance:

- Original file is preserved
- Display version uses Douglas-Peucker algorithm
- Reduces points while maintaining track shape
- Configurable point limit

## Permissions

Configure access control for different user groups.

### Available Permissions

| Permission | Description | Typical Users |
|------------|-------------|---------------|
| **Configure** | Access component settings | Administrators |
| **Access Admin** | Access backend interface | Editors, Administrators |
| **Create** | Upload new tracks | Authors, Editors |
| **Delete** | Delete tracks | Managers, Administrators |
| **Edit** | Edit any track | Editors, Administrators |
| **Edit Own** | Edit own tracks only | Authors |
| **Edit State** | Publish/unpublish tracks | Publishers, Administrators |
| **Comment** | Post comments on tracks | Registered users |
| **Rate** | Rate tracks | Registered users |

### Recommended Permission Matrix

| User Group | Configure | Admin Access | Create | Edit | Edit Own | Delete | Publish |
|------------|-----------|--------------|--------|------|----------|--------|---------|
| Public | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Registered | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Author | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Editor | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Publisher | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Manager | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Administrator | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## Integration Settings

### Smart Search Integration

When the Finder plugin is enabled:

| Setting | Default | Description |
|---------|---------|-------------|
| **Index Titles** | Yes | Include titles in search index |
| **Index Descriptions** | Yes | Include descriptions in search |
| **Index Waypoints** | No | Include waypoint names |
| **Boost Featured** | 10 | Ranking boost for featured tracks |

### Content Plugin Settings

When the Content plugin is enabled:

| Setting | Default | Description |
|---------|---------|-------------|
| **Default Show Map** | Yes | Show map by default in shortcodes |
| **Default Show Charts** | Yes | Show charts by default |
| **Default Show Stats** | Yes | Show statistics by default |
| **Default Height** | 400 | Default map height in pixels |
| **Lazy Load** | Yes | Lazy load embedded content |

## Configuration Files

### Component Configuration

Settings are stored in the Joomla database and can be exported/imported via:
- **System → Global Configuration → Component configurations**

### Override Settings per Menu Item

Each menu item can override global settings:

1. Create a menu item for GPS Tools
2. In the menu item options, configure display settings
3. These settings override global defaults for that page

## Best Practices

### Performance Optimization

1. **Enable caching** for parsed track data
2. **Enable track simplification** for large tracks
3. **Set appropriate cache lifetime** (3600 seconds recommended)
4. **Use lazy loading** for embedded tracks

### SEO Optimization

1. **Enable SEF URLs** for clean URLs
2. **Configure meta templates** for automatic descriptions
3. **Enable structured data** for rich search results
4. **Use descriptive track titles and descriptions**

### Security

1. **Set appropriate permissions** per user group
2. **Restrict file types** to gpx, kml, tcx only
3. **Set reasonable file size limits**
4. **Enable comment moderation** if needed

## Related Documentation

- **[Installation Guide](installation)** - Initial setup
- **[Track Management](track-management)** - Managing tracks
- **[Modules](modules)** - Module configuration
- **[Troubleshooting](troubleshooting)** - Common issues
