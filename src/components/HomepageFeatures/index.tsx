import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Product = {
  code: string;
  name: string;
  description: string;
  to: string;
};

type ProductGroup = {
  title: string;
  description: string;
  products: Product[];
};

const taskLinks = [
  {
    title: 'Keep extensions current',
    description: 'Set up Joomla’s automatic update workflow for installed extensions.',
    to: '/general/setup-automatic-updates-for-extensions',
  },
  {
    title: 'Resolve a common issue',
    description: 'Start with answers that apply across the Shondalai extension suite.',
    to: '/general/frequently-asked-questions',
  },
  {
    title: 'Build an integration',
    description: 'Open the Sociable SDK guide for profiles, activity, groups, and points.',
    to: '/sociable/sociable-sdk-developer-guide',
  },
];

const productGroups: ProductGroup[] = [
  {
    title: 'Build and collect',
    description: 'Forms, surveys, polls, quizzes, courses, and responses.',
    products: [
      {code: 'EF', name: 'EasyForms', description: 'Forms, surveys, quizzes, payments, and workflows.', to: '/easyforms/overview'},
      {code: 'CS', name: 'Community Surveys', description: 'Survey building, distribution, responses, reports, and integrations.', to: '/community-surveys/overview'},
      {code: 'CP', name: 'Community Polls', description: 'Poll creation, voting, email templates, and advanced concepts.', to: '/community-polls/overview'},
      {code: 'CQ', name: 'Community Quiz', description: 'Quizzes, courses, grading, certificates, and selling access.', to: '/community-quiz/overview'},
    ],
  },
  {
    title: 'Community',
    description: 'Profiles, conversations, answers, comments, and shared knowledge.',
    products: [
      {code: 'CA', name: 'Community Answers', description: 'Questions, answers, bounties, modules, and plugin events.', to: '/community-answers/overview'},
      {code: 'CF', name: 'CjForum', description: 'Forums, moderation, profiles, migrations, and SDK integration.', to: '/cjforum/overview'},
      {code: 'SO', name: 'Sociable', description: 'Profiles, groups, activity streams, points, badges, and APIs.', to: '/sociable/overview'},
      {code: 'CT', name: 'Community Quotes', description: 'Community quote publishing, moderation, add-ons, and migration.', to: '/community-quotes/overview'},
      {code: 'QT', name: 'QuillThreads', description: 'Joomla comments, moderation, notifications, anti-spam, and migration.', to: '/quillthreads/overview'},
    ],
  },
  {
    title: 'Commerce and engagement',
    description: 'Store operations, orders, loyalty rules, and member rewards.',
    products: [
      {code: 'EC', name: 'EasyCommerce', description: 'Store setup, products, orders, payments, shipping, and licensing.', to: '/easycommerce/overview'},
      {code: 'RW', name: 'Rewardify', description: 'Points, rules, rewards, redemptions, operations, and developer SDK.', to: '/rewardify/overview'},
    ],
  },
  {
    title: 'Tools and design',
    description: 'Maps, site templates, publishing, and suite-wide references.',
    products: [
      {code: 'GPS', name: 'GPS Tools', description: 'Tracks, maps, extensions, profile integration, and developer guides.', to: '/gps-tools/overview'},
      {code: 'TS', name: 'Template Studio', description: 'Templates, site building, Studio pages, configuration, and publishing.', to: '/templates/overview'},
      {code: 'GD', name: 'General guides', description: 'Updates, email templates, shared layouts, debugging, and common questions.', to: '/general/frequently-asked-questions'},
    ],
  },
];

function ProductLink({product}: {product: Product}) {
  return (
    <Link className={styles.productLink} to={product.to}>
      <span className={styles.productCode} aria-hidden="true">{product.code}</span>
      <span className={styles.productCopy}>
        <Heading as="h3" className={styles.productName}>{product.name}</Heading>
        <span className={styles.productDescription}>{product.description}</span>
      </span>
      <span className={styles.productArrow} aria-hidden="true">↗</span>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div className={styles.hub}>
      <section className={styles.tasks} aria-labelledby="task-heading">
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <Heading as="h2" id="task-heading">Start with the task</Heading>
            <p>Open a focused guide when you already know what needs attention.</p>
          </header>
          <div className={styles.taskList}>
            {taskLinks.map((task) => (
              <Link className={styles.taskLink} to={task.to} key={task.to}>
                <span>
                  <strong>{task.title}</strong>
                  <span>{task.description}</span>
                </span>
                <span className={styles.taskArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.directory} aria-labelledby="products">
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <Heading as="h2" id="products">Browse by product</Heading>
            <p>Every active documentation area, organised by the work it supports.</p>
          </header>
          <div className={styles.groupGrid}>
            {productGroups.map((group) => (
              <section className={styles.productGroup} key={group.title}>
                <header className={styles.groupHeader}>
                  <Heading as="h2">{group.title}</Heading>
                  <p>{group.description}</p>
                </header>
                <div className={styles.productList}>
                  {group.products.map((product) => (
                    <ProductLink product={product} key={product.to} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
