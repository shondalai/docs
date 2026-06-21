import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started-with-community-quiz',
        'installing-and-configuring-community-quiz',
      ],
    },

    {
      type: 'category',
      label: 'Building Quizzes & Courses',
      items: [
        'quiz-builder',
        'question-types-supported-by-community-quiz',
        'scoring-guide',
        'grading',
        'course-builder',
        'courses',
        'display-quiz-in-joomla-article',
      ],
    },

    {
      type: 'category',
      label: 'Certificates & Selling',
      items: [
        'certificates',
        'selling-quizzes-and-courses',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      items: [
        'customizing-emails-sent-from-community-quiz',
        'community-quiz-modules',
      ],
    },

    {
      type: 'category',
      label: 'Advanced',
      items: [
        'extending-community-quiz-using-plugin-events',
      ],
    },

    {
      type: 'category',
      label: 'Developer Reference',
      items: [
        'question-types',
        'scoring',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'community-quiz-changelog',
      ],
    },
  ],
};

export default sidebars;
