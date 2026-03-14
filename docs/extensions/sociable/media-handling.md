---
id: media-handling
title: Media Handling & Protection
sidebar_label: Media Handling
---

# Media Handling & Protection

Sociable provides a comprehensive media management system for handling user-uploaded images and videos. This guide covers upload settings, validation, compression, storage options, and the optional protected media access feature.

## Architecture Overview

Media in Sociable follows a single source of truth architecture:

1. **Database Table**: All media metadata is stored in `#__sociable_media` table
2. **Storage Service**: Files are stored via the configurable StorageService (local or S3)
3. **Media Service**: Handles uploads, validation, URL generation, and retrieval
4. **Media Controller**: Serves protected files with signature verification (when enabled)

```
┌─────────────────┐     ┌───────────────────┐     ┌─────────────────┐
│   React SPA     │────▶│   API Endpoint    │────▶│  MediaService   │
│   (Frontend)    │     │  (ActivityCtrl)   │     │                 │
└─────────────────┘     └───────────────────┘     └────────┬────────┘
                                                           │
                        ┌──────────────────────────────────┼──────────────────┐
                        │                                  │                  │
                        ▼                                  ▼                  ▼
               ┌─────────────────┐              ┌─────────────────┐  ┌─────────────────┐
               │  StorageService │              │   #__sociable_  │  │    Settings     │
               │  (Local / S3)   │              │      media      │  │    Service      │
               └─────────────────┘              └─────────────────┘  └─────────────────┘
```

## Media Upload Settings

Configure media uploads in **Components → Sociable → Settings → Activity**.

### Image Settings

| Setting | Default | Description |
|---------|---------|-------------|
| Allow Images | Yes | Enable/disable image uploads |
| Max Image Size | 10 MB | Maximum file size per image |
| Allowed Image Types | JPEG, PNG, GIF, WebP | Permitted MIME types |
| Max Image Width | 1920 px | Auto-resize images wider than this |
| Max Image Height | 1920 px | Auto-resize images taller than this |
| Compress Images | Yes | Enable automatic compression |
| Image Quality | 85% | JPEG/WebP compression quality (1-100) |

### Video Settings

| Setting | Default | Description |
|---------|---------|-------------|
| Allow Videos | Yes | Enable/disable video uploads |
| Max Video Size | 50 MB | Maximum file size per video |
| Allowed Video Types | MP4, WebM, QuickTime | Permitted MIME types |

### General Settings

| Setting | Default | Description |
|---------|---------|-------------|
| Max Media Per Post | 10 | Maximum number of files per post |

## Storage Configuration

Configure storage in **Components → Sociable → Settings → Storage**.

### Local Storage

Files are stored on your web server within the Joomla installation.

```
media/com_sociable/uploads/
└── posts/
    └── {user_id}/
        └── {year}/
            └── {month}/
                └── {unique_filename}.{ext}
```

**Settings:**
- **Local Upload Path**: Relative path from Joomla root (default: `media/com_sociable/uploads`)

### Amazon S3 Storage

Store files in an Amazon S3 bucket for scalability and CDN integration.

**Settings:**
- **S3 Bucket Name**: Your S3 bucket identifier
- **S3 Region**: AWS region (e.g., `us-east-1`, `eu-west-1`)
- **AWS Access Key ID**: Your IAM access key
- **AWS Secret Access Key**: Your IAM secret key
- **Use AWS CLI**: Use installed AWS CLI instead of API keys

For S3 storage, files are stored with the path:
```
uploads/posts/{user_id}/{year}/{month}/{unique_filename}.{ext}
```

## Validation Process

When users upload media, the system performs multi-stage validation:

### Stage 1: Global Checks
- Is media upload enabled globally?
- Is the specific media type (images/videos) allowed?

### Stage 2: Per-File Validation
For each file:
1. **PHP Upload Error Check**: Validate no PHP-level upload errors occurred
2. **MIME Type Check**: Verify file type is in the allowed list
3. **File Size Check**: Ensure file doesn't exceed size limits
4. **Media Type Authorization**: Confirm the specific type (image/video) is permitted

### Stage 3: Limit Enforcement
- Check if total files exceed "Max Media Per Post" limit
- If exceeded, only first N files are processed; warning returned

### Error Handling

The system returns detailed, per-file error messages:

```json
{
  "mediaIds": [1, 2, 3],
  "errors": [
    "image4.jpg: File exceeds the maximum allowed size (15.2 MB, max: 10 MB)",
    "video.avi: File type not allowed"
  ],
  "warnings": [
    "12 files submitted, only first 10 were uploaded (max media per post limit)"
  ]
}
```

## Image Processing

When enabled, images are automatically processed before storage:

### Auto-Resize
Images exceeding the configured maximum dimensions are resized while preserving aspect ratio:
- Uses Joomla's `Image` class for processing
- Maintains original aspect ratio
- GIF files are skipped to preserve animation

### Compression
- JPEG files: Compressed at configured quality (1-100%)
- PNG files: Optimized PNG encoding
- WebP files: Compressed at configured quality
- GIF files: Skipped (preserves animation)

### Processing Flow
```
Original Upload → Dimension Check → Resize (if needed) → Compress → Store
       ↓                                                           ↓
 [Temp File]                                               [Final Storage]
       ↓                                                           ↓
   (Cleanup)                                              [DB Metadata]
```

## Protected Media Access

By default, uploaded media is publicly accessible via direct URLs. The **Protected Media Access** feature adds signature-based access control, preventing unauthorized direct URL access.

### How It Works

When protection is enabled:

1. **URL Generation**: Instead of direct file URLs, the system generates signed URLs:
   ```
   # Without protection (direct access):
   https://example.com/media/com_sociable/uploads/posts/123/2024/03/image.jpg
   
   # With protection (signed URL):
   https://example.com/index.php?option=com_sociable&task=media.serve
     &path=posts/123/2024/03/image.jpg
     &expires=1710456000
     &signature=a3f2b9c7e1d4...
   ```

2. **Signature Verification**: The MediaController validates:
   - Required parameters are present (`path`, `signature`, `expires`)
   - URL hasn't expired (timestamp check)
   - Signature matches (HMAC-SHA256 verification)

3. **File Serving**: If valid, PHP reads and serves the file with proper headers

### Signature Generation

The signature uses HMAC-SHA256:

```php
$data = $path . '|' . $expires;  // e.g., "posts/123/2024/03/image.jpg|1710456000"
$signature = hash_hmac('sha256', $data, $signingSecret);
```

The signing secret can be:
- A custom secret configured in settings
- Joomla's global secret key (fallback)

### URL Caching

To avoid performance overhead, generated URLs are cached in-memory during each request:
- Cache key: `{adapter}:{path}:{protectMedia}`
- Same path returns cached URL within a single request

### Enabling Protection

1. Navigate to **Components → Sociable → Settings → Storage**
2. Enable **Protect Media Files** toggle
3. Optionally set:
   - **Signed URL Expiry**: How long URLs remain valid (60-86400 seconds, default: 3600)
   - **Signing Secret**: Custom HMAC secret (leave empty to use Joomla's secret)

4. **Configure .htaccess** (Apache):
   ```bash
   cd media/com_sociable/uploads/
   mv .htaccess .htaccess.backup
   mv .htaccess.protected .htaccess
   ```

5. **Configure Nginx** (if applicable):
   ```nginx
   location /media/com_sociable/uploads/ {
       deny all;
       return 403;
   }
   ```

### Video Streaming Support

The MediaController supports HTTP Range requests for video streaming:

```
HTTP/1.1 206 Partial Content
Content-Type: video/mp4
Content-Range: bytes 0-999999/5000000
Accept-Ranges: bytes
```

This allows:
- Seeking within videos
- Progressive playback
- Bandwidth-efficient streaming

### Settings Reference

| Setting | Default | Description |
|---------|---------|-------------|
| Protect Media | No | Enable signature-based access control |
| Signed URL Expiry | 3600 | URL validity period in seconds |
| Signing Secret | (empty) | Custom HMAC secret (uses Joomla secret if empty) |

## Security Considerations

### Default Security (.htaccess)

Even without protection enabled, the default `.htaccess` includes:

```apache
# Block PHP execution in uploads
<FilesMatch "\.(?:php[1-7]?|phtml|phar)$">
    <IfModule mod_authz_core.c>
        Require all denied
    </IfModule>
</FilesMatch>
php_flag engine Off

# Disable directory listing
Options -Indexes
```

### Protected Mode (.htaccess.protected)

When protection is enabled:

```apache
# Deny all direct access
<IfModule mod_authz_core.c>
    Require all denied
</IfModule>

# Disable directory listing
Options -Indexes
```

### Recommendations

1. **Always use HTTPS** - Signed URLs contain sensitive parameters
2. **Keep expiry times reasonable** - Balance usability vs. security
3. **Monitor access patterns** - Check server logs for unauthorized attempts
4. **Use custom signing secret** - Replace Joomla's shared secret for isolation

## Database Schema

The `#__sociable_media` table stores all media metadata:

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| user_id | INT | Uploader's user ID |
| target_type | VARCHAR | Entity type (activity, comment, etc.) |
| target_id | INT | Entity ID |
| ordering | INT | Sort order within target |
| media_type | VARCHAR | Type: `image` or `video` |
| file_name | VARCHAR | Original filename |
| file_path | VARCHAR | Storage path |
| file_size | INT | Size in bytes |
| mime_type | VARCHAR | MIME type |
| dimensions | JSON | Width/height for images |
| hash | VARCHAR | MD5 file hash |
| storage_adapter | VARCHAR | Adapter used: `local` or `s3` |
| visibility | VARCHAR | Access level |
| published | TINYINT | Published state |
| created | DATETIME | Upload timestamp |

## API Reference

### MediaService Methods

```php
// Upload with validation (recommended)
$result = $mediaService->validateAndUploadFiles($userId, $files);
// Returns: ['mediaIds' => [...], 'errors' => [...], 'warnings' => [...]]

// Attach media to entity
$mediaService->attachToTarget($mediaIds, 'activity', $activityId);

// Retrieve media by target
$media = $mediaService->getByTarget('activity', $activityId);

// Batch load for feed
$mediaMap = $mediaService->getByTargetBatch('activity', $activityIds);
// Returns: [activityId => [mediaItems], ...]

// Get URL (handles protection automatically)
$url = $mediaService->getMediaUrl($path, $adapter);

// Delete media
$mediaService->deleteMedia($mediaId, $userId, $isAdmin);
```

### REST API Endpoints

**Upload media (as part of activity creation):**
```
POST /index.php?option=com_sociable&task=activities.create
Content-Type: multipart/form-data
X-CSRF-Token: {token}

FormData:
  - content: "Post text"
  - files[]: (binary)
  - files[]: (binary)
```

**Retrieve activity with media:**
```
GET /index.php?option=com_sociable&task=activities.item&id={id}

Response:
{
  "activity": {
    "id": 123,
    "content": "...",
    "media": [
      {
        "id": 1,
        "type": "image",
        "url": "https://...",
        "width": 1920,
        "height": 1080
      }
    ]
  }
}
```

## Troubleshooting

### Common Issues

**Files not uploading:**
- Check PHP `upload_max_filesize` and `post_max_size` in php.ini
- Verify directory permissions (755 for folders, 644 for files)
- Check available disk space

**Protected URLs not working:**
- Ensure `.htaccess.protected` is renamed to `.htaccess`
- For Nginx, verify the deny rule is configured
- Check system clock is accurate (for expiry validation)

**Signature verification failing:**
- Verify signing secret is consistent
- Check for URL encoding issues
- Ensure system time is synchronized

**Video not streaming:**
- Check video codec compatibility (H.264 for MP4)
- Verify Range header support in web server
- Test with smaller files first

### Debug Tips

Enable Joomla debug mode to see detailed error messages. Check:
- Joomla error log (`administrator/logs/`)
- Server error log (`/var/log/apache2/error.log` or equivalent)
- Browser Network tab for failed requests
