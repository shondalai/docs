---
id: gps-tools-quick-stater-guide
title: Quick Start Guide
sidebar_label: Quick Start Guide
sidebar_position: 2
---

# GPS Tools Quick Start Guide

Get up and running with GPS Tools in just a few minutes! This guide walks you through the essential setup steps to start managing and displaying GPS tracks on your Joomla 6 website.

## What You'll Get

GPS Tools is a comprehensive GPS track management system for Joomla that allows you to:
- 📤 Upload and manage GPX files
- 🗺️ Display interactive maps with your GPS tracks
- 📊 Visualize elevation, speed, and heart rate data
- 📍 Add and manage waypoints
- 🏷️ Organize tracks with categories
- 💬 Enable user comments on tracks
- 🔗 Share tracks with embedded links

## Installation

### Step 1: Download the Package

1. Download GPS Tools from [Shondalai.com](https://shondalai.com/products/gps-tools/)
2. The download includes:
   - GPS Tools component (main application)
   - Content plugin (for embedding tracks in articles)
   - Additional modules and plugins

### Step 2: Install the Extension

1. Log in to your Joomla administrator panel
2. Navigate to **System** → **Extensions** → **Install**
3. Click **Browse for file** and select the downloaded GPS Tools package
4. Click **Upload & Install**
5. Wait for the success message

:::tip
For detailed installation instructions, see the [official Joomla documentation](https://docs.joomla.org/Installing_an_extension).
:::

## Initial Configuration

### Step 3: Configure Component Options

1. Go to **Components** → **GPS Tools**
2. Click the **Options** button in the toolbar (top right)
3. Review and configure the following tabs:
   - **Component**: General display settings
   - **Permissions**: User access controls
   - **Google Maps**: API configuration

:::info
All configuration options include helpful descriptions. Hover over the labels for detailed explanations.
:::

### Step 4: Set Up Google Maps API

Google Maps API is **required** for:
- Displaying interactive maps
- Fetching elevation data (if not in your GPX files)
- Geocoding and place services

#### Get Your API Key

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Go to **APIs & Services** → **Library**
4. Enable the following APIs:
   - ✅ **Maps JavaScript API** (required for map display)
   - ✅ **Elevation API** (for elevation data)
   - ✅ **Directions API** (for route calculations)
   - ✅ **Places API** (for location search)

5. Go to **APIs & Services** → **Credentials**
6. Click **Create Credentials** → **API Key**
7. Copy your API key

:::warning Security Tip
Restrict your API key by domain and API to prevent unauthorized use and unexpected charges.
:::

#### Configure API Key in GPS Tools

1. In Joomla admin, go to **Components** → **GPS Tools** → **Options**
2. Click the **Google Maps** tab
3. Paste your API key in the **Google Maps API Key** field
4. Click **Save & Close**

:::info
If your GPX files already contain elevation data, the Elevation API won't be called, saving API quota.
:::

### Step 5: Configure Permissions

Set up who can create, edit, and manage GPS tracks:

1. Go to **Components** → **GPS Tools** → **Options**
2. Click the **Permissions** tab
3. Configure permissions for each user group:
   - **Configure**: Can change component settings
   - **Access Administration**: Can access backend
   - **Create**: Can create new tracks
   - **Delete**: Can delete tracks
   - **Edit**: Can edit own tracks
   - **Edit State**: Can publish/unpublish tracks
   - **Edit Own**: Can edit own tracks

:::tip Recommended Setup
- Allow **Registered** users to **Create** and **Edit Own** tracks
- Allow **Authors** to **Edit** and **Edit State**
- Allow **Editors** and above to **Delete**
:::

4. Click **Save & Close**

### Step 6: Create Categories

Organize your GPS tracks with categories:

1. Go to **Components** → **GPS Tools** → **Categories**
2. Click **New** in the toolbar
3. Enter category information:
   - **Title**: Category name (e.g., "Hiking Trails", "Bike Routes")
   - **Alias**: Auto-generated URL-friendly name
   - **Description**: Optional category description
   - **Parent**: Select parent category for nested structure
4. Click **Save & Close**
5. Repeat for additional categories

**Example Categories:**
- 🥾 Hiking Trails
- 🚴 Cycling Routes
- 🏃 Running Tracks
- 🚗 Road Trips
- ⛰️ Mountain Expeditions

### Step 7: Create Menu Items

Make GPS Tools accessible on your website frontend:

1. Go to **Menus** → Select your menu (e.g., **Main Menu**)
2. Click **New** to create a menu item
3. Click **Select** next to Menu Item Type
4. Choose **GPS Tools** from the list
5. Select a view type:
   - **Track List**: Display all tracks with filtering options
   - **Track Details**: Link to a specific track
   - **Submit Track**: Form for users to upload tracks
   - **My Tracks**: User's personal track list

6. Configure menu item settings:
   - **Menu Title**: What appears in the menu
   - **Alias**: URL-friendly version
   - **Parent Item**: For dropdown menus
7. Click **Save & Close**

:::tip Menu Structure
Create a simple structure like:
- GPS Tracks (Track List)
  - Submit Track
  - My Tracks
:::

For more details, see [Joomla's menu documentation](https://docs.joomla.org/Adding_a_new_menu_item).

### Step 8: Enable the Content Plugin (Optional)

To embed tracks in articles:

1. Go to **System** → **Plugins**
2. Search for "GPS Tools" or filter by **content** type
3. Enable **Content - GPS Tools**
4. Click on the plugin name to configure default display settings
5. Click **Save & Close**

See [Using GPS Tools Content Plugin](./using-gps-tools-content-plugin-to-display-track-in-articles.md) for usage instructions.

## Adding Your First Track

You're now ready to add GPS tracks! You have two options:

### Option 1: Upload GPX Files

1. Go to your frontend menu item (e.g., "Submit Track")
2. Fill in track details:
   - Title and description
   - Select category
   - Upload GPX file
3. Click **Save**

### Option 2: Draw on Map

1. Go to the track submission form
2. Use the interactive map to:
   - Click points to create a route
   - Add waypoints
   - Let Google calculate the route between points
3. Fill in track details
4. Click **Save**

## Next Steps

Now that GPS Tools is set up, explore these features:

- 📝 [Learn about custom module positions](./custom-module-positions-in-gps-tools.md)
- 🔌 [Embed tracks in articles](./using-gps-tools-content-plugin-to-display-track-in-articles.md)
- 🎨 Customize the display options in component settings
- 👥 Set up user permissions for community contributions
- 📱 Test responsive display on mobile devices

## Troubleshooting

### Maps not displaying?
- Verify your Google Maps API key is correct
- Check that Maps JavaScript API is enabled
- Ensure your domain is whitelisted (if using API restrictions)

### Can't upload GPX files?
- Check PHP file upload limits in your hosting settings
- Verify file extension is `.gpx`
- Ensure user has **Create** permission

### Elevation data missing?
- Enable Google Maps Elevation API
- Check your API key has quota remaining
- Verify GPX file doesn't already contain elevation data

## Support & Resources

- 📖 [About GPS Tools](https://shondalai.com/products/gps-tools/)
- 💬 [Community Forum](https://shondalai.com/forums/)
- 🐛 [Report Issues](https://shondalai.com/get-support/)

---

**Congratulations!** 🎉 GPS Tools is now ready to use. Start uploading your GPS tracks and sharing your adventures!
