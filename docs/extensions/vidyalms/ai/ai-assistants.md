---
title: Configure AI assistants
description: Connect AI services, enable helpers, set data-use boundaries, and review generated work.
---

Open **AI** for the academy's AI controls. AI can help draft learning material, suggest feedback, explain mistakes, or summarize reports. People remain responsible for reviewing the result.

## Understand the four controls

An AI task needs all of the relevant controls to allow it:

1. **Site enablement:** AI is enabled for the academy.
2. **Helper enablement:** the particular helper is enabled.
3. **Task route:** the task has an enabled, usable connection to its model service when it requires one.
4. **Data-use acceptance:** the person has accepted the active policy where required.

A site-wide stop control can halt tasks above these four levels. Enabling one helper does not override any of the others.

## Choose the helpers

In **Enablement**, read each helper's description and turn on only the ones you intend to support. Depending on installed features, helpers can assist with curriculum, lessons, question banks, individual questions, import review, grading feedback, answer grouping, learner explanations, and report narratives.

The location shown with a helper tells you where it is used. For example, a gradebook helper supports an instructor's assessment work; it is not necessarily a learner-facing chatbot.

## Connect the service and route tasks

When the AI connection package is installed, open its **Connections**, **Task catalogue**, and **Model provisioning** areas.

- Configure the connection to the supported AI service or bridge.
- Use the credential reference supplied by your server administrator. Do not paste a secret into a field that expects an `env:` or `store:` reference.
- Review the task catalogue to understand each task's purpose and requirements.
- In model provisioning, select the connection and the exact service or model slug it exposes for the task.
- Set the per-run ceiling using that service's stated units. A zero ceiling blocks spending; it does not mean unlimited usage.
- Review the resulting route in **AI → Routes**, then enable it deliberately.

Newly provisioned routes start disabled. A listed connection or route does not prove that its credentials or model name are valid. Some helpers can perform deterministic work without a model; use each task's description rather than guessing from its name.

## Publish a data-use policy

In **Data-use policy**, explain what may be sent to the service, why it is used, and what review and retention arrangements apply. Activate the version intended for users and complete the required acceptance before testing.

Changing the active policy may require renewed acceptance. Avoid including unnecessary personal data in prompts or source material.

## Review runs, drafts, and usage

Use **Runs** to distinguish a refused task from a failed service request or a cancelled run. A refusal commonly means an enablement, consent, route, permission, or budget requirement has not been met.

Use **Drafts** to review generated work before accepting it. Check facts, answer keys, accessibility, tone, and suitability for your learners. A feedback suggestion should not be treated as an instructor's final grade automatically.

Use **Usage** to review the available consumption records and limits. These controls are separate from learner course payments.

The stop control prevents further AI work; it does not undo content already accepted or published. See [automations](../communication/automations.md) before allowing AI tasks in recurring workflows.
