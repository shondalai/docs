---
id: creating-map-location-question
title: Map Location Questions
sidebar_label: Map Location
sidebar_position: 20
---

The Map Location question type allows you to capture geographic coordinates (latitude and longitude) from survey respondents. Users can either allow automatic location detection or manually search and select a location on an interactive map.

## Features

- **Automatic location detection** — Use browser geolocation API
- **Search functionality** — Find locations by address or place name
- **Interactive map** — Click to select precise location
- **Draggable marker** — Fine-tune the selected position
- **Coordinate capture** — Store latitude and longitude
- **Clustered reports** — View response locations on aggregate map

---

## Prerequisites

Before using Map Location questions, you need to set up Google Maps API credentials.

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for the project (required for Maps APIs)

### Step 2: Enable Required APIs

Navigate to **APIs & Services → Library** and enable:

| API | Purpose |
|-----|---------|
| **Maps JavaScript API** | Display interactive map |
| **Geocoding API** | Convert addresses to coordinates |
| **Places API** | Location search and autocomplete |

### Step 3: Create API Key

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → API Key**
3. Copy your new API key

### Step 4: Secure Your API Key (Recommended)

1. Click on your API key to edit it
2. Under **Application restrictions**, select **HTTP referrers**
3. Add your website domains:
   ```
   https://yoursite.com/*
   https://www.yoursite.com/*
   ```
4. Under **API restrictions**, select **Restrict key**
5. Select only the three APIs you enabled above
6. Click **Save**

:::warning Security Notice
Always restrict your API key to prevent unauthorized usage and unexpected charges. Unrestricted keys can be abused if exposed.
:::

### Step 5: Configure Community Surveys

1. Go to **Components → Community Surveys**
2. Click **Options** in the toolbar
3. Navigate to the **Shared** tab
4. Enter your Google Maps API Key
5. Click **Save & Close**

---

## Adding a Location Question

### Basic Setup

1. Edit your survey questions
2. Drag **Location** from the question toolbar
3. Configure the question:

| Field | Description |
|-------|-------------|
| **Question Title** | The question text (e.g., "Where are you located?") |
| **Description** | Help text for respondents |
| **Mandatory** | Require a location to continue |

### Question Options

| Option | Description | Default |
|--------|-------------|---------|
| **Default Zoom** | Initial map zoom level (1-20) | 10 |
| **Default Center** | Starting map position | Auto-detect |
| **Allow Search** | Enable location search box | Yes |
| **Allow Geolocation** | Enable "Use My Location" button | Yes |

---

## User Experience

When respondents encounter a Location question, they can:

### Option 1: Automatic Detection

1. Click **"Use My Location"** button
2. Browser prompts for permission
3. Current location is marked on map
4. User can adjust marker if needed

### Option 2: Search

1. Type an address or place name in the search box
2. Select from autocomplete suggestions
3. Map centers on selected location
4. Marker is placed at the location

### Option 3: Manual Selection

1. Navigate the map using pan and zoom
2. Click on the desired location
3. Marker is placed at click position
4. Drag marker to fine-tune

---

## Response Data

Location responses capture:

| Field | Description | Example |
|-------|-------------|---------|
| **Latitude** | Decimal degrees | 40.7128 |
| **Longitude** | Decimal degrees | -74.0060 |
| **Address** | Reverse geocoded address (if available) | "New York, NY, USA" |

### Viewing Individual Responses

Location responses display:
- Interactive map showing the marked location
- Coordinates (lat/lng)
- Formatted address

---

## Consolidated Reports

### Clustered Map View

The consolidated report shows all response locations on a single map:

- **Clustering** — Nearby responses grouped into clusters
- **Cluster counts** — Number of responses in each cluster
- **Click to expand** — Zoom into clusters to see individual points
- **Up to 1,000 points** — For performance, limited to recent responses

### Geographic Distribution

The report also shows:
- Country breakdown
- City distribution
- Heat map visualization (if enabled)

---

## Use Cases

### Event Planning
> "Where would you prefer the next conference to be held?"

Respondents select cities, and the aggregate map shows geographic preferences.

### Service Area Analysis
> "Where is your business located?"

Collect customer locations to plan service coverage or delivery zones.

### Research Studies
> "Mark your home location on the map."

Geographic research with privacy-conscious coordinate collection.

### Store Locator Feedback
> "Which of our locations do you visit most often?"

Understand customer travel patterns and store preferences.

---

## Privacy Considerations

### Respondent Privacy

- **Anonymous surveys** — Location data is collected but not tied to identity
- **Precision control** — Consider whether exact coordinates are needed
- **Clear disclosure** — Explain why location is being collected

### Data Storage

Location data is stored as:
- Latitude/longitude coordinates
- Optional reverse-geocoded address
- Standard response metadata

### GDPR Compliance

If collecting data from EU residents:
- Include location collection in your privacy notice
- Ensure proper consent mechanisms
- Allow data deletion upon request

---

## Troubleshooting

### Map Not Displaying

1. **Check API Key** — Verify it's entered in component options
2. **Check Console** — Look for JavaScript errors in browser console
3. **API Restrictions** — Ensure your domain is allowed
4. **Billing Status** — Verify Google Cloud billing is active

### "Google Maps API error"

Common error messages:

| Error | Solution |
|-------|----------|
| `ApiNotActivatedMapError` | Enable Maps JavaScript API |
| `InvalidKeyMapError` | Check API key is correct |
| `RefererNotAllowedMapError` | Add your domain to allowed referrers |
| `OverQuotaMapError` | Check billing and quota limits |

### Geolocation Not Working

- **HTTPS required** — Browser geolocation only works on secure sites
- **Permission denied** — User must allow location access
- **Browser support** — Ensure browser supports Geolocation API

### Search Not Working

- Enable **Places API** in Google Cloud Console
- Verify API key has access to Places API
- Check for JavaScript errors

---

## API Usage & Costs

Google Maps Platform uses pay-as-you-go pricing:

| API | Free Tier | Cost After |
|-----|-----------|------------|
| Maps JavaScript | 28,000 loads/month | $7 per 1,000 |
| Geocoding | 40,000 requests/month | $5 per 1,000 |
| Places | 10,000 requests/month | $17 per 1,000 |

:::tip Cost Management
- Check Google pricing page for latest pricing details
- Set budget alerts in Google Cloud Console
- Use API restrictions to prevent abuse
- Monitor usage regularly
:::

---

## Related Documentation

- [User Guide](./community-surveys-end-user-documentation)
- [Question Types](./community-surveys-end-user-documentation#question-types)
- [Installation Guide](./installing-and-configuring-community-surveys)
