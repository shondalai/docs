---
id: settings-reference
title: Settings reference
sidebar_label: Settings reference
sidebar_position: 12
---

# Settings reference

Every option lives on one page: **Components -> Community Quotes -> Settings**. This is a tabbed single-page screen built into the component, not Joomla's standard Options dialog. The tabs below match the ones you see down the left side of the page.

Permissions are the exception. They are managed through Joomla's own access control and are covered in [Permissions](./permissions.md). There is a **Permissions** shortcut in the top right of the Settings page that takes you there.

You do not need to change anything to get started. Community Quotes ships with sensible defaults, and each one is listed below so you know what you are getting. Changes apply as soon as you press **Save**. The page only sends the options you actually changed, and a status line at the bottom tells you whether you have unsaved changes.

:::note
You need the **Configure (Admin)** permission to change settings. Users without it can open the page and read the values but cannot save. See [Permissions](./permissions.md).
:::

## General

Site identity used in module headers, share cards, and email digests.

| Setting | Default | Notes |
| --- | --- | --- |
| Site name | Community Quotes | The name shown on modules, share cards, and digest emails. |
| Tagline | Words worth keeping. | A short line shown under the site name where space allows. |
| Default language | en | The language code used when a quote has no language of its own. |
| Quote of the day timezone | Site timezone | Choose whether the daily quote rolls over on the site timezone or on the visitor's local time. |

## Display and branding

The frontend look for visitors. The aesthetic, dark mode, accent, density, and font choices are explained in depth on the [Appearance and theming](./appearance-and-theming.md) page.

### Theme

| Setting | Default | Notes |
| --- | --- | --- |
| Aesthetic | Editorial | The overall visual style: Editorial, Swiss, Soft, or Bold. |
| Dark mode | Auto (visitor preference) | Auto follows the visitor's device, or force always light or always dark. Bold is already a dark style. |
| Brand accent | #d97757 | The accent colour for links, buttons, and highlights. Pick a swatch or type a hex value. |
| Density | Comfortable | Compact, Comfortable, or Spacious spacing on cards and lists. |
| Font pairing | Spectral + Inter Tight | Spectral + Inter Tight, Inter Tight only, or all serif. Fonts are declared but not bundled, so visitors fall back to matching system fonts. |

### Frontend features

Each toggle shows or hides an element on quote cards. Turn features off to keep the display lean.

| Setting | Default | Notes |
| --- | --- | --- |
| Show attribution badges | On | Show the verified, disputed, translation, or unverified attribution badge on each quote. |
| Show audio playback | On | Show the "listen" button that reads the quote aloud. Also gated by the Audio tab. |
| Show share cards | On | Show the share button that opens the share card generator. Also gated by the Share cards tab. |
| Show translation chips | On | Show the translation controls on quotes that have translations. |
| Show collections | On | Show collection links and the add-to-collection control. |
| Show gamification | On | Show points, badges, and other gamification cues where available. |

## Submissions

Who can submit quotes from the front end, and how those submissions are handled. See [Submissions and moderation](./submissions-and-moderation.md).

### Submissions

| Setting | Default | Notes |
| --- | --- | --- |
| Allow submissions | On | Master switch for the community submit flow. When off, the submit form is unavailable. |
| Require moderation | On | Hold new submissions in the moderation queue until a moderator approves them. |

### Limits

| Setting | Default | Notes |
| --- | --- | --- |
| Quotes per user per day | 10 | Per-user daily cap on new submissions. 0 removes the cap. |
| Minimum text length | 5 | Fewest characters a quote body may contain. |
| Maximum text length | 800 | Most characters a quote body may contain. |

### Required fields

Fields a submitter must complete before the submit form will accept the quote.

| Setting | Default | Notes |
| --- | --- | --- |
| Source citation | On | Require a source or citation for the quote. |
| Year | Off | Require the year the quote is from. |
| Category | On | Require the submitter to pick a quote category. |
| At least one tag | On | Require the submitter to add at least one tag. |

## Moderation rules

How submissions are auto-handled and when a moderator is notified. See [Submissions and moderation](./submissions-and-moderation.md).

### Auto-moderation

| Setting | Default | Notes |
| --- | --- | --- |
| Auto-approve verified quotes | Off | Publish a submission automatically when its attribution is verified. |
| Hold submissions from new users | On | Send a first-time submitter's quote to the queue regardless of other rules. |

### Notifications

| Setting | Default | Notes |
| --- | --- | --- |
| Notify above | 20 | Email a moderator once this many quotes are waiting in the queue. 0 disables the alert. |
| Notify email | (empty) | The address that receives the queue alert. Blank uses the site defaults. |

## Audio (TTS)

Quote playback uses the browser's built-in SpeechSynthesis API, so nothing is generated or stored on your server. See [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md) for how this fits with the other read-aloud features.

| Setting | Default | Notes |
| --- | --- | --- |
| Enable audio | On | Master switch for the "listen" feature. The Display tab's "Show audio playback" also has to be on for the button to appear. |
| Preferred voice | (empty) | Name of a voice to prefer. Blank uses the browser's system default. Available voices vary by device. |

## Share cards

Defaults for the canvas share card a visitor can generate from a quote. See [Modules and plugins](./modules-and-plugins.md) for related sharing surfaces.

| Setting | Default | Notes |
| --- | --- | --- |
| Enable share cards | On | Master switch for the share card generator. The Display tab's "Show share cards" also has to be on for the button to appear. |
| Aspect ratio | 1080 x 1350 (4:5) | Card size: 1080 x 1350 (4:5), 1080 x 1080 (square), or 1920 x 1080 (16:9). |
| Include author avatar | On | Draw the author's avatar on the card. |
| Include source citation | On | Print the source or citation on the card. |
| Include site URL | On | Print your site URL on the card. |

## SEO

Structured data and share metadata, plus the switch that removes IDs from URLs. The URL behaviour is covered in full on [Menus and SEF URLs](./menus-and-sef-urls.md).

### SEO

| Setting | Default | Notes |
| --- | --- | --- |
| Generate schema.org Quotation | On | Emit schema.org Quotation structured data on quote pages. |
| OpenGraph share card | On | Emit OpenGraph tags so quote links preview nicely on social platforms. |

### URLs

| Setting | Default | Notes |
| --- | --- | --- |
| Remove IDs from URLs | Off | When on, quotes, authors, and categories route by alias only, with no numeric ID in the path. Aliases must be unique for the links to resolve. This is the `routing.sef_ids` option. |

:::caution
Turning **Remove IDs from URLs** on requires unique aliases across your quotes, authors, and categories. If two items share an alias, one of the URLs will not resolve. See [Troubleshooting](./troubleshooting.md) if you see a 404 after enabling it.
:::

## Privacy

Data handling for reactions and other visitor activity. See [Privacy and GDPR](./privacy-and-gdpr.md).

| Setting | Default | Notes |
| --- | --- | --- |
| Allow anonymous reactions | Off | When on, visitors who are not logged in can react to quotes. When off, reactions require a logged-in account. |

## Email digest

The daily email that sends the quote of the day to subscribers. The scheduler task that delivers it is described on [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).

| Setting | Default | Notes |
| --- | --- | --- |
| Enable digest | Off | Master switch for the daily digest email. |
| Subject template | Today's quote from &#123;sitename&#125; | The email subject. `{sitename}` is replaced with your site name and `{author}` with the quote's author name. |
| Send hour (0-23) | 6 | The hour of the day the digest goes out, in 24-hour time. |

## AI verification

Optional attribution checking. Community Quotes can score how confident it is that a quote is correctly attributed and route borderline cases to moderation. This uses the connected AI service through the Shondalai Core library. See [Submissions and moderation](./submissions-and-moderation.md).

| Setting | Default | Notes |
| --- | --- | --- |
| Enable AI verification | Off | Score new submissions with the connected AI service. |
| Auto-verify above | 85 | Submissions scoring at or above this confidence (0 to 100) are marked verified automatically. |
| Auto-reject below | 20 | Submissions scoring below this confidence (0 to 100) are rejected automatically. Everything between the two thresholds goes to moderation. |

## Developer

For working on the bundled React app. Leave these off on a live site.

| Setting | Default | Notes |
| --- | --- | --- |
| Dev server mode | Off | Load the React app from a running Vite dev server instead of the built assets. |
| Vite dev server URL | http://127.0.0.1:5183 | Where the Vite dev server is running. Run `npm run dev` in `communityquotes/react-app`; the default port is 5183. |

The built media is always used when the dev server is unreachable or the site is not in local or debug mode, so this cannot break a production site by accident. See [Developer guide](./developer-guide.md) for more.

## Advanced

Read-only details about this installation. There is nothing to change here.

| Setting | Value | Notes |
| --- | --- | --- |
| Component version | 1.0.0 | The installed version of Community Quotes. |
| Database tables | #__cquotes_ prefix | All tables use the `#__cquotes_` prefix under your Joomla table prefix. |

## Saving

Changes apply as soon as you press **Save**. There is no separate publish step. The bottom bar shows **Discard** to roll back unsaved edits and **Save** to commit them, and it tells you whether you have unsaved changes. If a setting does not seem to take effect on the front end, do a hard refresh to clear the browser cache of the quote assets.
