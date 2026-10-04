---
title: Build and run automations
description: Create event-based workflows, rehearse them, and review their activity before enabling them for learners.
---

Open **Automations** to connect an event with one or more actions. For example, you might follow a course completion with a message, or remind a particular audience after a delay.

The available actions depend on installed features and your permissions. An automation cannot grant its owner rights they do not already have.

## Start with a workflow

Use **Your automations** to create a workflow, or begin with an appropriate **Starter workflow**. Give it a name that explains the result, such as “Remind new learners to start their course.”

Configure the main parts:

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Part | Question it answers |
| --- | --- |
| When | Which event starts this workflow? |
| If | Which conditions must be true? |
| Then | What should happen? |
| Scope | Which course, organization, or people may it affect? |
| Timing | Should an action happen immediately or after a delay? |
| Owner and limits | Whose authority and which safeguards apply? |

</div>

Choose whether **all** conditions or **any** condition must match. Read the completed rule back as a sentence to catch accidental broad audiences.

## Avoid repeat surprises

Review the re-entry setting. Running once for a person, once for a new occurrence, and every time are different choices. A workflow triggered by an update can repeat often if you choose unrestricted repetition.

For delayed actions, think about what may change before the delay ends. The learner may have completed the course, lost access, or changed their communication preferences. Use available conditions and safeguards appropriate to the action.

## Rehearse before enabling

1. Save the workflow.
2. Use the available rehearsal with a suitable example event or subject.
3. Review **Activity & rehearsals** to see which conditions matched and which actions were proposed or refused.
4. Correct the scope, wording, or conditions as needed.
5. Enable or arm the reviewed version when it is ready.

A rehearsal helps explain the decision. It does not prove that an external mail or AI service will accept a later live request. Use a controlled live test too.

Workflows are tied to reviewed versions. After changing a workflow, check whether the new version needs to be armed before expecting it to run.

## Monitor and pause

Use activity records to distinguish skipped conditions, permission refusals, queued work, and failed actions. A paused workflow should not be assumed to have cancelled every action already handed to another queue.

Check [scheduled tasks](../maintenance/scheduled-tasks.md) for delayed or queued work. Check [notification settings](notifications.md) for delivery failures.

AI actions also need the relevant helper, route, consent, and budget configuration. A workflow's enable switch does not bypass those controls. See [AI assistants](../ai/ai-assistants.md).
