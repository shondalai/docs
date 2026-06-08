---
id: troubleshooting-guide-for-community-answers
title: Troubleshooting guide for Community Answers
sidebar_label: Troubleshooting
sidebar_position: 1
---

Use this guide to diagnose common Community Answers v7 setup issues.

## The frontend page is blank or assets are not loading

- Confirm the package was built and installed with the `com_communityanswers/media` assets.
- Open **Components > Community Answers > Settings > Developer** and make sure developer mode is disabled on production.
- If developer mode is enabled locally, make sure the Vite dev server URL is correct and the dev server is running.
- Clear Joomla cache and browser cache after updating the package.
- Check the browser console for blocked JavaScript or mixed-content errors.

## URLs show `component/communityanswers`

- Create Joomla menu items for the main Community Answers pages.
- Make sure the menu items are published and accessible to the same user groups as the component.
- Enable Joomla SEF URLs.
- Create category menu items for important top-level categories if you want category aliases in question URLs.
- Do not hard-code React paths. Use Joomla-generated URLs from the component, modules, and API payloads.

## Old question or category URLs do not open

- Keep legacy category aliases stable during migration.
- Create menu items for the question feed and important categories.
- Confirm the Community Answers router file is installed with the component package.
- If a URL points to a deleted or unpublished category/question, publish the item or redirect it with Joomla redirects.

## Guests see profile, ask, or moderation links

- Clear browser and Joomla cache after changing permissions.
- Confirm guests do not have moderator permissions.
- Confirm guest users do not have create/reply permissions unless you intentionally allow guest posting.
- The toolbar user button should route guests to login. If it does not, verify that Joomla login routing and menu assignments are configured.

## A logged-in user cannot answer

- Check `core.reply` permission at the component level.
- Check category-level permissions if the question belongs to a restricted category.
- Check `core.view` and `core.view.replies`; users must be able to view the question and replies before participating.
- Check reputation gates in **Settings > Reputation**.
- If the question is closed or already restricted by moderation, answering is not allowed.

## A user can view questions but cannot see answers

- Grant `core.view.replies` to the appropriate user group.
- Check category-level access for the question category.
- Make sure the answer rows are published.

## Users cannot edit or delete their own content

- Grant `core.edit.own` for editing own questions and replies.
- Grant `core.edit` only to groups that can edit all questions and replies.
- Grant `core.delete` only to groups that can delete or unpublish content from the frontend.
- Remember that delete is intentionally not granted by edit-own.

## The ask form does not show the Joomla editor

- Confirm a Joomla editor plugin is enabled.
- Check the editor assigned to the current user.
- If TinyMCE or another editor is blocked by template JavaScript, test with Joomla's default template.
- Clear cache after changing editor settings.

## Tags do not save or tag links are wrong

- Community Answers v7 uses Joomla core tags.
- Make sure Joomla tags are enabled and the user has permission to use tags.
- Re-save the question if it was created during an earlier test build that used standalone tags.
- Confirm tag links are generated from the API payload instead of hard-coded frontend paths.

## Bounty creation fails

- Enable bounties in **Settings > Bounties**.
- Grant `ca.bounty.create` permission.
- Check the user's connected points balance.
- Confirm the selected amount is between the configured minimum and maximum.
- Confirm the question is open and does not already have an accepted answer.
- If using an external points provider, verify the provider is selected in **Settings > Integrations > Points** and is available.

## Bounties do not expire

- Enable the **Community Answers - Bounties** task plugin.
- Configure Joomla scheduled tasks to run it regularly.
- Check the task run history in Joomla.
- Verify the server cron that runs Joomla scheduled tasks is active if your site depends on cron execution.

## Notifications are not delivered

- Check **Settings > Notifications** and confirm email notifications are enabled.
- Check the user's frontend notification preferences.
- Confirm the relevant email template is enabled.
- Verify Joomla mail settings.
- If in-app notifications are missing, confirm the user is logged in and notification polling is enabled.

## Email template changes are not visible

- Save the template and confirm the enabled checkbox stays in the desired state.
- Clear Joomla cache if template output is cached.
- Use the preview in **Email Templates** to confirm header, chip, body, and footer configuration.
- Check audit log entries for template save/reset actions.

## The moderation queue is unavailable

- Grant `ca.moderate` to moderators.
- Grant `ca.audit.view` to users who need the audit log.
- Guests and ordinary registered users should not see moderation links.
- If a flag action hides/restores/deletes content, check the target state in the question, reply, or comment list.

## Layout or styling does not match the site

- Review **Settings > Appearance** for theme, mode, density, toolbar, left menu, right sidebar blocks, and answer card styling.
- Use `Custom` theme mode or custom CSS variables for brand colors.
- Add template overrides using the semantic `ca-*` class names.
- Disable built-in right sidebar blocks if you prefer Joomla companion modules in template positions.

## Companion modules show no data

- Confirm the module is published.
- Confirm the module is assigned to the current menu item.
- Make sure Community Answers has matching content: active bounties, tags, contributors, unanswered questions, or user activity.
- For **My Activity**, sign in as a user with activity.

## Plugin events are not firing

- Make sure the plugin is in the `communityanswers` group and enabled.
- Use Joomla 6 `SubscriberInterface` for new plugins.
- Subscribe to the modern `onCommunityAnswers...` event names.
- Avoid registering both a modern event and a legacy alias unless the handler is idempotent.
- See [Extending Community Answers using plugin events](./extending-community-answers-using-plugin-events.md).
