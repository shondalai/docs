---
id: sections-reference
title: "Section Reference"
sidebar_label: Section Reference
sidebar_position: 3
---

# Section Reference

Studio Pages ships 12 section types in three groups: Content, Commerce and Joomla. This page lists every field of every section.

A section with no real content is dropped from the live page automatically. In the editor such sections show a **hidden** tag and the badge **Empty, won't render on the live site**, so a half-filled page never leaks placeholder gaps to visitors. Each section below notes when it counts as empty.

Several sections have a **Tone** choice (Default, Accent or Contrast). It picks the section's background treatment from your template's palette: Default uses the page background, Accent uses your accent colour and Contrast uses a dark band.

## Content sections

### Hero

Headline band with copy, buttons and an optional image.

| Field | Type | What it does |
|-------|------|--------------|
| Eyebrow | Text | A short kicker line above the title |
| Title | Text | The headline |
| Subtitle | Text area | Supporting copy under the title |
| Tone | Choice: Default / Accent / Contrast | Background treatment of the band |
| Image | Toggle: Image shown / Text only | Shows a decorative panel beside the text |
| Primary button | Text | Label of the main button |
| Primary link | Text | Where the main button goes. A route like /shop or a full URL |
| Secondary button | Text | Label of the second button |
| Secondary link | Text | Where the second button goes. A route like /about or a full URL |

Empty when Title and Subtitle are both blank.

:::note The hero image is decorative
There is no media picker in Studio Pages. Turning **Image** on shows a themed decorative panel supplied by your template, not an uploaded photo. Only the Product grid section shows real images, taken from your store.
:::

### Rich text

A prose block. Blank lines start new paragraphs.

| Field | Type | What it does |
|-------|------|--------------|
| Text | Text area | The prose itself. A blank line starts a new paragraph |
| Width | Choice: Narrow / Normal / Wide | The column width of the text block |

Empty when Text is blank.

### Feature grid

A grid of numbered title + text cards.

| Field | Type | What it does |
|-------|------|--------------|
| Heading | Text | A heading above the grid |
| Subheading | Text | A supporting line under the heading |
| Columns | Choice: 2 / 3 / 4 | How many cards sit side by side |
| Features | List (Add feature) | The cards. Each has a Title (text) and a Text (text area) |

Empty when the Heading is blank and no feature has a title or text.

### Stats

A row of big figures with labels.

| Field | Type | What it does |
|-------|------|--------------|
| Heading | Text | A heading above the figures |
| Tone | Choice: Default / Accent / Contrast | Background treatment of the row |
| Figures | List (Add figure) | The numbers. Each has a Value (text) and a Label (text) |

Empty when no figure has a value or label.

### Testimonial

Quotes with author and role.

| Field | Type | What it does |
|-------|------|--------------|
| Heading | Text | A heading above the quotes |
| Quotes | List (Add quote) | The quotes. Each has a Quote (text area), an Author (text) and a Role or place (text) |

Empty when no quote text is filled in.

### FAQ

Expandable questions and answers.

| Field | Type | What it does |
|-------|------|--------------|
| Heading | Text | A heading above the list |
| Intro | Text | A short introduction line |
| Questions | List (Add question) | The entries. Each has a Question (text) and an Answer (text area). Visitors click a question to expand its answer |

Empty when no question is filled in.

### Call to action

A poster statement with a headline and button.

| Field | Type | What it does |
|-------|------|--------------|
| Eyebrow | Text | A short kicker line above the title |
| Title | Text | The statement headline |
| Body | Text area | Supporting copy |
| Tone | Choice: Default / Accent / Contrast | Background treatment of the band |
| Button | Text | The button label |
| Button link | Text | Where the button goes |

Empty when Title and Body are both blank.

### Trust bar

A compact row of USPs.

| Field | Type | What it does |
|-------|------|--------------|
| Items | List (Add item) | The claims, each a single Label (text), for example "Free EU shipping over €60" or "30-day returns" |

Empty when no item has a label.

## Commerce sections

### Product grid

Products from your EasyCommerce store.

| Field | Type | What it does |
|-------|------|--------------|
| Heading | Text | A heading above the grid |
| Source | Choice: Featured / Newest | Which store products fill the grid on the live site |
| Columns | Choice: 3 / 4 | How many products sit side by side |
| Products | Choice: 4 / 6 / 8 | How many products to show |
| Prices | Toggle: Prices shown / Prices hidden | Whether each card shows the price |
| Quick add | Toggle: Quick add on / Quick add off | Whether each card shows a quick add-to-cart button |

On the live site the cards show real product images, names and prices from your store, with a link to view the whole shop.

:::warning Product grid needs EasyCommerce
This is the only section with a real dependency: it pulls your store's Featured or Newest products at view time. If EasyCommerce is disabled, or the chosen source returns no products, the whole section silently disappears from the live page. The builder canvas always previews it with demo products, so what you see in the editor is never your live store data.
:::

### Category band

A row of shop category tiles.

| Field | Type | What it does |
|-------|------|--------------|
| Heading | Text | A heading above the tiles |
| Categories | List (Add category) | The tiles. Each has a Category (text) for the tile title and a Caption (text) for the line under it, for example "24 products" |

Empty when no tile has a title.

:::note Typed content, no store required
Category band tiles are plain text you type yourself. They are not linked to your EasyCommerce categories and the section works fine without EasyCommerce installed.
:::

### Featured product

One product, told large: image, blurb, price.

| Field | Type | What it does |
|-------|------|--------------|
| Eyebrow | Text | A short kicker line, for example "Featured" |
| Product name | Text | The product headline |
| Blurb | Text area | A short description |
| Price | Text | The price, typed freely, for example "€89" |
| Button | Text | The button label |
| Layout | Toggle: Image right / Image left | Which side the image panel sits on |
| Tone | Choice: Default / Contrast | Background treatment of the band |

Empty when Product name and Blurb are both blank.

Like the Category band, this section is typed content: the name, blurb and price are your own text, not pulled from a store, so it works without EasyCommerce. The image area is a decorative themed panel, not an uploaded photo.

## Joomla sections

### Module position

Render modules published to a template position.

| Field | Type | What it does |
|-------|------|--------------|
| Position key | Text | The template position to render, for example sidebar-top. Every module published to that position appears inside the page |

Empty when the Position key is blank. The section also hides on the live site when no modules are published to that position, so an unused position never leaves a gap.

:::tip Use your template's position names
Position keys come from your template and do not change. You can see the available names in the Position dropdown when editing any module under **Content → Site Modules**.
:::
