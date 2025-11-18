---
id: community-quiz-changelog
title: Community Quiz changelog
sidebar_label: Community Quiz changelog
sidebar_position: 7
---

v7.4.1/2 (19-Oct-2025)

+ Adding scheduled batch report to generate and download quiz response in a CSV file
+ Adding scheduled batch report to generate and download quiz response PDF files
+ Adding scheduled batch report to generate and download certificate PDF files

v7.4.0 (05-Oct-2025)

+ Joomla 6 Compatibility Update
+ Added config option to show/hide exporting responses button
+ Added BF Quiz plus migration script
+ Allow selecting different quiz in single quiz menu item
+ Show correct choice on consolidated report
+ Update labels and colors on the result page to avoid confusion with the right answer
+ Show question number on the results page
^ Update copyright headers
^ Removed deprecated default and bootstrap3 layouts
* Hide correct questions and success ration on quiz report when show correct questions is disabled
* Fixed issue with shown percentage scores in PDF export file

v7.3.1 (21-Dec-2024)

* Fixed issue with quiz start when reCaptcha is not loaded

v7.3.0 (20-Dec-2024)

+ Added question customize option to show/hide results/correct answers
+ Added integration with Joomla reCaptcha v3 plugin
* No certificate download button shown when using percentage scores
* Fixed issue with showing quizzes when MySQL uses null dates

v7.2.9 (16-Dec-2024)

* Component permissions are not inherited to quiz

v7.2.8 (20-Nov-2024)

+ Update ChartJS library to latest version
^ Fixed UX related issues

v7.2.7 (30-Oct-2024)

+ Added Save button in question bank question for to save & edit question

v7.2.6 (29-Oct-2024)

* Do not show PDF button if user is not eligible for certificate

v7.2.5 (19-Oct-2024)

* Fixed issue with scores in response PDF for question banks quizzes
* Do not mandate correct answers when question is excluded from scoring

v7.2.4 (17-Oct-2024)

* Fixed issue with scores in PDF response

v7.2.3 (12-Oct-2024)

* Fixed issue with loading JCE editor
* Fixed issue with MySQL strict mode

v7.2.2 (27-Sep-2024)

* Updated Google sheets integration to allow latest APIs
* Quiz fields plugin converts textbox responses to lowercase before inserting into the certificate

v7.2.1 (22-Sep-2024)

+ Added support for decimal marks in scorewise messages
^ Removed legacy code
* Fixed typos in language strings
* Fixed PDF report generated for question banks quiz
* Scorewise messages do not display when percentage type score is selected

v7.2.0 (09-Apr-2024)

+ Added page duration in the CSV export file
+ Added support for Rewardify Points
+ Added support for entering negative marks for each option in grid type questions
* Fixed issue with smart search plugin

v7.1.2 (18-Oct-2023)

* Fixed the margin of batch button on admin toolbar
* Fixed issue with choice question result is incorrect

v7.1.1 (26-Sep-2023)

* Fix for updater

v7.1.0 (24-Sep-2023)

+ Breaking Change: Added support for Joomla 5
^ Breaking Change: Removed legacy layer for Joomla 3
+ New option to show/hide correct answers in the results page

v7.0.1 (19-May-2023)

* Fixed finder plugin issue in J4.3
* Fixed issue with missing files in the release package

v7.0.0 (16-May-2023)

+ New: Hotspots Question Type
+ New: Include articles in course content
+ Add sort ordering for questions in a question bank
+ New option to set cutoff marks in percentage
+ New option to show score-wise messages on top/middle/bottom of the report page
^ Adjust the font size of answer explanation header
^ Replaced JFile/JFolder deprecated wrappers with respective file system functions
^ Show quiz title while responding to it
* Trashed questions appear in question bank type quizzes
* Show same page after saving question in question banks

v6.4.5 (27-Mar-2023)

+ New option to limit maximum allowed responses
+ New component level option to randomize answers in choice question types
^ Modified choice type result view for better understanding
* Fixed issue with viewing result of a question bank quiz response
* Fixed issue with finder plugin in Joomla 4
* Quiz selection modal in Single Quiz menu item does not work after new Joomla update
* Cancel button does not work on reports page
* CSV Download do not fetch records for the question bank type quiz
* Error shown when trying to view my response with a certificate enabled

v6.4.4 (04-Mar-2023)

* Added missing table column in the installer script for new installations

v6.4.3 (02-Mar-2023)

+ New feature to import questions in CSV file
+ Show question type icon on questions list
* Category quiz shows wrong page count on the response page
* Editor is not loading after saving question

v6.4.2 (28-Feb-2023)

* Missing language associations template causing error while creating a question bank
* Missing DB table in the installations upgraded from v6.1 or earlier to v6.4

v6.4.1 (27-Feb-2023)

+ Adding new batch option to assign question banks to questions
+ Feature to change question banks of individual questions
* Unable to checkin checkedout question bank
* Fixed false positive database error message

v6.4.0 (25-Feb-2023)

+ New feature: Question Banks
+ New option to show answers immediately after completing each page
+ Show new question title help in placeholder
+ New option to show/hide labels of image type questions
* Last page of category quiz should display finish button instead of continue button.
* Fixed issue with creating grid questions
* Removed duplicate options tab on quiz form
* Fixed issue with pagination when category quiz is selected

v6.3.1 (05-Feb-2023)

^ Allow saving question only if correct answers are selected

v6.3.0 (05-Feb-2023)

+ New feature to capture response time for each page and export in CSV file
+ New option to randomize questions on a page in standard quiz
+ New option to randomize pages of a standard quiz
+ Added new option to show/hide user response final report fields
+ Added new option to show/hide scorewise messages
+ Redirect guest users to login page when they access the unauthorised quiz
^ Moved score-wise messages out of report layout to show/hide them independently
^ Moved user response report options to new tab in component options
* Fixed issue with ROOT category name showing on the listing page
* Export link still shows removed XML extension name instead of json
* Removed unsued language strings
* Fixed the language string name of editor maths plugin
* Validation error messages are not visible on the response form
* Fixed issue with checkbox grid form is not loading on default layout
* Access setting is missing on front-end form page
* The form page shows 500 error when the form menu item exists and SEF is not enabled
* Fixed wrong language string (duration in sec) for CSV export
* Fixed issue with child category description not showing
* Fixed issue with min/max selections validation in images question type

v6.2.2 (03-Nov-2022)

* Fix for uploading images in the images question type

v6.2.1 (01-Nov-2022)

+ Added quiz results table to PDF export file
* Fixed error when the registered users creating question from front-end
* Fixed issue with scorewise messages not showing on My Response view.
* Fixed issue with JQD migration script

v6.2.0 (09-Oct-2022)

+ Adding integration with Joomla privacy module
+ Added support for migrating data from Joomla Quiz Deluxe component
+ New "Import Quiz" feature added to front-end My Quizzes page
+ Import/Export feature now supports JSON files (XML support removed)
+ New config option to disable IP address capturing
+ PHP 8.1 support added
* Tags are not saving in Joomla 3.10 or later versions
* Fixed UX/CSS of questions customize tab fields
* Do not load chosen plugin on Joomla 4 backend
* Fixed UX of Jump to Page on Bootstrap 5 layout
* Unable to select quiz in Single Quiz menu item
* Page shows error when the component redirect to login/any page

v6.1.0 (18-May-2022)

+ New feature: Google Sheets integration to stream user responses
+ Adding support to show answers of text/radio questions in certificate
+ Allow processing Joomla content plugins on the certificate content
* CSV download file headers cannot be translated from language file
* Fixed PHP warning on the front-end reports dashboard (bootstrap5)
* Fixed issue with backend reports page showing error when quiz locked

v6.0.6 (23-Apr-2022)

* Quiz pagination does not work on bootstrap4/5 layouts
* Images type question do not show images when using content plugin
* Images type question do not show images when using form module
* Removed unnecessary character shown on images question results

v6.0.5 (21-Dec-2021)

+ Allow support for reopening/editing the finalized response
* Answers submitted earlier are not auto-populated in matching question when reloading the quiz
* Cerificate button is not shown on My Responses page the user forgot to download the certificate on result page
* Warning message shown on single quiz menu item creation modal
* Unable to switch pages on backend questions form page on Joomla4

v6.0.4 (25-Oct-2021) 

* Error shown on the quiz form if the math button plugin is enabled
* My Response page do not show mathematical formulas

v6.0.3 (22-Oct-2021)

+ Added new option to show/hide extended options on front-end form
* Fixed the display issue with tags field on front-end
* Fixed issue with routing to myquizzs/myresponses menu items
* Removed calls to deprecated apis
* Fixed issue with fontname not correctly set for pdf header
* Adding missing aria labels for grid type questions
* Template type and language fields does not show on the Email Templates
 form
* Error while upgrading the package on Joomla 4

v6.0.2 (20-Sep-2021)  

* Removed unused options from category list menu item
* Fixed issue with the error when using category list menu item

v6.0.1 (01-Sep-2021) 

^ Toolbar dropdown enhancements for bootstrap 5 layout
* Image question min/max height options are not saved
* Quizzes selection modal does not open on course form
* Fix for UI layout issues on Bootstrap 5 layout
* Import quiz function do not work in Joomla 4
* Import button on backend list page is not working

v6.0.0 (17-Jul-2021)

+ New question type - Checkbox Grid (Matrix)
+ New layout based on Bootstrap 5 library
+ Joomla 4 RC 4 support added
+ Changed Google charts in consolidated report to ChartJS
+ New feature to reorder pages on the questions form
+ Images questions now allow users to select images by clicking on them
+ New options in Images question types for selecting min/max size
+ Include scoreboard/results in the pdf report download
^ Removed unused buttons from the responses list page
* Joomla tinymce editor not loading when changing pages on question form

v5.2.4 (25-Mar-2021)

+ PHP 8 support added
+ Added response information to the PDF response attached to the email
^ Sort courses by creation date instead of default order
* Correct answer value is not shown for matching question result
* Failed quizzes in a course are not enabled even allow retry option is enabled
* Mandatory option does not work for select & matching questions

v5.2.3 (23-Jan-2021)

* Quiz page title and pagination are not shown when Show Intro option is enabled

v5.2.2 (10-Dec-2020)

* Course unable to proceed to next quiz in multi-quiz course

v5.2.1 (08-Dec-2020)

+ Show response report after completing a category quiz

v5.2.0 (29-Nov-2020)

+ New plugin to integrate Joomla Privacy framework integration
+ Allow floating point values for marks in certificate rules
+ New option to restrict maximum number retries the user can attempt
+ New option to see only failed questions in the quiz response report
+ Added support for AcyMailing v6 and removed support for v5
+ Joomla 4 beta support added
^ Removed unused code in My Response page which was causing issue
* Add space below the between the pagination and first question
* Layout changes for radio/checkbox questions for bootstrap 4
* Show Category List & Show Search Form options are not working
* Certificate with maximum marks should be awarded when multiple certificates awarded
* Do not load editor when none is selected in default editor option

v5.1.2 (31-May-2020)

* Choice question charts do not display on consolidated report when the answer titles have quotes
* Multiple certificate rules should result in one certificate based on the user score
* Single quiz menu options do not override component options

v5.1.1 (06-May-2020)

* Empty block shown after clicking on start quiz button when no intro shown

v5.1.0 (30-Apr-2020)

+ New Consolidated Report Module for Community Quizzes
+ Added option to customize the default layout per category menu item
+ Progress bar for Category Quiz: Show page numbers and progress bar
+ Score-wise messages and reports: Allow entering HTML with the editor in scorewise messages editor
* HTML tags in question title are escaped when displaying on front-end
* Editor is not shown when adding new question
* Grid columns and Matching question answers are not imported during XML import
* Correct answer for single line questions are saved during import
* Added missing language strings in Community Quiz listing module.
* Deleting a course does not release quizzes assigned to it

v5.0.7 (18-Dec-2019)

+ Allow quiz authors and administrators to edit/modify user responses
* Unicode urls are not created when saving the items

v5.0.6 (12-Nov-2019)

* Course next quiz is not enabled automatically
* Rating stars wrapped to the second line
* Password question answers are not considered in calculating the score
* Added missing language string for EasySocial user points setup

v5.0.5 (11-Aug-2019)

* Unable to install v5.0.4 package due to missing file

v5.0.4 (11-Aug-2019)

+ Added Sociable support
^ Removed references to Google+ service
* Hover on tooltips disappear elements when mootools loaded on the page
* Added missing language strings in permission settings page

v5.0.3 (15-Jun-2019)

+ New stylized radio buttons and checkboxes for all compatible question types during survey response
+ Added support to display mathematical formulas
+ Added support to archive old quizzes to archive tables (performance)
+ Show top users quizzes count in backend dashboard page
^ Float ratings to the right side of the listing item and allow descriptiont to wrap around
^ Added index to difficulty level column to improve performance
^ Updated bootstrap 4 layouts
* Unable to save scorewise messages and certificate rules
* Quiz description is not showing in quizzes listing
* Fixed wrong DB table column references in dashboard page
* Editor button to insert track shortcode is not working
* Wrong references to Community Surveys in the component are removed
* Show recently added responses in the responses listing
* Rating widget causing issues while loading quiz

v5.0.2 (15-Mar-2019)

* Joomla Editor do not load all buttons after saving question

v5.0.1 (05-Mar-2019)

+ Added a link to Community Quiz changelog in the dashboard page
* Course completion certificate is not available for download
* Users unable to download the certificate after completion of quiz
* The backend quiz form layout alignment was changed

v5.0.0 (11-Feb-2019)

+ v5 final release
* Supporting MySQL instances with short index format

v5.0.0.b2 (10-Jan-2019)

* Bug fixes

v5.0.0.b1 (23-Dec-2018)

+ New feature: Courses with learning paths
+ Joomla 4 Compatibility added
+ New layout using Bootstrap 4 framework
+ New router with remove IDs support added
+ Added drag and drop images feature for image type questions
* My Responses menu item does not show correctly
* PDF date format option is not working in the generation of pdf certificate
* Installation fails in few MySQL DB instances

v4.8.1 (11-Aug-2018)

^ Record questions which are skipped from answering by the users
* Category quiz reports do not show results from other quizzes
* Table content is hidden under scrollbar in Matching type question
* Removed double/duplicate semicolon
* Free Text question type does not show correct answer status in the report
* Fixed typo in the language file
* Do not allow the user to save choice images question until at least one image is added
* Unable take the quiz again when the existing response is trashed
* Remove tracking data also when deleting responses

v4.8.0 (11-Jul-2018)

+ Added AcyMailing tag plugin to add quiz URL into newsletters
+ Added new option to show quiz page title on the quiz response page
+ New feature to show answers number in either numbers or alphabet
+ New feature to select answers order (default ordering or random order of answers)
* Ratings are not hidden on quiz form page when component option is disabled
* Quiz do not finalize after timer expiry if last page contains validations
* Response details are not removed from database tables when a response is deleted
* When quiz is closed and reopened, the first page answers are not loaded
* Value 0 in Maximum Questions option do not allow unlimited questions
* Pagination counter is not checked with correct value on first page
* Filters are not shown by default on admin responses list after applying filters
* PHP notice message displayed on admin responses list when the quiz is checked out.

v4.7.0 (03-Jun-2018)

+ GDPR Compliance: Allow users to download their responses and certificates
+ Show cutoff and result of the response in My Responses page
+ Allow downloading certificate from My Responses page
^ Use separate icon for showing result of correct answers which are not selected by the user

v4.6.6 (01-Apr-2018)

+ New option to customize font name used in PDF file generation
+ New option to customize the date format used in PDF certificate
+ Added support for `{MARKS}` placeholder in email templates
* Quiz description cannot be hidden when using quiz form module
* Quiz cannot be taken on some templates when using quiz form module
* Quiz options do not work when showing quiz using plugin
* List limit option does not work in category menu item
* PDF results should not be available before the user completes the quiz
* Notification email is not sent when the user failed the quiz

v4.6.5 (31-Jan-2018)

+ New configuration option to customize number of rows shown in quizzes list page
+ New custom module positions in quizzes list page quizzes-view-after-row-X where X is the row number
+ New feature: Show page numbers with status of responses in each page
+ Link response id in backend responses page to the response details page
+ Show certificate rules field on front-end quiz form page
^ Show RC codes only when debug mode is enabled.
^ Updated default character set of tables to utf8mb4_unicode_ci
* Next button stuck when taking quiz
* Quiz Form module & content plugin throw error when user already took quiz
* Score report not shown when location is selected as below questions
* Version information shows the component is upto date even through there is a new version is available

v4.6.4 (30-Dec-2017)

* Wrong username shown in certificate file

v4.6.3 (27-Dec-2017)

+ Allow HTML tags in question title
+ Added an option to allow users to choose and jump to selected page
+ Added option to customize "Send Email Results" option at quiz level
^ Style for select boxes is missing when show intro is disabled
* Unable to hide final report when show answers is disabled
* Double icon images are showing in administrator pages when Load Bootstrap CSS option is enabled
* Quiz author name is replaced instead of user name in certificate
* Package cannot be installed on PHP version 5.5
* Download certificate button is not showing when show results is disabled
* Certificates cannot be deleted permanently.

v4.6.2 (28-Nov-2017)

* Installer shows error after completing the installation

v4.6.1 (26-Nov-2017)

+ New option to show user form to send quiz response report via email
* Activity stream should not be sent when guest users replying to quiz

v4.6.0 (11-Nov-2017)

+ New Feature: Chained quiz
+ New Feature: Allow Retry option when user failed quiz
+ Added debug mode for debugging issues
* Suppressed RC messages from showing when responding to quiz
* Unable to send response when multiple quizzes loaded on same page
* Empty block is showing when all elements of intro are hidden
* Error shown when default editor is not tinymce

v4.5.3 (15-Oct-2017)

* Unable to delete the questions in new version

v4.5.2 (13-Oct-2017)

+ Added support for showing quiz metadata when using content plugin
+ Download PDF from My Responses page
+ New event trigger onQuizAfterPublished($context, $quiz, $isNew)
+ Add time taken for quiz completion in csv report
* Installing component for the first time, db tables are not created properly
* Mails queued are never sent from CjLib queue
* Quiz shows error on a multipage survey where intro is disabled
* Content plugin - when clicking the "start" page of a single quiz, all quizzes on the page are "opened"
* Question description html is stripped while importing from xml file
* Required media folders are not created during installation
* Error shown on category page
* Community Quiz emails are not triggered using CjLib manual cron

v4.5.1 (15-Jun-2017)

+ Export response completion date and score in csv report
+ New option to skip email queue and send emails directly
* Cancel button on certificate creation page shows error
* Show Hits option do not show number of responses in quiz details page
* Failed quiz email template is saved as passed quiz template

v4.5.0 (18-Apr-2017)

+ New feature: Certificates for quizzes
+ New Feature: Option to choose activity feed, email and points options in Community Quiz - Quizzes plugin
* Password is ignored while retaking quiz and was entered correctly in previous attempt
* When incorrect password entered, the screen is blocked
* Updating component overrides orientation of choice questions

v4.4.2 (26-Feb-2017)

+ Allow choosing correct answers for textbox, password type questions
+ Include textbox, password questions in calculating final marks
+ Option to show/hide number of questions of category on category listings
+ New option to customize marks report location on the final report
+ Show "Try Again" button after taking quiz when multiple answers option is enabled
* Unable to see the categories in admin when logged in with different language
* Users should not be shown intro page when the respond permission is not available
* Response form name conflicts with few chat apps
* Fixed security issue - sql injection due to inadaquate request parameter filtering

v4.4.1 (02-Feb-2017)

* Community Quiz Module causing error when not publishing outside component pages

v4.4.0 (31-Jan-2017)

+ Added support for Community Builder activity streams
+ New option added to attach pdf report to response email
* Response count is shown in mobile view even if the option is disabled
* Quizzes order cannot be changed using options
* PDF report cannot be generated on few servers
* User name do not display properly when CB content plugin is enabled
* Marks are calculated incorrectly for grid and matching type questions
* Results are not shown after taking quiz
* Sort on category on categories page and open levels page causes error

v4.3.5 (27-Sep-2016)

+ New option in Community Quiz Module to restrict quizzes from selected categories
+ New content plugin to show quizzes in a Joomla! article using short code `{LOADQUIZ }`

v4.3.4 (25-Sep-2016)

+ New module to show top scorers of a quiz
* Scorewise message shown as blank
* Error thrown in ajax response while taking quiz

v4.3.3 (08-Aug-2016)

+ Added option to toggle user display name on front-end
* Scorewise messages are not showing on results page

v4.3.1/2 (28-Jun-2016)

+ Added question option to consider marks of all answers into final score

v4.3.0 (25-Jun-2016)

+ Added support for restricting minimum and maximum answers a user can select with checkbox question
+ Added css customization options for question, title and description css classes
+ Added new points rule for failed quiz
+ Added new activity stream for failed quiz
+ Added new email type for failed quiz
+ Added new response status column in reports
+ New response status filter in responses listing page of reports section
^ Show final score details for category quiz.
^ Marks assigned to wrong answers are not added up in score
^ Redirect guest users to login page when they access reports page
* Added new API event onQuizAfterFailed
* Responses list author filter do not show correct names
* Do not send "User passed quiz" email when the cutoff is not set
* Users unable to delete responses of their surveys from front-end
* My responses page shows error when no category access is given to user
* Added missing language strings

v4.2.6 (28-Apr-2016)

+ Added ALtaUserPoints support
* Added missing language string of component option
* Redirect guest users to login page instead of showing error message
* My Quizzes menu item points to My Responses menu item
* Users unable to view their response details

v4.2.5 (15-Apr-2016)

* Unable to hide quiz level with configuation option in default layout
* Select and matching type questions cannot be set as mandatory
* My Responses page shows responses of all users (not accessible)
* Search view menu item language string is missing
* User final rating is shown as failed when he scored marks equal to cutoff marks
* User cannot start quiz by pressing enter button in password field
* Unable to hide category list box

v4.2.4 (30-Mar-2016)

+ Added new page to see user response from My Responses list page
^ Joomla 3.5 compatibility update

v4.2.3 (25-Mar-2016)

+ New option to show/hide toolbar
* Search Form could cannot be hidden with its option

v4.2.2 (22-Mar-2016)

+ Added quizzes count statistics in backend categories page (Joomla 3.5 and above)
^ Do not show quiz rating on intro page
^ Joomla 3.5 compatibility updates
* Quizzes cannot be imported from xml file
* Page redirect to homepage when doing search
* Unable to import quizzes
* Progress indicator do not stop when there is an error on server side
* Search form do not return to same page

v4.2.1 (05-Jan-2016)

+ Show custom quiz points as award on front-end listing
+ Added direct menu item to levels page on backend
* Edit Level link do not work in backend

v4.2.0 (03-Jan-2016)

+ New Feature: Quiz Difficulty Levels
+ New Feature: Classic list layouts
+ New quiz option to customize points awarded per quiz per response (admin only)
+ Show count of total responses in listing page instead of just the completed responses
+ Modified layouts to use sublayouts for supporting better layout overrides
+ QuizForm module updated for v4
+ Added AlphaUserPoints auto-searchable rules file
^ Moved quiz specific parameters to global parameters
^ Show only categories belongs to the current menu language in form and search pages
* AlphaUserPoints option is not shown in Points system configuration option
* Publish/Unpublish buttons do not work in myquizzes page
* Publishing options not shown for admins on front-end form
* Results are not displayed after completion of quiz
* Star rating is not enabled when intro is enabled and multiple quizzes loaded on same page
* Guest user cannot restart quiz after it is left in the past
* RSS Feed text is not translated
* Unable to load questions on the form if the intro disabled
* Discover button redirect to home page where there is a JavaScript error on the page
* Quiz Form module throw error
* Added missing language strings
* Joomla modules could not be inserted in question description.
* Notice messages are being added from quiz component in apache logs
* Pagination does not show on My Quizzes page

v4.1.1 (21-Sep-2015)

* TinyMCE editor is not loading on questions editing form after upgrading to v4.1.0

v4.1.0 (20-Sep-2015)

+ New configuration option to show question number in user response page
+ New quiz option to limit maximum number of questions that can be answered in a category quiz
+ New redesigned My Quizzes view
+ Show extended options on front-end form (if enabled in options)
+ Direct link to edit questions page on my quizzes page
+ Support for Joomla! auto update feature added (get downloadid from corejoomla.com and update it in CjLib options)
+ Show user response status and max user score on quiz listing page
^ Show category quiz specific options only when quiz type is changed to category quiz (quiz form page)
^ Bootstrap 3 compatibility updates
^ Load content before maps for better user interaction
* Editor do not load on changing page when editing questions
* Editor buttons do not show on question editing page
* Skip Intro option always resets after saving quiz
* Question description and answer explanation fields do not show if they only have an image and no content.
* Answer explanation for textbox/richtextbox are not shown
* Category list box do not show categories in backend quizzes filter
* Show title option not working properly
* Show intro option not working properly
* Progress bars do not display in bootstrap 3 layout in reports
* Images type questions do not display horizontal mode in bootstrap3
* Author name in listing page cannot be hidden using the option layout

v4.0.0 (20-June-2015)

+ Fully redesigned front-end and back-end interface
+ New question type: Match the answers
+ New question type: File upload
+ SEF urls with new router
+ Users can now respond without page refresh (Ajax enabled)
+ Improved reports page with csv, pdf and excel export
+ CjForum support added
+ New tagging system, now uses Joomla Tags API
+ Email templates to customize the emails going to users
+ New responses page to view responses across all quizzes
+ New categories listing page
+ New page title to easily remember page names while creating quizzes.
+ New permissions to give more fine grained permissions to users
+ New option to configure avatar and profile systems individually
+ Password protect quizzes to allow only desired people to respond to quizzes

v3.5.3 (09-Feb-2015)

* 500 error occurs when user already taken quiz but not allowed to take multiple times.

v3.5.2 (09-Aug-2014)

+ Assign custom badge for passing out a quiz 
+ New tags selection control using chosen plugin
* Publish/Unpublish function produces error on backend
* Unable to save tags
* Modal dialog on backend contains untranslated strings

v3.5.1 (18-Jun-2014)

* Fixed issue with installer

v3.5.0 (13-Jun-2014)

+ Export and Import quiz as XML file

v3.4.1 (19-May-2014)

+ EasySocial support added for avatars, activity and points system

v3.4.0 (18-May-2014)

+ New categories system based on Joomla categories API
+ New permission settings 
+ New points rule to award points for passing out a quiz

v3.3.1 (11-Apr-2014)

+ Added sharing tools at the end of quiz response/results page
+ Trigger badge rule - user passed quiz
* New report type is not shown in backend
* User response details page produces error in backend

v3.3.0 (14-Mar-2014)

+ Pass/Fail scoring support
+ New user reporting display
+ New report measure: success ratio
+ Per answer marks allocation

v3.2.3 (08-Mar-2014)

* badges not being awarded

v3.2.2 (06-Mar-2014)

* Icons missing on form for delete and sort answers
* Joomla backend site messed up

v3.2.1 (05-Mar-2014)

* Badges not awarded to users using cjblog
* Score is stored as incorrect value after user responded

v3.2.0 (26-Feb-2014)

+ Complete reports access from backend
+ Per answer mark assignment
+ Improved final report with success ratio
+ Improved front-end response form
* Unable to edit questions from the quiz link displayed on dashboard

v3.1.10 (14-Jan-2014)

* Upload file button of image type question not shown on Safari

v3.1.10 (30-Dec-2013) v3.1.9 (22-Dec-2013) v3.1.8 (08-Nov-2013)

+ Support for viewing results on quiz content plugin

v3.1.7 (02-Nov-2013)

+ Option to hide search box
+ Option to hide meta info
* Users cannot edit quiz

v3.1.6 (07-Sep-2013)

* Admin quiz listing formatting is incorrect
* New quiz button not appearing on Joomla 2.5 on admin page

v3.1.5 (30-Aug-2013)

+ Quiz creation from back-end
* Elements got disappeared when hover mouse due to bootstrap bug
* Pagination wrapped on few templates
* Search box is too small

v3.1.4 (25-July-2013)

* Copy quiz does not copy correct answer of the options

v3.1.3 (17-July-2013)

+ Copy or duplicate a quiz

v3.1.2 (16-July-2013)

+ Edit quiz/questions shortcut links on My Quizzes page

v3.1.1 (28-Jun-2013)

* Admin notifications are not sent
* Hide rating box on response page when ratings are disabled

v3.1.0 (25-Jun-2013)

+ Quiz form module to display quiz on any module position
* Error message on quiz form page when no response is recieved
* Bar chart is not visible on print page
* Modal dialog boxes are not clickable
* Unable to delete first page

v3.0.10 (08-May-2013)

* Category quiz count increases before finalizing the quiz and after finalizing the quiz
* Editing quiz from backend does not save fields properly.

v3.0.9 (28-Apr-2013)

* New quiz notifications are not sent

v3.0.8 (10-Apr-2013)

* AUP points not being awarded when user take quiz

v3.0.7 (06-Apr-2013)

+ sh404sef plugin included in package
* Cannot make text fields mandatory
* Social sharing buttons are not displayed

v3.0.6 (26-Mar-2013)

* Single line text box not visible while taking quiz

v3.0.5 (21-Mar-2013)

* Error in j3 installer

v3.0.4 (15-Mar-2013)

+ Preview quiz before approving from backend
* Prevent category from assigned to itself as parent

v3.0.3 (11-Mar-2013)

^ CjLib not found warning message now includes link to download it
* Points not awarded for jomsocial when new quiz is posted
* Image question is not shown on results page
^ Removed unused language strings

v3.0.2 (08-Mar-2013)

+ Show tag description while browsing tagged quizzes
* Images in image question are not responsive
* Refresh button on backend quizzes page not working correctly
* Finish button on form floated to right and invisible

v3.0.1 (01-Mar-2013)

* Version information on backend dashboard is not getting updated
* Points not get awarded
* Grid column should not contain option to add image
* Follow category button now showing
* Completed time shown on report is wrong

v3.0.0 (20-Feb-2013)

+ Joomla 3 support
+ Responsive design optimized for mobiles and tablets (no more jQuery UI themes but you can use Bootstrap themes)
+ Two new question types - Select single images and Select multiple images
+ Lots of new reports - Full control of responses with searcheable and sortable responses list report, consolidated report with charts, location report, device report and os report - all combined with responsive features to easily view on your mobile devices.
+ Full rewrite - Both front-end and back-end were rewritten from the scrach to take full advantage of Joomla MVC.
+ New responsive toolbar to quickly access all pages on front-end
+ Skip intro - now you can skip introduction page and directly present questions to the users
+ Move questions between pages - not just reordering but also you can move questions between pages without refreshing page
+ Email subscriptions for users
+ RSS feeds
+ New user pages to track their quizzes, responses and subscriptions
+ CjBlog badges and points system support
+ Tagging support - Enhanced tagging support with new Tags page to manage them
+ Advanced search page

v2.0.11 (08-Jan-2013)

* Hot patch

v2.0.10 (06-Jan-2013)

+ Separate page to display user responses
^ Add class name to score details to allow customization in css
* Unable to view individual user responses

v2.0.9 (30-Dec-2012)

* Category counts issue not solved in previous release

v2.0.8 (07-Dec-2012)

* Number of quizzes for categories counts are wrong
* Bug in installer preventing from installing on new installation
* Unable to navigate to second page when category listing is viewed

v2.0.7 (29-Nov-2012)

* Username is not shown on tooltop of avatar

v2.0.6 (28-Nov-2012)

+ CjLib support
* Publishing quiz from backend not awarding points
* Publishing quiz from backend not inserting JS activity

v2.0.5 (26-Nov-2012)

^ Process content plugins expanded to quiz desctiption

v2.0.4 (11-Oct-2012)

+ Option to process content plugins on question descriptions

v2.0.3 (03-Oct-2012)

* Grid question type cannot be created

v2.0.2 (02-Oct-2012)

* Unable to select correct answers in grid questions
* Unable to add columns in grid questions unless the question is saved
* Joomla 3.0 compatibility updates (not yet completed)
* Page header question description is repeated
* Rich editor cannot be loaded in responses
* Hide template option not in effect while showing results

v2.0.1 (24-Sep-2012)

* CSV Download does not include all answers in Grid questions
* CSV file stores wrong format if the answers/responses contain double quotes.
* Search function do not return correct results

v2.0.0 (22-Sep-2012)

+ Full rewrite of front-end
+ CJLib component support
+ New listing type - Top rated
+ New advanced search page
+ CSV Download of report (for statistical purposes)
+ Shows score of the user in responses listings report
+ Shows time take for each response in responses report
+ Page number display in responses
+ New built-in pagination which changes its theme according to the main theme of the component
+ Now you can build entire questions at one place including answer explanation and selecting correct answer - all through ajax form builder.
+ Now you can sort the questions by drag and drop on the same page where you build the questions
+ Foldable question build areas - now see all questions on same page and edit only questions you want to
+ New buttons to expand and collapse all question areas
+ New and improved rich text question type
+ SEO friendly page titles (uses header tags)
+ Validates to PHP 5.3 strict standards
+ Now captures country, city, browser and os information of users (for future statistic purposes).
+ New category tree module
+ New Joomla search plugin for adding quiz search capability to Joomla search component
* Editing question removes the already saved responses of that question
* WYSIWYG editor is not showing only when the form is loaded but not when adding new questions
* Unable to save content through ajax and tinymce editor

v1.7.4 (30-Apr-2012)

+ Human friendly timer
+ Tagging for quizzes
* Joomla 2.5 related issues fixed
* Unable to save html content
* Non-sef url is used while redirecting to login page

v1.7.3 (06-Apr-2012)

+ Support for unicode url aliases for j2.5 or above
* Rating is not saved with new jquery plugin installed
* Wrong language string printed for "years ago" text
* Users can view unpublished quizzes in top rated quizzes section
* Avatar is being shown even after disabled in configuration

v1.7.2 (10-Jan-2012)

* Unable to view free text answers from reports
* Missing manage permission setting in Joomla 1.5
* Fixes for small UI related issues

v1.7.1 (18-Dec-2011)

+ New question type - Rich editor
* Question description does not show images
* Backend does not show question description and answer explanation

v1.7.0 (15-Dec-2011)

+ feature requests for community quiz 
+ Additional notes field for each answered question
+ Knowledge Bits 
+ Multicategorization or repeating subcategory names 
+ A multipurpose Community Quiz module
* Can not delete a FIELD question editing a quiz 
* can't load result's page with IE 7 and 8 
* Quiz is added to "Latest quiz" even if creator aborts the creation before completed
+ UI Redesign
+ Start rating system for quizzes
+ Full featured reports to track individual responses
+ CSV download for reports
* Bug with quiz search prevent search results loading
+ WYSIWYG editor support
+ Version check in backend component control panel

v1.5.1 & v1.6.1 (2-Jun-2011)

+ Quiz Reporting (limited)
+ BBCode editor support
+ Question re-ordering
+ Quiz timer
+ Kunena 1.6.4 API support
+ Improved UI
+ More customizable options for home page
+ New jQuery plugin support
+ Toolbar customization support
+ Clean home page support
+ Hiding category box through configurable option
+ Access permissions for Manage permission level
* Continue button redirects to home page

v1.0.0

+ Initial release