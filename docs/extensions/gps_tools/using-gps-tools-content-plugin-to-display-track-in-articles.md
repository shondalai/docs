---
id: using-gps-tools-content-plugin-to-display-track-in-articles
title: Using GPS Tools content plugin to display track in articles
sidebar_label: Using GPS Tools content plugin to display track in articles
sidebar_position: 1
---

You can use GPS Tools content plugin to add any track to your Joomla articles. The plugin can be enabled from the Joomla Plugin Manager. Go to Extensions -> Plugins -> Filter content plugins and enable the &#8220;Content &#8211; GPS Tools&#8221; plugin.

After enabling the plugin, add the shortcodes as explained below in your articles.

`{GPSCONTENT }`

The above code will display the track with ID 21 on your article. You can find the track id on your track URL or on the administrator tracks page.

You can customize which parts are to be loaded and which are not. For example to display the track title and description, add the below text in your article.

`{GPSCONTENT }`

You can show or hide speed chart, heart rate chart, and elevation chart in the similar way

`{GPSCONTENT }`

To display track info and waypoint details

`{GPSCONTENT }`

set param value to 0 to hide a chart.