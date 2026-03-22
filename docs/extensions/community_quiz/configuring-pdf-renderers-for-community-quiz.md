---
id: configuring-pdf-renderers-for-community-quiz
title: Configuring PDF Renderers
sidebar_label: PDF Renderers
sidebar_position: 2
---

Community Quiz can generate response reports and certificates using two PDF renderers:

- **Chrome / Browsershot** for the best HTML and CSS rendering quality
- **DomPDF** as a PHP-based fallback when Chrome is not available

This guide explains how to enable Chrome rendering, when DomPDF is used automatically, and which global options control PDF behavior.

## How Renderer Selection Works

Community Quiz provides a **PDF Engine** option in the component configuration with three modes:

| PDF Engine | What it does | Recommended use |
|-----------|--------------|-----------------|
| **Auto Detect (Recommended)** | Tries Chrome first. If Chrome is not available, it falls back to DomPDF automatically. | Best choice for most sites |
| **Chrome / Browsershot** | Prefers the Chrome renderer for the highest-quality output. If Chrome cannot be initialized, Community Quiz still falls back to the automatic detection path. | Sites where Chrome rendering is available and preferred |
| **DomPDF** | Uses DomPDF directly without trying Chrome first. | Shared hosting or servers without Node.js |

## Where to Configure It

1. Open **Components -> Community Quiz -> Options**
2. Stay in the main **Quizzes** settings group
3. Find the **PDF Engine** option
4. Choose one of these values:
   - **Auto Detect (Recommended)**
   - **Chrome / Browsershot (requires Node.js)**
   - **DomPDF (Pure PHP)**
5. Save the configuration

## Recommended Setup

For most production sites, use **Auto Detect**.

Why this is the safest choice:

- Chrome is used automatically when the server supports it
- DomPDF is used automatically when Chrome is unavailable
- You do not need to switch settings when moving between environments such as local development, staging, and production

## Enabling Chrome PDF Rendering

Chrome rendering is powered by **Spatie Browsershot**, which runs headless Chrome through Node.js.

### Server Requirements

To allow Community Quiz to use Chrome rendering, your server must provide:

- **Node.js** in the server PATH
- **npm** in the server PATH
- **Puppeteer** installed where PHP can resolve it
- A usable **Chrome or Chromium** browser binary

In the current implementation, Chrome availability is detected by checking:

- `node --version`
- `npm root -g`
- whether `require('puppeteer')` succeeds from the global npm modules path

That means the most reliable setup is:

```bash
npm install -g puppeteer
```

If Puppeteer is already installed and configured globally for the same environment that PHP uses, Community Quiz should detect Chrome rendering automatically.

### Step-by-Step Chrome Setup

1. Install Node.js on the server
2. Confirm both `node` and `npm` are available to the web server user
3. Install Puppeteer globally:

```bash
npm install -g puppeteer
```

4. Ensure Chrome or Chromium is installed and usable on the server
5. In Joomla, set **PDF Engine** to **Auto Detect** or **Chrome / Browsershot**
6. Open a quiz response and click **Download PDF**
7. Confirm the generated PDF uses the Chrome-quality layout

## When DomPDF Is Used

DomPDF is the fallback renderer and is useful on servers where installing Node.js is not practical.

Community Quiz uses DomPDF when:

- **PDF Engine** is set to **DomPDF**
- **PDF Engine** is set to **Auto Detect** and Chrome is not available
- Chrome is selected but cannot be initialized successfully during service creation

DomPDF is a pure PHP renderer, so it works on more hosting environments. It is the safer compatibility option, but Chrome usually produces better output for modern layouts, advanced CSS, and more exact page rendering.

## Chrome vs DomPDF

| Capability | Chrome / Browsershot | DomPDF |
|-----------|-----------------------|--------|
| Modern CSS support | Excellent | Good, but more limited |
| Flexbox / Grid fidelity | Better | More limited |
| Visual match to browser rendering | Better | Moderate |
| Server requirements | Higher | Lower |
| Best for polished reports and certificates | Yes | Acceptable fallback |

## PDF Options You Can Configure

Community Quiz includes several PDF-related global options in the same configuration area.

### PDF Font Name

Use **PDF Font Name** to control the font used by the PDF engine. The default is:

```text
DejaVu Sans
```

This is a sensible default because it works well for multilingual content and broad character coverage.

### PDF Date Format

Use **PDF Date Format** to control how dates are rendered in certificates and related PDF output.

Default value:

```text
F j, Y, g:i a
```

### PDF Header and Footer Controls

You can now control headers and footers separately for response PDFs and certificates:

- **PDF Response Header**
- **PDF Response Footer**
- **PDF Certificate Header**
- **PDF Certificate Footer**

These settings let you keep branding on one document type while using a cleaner layout for another.

## Response Reports and Certificates

The renderer choice applies to both:

- downloadable **response PDFs**
- generated **certificate PDFs**

Both document types use the same PDF service layer and the same renderer selection logic.

## Troubleshooting

### Chrome is selected, but Community Quiz still uses DomPDF

Check the following on the server:

- `node --version` returns a valid Node.js version
- `npm root -g` returns a valid global modules directory
- Puppeteer is installed globally
- the PHP process can execute shell commands

If any of these checks fail, switch to **Auto Detect** and Community Quiz will continue using DomPDF until Chrome becomes available.

### PDFs work on one server but not another

This usually means the environments differ in one of these areas:

- Node.js availability
- global npm module path
- Puppeteer installation
- Chrome or Chromium availability

Use **Auto Detect** when you want the same Joomla configuration to work across mixed environments.

### Certificate images are missing

If your certificate uses images, prefer site-relative or absolute URLs that the PDF renderer can resolve. Community Quiz includes base URL handling for certificate rendering, but image delivery can still fail if the file path or public accessibility is incorrect.

### Which option should I choose?

Use this rule:

- Choose **Auto Detect** for almost every site
- Choose **Chrome / Browsershot** when you know the server is prepared for Node.js and Puppeteer
- Choose **DomPDF** when you need the simplest possible deployment with no Chrome dependencies

## Related Guides

- [Installing and Configuring Community Quiz](./installing-and-configuring-community-quiz)
- [Certificate Shortcodes](./shortcodes-supported-by-community-quiz-certificates)
- [Customizing Emails Sent from Community Quiz](./customizing-emails-sent-from-community-quiz)