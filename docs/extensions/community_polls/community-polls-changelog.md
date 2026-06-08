---
id: community-polls-changelog
title: Community Polls changelog
sidebar_label: Community Polls changelog
sidebar_position: 7
---

# Changelog

All notable changes to Community Polls are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Each release lists changes under one or more of the following sections:

- **Added** — new features.
- **Changed** — changes to existing functionality.
- **Deprecated** — features that still work but will be removed in a future release.
- **Removed** — features that are no longer available.
- **Fixed** — bug fixes.
- **Security** — fixes for security vulnerabilities.

## [7.1.3] - 2026-06-08

### 🚀 Added
- Added an option to show results without voting

### 🐛 Fixed
- Fixed false positives on database checks

## [7.1.3] - 2026-06-08

### 🚀 Added
- Added option to display results without voting

### 🐛 Fixed
- Fixed false positives in database checks

## [7.1.2] - 2026-06-03

### 🚀 Added
- Enhanced AI services using new AI assistant
- Show weight count of the user votes

## [7.1.1] - 2026-05-25

### 🐛 Fixed
- Editor is not saving description when cache enabled

## [7.1.0] - 2026-05-24

### 🚀 Added
- Added support for Joomla editor for description field
- Improve poll options creation easier with keyboard support
- Allow saving on each step of the wizard when creating new poll
- Weighted (proxy) voting (Thanks to Luca for sponsoring this feature)

### 🐛 Fixed
- The action buttons on the poll options are not visible
- Fixed UX of the toggle buttons in admin

## [7.1.0] - 2026-05-23

### ✨ Added
- **Weighted (proxy) voting** — assign each member 0 to N proxies so their single ballot is counted with a weight of `1 + proxies`. See [Weighted voting](./weighted-voting.md).
- New **Voting weights** step in the poll editor wizard: proxy assignment, CSV import (preview + commit), and a per-poll **Maximum proxies per member** control.
- Weighted results section on the Results page: weighted tally per option (primary figure) with the raw ballot count alongside.
- Administrative **audit report** — member / proxies / weight / voted Y/N — with CSV export. The chosen option is never disclosed.
- Mechanical lock on proxy assignments once the poll goes Live: the panel becomes a read-only mirror, and the server refuses every weight-mutation request.
- Each ballot snapshots the weight it was cast at, so later changes to a member's proxy count never silently rewrite a recorded tally.
- Post-vote confirmation card on the site: when "Show results after vote" is off, voters see the poll's End message (or a generic acknowledgement) and no tally.

### 🛠 Changed
- Poll editor: status (Draft / Live / Closed) is now editable directly from the Publish step's Visibility card. The two save buttons collapsed into a single **Save** that persists whichever status the poll currently carries.
- Answer-options editor: Tab and Enter navigate to the next option's title input; Tab on the last option auto-creates a new row.
- Option-row action buttons (move, delete, image) are visible at rest instead of hover-to-reveal.

### 🐛 Fixed
- Toggle component lost its on-state colour in the Joomla admin (Bootstrap `.bg-primary !important` collision) and the thumb landed in the wrong place when checked. The track now uses a numbered shade and the thumb is absolutely positioned with deterministic offsets.

## [7.0.2] - 2026-05-21

### 🐛 Fixed
- Icons inside textboxes are overlapping text
- Allow polls to be trashed before permanent delete
- Fixed issue with cached entries showing in admin

## [7.0.1] - 2026-05-17

### 🐛 Fixed
- Add user_voted to results payload
- Random polls - filter private and publish window at SQL layer
- Gate on visibility before accepting
- Mod_communitypolls author mode, filter private/publish window
- Mod_cpcategories visibility filter
- Categories polls_count visibility filter
- Approve/reject - idempotent state check, POST required, GET shows confirmation page
- Replace literal control bytes in html.ts
- Public stats exclude hidden-poll activity
- Visibility checks on shortcode and module specific-poll paths
- Strip state fields on create (public + admin)
- Add access-level filter to public list helpers
- Preserve option IDs across site edits
- Send secret on private fetch and preserve option IDs
- Harden HTML sanitizer + add server-side defense
- Voting must enforce visibility
- Block admin routes from site context
- Fixed myPolls pagination offset
- API auth/CSRF status codes - use http_response_code()
- Enhanced validation in CSV file generation
- Fixed duplicate approval row  and wrong task name in moderation URLs
- Tightend SVG uploads validations
- AI routes enforce poll edit rights
- Strip state/admin fields from non-privileged owner update
- Lock results & voters behind visibility rules
- Enforce visibility/access on public poll detail, results, voters
- Strip secret key from all public list/summary responses

## [7.0.0] - 2026-05-10

### Added

- Complete admin rebuild as a React 19 single-page application.
- Unified admin shell — dashboard, polls list, results, audience view, settings, and email templates manager all share the same shell.
- New poll types: ranked-choice and grid (multi-question).
- AI helpers in the poll editor: suggest answer options, summarise live results, and cluster custom answers.
- Single Shondalai AI subscription unlocks the helpers across every Shondalai component on the site.
- Bulk publish, feature, and delete from the polls list with keyboard shortcuts.
- Per-poll daily activity charts and one-click CSV export of votes.
- Modern settings page split into Voting, Editor defaults, Display, AI services, URLs, and Developer sections.
- Approval workflow — front-end submissions land pending and admins action them through one-click email links with single-use tokens.
- Email templates moved from database rows to HTML files under `media/com_communitypolls/emails/`.
- Email templates manager — side-by-side HTML editor, variables panel, live preview at desktop and mobile widths, test send to any address.
- Reset-to-default for any customised email template.
- Email branding section in Settings (logo URL, header title, header subtitle, brand accent, body and page colours, footer text); every notification template inherits.
- Configurable column counts for the public polls and categories listings (Settings → Display).
- Three bundled modules rebuilt: Random Poll, Community Polls (Latest), Community Polls — Categories.
- Light, dark, and system-following theme modes.
- All five bundled plugins rewritten for the modern Joomla 5/6 namespace pattern with `services/provider.php` and `SubscriberInterface`.
- Content plugin: new `{poll id=N mode=... layout=... link=...}` shortcode with full attribute support.
- Editor button: searchable poll picker with status and category filters; double-click to quick-insert.
- Smart Search plugin: indexes polls with author, category, poll type, and featured-status taxonomies.
- Privacy plugin: covers per-user activity counters and abuse reports (including anonymous reports keyed by email).
- Privacy plugin: handles email-only privacy requests for unauthenticated reporters.
- Community Polls events plugin subscribes to `onPollBeforeSave` / `onPollAfterSave` / `onPollAfterDelete` / `onPollChangeState` / `onPollAfterApprove` / `onVoteBeforeSave` / `onVoteAfterSave` / `onVoteAfterDelete`.
- `PollService`, `VoteService`, and `ApprovalService` dispatch lifecycle events for plugin extensibility.
- Color and textarea field types added to the settings schema for the new branding controls.
- Modernised service layer with Joomla 5/6 dependency injection.
- Joomla 5 and Joomla 6 compatibility.
- PHP 8.1+ requirement.

### Changed

- Public listings redesigned for clarity (cards, status chips, voted-count badges).
- Voter restriction logic now combines per-poll and component-level rules cleanly.
- Email layout designed with logo + sitename + subtitle on a clean header band with a hairline divider.
- Editor and preview dialogs use the full screen via React portal so Joomla chrome no longer overlaps them.
- Privacy plugin removal flow wipes resources, votes, options, reports, polls, and the user counter row in dependency order.
- Privacy plugin failures log to the `com_privacy` log channel instead of being silently swallowed.
- Indexed poll URLs include alias and category for cleaner SEF resolution.

### Removed

- Polls Anywhere JavaScript embedding (use the `{poll}` shortcode, the editor button, or an iframe instead).
- Component options page slimmed down — most settings moved into the in-app Settings page.
- Legacy `#__communitypolls_email_templates` table dropped on upgrade; email templates live as files now.
- Legacy v6 plugin event names (`onBeforeSavePoll`, `onAfterSavePoll`, `onAfterVote`) replaced — see the Plugin events doc for the migration map.
- Joomla 4 support dropped (use Joomla 5 or later).

## [6.2.0] - 2025-10-05

### Added

- Joomla 6 compatibility update.

### Changed

- Removed legacy references.
- Updated copyright headers.

## [6.1.9] - 2025-03-23

### Fixed

- Voter list shows name instead of username, discarding config option.
- Removed unused stop words in search.

## [6.1.8] - 2024-11-29

### Added

- Updated Chart.js library to the latest version.

### Changed

- Fixed UX-related issues.

## [6.1.7] - 2024-10-30

### Added

- Show login modal if a guest user is not authorised to vote.

### Fixed

- Issue with the finder plugin.
- Issue with loading captcha.

## [6.1.6] - 2024-08-04

### Added

- New permission to allow a user group to be excluded from multiple-vote restrictions.
- CSS classname `votecount` to the Anywhere output.

### Fixed

- Random Poll module behaviour when a poll is unpublished.
- Google Charts library loaded on a poll with simple bar chart.

## [6.1.5] - 2024-06-07

### Fixed

- JavaScript error in the Random Poll module.

## [6.1.4] - 2024-06-08

### Fixed

- Issue with the installer.

## [6.1.3] - 2024-06-07

### Added

- Use `window.location` when `anywhere` is false.

### Fixed

- Issue with loading the Anywhere script.
- Issue with loading the Anywhere help page in a modal window.

## [6.1.2] - 2024-05-30

### Added

- Support for custom templates in Anywhere scripts.
- Support for Joomla email templates.
- Email notification, activity stream, and points options relocated to component options (new Features tab).

## [6.1.1] - 2024-04-20

### Fixed

- Issue with displaying charts in the Anywhere plugin code.

## [6.1.0] - 2024-04-14

### Added

- Support for Rewardify points.

### Changed

- Removed redundant header for poll messages.

### Fixed

- Issue with the Smart Search plugin.
- Layout issues with several templates when horizontal answer order is selected.
- Outline applied to Results and Vote Form buttons in the content plugin.
- Errors with language strings.
- List view items on mobile.

## [6.0.2] - 2023-11-02

### Changed

- Added missing language string.

### Fixed

- Community Polls editor button not showing.
- Error when removing votes from a poll.
- Administrator buttons not visible on the polls listing page.

## [6.0.1] - 2023-09-26

### Fixed

- Community Polls v6 should not allow installing on Joomla 3.

## [6.0.0] - 2023-09-24

### Added

- **Breaking change:** Joomla 5 support.

### Changed

- **Breaking change:** Removed legacy layer for Joomla 3.

## [5.3.6] - 2023-04-15

### Changed

- Replacing legacy API references.
- Replaced `JFile` / `JFolder` deprecated wrappers with respective filesystem functions.

### Fixed

- Component option help labels.

## [5.3.5] - 2023-03-22

### Fixed

- Issue with the finder plugin.
- After Joomla update, poll form not working.

## [5.3.4] - 2023-03-19

### Added

- Replaced AddThis sharing service with JavaScript social sharing buttons.

### Fixed

- Replaced deprecated code for loading jQuery.

## [5.3.3] - 2023-02-05

### Added

- Allow no restrictions on multiple voting with an option.

### Fixed

- Form layout menu shows error when SEF is disabled.
- Content polls plugin causing issues with Joomla 4 web services.

## [5.3.2] - 2022-12-16

### Added

- Allow no restrictions on multiple voting with an option.

### Fixed

- Form layout menu shows error when SEF is disabled.
- Content polls plugin causing issues with Joomla 4 web services.

## [5.3.1] - 2022-11-02

### Added

- New plugin for supporting the Joomla Privacy component.

## [5.3.0] - 2022-10-24

### Added

- Option to disable animations when switching between form and results.
- Option to show or hide the user avatar on the polls listing page.
- PHP 8.1 support.

### Fixed

- Browser scrolls to top after voting on a poll.
- Content plugins that do not send the article text field.

## [5.2.7] - 2022-08-05

### Fixed

- Issue with the content polls plugin on Joomla 3.

## [5.2.6] - 2022-07-30

### Added

- Use styled radio and checkbox controls when using the Bootstrap 5 layout.

### Changed

- Stop loading redundant Bootstrap support files in Joomla 4.

### Fixed

- Inner padding in the toolbar occupying more space than it should.
- Tags not saving in Joomla 3.10 or later.

## [5.2.5] - 2022-03-11

### Fixed

- Link and YouTube selection dialog not showing on the backend form.
- Poll selection dialog on single-poll menu items.
- Editor button plugin not opening the correct modal window.
- Conflicting class name `HtmlIcon`.
- Edit button not displaying on the poll details page.
- Single-poll menu item selection modal in Joomla 3.

## [5.2.4] - 2021-12-08

### Fixed

- Deprecated API in the community polls content plugin.
- Messages block could not be hidden even after disabling the option.

## [5.2.3] - 2021-11-18

### Fixed

- Content plugin not loading properties.

## [5.2.2] - 2021-11-08

### Fixed

- Categories page shows warning message on Joomla 4.
- Editor plugin issues on Joomla 4.

## [5.2.1] - 2021-10-22

### Added

- Responsive view for grid-type polls in the Bootstrap 5 layout.
- Validations for min/max selections with individual messages.
- Reset answers button to reset grid poll selections.

### Fixed

- Categories list advanced search returning empty.
- Google pie chart not loading in the Random Poll module on non-CP pages.

## [5.2.0] - 2021-07-18

### Added

- Layout based on the Bootstrap 5 library.
- Joomla 4 RC 4 support.

### Changed

- Updated the appearance of the Clear All Votes button.

### Fixed

- Warning messages when using PHP 8.

## [5.1.4] - 2021-03-25

### Added

- PHP 8 support.
- "Closed" badge in the polls listing for polls closed for voting.
- Option to hide the information messages shown after loading a poll.

### Fixed

- Submit button on the front-end poll form.
- Search box overflowing the viewport on mobile.
- Guest users could not vote when "changing votes allowed" was on.
- "Show Title" option not toggling title in the content poll.
- Introtext could not be displayed when using the content poll.
- Warning message shown on a page when displaying a poll with the content plugin.
- Editor button inserted a poll link instead of the shortcode.
- Toolbar menu items not working when SEF was disabled.

## [5.1.3] - 2020-09-04

### Fixed

- Incorrect install SQL file in the previous package.

## [5.1.2] - 2020-09-02

### Fixed

- Hotfix for the previous failed build.

## [5.1.1] - 2020-09-02

### Fixed

- "Add answer" button not working on the backend form page.

## [5.1.0] - 2020-09-01

### Added

- Allow safe HTML tags in poll answers.

### Changed

- Added missing language strings.
- Joomla 4 beta 3 support.
- Updated default collation of tables for new installations.

### Fixed

- Modern chart type could not be used in the content plugin.
- Poll did not load properly when using the YooTheme page builder.
- Unable to show results when the Random Poll module was loaded on the poll details page.
- Modified jQuery CDN URL to HTTPS in the Anywhere script.
- Timeline charts not working when using Google Charts.

## [5.0.10] - 2020-06-02

### Fixed

- Messages shown in a poll displayed using the Anywhere script were misaligned.
- Content poll loaded the Anywhere script even if the `anywhere` flag was not set.
- Content poll Submit button disabled when selecting an answer.
- Categories page showed a PHP warning when there were no polls.

## [5.0.9] - 2020-04-24

### Added

- Geo chart in the backend dashboard.

### Changed

- Replaced the daily votes flash chart with a Google SVG chart.

### Fixed

- reCAPTCHA could not be validated when using v2.

## [5.0.8] - 2020-04-19

### Added

- Show "Use Global" beside each option in poll edit and menu item pages.
- Option to skip the email queue when sending emails.
- Single-poll-level vote restriction method option.
- New statistics: Country, City, and User-Agent in the administrator poll statistics page.

### Fixed

- Unable to select the poll in single-poll menu item configuration.
- Votes count could not be hidden in the polls listing page using the option.
- Poll publish status was ignored when saving the poll from the back end.
- Stopped search engines from indexing poll-suggestion AJAX URLs.
- Poll results not shown when voting closed and the user was eligible.

## [5.0.7] - 2020-01-11

### Added

- New module positions (see documentation for updates).

### Fixed

- Unicode URLs not created when saving items.
- Images attached to answers shown in smaller size and not aligned.
- Poll rendered through Anywhere code did not show proper styles.
- Points not assigned when using the EasySocial user points system.
- Added missing language string for EasySocial user points setup.

## [5.0.6] - 2019-08-11

### Added

- Sociable support.

### Changed

- Removed Google+ references.

### Fixed

- Unable to vote when there were no menu items created.
- Blank box displayed when all elements in poll details were disabled.
- Hover on tooltips removed elements when MooTools was loaded.
- Suggestions tabs did not work in Bootstrap 4.

## [5.0.5] - 2019-07-15

### Fixed

- Voting buttons disabled when selecting an answer in the Random Poll module.

## [5.0.4] - 2019-06-28

### Added

- Custom answer counted as a valid vote (for min/max answers validation).

### Changed

- Improved validation messages display.
- Updates to Bootstrap 4 layouts.
- Bootstrap 4 layout issue with the voted-members list fixed.
- Redesigned the votes count box in the polls listing page.

### Fixed

- Voting button continued to spin and did not complete when a custom answer was shown.
- Stopped the content plugin from parsing non-existent polls.
- Editor button to insert survey shortcode not working.
- Wrong order of columns and headers in backend user listing page.

## [5.0.3] - 2019-03-11

### Added

- Link back to the Community Polls changelog in the dashboard view.

### Changed

- Show results view by default when the user has already voted.

### Fixed

- "Show page heading" menu option breaks the page.
- Backward compatibility of content plugin with the Anywhere option.

## [5.0.2] - 2018-01-12

### Fixed

- Unable to hide the category box on list pages.
- Warning message shown when using PHP 7.x.

## [5.0.1] - 2018-12-27

### Added

- Joomla 4 alpha 5 support.

### Fixed

- Guest users could not vote when reCAPTCHA was enabled.

## [5.0.0] - 2018-11-30

### Added

- Joomla 4 compatibility (full rewrite of code).
- Bootstrap 4-based layout / theme.
- Router with remove-IDs capability.
- Plugin option to configure custom email distribution for new polls and new votes.

### Changed

- Replaced annoying alert messages with inline messages on Anywhere script output.
- Removed deprecated API usages.
- Framework: replaced `RuntimeException` with `Exception`.

### Fixed

- Poll answers not updated with new vote after it is registered.
- "Show polls count" option not working on the categories page.
- Email type could not be edited when creating new email templates.
- Added user email ID to the votes CSV export file.
- Added missing language string in the edit poll screen.
- Empty space shown below poll title in listing pages.
- Timeline chart did not show on a few templates.

## [4.7.0] - 2018-05-29

### Added

- Export responses of a poll to a CSV file (admin only).
- GDPR compliance: allow users to download their voting history.
- GDPR compliance: allow users to delete their own polls using the permission system.

### Changed

- Changed the Save button label to Submit on the poll form page.

### Fixed

- Selected poll customise options on the form page were not visible on mobile browsers.
- Cancel button on the form page did not show correctly with Bootstrap 3-based templates.

## [4.6.5] - 2018-04-01

### Fixed

- Version update showed the wrong status.

## [4.6.4] - 2018-02-09

### Changed

- Updated default character set of tables to `utf8mb4_unicode_ci`.
- EasySocial compatibility update.

### Fixed

- Deleted polls causing alerts in the activity stream.
- No results shown for closed polls when using modern chart.
- Random Poll module did not select a poll from all polls.

## [4.6.3] - 2017-10-31

### Changed

- Redirect user to the polls category page after saving a poll.
- Added untranslated strings.

### Fixed

- Random Poll module did not show the bar chart report after voting.
- New votes not shown after a user voted.

## [4.6.2] - 2017-09-29

### Changed

- Added untranslated strings.

### Fixed

- Random Poll module threw a JavaScript error.
- Default avatar showing for all users in the voters list block.

## [4.6.1] - 2017-08-13

### Fixed

- JavaScript errors after updating to v4.6.0.
- Unable to deselect allowed chart types.

## [4.6.0] - 2017-08-13

### Added

- Modern chart types (doughnut, bar, line) using the Chart.js library.
- Show voted answer in the My Votes page.

### Changed

- Removed support for image charts using the pChart library.

### Fixed

- Clicking on a poll link in My Votes showed an error.
- Clicking on a poll title in My Votes showed an error page.
- Ordering of columns not working on the backend users listing page.
- Voter list showing duplicate users.
- Chart displayed after voting did not show the last recorded vote.

## [4.5.4] - 2017-06-15

> Released together with 4.5.3.

### Added

- Display votes and voters count on the poll details backend page.

### Changed

- EasySocial poll plugin compatibility with PHP strict standards.
- Performance improvements with the votes table.

### Fixed

- Untranslated strings in the backend.
- Poll results showed the chart from the first poll if multiple polls were displayed on the same page.
- Poll form showed JavaScript error when the site template did not define a messages container.

## [4.5.2] - 2017-02-25

### Added

- Feature to show the list of users who voted on the poll.

### Fixed

- Layout issues in the Random Poll module with several templates.
- Guest users could not vote on private polls.
- Secret code not generated when creating a private poll.

## [4.5.1] - 2017-02-04

### Fixed

- Poll validations failed when poll type was checkbox.

## [4.5.0] - 2017-01-06

### Added

- Shareable layouts for the Poll details view.
- AltaUserPoints support.
- Show answers with images in thumbnail format when answers are selected to show inline.
- Points rules for awarding points to users who voted up a question or a reply.
- Option to restrict categories in the Community Answers module.
- JLayout-based layouts for the poll details page.
- Option to toggle answers layout from line-by-line to vertical columns.

### Changed

- Removed deprecated APIs; minimum Joomla version required is 3.5.0.
- Updated EasySocial profile plugin to support v4.
- Changed "Vote Now" label to "Vote" and "View Result" button to "Result".

### Fixed

- All categories not showing in the backend when multilanguage was enabled.
- Ask form did not fit the screen on mobile devices.
- Error shown when ratings were enabled.
- Bounty / Login modal shown as disabled on some templates.
- Poll could not be selected using the single-poll menu item.
- Modal dialogs hidden under a black box on some templates.
- User name not displaying properly when the CB content plugin was enabled.
- Unable to load a poll using embedding in an article.
- Content plugin did not show all data from the poll.
- Bar chart bars aligned to the right with small width when the poll was displayed using the Anywhere script.

## [4.4.6] - 2016-08-08

### Added

- Index on polls table to improve performance of loading lists.
- New user message to show answers the user voted on when the "modify answers" option was enabled.

### Changed

- Added index on `modified_by` field to improve polls listing performance.

### Fixed

- "Create Poll" button did not show if the user was given access to only some categories.
- JomSocial stream always got the user display name instead of the username.
- Custom answer should be mandatory if other answers were not selected.

## [4.4.5] - 2016-05-28

### Added

- Component option to show / hide poll description.

### Fixed

- Unable to vote on a radio-button poll when custom answer was enabled.
- Activity stream always sent with the user's original name even when username was chosen.
- Empty alert shown on the poll details page when the template CSS forced alert visibility.

## [4.4.4] - 2016-05-08

### Fixed

- "Limit Polls" option did not restrict users from creating more polls if the form was accessed directly.
- Wrong URL configured for the Advanced Search button.
- Random polls module always defaulted to random order.
- Poll description not showing when view access was unset.
- Polls not displayed in random order when custom poll IDs were given.

## [4.4.3] - 2016-04-07

### Changed

- Joomla 3.5 compatibility update.

### Fixed

- reCAPTCHA broken after Joomla 3.5.1 upgrade.
- "Limit Polls" parameter did not limit the maximum polls allowed per day.
- No email notification sent to admin users when a new poll was created.
- Default settings of minimum and maximum selection values prevented users from voting.
- Poll end message did not show when displaying a poll with Anywhere code or the content plugin.
- "Show Search Box" option not working.
- Error during installation.

## [4.4.2] - 2016-03-25

### Added

- Option to show / hide the feed icon.

### Changed

- Joomla 3.5 compatibility updates.

### Fixed

- YouTube media did not work with the content plugin.
- Certain HTML content in the poll description caused the polls listing to break.

## [4.4.1] - 2016-01-16

### Added

- Polls statistics on the admin categories page.
- Migrate page to migrate from previous versions.

### Fixed

- Default chart type could not be overridden at poll level.
- Polls ordering option did not work.

## [4.4.0] - 2016-01-10

### Added

- Option to hide the category box.
- Support for attaching a YouTube video for each answer.
- EasySocial plugin to show polls in the user profile.
- Support for customising email notification templates.
- Emails sent using the CjLib queue process.
- Support for extending Community Polls through plugin events.

### Changed

- Moved question layouts to new shareable layouts.

### Fixed

- Poll could not be saved from the backend.
- Captcha did not work when a user voted.
- No approval emails sent for moderation.
- Vote could not be registered.
- Poll-specific chart type could not be selected.

## [4.3.6] - 2015-11-25

### Changed

- Hot patch.

## [4.3.5] - 2015-11-25

### Fixed

- JomSocial points not added; new rules updated.
- Random Poll module threw an error.

## [4.3.4] - 2015-11-24

### Added

- Show poll form in the EasySocial activity stream.

### Changed

- Show only categories belonging to the current menu language in the form and search pages.
- Show end message after voting when Anywhere code was used.
- Show results first when the user already voted and could modify results.
- Support for content plugins in the Random Poll module description.

### Fixed

- Discover button redirected to the home page when there was a JavaScript error on the page.
- Vote button did not complete the task when reCAPTCHA was enabled but not configured.

## [4.3.3] - 2015-10-25

### Fixed

- Highlight notice messages box on the poll details page.
- Untranslated strings on small devices (phones).
- EasySocial activity stream showed HTML tags.
- Activity stream did not get SEF-enabled poll URLs.
- Listing layout did not render properly when the poll description HTML was not well-formed.
- Vote button spun continuously after voting.
- Advanced search not working.
- New poll-creating activity not sent to EasySocial.
- Author polls suggestion tab loaded page content instead of polls.
- Poll form did not work if the Joomla editor was selected as default.

## [4.3.2] - 2015-09-17

### Changed

- Added front-end validation for Minimum and Maximum answers rules.
- Bootstrap 3 compatibility updates.
- Added CjForum and EasySocial rules within the distribution for easy installation.

### Fixed

- Categories did not show to front-end users.
- RSS Feed text was not translated in the language file.

## [4.3.1] - 2015-08-30

### Added

- Support for Joomla AutoUpdater.

## [4.3.0] - 2015-08-29

### Added

- Bootstrap 3-enabled theme.
- Community Polls module.
- Updated form validator to support Joomla 3.4.

### Fixed

- Removed container adding extra padding on the component content.
- Percent votes shown on chart bars not updated after voting.
- Category layout issue.
- Community Polls Categories module not working.
- User display name option did not work; always showed the user's original name.
- RSS Feed text not translated in the language file.
- Vote button in the Random Poll module did not work after upgrade from Joomla 2.5.

## [4.2.5] - 2015-05-31

### Fixed

- Issues related to layouts.

## [4.2.4] - 2015-04-17

### Fixed

- Chart not shown on a poll published in an article using the Anywhere script.

## [4.2.3] - 2015-03-29

### Added

- `mod_cpcategories` module.
- Table to track user location, browser, and platform details.
- Only the last poll result was shown when multiple polls were inserted in an article using the Content Polls plugin.

### Fixed

- Vote expiration did not work when using the Anywhere script.
- Default poll types allowed field was empty on a new installation.
- Vote button continued to spin when using the EasySocial points system.
- Enabling EasySocial activity stream caused vote progress to spin continuously.
- Enabling caching caused votes not to be registered.

## [4.2.2] - 2015-02-21

> Released together with 4.2.1.

### Fixed

- "Show Search Box" option not effective.

## [4.2.0] - 2015-01-28

### Added

- Support for CjForum (Profile Integration, Profile Linking, Avatars, Activity Stream, Points System).
- Joomla 3 sharable layouts for easy customisation.
- Permission for poll review / approval.
- Configuration option to show / hide poll suggestion lists.

### Changed

- Aligned grid answers and controls to centre.

### Fixed

- Issue with the EasySocial plugin.
- Descriptions did not show in the category list table when a category was clicked.
- Stack-answers option hid the custom answer field in the Random Poll module.
- User table counts did not update when a user voted or created a poll.

## [4.1.0] - 2014-10-22

### Fixed

- If multiple polls were embedded through Anywhere code, "already voted" message showed for vote on the second poll.
- Styles not loaded on a poll loaded through Anywhere code.
- Votes count of options did not update after a vote was deleted from the administrator.
- Show "View Result / Form" button only when there were votes registered.
- Unable to override the default values of options if they were disabled.

## [4.0.9] - 2014-09-29

### Added

- New plugin: Editor button to add a poll inside an article.
- Option to display latest or random poll in the Random Poll module.
- Search plugin for Community Polls v4.

### Fixed

- Anywhere code did not work if the `anywhere` flag was not set on the same website.
- Default values not effective when "Use Global" was selected in poll options.
- Stopped executing the content polls plugin in the admin site.
- Random Poll vote button did not work for a second time if the user clicked on it without selecting any option.
- Unable to save HTML content using the Joomla editor.
- Empty icon displayed if the end message was empty.

## [4.0.8] - 2014-09-16

### Fixed

- Setting category in the Random Poll module produced an error.
- Stack-answers option did not display the custom-answer textbox.

## [4.0.7] - 2014-09-06

### Added

- Updated Random Poll module options.

### Fixed

- Random Poll module did not show charts when Google Charts was enabled.
- Random Poll module custom-answer static strings were not translated.
- End message showed BBCode instead of HTML when the BBCode editor was used.

## [4.0.6] - 2014-09-01

### Fixed

- Issue with displaying Anywhere poll.

## [4.0.5] - 2014-08-21

### Fixed

- Unable to save poll if the language filter plugin was enabled.
- Backend always using the BBCode editor irrespective of the editor selected.
- Backend layout issues.

## [4.0.4] - 2014-08-12

### Fixed

- Unable to change the default editor.

## [4.0.3] - 2014-08-11

### Added

- "My Polls" link on toolbar updated to have a linkable URL.

## [4.0.2] - 2014-08-08

### Changed

- Removed unused language strings.

### Fixed

- Radio-button question should not allow custom answer along with selection.

## [4.0.1] - 2014-08-07

### Fixed

- Twitter integration threw an error.

## [4.0.0] - 2014-08-04

### Added

- New Joomla category system support with category-specific permissions.
- Joomla tags support.
- Full ACL support at component, category, and poll levels.
- Revamped front-end and back-end to streamline the UI with Joomla UI.
- Customisation options at component, category, and poll levels.
- WYSIWYG BBCode editor in place of the existing BBCode editor.
- Modify Answers support.
- End-of-Voting message support.
- Be-simple approach with UI, voting, etc. — no more blocking pop-ups.
- Router and URL structure for better SEO.
- Minimum and maximum answers restriction.

### Removed

- Multipoll support.

## [3.5.6] - 2014-06-30

> Released together with 3.5.5.

### Fixed

- Issue with closing date and results-up date when poll was created from the backend.

## [3.5.4] - 2014-06-21

> Released together with 3.5.3.

### Fixed

- Issue with the modify-answers function.

## [3.5.0] - 2014-01-13

### Added

- Answers order: now you can order answers by number of votes.
- Save and Save & Close buttons on the back-end edit page.
- Alias: admins can enter the alias manually instead of having it generated automatically.
- Menu item shortcut for Featured Polls.
- Menu item shortcut for Latest Polls.
- Menu item shortcut for Most Voted Polls.
- Events to support extendibility of the component: `onBeforeSavePoll`, `onAfterSavePoll`, `onAfterVote`.
- Joomla 3.2 fully supported.

### Changed

- Generate Unicode slugs only when Unicode aliases are enabled in Global Configuration.
- Stop displaying the component menu on the back-end dashboard since it already exists.

### Fixed

- Sync button on the back end did not sync statistics properly.
- xhtml URLs caused issues on some systems.
- Display user-friendly login message when the user tries to vote on a poll they are not authorised for.
- Vote points not registered if using JomSocial points.
- Dialog box not shown on certain templates.
- Form validation messages not translatable.

## [3.4.4] - 2013-11-10

### Fixed

- Typo in language file.
- Users could not edit polls from the front end.
- Poll closing date and results-up date did not consider time-zone differences.
- Captcha update for Joomla 3.

## [3.4.3] - 2013-10-24

### Changed

- Hide suggestions box when no suggestions are enabled.

### Fixed

- Links in mails sent on approval from admin screen not working.

## [3.4.2] - 2013-10-13

### Fixed

- Update to previous install broke Community Polls in Joomla 2.5.

## [3.4.1] - 2013-10-11

### Added

- Stack Answers: enable "Custom Answer" to stack to existing answers when a user adds one.
- Joomla 3.2 compatibility.
- Vote Expiration: set vote expiration in minutes after which a user can vote again.

### Changed

- "No results found" message now has alert-box styling.
- Images now have alt text.

### Fixed

- URLs in breadcrumbs had wrong links.
- Dates not considering timezone differences.
- "Publish Results" value not in effect when using the Anywhere script.
- Search box was too small to access.

## [3.4.0] - 2013-09-09

### Added

- Vote Expiration: set vote expiration in minutes; works with IP and username restrictions.
- reCAPTCHA support for grid polls.
- Missing entries for back-end translation files.

## [3.3.12] - 2013-08-29

### Added

- reCAPTCHA support for voting using a new permission setting.

### Fixed

- Feeds were not shown on Joomla 3.x.

## [3.3.11] - 2013-08-14

### Fixed

- Points not awarded using JomSocial points.
- Search box always got a default value, causing the question list to be empty.

## [3.3.10] - 2013-07-31

### Fixed

- Unable to get categories in the Komento plugin.

## [3.3.9] - 2013-07-28

### Fixed

- Search box was too small.

## [3.3.8] - 2013-07-15

### Fixed

- Edit poll link not working on the admin listing page.

## [3.3.7] - 2013-07-08

### Added

- Daily voting stats chart on the dashboard.

### Fixed

- Search button not working on the admin listing page.

## [3.3.6] - 2013-05-22

### Added

- User votes listing page in the administrator users page.
- User sync using AJAX sync function to avoid timeouts.

### Changed

- Added indexes to optimise performance.

## [3.3.5] - 2013-05-20

### Fixed

- Multipolls page could not get data.
- Bug in the Komento plugin.

## [3.3.4] - 2013-05-18

### Fixed

- Poll suggestions list had the same URL for all polls.

## [3.3.3] - 2013-05-14

### Fixed

- Error while creating a poll using the secret flag.

## [3.3.2] - 2013-05-12

### Added

- Configuration entries to disable jQuery and Bootstrap to debug jQuery issues.

## [3.3.1] - 2013-05-11

### Added

- Private Polls: create private polls accessible only through a secret URL.

## [3.3.0] - 2013-05-09

### Added

- Votes listing page in the admin site to view and manage votes recorded for each poll.
- Daily votes chart on the dashboard to display overall voting trend.
- Daily votes chart on the poll details page in the admin section.

### Changed

- Performance improvements in the sync function.

### Fixed

- Author polls list not getting populated in suggestions below the poll page.
- No error displayed but poll not saved when description was mandatory.
- Poll creator should see the results irrespective of whether the poll-results view date had passed.
- File upload form floated around the page on some templates.

## [3.2.5] - 2013-03-29

### Added

- Loading status shown after clicking the Vote button; multiple clicks are now avoided.
- sh404SEF plugin included in the package with full feature support.

### Changed

- Multipoll layout polls now respect their own colour palettes.
- Breadcrumb enhancements for the poll details page.

### Fixed

- Pagination layout issues with some templates.
- Spin wheel did not stop after voting if the user did not have view-result permission.
- Poll accepted votes after the closing date passed.
- Both poll form and "Vote Now" buttons visible at the same time on some templates.

## [3.2.3] - 2013-03-27

> Hot-fix for v3.2.2 (also released 2013-03-27).

### Added

- Select default menu item type from latest, popular, most-voted, or ordered polls listing pages.
- Select polls listing time duration per menu item.

### Changed

- Date selection through date picker on the poll form.

### Fixed

- Wrong message displayed after a poll was auto-approved.

## [3.2.1] - 2013-03-18

### Fixed

- "Anonymous" option not shown on the backend form.

## [3.2.0] - 2013-03-17

### Added

- Customisation configuration for front-end poll form options.
- Anonymous polls.

### Fixed

- No username present in notification emails when poll was approved from email.
- "View Results" permission not working for the multipolls page.
- User could not vote by entering only a custom answer.
- Stopped adding category parent as itself to avoid errors on the categories page.

## [3.1.3] - 2013-02-21

### Added

- Menu option to redirect the user to a different page after voting on the multipoll page.

### Fixed

- Content plugins not being processed in the poll description.
- No HTML being saved when using the CK editor.

## [3.1.2] - 2013-02-16

### Fixed

- RSS Feed button not visible.
- Menu items language strings not translated.
- Spinner did not stop but vote was registered.
- Percentage bar not visible on Gpie chart if the percentage was over 90.

## [3.1.1] - 2013-02-10

### Fixed

- URLs incorrect in EasyComment notifications.
- Unable to show more than 20 listings on the listing page.

## [3.1.0] - 2013-01-28

### Fixed

- Missing poll moderation selection configuration option.
- Untranslated strings.
- Alias should not be mandatory.

## [3.0.9] - 2013-01-24

### Added

- EasyComment support.

## [3.0.8] - 2013-01-18

### Fixed

- Hot patch for the previous release.

## [3.0.7] - 2013-01-18

### Changed

- Added scope to Bootstrap CSS to avoid template conflicts.

### Fixed

- Admin notifications were not sent.

## [3.0.6] - 2013-01-15

### Changed

- Disallow multiple submits when voting through Anywhere.

### Fixed

- Progress animation not shown when using Anywhere.

## [3.0.5] - 2013-01-13

### Changed

- Use native poll voting method while voting using the content plugin.

### Fixed

- Stopped showing an error when no chart types were selected in configuration.

## [3.0.4] - 2013-01-07

### Changed

- Pull avatar to the left side when viewing on mobile phones instead of spanning the full row.

### Fixed

- Minimum description character length not respected.
- Checkbox questions not selectable on IE7.
- Email notification not sent if voted using Polls Anywhere.

## [3.0.3] - 2013-01-07

### Changed

- Added comment blocks on the template for easy customisation.

### Fixed

- Joomla input API bug prevented loading JSON request values; reverted to JRequest temporarily.

## [3.0.2] - 2012-12-31

### Changed

- Updated backend functions to use the Joomla 12.1 platform JInput API.
- Removed unused language strings.

## [3.0.1] - 2012-12-31

### Added

- CjBlog badges support.

### Fixed

- "Answer link" label not shown in the admin poll form.

## [3.0.0] - 2012-12-30

### Added

- Joomla 3.0 support.
- Full rewrite of front-end and back-end with Bootstrap UI look and feel.
- Categories list display support on the front-end listing with customisable options for number of rows of categories.
- Permission settings to control attachments and editing polls.
- Multi Polls with images and URLs display support.
- Redesigned control panel page for the administrator site.
- AJAX-enabled publishing options for the admin site.
- Easy-to-understand design of the poll creation form.
- Multi-language support: restrict categories and polls to your chosen language.
- Daily responses chart and sharing tools occupy less space with a foldable accordion.

### Changed

- Removed jQuery UI support as it conflicted with Bootstrap and there was no significant progress in the jQuery UI project.

### Fixed

- A number of bugs were fixed during the rewrite phase.

## [2.1.2] - 2012-12-05

### Fixed

- JSON calls did not pass through in IE7.

## [2.1.1] - 2012-11-29

### Fixed

- Unable to use more than 7 colours on Anywhere polls layouts.
- JomSocial activity stream not working for new polls.
- User display name not changed even if set in configuration.

## [2.1.0] - 2012-11-25

### Added

- Poll option to publish results only after a specified date.
- Display poll result messages in Anywhere.
- Multipolls support: display multiple polls on the same page like a survey (with limited functionality).
- Load users at one go in third-party integrations to avoid multiple DB calls (Kunena and CjBlog only).

### Fixed

- Language file correction for typo.

## [2.0.17] - 2012-09-10

### Added

- Ability to update alias.

### Changed

- Removed unused helper methods.
- PHP 5.3 strict mode support changes.
- Migrated common functions to CjLib.

## [2.0.16] - 2012-08-22

### Added

- Debug mode to find errors.

### Fixed

- Front-end dashboard page blocks not aligned properly in IE.

## [2.0.15] - 2012-08-01

### Changed

- Update to CjLib new version support.

### Fixed

- Categories not showing correct statistics.

## [2.0.14] - 2012-07-17

### Changed

- Language strings correction.

### Fixed

- Guests unable to vote when a vote was recorded.
- Categories menu not functioning.

## [2.0.13] - 2012-07-14

### Added

- Give points to poll author when a vote was received.

## [2.0.12] - 2012-07-08

### Changed

- Version number correction.

## [2.0.11] - 2012-07-07

### Changed

- Changes related to STRICT mode compliance of PHP.
- CjLib new API support.

### Fixed

- Minor language string correction.
- Unable to select categories in menu item creation.

## [2.0.10] - 2012-07-01

### Added

- DISQUS comment support.
- Module positions introduced.

## [2.0.9] - 2012-05-31

### Fixed

- Unable to load poll using Anywhere.

## [2.0.8] - 2012-05-29

### Fixed

- Category poll count not updated while saving a poll.
- Editing from backend deleted existing answers.
- Sharing options could not be deselected after selecting in configuration.
- Chart did not load when "Use Global" was selected.

## [2.0.7] - 2012-05-18

### Added

- Community Polls module update.

### Fixed

- Unable to deselect sharing services once selected.
- Included pChart libraries only when required.
- Saving a poll without changing the default answer should give an error.

## [2.0.6] - 2012-05-14

### Added

- Embed polls in articles.

### Fixed

- Added missing language string in the language file.
- Progress spinner not showing in Anywhere.

## [2.0.5] - 2012-05-13

### Fixed

- Unable to approve polls from the front end.
- Breadcrumb URLs missing `itemid`; uses `catid` instead of `id`.

## [2.0.4] - 2012-05-12

### Added

- Images and links support for Anywhere.
- Ability to choose chart type from Anywhere JavaScript options.
- Ability to pass colour palette name in Anywhere JavaScript options.
- RSS Feed link in polls listings page.

### Fixed

- Unable to load multiple polls on the same page using Anywhere.
- BBCode not processed for poll description.

## [2.0.3] - 2012-05-08

### Added

- Ability to restrict polls for selected category per menu item level.

## [2.0.2] - 2012-05-08

### Changed

- Removed debug information from the admin save-poll function.

### Fixed

- Unable to save poll from the backend in Joomla 1.5.
- Column span not set to the correct number, causing polls list table footer not to span properly.
- Username not displayed in listings if no avatar component was selected.
- Minor corrections in language strings shown when not authorised.
- Unable to hide Anywhere block even when it was disabled in the backend.

## [2.0.1] - 2012-05-07

### Added

- User documentation page for advanced Anywhere configuration on the share block.

### Fixed

- Blank page displayed after poll approval from the backend.
- Twitter tweet URL and activity stream missing `itemid`.
- 500 error shown after poll creation when moderation was enabled.
- Pipe symbol caused issues with language strings in Joomla 1.5.
- "User polls" button should only be visible to logged-in users.

## [2.0.0] - 2012-05-05

### Added

- Image bar chart and image pie chart.
- Multiple-poll support: Random poll & Polls Anywhere update for supporting multiple polls on the same page.
- Poll creation from the backend: add polls from both front-end and back-end.
- Colour palettes: choose from different palettes instead of fixed colours.
- Linking answers: attach hyperlinks to poll answers along with adding images for each answer.
- Dashboard page for a more beautiful and customisable front-end.
- Full rewrite: the front-end is fully rewritten for best performance.
- Improved bookmarking: better sharing tools.
- Timeline graphs for displaying voting timeline.
- Natural search feature.
- Improved poll suggestions: now loads on demand to reduce server load.
- Facebook comments support.
- Tableless design.
- "See results" option in random Community Polls module.
- Support for FB Comments plugins / API.
- `mod_communitypolls` and Xmap plugin for Joomla 1.6.
- Date button bug fix.
- JomSocial activity stream item for guests.
- Ordering option for polls.

### Fixed

- "Results are ready" shown on zero votes.
- Image-per-option did not display after the first view following voting.
- Publishing a poll from moderation caused an incorrect hyperlink in the activity stream.

## [1.7.2] - 2011-11-15

### Added

- RSS feeds.
- `mod_communitypolls.zip`.

### Fixed

- Backend: poll closing date — not possible to change.

## [1.7.1] - 2011-10-23

### Added

- Allow users to enter their own answer / options.
- Notification for vote posted on a given poll.
- Random Poll module update.

## [1.7.0] - 2011-08-28

### Added

- Multi-level category system.
- Kunena 1.6.3+ support.
- Random Poll module update.
- Enhanced UI for admin configuration.

### Fixed

- Correction in language entry.

## [1.6.4] - 2011-04-27

> Released together with v1.5.29.

### Added

- Multi-level categories.
- Image support for Polls Anywhere.
- Kunena 1.6.3+ support.
- Improved admin configuration UI.
- One installer for all Joomla versions.

### Fixed

- Date format invalid for dates over 1 year.
- Invalid date format displayed in admin pages in Joomla 1.6 / 7.
- "List of active polls": not the right category.
- Description not being saved.

## [1.6.3] - 2011-04-23

> Released together with v1.5.28.

### Added

- jQuery plugin v1.5.0 & v1.6.1 support.
- HTTPS support for Google Charts.

### Fixed

- Random Poll module bug fixes.
- Category ID not in effect on home page.
- Category links not working as expected.
- No space between label and category name.
- Duplicate style height in `list.php`.
- Translation-friendly dates.
- Answers not displayed in the order they were posted.
- "Back to poll" link in user polls page not working.
- Moved admin notification email body and subject to language file.
- Error with grid poll which cast vote on a few systems.
- v1.5.25 missing translation in category box tooltip.

## [1.6.2] - 2011-03-27

> Released together with v1.5.27.

### Changed

- General maintenance update.

## [1.6.1] - 2011-03-20

> Released together with v1.5.26. Also: hotpatch update for v1.6.0 released 2011-01-22.

### Changed

- v1.6.1 updated to sync with the 1.5.x version.

### Fixed

- SEF issues — some URLs not passed through `JRoute`.
- Grid poll layout issues.
- "Add another column" button not styled in the New Poll page.

## [1.5.29] - 2011-04-27

> Same release as v1.6.4 above.

## [1.5.28] - 2011-04-23

> Same release as v1.6.3 above.

## [1.5.27] - 2011-03-27

> Same release as v1.6.2 above.

## [1.5.26] - 2011-03-20

> Same release as v1.6.1 above.

## [1.5.25] - 2011-02-15

### Added

- Reset a Poll.
- Number of votes versus number of poll submissions.
- Email notification to "Admin Group".
- Twitter new API update.

### Fixed

- Multi Radio Grid Polls: only one chance to see the results.
- Unpublish not functioning.
- "Poll submitted for approval" — email link broken.
- `txt_n_*` strings hard to translate.

## [1.5.24] - 2010-11-27

### Added

- Improved human-friendly dates.
- jQuery tabs and buttons for enhanced user experience and a unique look-and-feel across CoreJoomla components.
- Improved notification emails.

### Fixed

- "Create Poll" issues with IE7 and IE8.
- Mighty Touch bug fixes.
- JavaScript error message appearing while uploading an image in IE8.
- Moved hardcoded styles in the View Poll page to a CSS file.

## [1.5.23] - 2010-10-26

### Fixed

- Unable to add more than two options in IE7 (related to an IE7 bug; other versions of IE not affected).
- Unable to post description when set mandatory in IE7 (related to an IE7 bug).
- PollsAnywhere not working after the last update (missing JavaScript file).

## [1.5.22] - 2010-10-26

### Fixed

- Unable to load template on some custom Joomla templates.
- Failed to update the PollsAnywhere JS file during installation.

## [1.5.21] - 2010-10-24

### Added

- Template overrides (see documentation).
- Ability to change theme dynamically using a request parameter (see FAQs).
- Include poll URL in poll-approval notification mail.
- Link IP address to whois database in admin and site pages.
- Menu toolbar to have backlinks on the author polls page.
- "Back To Poll" menu in the voted-users page.
- Total votes display on the View Poll page.

### Fixed

- Empty row displayed in user list when a Joomla user is deleted.
- Custom date format not effective on the View Poll page.
- Date format not considering the timezone lead / lag.
- Moved hardcoded language strings to language file.
- Unadjusted div widths on listing page.
- Buttons too close to each other.
- Setting description mandatory did not allow saving the poll.

## [1.5.20] - 2010-10-11

### Added

- Menu item for "Add New Poll" page.

### Fixed

- No emails sent after poll approval.
- Preserve `itemid`s to retain modules on pages.
- Language text not translated in JomSocial activity stream when approving a poll from the backend.
- Warning message in Firebug for JavaScript handlers.

## [1.5.19] - 2010-09-26

### Fixed

- Quotation mark appearing below avatar in Polls Anywhere view.
- Website name ended with slash in Polls Anywhere view.

## [1.5.18] - 2010-09-23

### Added

- Allow voting restriction to one or many of IP address, cookie, and username.

### Fixed

- No points for approval of polls from the CPanel page.
- Polls Anywhere not working on some pages.

## [1.5.17] - 2010-09-03

### Added

- Avatar in voted-users page.
- IP address of voted users (visible only to backend users).

### Fixed

- "Cast Vote" button should not be displayed when the voter is not eligible for voting.
- Hide "Add New Poll" button from unauthorised users.
- Toolbar CSS styling issue.

## [1.5.16] - 2010-09-02

### Added

- Hide results from viewing for selected groups of front-end users.
- Polls Anywhere on individual poll level.
- Polls Anywhere enabled by default for all new and old polls unless disabled at poll level.
- Support for JAComment comment system.

### Fixed

- Wrong version shown in version information.
- Polls Anywhere preview was allowing double voting.
- Polls Anywhere preview not showing up on some systems.
- Missing `jQuery.noConflict` in one JS file.
- Added default text in Polls Anywhere div to avoid truncation of tag in WYSIWYG save.
- Missing poll suggestions in grid poll.

## [1.5.15] - 2010-08-27

### Fixed

- MooTools conflict on a few systems.
- Random Poll module update.

## [1.5.14] - 2010-08-25

### Changed

- Made compatible with the MooTools 1.2 plugin; now using jQuery for all interactions.
- Process content plugins in poll description field (configurable from backend).
- Improved poll suggestions tabs with a new look (tabs were not working on some systems).

### Fixed

- Embed Poll preview not working.
- Polls Anywhere avatar not displaying outside the owner website.
- Missing end HTML tags for options in backend configuration.

## [1.5.13] - 2010-08-06

### Added

- Polls Anywhere.
- Mighty Touch points support.
- Redirect to login and route back to referrer page upon login when the user is not logged in.

### Fixed

- Moved language strings in code to language file.
- Tweaked SQL queries to boost performance.
- IE8 issue in viewing the cast-vote button.
- Grid poll did not cast vote properly in IE7 / 8.

## [1.5.12]

### Fixed

- Guests unable to vote after the previous update.
- ShareThis option help tooltip not showing the description in admin configuration.

## [1.5.11]

### Added

- ShareThis widget integration.

### Fixed

- Poll votes count issue.
- Voter names not appearing on the "users who voted" page.
- Vote count went into millions after upgrade to v1.5.10.

## [1.5.10]

### Added

- Grid polls feature.

### Fixed

- Points not awarded on approval of poll from backend.
- Voted users should not be displayed before a couple of votes registered.
- Poll result should not be shown if fewer than 2 votes registered.
- Text "poll" displayed instead of votes in admin poll details page.
- Moved static texts to language files.

## [1.5.9]

### Added

- Sync button on backend polls list page to update the polls count manually.

### Fixed

- Issue while deleting polls from backend that did not update polls count properly.

## [1.5.8]

### Added

- Interactive Pie Chart.
- Delete polls from backend feature.

### Fixed

- Typo of table variable (fixes Random Poll module bug).
- CSS style fix (button text not displaying properly on some Rocket Theme templates).
- Joomla 1.6 supporting updates.
- Error displaying charts when poll could not be retrieved.
- Twitter update message length issue fix.
- Alpha User Points avatar fix per latest release.
- Null checks missing in a few places for pagination links.
- Filter combo boxes wrapped on list pages.

## [1.5.7]

### Added

- Mighty Extensions username link dropdown box integration.
- Mighty Extensions Avatar profile link integration.
- Version check block in Administration CPanel.

### Fixed

- Small issue with polls count when checkboxes were used.

## [1.5.6]

### Added

- Multiple selection checkboxes support.
- WYSIWYG editor support for editing polls in backend.

### Fixed

- A few UI issues.

## [1.5.5]

### Added

- Mighty Touch integration.
- WYSIWYG editor support for poll description.
- Tracking option selected by the user (visible to admins).
- Users list page to display poll statistics of each user (backend pages).
- IP address column in moderated backend polls list and poll details pages.
- Details link in polls list for each link, displaying who voted on the poll (backend).
- Username column in control panel pending list view.

### Fixed

- Points should not be awarded before poll is approved.
- PHP notice in poll view page.
- CPanel button in backend pages not functioning.
- PHP include error when AUP points system selected but not installed.

## [1.5.4]

### Changed

- Moved static text entries in the View Poll page to language file.
- Removed `$mainframe` (Joomla 1.6 compatibility changes).

### Fixed

- Unable to vote on Rocket Theme templates.
- Community Polls button CSS overrode JComments button CSS.
- Scrambled poll titles in administration control panel.
- IE6 issues with sidebar.

## [1.5.3]

### Added

- Image attachments facility for poll options.
- CPAuthorization: a granular permission system to restrict the usage of Community Polls.
- IP-based restriction of guest user votes.

### Changed

- Major UI enhancements to support most popular browsers including IE6.
- Twitter updates with bit.ly and tinyurl.com support.

### Fixed

- Points awarded when a poll was created but not approved (only when poll moderation was enabled).

### Security

- Security issues fixed (please upgrade immediately).

## [1.5.2]

### Added

- Backend pages: Dashboard, Statistics, and Support.
- Approval tool in Dashboard page.
- Backend option to change the order of poll suggestions displayed on the View Poll page.
- Backend option to limit the number of polls displayed on the polls listing page.
- Backend option to change chart colours.
- Backend option to change pie chart height.
- Preview poll before voting via a new front-end button.
- Backend option to control preview-poll button display.
- Navigate to previous poll with a new button.
- Page to list polls created by the user whose poll is being viewed.
- Page to display the list of registered users who voted on a poll.
- Recording IP addresses of registered and guest users.
- Recording votes from guest users.
- More information on the polls view page (category and creator name).

### Fixed

- Headings and subheadings to display drop shadows for a better look and feel.
- Display issue when none of the poll suggestions were enabled.
- A few issues with email notification on some systems.
- Email body content length limit issue.

## [1.5.1]

### Fixed

- Issues with the email notification functionality.

### Security

- A few security-related issues fixed (recommended upgrade).

## [1.5.0]

### Added

- Featured Polls.
- Advanced Google pie charts.
- Time-bounded polls.
- Poll suggestions: Author Polls and Featured Polls.
- Email notification on approval of polls.
- Publishing features on the View Poll page.

## [1.0.9]

### Fixed

- Hotfix for warning display when there are no results found in the poll suggestions feature.

## [1.0.8]

### Added

- AJAX voting functionality.
- View Poll interface with the avatar and sidebar.
- JomSocial activity stream.
- Poll suggestions: Latest Polls and Most Voted Polls.
- Updated View Poll and New Poll pages with the Jaaji template.
- Module position `cp_below_avatar` (loaded on 20% of the width of the template) for Jaaji and Sirimalli templates.
- Updated administrator configuration options.

### Changed

- Bar chart look and feel.
- Sirimalli template buttons removed for effective space utilisation.

### Removed

- Pie chart removed due to a few bugs (will be added in the next release).

### Fixed

- Issues with backend configuration options not reflecting changes.
- Front-end issue showing non-related polls in the related polls section; an exclude keyword list was introduced.
- A few minor bugs with the list layout.

## [1.0.7]

### Added

- Templating system.
- Updated templates Sirimalli and Jaaji.
- Support for new avatars: Kunena, Gravatar, Alpha User Points.

### Fixed

- Configuration parameter propagation delay issue.
- Categories show / hide issue.
- A few style issues.

## [1.0.6]

### Added

- Poll editing feature on administration control panel.
- Description option for polls.
- JomComment comments count link on listing page.

### Fixed

- Avatar issue with Community Builder.
- A few security-related issues.

## [1.0.5]

### Added

- Related Polls feature.

### Fixed

- Performance issues with the Advanced pie chart.

## [1.0.4]

### Added

- Advanced pie chart to display results.
- Configuration option for date format selection.
- Configuration option for username format selection.
- JComments comments count link on list page.

## [1.0.3]

### Added

- Support for JComments. Now Community Polls supports two great comment systems: JomComment and JComment.

## [1.0.2]

### Added

- Moderation feature for polls. Submitted polls can be reviewed in the admin control panel before they are published. Moderation can be set to guest polls or all polls.

## [1.0.1]

### Added

- Configuration parameter "Limit Polls". Limit the number of polls per day per person. Set 0 for no limit.

### Fixed

- Bug with configuration parameter not displaying the right option.

## [1.0.0] - 2009-09-14

### Added

- Initial release.
