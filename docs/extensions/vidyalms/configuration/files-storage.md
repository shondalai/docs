---
title: Configure uploads and protected learning files
description: Set file limits, protect PDFs and assignment photos, and understand private storage.
---

Course covers, import archives, lesson resources, and learner submissions serve different purposes. A public cover image may belong in the media library; a paid lesson PDF or a learner's assignment photos should use VidyaLMS's protected file flow.

## Set the upload ceilings

Open **Settings → Files & storage** and review:

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Setting | Controls |
| --- | --- |
| **Maximum import upload (MB)** | The largest archive accepted by the import screen |
| **Maximum resource file (MB)** | The largest supported document or archive for a resource lesson |
| **Maximum course image (MB)** | Raster course-cover uploads; SVG is not accepted here |
| **Import source retention (days)** | How long completed import sources are retained before eligible cleanup |

</div>

PHP and the hosting server can impose smaller limits. Raising a VidyaLMS value does not raise the host's upload or request-size limit. If a file fails before a useful application message appears, ask the host to check those limits.

Assignment editors have their own maximum file count, allowed extensions, and per-file size. See [practical assignments](../courses/assignments.md). A resource limit does not automatically mean learners can attach that size of photo to an assignment.

## Choose private storage

**Private file folder** accepts an absolute server folder path. Leaving it empty uses the host adapter's private folder. A folder outside the publicly served website is preferable. Ask your hosting administrator to choose a writable location and include it in backups.

On WordPress, an existing `VIDYALMS_PRIVATE_DIR` setting in the site configuration takes precedence. Changing the folder setting does **not** move existing files. Plan a file migration with your administrator before changing a working site's path.

If private files sit inside the public web folder, the web server must deny direct access to them. Do not assume an Apache rule also configures Nginx. The hosting administrator should verify the protection on the actual server.

## Provide an enrolled-only PDF

1. Add a **Resource** lesson to the course.
2. Upload the PDF through the lesson editor and save it.
3. Require course access and apply any lesson prerequisites you need.
4. Check the download as an enrolled learner.
5. Check the same lesson as a signed-out or unenrolled visitor.

VidyaLMS checks learning access before issuing a short-lived download link. Putting a PDF in a public media folder and pasting its URL into a reading lesson does not give it the same protection.

An authorized download link can be used by anyone holding it until it expires. A file already downloaded cannot be recalled. Protected delivery helps control access; it does not prevent a learner from copying a file they can legitimately open.

## If an upload or download fails

Check the extension, file size, remaining storage, folder permissions, and the learner's access. If an old signed link expired, reopen the lesson to obtain a fresh link. Include private files with your [site backup](../maintenance/updates-backups.md); restoring database rows alone cannot restore missing photos or PDFs.
