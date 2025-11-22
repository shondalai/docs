import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main sidebar - this is the default
  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Building Forms',
      collapsed: false,
      items: [
        'form-builder',
        'ai-form-builder',
        'advanced-fields',
        'multipage-forms',
        'conditional-logic',
        'validation-and-antispam',
        'themes-support',
        'publishing-forms',
        'frontend-management',
      ],
    },
    {
      type: 'category',
      label: 'Managing Data',
      collapsed: false,
      items: [
        'form-submissions',
        'emails',
        'form-analytics',
        'google-analytics',
      ],
    },
    {
      type: 'category',
      label: 'Integration & Advanced',
      collapsed: false,
      items: [
        'integrations',
        'payments-support',
        'multilingual-support',
        'private-forms-access-tokens',
        'security-and-permissions',
        'troubleshooting-guide',
        'power-users-and-developers',
      ],
    },
  ],
};

export default sidebars;
