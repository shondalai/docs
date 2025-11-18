---
id: reportingflagging-posts-in-cjforum
title: Reporting/Flagging posts in CjForum
sidebar_label: Reporting/Flagging posts in CjForum
sidebar_position: 6
---

Starting v3.1.2, CjForum supports user reporting of topics and replies which they think are inappropriate. Users can see a new Report button when you enable &#8220;Allow Reporting&#8221; option in the CjForum options. Users need to enter their name, email id (auto-populated if logged-in) and the report description. Once they send the report, an email will be triggered to the following members.

- Users in the admin user group selected in the &#8220;CjForum &#8211; Topics&#8221; plugin
- Users marked as moderators for the corresponding category

The email notification will contain the report details and a link back to the topic. Administrators can login to the backend, go to Flagged Reports page and moderate the flagged topics/replies. You can take following actions on the reported topics/replies.

- Publish
- Unpublish
- Trash

The report will also be published/trashed along with the reported item.

To completely delete the report, filter the trashed items, select the trashed reports and click on Empty Trash button. This will permanently delete the user report. Please note that the reported topic/reply will NOT be deleted, you need to go to Topics/Replies page and perform the same operation.