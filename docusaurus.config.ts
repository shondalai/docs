import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Shondalai Documentation',
  tagline: 'Guides, configuration, and developer references for the complete Shondalai Joomla extension suite',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.shondalai.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'shondalai', // GitHub org/user name
  projectName: 'docs', // Repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    mermaid: false,
    format: 'mdx',
    hooks: {
      onBrokenMarkdownLinks: 'ignore',
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'easyforms',
          path: 'docs/extensions/easyforms',
        },
        blog: false,
        theme: {
          customCss: './src/css/portal.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community-surveys',
        path: 'docs/extensions/community_surveys',
        routeBasePath: 'community-surveys',
        sidebarPath: './sidebars-community-surveys.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community-polls',
        path: 'docs/extensions/community_polls',
        routeBasePath: 'community-polls',
        sidebarPath: './sidebars-community-polls.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community-quiz',
        path: 'docs/extensions/community_quiz',
        routeBasePath: 'community-quiz',
        sidebarPath: './sidebars-community-quiz.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community-answers',
        path: 'docs/extensions/community_answers',
        routeBasePath: 'community-answers',
        sidebarPath: './sidebars-community-answers.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cjforum',
        path: 'docs/extensions/cjforum',
        routeBasePath: 'cjforum',
        sidebarPath: './sidebars-cjforum.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sociable',
        path: 'docs/extensions/sociable',
        routeBasePath: 'sociable',
        sidebarPath: './sidebars-sociable.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'gps-tools',
        path: 'docs/extensions/gps_tools',
        routeBasePath: 'gps-tools',
        sidebarPath: './sidebars-gps-tools.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community-quotes',
        path: 'docs/extensions/community_quotes',
        routeBasePath: 'community-quotes',
        sidebarPath: './sidebars-community-quotes.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'rewardify',
        path: 'docs/extensions/rewardify',
        routeBasePath: 'rewardify',
        sidebarPath: './sidebars-rewardify.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'easycommerce',
        path: 'docs/extensions/easycommerce',
        routeBasePath: 'easycommerce',
        sidebarPath: './sidebars-easycommerce.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'quillthreads',
        path: 'docs/extensions/quillthreads',
        routeBasePath: 'quillthreads',
        sidebarPath: './sidebars-quillthreads.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'templates',
        path: 'docs/extensions/templates',
        routeBasePath: 'templates',
        sidebarPath: './sidebars-templates.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general',
        path: 'docs/extensions/general',
        routeBasePath: 'general',
        sidebarPath: './sidebars-general.ts',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Redirect extension root paths to overview pages
          {
            from: '/community_surveys',
            to: '/community-surveys/overview',
          },
          {
            from: '/community_polls',
            to: '/community-polls/overview',
          },
          {
            from: '/community_quiz',
            to: '/community-quiz/overview',
          },
          // Community Quiz: retired legacy docs (component rebuilt for Joomla 6)
          {
            from: '/community-quiz/configuring-pdf-renderers-for-community-quiz',
            to: '/community-quiz/certificates',
          },
          {
            from: '/community-quiz/shortcodes-supported-by-community-quiz-certificates',
            to: '/community-quiz/certificates',
          },
          {
            from: '/community-quiz/adding-mathematical-formulas-in-quizzes',
            to: '/community-quiz/quiz-builder',
          },
          {
            from: '/community-quiz/community-quiz-built-in-module-positions',
            to: '/community-quiz/community-quiz-modules',
          },
          {
            from: '/community_answers',
            to: '/community-answers/overview',
          },
          {
            from: '/community_quotes',
            to: '/community-quotes/overview',
          },
          {
            from: '/gps_tools',
            to: '/gps-tools/overview',
          },
          {
            from: '/cjforum',
            to: '/cjforum/overview',
          },
          {
            from: '/sociable',
            to: '/sociable/overview',
          },
          {
            from: '/sociable/creating-sociable-profile-app',
            to: '/sociable/sociable-sdk-developer-guide',
          },
          {
            from: '/sociable/overriding-sociable-layouts',
            to: '/sociable/sociable-sdk-developer-guide',
          },
          {
            from: '/sociable/sociable-activity-stream-api',
            to: '/sociable/sociable-sdk-developer-guide',
          },
          {
            from: '/sociable/sociable-avatars-api',
            to: '/sociable/sociable-sdk-developer-guide',
          },
          {
            from: '/sociable/sociable-badges-api',
            to: '/sociable/sociable-sdk-developer-guide',
          },
          {
            from: '/sociable/sociable-points-system-api',
            to: '/sociable/sociable-sdk-developer-guide',
          },
          {
            from: '/sociable/sociable-profile-api',
            to: '/sociable/sociable-sdk-developer-guide',
          },
          {
            from: '/rewardify',
            to: '/rewardify/overview',
          },
          {
            from: '/easycommerce',
            to: '/easycommerce/overview',
          },
          {
            from: '/quillthreads',
            to: '/quillthreads/overview',
          },
          {
            from: '/templates',
            to: '/templates/overview',
          },
        ],
        createRedirects(existingPath) {
          // Redirect old underscore URLs to new hyphen URLs
          // This handles both category names (community_surveys -> community-surveys)
          // AND document slugs (community_surveys_changelog -> community-surveys-changelog)

          if (existingPath.includes('/community-surveys')) {
            // Replace category and convert all hyphens to underscores in the path
            const oldPath = existingPath.replace('/community-surveys', '/community_surveys').replace(/-/g, '_');
            return [oldPath];
          }
          if (existingPath.includes('/community-polls')) {
            const oldPath = existingPath.replace('/community-polls', '/community_polls').replace(/-/g, '_');
            return [oldPath];
          }
          if (existingPath.includes('/community-quiz')) {
            const oldPath = existingPath.replace('/community-quiz', '/community_quiz').replace(/-/g, '_');
            return [oldPath];
          }
          if (existingPath.includes('/community-answers')) {
            const oldPath = existingPath.replace('/community-answers', '/community_answers').replace(/-/g, '_');
            return [oldPath];
          }
          if (existingPath.includes('/community-quotes')) {
            const oldPath = existingPath.replace('/community-quotes', '/community_quotes').replace(/-/g, '_');
            return [oldPath];
          }
          if (existingPath.includes('/gps-tools')) {
            const oldPath = existingPath.replace('/gps-tools', '/gps_tools').replace(/-/g, '_');
            return [oldPath];
          }
          return undefined; // Return undefined when no redirect is needed
        },
      },
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: 'filename',
        language: ['en'],
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: [
          'easyforms',
          'community-surveys',
          'community-polls',
          'community-quiz',
          'community-answers',
          'cjforum',
          'sociable',
          'gps-tools',
          'community-quotes',
          'rewardify',
          'easycommerce',
          'quillthreads',
          'templates',
          'general',
        ],
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarShortcutKeymap: 'mod+k',
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content: 'Product guides, configuration help, and developer references for Shondalai Joomla extensions.',
      },
      {
        name: 'keywords',
        content: 'Shondalai, Joomla extensions, EasyForms, EasyCommerce, Community Surveys, CjForum, Sociable, documentation',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Shondalai Docs',
      hideOnScroll: true,
      items: [
        {
          type: 'dropdown',
          label: 'Documentation',
          className: 'extensions-desktop',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              label: 'EasyForms',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'community-surveys',
              label: 'Community Surveys',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'community-polls',
              label: 'Community Polls',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'community-quiz',
              label: 'Community Quiz',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'community-answers',
              label: 'Community Answers',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'cjforum',
              label: 'CjForum',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'sociable',
              label: 'Sociable',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'gps-tools',
              label: 'GPS Tools',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'community-quotes',
              label: 'Community Quotes',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'rewardify',
              label: 'Rewardify',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'easycommerce',
              label: 'EasyCommerce',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'quillthreads',
              label: 'QuillThreads',
            },
            {
              type: 'doc',
              docId: 'overview',
              docsPluginId: 'templates',
              label: 'Templates',
            },
            {
              type: 'doc',
              docId: 'frequently-asked-questions',
              docsPluginId: 'general',
              label: 'General Documentation',
            },
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Explore',
          items: [
            {
              label: 'Docs home',
              to: '/',
            },
            {
              label: 'General guides',
              to: '/general/frequently-asked-questions',
            },
            {
              label: 'Templates',
              to: '/templates/overview',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'EasyForms',
              to: '/easyforms/overview',
            },
            {
              label: 'EasyCommerce',
              to: '/easycommerce/overview',
            },
            {
              label: 'Community Surveys',
              to: '/community-surveys/overview',
            },
            {
              label: 'CjForum',
              to: '/cjforum/overview',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Sociable',
              to: '/sociable/overview',
            },
            {
              label: 'GPS Tools',
              to: '/gps-tools/overview',
            },
            {
              label: 'Main Site',
              href: 'https://shondalai.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BulaSikku Technologies Private Limited.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
