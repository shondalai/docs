---
id: ai-helpers
title: AI helpers in the poll editor
sidebar_label: AI helpers
sidebar_position: 4
---

# AI helpers in the poll editor

Community Polls 7 adds three optional AI helpers to the poll editor:

- **Suggest options** — give the AI your poll title and it returns a starting set of answer options. You can accept, edit, or remove each one.
- **Summarise results** — turn the live distribution of votes into a few plain sentences you can paste into a follow-up article, email, or social post.
- **Cluster custom answers** — when a poll allows free-text answers, the AI groups similar responses so you can see themes instead of scrolling line by line.

Each helper runs only when you click it. There is no background processing, no automatic suggestions, and no data sent until you ask. If you would rather not use any of this, leave the toggle off and the editor works exactly the way it did without the helpers.

This page explains how to turn the helpers on, what they do, and what data leaves the site when you use them.

## How AI access is provisioned

The helpers connect to the **Shondalai AI service** — a hosted AI gateway run by Shondalai. A single Shondalai AI subscription covers every Shondalai component on your site, so you connect the site once and the helpers light up across every supported product (Community Polls, Community Quiz, Community Surveys, and so on).

You will need:

- An active Shondalai AI subscription on your shondalai.com account.
- Network connectivity from your Joomla site to the Shondalai AI gateway.

The subscription is separate from your Community Polls subscription. AI calls have rate limits and a credit budget — both visible on your account page once you connect the site.

## Connect your site to the AI service

1. In the admin, go to **Settings → AI services**.
2. Switch **Enable AI helpers** to on.
3. Click **Connect**. A small window opens that asks you to sign in to your shondalai.com account.
4. Sign in. The window closes and the AI services section now shows **Connected** with the credit balance from your account.

That's it. The AI buttons inside the poll editor become live immediately, no page refresh needed.

If your site has multiple Shondalai components, you only need to connect once — the connection is shared across all of them.

## Use Suggest options

1. Open or create a poll in **Polls → New poll**.
2. Type a poll title (a couple of sentences of context in the description help too).
3. Switch to the **Options** tab.
4. Click the **AI suggest** button next to the heading.
5. The AI returns a list of suggested options. Each one has an **Add** action to copy it into the poll, an **Edit** pencil to tweak the wording first, and an **X** to dismiss.
6. Click **Generate more** at the bottom of the suggestion panel if you want a second batch.

Suggestions take three to ten seconds depending on AI service load. The button shows a spinner while a call is in flight.

## Use Summarise results

This helper appears on the **Results** tab of any poll that has at least a few votes.

1. Open the poll in the admin.
2. Switch to the **Results** tab.
3. Click **AI summary** above the chart.
4. The AI reads the option-by-option distribution and returns three or four sentences describing the result, the strongest preference, and any close calls.
5. The summary appears in a copyable text area. Use it directly, or edit it before pasting into an article or newsletter.

The summary is regenerated every time you click the button. If you want the same wording later, copy it now — we do not persist it.

## Use Cluster custom answers

This helper appears for polls where you have enabled the **Custom answer** option (so voters can type a free-text response instead of picking from your predefined options).

1. Open the poll in the admin.
2. Switch to the **Results** tab.
3. Click **Cluster answers** in the custom answers section.
4. The AI groups similar responses into themes and returns each theme with a short label, an example answer, and a count.
5. Use the cluster view to see the underlying themes. The original responses remain in the table below — clustering does not change what voters submitted.

Clustering is most useful once you have at least a few dozen custom answers. With fewer responses you can read them yourself faster than the AI can call out.

## What gets sent to the AI service

The helpers send only the data they need:

- **Suggest options** sends the poll title and description.
- **Summarise results** sends the option labels and their vote counts.
- **Cluster custom answers** sends the custom-answer text strings.

The helpers do not send voter IDs, IP addresses, or any other identifier. The AI gateway forwards the request to a third-party AI provider; please review your privacy policy if you use the helpers on polls that contain personal data in the response field.

The connection itself uses a signed token tied to your shondalai.com account. We do not have access to your Joomla site's database from the AI gateway, and the gateway does not retain the request payload after the response is returned.

If you would rather not send anything to a third-party AI service for a particular poll, leave the AI buttons alone — they only fire when clicked.

## Turn the helpers off

To hide the AI buttons from the editor entirely:

- **Per site** — go to **Settings → AI services** and switch **Enable AI helpers** off.
- **Per user** — there is no per-user toggle. If only some admins should see the helpers, manage that through Joomla user-group permissions on the component (the AI buttons require the `core.ai.use` permission, which you can revoke per group from the Permissions tab).

The credit balance and connection itself are unaffected — the toggle only hides the buttons. To fully disconnect the site from the AI service, click **Disconnect** in the same Settings → AI services panel.

## Cost

AI calls are metered against the credit balance on your shondalai.com account. The balance is visible in **Settings → AI services** at the top of the panel. A Suggest options call typically costs one credit, Summarise around two, and Cluster scales with the number of distinct responses (rounded up).

Top up credits from your shondalai.com account dashboard.

## Troubleshooting

**Buttons are greyed out.** Check **Settings → AI services**: both **Enable AI helpers** and the **Connected** state need to be in place. If either is missing, the buttons stay disabled.

**A call returns "subscription expired" or "no credits".** Open your shondalai.com account dashboard and renew or top up. The helpers will start working again immediately after the payment goes through.

**A call hangs.** The Shondalai AI gateway has a 30-second timeout. If the gateway upstream takes longer, the helper returns an error. Try again — most timeouts are transient.

**The suggestions or summary look off.** AI output quality depends on the input. A vague poll title produces vague suggestions. Add a short description to give the AI more context, then run the helper again.
