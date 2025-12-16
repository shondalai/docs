---
id: modules
title: GPS Tools Modules
sidebar_label: Modules
sidebar_position: 6
---

# GPS Tools Modules

GPS Tools includes two frontend modules for displaying tracks and maps in any module position.

## Overview

| Module | Description |
|--------|-------------|
| **mod_gpstools_map** | Interactive map showing track locations |
| **mod_gpstools_tracks** | Track listing with multiple layouts |

## mod_gpstools_map - Interactive Map Module

Displays an interactive map with markers at track starting points.

### Features

- OpenStreetMap or Google Maps provider
- Marker clustering for many tracks
- Category and activity filtering
- Click markers to view track details
- Responsive design
- Fullscreen support

### Creating the Module

1. Go to **Content → Site Modules → New**
2. Select **GPS Tools - Map**
3. Configure settings and position
4. Save and publish

### Configuration Options

#### Basic Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Map Height** | Number | 400 | Height in pixels |
| **Map Width** | Text | 100% | Width (px, %, auto) |
| **Map Provider** | Select | OpenStreetMap | OSM or Google Maps |

#### Map Behavior

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Default Zoom** | Number | 10 | Initial zoom level (1-20) |
| **Center Latitude** | Number | 0 | Default center latitude |
| **Center Longitude** | Number | 0 | Default center longitude |
| **Auto Fit Bounds** | Yes/No | Yes | Automatically fit to markers |

#### Filtering

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Categories** | Multi-select | All | Filter by specific categories |
| **Featured Only** | Yes/No | No | Show only featured tracks |
| **Activity Types** | Multi-select | All | Filter by activities |
| **Difficulty** | Multi-select | All | Filter by difficulty |
| **Limit** | Number | 50 | Maximum markers to display |

#### Display Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Cluster Markers** | Yes/No | Yes | Group nearby markers |
| **Cluster Radius** | Number | 80 | Clustering radius in pixels |
| **Show Controls** | Yes/No | Yes | Show zoom/pan controls |
| **Show Fullscreen** | Yes/No | Yes | Show fullscreen button |
| **Popup Content** | Select | Summary | What to show in popups |
| **Link to Track** | Yes/No | Yes | Make markers clickable |

### Popup Content Options

| Option | Content Shown |
|--------|---------------|
| **Title** | Track title only |
| **Summary** | Title, distance, elevation |
| **Full** | Title, description, stats, link |

### Example Configurations

#### Homepage Overview Map

Display all tracks on a large map:

```
Position: main-top
Map Height: 500
Map Width: 100%
Map Provider: OpenStreetMap
Categories: All
Cluster Markers: Yes
Show Controls: Yes
Popup Content: Summary
```

#### Category Sidebar Map

Small map showing specific category:

```
Position: sidebar-right
Map Height: 250
Map Width: 100%
Categories: Hiking Trails
Featured Only: Yes
Limit: 20
Show Controls: No
Popup Content: Title
```

### Styling the Map

Add custom CSS to your template:

```css
/* Map container */
.mod-gpstools-map {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Marker popups */
.mod-gpstools-map .leaflet-popup-content {
    font-size: 14px;
    min-width: 200px;
}

/* Cluster icons */
.mod-gpstools-map .marker-cluster {
    background: rgba(59, 130, 246, 0.6);
}

.mod-gpstools-map .marker-cluster div {
    background: rgba(59, 130, 246, 0.9);
}
```

---

## mod_gpstools_tracks - Track Listing Module

Displays a list of GPS tracks with filtering, sorting, and multiple layout options.

### Features

- Three layout options (list, grid, compact)
- Category and activity filtering
- Sorting options
- Thumbnail images
- Track statistics display
- Responsive design

### Creating the Module

1. Go to **Content → Site Modules → New**
2. Select **GPS Tools - Tracks**
3. Configure settings and position
4. Save and publish

### Configuration Options

#### Basic Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Count** | Number | 5 | Number of tracks to show |
| **Layout** | Select | List | Display layout |
| **Columns** | Number | 3 | Grid columns (grid layout) |

#### Filtering

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Categories** | Multi-select | All | Filter by categories |
| **Featured Only** | Yes/No | No | Show only featured |
| **Activity Types** | Multi-select | All | Filter by activity |
| **Difficulty** | Multi-select | All | Filter by difficulty |

#### Sorting

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Order By** | Select | Created | Sort field |
| **Order Direction** | Select | DESC | Sort direction |

**Order By Options:**
- Created - By creation date
- Title - Alphabetically
- Hits - By popularity
- Distance - By track distance
- Elevation - By elevation gain
- Random - Random order

#### Display Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Show Image** | Yes/No | Yes | Show track thumbnail |
| **Image Width** | Number | 300 | Thumbnail width |
| **Image Height** | Number | 200 | Thumbnail height |
| **Show Title** | Yes/No | Yes | Show track title |
| **Show Description** | Yes/No | Yes | Show excerpt |
| **Description Length** | Number | 100 | Character limit |
| **Show Category** | Yes/No | Yes | Show category name |
| **Show Date** | Yes/No | Yes | Show creation date |
| **Show Stats** | Yes/No | Yes | Show distance/elevation |
| **Show Difficulty** | Yes/No | Yes | Show difficulty badge |
| **Show Rating** | Yes/No | Yes | Show star rating |
| **Show Hits** | Yes/No | No | Show view count |
| **Link Text** | Text | Read more | Link button text |

### Layout Options

#### List Layout (Default)

Vertical list with thumbnails on left:

```
┌────────────────────────────────────────┐
│ ┌──────┐  Title                        │
│ │ IMG  │  Category • Date              │
│ │      │  Description excerpt...       │
│ └──────┘  🥾 12.5 km  ⬆️ 450 m  ⭐⭐⭐⭐ │
├────────────────────────────────────────┤
│ ┌──────┐  Title                        │
│ │ IMG  │  ...                          │
└────────────────────────────────────────┘
```

**Best for:** Sidebars, detailed listings

#### Grid Layout

Card-based grid display:

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│    IMAGE     │ │    IMAGE     │ │    IMAGE     │
│──────────────│ │──────────────│ │──────────────│
│ Title        │ │ Title        │ │ Title        │
│ 12.5 km      │ │ 8.2 km       │ │ 15.0 km      │
│ ⭐⭐⭐⭐      │ │ ⭐⭐⭐⭐⭐    │ │ ⭐⭐⭐        │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Best for:** Main content areas, visual impact

#### Compact Layout

Minimal list without images:

```
┌────────────────────────────────────────┐
│ • Mountain Ridge Trail      12.5 km ▶ │
│ • Lake Loop                  8.2 km ▶ │
│ • Forest Path               15.0 km ▶ │
└────────────────────────────────────────┘
```

**Best for:** Quick navigation, footers, limited space

### Example Configurations

#### Latest Tracks (Sidebar)

```
Position: sidebar-right
Layout: List
Count: 5
Show Image: Yes
Image Width: 80
Image Height: 60
Order By: Created
Order Direction: DESC
Show Description: No
Show Stats: Yes
```

#### Featured Grid (Homepage)

```
Position: main-top
Layout: Grid
Columns: 3
Count: 6
Featured Only: Yes
Show Image: Yes
Image Width: 400
Image Height: 250
Show Rating: Yes
Order By: Random
```

#### Popular This Week

```
Position: sidebar-left
Layout: Compact
Count: 10
Order By: Hits
Order Direction: DESC
Show Stats: Yes
Show Image: No
```

#### Category Highlights

```
Position: below-content
Layout: Grid
Columns: 4
Count: 4
Categories: Hiking Trails
Order By: Random
Show Description: No
```

### Template Overrides

Customize module output with template overrides:

1. **Create override directory:**
   ```
   templates/YOUR_TEMPLATE/html/mod_gpstools_tracks/
   ```

2. **Copy and modify templates:**
   - `default.php` - List layout
   - `grid.php` - Grid layout
   - `compact.php` - Compact layout

### Styling the Module

Add custom CSS:

```css
/* Track cards */
.mod-gpstools-tracks .track-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;
}

.mod-gpstools-tracks .track-card:hover {
    transform: translateY(-4px);
}

/* Difficulty badges */
.mod-gpstools-tracks .difficulty-easy {
    background: #22c55e;
}

.mod-gpstools-tracks .difficulty-moderate {
    background: #eab308;
}

.mod-gpstools-tracks .difficulty-difficult {
    background: #f97316;
}

.mod-gpstools-tracks .difficulty-expert {
    background: #ef4444;
}

/* Stats display */
.mod-gpstools-tracks .track-stats {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: #6b7280;
}
```

## Using Both Modules Together

Create a rich GPS experience by combining both modules:

### Example: Adventure Page Layout

```
┌─────────────────────────────────────────────────────┐
│                    MAIN CONTENT                      │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │         mod_gpstools_map (full width)        │   │
│  │              Position: main-top              │   │
│  │                Height: 400px                 │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌────────────────────┐  ┌────────────────────┐    │
│  │ Latest Hiking      │  │ Latest Cycling     │    │
│  │ mod_gpstools_tracks│  │ mod_gpstools_tracks│    │
│  │ Position: content  │  │ Position: content  │    │
│  │ Category: Hiking   │  │ Category: Cycling  │    │
│  └────────────────────┘  └────────────────────┘    │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Tips for Module Placement

| Position | Recommended Module | Configuration |
|----------|-------------------|---------------|
| Header/Banner | Map | Full width, moderate height |
| Main Content | Both | Map above, tracks grid below |
| Sidebar | Tracks | List layout, compact size |
| Footer | Tracks | Compact layout |

## Related Documentation

- **[Configuration](configuration)** - Global settings
- **[Track Management](track-management)** - Managing tracks
- **[Content Plugin](content-plugin)** - Embed in articles
- **[Maps & Charts](maps-and-charts)** - Display options
