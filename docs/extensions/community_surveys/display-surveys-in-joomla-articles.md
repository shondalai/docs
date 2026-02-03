---
id: display-surveys-in-joomla-articles
title: Display Surveys in Joomla Articles
sidebar_label: Display in Articles
sidebar_position: 18
---

Community Surveys includes a content plugin that allows you to embed surveys directly within any Joomla article. This is perfect for adding contextual surveys to blog posts, landing pages, or any content area.

## Prerequisites

Before embedding surveys, ensure:

1. The **Content - Surveys** plugin is published in **Extensions → Plugins**
2. The survey you want to embed is **published** and has proper **access levels** set
3. The user viewing the article has permission to view the survey

## Basic Syntax

Use the following shortcode syntax in your article:

```
{LOADSURVEY [id: 123]}
```

Replace `123` with your survey's ID.

:::tip Finding the Survey ID
You can find the survey ID in the **Surveys** list view in the administrator panel. The ID is displayed in the rightmost column.
:::

## Advanced Options

The shortcode supports additional parameters for customization:

```
{LOADSURVEY [id: 123, container: "my-survey", template: "compact"]}
```

### Available Parameters

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `id` | **Required.** The survey ID to embed | - | `id: 123` |
| `container` | Custom CSS class for the wrapper div | Auto-generated | `container: "my-survey"` |
| `template` | Layout template to use | `default` | `template: "compact"` |

### Parameter Examples

**Basic embed:**
```
{LOADSURVEY [id: 42]}
```

**With custom container class:**
```
{LOADSURVEY [id: 42, container: "feedback-survey"]}
```

**With all options:**
```
{LOADSURVEY [id: 42, container: "product-feedback", template: "default"]}
```

## How It Works

When the article is rendered:

1. The plugin scans the article content for `{LOADSURVEY}` tags
2. For each tag found, it loads the survey data from the database
3. The survey is rendered inline using the component's layout system
4. Required CSS and JavaScript assets are automatically loaded

### Access Control

The plugin respects Joomla's access levels:

- Only **published** surveys can be embedded
- Users must have the appropriate **view access level** to see the survey
- If a survey is not found or the user lacks permission, a warning message is displayed

### Assets Loaded

When a survey is embedded, the following assets are automatically loaded:

- jQuery (if not already present)
- Bootstrap tabs and collapse components
- Font Awesome icons
- Community Surveys frontend stylesheet
- Captcha plugin (if enabled in component settings)

## Styling the Embedded Survey

The embedded survey is wrapped in a container with the following structure:

```html
<div id="cj-wrapper" class="survey-wrapper [your-container-class]">
    <!-- Survey content -->
</div>
```

You can target the survey with CSS using:

```css
/* Target all embedded surveys */
.survey-wrapper {
    margin: 2rem 0;
    padding: 1.5rem;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
}

/* Target a specific survey by container class */
.my-custom-survey {
    background: #f8f9fa;
}
```

## Fallback Behavior

If the full survey layout cannot be rendered (e.g., missing layout files), the plugin displays a fallback view with:

- Survey title
- Survey description (if available)
- A button linking to the full survey page

## Troubleshooting

### Survey Not Displaying

1. **Check plugin status:** Ensure "Content - Surveys" plugin is published
2. **Verify survey ID:** Confirm the ID exists and the survey is published
3. **Check access levels:** Ensure the survey's access level matches your viewing user
4. **Clear cache:** Clear Joomla's cache after making changes

### Styling Issues

- The survey inherits styles from your template
- Add custom CSS to your template's stylesheet to override default styles
- Use the `container` parameter to add specific classes for targeting

### JavaScript Conflicts

If you experience JavaScript issues:

1. Ensure jQuery is loading correctly
2. Check browser console for errors
3. Verify no conflicting scripts are loaded

## Alternative: Module Embedding

For more placement flexibility, you can also use the **Survey Form Module**:

1. Create and configure the module in **Extensions → Modules**
2. Assign it to a custom position (e.g., `my-survey-position`)
3. Load it in your article using Joomla's module syntax:

```
{loadmodule mod_surveys,My Survey Module}
```

Or by position:

```
{loadposition my-survey-position}
```

:::note
The content plugin method (`{LOADSURVEY}`) is recommended for most use cases as it provides better integration and doesn't require creating separate modules.
:::