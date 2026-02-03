---
id: api-reference
title: REST API Reference
sidebar_label: API Reference
description: Complete REST API documentation for GPS Tools
sidebar_position: 8
---

# GPS Tools REST API Reference

GPS Tools provides a comprehensive JSON REST API for programmatic access to tracks, comments, ratings, and more.

## Overview

The API uses standard Joomla controller-based routing with JSON responses. All endpoints return consistent response structures.

### Base URL

```
https://your-site.com/index.php?option=com_gpstools&task=api.{endpoint}&format=json
```

### Authentication

The API uses Joomla session authentication:

- **Public endpoints**: Available to all visitors (respecting access levels)
- **Protected endpoints**: Require logged-in user session
- **CSRF Token**: Required for write operations (POST, PUT, DELETE)

### Response Format

**Success Response:**
```json
{
    "success": true,
    "data": { ... },
    "message": "Optional success message",
    "meta": {
        "total": 100,
        "limit": 20,
        "start": 0,
        "pages": 5
    }
}
```

**Error Response:**
```json
{
    "success": false,
    "error": "Error message",
    "code": 404
}
```

---

## Tracks Endpoints

### List Tracks

Get a paginated list of published tracks.

```http
GET /index.php?option=com_gpstools&task=api.tracks&format=json
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | int | 20 | Results per page (max: 100) |
| `start` | int | 0 | Offset for pagination |
| `search` | string | - | Search in title/description |
| `catid` | int | - | Filter by category ID |
| `activity_type` | string | - | Filter by activity type |
| `difficulty` | string | - | Filter by difficulty level |
| `featured` | int | -1 | Filter: 1=featured, 0=not featured |
| `state` | int | 1 | Publishing state: 1=published, 0=unpublished |
| `order_by` | string | created | Sort field |
| `order_dir` | string | DESC | Sort direction (ASC/DESC) |

**Valid `order_by` Values:**
- `created` - Creation date
- `modified` - Last modified date
- `title` - Alphabetically by title
- `hits` - View count
- `total_distance` - Track distance
- `elevation_gain` - Elevation gain

**Activity Types:**
`hiking`, `running`, `cycling`, `mountain_biking`, `trail_running`, `skiing`, `swimming`, `kayaking`, `driving`, `walking`, `mountaineering`, `other`

**Difficulty Levels:**
`easy`, `moderate`, `difficult`, `expert`

**Example Request:**
```bash
curl "https://example.com/index.php?option=com_gpstools&task=api.tracks&format=json&limit=10&activity_type=hiking"
```

**Example Response:**
```json
{
    "success": true,
    "data": [
        {
            "id": 42,
            "title": "Mountain Ridge Trail",
            "alias": "mountain-ridge-trail",
            "description": "Beautiful alpine trail...",
            "catid": 5,
            "category_title": "Hiking Trails",
            "activity_type": "hiking",
            "difficulty": "moderate",
            "total_distance": 15234.5,
            "elevation_gain": 856,
            "elevation_loss": 834,
            "max_elevation": 2156,
            "min_elevation": 1245,
            "total_time": 18000,
            "avg_speed": 3.05,
            "featured": 1,
            "hits": 342,
            "likes": 28,
            "dislikes": 2,
            "created": "2025-01-15 10:30:00",
            "author_name": "John Hiker",
            "url": "/tracks/hiking-trails/mountain-ridge-trail"
        }
    ],
    "meta": {
        "total": 47,
        "limit": 10,
        "start": 0,
        "pages": 5
    }
}
```

---

### Get Single Track

Get full details for a single track.

```http
GET /index.php?option=com_gpstools&task=api.track&id={id}&format=json
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | int | Yes | Track ID |

**Response includes all track fields plus:**
- Full description (HTML)
- Author details
- Category information
- Statistics calculated from track points
- URLs for navigation

---

### Get Track Points

Get GPS coordinates for map display.

```http
GET /index.php?option=com_gpstools&task=api.points&id={id}&format=json
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | int | Required | Track ID |
| `simplify` | int | 1 | Simplify track (0/1) |
| `max_points` | int | 5000 | Max points when simplifying |

**Example Response:**
```json
{
    "success": true,
    "data": [
        {
            "latitude": 46.5234,
            "longitude": 11.2345,
            "elevation": 1245,
            "timestamp": "2025-01-15T08:00:00Z",
            "speed": 3.2,
            "heart_rate": 125,
            "cadence": 85
        }
    ],
    "meta": {
        "count": 500,
        "simplified": true
    }
}
```

---

### Get Waypoints

Get waypoints associated with a track.

```http
GET /index.php?option=com_gpstools&task=api.waypoints&id={id}&format=json
```

**Example Response:**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Mountain Summit",
            "description": "The highest point",
            "latitude": 46.5400,
            "longitude": 11.2400,
            "elevation": 2156,
            "waypoint_type": "summit",
            "icon": "mountain",
            "distance": 7500
        }
    ],
    "meta": {
        "count": 5
    }
}
```

---

### Get Chart Data

Get data formatted for chart display.

```http
GET /index.php?option=com_gpstools&task=api.chartData&id={id}&format=json
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | int | Required | Track ID |
| `type` | string | elevation | Chart type: elevation, speed, heartrate, cadence |
| `points` | int | 500 | Target number of data points |

---

### Get Featured Tracks

Get featured tracks for homepage display.

```http
GET /index.php?option=com_gpstools&task=api.featured&format=json
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | int | 5 | Number of tracks (max: 20) |

---

### Get Recent Tracks

Get most recently published tracks.

```http
GET /index.php?option=com_gpstools&task=api.recent&format=json
```

---

### Get Popular Tracks

Get most viewed tracks.

```http
GET /index.php?option=com_gpstools&task=api.popular&format=json
```

---

### Search Tracks

Search tracks by title and description.

```http
GET /index.php?option=com_gpstools&task=api.search&format=json
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `q` | string | Required | Search query |
| `limit` | int | 10 | Number of results (max: 50) |

---

### Create Track (Protected)

Create a new track. Requires authentication and CSRF token.

```http
POST /index.php?option=com_gpstools&task=api.createTrack&format=json
```

**Headers:**
```
Content-Type: multipart/form-data
X-CSRF-Token: {csrf_token}
```

**Form Data:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | File | Yes* | GPX/KML/TCX file |
| `title` | string | Yes | Track title |
| `catid` | int | Yes | Category ID |
| `description` | string | No | Track description |
| `activity_type` | string | No | Activity type |
| `difficulty` | string | No | Difficulty level |
| `state` | int | No | Publishing state (default: 1) |
| `featured` | int | No | Featured flag (0/1) |
| `access` | int | No | Access level (default: 1) |

*Or provide `points` array for drawn tracks.

---

### Update Track (Protected)

Update an existing track.

```http
PUT /index.php?option=com_gpstools&task=api.updateTrack&id={id}&format=json
```

**Headers:**
```
Content-Type: application/json
X-CSRF-Token: {csrf_token}
```

---

### Delete Track (Protected)

Delete a track.

```http
DELETE /index.php?option=com_gpstools&task=api.deleteTrack&id={id}&format=json
```

---

## Comments Endpoints

### Get Track Comments

Get comments for a track.

```http
GET /index.php?option=com_gpstools&task=api.comments&id={id}&format=json
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | int | Required | Track ID |
| `limit` | int | 20 | Results per page |
| `start` | int | 0 | Offset |
| `sort` | string | newest | Sort: newest, oldest, popular |

---

### Post Comment (Protected)

Add a comment to a track.

```http
POST /index.php?option=com_gpstools&task=api.addComment&format=json
```

**Body:**
```json
{
    "track_id": 42,
    "content": "Great trail! The views were amazing.",
    "parent_id": 0
}
```

---

## Ratings Endpoints

### Get Track Rating

Get current user's rating for a track.

```http
GET /index.php?option=com_gpstools&task=api.rating&id={id}&format=json
```

---

### Rate Track (Protected)

Like or dislike a track.

```http
POST /index.php?option=com_gpstools&task=api.rateTrack&format=json
```

**Body:**
```json
{
    "track_id": 42,
    "rating": "like"
}
```

**Rating Values:** `like`, `dislike`, `remove`

---

## Categories Endpoints

### List Categories

Get all track categories.

```http
GET /index.php?option=com_gpstools&task=api.categories&format=json
```

**Response:**
```json
{
    "success": true,
    "data": [
        {
            "id": 5,
            "title": "Hiking Trails",
            "alias": "hiking-trails",
            "parent_id": 1,
            "level": 1,
            "track_count": 28
        }
    ]
}
```

---

## Images Endpoints

### Get Track Images

Get gallery images for a track.

```http
GET /index.php?option=com_gpstools&task=api.images&id={id}&format=json
```

---

### Upload Image (Protected)

Upload an image to a track's gallery.

```http
POST /index.php?option=com_gpstools&task=api.uploadImage&format=json
```

**Headers:**
```
Content-Type: multipart/form-data
X-CSRF-Token: {csrf_token}
```

**Form Data:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | int | Yes | Track ID |
| `file` | File | Yes | Image file (JPEG, PNG, WebP) |
| `title` | string | No | Image title |
| `description` | string | No | Image description |

---

## Lookup Endpoints

### Get Lookup Data

Get lookup values for forms.

```http
GET /index.php?option=com_gpstools&task=api.lookups&format=json
```

**Response:**
```json
{
    "success": true,
    "data": {
        "activity_types": [
            {"value": "hiking", "label": "Hiking"},
            {"value": "cycling", "label": "Cycling"}
        ],
        "difficulties": [
            {"value": "easy", "label": "Easy"},
            {"value": "moderate", "label": "Moderate"}
        ],
        "access_levels": [
            {"value": 1, "label": "Public"},
            {"value": 2, "label": "Registered"}
        ],
        "waypoint_types": [...]
    }
}
```

---

## Admin Endpoints

These endpoints require admin permissions.

### Dashboard Statistics

Get admin dashboard statistics.

```http
GET /index.php?option=com_gpstools&task=api.stats&format=json
```

---

### Manage Comments (Admin)

Get all comments for moderation.

```http
GET /index.php?option=com_gpstools&task=api.adminComments&format=json
```

---

### Manage Waypoint Types (Admin)

CRUD operations for waypoint types.

```http
GET/POST/PUT/DELETE /index.php?option=com_gpstools&task=api.waypointTypes&format=json
```

---

### Manage Email Templates (Admin)

CRUD operations for email notification templates.

```http
GET/POST/PUT/DELETE /index.php?option=com_gpstools&task=api.emailTemplates&format=json
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Login required |
| 403 | Forbidden - Permission denied |
| 404 | Not Found - Resource doesn't exist |
| 429 | Too Many Requests - Rate limited |
| 500 | Server Error - Internal error |

---

## Rate Limiting

The API implements soft rate limiting:

- **Anonymous users**: 60 requests/minute
- **Authenticated users**: 120 requests/minute
- **Write operations**: 30 requests/minute

---

## CORS

CORS is handled by Joomla's built-in CORS configuration. For cross-origin access, configure in:
- **System → Global Configuration → Server → CORS**

---

## Related Documentation

- **[Plugin Events](plugin-events)** - Extend API functionality
- **[Configuration](configuration)** - API settings
- **[Troubleshooting](troubleshooting)** - Common issues
