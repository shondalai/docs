import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    {type: 'category', label: 'Getting started', collapsed: false, items: [
      'getting-started/joomla', 'getting-started/wordpress',
      'getting-started/workspace',
      'getting-started/first-course', 'getting-started/launch-checklist',
    ]},
    {type: 'category', label: 'Configure your academy', items: [
      'configuration/settings', 'configuration/learner-experience',
      'configuration/users-permissions', 'configuration/files-storage', 'configuration/languages',
    ]},
    {type: 'category', label: 'Build and teach courses', items: [
      'courses/course-builder', 'courses/lessons', 'courses/access-progression',
      'courses/quizzes', 'courses/question-banks', 'courses/question-types',
      'courses/assignments', 'courses/grading', 'courses/course-runs',
    ]},
    {type: 'category', label: 'Learners and organizations', items: [
      'people/enrolments', 'people/organizations', 'people/organization-learning',
      'people/seats-invitations', 'people/identity',
    ]},
    {type: 'category', label: 'Sell course access', items: [
      'commerce/overview', 'commerce/easycommerce', 'commerce/woocommerce',
      'commerce/subscriptions-refunds',
    ]},
    {type: 'category', label: 'Messages and automations', items: [
      'communication/notifications', 'communication/email-templates', 'communication/automations',
    ]},
    {type: 'category', label: 'Certificates and reports', items: [
      'credentials/certificates', 'credentials/credits-badges',
      'reports/reports', 'reports/learning-time',
    ]},
    {type: 'category', label: 'AI and connected tools', items: [
      'ai/ai-assistants', 'integrations/advanced-learning', 'integrations/community-mobile',
    ]},
    {type: 'category', label: 'Maintain your site', items: [
      'maintenance/import-export', 'maintenance/scheduled-tasks',
      'maintenance/privacy', 'maintenance/updates-backups',
    ]},
    'learner-guide',
    {type: 'category', label: 'Help and reference', items: [
      'help/troubleshooting', 'help/feature-reference', 'help/glossary',
      'vidyalms-changelog',
    ]},
  ],
};

export default sidebars;
