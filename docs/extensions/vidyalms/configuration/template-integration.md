---
title: Template integration and styling hooks
description: The supported boundary between VidyaLMS learner pages and Joomla templates or WordPress themes.
---

This guide is for template developers. Site owners can make the same basic branding choices in [Settings → Appearance](branding.md). The contract applies to the public learning area; the administrator workspace has its own styling.

## Who controls what

The Joomla template or WordPress theme owns the outer page header, footer and content container. VidyaLMS fills the available container width. It owns course cards, learning navigation, progress displays, forms and the study interface inside that area.

**VidyaLMS appearance** uses component defaults for values left on Automatic. **Follow site template** also inherits the surrounding element's computed font and maps the supported color variables below. Neither mode imports arbitrary template CSS or duplicates the site's navigation. Use the existing learner-header visibility settings to remove duplicated branding.

WordPress catalogue and My learning shortcodes use the same branding wrapper as the full learner pages. Joomla learner pages use the component's shared layout. This milestone does not add Joomla modules, builder blocks or a YOOtheme adapter.

## Which choice takes priority

For colors, an explicit value saved in Appearance takes precedence on the learning root. When that palette leaves a color on Automatic, the order is:

1. A public `--vy-*` token supplied by the template or integration.
2. In **Follow site template** mode, the corresponding `--vy-site-*` hook or supported template variable.
3. VidyaLMS's light/dark fallback.

For typography, an explicit editor font wins. **Automatic** uses the VidyaLMS font in standalone mode. In integrated mode it uses `--vy-font-body`, then `--vy-site-font`, then the surrounding element's computed font. Before the theme observer starts, common body-font variables provide a fallback.

For color scheme, the saved **Light** or **Dark** choice wins. **Follow browser preference** uses the browser/device preference. **Follow site template** looks outward from the learning root for the nearest recognized signal:

- `data-color-scheme`, `data-bs-theme` or `data-theme`: `light`, `dark`, `auto` or `system`.
- Classes `light`, `light-mode`, `theme-light`, `dark`, `dark-mode` or `theme-dark`.
- The surrounding element's CSS `color-scheme`. `normal` means the host is light; `light dark` lets the browser choose.

If there is no explicit usable scheme, the browser preference is the fallback. Changes to supported ancestor attributes/classes and browser preference are observed without remounting the lesson. A saved user preference in the site's own theme works when that theme exposes one of these signals. VidyaLMS does not store a separate learner light/dark preference. The admin workspace's theme switch does not select the learner theme.

## Template color and font hooks

Define these on a site content container or another ancestor of the learning root. They are read in integrated mode when that color is Automatic. They can use `light-dark()` if the template supports both schemes.

| Hook | Used for | Additional automatic mapping |
| --- | --- | --- |
| `--vy-site-accent` | Links, primary actions and brand highlights | `--cassiopeia-color-link`, then `--bs-link-color` |
| `--vy-site-accent-fg` | Text on an accent background | Component fallback |
| `--vy-site-bg` | Learning background | `--body-bg`, then `--bs-body-bg` |
| `--vy-site-surface` | Cards and forms | `--body-bg`, then `--bs-body-bg` |
| `--vy-site-surface-2` | Secondary surfaces | Component fallback |
| `--vy-site-fg` | Main text | `--body-color`, then `--bs-body-color` |
| `--vy-site-fg-2` | Secondary text | Component fallback |
| `--vy-site-border` | Dividers and card borders | `--border-color`, then `--bs-border-color` |
| `--vy-site-control-border` | Form outlines | Component fallback |
| `--vy-site-font` | Automatic integrated typography | Computed font of the surrounding element |

For example, put this in your template's supported custom stylesheet, replacing `.academy-content` with the actual site container:

```css
.academy-content {
  --vy-site-accent: light-dark(#245d88, #a3cff2);
  --vy-site-accent-fg: light-dark(#ffffff, #142c40);
  --vy-site-font: "Your site font", system-ui, sans-serif;
}
```

VidyaLMS does not load a font from a remote service. If you name a custom font, the template must load it. The editor's Bricolage Grotesque option is bundled locally. Template hooks do not automatically interpret WordPress `theme.json` or every framework's proprietary variables; map those into the public hooks where needed.

## Public tokens and semantic classes

The public color tokens are `--vy-accent`, `--vy-accent-fg`, `--vy-bg`, `--vy-surface`, `--vy-surface-2`, `--vy-fg`, `--vy-fg-2`, `--vy-border` and `--vy-control-border`. `--vy-font-body` and `--vy-font-display` control typography. The editor also writes `--vy-text`, `--vy-radius`, `--vy-radius-lg`, `--vy-btn-radius` and `--vy-density` on the learning root. Its saved values take precedence over inherited values for those controls.

Use these semantic hooks for narrowly scoped styling:

| Hook | Purpose |
| --- | --- |
| `.vidyalms[data-vy-theme-mode]` | Root carrying saved learner branding |
| `.vy-learner-shell` | Full learner-page shell |
| `.vy-learning-brandbar`, `.vy-learning-navigation`, `.vy-learning-content` | Header, navigation and page content |
| `.vidyalms-card`, `.vidyalms-card-title`, `.vidyalms-card-summary` | Catalogue cards |
| `.vidyalms-course-aside`, `.vidyalms-module` | Course summary/action area and outline modules |
| `.vidyalms-enrolment`, `.vy-resume-course` | My learning entries and resume panel |
| `#vidyalms-player`, `.vy-prose` | Player mount and lesson reading content |
| `#vidyalms-quiz-runner`, `.vy-assessment-summary` | Assessment mount and summary panel |

Treat `--_vy-*`, `--vy-integrated-*`, generated bundle names, utility classes and nested React DOM structure as internal. The public hooks above are the customization boundary; updates may rearrange their children. Do not build selectors around a sequence of child positions or edit installed bundles.

A normal Joomla PHP layout override can change PHP-rendered markup. It cannot replace the internal markup of a React-rendered quiz or player. Use Appearance, public tokens and semantic CSS for those screens. Changes to assessment behavior belong in VidyaLMS's supported question-type/provider APIs, not DOM patches.

## Compatibility and acceptance checks

Cassiopeia's link/body variables and Bootstrap's body/link variables are recognized as listed above. Other templates can use the explicit hooks. This mapping is not a claim that every version or customization of a framework has been tested. YOOtheme has not been validated and no YOOtheme adapter is included.

Before publishing a design:

- Open the catalogue, a course, My learning, a lesson and a quiz directly. Reload each and check browser Back/Forward after navigating between pages.
- Check the real site header, footer, menus and breadcrumbs with SEF/permalink settings and languages used on the site. Branding must not rewrite URLs or access rules.
- Test a phone width and long translated course titles and navigation labels. Check for clipping and horizontal overflow.
- Use the keyboard through links, forms and quiz answers. Check visible focus, selected/disabled states and both palettes against the surrounding template.
- Check courses and progress as a guest and an enrolled learner. Template work must not expose private learning data or put it into a shared page cache.
- Save a named preset, reload Settings, export and import it on a test site, then verify that a normal extension update preserves the saved settings.

The editor preview uses isolated sample content and the shipped learner styles. Final acceptance should still use the public template and real learning layouts, especially if the site supplies additional custom CSS.
