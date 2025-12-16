---
id: installation
title: Installation Guide
sidebar_label: Installation
sidebar_position: 1
---

# GPS Tools Installation Guide

This guide covers installation, configuration, and initial setup of GPS Tools for Joomla.

## System Requirements

### Server Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| PHP | 8.1 | 8.2+ |
| MySQL | 8.0 | 8.0+ |
| MariaDB | 10.4 | 10.6+ |
| Joomla | 5.0 | 6.0+ |
| Memory | 128MB | 256MB+ |
| Disk Space | 50MB | 100MB+ |

### Required PHP Extensions

The following PHP extensions are required:

| Extension | Purpose |
|-----------|---------|
| `json` | JSON parsing |
| `xml` | GPX/KML file parsing |
| `simplexml` | XML handling |
| `mbstring` | Character encoding |
| `gd` or `imagick` | Image processing (optional, for thumbnails) |
| `zip` | File compression |

### Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## Installation

### Method 1: Install from Package (Recommended)

1. **Download** the latest `pkg_gpstools_x.x.x.zip` package from [shondalai.com](https://shondalai.com)

2. **Install via Joomla Administrator:**
   - Go to **System → Install → Extensions**
   - Click **Upload Package File** tab
   - Select the downloaded ZIP file
   - Click **Upload & Install**

3. **What Gets Installed:**
   - `com_gpstools` - Main GPS Tools component
   - `mod_gpstools_map` - Interactive map module
   - `mod_gpstools_tracks` - Tracks listing module
   - `plg_finder_gpstools` - Smart Search plugin
   - `plg_content_gpstools` - Content shortcode plugin

### Method 2: Install Individual Extensions

If you prefer to install only specific parts:

1. **Install the component first:** Upload `com_gpstools.zip`
2. **Then add modules and plugins** as needed

:::info
The component is required. Modules and plugins are optional but enhance functionality.
:::

### Method 3: Discover Installation

For manual file uploads:

1. **Upload extracted files** to these locations:
   ```
   /administrator/components/com_gpstools/
   /components/com_gpstools/
   /media/com_gpstools/
   /modules/mod_gpstools_map/
   /modules/mod_gpstools_tracks/
   /plugins/finder/gpstools/
   /plugins/content/gpstools/
   ```

2. Go to **System → Discover**
3. Click **Discover** button
4. Select all GPS Tools extensions
5. Click **Install**

## Post-Installation Setup

### Step 1: Enable Plugins

After installation, enable the plugins for full functionality:

1. Go to **System → Plugins**
2. Search for "gpstools"
3. Enable each plugin:

| Plugin | Purpose |
|--------|---------|
| **Content - GPS Tools** | Enables shortcodes in articles |
| **Finder - GPS Tools** | Enables Smart Search for tracks |

### Step 2: Configure Component Settings

1. Go to **Components → GPS Tools**
2. Click **Options** button in the toolbar
3. Configure essential settings:

**Map Settings:**
- **Default Map Provider** - Choose OpenStreetMap (free) or Google Maps
- **Google Maps API Key** - Required if using Google Maps
- **Default Zoom Level** - Initial zoom (1-20)

**Display Settings:**
- **Unit System** - Metric (km, m) or Imperial (mi, ft)
- **Show Charts** - Enable/disable chart display
- **Show Comments** - Enable/disable commenting

**Upload Settings:**
- **Allowed Extensions** - gpx, kml, tcx
- **Max File Size** - Maximum upload size in MB

### Step 3: Set Permissions

Configure who can do what:

1. Go to **Components → GPS Tools → Options → Permissions**
2. Configure for each user group:

| Permission | Description |
|------------|-------------|
| Configure | Access component settings |
| Access Admin | Access backend interface |
| Create | Upload new tracks |
| Delete | Delete tracks |
| Edit | Edit any track |
| Edit Own | Edit own tracks only |
| Edit State | Publish/unpublish tracks |

**Recommended Settings:**

| User Group | Recommended Permissions |
|------------|------------------------|
| Public | View only |
| Registered | Create, Edit Own, Comment |
| Author | Create, Edit Own, Comment, Rate |
| Editor | Create, Edit, Comment, Rate |
| Publisher | Create, Edit, Edit State |
| Administrator | All permissions |

### Step 4: Create Categories

Organize your tracks with categories:

1. Go to **Components → GPS Tools → Categories**
2. Click **New** to create categories
3. Suggested category structure:
   - Hiking Trails
   - Cycling Routes
   - Running Paths
   - Mountain Biking
   - Road Trips

### Step 5: Create Menu Items

Display GPS Tools on your site:

1. Go to **Menus → [Your Menu] → Add New Menu Item**
2. Click **Select** button for Menu Item Type
3. Choose from GPS Tools menu types:

| Menu Type | Description |
|-----------|-------------|
| **Tracks List** | Display all published tracks |
| **Single Track** | Display a specific track |
| **Category Tracks** | Display tracks in a category |

## Google Maps Setup

If you want to use Google Maps instead of OpenStreetMap:

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing (required for Maps API)

### 2. Enable Maps APIs

Enable these APIs for your project:
- Maps JavaScript API
- Geocoding API (optional)

### 3. Create API Key

1. Go to **Credentials → Create Credentials → API Key**
2. Copy the generated API key
3. **Recommended:** Restrict the key to your domain for security

### 4. Configure in GPS Tools

1. Go to **Components → GPS Tools → Options**
2. Paste your API key in **Google Maps API Key** field
3. Set **Default Map Provider** to "Google Maps"
4. Save settings

## Verifying Installation

After installation, verify everything is working:

1. **Check Component Access:**
   - Go to **Components → GPS Tools**
   - You should see the dashboard

2. **Check Plugins:**
   - Go to **System → Plugins**
   - Search "gpstools" - plugins should be enabled

3. **Test Track Upload:**
   - Go to **Components → GPS Tools → Tracks → New**
   - Upload a sample GPX file
   - Verify map displays correctly

4. **Test Frontend:**
   - Create a menu item for Tracks List
   - View on frontend to confirm display

## Updating GPS Tools

### Automatic Updates

GPS Tools supports Joomla's update system:

1. Go to **System → Update → Extensions**
2. If an update is available, it will appear in the list
3. Select and click **Update**

### Manual Update

1. Download the latest package
2. Install over the existing installation
3. Database migrations run automatically

:::tip
Always backup your site before updating any extension.
:::

## Uninstallation

### Remove Complete Package

1. Go to **System → Manage → Extensions**
2. Search for "GPS Tools Package"
3. Select and click **Uninstall**
4. This removes all GPS Tools extensions

### Remove Individual Extensions

To keep the component but remove specific modules/plugins:

1. Go to **System → Manage → Extensions**
2. Find the specific module or plugin
3. Select and uninstall individually

:::warning
Uninstalling the component will remove all track data. Export or backup your data first.
:::

## Next Steps

After installation, continue with:

- **[Quick Start Guide](quick-start-guide)** - Upload your first track
- **[Configuration](configuration)** - Detailed settings reference
- **[Track Management](track-management)** - Managing tracks and categories
