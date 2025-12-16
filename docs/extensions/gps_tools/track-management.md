---
id: track-management
title: Track Management
sidebar_label: Track Management
sidebar_position: 4
---

# Track Management

Learn how to upload, organize, and manage GPS tracks in GPS Tools.

## Accessing Track Management

Navigate to track management via:
- **Components → GPS Tools → Tracks**

## Uploading Tracks

### Supported File Formats

| Format | Extension | Best For |
|--------|-----------|----------|
| **GPX** | .gpx | Most GPS devices and apps |
| **KML** | .kml | Google Earth exports |
| **TCX** | .tcx | Garmin devices, fitness apps |

### Upload Process

1. Go to **Components → GPS Tools → Tracks**
2. Click **New** in the toolbar
3. Fill in the track details:

**Basic Information:**
- **Title** - Descriptive name for the track
- **Alias** - URL slug (auto-generated from title)
- **Category** - Select a category
- **Status** - Published, Unpublished, Archived, or Trashed

**Track File:**
- Click **Upload GPX/KML/TCX**
- Select your file
- File is automatically parsed

4. Click **Save** or **Save & Close**

### What Happens During Upload

When you upload a track file, GPS Tools automatically:

1. **Parses coordinates** - Extracts all GPS points
2. **Calculates statistics** - Distance, elevation, duration
3. **Identifies bounds** - Geographic boundaries
4. **Extracts waypoints** - Points of interest from the file
5. **Generates thumbnail** - Map preview image (if enabled)

## Track Details

### Basic Tab

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Track name displayed to users | Yes |
| **Alias** | URL-friendly slug | Auto-generated |
| **Category** | Organizational category | Yes |
| **Description** | Detailed description (HTML supported) | No |
| **Status** | Publishing state | Yes |

### Track Info Tab

| Field | Options | Description |
|-------|---------|-------------|
| **Activity Type** | Hiking, Running, Cycling, etc. | Type of activity |
| **Difficulty** | Easy, Moderate, Difficult, Expert | Skill level required |
| **Featured** | Yes/No | Show in featured listings |
| **Access** | Public, Registered, etc. | Who can view |

### Activity Types

| Type | Icon | Description |
|------|------|-------------|
| Hiking | 🥾 | Walking trails and hikes |
| Running | 🏃 | Running and jogging routes |
| Trail Running | 🏃‍♂️ | Off-road running |
| Cycling | 🚴 | Road cycling |
| Mountain Biking | 🚵 | Off-road cycling |
| Skiing | ⛷️ | Ski runs and tours |
| Swimming | 🏊 | Open water routes |
| Kayaking | 🛶 | Paddle routes |
| Driving | 🚗 | Road trips |
| Other | 📍 | Any other activity |

### Difficulty Levels

| Level | Description | Suitable For |
|-------|-------------|--------------|
| **Easy** | Flat terrain, well-marked paths | Beginners, families |
| **Moderate** | Some elevation, minor obstacles | Casual enthusiasts |
| **Difficult** | Significant elevation, challenging terrain | Experienced users |
| **Expert** | Extreme conditions, technical skills required | Professionals |

## Automatic Statistics

GPS Tools calculates these statistics automatically:

### Distance & Time

| Statistic | Description |
|-----------|-------------|
| **Total Distance** | Full track length (with elevation correction) |
| **Duration** | Total time from start to end |
| **Moving Time** | Time actually moving |
| **Stopped Time** | Time at rest |

### Elevation

| Statistic | Description |
|-----------|-------------|
| **Elevation Gain** | Total meters climbed |
| **Elevation Loss** | Total meters descended |
| **Max Elevation** | Highest point |
| **Min Elevation** | Lowest point |

### Speed

| Statistic | Description |
|-----------|-------------|
| **Average Speed** | Overall average |
| **Moving Average** | Average while moving |
| **Max Speed** | Peak speed recorded |

### Fitness (if available)

| Statistic | Description |
|-----------|-------------|
| **Average Heart Rate** | Mean heart rate |
| **Max Heart Rate** | Peak heart rate |
| **Calories** | Estimated energy burned |

## Managing Waypoints

Waypoints are points of interest along your track.

### Viewing Waypoints

1. Open a track for editing
2. Go to the **Waypoints** tab
3. View all waypoints extracted from the file

### Waypoint Fields

| Field | Description |
|-------|-------------|
| **Name** | Waypoint name |
| **Description** | Detailed information |
| **Type** | Category (summit, rest area, viewpoint, etc.) |
| **Coordinates** | Latitude and longitude |
| **Elevation** | Height above sea level |
| **Icon** | Display icon on map |

### Waypoint Types

| Type | Icon | Usage |
|------|------|-------|
| Summit | ⛰️ | Mountain peaks |
| Viewpoint | 👁️ | Scenic overlooks |
| Rest Area | 🪑 | Benches, shelters |
| Parking | 🅿️ | Trailhead parking |
| Water | 💧 | Water sources |
| Campsite | ⛺ | Camping locations |
| Warning | ⚠️ | Hazards |
| Info | ℹ️ | Information points |

### Adding Manual Waypoints

1. Edit the track
2. Go to **Waypoints** tab
3. Click **Add Waypoint**
4. Enter coordinates and details
5. Save

## Track List Management

### Filtering Tracks

Use the filter bar to narrow down tracks:

| Filter | Options |
|--------|---------|
| **Search** | Text search in title/description |
| **Category** | Filter by category |
| **Activity Type** | Filter by activity |
| **Difficulty** | Filter by difficulty level |
| **Status** | Published, Unpublished, etc. |
| **Featured** | Featured only |

### Sorting Tracks

Click column headers to sort:

| Column | Sort Order |
|--------|------------|
| **Title** | Alphabetical |
| **Category** | By category name |
| **Hits** | By view count |
| **Created** | By creation date |
| **Status** | By publishing state |

### Batch Operations

Select multiple tracks and use batch actions:

| Action | Description |
|--------|-------------|
| **Publish** | Set selected to published |
| **Unpublish** | Set selected to unpublished |
| **Archive** | Move to archive |
| **Trash** | Move to trash |
| **Category** | Change category |
| **Access** | Change access level |

## Categories

### Managing Categories

1. Go to **Components → GPS Tools → Categories**
2. Create, edit, or organize categories

### Category Features

| Feature | Description |
|---------|-------------|
| **Nested Categories** | Create subcategories |
| **Category Image** | Optional header image |
| **Description** | Category description |
| **Default Icon** | Default waypoint icon for tracks |
| **Access Level** | Control visibility |

### Category Structure Example

```
Hiking Trails/
├── Mountain Trails/
│   ├── Easy Hikes
│   └── Challenging Peaks
├── Forest Walks/
└── Coastal Paths/

Cycling Routes/
├── Road Cycling/
├── Mountain Biking/
└── City Tours/
```

## Comments & Ratings

### Managing Comments

1. Go to **Components → GPS Tools → Comments**
2. View and moderate all comments

### Comment Moderation

| Action | Description |
|--------|-------------|
| **Approve** | Make comment visible |
| **Unpublish** | Hide comment |
| **Delete** | Remove permanently |
| **Reply** | Add admin response |

### Rating System

- Users can rate tracks 1-5 stars
- Average rating displays on track
- Rating count shows engagement
- Ratings visible in track list

## Publishing Workflow

### Track States

| State | Description | Visibility |
|-------|-------------|------------|
| **Published** | Live on site | Visible to allowed users |
| **Unpublished** | Draft state | Hidden from site |
| **Archived** | Historical | Searchable but not listed |
| **Trashed** | Deleted | Not visible, can restore |

### Scheduled Publishing

Set publish dates to control when tracks appear:

1. Edit the track
2. Set **Publish Start** date
3. Set **Publish End** date (optional)
4. Save

Track will automatically publish/unpublish on schedule.

## Importing Multiple Tracks

### Batch Import Tips

For importing many tracks:

1. **Organize files** - Name files descriptively
2. **Upload one at a time** - Prevents timeout issues
3. **Set category first** - Use batch operations after
4. **Review statistics** - Verify data extracted correctly

### Large File Handling

For very large track files (10MB+):

1. Check PHP upload limits in your hosting
2. Consider splitting long tracks
3. Enable track simplification for display
4. Monitor server memory

## Exporting Tracks

### Download Original File

If "Store Original File" is enabled:

1. Edit the track
2. Click **Download Original**
3. Original GPX/KML/TCX is downloaded

### Export Track Data

Track statistics can be exported via:

- **API** - JSON format
- **Print** - Print-friendly view

## Best Practices

### Track Titles

- Use descriptive, searchable names
- Include location or route name
- Keep concise but informative

**Good Examples:**
- "Mount Baker Summit Trail"
- "Central Park Running Loop"
- "Pacific Coast Highway Road Trip"

### Descriptions

- Include route highlights
- Mention difficulty and conditions
- Add practical information (parking, permits)
- Use formatting for readability

### Categories

- Keep hierarchy shallow (2-3 levels)
- Use consistent naming
- Consider user search patterns
- Balance specificity and usability

### SEO

- Write unique descriptions
- Use relevant keywords naturally
- Configure meta descriptions
- Enable structured data

## Related Documentation

- **[Configuration](configuration)** - Settings reference
- **[Maps & Charts](maps-and-charts)** - Display options
- **[Modules](modules)** - Display tracks in modules
- **[Content Plugin](content-plugin)** - Embed in articles
