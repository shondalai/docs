---
id: settings
title: Settings Reference
sidebar_label: Settings
sidebar_position: 14
---

# Settings Reference

This page documents every field on the Settings screen (Components -> Rewardify -> Settings). The screen has a left-hand nav grouped into categories. Each section below follows that nav in order, with one entry per field: what it does, its default, and when you would change it.

## How the Settings screen works

The Settings screen is split into two panes. The left nav lists the sections, grouped under category headings (Appearance, Engine, Customize, System, and Data). The right pane shows the fields for the section you select.

A few things that apply everywhere:

- Edits are not saved until you click **Save changes** in the top toolbar. The button shows a count of how many settings you have changed.
- **Reset** discards all unsaved edits across every section.
- Each section has a **Restore defaults** button (top right of the section) that loads the seeded defaults for that section's fields into the form. You still have to Save for it to take effect.
- A small dot next to a field label means that field has an unsaved change.
- The search box filters the current section's fields by label and description text.

> Settings on this screen are stored in the database, not in the component's Options. The component Options (the standard Joomla Options button) hold permissions only. Use this Settings screen for everything below.

---

## Permissions

Permissions are not on this Settings screen. They live in the component's standard Joomla Options, under the **Permissions** tab, and are set per Joomla user group. Open Components -> Rewardify, click **Options** in the toolbar, then the **Permissions** tab, pick a user group, and set each action to Allowed, Denied or Inherited.

Alongside the standard Joomla actions (`core.admin`, `core.manage`, `core.create`, `core.edit`, `core.edit.state`, `core.delete`), Rewardify adds its own actions:

| Action | What it allows |
|--------|----------------|
| `rewardify.award` | Grant currency to a member. |
| `rewardify.deduct` | Deduct currency from a member. |
| `rewardify.redeem` | Process catalogue redemptions. |
| `rewardify.adjust` | Post manual ledger adjustments. |
| `rewardify.simulate` | Use Simulate and trace. |
| `rewardify.integrate` | Manage adapters and integrations. |

> The Settings, Email templates and Privacy screens require `core.admin`. A group without `core.admin` cannot open them even if it has other Rewardify actions.

---

## Appearance

Themes and what members see.

### Themes

Admin and member views are themed independently, so you can run a dark admin and a light member site (or any mix).

| Field | What it does | Default |
|-------|--------------|---------|
| **Admin theme** | The theme for this backend admin app. Pick from the theme grid (Paper, Carbon, Sage, Plum, Midnight, Frost). The admin preview updates as you click. | `frost` |
| **Member theme** | The theme for the member-facing site app. | `paper` |

Change these to match your site branding. The admin theme is purely your own preference; the member theme is what your members see.

### Display

| Field | What it does | Default | When to change |
|-------|--------------|---------|----------------|
| **Public leaderboard** | When on, non-members (logged-out visitors) can view top earners on the leaderboard. Members can still opt out individually. | On | Turn off if the leaderboard should only be visible to logged-in members. See [Leaderboard](leaderboard.md). |
| **Show level beside usernames** | When on, a member's level name appears next to their username in member-facing surfaces. | On | Turn off if you do not want levels shown publicly. |

---

## Navigation

Show or hide the member-facing menu tabs. Overview, My rewards and Badges are always shown. The fields below toggle the optional tabs; a hidden tab is removed from the member menu.

| Field | Member tab it controls | Default |
|-------|------------------------|---------|
| **Show Campaigns** | Campaigns | On |
| **Show Catalogue** | Catalogue (the redemption store) | On |
| **Show Leaderboard** | Leaderboard | On |
| **Show How to earn** | How to earn | On |
| **Show Privacy** | Privacy | On |

Hide a tab if you are not using that feature yet. For example, if you have not set up any [Catalogue](redemptions.md) items, hide the Catalogue tab so members do not see an empty store.

---

## Evaluation

How reward events are processed after an adapter reports them. This is one of the most important settings, so read [Events & Evaluation](events-and-evaluation.md) for the full picture.

### Processing

| Field | What it does | Default |
|-------|--------------|---------|
| **Evaluation mode** | Choose `Instant (recommended)` or `Queued (background task)`. | `Queued (background task)` |

- **Instant** evaluates and awards each event the moment it arrives, inside the same request. This is the recommended mode for most sites because members see their reward immediately and you do not depend on the scheduler.
- **Queued** holds events until the background `drain` task processes them. This needs the Joomla scheduler running reliably (web cron or a real cron hitting the scheduler). See [Scheduled Tasks](scheduled-tasks.md).

> Whichever mode you pick, manual admin awards (any event type beginning with `manual.`) always evaluate instantly.

> The seeded default is Queued, but Instant is the recommended choice for a typical site. If you choose Queued, make sure the scheduler is actually running, or events will pile up unprocessed.

---

## Anti-abuse

Caps, cooldowns and trust gating that protect the economy from being farmed.

### Limits

| Field | What it does | Default | Unit |
|-------|--------------|---------|------|
| **Global daily points cap / member** | A hard ceiling on how many points a single member can earn per day, on top of (and regardless of) any individual rule limits. | 500 | CP/day |
| **Cooldown between identical events** | The minimum time that must pass before the same event from the same member counts again. | 30 | seconds |

Raise the daily cap if your economy is generous and you are seeing legitimate members hit the ceiling. Lower it if you suspect farming.

### Trust

| Field | What it does | Default |
|-------|--------------|---------|
| **Hold client-reported events for review** | When on, events that arrive below `trusted_source` trust enter the moderation queue (held) instead of being awarded automatically. An admin then approves or rejects them. | On |
| **Self-referral / self-vote prevention** | When on, a member cannot earn from actions aimed at themselves (for example voting on their own content or referring themselves). | On |

Server-side adapters such as the Joomla core adapter report `server_verified` trust and clear the hold gate. The hold setting mainly affects events reported by the browser or other lower-trust sources. See [Events & Evaluation](events-and-evaluation.md) for how trust levels and the held queue work.

---

## Point expiration

This section controls how earned points expire. The design is deliberately transparent: members always see the expiry date on each lot, and there is no hidden expiration.

### Understanding lots

When points are awarded, they are issued as a "lot" with its own expiry date. A member's `points` balance is the sum of their unexpired lots. When a lot reaches its expiry date, the `expire` routine removes it and the member is notified ahead of time. This is why expiry is per lot, not a single date on the whole balance.

### Lots

| Field | What it does | Default | Unit |
|-------|--------------|---------|------|
| **Points expire** | Master switch for point expiry. Turn it off to make all issued points lifetime points (they never expire). | On | toggle |
| **Default lot lifetime** | How many days a newly issued lot lasts before it expires. Set to 0 (or turn off Points expire) for lifetime points. | 365 | days |
| **Notify members before expiry** | How many days ahead of a lot's expiry the member is emailed a heads-up. | 14 | days ahead |

> Turning off **Points expire** makes points lifetime. Existing and future lots will not be expired. Individual currencies can also set their own lot behaviour; see [Currencies](currencies.md).

### Reputation

| Field | What it does |
|-------|--------------|
| **Reputation never expires** | Informational only, shown as "Always on". Reputation is lifetime standing: it is append-only and is never expired or deducted by this setting. |

Reputation is what drives [Levels](levels.md), so it is intentionally permanent. There is nothing to configure here.

---

## Badge taxonomy

Define the tiers and rarities that the badge editor offers. Tiers and rarities are the two taxonomy axes you can assign to a badge.

Each entry is a row you can add, edit, or remove:

- **Tiers**: each tier has a **Label** (what admins see), a **key** (the stable identifier stored on the badge), and a **look** (the gem style used for the badge gem, chosen from a fixed list such as gold). Use the **+ Add tier** button to add a row, and the cross button to remove one.
- **Rarities**: each rarity has a **Label**, a **key**, and a **colour** (the chip colour). Use **+ Add rarity** to add a row.

> Keys are stable identifiers stored on each badge. Renaming a key affects every badge already using it, so prefer to change the Label and leave the key alone once badges exist. See [Badges](badges.md).

---

## Email branding

Sender identity, header, footer and brand colours applied to every email Rewardify sends. To edit the actual wording of each message, use the [Email templates](emails.md) screen instead. This section is only the shared branding wrapper.

### Sender

Who emails come from. Leave both fields blank to use the global Joomla mail settings.

| Field | What it does | Default | Example |
|-------|--------------|---------|---------|
| **From name** | The display name on the From line. | empty | `Acme Rewards` |
| **From email** | The reply-to and sender address. Falls back to the Joomla global mail-from if blank. | empty | `rewards@example.com` |

### Header

The masthead at the top of every email. If you set a logo, it replaces the title text.

| Field | What it does | Default | Example |
|-------|--------------|---------|---------|
| **Logo URL** | Absolute or site-relative URL to a logo image. Leave blank to show the title text instead. | empty | `https://example.com/images/logo.png` |
| **Header title** | Shown when no logo is set. Defaults to your site name. You may use the `{site_name}` token. | empty | `Acme Rewards` |
| **Header subtitle** | A short line under the header title. | empty | `Earn. Redeem. Repeat.` |

### Brand colours

Buttons and links use the primary colour. The background colours frame the email card. Each field accepts a hex colour and has a colour picker.

| Field | What it does | Default |
|-------|--------------|---------|
| **Primary (buttons & links)** | The accent colour for buttons and links. | `#2563EB` |
| **Body text** | The colour of body text. | `#1A1A1A` |
| **Page background** | The colour behind the email card. | `#ECEAE6` |
| **Email card background** | The card background the message sits on. | `#FFFFFF` |

### Footer

| Field | What it does | Default | Example |
|-------|--------------|---------|---------|
| **Footer signature** | The small print under every email. Blank shows "Sent by {site_name}". You may use the `{site_name}` token. | empty | `Acme Rewards Member rewards` |

---

## Developer

This section is for building the React apps (the admin and member SPAs) during development. You almost certainly do not need to touch it on a live site.

### Dev server

| Field | What it does | Default |
|-------|--------------|---------|
| **Dev server mode** | When on, the admin and member apps load from a running Vite dev server (the URL below) instead of the bundled, built assets. This gives instant hot-reload while developing. | Off |
| **Vite dev server URL** | The address of your running dev server. Run `npm run dev` in `rewardify/react-app`. The default port is 5178. | `http://localhost:5178` |

> Dev server mode is for building the SPAs only, and it is ignored on production hosts. It only ever takes effect on local hosts; the built media is always used in production. Leave Dev server mode off on a live site.

---

## Danger zone

Operations that touch many records. Each one is logged to the admin audit. These run immediately when you click the button (they are not part of Save changes).

### Bulk operations

| Button | What it does | When to use |
|--------|--------------|-------------|
| **Rebuild all projections** | Recomputes every member's cached balances, levels and badges from the ledger. Because the ledger is the source of truth, the cached projections are always rebuildable from it. Reports how many members were rebuilt. | Run this if a balance or level looks wrong, or after a manual data change, to repair any drift. See [Members, Balances & the Ledger](members-and-ledger.md). |
| **Retire all rules** | Sets every active rule to retired so the engine stops awarding. Existing balances and history are kept, and you can re-publish rules individually afterwards. You will be asked to confirm first. | Use as an emergency stop if a rule is misbehaving and you want to halt all awarding while you investigate. See [Rules](rules.md). |

> **Rebuild all projections** is safe and read-rebuilds from the ledger; it never invents transactions. **Retire all rules** is a blunt instrument: it stops the whole engine from awarding until you re-publish rules. Confirm carefully.

---

## Points migration (Data)

Below the configuration sections, the left nav has a **Data** category with a **Points migration** item. This is where the v1 points migration tools and the importer for other points extensions live. Selecting it replaces the settings pane with the migration cards. Nothing changes until you actually run a migration.

Use this to import members' point balances from a previous Rewardify version or another points extension into the ledger. For the full upgrade procedure, see [Upgrading from v1](migrating-from-v1.md).
