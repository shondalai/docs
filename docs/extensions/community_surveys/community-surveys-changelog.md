---
id: community-surveys-changelog
title: Community Surveys Changelog
sidebar_label: Community Surveys Changelog
sidebar_position: 24
---
# Community Surveys Changelog

v6.5.0/1 (05-Oct-2025)

+ Joomla 6 Compatibility Update
+ New feature - Generate Custom Reports (uses scheduled tasks)
^ Update copyright headers
* Unable to save 0 in textbox questions
* Fixed issues with PHP warnings
* Fixed issues related to dark mode

v6.4.1/2 (02-Mar-2025)

* Fixed database entry error
* Radio grid consolidated report do not show the question titles

v6.4.0 (08-Feb-2025)

+ Added button to close in progress responses
^ Set default date values in the install script
* Import survey json failed with error
* Unable to search survey titles on front-end search form
* Fixed issue with MySQL null dates

v6.3.9 (29-Nov-2024)

+ Update ChartJS library to latest version
^ Fixed UX related issues
* Unable sort by title on responses page
* CSV export header is added at bottom

v6.3.8 (23-Nov-2024)

* Unable to edit survey from front-end

v6.3.7 (01-Oct-2024)

* Fixed issue with CSV report download

v6.3.6 (27-Sep-2024)

* Updated Google sheets integration to allow latest APIs

v6.3.5 (11-Sep-2024)

* Fixed issue with loading survey on Joomla 4

v6.3.4 (30-Aug-2024)

+ Fixed issue with captcha plugins

v6.3.3 (10-Aug-2024)

* CSV Download file is not opening in Excel
* Fixed issue with report shown after response completion
* Fixed issue with loading JCE editor on page header question form

v6.3.2 (06-Aug-2024)

+ Allow 1000 responses to download in CSV report
* Applying limit filter is limiting number of questions in CSV download report
* JCE Editor is not loading when composing questions

v6.3.1 (08-Jul-2024)

* Revert changes for PDF generation

v6.3.0 (07-Jul-2024)

+ Send PDF Report: Improved PDF generation
+ Refactor response form layout for better developer support
+ Improved print/pdf button on results page
^ Renamed the buttons on survey form for better understandability
^ Removed TCPDF support
* Question customization body class does not apply to question body
* Fixed alignment of grid header on result page
* Answer selected for conditionally hidden question is not cleared
* Checkbox shown instead of radio in the grid question report

v6.2.3 (26-May-2024)

* Fixed the answer form layouts in survey builder page

v6.2.2 (25-May-2024)

+ Added support for handling failed emails in AcyMailing plugin
* Answer placeholders in question titles does not show correct values
* Custom placeholder option does not work in textbox and textarea type questions
* Fixed issue with ordering email templates
* Fixed PHP warning with editor plugin
* Fixed margin in the address field response form

v6.2.1 (23-Mar-2024)

+ Added support for Rewardify Points
+ Added options to show/hide individual fields in the Address question type
^ Added missing language string
* Fixed issue with slider question's last row border
* Fixed issue with smart search plugin
* Empty list is shown when the database option to allow null dates is disabled

v6.2.0 (02-Dec-2023)

+ New feature: Answer Presets & Bulk import answers
+ New question option to customize custom answers with regular expressions
+ Do not show already selected options in matching question type subquestions
* Create component specific language strings for Cancel, Save and Previous buttons
* Fixed issue with same color shown with multislider consolidated report charts
* Fixed the margin of batch button on admin toolbar

v6.1.1 (26-Sep-2023)

* Fix for install script failing

v6.1.0 (24-Sep-2023)

+ Breaking Change: Added support for Joomla 5
^ Breaking Change: Removed legacy layer for Joomla 3

v6.0.11 (09-Sep-2023)

* Unable to install the package on older MySQL databases
* Slider question tooltips overflow screen border on mobile devices

v6.0.10 (14-Aug-2023)

* Unable to install the extension when using MySQL 5.5

v6.0.9 (10-Aug-2023)

* Fixed issue with installer

v6.0.8 (08-Aug-2023)

+ Ignore survey redirect URL if there is a conditional rule to end survey with custom message
* Fixed issue with loading survey with Rich Text Editor question type
* Fixed issue with PHP7 function call
* Fixed issues with AcyMailing plugin
^ Few performance improvements with report queries

v6.0.7 (19-Jul-2023)

+ New option to show number textbox for answers in the sliders question type
* Fixed JavaScript error on responses list page
* Fixed issue with responding to survey using global survey URL
* Question types toolbar links are in dark color on Joomla 3 surveys form

v6.0.6 (27-Jun-2023)

+ New option to restrict maximum responses per user and per survey.
* Fixed JavaScript error when google charts not loaded on the report page.

v6.0.5 (04-Jun-2023)

^ Do not show survey title on the survey responses list items to save space
^ Move ID & Status columns on responses list report to front
* Fixed issue with database error message

v6.0.4 (23-May-2023)

* Responses menu page in administrator does not show contact name
* Fixed finder plugin issue in J4.3
* Fixed acymailing error on manual send
* Fixed installer bugs when upgrading from older versions
* Fixed issue with CSV file creation of large survey results
* Invite button do not give visual feedback when clicked and causing multiple clicks

v6.0.3 (25-Apr-2023)

+ Adding AUTHOR_NAME placeholder for invitation email subject
^ Replaced JFile/JFolder deprecated wrappers with respective file system functions
* Fixed issue with copy function of survey
* NPS report is not scaled properly on print to PDF report
* Fixed issues with mysql zerodate sqlmode

v6.0.2 (13-Apr-2023)

* Fixing issue with empty invitation email body

v6.0.1 (12-Apr-2023)

+ Adding AUTHOR_NAME tag in the invite email templates
^ Updated label of Hide Template option
^ Add better name to contact groups filter dropdown on invite page
^ Show Community Groups tab on Invite page only if relevant extension installed
^ Use global list limit by default on the  contacts listing section of invite page
* Clear the contacts info in the modal form after saving them
* Fixed issue with filters on consolidated report
* Fixed bug with creating new survey on a fresh installation (string mysql)
* Removed extra space below the introtext

v6.0.0 (02-Apr-2023)

+ Redirect users to login page if a non-logged in user access My Surveys or My Responses pages
+ Add Trash button on My Surveys listing page
+ Attach PDF response to thank you mail
+ New option to restrict maximum allowed invitations per survey
+ Adding button to trash/delete email templates
+ Adding a button to go back to languages list from translations form page
+ Adding support for inviting individual contacts in the invite contact groups page
+ Adding support for trashing/deleting surveys from My Surveys page
+ Adding support for searching surveys from My Surveys page
+ Show already uploaded file name in the File Upload question type when user navigate to previous page
^ Adding icon to the export link on My Surveys page
* Fixed issue with assigning contacts from front-end
* When marker is dragged the map is also getting dragged in Location type question
* Survey validation error element has invalid HTML markup
* Hide the start survey button when the user already took survey and error is shown
* Wrong name used in responses list header for response status column
* Use locale supported date format for the dates on invite page URLs section
* Fixed Javascript error on invitations page
* Removed redundant "Show Notice" option
* Remove redundant buttons on the backend responses listing page
* Finder plugin causing error
* Fixed error message shown when no surveys exist
* Fixed typo in email templates
* Fixed UX issues with invite pages on bootstrap 5 layout
* Fixed PHP notices on translations page

v5.9.6 (02-Mar-2023)

* Fixed error on multilingual site with no assiciations defined

v5.9.5 (01-Mar-2023)

* Editor is not loading after saving question

v5.9.4 (27-Feb-2023)

+ Show new question title help in placeholder
^ Code cleanup
* The consolidated report shows error when there are no choice questions in the survey
* Site throws error when CjLib component is uninstalled
* Fixed issue with advanced filter in consolidated report page
* Fixed error shown on new installation without any categories

v5.9.3 (05-Feb-2023)

* Missing font causing errors when creating pdf response
* Form layout menu shows erorr when SEF is disabled
* Consolidated report filters are not shown for surveys with large number of questions
* Removed unsued language strings

v5.9.2 (07-Nov-2022)

* Fixes for PHP 8.1 compatibility
* Admin surveys listing batch modal cannot be closed with close button
* Image type question breaks result page layout on bootstrap5 layout
* Fixed issue with Download PDF button does not work when filter rules are empty
* Fixed issue with sliders validation error is showing for multiple sliders
* Cannot use survey original description without processed by content plugins

v5.9.1 (09-Oct-2022)

+ Added support for PHP 8.1
^ Removed unused options and language strings
* Fixed error shown while editing survey on Joomla 3.10.x
* Consolidated report do not load properly when only NPS question present in survey
* Question customization options are not imported using JSON import file

v5.9.0 (30-July-2022)

+ Adding integration with Joomla privacy module
^ Removing redundant save as copy button in favor of import button
^ Increase the records limit of CSV report downloaded from dashboard page to 500
* Tags are not saving in Joomla 3.10 or later versions
* Survey import fails when the category id is empty
* Fixed unclosed HTML tag in NPS question
* Cannot take survey when the survey shown with Survey Form Module
* Page shows error when the component redirect to login/any page
* Added tfoot on Joomla3 admin list screens for consistent look
* Fixed issue with saving new translation language
* Fixed layout issue with backend responses list page

v5.8.3 (07-May-2022)

^ Adding content encoding to the exported CSV file
* Fixed issue with sliders question values not saved if the user does not move the slider
* Fixed the slider question form fields does not show with proper styles in bootstrap5 layout
* Text answers with value 0 are not saved in the response
* Fixed issue with value 0 not showing on the response report
* Consolidated report shows text answers of in-progress responses
* Multislider CSV export does not produce correct values
* Survey selection modal dialog does not show correct survey title

v5.8.2 (26-Mar-2022)

* CSV Download timed out for very large sets of data (no limit)
* Advanced filter do not work after applying filter

v5.8.1 (28-Jan-2022)

* When Redirect URL is used, the survey does not complete
* Fixed issue with showing CSV report for Multi-Input question type
* Fixed issue with single survey menu selection modal in Joomla3
* Single survey menu item is not editable

v5.8.0 (14-Jan-2022) 

+ New question type - Multiple Text Boxes
+ Added new RESPONDER_NAME tag in email templates
* Choose Different Report button does not work on backend in Joomla4
* Fixed layout display issue of invite contacts page on bootstrap5
* Fixed issue with survey report module do not show on Joomla 4
* Fixed issue with consolidated report do not show to guest users
* Editor button plugin does not open correct modal window
* Fixed issue with survey selection modal in Single Survey menu item

v5.7.4 (18-Dec-2021)

* Fixed issue with content plugin

v5.7.3 (01-Dec-2021) 

* Unable to export survey to json file from front-end
^ Small performance improvements with the content plugins
* Fixed issue with loading survey in an article using content plugin

v5.7.2 (28-Nov-2021) 

* Data labels values are incorrect on the slider question report
* The charts shown on Slider question consolidated report are too small
* The charts shown on Grid question consolidated report are too small

v5.7.1 (24-Nov-2021)

+ New option to send email notification to the email address in response
 submitted to the Email type question
^ Show percentage on data labels shown on the consolidated report charts
* Fixed issue with save button on email template form
* Show reports & invite links only to survey author and administrator
* Answers in ranking question report are not ordered properly
* Consolidated report does not summarize single slider responses

v5.7.0 (21-Oct-2021)

+ Added Google Sheets integration to sync new responses to Sheets
+ Added new option to show/hide extended options tab on front-end form
* Fixed issue with unpublish/trash links on front-end page not working+
* PHP warning message shown when editor plugin is enabled
* Fixed issue with tags field does not show correctly on the front-end

v5.6.7 (20-Sep-2021) 

* Removed unused options from category list menu item
* Fixed issue with the error when using category list menu item
* Fixed issue with tags field does not show correctly on the front-end

 v5.6.6 (05-Sep-2021) 

+ New "Default value" option for Calendar type question
+ New option (global and survey) to control the response workflow
* Survey creation form do not open when editor button is published
* Community Surveys - Surveys" plugin does not show user groups list in
the plugin configuration
* Fixed select box appearance in matching question (on bootstrap5)

v5.6.5 (24-Aug-2021)

+ Added new "Body CSS Class" option in question edit form
* Fix for Field CSS Class option does not apply to bootstrap3/4 layout
* Fixed issue with question title class option not applied
* Min/Max select select boxes appear as textbox in bootstrap5 form

v5.6.4 (19-Aug-2021)

+ Export surveys as json file and import json export files
* Fixed layout issues with question options
* Unable to save Name question response if title field is hidden
* Fixed styling in admin dashboard on Joomla 4
* Import button is non-responsive on Joomla 4
* Hide in report option do not hide question in response result report

v5.6.3 (21-Jul-2021)

^ Display tweaks with Bootstrap 5 layout reports pages
* Fixed issues in opening accordion tabs in front-end invite page (bs5)
* Fixed issues with dropdown on the front-end reports page with bs5
* Unable to print or download individual response pdf

v5.6.2 (18-Jul-2021)

+ Joomla 4 RC 4 support added
^ Added proper spacing below the blocks on advanced search page
^ PHP minimum version required for Joomla 4 is updated to 7
* Category page shows error when accessed through menu
* Error shows when trying to create single survey menu item
* Breadcrumbs for single survey menu item do not show menu alias
* Question types list on the left sidebar are not showin properly on IE
* Editor survey button do not work on frot-end editor

v5.6.1 (15-May-2021)

+ New import & export survey buttons in My Surveys page
* Consolidated report text response includes trashed responses

v5.6.0 (09-May-2021)

+ Added two new options in Map Location question type to accept default latitude and longitude values
^ Redirect user to the survey redirect URL if the survey URL is opened after completing the response
* Response is not saved when survey is embedded in an article
* Location map does not show marker groups in colored groups
* Map Location responses are not available in the CSV Report.
* Grid charts shows wrong labels in the chart legend
* Charts in sliders consolidated report shows smaller in size
* Grid report charts show smaller in size
* Star rating is not selectable on mobile devices
* Preview survey button on form page is not working in backend

v5.5.12 (25-Mar-2021)

+ PHP 8 support added
+ Added new layout to support Bootstrap 5 & Joomla v4 Beta 7
+ New option to configure show/hide chart data labels
* Consolidated reports charts do not display with special characters
* Single survey menu item do not show survey title on browser title bar

v5.5.11 (20-Feb-2021)

+ Added batch invitation reminder feature in survey reports page (Invitations)
+ Added data labels on doughnut charts
* Slider question report not showing on consolidated report

v5.5.10 (13-Feb-2021)

+ Added new question option to customize the HTML field CSS class name
^ Show answers in same order as they are added to avoid confusion
* View all text answers popup do not work if dates are in wrong format
* Print/PDF button shows 404 error when the advanced filter is applied
* Charts are not displayed properly in the print window
* The survey level options are not effective when showing survey using content plugin

v5.5.9 (26-Jan-2021)

+ Replacing Google charts with ChartJS in consolidated report
+ New choice for "Show Report" option to show consolidated report after user completing the response
+ Export survey invitation URLs in a file from invite page

v5.5.8 (23-Jan-2021)

+ New invitations page to see all invitations sent via invitations page

v5.5.7 (19-Jan-2021)

* Single page survey is closed only after second attempt

v5.5.6 (18-Jan-2021)

* Colors in pie and bar charts do not match in consolidated report

v5.5.5 (14-Jan-2021)

* Unable to select the marker on the location map

v5.5.4 (04-Jan-2021)

+ Added support for Openstreetmaps for location type question
+ Added new question customize option to show/hide description in report
* When custom answer is enabled, the validation not works properly

v5.5.3 (29-Nov-2020)

+ Added css class names to survey result page
+ Added css class names to question and description blocks.
* Show report option of the question is disabled by default
* Search function shows error when searching with 2 characters
* All image checkbox answers are not saved

v5.5.2 (30-Oct-2020)

* The installer failed to create tables when null dates are not allowed

v5.5.1 (18-Oct-2020)

* Slider report do not show on consolidated report

v5.5.0 (11-Oct-2020)

+ New plugin to integrate with Joomla Privacy framework
+ All questions and answers as a variable for e-mail template
+ New conditional rule outcome - Finalize survey with custom end of survey message
+ Added new option to switch to modern routing in Joomla 3.9.x
+ New option in survey results module to show/hide custom text answers
+ AcyMailing 6 support added
+ Show answers report of choice questions sorted by number of votes
^ Changed the zero date format to NULL dates for future compatibility
* Missing file type customization option of file upload question in bootstrap 4 layout
* Disallow the users to take survey if the access is not allowed
* JCE editor do not load when the questions loaded on the form page
* Translations of question title does not accept HTML tags

v5.4.9 (12-Aug-2020)

* Unable to submit mandatory checkbox question when using bootstrap3 layout
* View all Responses button on Consolidated Report Module is not working

v5.4.8 (18-Jul-2020)

* Unable to complete mandatory question which has custom answer

v5.4.7 (10-Jul-2020)

^ Joomla 4 Beta 2 support added
* Preview modal do not show close button on front-end when using bootstrap4 layout

v5.4.6 (21-Jun-2020)

* End of survey response report do not show sliders result
* Fixed css issues with choice question result

v5.4.5 (20-Jun-2020)

* Unable to start survey when using IE 11

v5.4.4 (10-Jun-2020)

^ Joomla 4 beta support
* Checkbox answers are not saved when custom answer is enabled

v5.4.3 (05-Jun-2020)

* Questions form submit automatically when a chat application loaded on the same page

v5.4.2 (31-May-2020)

* Slider questions results are not showing correctly

v5.4.1 (16-May-2020)

+ Added support for AcyMailing 6
* Contact name is not shown in consolidated report custom answers when the respondent is a contact in contact group
^ Custom answer should be enabled only by selecting checkbox/radio in choice type questions
^ Fallback to default layout when layout override file not found
* Applying filter in consolidated report redirect page back to home

v5.4.0 (20-Mar-2020)

+ Show images in Image type questions as clickable images
+ Added new filter to filter the translations based on its type
+ New feature: Send remind mail to complete the pending survey
+ Show asterisk icon beside the question title if the question is marked as mandatory.
+ Show datetime picker in the language of the survey being shown
+ New option to hide selected question from showing in the survey results/reports
+ Allow customizing title and description CSS classes for page header qn
+ Cancel Button URL: New option to customize cancel button URL
+ Allow a translation to be deleted by entering empty value
^ Removed unused scripts to improve performance
* Fixed the conflict with adminForm element name with other extensions
* Calendar labels are not translated in the survey language
* No validation message shown when all questions in mandatory grid question are not selected
* Validation error does not go away after selecting mandatory value in select boxes
* Translations are not deleted when the question is deleted
* Translations not shown on listing page when using language switcher module
* Empty title is shown on listing page when the title is not translated in the language
* Data from survey rules and tracking tables are not cleared when permanently deleting the survey
* An extra empty page is created when importing a survey from xml file
* Fixed a case where registered users unable to respond to survey
* name field in result page do not show correctly when using bootstrap3/bootstrap4 layout
* Survey results module do not show all charts

v5.3.4 (11-Jan-2020)

+ New question type - URL Parameter (Hidden)
^ Show validator message as soon as a field is changed
* Calendar box shows on last question when there are multiple calendar questions on the survey page
* Rating widget do not shown when using content plugin to display survey

v5.3.3 (03-Jan-2020)

+ Added new sef tag for lang url parameter in language translations
* Surveys listing page do not show the translation of titles and descriptions
* Unicode urls are not created when saving the items
* Calendar box shows on last question when there are multiple calendar questions on the survey page

v5.3.2 (21-Nov-2019)

+ Show invited contact name in responses listing and csv download
* Unable to download csv file when redirect to reports from invite page

v5.3.1 (05-Nov-2019)

* Fixed issue with the input box in calendar question

v5.3.0 (16-Oct-2019)

+ New question type: SQL Select to select answers using SQL query
+ New question type: Map Location to select location on the Google map
+ New option to limit max number of characters in text fields
+ New multisliders feature for sliders questions
+ Support to restrict max points selected for multisliders
+ Support for slider question in pdf report attached in email
+ Added 6 different themes of sliders
+ Added icons to the survey navigation buttons
+ Added new module positions (see documentation for updates)
+ Added Sociable support
^ Joomla 4 alpha 11 compatibility updates
* Calendar field do not show when clicking on the button
* Conditionally hidden questions are not shown in pdf and results page
* Question description cannot be saved when using TinyMCE editor
* Added missing language string for EasySocial user points setup
* Ranking question orders consolidated report items in incorrect order
* XML export of survey does not include question customization options

v5.2.2 (08-Sep-2019)

* Survey translations table missing column and causing error
* Joomla 4 alpha 11 compatibility updates

v5.2.1 (30-Aug-2019)

* Grid questions shows duplicate answers in mobile view

v5.2.0 (26-Aug-2019)

+ New feature: Added multi-language support for the surveys
* Date field does not work in the backend question edit form
* Users with access to administration access cannot download csv report

v5.1.8 (13-Aug-2019)

* NPS question result is not exported in CSV file
* Last question of the CSV report is not exported correctly
* Questions in csv report are not sorted based on pages order

v5.1.7 (11-Aug-2019)

+ Added Sociable support
^ Stylize radio buttons and checkboxes on all types of templates
^ Removed Google+ references
* Hidden questions results are not shown on admin reports page
* Hover on elements with tooltips disappear if mootools loaded on page
* PHP warning message shown in response result page
* Custom answers are not added to CSV report file
* Editor button plugin do not respond when selecting survey

v5.1.6 (22-Jun-2019)

* Required flag do not work with matching type question
* Conditional rules do not work with text boxes
* Star rating values are not shown in the response details
* Previous button is not shown when intro disabled and retaking survey

v5.1.5 (15-Jun-2019)

* Custom answer given in ranking questions is not saved
* Unable to continue with response when the page has multirating type questions

v5.1.4 (14-Jun-2019)

* Print to PDF takes too much server memory, switched to browser side print to PDF option
* Multiple language categories are not shown on front-end
* Radio grid question headers are not aligned properly
* PHP warning message shown on survey results module

v5.1.3 (02-Jun-2019)

^ Joomla 4 alpha9 support
* Error while saving single survey menu item
* Strip html tags of introtext in surveys listing

v5.1.2 (08-May-2019)

+ Added options to configure min/max dates for calendar question
+ Added new option in Name field to hide Title part of the name
+ CSV report download now shows grid questions in separate columns
* Editor is not loading on questions form when loading pages
* Checkbox grid answers are not saved when using bootstrap 4 layout
* Fixed css issues with bootstrap 4 layout
* NPS question type mandatory flag is not working
* Response page stuck after submitting answers when no sortable fields exist on the form
* Content plugin does not show survey description
* Survey description shows empty text
* Editor button to insert survey shortcode is not working
* Front-end consolidated report do not show question filters

v5.1.1 (15-Mar-2019)

+ Radio Grid type question is upgraded to support mobile view
+ Added a new option to customize allowed file types at question level in the file upload question type
^ Updated DateTime picker control with a better plugin
* The validation messages do not hide after moving to next page
* Custom answer entered in the grid question is not showing in the result page
* Edit does not load all buttons after saving the question
* Captcha cannot be validated when guest users taking survey
* Backend responses listing does not show correctly on Joomla 4
* Advanced filter do not work when there are no choice type questions
* Ranking question answers are duplicated on consolidated report
* Export CSV downloads only first 20 rows

v5.1.0 (16-Feb-2019)

+ Added support for FontAwesome/Bootstrap styled Checkboxes and Radio buttons in the response form
+ New option in Surveys plugin to send survey notification to a custom list of users
+ New option in Surveys plugin to send response notification to a custom list of users 
+ New survey option to send email notification about the new response to custom email ids
+ Added link to the changelog of the component in the dashboard page
+ Added new option to customize multirating question rating hints
^ Changed the help text of the single survey menu item
^ Updated copyright year
* Private survey URL lost survey key after user login redirect
* Color of responses count on the consolidated report is too dark when dark theme is selected
* Wrong placeholder text shown in start/end date filters in the response page
* When filtering on the date in responses page, DB error is thrown
* Latest available version is not showing on dashboard

v5.0.8 (19-Dec-2018)

* Unable to save surveys in Joomla 3

v5.0.7 (18-Dec-2018)

+ New feature to add comments to responses from backend reports
+ Add survey title to the reports pages
^ Redirect to the previous page when the cancel button is clicked on reports
^ Replaced RuntimeException with Exception
* Unexpected quote character shown after image radio answers
* Default layout does not show questions edit form

v5.0.6 (07-Nov-2018)

* Unable to change the min/max selections option in Image Checkbox question type
* Conditional rule is not working to skip to a page when the question is unanswered
* Response report shows answers of name type question with "|" names separator

v5.0.5 (07-Oct-2018)

* Free text responses are not shown when filters are applied.

v5.0.4 (05-Oct-2018)

* Hotfix for v5.0.3, the corrupted package file

v5.0.3 (04-Oct-2018)

* Component cannot be loaded when using Joomla 3.6.5
* Preview questions page shows the same questions multiple times
* Consolidated report does not show custom answers when the filter is applied

v5.0.2 (21-Sep-2018)

* Consolidated report shows error when applying filters
* The total number of responses shows on question header of the consolidated report does not match with actual numbers
* No spacing between admin links on front-end survey listing

v5.0.1 (17-Sep-2018)

* PDF report of the responses contains empty results

v5.0.0 (16-Sep-2018)

+ Joomla 4 compatibility updates (Full rewrite of code)
+ New Bootstrap 4 based layout/theme
+ New router with remove IDs capability
+ New email type to send thank you email to users after responding to survey 
+ Send notification emails to guest users based on name and email question type responses
+ Redirect guest users to the login page when they access report pages
+ Hide questions in report page which are skipped with conditional rules
+ Click on the table cell selects radio/checkbox in grid-type questions
^ Added custom class names to all question blocks in response and reports pages
^ Unauthorised guest users should redirect to login page when trying to access the survey
^ Applied bootstrap styling for textarea form controls on the response page
* Multiple response restrictions cannot be removed
* TextArea question type box width is not automatically adjusted
* Response form go to next page only when clicking continue button two times when the form contains freetext type questions
* PDF response shows all questions which are hidden with conditional rules
* tcpdf library throws an error in PHP 7
* Email notifications contain non-SSL URLs
* Content plugin executing other content plugins for survey description
* Captcha loading is failed
* Added missing language string
* User response report do not hide questions hidden with conditional rules
* Modified by username do not show login name

v4.7.4 (28-Jun-2018)

+ Allow exporting unique survey URLs list to a CSV file from invite page
+ Show publish down the date on backend surveys listing page
* The bar chart on pdf export file is wrapped when the percentage is too low.
* Cannot view survey when no permissions are configured.
* Consolidated report shows empty even through responses available

v4.7.3 (06-Jun-2018)

* Consolidated report PDF download shows no content after update

v4.7.2 (30-May-2018)

+ GDPR Compliance: Allow users to download all responses in a HTML file

v4.7.1 (10-May-2018)

* Advanced filter in responses listing page is not working
* After update, the tag `{SURVEY_TITLE}` doesn't work in emails to Admins and Users.

v4.7.0 (05-May-2018)

+ Allow custom placeholder text in Custom Answer text box
+ Added option Show Survey Title in survey edit page
^ Moved hardcoded value for cancel rating text to language file
^ Improved version of advanced filter on consolidated report page
* Removed duplicate show tags configuration option
* Answers for NPS question type are not included in the csv report
* Changing filter values on responses listing page do not submit form

v4.6.6 (01-Apr-2018)

+ New config option to show/hide current page title on response page
+ Add "mandatory" css class for mandatory questions block
* Response status filter not working on responses list with pending responses
* Charts are not aligned properly in grid chart report page
* Conditionally hidden questions causing page to jump to top

v4.6.4 (09-Feb-2018)

^ MySQL 5.7 compatibility changes
^ Delete PDF report after deleting a response
* Last response in CSV report is always missing
* Deleting a response do not change the response hits of survey

v4.6.3 (16-Jan-2018)

+ Accessibility compatibility changes according to WCAG 2.0 standards
+ Allow custom answers in consolidated report pdf export file
+ Include responses from special question types in consolidated report pdf download

v4.6.2 (14-Jan-2018)

* CSV file download is broken after updating to last release

v4.6.1 (09-Jan-2018)

^ Updated default character set of tables to utf8mb4_unicode_ci
* Custom header message is not hidden after completing response
* Download CSV does not respect filters applied to the responses list

v4.6.0 (27-Dec-2017)

+ New question type: Checkbox Grid
+ Added filter to show selected number of custom answers in consolidated report
+ Support for adding `{SURVEY_TITLE}` placeholder in invite email subject
^ Enable sorting of rank question answers on mobile devices
^ Removed unused code
^ Consolidated report elements are organized for better printing results
* New response created on first page load when show intro is disabled
* Combo box options are hidden when the question is shown with conditional rule
* User rating is not shown on the results page after taking survey
* User with manage access cannot see reports link unless edit permission is given
* onResponseAfterSaveQuestions event is not working
* Conditional rules validation do not work on chained rules
* Cannot edit survey from frontend again once opened it
* Survey response stuck when taking survey from Survey Form module 
* Content plugin do not render survey response

v4.5.5 (06-Oct-2017)

+ Added Alta User Points support
^ Remove views directories from old versions
^ Arrange the answers according to slider position
* Sliders question do not display tooltips in case of numeric answers

v4.5.4 (11-Sep-2017)

+ Ranking: New question type to allow users to rank set of answers
+ Net Promoter Score: New question type to evaluate NPS
+ Slider: New question type to allow users to select options using slider
+ Signature: New question type to allow users to draw their signature
* Pie chart in consolidated report shows wrong values

v4.5.2/3 (05-Sep-2017)

* Responses are not showing in reports page

v4.5.0/1 (02-Sep-2017)

+ Add response completion date in CSV download
+ New event trigger onResponseBeforeSave($context, $questions, $answers)
+ New event trigger onResponseAfterSave($context, $questions, $answers)
+ Added altauserpoints plugin file in the package
+ Add custom answer for each rating line in Multi rating question
+ Redirect guest users to login page when they access survey without permission
+ Show last answered page when the user returns to the same survey later
+ Add invite link in My Surveys page
+ New preview questions button on survey questions form
+ New email type: Send thank you email to users after responding to survey
^ Do not show responses which are not started yet
^ Updated copyright year
* Conditional rules do not work on multi rating questions
* Default error message is shown when the form is first time validated
* Responses are not saved when using page class suffix
* Community Surveys module shows error when published on non-survey page
* PHP notice message on multi rating type questions (in strict mode)
* HTML tags are removed while importing the survey from XML file.
* Users with manage access cannot view reports of other users surveys
* View Reports link from email notification shows 403 error

v4.4.0 (03-Jun-2017)

+ Allow placeholders to show the response of previous page questions in the current question title.
+ Allow reordering pages in edit questions page
* Screen blocks after showing message during response
* CSV report throws errors
* Validation messages do not hide on some templates
* My Surveys page shows duplicate rows.
* PDF response download shows error when there is an image question present
* Conditional rules are not imported while importing survey from XML
* Copy survey function do not copy conditional rules to new survey
* Copy question function do not copy conditional rules to new question

v4.3.5 (10-Mar-2017)

* Response form name conflicts with few chat apps
* Title in responses list page should show response details

v4.3.4 (25-Feb-2017)

+ New option to customize chart colors in consolidated reports
+ Added support wrapper for Lotus android app

v4.3.3 (07-Feb-2017)

* Questions cannot be reordered after saving
* Multiple surveys cannot be shown on same article using content plugin
* Error occurred while showing surveys listing

v4.3.2 (11-Jan-2017)

* Mandatory option is not working

v4.3.1 (09-Jan-2017)

* Cannot change image for the image type questions

v4.3.0 (25-Dec-2016)

+ Show name as first and last name in Name type field
+ Added response state column in csv report
+ Added response key to the view report link sent through email to allow report accessible to other admin users
+ New advanced filter in responses listing report to filter responses based on user answers
+ Added debug mode option to debug issues in setup
+ Show RC codes only during debug mode enabled, hide them while taking survey.
+ Show link to user answers report when user trying to take already taken survey
+ Show print button to print user answers report
+ New feature to generate consolidated report with filtering selected user answers
+ New dropdown box to jump to desired page when taking survey
+ New option in responses list report to re-open a closed response
^ Rearranged some integration options in component options
^ Increased default size of the question title database column to 2048 bytes
^ Changes string "Recent Surveys" to "All Surveys"
* Guest response cannot be finalized due to cache system
* Show choice answers inline in reports page when form is shown as inline
* Reorder questions do not save new ordering
* Invite page unable to generate sef urls
* Hiding title and description of survey still shows empty block
* PDF report do not include textbox type questions
* User is not allowed to take survey again even after the previous response is trashed
* Survey could not be completed when using IE8 with compatibility mode
* Surveys cannot be ordered using options
* Removed deprecated constructor in acymailing plugin

v4.2.3 (27-Sep-2016)

* After update to last release, survey editor button causing error
* Duplicate emails being sent for notifications

v4.2.2 (26-Sep-2016)

+ New options to autofill username and email id from logged in user details in respective question types
+ Added user email in csv download for onymous surveys
+ New option to choose pdf font for generating reports and response pdf
^ Added new css class for customization for selected answer in results page
* Toolbar dropdown toggle buttons do not hide in mobile view
* Activity stream contains administrator url when survey is created from admin site
* Show confidentiality message option is not shown
* Disabling Show Title option hides survey description as well
* Skip email queue option does not work on user responses

v4.2.1 (08-Aug-2016)

+ Added new visualization with donut charts for grid consolidated report
^ Changed pie chart to donut chart in consolidated report
* Username is not displayed in emails

v4.2.0 (05-Aug-2016)

+ Added new option in Community Surveys plugin to send email notification to admin user group for all new responses
* Data in name field is not duplicated when retaking the survey by same user
* JS error on ajax response in form page
* Surveys list items not aligned properly when html content present in description
* PDF report shows one star less with multirating question
* state field is not created during upgrade
* User avatar is misaligned in bootstrap3 layouts
* Joomla user id is not gets captured with AcyMailing invites
* User display name toggle option is not available in new release

v4.1.9 (12-June-2016)

* Force Show template option could not be overridden
* Pressing enter button in a survey page submits form causing survey to finish
* PDF file download of consolidated report do not have .pdf extension
* Chosen search won't find any results in selectboxes due to line breaks
* Only 20 invitations are sent when inviting registered user groups
* Reports module throws error when published on CB page

v4.1.8 (08-May-2016)

+ Added option to skip email queue and send emails directly
* Formatting of name question type is missing in csv report
* Min/Max selections options are not working properly
* Can't hide categories title

v4.1.7 (24-Apr-2016)

+ New editor button plugin to insert survey into Joomla! articles
* Unpublish button on survey details page shows error
* Custom header do not show on survey pages
* Dropdown box do not show properly in matching type question
* Language strings not loaded in consolidated report module
* Cancel button redirects to homepage
* View Reports link is hidden to the users in admin site when survey is locked by author
* Show end message before redirecting to custom redirect url
* Rich textbox type question do not show view all textanswers link
* Pressing enter keyboard button on a survey field do not work properly
* Added "Show Cancel Button" option in admin form/options
* Few individual survey option overrides do not apply to surveys

v4.1.6 (07-Apr-2016)

* Unable to set select box type question as mandatory
* reCaptcha is broken after Joomla 3.5.1 upgrade

v4.1.5 (01-Apr-2016)

^ Improved invite contact groups page with contacts pagination and filters
* Star rating takes multiple clicks to select
* Unable to save or delete survey

v4.1.4 (22-03-2016)

^ Joomla 3.5 compatibility updates

v4.1.2/3 (16-Mar-2016)

* Content plugin throw error when show intro option is disabled
* Export pdf option do not work when there is an image present in questions
* Display survey in articles using content plugin throws error

v4.1.1 (28-Feb-2016)

+ Support for Save2Copy from front-end survey form
+ Support for html content in question title
^ Changed social sharing buttons to display using corejoomla socials plugin
^ Automatically detect user id from the invite url even if user not logged in
* Show Title option cannot hide title bar
* Cannot create pdf response 
* Content plugin throws error
* Wrong name in easysocial points rule causing points not getting awarded
* Users with edit state permission cannot make survey online
* Cancel button on reports section not working
* Wrong message shown to users when the auto approval is disabled and the user survey is sent to approval
* Date fields in consolidated survey report does not popup
* Bar colors in consolidated report PDF download are not shown
* Validations should be skipped on questions which are hidden with conditional rules 

v4.1.0 (07-Feb-2016)

+ Added advanced filter in responses list report
+ Added advanced filter in consolidated report
+ Added PDF download option in consolidated report
+ Added survey counts in categories page (Joomla 3.5 and above)
+ Added AlphaUserPoints autosearch rules file in package to allow auto scanning rules
+ Option to choose UI layout per survey basis along with global option
+ Links in My Responses list to point to user response details page
+ Support for awarding custom points per survey (admin only)
+ Support for restricting user responses based on country
* PDF report not attached to the survey response emails
* Cannot download response details in pdf
* Copy survey option does not copy questions
* Export to CSV does not support few unicode character sets, fixed
* Show/hide previous button option do not work
* Multirating question in results page do not show stars
* Do not check geo location details when anonymous option is selected
* Images in PDF export causes error
* Cookie restriction do not work on certain conditions
* Error shown if consolidated report module published on survey pages
* Emails not sent to administrators after new response
* reCaptcha does not show after migrating to v4.0.2
* Conditional rules do not show when the questions loaded on form page
* Google Chart does not show on consolidated report if many charts loaded on the page
* Content plugins cannot be used with questions description
* Categories do not show for authorized users on form page when survey created from category page
* Survey start and end dates cannot be editable

v4.0.2 (04-Dec-2015)

+ Added support for inviting EasySocial User Groups
+ Added configuration options to hide most of the optional elements on listing page
+ Show staus of the response in responses listing page on reports section
^ Show create survey button on toolbar only if user has create permission on atleast one category 
^ Show survey start and end date fields on form page to survey author
* Size of multirating stars is too small
* Users with manage access canot send invitations to registered users
* Users with manage access cannot unpublish survey
* Users with edit own state permission cannot unpublish their surveys
* Multiple response restriction options cannot be unset
* Trending surveys on backend listing is empty
* Few strings do not have language strings in language file
* Address type and multirating questions cannot set as required

v4.0.1 (25-Nov-2015)

+ Option to show/hide toolbar
^ Do not link title to survey page when survey is displayed through module or content plugin
^ Show total responses on each question in consolidated report.
^ Show only categories which user has create permission in form page
* Star rating hints cannot be translated
* Custom class names of question do not work
* Survey responses do not populate on when an anonymous survey is reopened
* Show question rule does not work after upgrade
* Consolidated Report module shows error when published outside of component

v4.0.0 (15-Nov-2015)

+ Ajax Responses: Surveys can now be taken without any page refresh, using ajax.
+ New Router: Now your survey URLs are more search engine friendly, you can even customize them using your menu items.
+ Two New Themes: Two new themes one for Bootstrap 2 and other for Bootstrap 3.
+ New content plugin to insert surveys in articles
+ 6 New Color Options: 6 color themes added, can be configured from options
+ New Rating question type is added
+ Email templates can be configured using new email templates page from the backend
+ Support for Joomla! Automatic Updates is added 
+ Invitations page is redesigned to fix many bugs and adds end-to-end functionality on the same page. 
+ Surveys listing pages on the backend is redesigned to match other Joomla core components and look and feel the same way. Multiple filtering options are added for easy navigation. 
+ Front-end listing page is redesigned for better look and feel.
+ Support for trash and restore surveys is added. 
+ New checks in place to disallow multiple users editing the same survey.
+ Now permissions can be configured at Global, Category or Survey level.
+ New permissions to allow/disallow editing own surveys, edit own survey state
+ Added a new page on the backend to show and manage the list of responses across all surveys. 
+ Added support for export and import of the surveys.
+ Added support for Joomla automatic updates
- Removed support for Joomla 2.5
+ New My Surveys page for front-end users to view and manage their surveys.
+ CjForum Support Added: Added the support for CjForum avatars, activity stream and points system. 
+ A new plugin is introduced to customize emails, activity and points system events.
+ New configuration option to choose the default Joomla editor to use in the component
+ New configuration options to show/hide elements on front-end listing page and survey details page.
+ Survey specific configuration options to override global options
+ Permissions now can be configured at global, category and survey level
+ Now you can use avatars and user profile pages of two different supported systems
+ New daily trends report on survey reports dashboard
+ Redesigned locations report with locations shown on map
+ Redesigned browsers report page with browsers grouped by browser type. Support for export added.
+ Redesigned consolidated report, now can view all text responses on the same page.
+ Added support for importing and exporting surveys

v3.8.4 (01-Oct-2015)

+ EasySocial stream support added
^ Joomla 2.5 compatibility updates
^ Display custom answers in consolidated report
- Joomla 2.5 support ended, last update for Joomla 2.5
* Custom answers not shown in consolidated report.
* Activity stream after taking survey is not sent
* Answers not displayed in order in consolidated report
* Users with manage permissions cannot view reports link on front-end
* New response notification is not being sent
* Form page should show only categories with create permission
* JavaScript error occur on respond page
* Consolidated report produces error if no choice type questions present in survey

v3.8.3 (03-June-2015)

* Duplicate response id getting created for non-anonymous surveys

v3.8.2 (16-May-2015)

* User IDs in keys table gets reset when invitations sent
* User id is not saved when inviting registered user groups
* Show custom answers of all users in the consolidated report
* Progress bar on response form should be shown in full width

v3.8.1 (04-Apr-2015)

+ Added support to hide page header type questions using conditional rules
* Editor not loading when a question is created using ajax
* User id is not getting captured when survey keys are created using AcyMailing

v3.8.0 (12-Mar-2015)

+ Added new options for questions to customize custom CSS classes for title, description, and question
+ Added new options to customize CSS classes
+ Added support for searching surveys by id.
+ Added custom regular expression validation support for textbox, textarea, and password type questions
* Number of responses received disclosed when guest responses are allowed.
* Response details do not auto-populate if the same response restarted later

v3.7.6 (22-Jan-2015)

* HotFix

v3.7.5 (22-Jan-2015)

* Validation rules for answered/unanswered rules does not work

v3.7.4 (20-Jan-2015)

^ Front-end listing CSS adjustments

v3.7.3 (18-Jan-2015)

* Unable to take the private survey if intro text is disabled.
* Question shown on same page with rule does not hide when an answer is deselected
* Charts on consolidated survey page are not showing up
* Charts does not load on reports page
* CSV file splits the lines if question title or answer contain newline character
* Unicode characters does not show properly on csv download
^ The width of custom answer textbox is too small

v3.7.2 (14-Nov-2014)

* Answers and questions cannot be sortable initially when survey created.
* When answers are sorting, add answer button is also being sortable.
* Printing user response report produces 401 error
* Guests can see responses of other guest users.

v3.7.1 (22-Oct-2014)

* Questions form freezes when creating new question
* Printing consolidated report hides progress bars
* Added styles to move each question to separate page in print consolidated view
* Added fixes for notice messages being displayed when error reporting turned on
* Wrong column name of user id being inserted to keys table

v3.7.0 (05-Oct-2014)

+ Added new configuration option to limit maximum image upload size for image questions
+ New conditional rule - Display question on same page based on

the answer selected on other question

+ Performance improvements - added indexes to database tables

for faster loading of data

+ New survey form option to enable/disable Save button
+ Lightbox display on click of the image in image choice

questions arranged in row

+ Feature to enable tracking of guest users if they are invited through registered user groups invitation method
+ Option to enable or disable embed pdf report in admin/survey author emails when users respond to survey
* Information icons are not shown on survey form page
* Warning message of using usort on null value

v3.6.9 (28-Aug-2014)

+ Sort answers in consolidated report by number of votes the answers received.
* Min/max selections rule does not work properly when min selections set to 0
* Missing language string for displaying survey not yet up message.

v3.6.8 (04-Aug-2014)

* Blank pdf report is being send through email when guest users responded to a survey.

v3.6.7 (28-July-2014)

+ Attach PDF report in email to survey owner when a user respond to the survey
+ Range selection support for grid type questions to force users to answer only desired number of answers
+ Save button on response pages to allow users to draft save questions on the current page
+ Updated icons to new FontAwesome icons
* Survey form module does not show new question types
* Fixed issues with copy survey feature

v3.6.6 (14-Jun-2014)

* Multiple response restriction settings not copied when duplicating survey
* Page title not copied to duplicated survey

v3.6.5 (18-May-2014)

+ Added feature to display answers selected by user in consolidated (Courtesy)
+ EasySocial User Avatars, Profile Linking, Points System support
* Shows wrong Community Surveys version

v3.6.4 (30-Apr-2014)

* Image is not being saved in image type question
* Report can be viewable by users even if it is displayed in survey
* JomSocial groups in invitation page are showing multiple times

v3.6.3 (13-Mar-2014)

* Survey not loaded on Survey Form module if the survey has only one page
* Unable to respond to survey when the anonymous mode is selected

v3.6.2 (11-Mar-2014)

* Delete and drag buttons for questions are not shown on backend form

v3.6.1 (05-Mar-2014)

^ Updated FontAwesome library to v4
* Download PDF produces an error

v3.6.0 (23-Jan-2014)

+ Restrict minimum and maximum allowable answers, a user can select
* File upload in image question does not work on Safari
* Unique global survey URL on admin page does not contain itemid

v3.5.10 (14-Jan-2014)

* Invitation URLs produced while creating on invite page are wrong
* Blank value displayed at a number of votes block in the consolidated report
* Private survey URL with the unique key does not work properly

v3.5.9 (17-Dec-2013)

+ Support for image type questions in PDF export
* User points not deducted for invitations, when points deduction enabled
* Private survey cannot proceed from the intro page

v3.5.8 (4-Dec-2013)

+ Ability to restrict survey listings by category through the menu item
^ Revamped new response handling with better error messages and better debugging
^ Joomla 3.2 support

v3.5.7 (11-Nov-2013)

* Survey not redirected to the redirect URL/report when the same user takes the survey again.

v3.5.6 (23-Oct-2013)

+ Export images in image type questions to the pdf report
+ Send notification after user survey approved by admin

v3.5.5 (21-Oct-2013)

* Unique URLs containing "administrator" makes them unusable

v3.5.4 (20-Oct-2013)

* Error while sending admin notifications

v3.5.2/v3.5.3 (08-Oct-2013)

+ Now you can add title to each page to identify pages easily
+ Reorder pages with drag and drop support
+ Select dates using calendar control on survey form
+ Copy survey
+ Zip code in address question type does not accept UK zip codes which may not be numeric
* IP Address restriction not working
* Survey key not exported in file downloaded from admin site reports section

v3.5.1 (05-Sep-2013)

^ Added survey key in CSV download file
^ Record user identifiable information when inviting multiple users through invite page
* Unpublished survey should not be accessible even through private URLs
* Unicode characters not appearing in PDF download

v3.5.0 (29-July-2013)

+ New question type: Name (Title, First Name, Last Name fields)
+ New question type: Email with proper validations
+ New question type: Calendar with date and time
+ New question type: Address including Full Name, Address Line 1 & 2, City, State, Zip, Country
+ Geo Map to display the heat map of all responses received on a survey'
+ User avatars on responses listing on front-end
+ Better organized question types toolbar on front-end form
+ Top Countries listing on back-end reporting page
* Grid answers not ordered properly in CSV downloads
* Questions in response form are not aligned properly on few old browsers
* Missing language string for alerting when max responses limit is reached
* User unable to view his response submitted through response details page
^ Grid columns in response details are not center aligned
^ Prefetch users profiles to reduce load on DB (available only on CjBlog & Kunena profiles).

v3.3.9 (29-Jun-2013)

* Unable to delete responses from front-end
^ Updated to use latest version of CjLib component

v3.3.8 (17-Jun-2013)

+ Redirect guest users to login page if they are restricted from responding to surveys
* Category list is not working

v3.3.7 (23-May-2013)

+ Copy survey functionality on front-end
* Unable to delete first page

v3.3.6 (22-May-2013)

* Custom page header is not showing on response page

v3.3.5 (14-May-2013)

+ Language aware categories on front-end
* Error message shown on response page for grid question
* Unable to save contact if the email is already used

v3.3.4 (19-Apr-2013)

* HTML is stripped of in introtext box

v3.3.3 (17-Apr-2013)

+ reCaptcha support for public surveys
+ Two new module positions in survey results page -  surveys-results-top, surveys-results-bottom

v3.3.1/2 (09-Apr-2013)

* Registered users cannot take anonymous surveys

v3.3.0 (09-Apr-2013)

+ PDF report downloads
+ Per survey multiple vote restriction methods - cookie, ip, username
+ Copy question facility to duplicate existing questions
+ Configuration option to show/hide search box
+ Configuration option to show/hide response count box
+ Configuration option to show/hide survey meta information
* Registered users not able to upload image for image answers in survey creation
* Untranslated message is shown when an error occurred while taking the survey
* Deleting responses in responses list will not delete them in the consolidated report

v3.2.0 (03-Apr-2013)

+ Reports access and csv download access from the back-end
+ Configuration option to include user emails in csv download report (for registered users)
+ Permission settings now respect category-specific permission settings
+ Configuration option to turn on/off the toolbar on front-end
+ Configuration option to turn on/off the toolbar while user responding to survey
+ Configuration option to choose number of columns in which category list will be displayed on front-end
* Question ordering resets when questions in another page are ordered
* Filters in responses report redirects page to home page

v3.1.5 (01-Apr-2013)

^ Center the response form and set max-width to display response form correctly on large screens.

v3.1.4 (30-Mar-2013)

+ Ability to select survey creator from backend form
+ Display survey key in backend listing page for easy access
* Text input questions can't be set as mandatory

v3.1.3 (27-Mar-2013)

* Copy survey button is not working
* Survey URL link contains administrator uri in backend invite page
* Cannot auto approve survey from front-end

v3.1.2 (25-Mar-2013)

+ Select survey creator name from backend form to allow creation of surveys on different user name
* Copy survey feature does not copy all fields.

v3.1.1 (23-Mar-2013)

* Unable to take survey from survey response layout.

v3.1.0 (22-Mar-2013)

+ Back-end form. Now create and edit surveys from back-end as well.

v3.0.4 (21-03-2013)

+ New "All Surveys" tab to view all surveys (for administrators only)
+ New survey option to show or hide progress bar (for multipage surveys only)
+ New survey option to allow use to select if notification about new responses be sent

v3.0.3 (20-03-2013)

* 500 error after user response if admin notification is enabled.

v3.0.2 (19-Mar-2013)

+ New survey option to display confidentiality notice (enable it to make survey more transparent)
* Missing language string in responses report
* Email not sent to survey creator on new responses

v3.0.1 (15-Mar-2013)

* Menu item to individual survey form layout is missing

v3.0.0 (14-Mar-2013)

+ Joomla 3 support
+ Full rewrite using Bootstrap framework
+ New "Select one image" and "Select multiple images" question types
+ New categories system to categorize surveys
+ Now conditional rules can be applied to choice, grid, image and textbox questions
+ New permission rule to moderate user surveys before they get published
+ New quick link to directly edit questions and skip editing survey options
+ Enhanced drag and drop support for questions in edit questions page
+ Invite AcyMailing lists support
+ New Skip Intro Page Survey option to let users see survey questions directly
+ New Back Navigation survey option to enable navigation to previous page in a multipage survey
+ New accordion view to quickly and easily edit questions
+ New Reports Dashboard page for users to view latest responses, daily response chart, quick statistics at one place
+ Enhanced consolidated report page to view report with bar chart and pie chart for quick access to results
+ New Pie chart result view of Operating Systems report
+ New administrator dashboard page
+ New permission rule to restrict users from editing own surveys
+ CjBlog avatar support
+ CjBlog points system support
+ Support for moving question to another page
+ CSV import function for importing contacts to address book

v2.0.12 (08-Feb-2013)

* Unable to send messages from the queue

v2.0.11 (01-Feb-2013)

* Updating other users survey with manage access changes username
* Unable to delete other users survey responses with manage access.

v2.0.10 (30-Jan-2013)

* Page gets refresh after removing the page
* Unable to save answers with value "0"

v2.0.9 (24-Dec-2012)

+ Display page number of currently viewing page
+ Display progress bar of the pages with percent completed

v2.0.8 (09-Dec-2012)

* Invitations not being sent to Joomla user groups

v2.0.7 (01-Dec-2012)

* Survey redirect URL is not working

v2.0.6 (20-Nov-2012)

* 404 error is raised instead of 401 when unauthorized user access survey
* Unable to reset publish up and publish down values

v2.0.5 (16-Nov-2012)

* Survey response URL is not SEO friendly
* Typo in English language file corrected

v2.0.4 (05-Nov-2012)

^ CjLib new API support changes

v2.0.3 (27-Sep-2012)

* Unable to save question description using WYSIWYG editor
* Prevent form from being submitted twice while creating questions
* Double quotes in responses causes CSV download file data corrupt.
* Sort order of answers not followed in reports and response form

v2.0.2 (03-Sep-2012)

+ Copy surveys from existing surveys
+ Find users based on email, name or username in registered user search in invite page
* Public report access option is not working
* Invalid report link is sent in administrator notifications
* Language string typo correction

v2.0.1 (27-Aug-2012)

* Redirect URL is empty after editing survey
* Administration pages not adhering to PHP 5 strict standards

v2.0.0 (22-Aug-2012)

+ Scheduled email invitations
+ New question types - line by line checkbox and radios, rich text boxes
+ Save and re-populate the answers submitted by users when a survey is terminated in between and retaken
+ JomSocial groups invitations
+ Individual registered users invitations
+ Full front-end rewrite
+ Daily responses chart with Google charts v3
+ Searchable and editable responses listing table report
+ Location based report (country and city)
+ Device based report (browser and os)
+ Question Report - See all responses of a question
+ Improved consolidated report
+ New columns in CSV report download - country code, country name, city, browser and os
+ Drag and Drop re-ordering of questions in survey creation form
+ SEO meta title tags in all public facing pages
+ CJLib framework support
+ Community Surveys module update to support CJLib framework
+ Select jQuery UI theme right from component settings
* Continue button is showing instead of Finish button in survey response form
* Editing question deletes the answers and recreates new ones

v1.7.8 (14-June-2012)

* Public users cannot view results when public permissions are enabled
* Error occurred while viewing results

v1.7.7 (11-May-2012)

* Unable to save HTML data in j2.5

v1.7.6 (20-Apr-2012)

+ Survey Key field in CSV file download.
* CSV file should only contain responses that are completed and not the ones in progress
* v1.7.4 broken CSV download functionality

v1.7.5 (10-Apr-2012)

* Hotfix.

v1.7.4 (06-Apr-2012)

+ View and delete responses received for a survey in backend. Track status of each response.
+ Debugging configuration option to debug issues in testing mode
* Unable to publish/unpublish surveys in j2.5
* Finish button is not showing when there is no more pages left in response
* Default editor stripping of HTML content
* Label tag not closed in survey response page causing issue with some browsers
* Conditional rules does not show the page numbers which do not have multiple choice questions
* Invalid poll closing date being shown while editing survey
* Users with manage permissions cannot edit surveys of other users
* Unable to invite registered users in j1.5

v1.7.3 (27-Feb-2012)

* The last page of survey response not showing finish button on a multi-page survey
* Grid answers not rendered properly in csv download

v1.7.2 (06-Jan-2012)

+ Send an email notification to the administrators about every new response to the surveys.
+ Send an email notification to the survey creator about the new response received by his survey.
* Bug in setting cookie

v1.7.0/1.7.1 (20-Nov-2011)

+ CSV Download of report
+ Survey specific option to show/hide Joomla template while users answering survey.
+ Joomla 1.7 compatibility
* hot patch

v1.5.2 & v1.6.1 (02-May-2011)

+ Skipping/conditional branching
+ Description for each question with rich editor support
+ Custom redirect url while completing survey
+ jQuery plugin v1.5.0 & v1.6.1 support
+ New dashboard page on admin component with version check
* Can't edit maximum allowed responses

v1.5.1 & v1.6.0 (27-Feb-2011)

+ Joomla 1.6 support
+ Built-in module positions. See documentation.
* Continue button on survey response page is shrinked on YooTheme templates.

v1.5.0 (26-Feb-2011)

+ Give points for filling in survey
+ BBCode Editor Support
+ WYSIWYG editor permission is now configurable
+ Delete Question capability
+ Sort questions capability
+ Delete surveys from backend
+ Show related surveys after completing survey response
+ Exclude selected keywords from related surveys
* Email notification through contact groups is sent with same survey key
* Multiple users cannot complete same survey on same machine with survey invitations
* 401 error occurred if survey contain empty pages
* Refreshing while creating survey shows error
* Unpublished item still in view
* Extra option AUP - Deduct points for creating

v1.0.02 (12-Oct-2010)

* Incorrect link is being sent for invitations
* Allow only backend users to send invitations to Joomla user groups users.

v1.0.01 (11-Oct-2010)

* Incorrect IP address recorded for private surveys
* Empty country names recorded for proxy addresses.
* Added country codes for ISO Exceptional reserved country codes.
* More meaningful name added for unknown country name in dashboard & reports

v1.0.0

+ Initial release