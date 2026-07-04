import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    'quick-start',

    {
      type: 'category',
      label: 'Setup',
      items: [
        'placing-comments-on-articles',
        'settings-reference',
        'permissions',
        'appearance-and-theming',
      ],
    },

    {
      type: 'category',
      label: 'Running your community',
      items: [
        'moderation',
        'anti-spam',
        'ai-moderation',
        'email-and-notifications',
        'privacy-and-gdpr',
        'scheduled-tasks',
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
        'migrating-comments',
      ],
    },

    {
      type: 'category',
      label: 'Developer',
      items: [
        'embedding-comments',
        'custom-import-adapters',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'troubleshooting',
        'quillthreads-changelog',
      ],
    },
  ],
};

export default sidebars;
