import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-setup',
        'getting-started/sample-data',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      collapsed: false,
      items: [
        'templates/gallery',
      ],
    },
    {
      type: 'category',
      label: 'Template Studio',
      collapsed: false,
      items: [
        'configuration/studio-overview',
        'configuration/style',
        'configuration/layout',
        'configuration/navigation',
        'configuration/pages-storefront',
        'configuration/footer',
        'configuration/advanced-modules',
      ],
    },
    {
      type: 'category',
      label: 'Studio Pages',
      collapsed: false,
      items: [
        'pages/overview',
        'pages/building-a-page',
        'pages/sections-reference',
        'pages/publishing-and-menus',
      ],
    },
    {
      type: 'category',
      label: 'Licensing & Updates',
      collapsed: false,
      items: [
        'licensing/activation',
        'licensing/updates',
      ],
    },
    'faq',
  ],
};

export default sidebars;
