---
id: appearance-and-theming
title: Appearance and theming
sidebar_label: Appearance and theming
sidebar_position: 6
---

# Appearance and theming

The comment thread is designed to sit comfortably inside any Joomla template. A few settings on **Settings → General** control how it looks.

## Light, dark, or automatic

The **Colour theme** setting has three options:

- **Auto** (the default): the thread follows the reader's device preference, switching between light and dark with the rest of their system.
- **Light**: always light.
- **Dark**: always dark.

Auto is the right choice for most sites. It means a reader who browses in dark mode sees a dark thread without any work from you.

## Accent colour

The **Accent hue** setting sets the colour used for links, the active sort pill, vote highlights, and other accents. It is a single number from 0 to 360 on the OKLCH hue wheel:

- Around 280 (the default) gives the QuillThreads violet.
- Lower values move toward red and orange.
- Around 220 gives blue, around 150 gives green.

Using a hue rather than a fixed colour means the accent stays balanced in both light and dark themes automatically. Set it close to your site's brand colour and the thread will feel native.

## Threaded or flat

The **Thread mode** setting decides how replies are shown:

- **Threaded**: replies nest under the comment they answer, up to the **Maximum nesting depth** you set. This is best for back-and-forth discussion.
- **Flat**: every comment is shown in a single chronological list. This suits fast, chat-like commentary or sites that prefer a simpler layout.

In threaded mode, replies deeper than the nesting limit attach at the deepest allowed level so the layout never runs off the side of the page on mobile.

## Sorting and paging

- **Default sort order** sets what readers see first: newest, oldest, or top (most upvoted). Readers can change it themselves.
- **Comments per page** controls how many top-level threads load at once. A "Load more" button fetches the next page, so even an article with hundreds of comments stays fast. Full-thread search runs across every comment, not just the page on screen.

## Display options

- **Show avatars** shows or hides the commenter avatars beside each comment. Turn it off for a compact, text-only thread.
- **Enable up/down votes** adds the vote arrows and unlocks the "Top" sort.
- **Enable emoji reactions** adds a row of reactions to each comment.
- **Enable attachments** lets readers attach files.

Turning features off keeps the thread lean. Turn them on as your community grows into them.

## Styling with CSS

The comment thread is a small React application that mounts into a single element in your article:

```html
<div id="qt-comments-root" class="qt-app"> ... </div>
```

There are no PHP layout files to override for the thread itself (that is only true of the *module*, `mod_quillthreads_latest`, which is a normal, overridable Joomla module). Instead you style the thread from your site template's CSS in two ways: **CSS variables** for colour and sizing, and **class hooks** for structure and visibility. Scope your rules to `#qt-comments-root` (or `.qt-app`) so they only touch the thread.

### CSS variables

Override any of these on the root to retheme without fighting specificity:

```css
#qt-comments-root.qt-app {
  --qt-primary: oklch(.55 .15 250);   /* accent, links, active pills */
  --qt-surface: #ffffff;              /* card background */
  --qt-border: #e5e7eb;               /* card and control borders */
  --qt-text: #111827;                 /* body text */
  --qt-text-muted: #6b7280;           /* meta text */
  --qt-avatar-size: 32px;             /* avatar diameter */
  --qt-avatar-radius: 8px;            /* 50% is a circle, smaller is a rounded square */
}
```

Others include `--qt-surface-muted`, `--qt-faint`, `--qt-danger`, `--qt-warning`, `--qt-success`, `--qt-pending`, `--qt-shadow-sm`, `--qt-shadow-md`, and the `--qt-font-ui` / `--qt-font-serif` / `--qt-font-mono` stacks.

### Class hooks

Every structural part of the thread carries a stable class you can target. These classes are also where the thread's own styling lives: the entire look is defined in one stylesheet keyed to these hooks (shipped in the island's CSS bundle, authored in `react-app/src/styles/comments.css`), with no inline styles on the elements. That means you can read exactly what a class does and override it from your template. Because your rules are scoped to `#qt-comments-root`, they outrank the thread's own `.qt-app`-scoped defaults, so a plain override wins without `!important`.

| Class | What it is |
| --- | --- |
| `qt-thread` | the whole thread root |
| `qt-comments-header` | the header row (count, search, sort) |
| `qt-comments-count`, `qt-comments-search`, `qt-comments-sort` | the count heading, search box, and sort pills |
| `qt-comments-list` | the list of comments |
| `qt-comments-empty`, `qt-comments-loading`, `qt-comments-error` | the empty, loading, and error states |
| `qt-load-more` | the "Load more" button |
| `qt-composer` | the comment form (`qt-composer--reply` on inline reply forms) |
| `qt-composer-avatar`, `qt-composer-input`, `qt-composer-fields`, `qt-composer-actions`, `qt-composer-submit` | the composer's avatar, textarea, guest fields, action row, and submit button |
| `qt-comment` | a single comment, with `qt-comment--root` / `qt-comment--reply` and `is-pending` / `is-featured` / `is-pinned` / `is-collapsed` state modifiers |
| `qt-comment-card` | the visible card box |
| `qt-comment-avatar` | the commenter's avatar |
| `qt-comment-main`, `qt-comment-aside`, `qt-comment-content` | the card's flex row, the avatar gutter, and the content column |
| `qt-comment-header` | the name + badges + time row |
| `qt-comment-author`, `qt-comment-handle`, `qt-comment-time`, `qt-comment-device`, `qt-comment-edited` | the author name, @handle, timestamp, device icon, and "(edited)" mark |
| `qt-comment-badge` | any badge, with `--staff` / `--author` / `--verified` / `--guest` / `--pending` variants |
| `qt-comment-body` | the comment text |
| `qt-comment-attachments` | the attached files |
| `qt-comment-actions` | the action row |
| `qt-comment-vote`, `qt-comment-like`, `qt-comment-reply`, `qt-comment-reaction`, `qt-comment-report` | the vote control, like button, reply button, reaction chips, and report button |
| `qt-comment-report-panel` | the report reason panel |
| `qt-comment-mod` | the moderator action strip (moderator view only) |
| `qt-comment-replies` | the nested replies container |
| `qt-comment-flag` | the "pinned" or "editor's pick" banner (`--pinned` / `--featured`) |
| `qt-avatar` | the base class every avatar carries, in both comments and the composer |

Interactive controls also toggle a small set of state classes you can style: `is-active` on the selected sort pill, the cast vote arrow, a non-zero score, and a liked button; `is-selected` on a chosen reaction; and `qt-seg` on the shared segmented buttons (sort, guest toggle, cancel, preview).

### Examples

Hide avatars entirely (or just switch off the **Show avatars** setting):

```css
#qt-comments-root .qt-comment-avatar,
#qt-comments-root .qt-composer-avatar { display: none; }
```

Hide the "Guest" badge and the device icon:

```css
#qt-comments-root .qt-comment-badge--guest,
#qt-comments-root .qt-comment-device { display: none; }
```

Put the avatar on the right of each comment:

```css
#qt-comments-root .qt-comment-main { flex-direction: row-reverse; }
```

Restyle a part outright. Because the hooks carry the default styling, you override it in place, for example squarer cards and a branded active sort pill:

```css
#qt-comments-root .qt-comment-card { border-radius: 6px; }
#qt-comments-root .qt-seg.is-active { background: #eef2ff; color: #4338ca; }
```

Because these are your own template rules against stable classes, they are safe across updates. The thread is scoped under its own root element, so your rules and the thread's own styles stay out of each other's way.
