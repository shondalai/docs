import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    'quick-start',

    {
      type: 'category',
      label: 'Setup',
      items: [
        'quotes-authors-and-categories',
        'menus-and-sef-urls',
        'settings-reference',
        'permissions',
        'appearance-and-theming',
      ],
    },

    {
      type: 'category',
      label: 'Running your community',
      items: [
        'submissions-and-moderation',
        'collections-reactions-and-discussion',
        'email-digest-and-scheduled-tasks',
        'privacy-and-gdpr',
      ],
    },

    {
      type: 'category',
      label: 'Add-ons',
      items: [
        'modules-and-plugins',
      ],
    },

    {
      type: 'category',
      label: 'Migration',
      items: [
        'migrating-from-version-1',
      ],
    },

    {
      type: 'category',
      label: 'Developer',
      items: [
        'developer-guide',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'troubleshooting',
        'community-quotes-changelog',
      ],
    },
  ],
};

export default sidebars;
