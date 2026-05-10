---
id: extend-community-polls-using-plugin-events
title: Extend Community Polls with plugin events
sidebar_label: Plugin events
sidebar_position: 7
---

# Extend Community Polls with plugin events

Community Polls fires a set of plugin events around poll and vote lifecycle moments. You can write your own Joomla plugin that subscribes to those events and runs whatever logic your project needs — sending a Slack message when a moderation queue lights up, awarding loyalty points for voting, syncing votes to an analytics service, and so on.

This page lists the events available in version 7, the data each event carries, and the shape of a minimal plugin that subscribes to them. It assumes you have built a Joomla 5 / 6 plugin before. If not, the official Joomla docs cover the plugin scaffolding here:

[Creating a plugin for Joomla](https://docs.joomla.org/Plugin)

## Plugin group

Community Polls events live in the **`communitypolls`** plugin group. Your plugin's manifest needs `group="communitypolls"`:

```xml
<extension type="plugin" group="communitypolls" method="upgrade">
    <name>plg_communitypolls_myhook</name>
    ...
</extension>
```

Custom plugin groups are not auto-loaded by Joomla. The component takes care of importing the group before it dispatches an event, so your plugin will be picked up as soon as it is installed and enabled — there is no extra wiring on your side.

## Events

| Event | When it fires | Arguments |
| --- | --- | --- |
| `onPollBeforeSave` | Just before a poll is saved (insert or update). | `data` (array, by reference), `isNew` (bool) |
| `onPollAfterSave` | After a poll has been saved. | `poll` (object), `isNew` (bool) |
| `onPollAfterDelete` | After a poll has been deleted. | `poll` (object — snapshot taken before the delete) |
| `onPollChangeState` | After a poll's published state changes. | `pks` (array of int IDs), `value` (int new state) |
| `onPollAfterApprove` | After a moderated poll is approved through the secret-token link. | `poll` (object) |
| `onVoteBeforeSave` | Before a vote is recorded. | `pollId` (int), `optionIds` (array), `userId` (int or null), `ipAddress` (string or null) |
| `onVoteAfterSave` | After a vote has been recorded. Fires once per cast, even when the voter selected several options. | `vote` (object), `poll` (object) |
| `onVoteAfterDelete` | After a vote has been deleted. | `vote` (object), `poll` (object) |

The `poll` argument is a snapshot of the row from `#__communitypolls_polls`: `id`, `title`, `alias`, `description`, `created_by`, `published`, `featured`, `catid`, `votes`, `voters`, `language`, and the rest of the columns on that table.

The `vote` argument is the row from `#__communitypolls_votes`: `id`, `poll_id`, `voter_id`, `voted_on`, `option_id`, `column_id`, `custom_answer`, `ip_address`.

## A minimal example

This plugin logs every new poll to Joomla's `error.php` log so you have a paper trail of who created what and when.

### File layout

```
plugins/communitypolls/myhook/
├── myhook.xml
├── services/
│   └── provider.php
└── src/
    └── Extension/
        └── MyHook.php
```

### myhook.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension type="plugin" group="communitypolls" method="upgrade">
    <name>plg_communitypolls_myhook</name>
    <author>Your Name</author>
    <creationDate>2026-05-10</creationDate>
    <copyright>Copyright (C) 2026 Your Company</copyright>
    <license>GNU General Public License version 2 or later</license>
    <version>1.0.0</version>
    <description>Logs Community Polls events for auditing.</description>

    <namespace path="src">YourVendor\Plugin\CommunityPolls\MyHook</namespace>

    <files>
        <folder plugin="myhook">services</folder>
        <folder>src</folder>
    </files>
</extension>
```

The `plugin="myhook"` attribute on the services folder must match the install element name (the part after `plg_communitypolls_`).

### services/provider.php

```php
<?php

defined('_JEXEC') or die;

use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use YourVendor\Plugin\CommunityPolls\MyHook\Extension\MyHook;

return new class () implements ServiceProviderInterface {
    public function register(Container $container): void
    {
        $container->set(
            PluginInterface::class,
            function (Container $container) {
                $plugin = new MyHook(
                    $container->get(DispatcherInterface::class),
                    (array) PluginHelper::getPlugin('communitypolls', 'myhook')
                );
                $plugin->setApplication(Factory::getApplication());

                return $plugin;
            }
        );
    }
};
```

### src/Extension/MyHook.php

```php
<?php

namespace YourVendor\Plugin\CommunityPolls\MyHook\Extension;

use Joomla\CMS\Log\Log;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;

\defined('_JEXEC') or die;

final class MyHook extends CMSPlugin implements SubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onPollAfterSave'    => 'onPollAfterSave',
            'onPollAfterDelete'  => 'onPollAfterDelete',
            'onVoteAfterSave'    => 'onVoteAfterSave',
        ];
    }

    public function onPollAfterSave(Event $event): void
    {
        $poll  = $event->getArgument('poll');
        $isNew = $event->getArgument('isNew', false);

        if (!$poll || !$isNew) {
            return;
        }

        Log::add(
            sprintf('New poll %d created by user %d: %s', $poll->id, $poll->created_by, $poll->title),
            Log::INFO,
            'com_communitypolls'
        );
    }

    public function onPollAfterDelete(Event $event): void
    {
        $poll = $event->getArgument('poll');
        if (!$poll) {
            return;
        }

        Log::add(
            sprintf('Poll %d deleted: %s', $poll->id, $poll->title),
            Log::INFO,
            'com_communitypolls'
        );
    }

    public function onVoteAfterSave(Event $event): void
    {
        $vote = $event->getArgument('vote');
        $poll = $event->getArgument('poll');

        if (!$vote || !$poll) {
            return;
        }

        Log::add(
            sprintf('Vote %d cast on poll %d by user %d', $vote->id, $poll->id, (int) ($vote->voter_id ?? 0)),
            Log::INFO,
            'com_communitypolls'
        );
    }
}
```

Install the plugin like any other Joomla plugin (zip the folder, install through the extension manager, enable it in Plugin Manager). Trigger an action in Community Polls and the matching log line will appear in `administrator/logs/error.php` (or wherever your Joomla log handler is pointing).

## Pre-save hooks

`onPollBeforeSave` and `onVoteBeforeSave` fire before the database write. They are useful for:

- **Validation** — throw an exception inside the handler to abort the save. The component will let the exception propagate to the controller.
- **Last-mile data tweaks on saves** — `onPollBeforeSave` receives the `data` array by reference. Mutate it in place (for example, to enforce a category default) and the modified values are what get written to the database.

## What the bundled events plugin does

The `plg_communitypolls_polls` plugin that ships with the component is itself a subscriber to the same events. It uses them to:

- Award and deduct points through the Shondalai Core integration
- Push activity-stream entries
- Send notification emails (new poll, new vote, moderate poll)
- Trigger badge evaluations

You can read its source under `plugins/plg_communitypolls_polls/` for a fully worked example of every event in use. If you want to disable any of its features rather than write your own plugin, the relevant toggles are in **Plugin Manager → Plugins → Community Polls - Polls**.

## Migrating from version 6 events

If you wrote a plugin against the v6 event names, here is the rename map. The handler signatures have changed too — version 7 uses Joomla's modern named-argument `Event` objects rather than positional arguments.

| v6 event | v7 event |
| --- | --- |
| `onBeforeSavePoll($poll, $params)` | `onPollBeforeSave` (Event with `data`, `isNew`) |
| `onAfterSavePoll($poll, $params)` | `onPollAfterSave` (Event with `poll`, `isNew`) |
| `onBeforeDeletePoll` | `onPollAfterDelete` (fires after the delete; snapshot taken before) |
| `onAfterVote($poll)` | `onVoteAfterSave` (Event with `vote`, `poll`) |

A v6 plugin will not fire on v7 unmodified — the event names and dispatcher signature both changed. The example above is the template to migrate against.
