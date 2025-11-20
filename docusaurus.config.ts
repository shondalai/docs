import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Joomla Extensions Documentation',
  tagline: 'Comprehensive documentation for EasyForms, and more',
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
  onBrokenMarkdownLinks: 'ignore',

  markdown: {
    mermaid: false,
    format: 'mdx',
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
          customCss: './src/css/custom.css',
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
        id: 'general',
        path: 'docs/extensions/general',
        routeBasePath: 'general',
        sidebarPath: './sidebars-general.ts',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
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


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Shondalai Docs',
      logo: {
        alt: 'Shondalai',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'dropdown',
          label: 'Extensions',
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
      style: 'dark',
      links: [
        {
          title: 'EasyForms',
          items: [
            {
              label: 'Getting Started',
              to: '/easyforms/overview',
            },
            {
              label: 'Form Builder',
              to: '/easyforms/form-builder',
            },
            {
              label: 'AI Features',
              to: '/easyforms/ai-form-builder',
            },
          ],
        },
        {
          title: 'Features',
          items: [
            {
              label: 'Analytics',
              to: '/easyforms/form-analytics',
            },
            {
              label: 'Integrations',
              to: '/easyforms/integrations',
            },
            {
              label: 'Security',
              to: '/easyforms/security-and-permissions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Site',
              href: 'https://bulasikku.com',
            },
            {
              label: 'Support',
              to: '/easyforms/troubleshooting-guide',
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
