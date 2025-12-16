---
id: troubleshooting
title: Troubleshooting Guide
sidebar_label: Troubleshooting
sidebar_position: 9
---

# Troubleshooting Guide

Solutions for common issues with GPS Tools.

## Installation Issues

### "Extension Install Failed"

**Symptoms:** Installation fails with a generic error.

**Solutions:**

1. **Check PHP memory limit:**
   - Minimum required: 128MB
   - Recommended: 256MB
   - Check in System → System Information

2. **Check upload limits:**
   - Verify `upload_max_filesize` is at least 32M
   - Verify `post_max_size` is at least 32M
   - Ask your host to increase if needed

3. **Check file permissions:**
   - Joomla temp folder must be writable
   - `/tmp` folder permissions: 755 or 777

4. **Try Discover installation:**
   - Upload files manually via FTP
   - Go to System → Discover
   - Click Discover, then Install

### "Missing Dependency"

**Symptoms:** Error about missing PHP extension or Joomla version.

**Solutions:**

1. **Check PHP version:**
   - Required: PHP 8.1 or higher
   - Check in System → System Information

2. **Check required extensions:**
   - Required: json, xml, simplexml, mbstring
   - Contact your host to enable missing extensions

3. **Verify Joomla version:**
   - Required: Joomla 5.0 or higher
   - Update Joomla if needed

### Database Errors During Install

**Symptoms:** SQL errors during installation.

**Solutions:**

1. **Check MySQL version:**
   - Required: MySQL 8.0+ or MariaDB 10.4+

2. **Check database privileges:**
   - User needs CREATE TABLE permissions

3. **Clear Joomla cache:**
   - System → Clear Cache → All

---

## Map Issues

### Map Not Loading

**Symptoms:** Blank area where map should appear.

**Solutions:**

1. **Check browser console:**
   - Press F12 → Console tab
   - Look for JavaScript errors
   - Note any specific error messages

2. **Verify assets loaded:**
   - Check Network tab for failed resources
   - Look for 404 errors on JS/CSS files

3. **Check HTTPS:**
   - Maps require HTTPS on production sites
   - Check for mixed content warnings

4. **Clear caches:**
   - Joomla: System → Clear Cache
   - Browser: Ctrl+Shift+Delete
   - CDN: Purge if applicable

### Google Maps Specific Issues

**"Google Maps API Key Required"**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create an API key
3. Add to GPS Tools settings

**"API Key Invalid"**

1. Verify key is copied correctly
2. Check key restrictions match your domain
3. Ensure Maps JavaScript API is enabled

**"Quota Exceeded"**

1. Check usage in Google Cloud Console
2. Enable billing if not done
3. Wait for quota reset (monthly)

### Map Shows Wrong Location

**Symptoms:** Map centered incorrectly or track not visible.

**Solutions:**

1. **Check track has coordinates:**
   - Edit track in admin
   - Verify Start/End coordinates are set

2. **Verify bounds calculation:**
   - Re-save the track to recalculate

3. **Check zoom level:**
   - May be zoomed too far in/out
   - Use "Fit to Track" option

### Markers Not Showing

**Solutions:**

1. **Check waypoints setting:**
   - Verify "Show Waypoints" is enabled

2. **Check track has waypoints:**
   - Some tracks don't include waypoints

3. **Verify marker clustering:**
   - Zoom in to separate clustered markers

---

## Chart Issues

### Charts Not Displaying

**Symptoms:** Empty chart containers.

**Solutions:**

1. **Check Chart.js loaded:**
   - Open browser console (F12)
   - Look for Chart.js errors

2. **Verify track has data:**
   - Not all tracks have elevation data
   - KML files may lack sensor data

3. **Check settings:**
   - Verify charts are enabled in settings
   - Check individual chart toggles

4. **Clear cache:**
   - System → Clear Cache → All

### Incorrect Chart Data

**Symptoms:** Values seem wrong or missing.

**Solutions:**

1. **Re-parse track:**
   - Edit track in admin
   - Delete and re-upload the file
   - Save to recalculate statistics

2. **Check unit settings:**
   - Metric vs Imperial may cause confusion
   - Verify in Component Options

3. **Verify source file:**
   - Open GPX/KML in text editor
   - Check elevation values exist

### Heart Rate/Cadence Missing

**Explanation:** These charts only appear when data is recorded.

- Heart rate requires HR monitor during recording
- Cadence requires cadence sensor
- TCX files typically have this data
- Basic GPX files usually don't

---

## Upload Issues

### "File Type Not Allowed"

**Symptoms:** Upload rejected with file type error.

**Solutions:**

1. **Check allowed extensions:**
   - Settings → Upload Settings
   - Should include: gpx, kml, tcx

2. **Verify file extension:**
   - Ensure file ends with .gpx, .kml, or .tcx
   - Check for double extensions (.gpx.txt)

3. **Check Joomla Media settings:**
   - System → Global Configuration → Media
   - Add extensions if needed

### "File Too Large"

**Symptoms:** Large files fail to upload.

**Solutions:**

1. **Check PHP limits:**
   - `upload_max_filesize` - increase to 32M+
   - `post_max_size` - increase to 32M+
   - `max_execution_time` - increase to 300+

2. **Check GPS Tools setting:**
   - Options → Max File Size

3. **Check Joomla limits:**
   - Global Configuration → Server

4. **Split large files:**
   - Use GPX editing software to split into segments

### "Parse Error"

**Symptoms:** File uploads but track data is incorrect.

**Solutions:**

1. **Validate file format:**
   - Open file in text editor
   - Check for valid XML structure
   - Look for encoding issues

2. **Check coordinate format:**
   - Latitude: -90 to 90
   - Longitude: -180 to 180
   - Some software uses different formats

3. **Check file encoding:**
   - Should be UTF-8
   - No BOM (Byte Order Mark)

4. **Try different export:**
   - Re-export from GPS device
   - Try different software to convert

---

## Performance Issues

### Slow Page Load

**Symptoms:** Track pages load slowly.

**Solutions:**

1. **Enable caching:**
   - Component cache in Options
   - Enable Joomla page cache
   - Enable track simplification

2. **Reduce complexity:**
   - Enable track simplification
   - Set reasonable max display points (1000)
   - Use lazy loading for embeds

3. **Optimize images:**
   - Ensure thumbnails are generated
   - Compress large images

4. **Check server:**
   - Monitor server resources
   - Consider better hosting

### Memory Errors

**Symptoms:** PHP memory exhausted errors.

**Solutions:**

1. **Increase memory limit:**
   - Recommended: 256MB or higher
   - Set in php.ini or .htaccess

2. **Process smaller files:**
   - Split very large tracks
   - Simplify before upload

3. **Enable chunked processing:**
   - Very large tracks may need batch processing

---

## Display Issues

### Tracks Not Showing on Frontend

**Solutions:**

1. **Check publishing state:**
   - Track must be "Published"
   - Check publish dates

2. **Check access level:**
   - Verify user has access
   - Check category access level

3. **Check menu item:**
   - Menu item must be published
   - Assigned to correct menu

### Statistics Wrong

**Solutions:**

1. **Re-save track:**
   - Edit and save to recalculate

2. **Check unit system:**
   - Metric vs Imperial setting

3. **Verify source data:**
   - Some GPS devices record inaccurately

### Comments Not Appearing

**Solutions:**

1. **Check comments enabled:**
   - Options → Show Comments: Yes
   - Menu item may override

2. **Check moderation:**
   - Comments may need approval
   - Check Components → GPS Tools → Comments

3. **Check permissions:**
   - Users need comment permission

---

## Plugin Issues

### Content Shortcode Not Working

**Symptoms:** `{gpstools track="42"}` shows as text.

**Solutions:**

1. **Enable content plugin:**
   - System → Plugins
   - Enable "Content - GPS Tools"

2. **Check track ID:**
   - Verify ID exists and is published

3. **Check article editor:**
   - Some editors escape shortcodes
   - Try disabling WYSIWYG temporarily

4. **Check syntax:**
   - Must be `{gpstools track="42"}`
   - Quotes around parameter value

### Smart Search Not Finding Tracks

**Solutions:**

1. **Enable finder plugin:**
   - System → Plugins
   - Enable "Finder - GPS Tools"

2. **Rebuild search index:**
   - Components → Smart Search → Index
   - Click "Index" button

3. **Check track is indexed:**
   - Track must be published
   - Appropriate access level

---

## When to Contact Support

Consider contacting support when:

- Errors persist after trying all solutions
- You see database-level errors
- You suspect a bug after an update
- Issues affect multiple sites

**Provide this information:**

1. Joomla version
2. PHP version
3. GPS Tools version
4. Error messages (screenshots help)
5. Steps to reproduce the issue
6. Browser and device info (for display issues)

---

## Related Documentation

- **[Installation](installation)** - Setup guide
- **[Configuration](configuration)** - Settings reference
- **[Maps & Charts](maps-and-charts)** - Display options
