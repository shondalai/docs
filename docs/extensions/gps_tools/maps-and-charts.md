---
id: maps-and-charts
title: Maps & Charts
sidebar_label: Maps & Charts
sidebar_position: 5
---

# Maps & Charts

GPS Tools provides interactive map visualization and comprehensive data charts. This guide covers configuration and customization options.

## Map Providers

GPS Tools supports two map providers:

| Provider | Cost | API Key | Best For |
|----------|------|---------|----------|
| **OpenStreetMap** | Free | Not required | Most users |
| **Google Maps** | Paid tier | Required | Premium look, satellite |

### OpenStreetMap (Default)

OpenStreetMap is the default provider, powered by Leaflet.js:

**Advantages:**
- ✅ Completely free
- ✅ No API key required
- ✅ Privacy-friendly
- ✅ Extensive worldwide coverage
- ✅ Active community updates
- ✅ 15+ tile provider options

**Available Tile Providers:**
- OpenStreetMap Standard & Humanitarian
- OpenTopoMap (Topographic)
- Stadia Maps (Smooth, Dark, Outdoors)
- CartoDB (Positron, Dark Matter, Voyager)
- Esri (Street, Topo, Imagery)
- Thunderforest (Outdoors, Landscape, Cycle)
- Custom tile URLs

### Google Maps

For a premium map experience:

**Advantages:**
- ✅ High-quality tiles
- ✅ Satellite and hybrid views
- ✅ 7 built-in map styles
- ✅ Custom JSON styling support
- ✅ Street View integration
- ✅ Familiar interface

**Map Types:**
- Roadmap (default)
- Satellite
- Terrain
- Hybrid

**Considerations:**
- ❗ Requires API key
- ❗ Usage costs (free tier available)
- ❗ API quotas apply

## Setting Up Google Maps

### Step 1: Create Google Cloud Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create or select a project
3. Enable billing (required, but free tier available)

### Step 2: Enable Maps APIs

Enable these APIs for your project:

1. **Maps JavaScript API** - Required for map display
2. **Geocoding API** - Optional, for location search

### Step 3: Create API Key

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → API Key**
3. Copy the generated key

### Step 4: Secure Your API Key

Restrict your API key for security:

1. Click on your API key
2. Under **Application restrictions**, select **HTTP referrers**
3. Add your domains:
   ```
   https://yoursite.com/*
   https://www.yoursite.com/*
   ```
4. Under **API restrictions**, select **Restrict key**
5. Choose only the APIs you need

### Step 5: Configure in GPS Tools

1. Go to **Components → GPS Tools → Options**
2. Paste your key in **Google Maps API Key**
3. Set **Default Map Provider** to "Google Maps"
4. Save

### Google Maps Pricing

Google offers a generous free tier:

| Usage | Free Tier | After Free Tier |
|-------|-----------|-----------------|
| Map Loads | 28,000/month | $7 per 1,000 |
| Static Maps | 100,000/month | $2 per 1,000 |

Most small to medium sites stay within the free tier.

## Map Configuration

GPS Tools offers extensive map configuration options organized into several categories.

### General Settings

Configure in **Components → GPS Tools → Options**:

| Setting | Default | Description |
|---------|---------|-------------|
| **Default Map Provider** | OpenStreetMap | Primary map provider (OSM or Google) |
| **Default Zoom** | 13 | Initial zoom level (1-20) |
| **Track Color** | #3B82F6 | Main track line color |
| **Track Width** | 4 | Line width in pixels (1-10) |

### OpenStreetMap Tile Providers

GPS Tools supports 15+ tile providers for OpenStreetMap:

| Provider | Style | API Key |
|----------|-------|---------|
| OpenStreetMap Standard | Classic OSM | No |
| Humanitarian (HOT) | Humanitarian focus | No |
| OpenTopoMap | Topographic | No |
| Stadia Smooth/Dark/Outdoors | Modern, clean | Yes |
| CartoDB Positron/Dark/Voyager | Minimal styles | No |
| Esri World Street/Topo/Imagery | Professional | No |
| Thunderforest Outdoors/Landscape/Cycle | Activity-focused | Yes |
| Custom | Your own tiles | Varies |

### Google Maps Styles

When using Google Maps, choose from built-in styles:

| Style | Description |
|-------|-------------|
| Standard | Default Google Maps |
| Silver | Subtle gray tones |
| Retro | Vintage, muted |
| Dark | Dark theme |
| Night | Night-optimized |
| Aubergine | Purple-tinted dark |
| Minimal | Clean, minimal |
| Custom | Your JSON style |

### Track Display Options

| Setting | Default | Description |
|---------|---------|-------------|
| **Opacity** | 0.85 | Track transparency |
| **Shadow** | Yes | Drop shadow effect |
| **Start/End Markers** | Yes | Show route endpoints |
| **Marker Size** | 8px | Endpoint marker size |

### Color Modes

Dynamic track coloring based on data:

| Mode | Colors By | Gradient |
|------|-----------|----------|
| Default | Fixed color | N/A |
| Speed | Velocity | Green → Red |
| Elevation | Altitude | Blue → Red |
| Heart Rate | BPM | Green → Red |

### Route Animation

Enable animated playback of your tracks:

| Setting | Options |
|---------|---------|
| **Playback** | Enable/Disable |
| **Speed** | Slow, Normal, Fast, Very Fast |
| **Marker Color** | Customizable |

### Zoom Levels Explained

| Level | View | Best For |
|-------|------|----------|
| 1-4 | Continent | Not useful for tracks |
| 5-8 | Country/Region | Multi-day expeditions |
| 9-11 | City/Area | Day hikes, bike tours |
| 12-14 | Neighborhood | Detailed routes |
| 15-18 | Street | Running paths, urban |
| 19-20 | Building | Very precise routes |

### Track Color Options

Consider activity-based colors:

| Activity | Suggested Color | Hex Code |
|----------|-----------------|----------|
| Hiking | Forest Green | #22C55E |
| Cycling | Blue | #3B82F6 |
| Running | Orange | #F97316 |
| Skiing | Ice Blue | #0EA5E9 |
| Driving | Purple | #8B5CF6 |

### Elevation-Based Coloring

When enabled, tracks are colored by elevation:

| Elevation | Color | Example |
|-----------|-------|---------|
| Lowest | Green | Valley floor |
| Low-Mid | Yellow | Foothills |
| Mid-High | Orange | Mountain slopes |
| Highest | Red | Peaks, summits |

## Map Features

### Interactive Controls

**OpenStreetMap Controls:**

| Control | Configurable | Positions |
|---------|--------------|-----------|
| **Zoom +/-** | Yes | 4 corners |
| **Scale Bar** | Yes | Bottom left |
| **Attribution** | Yes | Bottom right |

**Google Maps Controls:**

| Control | Configurable | Positions |
|---------|--------------|-----------|
| **Zoom +/-** | Yes | 8 positions |
| **Map Type** | Yes | Top right |
| **Street View** | Yes | Near zoom |
| **Scale** | Yes | Bottom |
| **Fullscreen** | Yes | Top right |

### Map Toolbar

The map toolbar provides quick access to features:

| Control | Function |
|---------|----------|
| **Color Mode** | Switch between default/speed/elevation/HR coloring |
| **Play/Pause** | Start or pause route animation |
| **Reset** | Reset animation to beginning |
| **Fullscreen** | Toggle fullscreen mode |

### Markers

| Marker | Meaning |
|--------|---------|
| 🟢 Green | Track start point |
| 🔴 Red | Track end point |
| 📍 Blue | Waypoints |
| 🏔️ Custom | Category-specific icons |

### Popups

Click markers to see:
- Track/waypoint name
- Distance and elevation
- Link to full track view

### Scale Bar

Shows real-world distances on the map in the selected unit system.

## Charts

GPS Tools provides interactive charts for track analysis.

### Available Chart Types

| Chart | Data | Color |
|-------|------|-------|
| **Elevation** | Altitude over distance | Green (#22C55E) |
| **Speed** | Speed over distance | Blue (#3B82F6) |
| **Heart Rate** | BPM over distance | Red (#EF4444) |
| **Cadence** | RPM/SPM over distance | Purple (#8B5CF6) |
| **Power** | Watts over distance | Orange (#F97316) |

### Chart Features

| Feature | Description |
|---------|-------------|
| **Hover** | Shows exact values at cursor |
| **Zoom** | Click and drag to zoom |
| **Pan** | Shift + drag to pan |
| **Reset** | Double-click to reset view |
| **Map Sync** | Hover shows point on map |

### Chart Configuration

Configure in **Components → GPS Tools → Options → Chart Settings**:

| Setting | Default | Options |
|---------|---------|---------|
| **Chart Height** | 200px | 100-500px |
| **Fill Charts** | Yes | Yes/No |
| **Show Grid** | Yes | Yes/No |
| **Show Legend** | Yes | Yes/No |

### Data Availability

Not all tracks have all data types:

| File Format | Elevation | Speed | Heart Rate | Cadence | Power |
|-------------|-----------|-------|------------|---------|-------|
| GPX | ✅ | Calculated | If recorded | If recorded | If recorded |
| KML | ✅ | Calculated | ❌ | ❌ | ❌ |
| TCX | ✅ | ✅ | ✅ | ✅ | ✅ |

### Reading Elevation Charts

```
         ▲ Elevation (m)
     2500 │      ●───● Peak
         │     ╱     ╲
     2000 │    ╱       ╲
         │   ╱         ╲
     1500 │  ╱           ╲ Descent
         │ ╱ Climb        ╲
     1000 │●               ●
         └─────────────────────▶ Distance (km)
           0   5   10   15   20
```

Key insights from elevation charts:
- **Steep climbs** = Vertical sections
- **Gradual climbs** = Angled sections
- **Flat terrain** = Horizontal sections
- **Total gain** = Sum of all uphill sections

### Reading Speed Charts

```
         ▲ Speed (km/h)
      25 │    ●───●
         │   ╱     ╲     ●
      20 │  ╱       ╲   ╱
         │ ╱         ╲ ╱
      15 │╱           ●
         │            Stop
      10 │
         └─────────────────────▶ Distance (km)
           0   5   10   15   20
```

Key insights from speed charts:
- **High peaks** = Fast sections (downhill, flat)
- **Valleys** = Slow sections (uphill, technical)
- **Drops to zero** = Stops/breaks
- **Consistent line** = Steady pace

## Statistics Panel

The statistics panel shows key track metrics:

### Distance Stats

| Stat | Description |
|------|-------------|
| **Total Distance** | Full track length |
| **3D Distance** | Includes elevation changes |

### Elevation Stats

| Stat | Description |
|------|-------------|
| **Elevation Gain** | Total uphill meters |
| **Elevation Loss** | Total downhill meters |
| **Max Elevation** | Highest point |
| **Min Elevation** | Lowest point |
| **Total Ascend** | Cumulative ascent |
| **Total Descend** | Cumulative descent |

### Time Stats

| Stat | Description |
|------|-------------|
| **Duration** | Start to end time |
| **Moving Time** | Time in motion |
| **Stopped Time** | Time at rest |

### Speed Stats

| Stat | Description |
|------|-------------|
| **Average Speed** | Total distance / total time |
| **Moving Average** | Distance / moving time |
| **Max Speed** | Peak speed recorded |

### Fitness Stats (if available)

| Stat | Description |
|------|-------------|
| **Avg Heart Rate** | Mean BPM |
| **Max Heart Rate** | Peak BPM |
| **Calories** | Estimated energy |

## Customizing Appearance

### CSS Variables

GPS Tools uses CSS variables for theming:

```css
:root {
    /* Track colors */
    --gpstools-track-color: #3B82F6;
    --gpstools-track-width: 3px;
    
    /* Chart colors */
    --gpstools-elevation-color: #22C55E;
    --gpstools-speed-color: #3B82F6;
    --gpstools-heartrate-color: #EF4444;
    
    /* UI colors */
    --gpstools-primary: #3B82F6;
    --gpstools-background: #ffffff;
    --gpstools-text: #1f2937;
}
```

### Custom Map Styles

Override in your template CSS:

```css
/* Map container */
.gpstools-map-container {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Stats panel */
.gpstools-stats {
    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    padding: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

/* Chart container */
.gpstools-charts {
    padding: 1rem;
    background: #ffffff;
}
```

### Responsive Design

GPS Tools is fully responsive:

```css
/* Tablet and smaller */
@media (max-width: 768px) {
    .gpstools-map-container {
        height: 300px !important;
    }
    
    .gpstools-stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile */
@media (max-width: 480px) {
    .gpstools-stats {
        grid-template-columns: 1fr;
    }
}
```

## Performance Optimization

### Track Simplification

For performance, tracks are simplified for display:

- Original coordinates preserved
- Display uses Douglas-Peucker algorithm
- Configurable point limit (default: 1000)
- Shape maintained, fewer points

### Lazy Loading

Enable lazy loading for embedded tracks:

- Maps load when scrolled into view
- Reduces initial page load
- Better Core Web Vitals scores

### Caching

Enable caching for better performance:

- Parsed track data cached
- Default: 3600 seconds (1 hour)
- Reduces database queries

## Troubleshooting Maps

### Map Shows Gray/Blank

1. Check browser console for errors
2. Verify API key (for Google Maps)
3. Check API key restrictions
4. Ensure HTTPS on production

### Track Not Visible

1. Verify track has coordinates
2. Check bounds calculation
3. Try "Fit to Track" button
4. Check track color vs. background

### Slow Map Loading

1. Enable track simplification
2. Reduce max display points
3. Enable lazy loading
4. Use caching

## Related Documentation

- **[Configuration](configuration)** - All settings
- **[Content Plugin](content-plugin)** - Embedding tracks
- **[Modules](modules)** - Map module
- **[Troubleshooting](troubleshooting)** - Common issues
