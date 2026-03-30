---
id: content-plugin
title: Content Plugin & Shortcodes
sidebar_label: Content Plugin
sidebar_position: 7
---

# GPS Tools Content Plugin

The GPS Tools Content Plugin (`plg_content_gpstools`) enables embedding GPS tracks and track grids directly into Joomla articles using simple shortcodes. It renders premium, responsive React components with a sleek, minimalist design.

## Installation

1. Install the GPS Tools package via Joomla Extension Manager
2. Navigate to **Extensions → Plugins**
3. Search for "GPS Tools - Content"
4. Enable the plugin
5. Configure default settings as needed

## Quick Start

Embed a track in any article by adding:

```
{gpstrack id="123"}
```

Replace `123` with your track's ID. The plugin will render an interactive map with track statistics.

---

## Track Embed Shortcode

### Basic Usage

```
{gpstrack id="TRACK_ID"}
```

The shortcode renders a premium track embed with:
- Interactive map with the track route
- Key statistics (distance, elevation, duration, etc.)
- Responsive design for all screen sizes
- Light/dark theme support

### Layouts

Three layout modes are available:

| Layout | Description | Best For |
|--------|-------------|----------|
| `full` | Full-featured display with generous spacing | Main content area, dedicated track pages |
| `compact` | Reduced spacing, optimized density | Sidebars, multi-track articles |
| `mini` | Minimal display, essential info only | Widgets, tight spaces, previews |

**Examples:**

```
{gpstrack id="123" layout="full"}
{gpstrack id="123" layout="compact"}
{gpstrack id="123" layout="mini"}
```

### Display Options

Control what sections appear in the embed:

| Option | Shortcode Attribute | Default | Description |
|--------|---------------------|---------|-------------|
| Title | `title="1"` | `1` (on) | Show track title in the embed header |
| Link to Track | `link="1"` | `1` (on) | Make title clickable and show "View details" link |
| Navigation | `navigation="1"` | `1` (on) | Show previous/next track navigation links |
| Downloads | `downloads="1"` | `1` (on) | Show track file download buttons |
| Map | `map="1"` | `1` (on) | Interactive Leaflet map with track route |
| Statistics | `stats="1"` | `1` (on) | Distance, elevation, duration, speed stats |
| Elevation Chart | `elevation="1"` | `1` (on) | Elevation profile chart |
| Speed Chart | `speed="1"` | `1` (on) | Speed over distance/time chart |
| Heart Rate Chart | `heartrate="1"` | `1` (on) | Heart rate chart (if data available) |
| Waypoints | `waypoints="1"` | `0` (off) | Waypoints timeline table |
| Splits | `splits="1"` | Global | Kilometer/mile splits table (follows component setting) |
| Photo Gallery | `gallery="1"` | Global | Track photo gallery (follows component setting) |

**Boolean Values:**
- Enable: `1`, `true`, `yes`, `on`
- Disable: `0`, `false`, `no`, `off`

:::info Component-Level Overrides
Some options are subject to component-level settings:
- **Link**, **Navigation**, and **Downloads** respect the visibility access settings configured in the component options. If an access level restricts these features, the shortcode attribute cannot override it.
- **Statistics**, **Elevation Chart**, **Speed Chart**, and **Heart Rate Chart** respect the global show/hide settings in the component options. If a chart is globally disabled, the shortcode cannot enable it.
:::

### Complete Reference

```
{gpstrack 
  id="123"              # Required: Track ID
  layout="full"         # Layout: full, compact, mini
  height="320"          # Map height in pixels
  title="1"             # Show/hide track title
  link="1"              # Link title to main track page
  navigation="1"        # Show/hide prev/next navigation
  downloads="1"         # Show/hide download buttons
  map="1"               # Show/hide map
  stats="1"             # Show/hide statistics
  elevation="1"         # Show/hide elevation chart
  speed="1"             # Show/hide speed chart
  heartrate="1"         # Show/hide heart rate chart
  waypoints="0"         # Show/hide waypoints table
  splits="1"            # Show/hide splits table
  gallery="1"           # Show/hide photo gallery
}
```

> **Note:** Shortcode attributes are case-insensitive.

---

## Tracks Grid Shortcode

Display a grid of multiple tracks:

```
{gpstracks}
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `category` | Filter by category ID | All categories |
| `limit` | Number of tracks to display (max 50) | 10 |
| `layout` | Grid layout type | `grid` |
| `columns` | Grid columns (1-6) | 3 |
| `orderby` | Sort field: `created`, `title`, `hits`, `distance` | `created` |
| `orderdir` | Sort direction: `asc`, `desc` | `desc` |
| `featured` | Show only featured tracks: `1` or `0` | Show all |

### Examples

```
{gpstracks category="5" limit="6" columns="3"}
{gpstracks featured="1" limit="4" columns="2"}
{gpstracks orderby="hits" orderdir="desc" limit="10"}
```

---

## Multiple Embeds

You can include multiple track embeds on the same page:

```html
<h2>Morning Hike</h2>
{gpstrack id="101" layout="compact" elevation="1"}

<h2>Afternoon Trail</h2>
{gpstrack id="102" layout="compact" elevation="1"}

<h2>Weekend Adventure</h2>
{gpstrack id="103" layout="full" elevation="1" waypoints="1" gallery="1"}
```

Each embed operates independently with its own settings.

---

## Styling & Theming

### Color Palette

The embeds use a premium stone/slate neutral palette:

- **Light Mode:** White backgrounds with stone-100/200 borders
- **Dark Mode:** Stone-900 backgrounds with stone-800 borders

### CSS Classes

The plugin adds these wrapper classes for custom styling:

```css
.gpstools-track-embed { }           /* Main embed container */
.gpstools-embed-full { }            /* Full layout modifier */
.gpstools-embed-compact { }         /* Compact layout modifier */
.gpstools-embed-mini { }            /* Mini layout modifier */
.gpstools-tracks-grid { }           /* Grid container */
```

### Custom Styling Example

```css
/* Increase map height for all embeds */
.gpstools-track-embed .gpstools-map {
  min-height: 400px;
}

/* Custom border for compact embeds */
.gpstools-embed-compact {
  border: 2px solid #your-brand-color;
  border-radius: 1rem;
}
```

---

## Creative Use Cases

Get inspired by these real-world applications of GPS track embeds:

### Travel Blog: Daily Adventure Log

Document your multi-day trip with individual embeds for each day:

```html
<h2>🏔️ Week in the Alps - September 2024</h2>

<h3>Day 1: Geneva to Chamonix</h3>
<p>Started early from Geneva, cycling through stunning French countryside...</p>
{gpstrack id="501" layout="compact" elevation="1" gallery="1"}

<h3>Day 2: Tour du Mont Blanc - Section 1</h3>
<p>The classic TMB trail begins! Weather was perfect...</p>
{gpstrack id="502" layout="compact" elevation="1" waypoints="1" gallery="1"}

<h3>Day 3: Lac Blanc Circuit</h3>
<p>Today's highlight: turquoise alpine lakes and mountain goats...</p>
{gpstrack id="503" layout="compact" elevation="1" gallery="1"}
```

### Training Blog: Progressive Difficulty

Show your training progression with comparison layouts:

```html
<h2>Marathon Training: Building Endurance</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
    <div>
        <h4>Week 1: Base Run (Easy)</h4>
        {gpstrack id="101" layout="compact" speed="1" height="250"}
        <p><strong>Avg Pace:</strong> 6:30/km | <strong>Effort:</strong> ⭐⭐</p>
    </div>
    <div>
        <h4>Week 4: Tempo Run (Moderate)</h4>
        {gpstrack id="104" layout="compact" speed="1" height="250"}
        <p><strong>Avg Pace:</strong> 5:45/km | <strong>Effort:</strong> ⭐⭐⭐⭐</p>
    </div>
    <div>
        <h4>Week 8: Race Simulation (Hard)</h4>
        {gpstrack id="108" layout="compact" speed="1" height="250"}
        <p><strong>Avg Pace:</strong> 5:15/km | <strong>Effort:</strong> ⭐⭐⭐⭐⭐</p>
    </div>
</div>
```

### Hiking Guide: Difficulty Comparison

Help readers choose the right trail:

```html
<h2>Best Hikes Near Portland</h2>

<h3>🟢 Family-Friendly: Multnomah Falls Loop</h3>
{gpstrack id="201" layout="compact" elevation="1" waypoints="1"}
<p><strong>Difficulty:</strong> Easy | <strong>Time:</strong> 2-3 hours | <strong>Kid-Friendly:</strong> Yes</p>

<h3>🟡 Moderate Challenge: Angel's Rest</h3>
{gpstrack id="202" layout="compact" elevation="1" waypoints="1"}
<p><strong>Difficulty:</strong> Moderate | <strong>Time:</strong> 3-4 hours | <strong>Views:</strong> Spectacular</p>

<h3>🔴 Advanced: Eagle Creek to Tunnel Falls</h3>
{gpstrack id="203" layout="compact" elevation="1" waypoints="1"}
<p><strong>Difficulty:</strong> Hard | <strong>Time:</strong> 6-8 hours | <strong>Experience Required:</strong> Yes</p>
```

### Bike Touring Journal: Route Planning

Share your bikepacking adventure with route details:

```html
<h2>Cross-Country Bike Tour: Coast to Coast</h2>

<h3>Overview Route</h3>
{gpstrack id="301" layout="full" elevation="1" splits="1"}

<h3>📊 Daily Breakdown</h3>
<details>
<summary>Day 1-5: Pacific Coast (Click to expand)</summary>
{gpstracks category="15" limit="5" columns="1" orderby="created" order="asc"}
</details>

<details>
<summary>Day 6-10: Sierra Nevada Crossing</summary>
{gpstracks category="16" limit="5" columns="1" orderby="created" order="asc"}
</details>
```

### Event Recap: Race Results

Share race experiences with detailed analytics:

```html
<h2>Boston Marathon 2024 - Race Report</h2>

<p>After months of training, race day finally arrived...</p>

{gpstrack id="401" layout="full" elevation="1" speed="1" heartrate="1" splits="1"}

<h3>🎯 Key Moments</h3>
<ul>
    <li><strong>KM 5:</strong> Settled into target pace, feeling strong</li>
    <li><strong>KM 21:</strong> Hit halfway mark exactly on schedule</li>
    <li><strong>KM 32:</strong> The dreaded "wall" - had to adjust pace</li>
    <li><strong>KM 40:</strong> Final push, crowd energy was incredible!</li>
</ul>

<h3>📈 Comparison to Previous Years</h3>
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    {gpstrack id="401" layout="mini" height="200"}
    {gpstrack id="389" layout="mini" height="200"}
    {gpstrack id="375" layout="mini" height="200"}
</div>
```

### Real Estate: Neighborhood Tours

Show property surroundings with walking/cycling routes:

```html
<h2>123 Main Street - Explore the Neighborhood</h2>

<h3>🚶 Walk to Downtown (15 min)</h3>
{gpstrack id="601" layout="compact" waypoints="1"}
<p>Coffee shops, restaurants, grocery stores - all within easy walking distance.</p>

<h3>🚴 Bike to Park (10 min)</h3>
{gpstrack id="602" layout="compact" waypoints="1"}
<p>Family-friendly bike path leads to 50-acre riverfront park.</p>

<h3>🏃 Morning Running Loop (5K)</h3>
{gpstrack id="603" layout="compact" elevation="1"}
<p>Popular neighborhood running route through tree-lined streets.</p>
```

### Educational Content: Geography Lessons

Teach geography with real-world exploration:

```html
<h2>Unit 5: Understanding Topography</h2>

<h3>🏔️ Mountain Pass Elevation Profile</h3>
{gpstrack id="701" layout="full" elevation="1"}
<p><strong>Learning Objectives:</strong> Identify elevation gain, grade percentage, and summit altitude.</p>

<h3>📝 Student Activity</h3>
<ol>
    <li>Calculate the total elevation gain from the chart</li>
    <li>Identify the steepest section of the climb</li>
    <li>Compare this route to your local geography</li>
</ol>

<h3>🌊 Valley vs. Mountain Routes</h3>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    <div>
        <h4>Flat River Valley</h4>
        {gpstrack id="702" layout="compact" elevation="1" height="250"}
    </div>
    <div>
        <h4>Mountain Switchbacks</h4>
        {gpstrack id="703" layout="compact" elevation="1" height="250"}
    </div>
</div>
```

### Photography Portfolio: Location Stories

Combine stunning photos with the journey to capture them:

```html
<h2>📸 Chasing Alpine Sunrise</h2>

<p>Woke at 3 AM for this epic sunrise shoot. The journey was as beautiful as the destination...</p>

{gpstrack id="801" layout="full" elevation="1" gallery="1" waypoints="1"}

<h3>📷 Camera Settings & Locations</h3>
<p>Each waypoint marks where I stopped to capture different perspectives. 
Check the gallery above to see the photos taken at each location.</p>
```

### Adventure Race: Team Navigation

Document orienteering or adventure racing:

```html
<h2>24-Hour Rogaine Championship</h2>

<h3>Our Navigation Strategy</h3>
{gpstrack id="901" layout="full" elevation="1" waypoints="1"}

<p><strong>Checkpoints Hit:</strong> 18/25 | <strong>Score:</strong> 840 points | <strong>Finish Time:</strong> 22:47</p>

<h3>🗺️ Control Points</h3>
<p>Waypoints show each checkpoint we visited. Notice how we optimized the route 
to avoid the steep eastern ridge - that decision saved us 2 hours!</p>
```

### Wildlife Tracking: Conservation Project

Share ecological research and wildlife observations:

```html
<h2>Grizzly Bear Habitat Survey - Summer 2024</h2>

{gpstrack id="1001" layout="full" waypoints="1" gallery="1"}

<h3>🐻 Observation Points</h3>
<p>Waypoints indicate locations where we documented bear activity:
feeding sites, scat samples, and track evidence. Photos attached at each location.</p>

<h3>Data Collection Notes</h3>
<ul>
    <li>Total survey area: 45 km²</li>
    <li>Active feeding sites: 12 documented</li>
    <li>Berry density: High in western sections</li>
</ul>
```

---

## Usage Examples

### Basic Embed
```
{gpstrack id="42"}
```
Shows map and statistics with full layout.

### Compact with Charts
```
{gpstrack id="42" layout="compact" elevation="1" speed="1"}
```
Compact layout with elevation and speed charts.

### Full Featured
```
{gpstrack id="42" layout="full" elevation="1" speed="1" heartrate="1" waypoints="1" splits="1" gallery="1"}
```
All features enabled for a comprehensive track view.

### Minimal Preview
```
{gpstrack id="42" layout="mini" stats="0"}
```
Map only, perfect for thumbnails or sidebars.

### Featured Tracks Grid
```
{gpstracks featured="1" limit="6" columns="3" orderby="hits"}
```
Grid of 6 most viewed featured tracks in 3 columns.

### Side-by-Side Comparison

Compare two tracks:

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    <div>
        <h3>Summer Route</h3>
        {gpstrack id="42" height="300" layout="compact"}
    </div>
    <div>
        <h3>Winter Route</h3>
        {gpstrack id="43" height="300" layout="compact"}
    </div>
</div>
```

---

## Troubleshooting

### Track Not Displaying

1. **Check Track ID:** Verify the track exists and is published
2. **Check Access Level:** Ensure the track's access level matches the user's
3. **Plugin Enabled:** Confirm the plugin is enabled in Extensions → Plugins
4. **Cache:** Clear Joomla cache and browser cache

### "Track not found" Error

- The track ID doesn't exist in the database
- The track is unpublished (state ≠ 1)
- The track is in trash

### Shortcode Shows as Text

- Plugin is not enabled
- Plugin ordering: Ensure GPS Tools runs before other content plugins
- Syntax error in shortcode (check for typos)

### JavaScript Errors

- Check browser console for errors
- Ensure React assets are loading (check Network tab)
- Verify `dev_mode` setting in component configuration

### Charts Not Displaying

Charts require track point data with elevation/speed/heart rate values. If the GPX file doesn't contain this data, charts will show empty.

---

## Plugin Parameters

Configure defaults in **Extensions → Plugins → GPS Tools - Content**:

| Parameter | Description | Default |
|-----------|-------------|---------|
| Default Map Height | Default height for embedded maps | 320px |

---

## Technical Details

### Requirements

- Joomla 5.0+ or Joomla 6.0+
- PHP 8.1+
- GPS Tools Component installed and configured

### How It Works

1. Plugin subscribes to `onContentPrepare` event
2. Parses article content for `{gpstrack}` and `{gpstracks}` shortcodes
3. Fetches track data from the database
4. Renders React hydration containers with SSR fallback
5. React app hydrates containers on page load

### Performance

- **Lazy Loading:** Charts and galleries load on-demand
- **SEO Fallback:** Server-rendered HTML for search engines
- **Skeleton Loaders:** Smooth loading experience
- **Caching:** Track data respects Joomla's caching system

---

## Related Documentation

- [Track Management](track-management) - Creating tracks
- [Maps & Charts](maps-and-charts) - Display options
- [Modules](modules) - Module alternatives
- [Configuration](configuration) - Global settings
