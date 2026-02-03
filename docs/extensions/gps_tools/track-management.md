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

The React-powered admin interface provides a modern dashboard with real-time filtering, sorting, and batch operations.

## Creating Tracks

GPS Tools supports two methods for creating tracks:

### Method 1: Upload GPS File

Upload GPX, KML, or TCX files from GPS devices or apps.

### Method 2: Draw on Map

Create routes by drawing directly on the interactive map.

## Uploading Tracks

### Supported File Formats

| Format | Extension | Best For |
|--------|-----------|----------|
| **GPX** | .gpx | Most GPS devices and apps, full sensor data |
| **KML** | .kml | Google Earth exports |
| **TCX** | .tcx | Garmin devices, fitness apps with workout data |

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
- Drag and drop your GPX/KML/TCX file, or click to browse
- File is automatically parsed with live preview

4. Click **Save** or **Save & Close**

### What Happens During Upload

When you upload a track file, GPS Tools automatically:

1. **Parses coordinates** - Extracts all GPS points with elevation
2. **Calculates statistics** - Distance, elevation gain/loss, duration, speed
3. **Identifies bounds** - Geographic boundaries for map centering
4. **Extracts waypoints** - Points of interest from the file
5. **Maps waypoint symbols** - Converts GPX/KML symbols to waypoint types
6. **Generates thumbnail** - Static map preview (if configured)
7. **Detects file hash** - For duplicate detection

## Drawing Tracks on the Map

Create routes without uploading files:

1. Click **New** to create a new track
2. Select the **Draw Route** tab
3. Click on the map to add points
4. Double-click to finish the route
5. Fill in track details and save

The system calculates statistics based on the drawn route and optional elevation data.

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

### Fitness (if available in file)

| Statistic | Description |
|-----------|-------------|
| **Average Heart Rate** | Mean heart rate during activity |
| **Max Heart Rate** | Peak heart rate recorded |
| **Calories** | Estimated energy burned |
| **Cadence** | Steps/revolutions per minute |
| **Power** | Watts output (cycling) |

## Track Images & Gallery

Add photos to your tracks for a richer experience.

### Uploading Images

1. Edit the track
2. Go to the **Gallery** tab
3. Drag and drop images or click to browse
4. Add titles and descriptions (optional)
5. Reorder by dragging

### Image Features

| Feature | Description |
|---------|-------------|
| **Automatic Thumbnails** | Generated on upload |
| **Geotagging** | Location from EXIF data (optional) |
| **Lightbox Viewer** | Full-size viewing on frontend |
| **S3 Storage** | Optional cloud storage support |
| **Ordering** | Drag to reorder in gallery |

### Supported Image Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)

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

GPS Tools includes a waypoint type system with customizable types managed in the admin panel.

**Default Waypoint Types:**

| Type | Icon | Color | Usage |
|------|------|-------|-------|
| Summit | Mountain | Red | Mountain peaks, high points |
| Viewpoint | Eye | Blue | Scenic overlooks |
| Rest Area | Bench | Gray | Benches, shelters, rest stops |
| Parking | Car | Blue | Trailhead parking |
| Water | Droplet | Cyan | Water sources, streams, lakes |
| Campground | Tent | Green | Camping locations |
| Warning | Alert | Orange | Hazards, dangerous areas |
| Information | Info | Blue | Information points, signs |
| Food | Utensils | Green | Restaurants, cafes, snack points |
| Photo | Camera | Purple | Great photo opportunities |
| Trailhead | Flag | Green | Trail starting points |

### Managing Waypoint Types

1. Go to **Components → GPS Tools → Waypoint Types**
2. Create, edit, or reorder waypoint types
3. Customize icon, color, and description

### Automatic Symbol Mapping

GPS Tools automatically maps GPX/KML symbols to waypoint types:

| GPX Symbol | Maps To |
|------------|---------|
| `summit`, `peak`, `mountain` | Summit |
| `viewpoint`, `overlook`, `scenic area` | Viewpoint |
| `parking`, `parking area`, `car` | Parking |
| `water`, `drinking water`, `stream`, `lake` | Water |
| `campground`, `camp`, `camping` | Campground |
| `danger`, `caution`, `danger area` | Warning |
| `food`, `restaurant`, `fast food` | Food |
| `photo`, `camera` | Photo |

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
| **Mark as Spam** | Flag as spam content |
| **Ban User** | Prevent future comments |

### Banning System

GPS Tools includes a comprehensive ban system:

1. Go to **Components → GPS Tools → Comments**
2. Select a comment from a user to ban
3. Ban options:
   - Ban by User ID (registered users)
   - Ban by Email (guests)
   - Ban by IP Address
   - Set expiration (temporary or permanent)

### Rating System

- Users can like/dislike tracks
- Like and dislike counts display on tracks
- Ratings visible in track list and detail views

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

### Download Track Files

Users can download tracks in multiple formats:

| Format | Description |
|--------|-------------|
| **GPX** | Standard GPS Exchange Format |
| **KML** | Google Earth format |
| **TCX** | Garmin Training Center format |

Download permissions can be configured per access level in component settings.

### Export Track Data

Track data can be accessed via:

- **REST API** - JSON format for integrations
- **Print View** - Print-friendly layout
- **Embed Code** - Embed in external sites

## Email Notifications

GPS Tools includes an email notification system with customizable templates.

### Managing Email Templates

1. Go to **Components → GPS Tools → Email Templates**
2. Edit templates for different events:

| Template | Trigger |
|----------|---------|
| **Track Created** | When a new track is published |
| **Comment Created** | When someone comments on a track |
| **Track Approval Required** | When a track needs moderation |
| **Comment Approval Required** | When a comment needs moderation |
| **Track Liked** | When someone likes a track |
| **Comment Liked** | When someone likes a comment |

### Template Placeholders

Templates support dynamic placeholders:

```
{site_name}, {track_title}, {track_url}, {author_name}, 
{comment_content}, {approval_url}, {created_date}
```

## Static Map Thumbnails

GPS Tools can generate static map thumbnails for track previews.

### Configuration

Enable in **Options → Static Maps**:

- **Provider** - OpenStreetMap or Mapbox
- **Width/Height** - Thumbnail dimensions
- **Auto-generate** - Create on track save

### Regenerating Thumbnails

1. Go to Tracks list
2. Select tracks
3. Use **Regenerate Thumbnails** batch action

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
