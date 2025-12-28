---
id: extending-community-quiz-using-plugin-events
title: Extending Community Quiz with Plugin Events
sidebar_label: Plugin Events
sidebar_position: 5
---

Community Quiz is highly extensible through the Joomla! plugin system. By listening to specific events triggered by the component, you can modify behavior, integrate with third-party extensions, or automate tasks based on quiz activity.

> [!NOTE]
> Plugin events are supported in Community Quiz v4 and above. This guide follows modern Joomla 4/5 standards using namespaces and the `SubscriberInterface`.

---

## Getting Started

To create a plugin for Community Quiz, you should create a plugin in the `communityquiz` group.

### Modern Plugin Structure (Joomla 4/5)

Your plugin should follow the modern Joomla structure. Below is a sample implementation using the `SubscriberInterface`.

**File:** `plugins/communityquiz/myplugin/src/Extension/MyPlugin.php`

```php
<?php

namespace Joomla\Plugin\Communityquiz\MyPlugin\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;

class MyPlugin extends CMSPlugin implements SubscriberInterface
{
    /**
     * Returns an array of events this subscriber will listen to.
     */
    public static function getSubscribedEvents(): array
    {
        return [
            'onQuizAfterPassed' => 'onQuizAfterPassed',
            'onQuizAfterFailed' => 'onQuizAfterFailed',
            'onResponseAfterSave' => 'onResponseAfterSave',
        ];
    }

    /**
     * Event triggered when a user passes a quiz.
     */
    public function onQuizAfterPassed(Event $event): void
    {
        [$context, $quiz, $isNew] = array_values($event->getArguments());
        
        // Access the response ID
        $responseId = $quiz->response_id;
        
        // Custom logic here
    }
}
```

---

## Available Plugin Events

### Quiz Management Events

| Event | Description | Parameters |
|-------|-------------|------------|
| `onQuizBeforeSave` | Triggered before saving a quiz. Returning `false` cancels the save. | `$context`, `$quiz`, `$isNew` |
| `onQuizAfterSave` | Triggered after a quiz is successfully saved. | `$context`, `$quiz`, `$isNew` |
| `onQuizBeforeDelete`| Triggered before a quiz is deleted. | `$context`, `$quiz` |
| `onQuizAfterDelete` | Triggered after a quiz is deleted. | `$context`, `$quiz` |
| `onQuizChangeState` | Triggered when a quiz state changes (publish, trash, etc). | `$context`, `$pks` (IDs), `$value` (new state) |

### Student/Response Events

#### `onQuizAfterPassed`

Triggered when a user completes a quiz and their score is above or equal to the cutoff.

- **Parameters:** `$context`, `$quiz`, `$isNew`
- **Key Data:** `$quiz->response_id` contains the unique ID for this attempt.

#### `onQuizAfterFailed`

Triggered when a user completes a quiz but falls below the cutoff.

- **Parameters:** `$context`, `$quiz`, `$isNew`

#### `onResponseBeforeSave`

Triggered before a student's response is saved.

- **Parameters:** `$context`, `$response`, `$isNew`

#### `onResponseAfterSave`

Triggered after a student's response is successfully saved.

- **Parameters:** `$context`, `$response`, `$isNew`

#### `onResponseBeforeDelete`

Triggered before one or more responses are deleted.

- **Parameters:** `$context`, `$data`

---

## Advanced Integration Example

You can use these events to send quiz data to an external API or CRM.

```php
public function onResponseAfterSave(Event $event): void
{
    [$context, $response, $isNew] = array_values($event->getArguments());

    if ($isNew && $response->completed) {
        // Only run when a new response is completed
        $userId = $response->created_by;
        $score  = $response->score;
        
        // Send data to external CRM...
    }
}
```

---

## Plugin Manifest (xml)

**File:** `plugins/communityquiz/myplugin/myplugin.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="4.0" type="plugin" group="communityquiz" method="upgrade">
    <name>plg_communityquiz_myplugin</name>
    <author>Your Name</author>
    <version>1.0.0</version>
    <description>Extends Community Quiz functionality</description>
    <namespace path="src">Joomla\Plugin\Communityquiz\MyPlugin</namespace>
    <files>
        <folder>src</folder>
        <filename plugin="myplugin">myplugin.php</filename>
    </files>
</extension>
```

> [!TIP]
> Always check the `com_communityquiz` models for more details on the properties available in the `$quiz` and `$response` objects during these events.
