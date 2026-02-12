---
id: community-quiz-changelog
title: Community Quiz Changelog
sidebar_label: Community Quiz Changelog
sidebar_position: 7
---

# Community Quiz Changelog

All notable changes to Community Quiz will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [7.4.10] - 2026-02-12

### 🐛 Fixed
- Fix: Admin cannot download certificate if not logged into frontend

## [7.4.9] - 2026-01-26

### Fixed
- Fix issue with finder plugin
- Fixed issue with certificate generation
- Fixed database errors (false positives)

## [7.4.8] - 2025-12-29

### Fixed
- Fixed issue with saving response for a question banks quiz

## [7.4.7] - 2025-12-28

### Fixed
- Fixed issue with question banks quiz response shows wrong status Fixed messages about deprecated notices
- Fixed issue with unauthorised json download

## [7.4.6] - 2025-12-17

### Fixed
- Hotfix

## [7.4.5] - 2025-12-17

### Added

- Filter responses by passed/failed status

## [7.4.4] - 2025-11-15

### Added

- Upgrade modules and plugins for Joomla 6 compatibility

### Fixed

- Fixing download report function
- Fixed issue with unauthorised json download

## [7.4.3] - 2025-11-01

### Fixed

- Fixed issue with accessing scheduled reports

## [7.4.2] - 2025-10-25

### Added

- Scheduled report to generate and download quiz response PDF files
- Scheduled report to generate and download certificate PDF files

## [7.4.1] - 2025-10-19

### Added

- Scheduled batch report to generate and download quiz response in a CSV file

## [7.4.0] - 2025-10-05

### Added

- Joomla 6 Compatibility Update
- Config option to show/hide exporting responses button
- BF Quiz plus migration script
- Allow selecting different quiz in single quiz menu item
- Show correct choice on consolidated report
- Show question number on the results page

### Changed

- Update labels and colors on the result page to avoid confusion with the right answer
- Update copyright headers
- Removed deprecated default and bootstrap3 layouts

### Fixed

- Hide correct questions and success ratio on quiz report when show correct questions is disabled
- Fixed issue with shown percentage scores in PDF export file

## [7.3.1] - 2024-12-21

### Fixed

- Fixed issue with quiz start when reCaptcha is not loaded

## [7.3.0] - 2024-12-20

### Added

- Question customize option to show/hide results/correct answers
- Integration with Joomla reCaptcha v3 plugin

### Fixed

- No certificate download button shown when using percentage scores
- Fixed issue with showing quizzes when MySQL uses null dates

## [7.2.9] - 2024-12-16

### Fixed

- Component permissions are not inherited to quiz

## [7.2.8] - 2024-11-20

### Added

- Update ChartJS library to latest version

### Fixed

- Fixed UX related issues

## [7.2.7] - 2024-10-30

### Added

- Save button in question bank question form to save & edit question

## [7.2.6] - 2024-10-29

### Fixed

- Do not show PDF button if user is not eligible for certificate

## [7.2.5] - 2024-10-19

### Fixed

- Fixed issue with scores in response PDF for question banks quizzes
- Do not mandate correct answers when question is excluded from scoring

## [7.2.4] - 2024-10-17

### Fixed

- Fixed issue with scores in PDF response

## [7.2.3] - 2024-10-12

### Fixed

- Fixed issue with loading JCE editor
- Fixed issue with MySQL strict mode

## [7.2.2] - 2024-09-27

### Fixed

- Updated Google sheets integration to allow latest APIs
- Quiz fields plugin converts textbox responses to lowercase before inserting into the certificate

## [7.2.1] - 2024-09-22

### Added

- Support for decimal marks in scorewise messages

### Changed

- Removed legacy code

### Fixed

- Fixed typos in language strings
- Fixed PDF report generated for question banks quiz
- Scorewise messages do not display when percentage type score is selected

## [7.2.0] - 2024-04-09

### Added

- Page duration in the CSV export file
- Support for Rewardify Points
- Support for entering negative marks for each option in grid type questions

### Fixed

- Fixed issue with smart search plugin

## [7.1.2] - 2023-10-18

### Fixed

- Fixed the margin of batch button on admin toolbar
- Fixed issue with choice question result is incorrect

## [7.1.1] - 2023-09-26

### Fixed

- Fix for updater

## [7.1.0] - 2023-09-24

### Added

- Breaking Change: Added support for Joomla 5
- New option to show/hide correct answers in the results page

### Changed

- Breaking Change: Removed legacy layer for Joomla 3

## [7.0.1] - 2023-05-19

### Fixed

- Fixed finder plugin issue in J4.3
- Fixed issue with missing files in the release package

## [7.0.0] - 2023-05-16

### Added

- New: Hotspots Question Type
- New: Include articles in course content
- Sort ordering for questions in a question bank
- New option to set cutoff marks in percentage
- New option to show score-wise messages on top/middle/bottom of the report page

### Changed

- Adjust the font size of answer explanation header
- Replaced JFile/JFolder deprecated wrappers with respective file system functions
- Show quiz title while responding to it

### Fixed

- Trashed questions appear in question bank type quizzes
- Show same page after saving question in question banks

## [6.4.5] - 2023-03-27

### Added

- New option to limit maximum allowed responses
- New component level option to randomize answers in choice question types

### Changed

- Modified choice type result view for better understanding

### Fixed

- Fixed issue with viewing result of a question bank quiz response
- Fixed issue with finder plugin in Joomla 4
- Quiz selection modal in Single Quiz menu item does not work after new Joomla update
- Cancel button does not work on reports page
- CSV Download do not fetch records for the question bank type quiz
- Error shown when trying to view my response with a certificate enabled

## [6.4.4] - 2023-03-04

### Fixed

- Added missing table column in the installer script for new installations

## [6.4.3] - 2023-03-02

### Added

- New feature to import questions in CSV file
- Show question type icon on questions list

### Fixed

- Category quiz shows wrong page count on the response page
- Editor is not loading after saving question

## [6.4.2] - 2023-02-28

### Fixed

- Missing language associations template causing error while creating a question bank
- Missing DB table in the installations upgraded from v6.1 or earlier to v6.4

## [6.4.1] - 2023-02-27

### Added

- New batch option to assign question banks to questions
- Feature to change question banks of individual questions

### Fixed

- Unable to checkin checkedout question bank
- Fixed false positive database error message

## [6.4.0] - 2023-02-25

### Added

- New feature: Question Banks
- New option to show answers immediately after completing each page
- Show new question title help in placeholder
- New option to show/hide labels of image type questions

### Fixed

- Last page of category quiz should display finish button instead of continue button
- Fixed issue with creating grid questions
- Removed duplicate options tab on quiz form
- Fixed issue with pagination when category quiz is selected

## [6.3.1] - 2023-02-05

### Changed

- Allow saving question only if correct answers are selected

## [6.3.0] - 2023-02-05

### Added

- New feature to capture response time for each page and export in CSV file
- New option to randomize questions on a page in standard quiz
- New option to randomize pages of a standard quiz
- New option to show/hide user response final report fields
- New option to show/hide scorewise messages
- Redirect guest users to login page when they access the unauthorised quiz

### Changed

- Moved score-wise messages out of report layout to show/hide them independently
- Moved user response report options to new tab in component options

### Fixed

- Fixed issue with ROOT category name showing on the listing page
- Export link still shows removed XML extension name instead of json
- Removed unused language strings
- Fixed the language string name of editor maths plugin
- Validation error messages are not visible on the response form
- Fixed issue with checkbox grid form is not loading on default layout
- Access setting is missing on front-end form page
- The form page shows 500 error when the form menu item exists and SEF is not enabled
- Fixed wrong language string (duration in sec) for CSV export
- Fixed issue with child category description not showing
- Fixed issue with min/max selections validation in images question type

## [6.2.2] - 2022-11-03

### Fixed

- Fix for uploading images in the images question type

## [6.2.1] - 2022-11-01

### Added

- Quiz results table to PDF export file

### Fixed

- Fixed error when the registered users creating question from front-end
- Fixed issue with scorewise messages not showing on My Response view
- Fixed issue with JQD migration script

## [6.2.0] - 2022-10-09

### Added

- Integration with Joomla privacy module
- Support for migrating data from Joomla Quiz Deluxe component
- New "Import Quiz" feature added to front-end My Quizzes page
- Import/Export feature now supports JSON files (XML support removed)
- New config option to disable IP address capturing
- PHP 8.1 support added

### Fixed

- Tags are not saving in Joomla 3.10 or later versions
- Fixed UX/CSS of questions customize tab fields
- Do not load chosen plugin on Joomla 4 backend
- Fixed UX of Jump to Page on Bootstrap 5 layout
- Unable to select quiz in Single Quiz menu item
- Page shows error when the component redirect to login/any page

## [6.1.0] - 2022-05-18

### Added

- New feature: Google Sheets integration to stream user responses
- Support to show answers of text/radio questions in certificate
- Allow processing Joomla content plugins on the certificate content

### Fixed

- CSV download file headers cannot be translated from language file
- Fixed PHP warning on the front-end reports dashboard (bootstrap5)
- Fixed issue with backend reports page showing error when quiz locked

## [6.0.6] - 2022-04-23

### Fixed

- Quiz pagination does not work on bootstrap4/5 layouts
- Images type question do not show images when using content plugin
- Images type question do not show images when using form module
- Removed unnecessary character shown on images question results

## [6.0.5] - 2021-12-21

### Added

- Allow support for reopening/editing the finalized response

### Fixed

- Answers submitted earlier are not auto-populated in matching question when reloading the quiz
- Certificate button is not shown on My Responses page the user forgot to download the certificate on result page
- Warning message shown on single quiz menu item creation modal
- Unable to switch pages on backend questions form page on Joomla4

## [6.0.4] - 2021-10-25

### Fixed

- Error shown on the quiz form if the math button plugin is enabled
- My Response page do not show mathematical formulas

## [6.0.3] - 2021-10-22

### Added

- New option to show/hide extended options on front-end form

### Fixed

- Fixed the display issue with tags field on front-end
- Fixed issue with routing to myquizzs/myresponses menu items
- Removed calls to deprecated apis
- Fixed issue with fontname not correctly set for pdf header
- Adding missing aria labels for grid type questions
- Template type and language fields does not show on the Email Templates form
- Error while upgrading the package on Joomla 4

## [6.0.2] - 2021-09-20

### Fixed

- Removed unused options from category list menu item
- Fixed issue with the error when using category list menu item

## [6.0.1] - 2021-09-01

### Changed

- Toolbar dropdown enhancements for bootstrap 5 layout

### Fixed

- Image question min/max height options are not saved
- Quizzes selection modal does not open on course form
- Fix for UI layout issues on Bootstrap 5 layout
- Import quiz function do not work in Joomla 4
- Import button on backend list page is not working

## [6.0.0] - 2021-07-17

### Added

- New question type - Checkbox Grid (Matrix)
- New layout based on Bootstrap 5 library
- Joomla 4 RC 4 support added
- New feature to reorder pages on the questions form
- Images questions now allow users to select images by clicking on them
- New options in Images question types for selecting min/max size
- Include scoreboard/results in the pdf report download

### Changed

- Changed Google charts in consolidated report to ChartJS
- Removed unused buttons from the responses list page

### Fixed

- Joomla tinymce editor not loading when changing pages on question form

## [5.2.4] - 2021-03-25

### Added

- PHP 8 support added
- Response information to the PDF response attached to the email

### Changed

- Sort courses by creation date instead of default order

### Fixed

- Correct answer value is not shown for matching question result
- Failed quizzes in a course are not enabled even allow retry option is enabled
- Mandatory option does not work for select & matching questions

## [5.2.3] - 2021-01-23

### Fixed

- Quiz page title and pagination are not shown when Show Intro option is enabled

## [5.2.2] - 2020-12-10

### Fixed

- Course unable to proceed to next quiz in multi-quiz course

## [5.2.1] - 2020-12-08

### Added

- Show response report after completing a category quiz

## [5.2.0] - 2020-11-29

### Added

- New plugin to integrate Joomla Privacy framework integration
- Allow floating point values for marks in certificate rules
- New option to restrict maximum number retries the user can attempt
- New option to see only failed questions in the quiz response report
- Support for AcyMailing v6 and removed support for v5
- Joomla 4 beta support added

### Changed

- Removed unused code in My Response page which was causing issue

### Fixed

- Add space below the between the pagination and first question
- Layout changes for radio/checkbox questions for bootstrap 4
- Show Category List & Show Search Form options are not working
- Certificate with maximum marks should be awarded when multiple certificates awarded
- Do not load editor when none is selected in default editor option

## [5.1.2] - 2020-05-31

### Fixed

- Choice question charts do not display on consolidated report when the answer titles have quotes
- Multiple certificate rules should result in one certificate based on the user score
- Single quiz menu options do not override component options

## [5.1.1] - 2020-05-06

### Fixed

- Empty block shown after clicking on start quiz button when no intro shown

## [5.1.0] - 2020-04-30

### Added

- New Consolidated Report Module for Community Quizzes
- Option to customize the default layout per category menu item
- Progress bar for Category Quiz: Show page numbers and progress bar
- Score-wise messages and reports: Allow entering HTML with the editor in scorewise messages editor

### Fixed

- HTML tags in question title are escaped when displaying on front-end
- Editor is not shown when adding new question
- Grid columns and Matching question answers are not imported during XML import
- Correct answer for single line questions are saved during import
- Missing language strings in Community Quiz listing module
- Deleting a course does not release quizzes assigned to it

## [5.0.7] - 2019-12-18

### Added

- Allow quiz authors and administrators to edit/modify user responses

### Fixed

- Unicode urls are not created when saving the items

## [5.0.6] - 2019-11-12

### Fixed

- Course next quiz is not enabled automatically
- Rating stars wrapped to the second line
- Password question answers are not considered in calculating the score
- Added missing language string for EasySocial user points setup

## [5.0.5] - 2019-08-11

### Fixed

- Unable to install v5.0.4 package due to missing file

## [5.0.4] - 2019-08-11

### Added

- Sociable support

### Changed

- Removed references to Google+ service

### Fixed

- Hover on tooltips disappear elements when mootools loaded on the page
- Added missing language strings in permission settings page

## [5.0.3] - 2019-06-15

### Added

- New stylized radio buttons and checkboxes for all compatible question types during survey response
- Support to display mathematical formulas
- Support to archive old quizzes to archive tables (performance)
- Show top users quizzes count in backend dashboard page

### Changed

- Float ratings to the right side of the listing item and allow description to wrap around
- Added index to difficulty level column to improve performance
- Updated bootstrap 4 layouts

### Fixed

- Unable to save scorewise messages and certificate rules
- Quiz description is not showing in quizzes listing
- Fixed wrong DB table column references in dashboard page
- Editor button to insert track shortcode is not working
- Wrong references to Community Surveys in the component are removed
- Show recently added responses in the responses listing
- Rating widget causing issues while loading quiz

## [5.0.2] - 2019-03-15

### Fixed

- Joomla Editor do not load all buttons after saving question

## [5.0.1] - 2019-03-05

### Added

- Link to Community Quiz changelog in the dashboard page

### Fixed

- Course completion certificate is not available for download
- Users unable to download the certificate after completion of quiz
- The backend quiz form layout alignment was changed

## [5.0.0] - 2019-02-11

### Added

- v5 final release

### Fixed

- Supporting MySQL instances with short index format

---

## Archived Versions (4.x and earlier)

The following versions are archived and retained in their original format for historical reference.

**5.0.0.b2 (10-Jan-2019)**

- Bug fixes

**5.0.0.b1 (23-Dec-2018)**

- New feature: Courses with learning paths
- Joomla 4 Compatibility added
- New layout using Bootstrap 4 framework
- New router with remove IDs support added
- Added drag and drop images feature for image type questions

- My Responses menu item does not show correctly

- PDF date format option is not working in the generation of pdf certificate
- Installation fails in few MySQL DB instances

**4.8.1 (11-Aug-2018)**

^ Record questions which are skipped from answering by the users

- Category quiz reports do not show results from other quizzes
- Table content is hidden under scrollbar in Matching type question
- Removed double/duplicate semicolon
- Free Text question type does not show correct answer status in the report
- Fixed typo in the language file
- Do not allow the user to save choice images question until at least one image is added
- Unable take the quiz again when the existing response is trashed
- Remove tracking data also when deleting responses

**4.8.0 (11-Jul-2018)**

- Added AcyMailing tag plugin to add quiz URL into newsletters
- Added new option to show quiz page title on the quiz response page
- New feature to show answers number in either numbers or alphabet
- New feature to select answers order (default ordering or random order of answers)

- Ratings are not hidden on quiz form page when component option is disabled

- Quiz do not finalize after timer expiry if last page contains validations
- Response details are not removed from database tables when a response is deleted
- When quiz is closed and reopened, the first page answers are not loaded
- Value 0 in Maximum Questions option do not allow unlimited questions
- Pagination counter is not checked with correct value on first page
- Filters are not shown by default on admin responses list after applying filters
- PHP notice message displayed on admin responses list when the quiz is checked out.

**4.7.0 (03-Jun-2018)**

- GDPR Compliance: Allow users to download their responses and certificates
- Show cutoff and result of the response in My Responses page
- Allow downloading certificate from My Responses page
^ Use separate icon for showing result of correct answers which are not selected by the user

**4.6.6 (01-Apr-2018)**

- New option to customize font name used in PDF file generation
- New option to customize the date format used in PDF certificate
- Added support for `{MARKS}` placeholder in email templates

- Quiz description cannot be hidden when using quiz form module

- Quiz cannot be taken on some templates when using quiz form module
- Quiz options do not work when showing quiz using plugin
- List limit option does not work in category menu item
- PDF results should not be available before the user completes the quiz
- Notification email is not sent when the user failed the quiz

**4.6.5 (31-Jan-2018)**

- New configuration option to customize number of rows shown in quizzes list page
- New custom module positions in quizzes list page quizzes-view-after-row-X where X is the row number
- New feature: Show page numbers with status of responses in each page
- Link response id in backend responses page to the response details page
- Show certificate rules field on front-end quiz form page
^ Show RC codes only when debug mode is enabled.
^ Updated default character set of tables to utf8mb4_unicode_ci

- Next button stuck when taking quiz

- Quiz Form module & content plugin throw error when user already took quiz
- Score report not shown when location is selected as below questions
- Version information shows the component is upto date even through there is a new version is available

**4.6.4 (30-Dec-2017)**

- Wrong username shown in certificate file

**4.6.3 (27-Dec-2017)**

- Allow HTML tags in question title
- Added an option to allow users to choose and jump to selected page
- Added option to customize "Send Email Results" option at quiz level
^ Style for select boxes is missing when show intro is disabled

- Unable to hide final report when show answers is disabled

- Double icon images are showing in administrator pages when Load Bootstrap CSS option is enabled
- Quiz author name is replaced instead of user name in certificate
- Package cannot be installed on PHP version 5.5
- Download certificate button is not showing when show results is disabled
- Certificates cannot be deleted permanently.

**4.6.2 (28-Nov-2017)**

- Installer shows error after completing the installation

**4.6.1 (26-Nov-2017)**

- New option to show user form to send quiz response report via email

- Activity stream should not be sent when guest users replying to quiz

**4.6.0 (11-Nov-2017)**

- New Feature: Chained quiz
- New Feature: Allow Retry option when user failed quiz
- Added debug mode for debugging issues

- Suppressed RC messages from showing when responding to quiz

- Unable to send response when multiple quizzes loaded on same page
- Empty block is showing when all elements of intro are hidden
- Error shown when default editor is not tinymce

**4.5.3 (15-Oct-2017)**

- Unable to delete the questions in new version

**4.5.2 (13-Oct-2017)**

- Added support for showing quiz metadata when using content plugin
- Download PDF from My Responses page
- New event trigger onQuizAfterPublished($context, $quiz, $isNew)
- Add time taken for quiz completion in csv report

- Installing component for the first time, db tables are not created properly

- Mails queued are never sent from CjLib queue
- Quiz shows error on a multipage survey where intro is disabled
- Content plugin - when clicking the "start" page of a single quiz, all quizzes on the page are "opened"
- Question description html is stripped while importing from xml file
- Required media folders are not created during installation
- Error shown on category page
- Community Quiz emails are not triggered using CjLib manual cron

**4.5.1 (15-Jun-2017)**

- Export response completion date and score in csv report
- New option to skip email queue and send emails directly

- Cancel button on certificate creation page shows error

- Show Hits option do not show number of responses in quiz details page
- Failed quiz email template is saved as passed quiz template

**4.5.0 (18-Apr-2017)**

- New feature: Certificates for quizzes
- New Feature: Option to choose activity feed, email and points options in Community Quiz - Quizzes plugin

- Password is ignored while retaking quiz and was entered correctly in previous attempt

- When incorrect password entered, the screen is blocked
- Updating component overrides orientation of choice questions

**4.4.2 (26-Feb-2017)**

- Allow choosing correct answers for textbox, password type questions
- Include textbox, password questions in calculating final marks
- Option to show/hide number of questions of category on category listings
- New option to customize marks report location on the final report
- Show "Try Again" button after taking quiz when multiple answers option is enabled

- Unable to see the categories in admin when logged in with different language

- Users should not be shown intro page when the respond permission is not available
- Response form name conflicts with few chat apps
- Fixed security issue - sql injection due to inadequate request parameter filtering

**4.4.1 (02-Feb-2017)**

- Community Quiz Module causing error when not publishing outside component pages

**4.4.0 (31-Jan-2017)**

- Added support for Community Builder activity streams
- New option added to attach pdf report to response email

- Response count is shown in mobile view even if the option is disabled

- Quizzes order cannot be changed using options
- PDF report cannot be generated on few servers
- User name do not display properly when CB content plugin is enabled
- Marks are calculated incorrectly for grid and matching type questions
- Results are not shown after taking quiz
- Sort on category on categories page and open levels page causes error

**4.3.5 (27-Sep-2016)**

- New option in Community Quiz Module to restrict quizzes from selected categories
- New content plugin to show quizzes in a Joomla! article using short code `{LOADQUIZ }`

**4.3.4 (25-Sep-2016)**

- New module to show top scorers of a quiz

- Scorewise message shown as blank

- Error thrown in ajax response while taking quiz

**4.3.3 (08-Aug-2016)**

- Added option to toggle user display name on front-end

- Scorewise messages are not showing on results page

**4.3.1/2 (28-Jun-2016)**

- Added question option to consider marks of all answers into final score

**4.3.0 (25-Jun-2016)**

- Added support for restricting minimum and maximum answers a user can select with checkbox question
- Added css customization options for question, title and description css classes
- Added new points rule for failed quiz
- Added new activity stream for failed quiz
- Added new email type for failed quiz
- Added new response status column in reports
- New response status filter in responses listing page of reports section
^ Show final score details for category quiz.
^ Marks assigned to wrong answers are not added up in score
^ Redirect guest users to login page when they access reports page

- Added new API event onQuizAfterFailed

- Responses list author filter do not show correct names
- Do not send "User passed quiz" email when the cutoff is not set
- Users unable to delete responses of their surveys from front-end
- My responses page shows error when no category access is given to user
- Added missing language strings

**4.2.6 (28-Apr-2016)**

- Added ALtaUserPoints support

- Added missing language string of component option

- Redirect guest users to login page instead of showing error message
- My Quizzes menu item points to My Responses menu item
- Users unable to view their response details

**4.2.5 (15-Apr-2016)**

- Unable to hide quiz level with configuation option in default layout
- Select and matching type questions cannot be set as mandatory
- My Responses page shows responses of all users (not accessible)
- Search view menu item language string is missing
- User final rating is shown as failed when he scored marks equal to cutoff marks
- User cannot start quiz by pressing enter button in password field
- Unable to hide category list box

**4.2.4 (30-Mar-2016)**

- Added new page to see user response from My Responses list page
^ Joomla 3.5 compatibility update

**4.2.3 (25-Mar-2016)**

- New option to show/hide toolbar

- Search Form could cannot be hidden with its option

**4.2.2 (22-Mar-2016)**

- Added quizzes count statistics in backend categories page (Joomla 3.5 and above)
^ Do not show quiz rating on intro page
^ Joomla 3.5 compatibility updates

- Quizzes cannot be imported from xml file

- Page redirect to homepage when doing search
- Unable to import quizzes
- Progress indicator do not stop when there is an error on server side
- Search form do not return to same page

**4.2.1 (05-Jan-2016)**

- Show custom quiz points as award on front-end listing
- Added direct menu item to levels page on backend

- Edit Level link do not work in backend

**4.2.0 (03-Jan-2016)**

- New Feature: Quiz Difficulty Levels
- New Feature: Classic list layouts
- New quiz option to customize points awarded per quiz per response (admin only)
- Show count of total responses in listing page instead of just the completed responses
- Modified layouts to use sublayouts for supporting better layout overrides
- QuizForm module updated for v4
- Added AlphaUserPoints auto-searchable rules file
^ Moved quiz specific parameters to global parameters
^ Show only categories belongs to the current menu language in form and search pages

- AlphaUserPoints option is not shown in Points system configuration option

- Publish/Unpublish buttons do not work in myquizzes page
- Publishing options not shown for admins on front-end form
- Results are not displayed after completion of quiz
- Star rating is not enabled when intro is enabled and multiple quizzes loaded on same page
- Guest user cannot restart quiz after it is left in the past
- RSS Feed text is not translated
- Unable to load questions on the form if the intro disabled
- Discover button redirect to home page where there is a JavaScript error on the page
- Quiz Form module throw error
- Added missing language strings
- Joomla modules could not be inserted in question description.
- Notice messages are being added from quiz component in apache logs
- Pagination does not show on My Quizzes page

**4.1.1 (21-Sep-2015)**

- TinyMCE editor is not loading on questions editing form after upgrading to v4.1.0

**4.1.0 (20-Sep-2015)**

- New configuration option to show question number in user response page
- New quiz option to limit maximum number of questions that can be answered in a category quiz
- New redesigned My Quizzes view
- Show extended options on front-end form (if enabled in options)
- Direct link to edit questions page on my quizzes page
- Support for Joomla! auto update feature added
- Show user response status and max user score on quiz listing page
^ Show category quiz specific options only when quiz type is changed to category quiz
^ Bootstrap 3 compatibility updates
^ Load content before maps for better user interaction

- Editor do not load on changing page when editing questions

- Editor buttons do not show on question editing page
- Skip Intro option always resets after saving quiz
- Question description and answer explanation fields do not show if they only have an image and no content.
- Answer explanation for textbox/richtextbox are not shown
- Category list box do not show categories in backend quizzes filter
- Show title option not working properly
- Show intro option not working properly
- Progress bars do not display in bootstrap 3 layout in reports
- Images type questions do not display horizontal mode in bootstrap3
- Author name in listing page cannot be hidden using the option layout

**4.0.0 (20-June-2015)**

- Fully redesigned front-end and back-end interface
- New question type: Match the answers
- New question type: File upload
- SEF urls with new router
- Users can now respond without page refresh (Ajax enabled)
- Improved reports page with csv, pdf and excel export
- CjForum support added
- New tagging system, now uses Joomla Tags API
- Email templates to customize the emails going to users
- New responses page to view responses across all quizzes
- New categories listing page
- New page title to easily remember page names while creating quizzes.
- New permissions to give more fine grained permissions to users
- New option to configure avatar and profile systems individually
- Password protect quizzes to allow only desired people to respond to quizzes

**3.5.3 (09-Feb-2015)**

- 500 error occurs when user already taken quiz but not allowed to take multiple times.

**3.5.2 (09-Aug-2014)**

- Assign custom badge for passing out a quiz
- New tags selection control using chosen plugin

- Publish/Unpublish function produces error on backend

- Unable to save tags
- Modal dialog on backend contains untranslated strings

**3.5.1 (18-Jun-2014)**

- Fixed issue with installer

**3.5.0 (13-Jun-2014)**

- Export and Import quiz as XML file

**3.4.1 (19-May-2014)**

- EasySocial support added for avatars, activity and points system

**3.4.0 (18-May-2014)**

- New categories system based on Joomla categories API
- New permission settings
- New points rule to award points for passing out a quiz

**3.3.1 (11-Apr-2014)**

- Added sharing tools at the end of quiz response/results page
- Trigger badge rule - user passed quiz

- New report type is not shown in backend

- User response details page produces error in backend

**3.3.0 (14-Mar-2014)**

- Pass/Fail scoring support
- New user reporting display
- New report measure: success ratio
- Per answer marks allocation

**3.2.3 (08-Mar-2014)**

- badges not being awarded

**3.2.2 (06-Mar-2014)**

- Icons missing on form for delete and sort answers
- Joomla backend site messed up

**3.2.1 (05-Mar-2014)**

- Badges not awarded to users using cjblog
- Score is stored as incorrect value after user responded

**3.2.0 (26-Feb-2014)**

- Complete reports access from backend
- Per answer mark assignment
- Improved final report with success ratio
- Improved front-end response form

- Unable to edit questions from the quiz link displayed on dashboard

**3.1.10 (14-Jan-2014)**

- Upload file button of image type question not shown on Safari

**3.1.7 (02-Nov-2013)**

- Option to hide search box
- Option to hide meta info

- Users cannot edit quiz

**3.1.6 (07-Sep-2013)**

- Admin quiz listing formatting is incorrect
- New quiz button not appearing on Joomla 2.5 on admin page

**3.1.5 (30-Aug-2013)**

- Quiz creation from back-end

- Elements got disappeared when hover mouse due to bootstrap bug

- Pagination wrapped on few templates
- Search box is too small

**3.1.4 (25-July-2013)**

- Copy quiz does not copy correct answer of the options

**3.1.3 (17-July-2013)**

- Copy or duplicate a quiz

**3.1.2 (16-July-2013)**

- Edit quiz/questions shortcut links on My Quizzes page

**3.1.1 (28-Jun-2013)**

- Admin notifications are not sent
- Hide rating box on response page when ratings are disabled

**3.1.0 (25-Jun-2013)**

- Quiz form module to display quiz on any module position

- Error message on quiz form page when no response is recieved

- Bar chart is not visible on print page
- Modal dialog boxes are not clickable
- Unable to delete first page

**3.0.10 (08-May-2013)**

- Category quiz count increases before finalizing the quiz and after finalizing the quiz
- Editing quiz from backend does not save fields properly.

**3.0.9 (28-Apr-2013)**

- New quiz notifications are not sent

**3.0.8 (10-Apr-2013)**

- AUP points not being awarded when user take quiz

**3.0.7 (06-Apr-2013)**

- sh404sef plugin included in package

- Cannot make text fields mandatory

- Social sharing buttons are not displayed

**3.0.6 (26-Mar-2013)**

- Single line text box not visible while taking quiz

**3.0.5 (21-Mar-2013)**

- Error in j3 installer

**3.0.4 (15-Mar-2013)**

- Preview quiz before approving from backend

- Prevent category from assigned to itself as parent

**3.0.3 (11-Mar-2013)**

^ CjLib not found warning message now includes link to download it

- Points not awarded for jomsocial when new quiz is posted
- Image question is not shown on results page
^ Removed unused language strings

**3.0.2 (08-Mar-2013)**

- Show tag description while browsing tagged quizzes

- Images in image question are not responsive

- Refresh button on backend quizzes page not working correctly
- Finish button on form floated to right and invisible

**3.0.1 (01-Mar-2013)**

- Version information on backend dashboard is not getting updated
- Points not get awarded
- Grid column should not contain option to add image
- Follow category button now showing
- Completed time shown on report is wrong

**3.0.0 (20-Feb-2013)**

- Joomla 3 support
- Responsive design optimized for mobiles and tablets
- Two new question types - Select single images and Select multiple images
- Full rewrite - Both front-end and back-end were rewritten from scratch
- New responsive toolbar to quickly access all pages on front-end
- Skip intro - now you can skip introduction page and directly present questions to the users
- Move questions between pages - not just reordering but also move questions between pages without refreshing page
- Email subscriptions for users
- RSS feeds
- New user pages to track their quizzes, responses and subscriptions
- CjBlog badges and points system support
- Tagging support - Enhanced tagging support with new Tags page to manage them
- Advanced search page

**2.0.11 (08-Jan-2013)**

- Hot patch

**2.0.10 (06-Jan-2013)**

- Separate page to display user responses
^ Add class name to score details to allow customization in css

- Unable to view individual user responses

**2.0.0 (22-Sep-2012)**

- Full rewrite of front-end
- CJLib component support
- New listing type - Top rated
- New advanced search page
- CSV Download of report (for statistical purposes)
- Shows score of the user in responses listings report
- Shows time take for each response in responses report
- Page number display in responses
- New built-in pagination which changes its theme according to the main theme
- Ajax form builder for building questions
- Drag and drop question sorting
- Foldable question build areas
- New buttons to expand and collapse all question areas
- New and improved rich text question type
- SEO friendly page titles (uses header tags)
- Validates to PHP 5.3 strict standards
- Captures country, city, browser and os information of users
- New category tree module
- New Joomla search plugin

- Editing question removes the already saved responses of that question

- WYSIWYG editor issues fixed

**1.7.4 (30-Apr-2012)**

- Human friendly timer
- Tagging for quizzes

- Joomla 2.5 related issues fixed

- Unable to save html content
- Non-sef url is used while redirecting to login page

**1.7.0 (15-Dec-2011)**

- Additional notes field for each answered question
- Knowledge Bits
- Multicategorization or repeating subcategory names
- A multipurpose Community Quiz module
- UI Redesign
- Star rating system for quizzes
- Full featured reports to track individual responses
- CSV download for reports
- WYSIWYG editor support
- Version check in backend component control panel

**1.0.0**

- Initial release
