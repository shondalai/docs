---
id: extending-community-answers-using-plugin-events
title: Extending Community Answers using plugin events
sidebar_label: Plugin events
sidebar_position: 4
---

Community Answers 7 exposes Joomla plugin events so third-party extensions can add moderation rules, activity streams, points, badges, profile integrations, notifications, and custom validation without patching the component.

Plugins should be created in the `communityanswers` plugin group. New integrations should use the modern Joomla event subscriber system. The legacy event names from earlier Community Answers releases are still fired as compatibility aliases where the old component supported them.

## Creating a Joomla 6 event subscriber

Create a plugin in `plugins/communityanswers/example/` and implement `SubscriberInterface`.

```php
<?php

namespace Joomla\Plugin\Communityanswers\Example\Extension;

\defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Event\SubscriberInterface;
use Shondalai\Component\Communityanswers\Administrator\Event\Answer\AfterAnswerAcceptEvent;
use Shondalai\Component\Communityanswers\Administrator\Event\Question\AfterQuestionSaveEvent;
use Shondalai\Component\Communityanswers\Administrator\Event\Question\BeforeQuestionSaveEvent;

final class Example extends CMSPlugin implements SubscriberInterface
{
    protected $autoloadLanguage = true;

    public static function getSubscribedEvents(): array
    {
        return [
            BeforeQuestionSaveEvent::EVENT_NAME => 'beforeQuestionSave',
            AfterQuestionSaveEvent::EVENT_NAME  => 'afterQuestionSave',
            AfterAnswerAcceptEvent::EVENT_NAME  => 'afterAnswerAccept',
        ];
    }

    public function beforeQuestionSave(BeforeQuestionSaveEvent $event): void
    {
        $data = $event->getData();

        if (str_contains(strtolower((string) ($data['title'] ?? '')), 'blocked phrase')) {
            $event->cancel('This question title is not allowed.');
        }

        $data['title'] = trim((string) ($data['title'] ?? ''));
        $event->setData($data);
    }

    public function afterQuestionSave(AfterQuestionSaveEvent $event): void
    {
        $question = $event->getData();
        $isNew = $event->isNew();

        // Send the question to your activity stream, points system, indexer, etc.
    }

    public function afterAnswerAccept(AfterAnswerAcceptEvent $event): void
    {
        $answer = $event->getAnswer();
        $question = $event->getQuestion();

        // Award badges, sync reputation, or notify an external system.
    }
}
```

Before events can be cancelled with `$event->cancel('reason')`. The API request will fail cleanly and the write operation will not continue. Plugins can also update mutable before-save/create data by calling `$event->setData($data)`.

## Plugin manifest

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension type="plugin" group="communityanswers" method="upgrade">
    <name>plg_communityanswers_example</name>
    <author>Your Name</author>
    <version>1.0.0</version>
    <description>Example Community Answers integration plugin.</description>
    <namespace path="src">Joomla\Plugin\Communityanswers\Example</namespace>
    <files>
        <folder plugin="example">services</folder>
        <folder>src</folder>
    </files>
</extension>
```

Create `services/provider.php` to instantiate the plugin:

```php
<?php

\defined('_JEXEC') or die;

use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use Joomla\Plugin\Communityanswers\Example\Extension\Example;

return new class() implements ServiceProviderInterface {
    public function register(Container $container): void
    {
        $container->set(
            PluginInterface::class,
            static function (Container $container) {
                $plugin = new Example(
                    $container->get(DispatcherInterface::class),
                    (array) PluginHelper::getPlugin('communityanswers', 'example')
                );
                $plugin->setApplication(Factory::getApplication());

                return $plugin;
            }
        );
    }
};
```

## Event payload conventions

Every modern event receives a dedicated event object that extends `Shondalai\Component\Communityanswers\Administrator\Event\CommunityAnswersEvent`. Subscribe to the event constant and typehint the concrete class in your handler. This gives your plugin a stable contract and avoids mistakes caused by memorising raw argument names.

Common methods:

| Method | Description |
| --- | --- |
| `$event->getContext()` | Component context such as `com_communityanswers.question`, `com_communityanswers.answer`, `com_communityanswers.comment`, `com_communityanswers.vote`, `com_communityanswers.bounty`, or `com_communityanswers.moderation`. |
| `$event->getData()` / `$event->setData($data)` | Main mutable payload for before-save/create events. |
| `$event->getQuestion()` | Question object when the action belongs to a question. |
| `$event->getAnswer()` | Answer object when the action belongs to an answer. |
| `$event->getComment()` | Comment object when the action belongs to a comment. |
| `$event->getTargetType()` | One of `question`, `answer`, or `comment` for shared actions such as comments, votes, and flags. |
| `$event->isNew()` | Boolean for save events. |
| `$event->getIds()`, `$event->getState()`, `$event->getAction()` | State-change identifiers, target state, and action name. |

## Modern events

| Event constant | Event class | Cancellable | Legacy alias |
| --- | --- | --- | --- |
| `BeforeQuestionSaveEvent::EVENT_NAME` | `Event\Question\BeforeQuestionSaveEvent` | Yes | `onQuestionBeforeSave($context, $question, $isNew)` |
| `AfterQuestionSaveEvent::EVENT_NAME` | `Event\Question\AfterQuestionSaveEvent` | No | `onQuestionAfterSave($context, $question, $isNew)` |
| `BeforeAnswerSaveEvent::EVENT_NAME` | `Event\Answer\BeforeAnswerSaveEvent` | Yes | `onReplyBeforeSave($context, $reply, $isNew)` |
| `AfterAnswerSaveEvent::EVENT_NAME` | `Event\Answer\AfterAnswerSaveEvent` | No | `onReplyAfterSave($context, $reply, $isNew)` |
| `BeforeQuestionDeleteEvent::EVENT_NAME` | `Event\Question\BeforeQuestionDeleteEvent` | Yes | `onQuestionBeforeDelete($context, $question)` |
| `AfterQuestionDeleteEvent::EVENT_NAME` | `Event\Question\AfterQuestionDeleteEvent` | No | `onQuestionAfterDelete($context, $question)` |
| `BeforeAnswerDeleteEvent::EVENT_NAME` | `Event\Answer\BeforeAnswerDeleteEvent` | Yes | `onReplyBeforeDelete($context, $answer)` |
| `AfterAnswerDeleteEvent::EVENT_NAME` | `Event\Answer\AfterAnswerDeleteEvent` | No | `onReplyAfterDelete($context, $reply)` |
| `BeforeQuestionStateChangeEvent::EVENT_NAME` | `Event\Question\BeforeQuestionStateChangeEvent` | Yes | `onQuestionChangeState($context, $pks, $value)` |
| `AfterQuestionStateChangeEvent::EVENT_NAME` | `Event\Question\AfterQuestionStateChangeEvent` | No | None |
| `BeforeAnswerStateChangeEvent::EVENT_NAME` | `Event\Answer\BeforeAnswerStateChangeEvent` | Yes | `onReplyChangeState($context, $pks, $value)` |
| `AfterAnswerStateChangeEvent::EVENT_NAME` | `Event\Answer\AfterAnswerStateChangeEvent` | No | None |
| `BeforeCommentSaveEvent::EVENT_NAME` | `Event\Comment\BeforeCommentSaveEvent` | Yes | None |
| `AfterCommentSaveEvent::EVENT_NAME` | `Event\Comment\AfterCommentSaveEvent` | No | `onQuestionAfterComment($context, $comment)` or `onReplyAfterComment($context, $comment)` |
| `AfterVoteEvent::EVENT_NAME` | `Event\Vote\AfterVoteEvent` | No | `onQuestionAfterLike($context, $rating)` or `onReplyAfterLike($context, $rating)` |
| `BeforeAnswerAcceptEvent::EVENT_NAME` | `Event\Answer\BeforeAnswerAcceptEvent` | Yes | None |
| `AfterAnswerAcceptEvent::EVENT_NAME` | `Event\Answer\AfterAnswerAcceptEvent` | No | `onReplyAfterAccepted($context, $reply)` |
| `BeforeBountyCreateEvent::EVENT_NAME` | `Event\Bounty\BeforeBountyCreateEvent` | Yes | None |
| `AfterBountyCreateEvent::EVENT_NAME` | `Event\Bounty\AfterBountyCreateEvent` | No | None |
| `AfterBountyAwardEvent::EVENT_NAME` | `Event\Bounty\AfterBountyAwardEvent` | No | None |
| `AfterBountyExpireEvent::EVENT_NAME` | `Event\Bounty\AfterBountyExpireEvent` | No | None |
| `AfterQuestionFollowEvent::EVENT_NAME` | `Event\Question\AfterQuestionFollowEvent` | No | None |
| `AfterQuestionBookmarkEvent::EVENT_NAME` | `Event\Question\AfterQuestionBookmarkEvent` | No | None |
| `AfterFlagSubmitEvent::EVENT_NAME` | `Event\Moderation\AfterFlagSubmitEvent` | No | `onCAFlagSubmitted($payload)` |
| `AfterFlagResolveEvent::EVENT_NAME` | `Event\Moderation\AfterFlagResolveEvent` | No | `onCAFlagResolved($payload)` |
| `BeforeCommentStateChangeEvent::EVENT_NAME` | `Event\Comment\BeforeCommentStateChangeEvent` | Yes | None |
| `AfterCommentStateChangeEvent::EVENT_NAME` | `Event\Comment\AfterCommentStateChangeEvent` | No | None |

Legacy aliases are fired for compatibility. New plugins should subscribe to the `onCommunityAnswers...` names. Avoid implementing both the modern event and its legacy alias for the same behavior unless your handler is idempotent.

## Legacy plugin methods

Existing plugins can continue using the old method names. Returning `false` from legacy before events still cancels the operation.

```php
public function onQuestionBeforeSave(string $context, object $question, bool $isNew): bool
{
    return true;
}

public function onReplyAfterAccepted(string $context, object $reply): void
{
    // Legacy compatibility handler.
}
```

## Recommended integration points

Use save and delete events for external indexing, content mirroring, custom validation, and audit trails.

Use vote, answer acceptance, bounty, and follow/bookmark events for points, badges, activity streams, and user engagement integrations.

Use moderation flag and state-change events for abuse workflows, trust-and-safety tools, and external review queues.
