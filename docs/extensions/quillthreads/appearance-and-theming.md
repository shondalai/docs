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

## Density and votes

- **Enable up/down votes** adds the vote arrows and unlocks the "Top" sort.
- **Enable emoji reactions** adds a row of reactions to each comment.
- **Enable attachments** lets readers attach files.

Turning features off keeps the thread lean. Turn them on as your community grows into them.

## Making it match your template

Because the thread renders inside your article, it inherits your page width and font stack where it can. The accent hue and theme settings handle the rest. There is no separate stylesheet to maintain. If you run a heavily customised template and want to fine-tune spacing, the thread is scoped under its own root element so your template CSS and the thread's styles stay out of each other's way.
