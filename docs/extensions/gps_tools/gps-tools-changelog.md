---
id: gps-tools-changelog
title: GPS Tools Changelog
sidebar_label: GPS Tools Changelog
sidebar_position: 3
---

**v6.4.0/1 (05-Oct-2025)**

+ Joomla 6 Compatibility Update

**v6.3.1 (02-Aug-2025)**

* Fix issue with custom start icon size

**v6.3.0 (05-Jul-2025)**

+ New plugin: Smart search plugin for tracks
^ Update copyright headers
^ Removed legacy references
* Unable to checkin the tracks table
* Category Tracks are not ordered as per the selected option
* Move track suggestions above comments
* Fixed issue with closing tags
* Fixed issue with PHP warnings on navigation block

**v6.2.0 (25-Dec-2024)**

+ Add tracks navigation on track details page
* Tracks list shows empty when MySQL null dates are used

**v6.1.6 (22-Oct-2024)**

* Download permission set at track level does not work
* Search filter cleared out when moving to next page on tracks listing

**v6.1.5 (07-Oct-2024)**

* Fixed issue with MySQL null checks

**v6.1.4 (10-Aug-2024)**

* Max speed is calculated incorrectly when the distance between points is too small
* Total ascend, descend stats are not shown

**v6.1.3 (30-Jun-2024)**

+ Added locate me control for OSM
+ Added new stats Total Ascend and Total Descend

**v6.1.2 (11-May-2024)**

* GPX Tracks module uses http version of the tiles layer
* OSM Tiles layer is not showing after update

**v6.1.1 (09-Apr-2024)**

+ Added option to customise the marker image shown when hover on the charts
+ Added print/download button on the map (openstreetmaps)
+ Added an option to disable clustering at the selected zoom on GPX Tracks module
* Editor is not shown correctly on front-end
* Fixed issue with editing an existing track

**v6.1.0 (28-Jan-2024)**

+ Added total distance in the track pin popup in GPX Tracks module
+ Add full screen icon to the map in GPX Tracks module
+ Add an option in GPX Tracks module to show markers in groups of clusters
+ New options to add start and end markers of the track
+ Improved options to show global value in category and track menus
+ New smart search plugin added
+ New option to customize OSM layers

**v6.0.4 (14-Jan-2024)**

+ Added support for Rewardify Points
+ Google Maps JS API update
+ Added support for marker clusters on GPX Tracks module
+ Added support to show tracks in alphabetic order in GPS Tools module
* Category description and image are not showing
* Category marker icon is not used when displaying waypoints
* GPX Tracks module does not show Google Maps RoadMap

**v6.0.3 (28-Oct-2023)**

* GPS Tools editor button is not showing
* Fixed the margin of batch button on admin toolbar
* Fixes issues related to PHP strict standards

**v6.0.2 (26-Sep-2023)**

* Package installation issue fixed

**v6.0.1 (25-Sep-2023)**

* Fixed issue with backend track edit form

**v6.0.0 (24-Sep-2023)**

+ Breaking Change: Added support for Joomla 5
^ Breaking Change: Removed legacy layer for Joomla 3

#### v5.3.8 (15-Aug-2023)

^ Updated SQL installation file to support null dates
* Fixed issue with GPX tracks where sudden increase in speed is not detected

#### v5.3.7 (16-May-2023)

* GPX Tracks module causing SQL error

#### v5.3.6 (12-May-2023)

* Fixed installation error with prev version

#### v5.3.5 (10-May-2023)

^ Removed deprecated code
^ Replaced JFile/JFolder deprecated wrappers with respective file system functions
* Fixed error when loading a new track that does not have waypoints
* Changed the tiles URL from http to https
* Fixed issue with gpxtracks module showing yet to publish tracks
* Form layout menu shows erorr when SEF is disabled
* CjForum tracks plugin do not use proper styling

#### v5.3.4 (11-Dec-2022)

* Fixed issue with editor button plugin not inserting content into the editor
* Fixed issue with Track Info toggle option when using content plugin

#### v5.3.3 (18-Nov-2022)

* Fixed issue with track selection field on single track menu item
* Removed unsued language strings

#### v5.3.2 (07-Nov-2022)

+ Added support for PHP 8.1
+ Added options to show/hide statistics and waypoints table
* Tags are not saving in Joomla 3.10 or later versions

#### v5.3.1 (27-Jun-2022)

* Show Track Information & Show Waypoints Fields values cannot be unselected
* Page shows error when the component redirect to login/any page

#### v5.3.0 (26-Feb-2022)

* Track form page shows error to guest users
* Editor button plugin causing issue with Joomla 4
* Fix issue with loading CjForum app to display tracks list
* Fixed issue with installation script when using mysql scrict mode
* Editor button plugin does not open correct modal window
* Fixed issue with single track menu item selection modal in Joomla3

#### v5.2.5 (08-Dec-2021)

+ Updated the Google Charts API to use latest version
^ Added padding to rating block display on track details page
* Fixed issue with author name wrapped below the avatar
* Fixed issue with hits shown twice on listing page
* Fixed issue with uploading tracks with invalid latlon points
* Categories page shows warning message on Joomla 4

#### v5.2.4 (01-Sep-2021)

+ Adding component changelog support for Joomla 4
+ Sociable integration added
* Track type radio button is non-functional on Joomla 4 track form

#### v5.2.3 (10-Aug-2021)

* Waypoints are shown only to administrators and not others

#### v5.2.2 (06-Aug-2021)

* Fixed issue with komento plugin with deleted comments
* Fixed issue with OpenStreetMap not showing for guest users

#### v5.2.1 (02-Aug-2021)

^ Change mile markers to use distance instead of fixed numbers
^ Display tweaks with toolbar on Bootstrap 5 layout
* Editor button does not insert correct shortcode into the editor

#### v5.2.0 (18-Jul-2021)

+ New feature: Show mile markers for each X meters, customizable globally, category or track level
+ Automatically detect and use category in GPX Tracks module when published on a GPS Tools category page
+ New feature: Choose waypoint as track start point shown on GPX Tracks
+ New layout based on Bootstrap 5 library
+ Joomla 4 RC4 support added
+ PHP 8 support added
* Fixed issue with administrator menu items not showing on sidebar
* Points are not awarded for new track when using easysocial

#### v5.1.10 (25-Mar-2021)

+ PHP 8 support added
* Download button does not work when the track is shown using content plugin

#### v5.1.9 (01-Mar-2021)

* Map does not show on KML tracks with empty elevation in their points
* The elevation starts at 0 for tracks with rte points
* Minimum and maximum elevations are incorrectly shown for tracks with rte points
* Unable to save single track menu item

#### v5.1.8 (23-Jan-2021)

+ Joomla 4 beta 2 support added
+ Added full screen button on OpenStreetMap on the form page
+ New field to define the downloaded track filename on the track page
* Moved the track selection to below the category to avoid category selection reset the track
* Editing a track from backend resets the hits
* Custom field values are not saved when editing track from front-end
* KML files with multiple placemarks do not show all waypoints

#### v5.1.7 (16-Jun-2020)

+ Joomla 4 beta support added

#### v5.1.6 (08-Jun-2020)

* Charts are not loaded in content plugin after last release

#### v5.1.5 (21-May-2020)

* Charts are not loaded when using Google maps
* List limit option does not work
* Disallow Google to follow certain ajax links to index nonexistent content

#### v5.1.4 (1-Jan-2020)

+ New configuration option to show/hide categories list
+ Added new module positions (see documentation for updates)
* Added missing language string for EasySocial user points setup
* Unicode urls are not created when saving the items

#### v5.1.3 (07-Oct-2019)

+ Improved star rating system to rate tracks, removed raty plugin
+ Show user rating along with track rating on track details page

#### v5.1.2 (17-Sep-2019)

* Track cannot be submitted after upgrade

#### v5.1.1 (17-Sep-2019)

^ Joomla 4 alpha 11 compatibility updates
* Fixed installation errors

#### v5.1.0 (15-Aug-2019)

+ New gpx chart type: Pedalling Cadence
+ New tracks listing plugin for CjForum profile
+ Responsive waypoints table
+ New option to customize the columns displayed on the waypoints table
+ New option to show logged-in user stats in Tracks Stats module
+ Show description upto < hr id="system-readmore"/> in gpxtracks module
^ Removed references to Google+ service
* Hover on tooltips disappear elements when mootools loaded on the page

#### v5.0.4 (15-Jun-2019)

+ New option to configure separate the Google Elevation API key with front-end API key and allow restrictions at key level
+ Added option to configure max width of popup in GPX Tracks module
^ Redirect guest users to login page when access is denied
* Guest users unable to submit tracks
* Multilanguage categories are not shown on tracks form

#### v5.0.3 (08-May-2019)

* Unable to save track after changing the category
* Rating shows 4.5 stars when the rating is 5
* Name is not shown in waypoints table when description is empty

#### v5.0.2 (03-Apr-2019)

+ Added rating number text on track details page
+ Added support to capture waypoint names from gpx files
+ Added support to edit waypoint description on the track page
+ Track stats are now resposive to mobile devices, without tables
+ Added jsitemap plugin
+ Added total tracks, distance and time statistics on user tracks page
^ Updated layer control library version
* Points not awarded to the user for liking a track
* Remove IDs configuration option button style is not shown
* Few language strings are not loaded in configuration options
* Tracks with route points are not loaded properly
* Tooltip plugin causes issue when loading track in an article
* Editor button to insert track shortcode is not working
* Waypoint name is not being captured during track processing
* Clean Cache button on tracks page do not clear waypoints

#### v5.0.1 (02-Dec-2018)

+ Added option to enable/disable layers control for osm
* Advanced search form is not shown when using bootstrap3 layout
* Feature button on backend listing page is not working

#### v5.0.0 (30-Nov-2018)

+ Joomla 4 compatibility: We revamped the entire code base and rewritten many functions to make the extension fully compatible with the new Joomla 4 release. 
+ Bootstrap 4 support: We created all new layout for supporting Bootstrap 4 based templates including Joomla 4 default template.
+ New Router: We created a new router which supports modern urls such as removal of IDs in the URLs.
+ New option to override the default colors in GPX file
+ Added full screen control to the OSM map
+ New feature to select the layers from number of available providers when using OSM maps.
^ Updated search plugin for new API support
* No error shown when the track upload was unsuccessful
* Fixed issue with the PHP warning on categories page
* Elevation measurement option is not reflected on the track page
* Charts are not showin on content plugin
* Category flat list is not properly aligned
* Unable to edit track when associations are enabled
* Backend dashboard page shows warning
* Marker popup width and height are not properly aligned when using OSM
* Google Maps not working with GPX Tracks module
* Speed chart is not showing even through data is available in gpx file

#### v4.3.0 (04-Jun-2018)

+ Added several new options to support OpenStreetMap in addition to Google Maps
+ Added support for MapBox and OSRM as directions provider when using OSM
+ Added support for MapBox and Nominatim as Geocoding/places provider when using OSM
+ Edit track waypoint description/details, add custom descriptions for waypoints
* Track elevation data is not updated when there is no elevation data present in the gpx file
* Waypoint popup title and description are on the same line on the map
* JavaScript errors fixed on some templates which do not load Joomla libraries
* Content plugin options are ignored
* My Surveys link shows on home page menu item
* Track suggestions do not show
* Old URLs from v3 are not redirecting properly.

#### v4.2.2 (14-Jan-2018)

+ Allow changing the gpx file/content of the track
+ Added description parameter to the editor plugin placeholder.
^ Updated default character set of tables to utf8mb4_unicode_ci
* Track description cannot be hidden when using content plugin
* Display popular tracks sorted by number of hits

#### v4.2.1 (28-Dec-2017)

* Unable to update extension using automatic updates, package is corrupt

#### v4.2.0 (27-Dec-2017)

+ Added support for handling gpxx:displayColor to show track color
+ Customize gpxtracks module start point marker icon in category options
+ Added support for Joomla! Fields and Field Groups
+ Added KML layer support
* Popular tracks link do not show tracks sorted by hits
* Download track link do not work after upgrading to Joomla 3.8.3
* Backend button icons gets duplicated when load bootstrap option enabled
* Tracks Order option label is incorrect

#### v4.1.8 (29-Oct-2017)

+ Show track file name on tracks listing page
^ Updated line colors option description to state the usecases of the option
^ Changed the line colors option first color to blue to match single color option
* KML files do not show on map
* Content plugin do not show description even the option is present

#### v4.1.7 (15-Oct-2017)

* Marker icon on map is not showing when hover on the chart points

#### v4.1.6 (12-Oct-2017)

+ Show waypoint icons based on symbol name (`<sym>` tag handling)
+ Show multiple tracks of the gpx file in different colors
* The map shows incomplete track when there are multiple tracks present in single gpx file

#### v4.1.4/5 (02-Oct-2017)

^ Changed permission label "View" to "View Tracks"
* Untranslated string in component settings
* Search form ignores search term when clicking on links in pagination
* All track segments are not rendered when there are multiple track segments in a gpx track file
* Waypoints are not displayed on the map
* Unable to hide empty categories
* Cannot go to second page of the track search results

#### v4.1.3 (02-Sep-2017)

* Wrong label for Elevation measurement admin option
* Elevation value of the first waypoint is always 0
* Categories are not shown in selected order in tracks listing page
* Cannot hide the tracks count on categories listing
* GPS Tools using admin translation rather than frontend translation value of "Meters"

#### v4.1.1/2 (12-Aug-2017)

+ New Option to show/hide star rating box on track details page
+ Show tracks from subcategories when searching for tracks
^ Remove unused directories from previous versions
* Downloaded track file has missing file extension
* Description of category is not shown in list layout

#### v4.1.0 (30-Jul-2017)

+ New option to show/hide individual statistics of track
+ New option to show/hide total track distance in tracks listing page
+ New option to show/hide total track duration in tracks listing page
+ Use track alias name for downloaded track file name
+ New options to show/hide rating block on listing and track pages
+ New option to show/hide author block on track details page
* Corrected language errors
* Clean Cache button do not prompt to select tracks
* Incorrect search criteria option in advanced search page
* Remove unused views files from older versions
* Advanced search page shows error when searching for small words
* GPX Tracks module does not filter tracks by selected language 
* GPS Tools listing module does not filter tracks by selected language
* Space showed when all track metadata is hidden
* When using the menu type Category, search functionality is not working

#### v4.0.4 (09-Jul-2017)

+ New option to show/hide toolbar
+ New option to show short description in listing page 
^ Updated copyright year
* Listing page links contain invalid HTML
* Tracks migration from v3 produces wrong category assignments
* User display name option is not working
* Track stats module do not use global settings
* Corrected typos in language file
* Komento plugin throws error after upgrading to new version

#### v4.0.3 (20-Mar-2017)

+ Reposition map along the path when hovering on charts
^ Added missing permission setting to allow/disallow track likes
* Inadequate filtering in request parameters
* Corrected wrong plugin name
* Track could not be displayed if the kml file has coordinates not properly aligned

#### v4.0.2 (26-Feb-2017)

* Inadequate filtering in request parameters
* Corrected wrong plugin name
^ Added missing permission setting to allow/disallow track likes

#### v4.0.1 (05-Dec-2016)

* Download track link not working for guests
* Cannot override the permissions to deny a permission
* Tags are not migrated with migration script
* Download link not working when track showed using content plugin
* Elevation value is empty in waypoints details
* File upload form is not shown on few templates

#### v4.0.0 (01-Nov-2016)

+ New routing system
+ Tags Migration to Joomla! tags system
+ Track Form Enhancements 
+ Back-end Track Creation
+ Track Data Enhancements
+ Backend UI Enhancements
+ New Permission System
+ New Layout System
+ One Click Updates

#### v3.8.0 (25-Mar-2016)

+ New GPS Tools tracks statistics plugin
* Exported track file cannot be shown on Google Maps
* Error shown in feed link
* The track shows only partial information in speed chart

#### v3.7.5 (04-Oct-2015)

+ Switched Elevation API to Google Maps Elevation API
^ Changed the Google Maps URL to https version
* modal dialogs do not show on few sites
* Advanced search with username produces error

#### v3.7.4 (26-June-2015)

+ Configuration option to filter related tracks only by tags or by all
* Search should be case insensitive
^ Updated sharing tools to use AddThis async function
^ Switched http version of maps to https version

#### v3.7.3 (21-Feb-2015)

* Edit links on backend dashboard does not work
^ Removed legacy code

#### v3.7.2 (28-Jan-2015)

* KML file downloads with GPX extension with download track link

#### v3.7.1 (15-Jan-2015)

* CSS conflicts for track rating

#### v3.7.0 (15-Jan-2015)

+ New  + Now supports KMZ (compressed kml) files (only track data and no attached files im kmz)
+ Rate the tracks and show star ratings of tracks on listing pages
+ Added title for the waypoint markers
* Track color option have no effect on the front-end track display
* Button icons conflict with Joomla bootstrap icons in Joomla 3
* Feed is always showing empty result
* RSS Feeds always shows empty results
* Line color, width and opacity cannot be changed from options
* Approval link from dashboard page results in error

#### v3.6.8 (24-Oct-2014)

* Typo in table name as gostools_trackdetails  causing error

#### v3.6.4 (18-Dec-2013)

+ EasySocial User Avatar and User Profile linking support
+ EasySocial Activity Stream support
+ EasySocial User Points support

#### v3.6.3 (29-Nov-2013)

^ Removed deprecated code
* Links in suggestions are wrong

#### v3.6.2 (18-Nov-2013)

* No related tracks shown on track details page

#### v3.6.1 (13-Nov-2013)

* Search do not produce any results

#### v3.6.0 (12-Nov-2013)

+ Configuration option to restrict number of related and category tracks displayed
^ Google Visualization new version update
^ GMap3 plugin update
* Track information not updating properly

#### v3.5.22 (19-Sep-2013)

* Incorrect link is posted in JomSocial activity stream
* Waypoints are not rendered correctly
* Modal boxes are not shown properly on few templates

#### v3.5.21 (02-Sep-2013)

* Global check box not working on tracks page
* Search box is too small
* Pagination limit not working

#### v3.5.20 (19-Aug-2013)

* Redirected error page after unpublish/publishing tracks
* Approval mails are not being sent
* Kommento plugin fixes

#### v3.5.19 (29-July-2013)

* Average speed fixes

#### v3.5.18 (19-July-2013)

* Ignore unexpected and erroneous spikes in average speeds on speed charts

#### v3.5.17 (16-July-2013)

* Unable to select category in GPS Tools Default Layout menu configuration

#### v3.5.8 (01-Apr-2013)

* Language check button style on admin pages is corrupted
* Restrict assigning the parent category to itself to avoid DB crashes
* Tags and other menu items on toolbar produce 404 error if SEF urls not enabled in Joomla
* Unable to enter utf characters in tags input box
* Can't select list limit value other than 20
* Search form redirects to home page if SEF urls not enabled in Joomla

#### v3.5.7 (26-Feb-2013)

+ New Joomla Editor button to insert track easily in an article.
* Collapse navigation opens main collapse on bootstrap templates on mobile devices

#### v3.5.6 (18-Feb-2013)

+ Debugging mode available
+ Tags now support UTF-8 characters
* Unable to create track if magic quotes is enabled (recommended to switch it off)

#### v3.5.5 (04-Feb-2013)

+ Now you can view the track on Google Earth in 3D.
+ New module positions added
* Validations not working on form
* Content plugins not working on description

#### v3.5.4 (27-Jan-2013)

+ Backend option to delete JS cache
+ Mouse movement tracker for chart and map

#### v3.5.3 (25-Jan-2013)

* Average speed statistic is incorrect
* Users unable to edit their own tracks

#### v3.5.2 (24-Jan-2013)

+ RSS Feeds support
* Follow link not working
* Admins not able to see publishing/editing options on front-end

#### v3.5.1 (22-Jan-2013)

* File extension check should be case insensitive

#### v3.5.0 (21-Jan-2013)

+ Full rewrite of front-end and back-end with Joomla 3 support
+ No need to have GPX/KML files. Users can directly draw tracks on maps and app will create gpx tracks for you.
+ Improved load time by caching all javascript code generated to the files. Now pages loads faster by upto 80% for second requests.
+ Zoom and detailed view support for elevation/speed/hr charts
+ Chart and map tracker support - move mouse over the chart to see where the point located on map
+ More track statistics
+ Tagging support - Now add tags to your tracks instead of just the categories
+ Categories list on main page is back with polished look
+ New advanced search page fore more user friendly search
+ New toolbar with new listing types shortcuts (most downloaded tracks)
+ Email subscriptions of new tracks (category and global).
+ My Tracks and My Subscriptions pages
+ Slick sharing tools
+ Spam track reporting feature

#### v3.1.0 (03-Dec-2012)

+ Configuration option to hide categories
+ Road map/Terrain support
+ Option to hide checkpoint table

#### v3.0.5 (21-Nov-2012)

* Error in Joomla 1.5 installer,  prevents from installing component

#### v3.0.4 (21-Nov-2012)

+ Link to edit track from front-end provided

#### v3.0.3 (21-Oct-2012)

* Pagination not working on listing page

#### v3.0.2 (13-Oct-2012)

* Installer unable to create default category on new installations

#### v3.0.1 (10-Oct-2012)

^ Do not show charts which do not have any data available

#### v3.0.0 (05-Oct-2012)

+ New Google Maps v3 and Charts v3 support. Now you can get rid of deprecated old Google APIs.
+ Content plugin to display tracks in Articles
+ Automatic Elevation Retrieval: Missing elevation data in your GPX/KML files? Do not worry, the component will automatically get them from the webservices for you and stores in cache.
+ Caching System: The data files will be processed once and used for subsequent requests. This will greatly reduces the usage of system resources as well as improves performance.
+ New Track information table to display important information about the track
+ New elevation profile and placemark details table for KML files
+ Revamped UI: New look and feel for front-end
+ Disqus Comments, Intensedebate Comments, Facebook Comments, JAComment, JComment support
+ CoreJoomla Library (CJLib) component support
+ Selecting theme right from the configuration
+ WYSIWYG and BBCode editor support improved
+ Simplified configuration
+ BBCode editor support
+ Editing submitted track details support (from front-end)
+ Add/modify track alias support from front-end

And many bugs were fixed during rewrite phase.

#### v2.0.2 (15-Mar-2012)

* Saving configuration deletes the HTML content of options
* Points not awarded for new tracks

#### v2.0.1 (20-Jan-2012)

* Hotpatch

#### v2.0.0 (21-Jan-2012)

+ New GPS Categories Module.
+ GPX Tracks module can now have default latitude, longitude and zoom options
+ Activity Stream Update: JomSocial can have like and comment
+ Limit activity stream length and add read more link
+ Points system update
+ Email notifications: New track notification to administrators
+ Moderation and automatic approval link in email
+ Unicode aware SEF urls
+ Moderation of Uploads
+ multiple plugin instances...or filtered views with categories and restrict upload to certain cats
+ Share track on Facebook
+ Independent modules
+ Remove Root
+ Plugin to share routes 
* Space in file name
* Category name not displayed when viewing category listing

#### v1.7.1 (14-Nov-2011)

* Bug in installer.
* Bug in configuration page

#### v1.7.0 (13-Nov-2011)

+ Automatic updation of waypoint data when a track is submitted.
* Error occurred while installing afresh in Joomla 1.7
* Configuration page produces 404 error when clicked on save button

#### v1.7.0 (13-Nov-2011)

+ GPX Tracks module to display all track start points on single map
* Several bug fixes related to Safari and IE
+ Rewrite of workflow
+ Rewrite of configuration page to easy maintenance
+ New maintenance tab in admin component

#### v1.5.6 & v1.6.2 (01-May-2011)

* Space in filename issue

#### v1.5.5 & v1.6.1 (30-Apr-2011)

+ GPS Tools module to display latest and popular tracks
* Language strings hard coded - moved to language file
* Space in file name causes track not being loaded

#### v1.5.4 & v1.6.0 (15-Mar-2011)

+ Joomla 1.6 support
+ jQuery plugin v1.5.0 & v1.6.1 support
* Performance improvements.

#### v1.5.3 (16-Feb-2011)

* Category count is not updated while submitting new track
* Unable to update category in backend
* Wrong version number in installer page

#### v1.5.2 (07-Feb-2011)

+ Option to configure Google Map & Charts width
+ Option to configure Google Map height
* Error occur while loading file in servers where cURL is not installed.

#### v1.5.1 (06-Feb-2011)

* Search functionality is not working properly

#### v1.5.0 (05-Feb-2011)

+ Complete rewrite of component
+ Configurable options to enable disable map type buttons on map
+ Measurement type can be configured
+ Speed scale can be configured
+ Google search bar inside the map to search map locations
+ Zoom and scale control options
+ Overview map control
+ Speed chart and Elevation chart implemented using Google charts
+ Configurable Track lines
+ Configurable check point colors
+ Templates to better use of all options for Check Point Tables
+ Configurable Gpx waypoint template
+ Server side processing of gps files
+ Multilevel categorization of tracks
+ Added category column to tracks list
* Slow loading of tracks
+ Track Terrain
+ Calculate Estimated Time To Complete Track
+ Edit tracks in frontend & delete them in backend
+ choose map type and buttons to change it on display
* Tracks don't show up
* Problems with IE8 and IE9
* Single clicks recording double hits

#### v1.0.1 (19-Nov-2010)

+ Extra features/buttons for profile of maps & chart
+ WYSIWYG editor support for description field
+ More human friendly date formats
+ Improved UI and layouts
* Show map and stats in fluid width
* Cursor in maps is not functioning under IE

#### v1.0.0 Initial release

+ First release