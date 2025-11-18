import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Intuitive Builder',
    icon: 'lucide:layout-template',
    description: (
      <>
        Build professional forms with our visual drag-and-drop interface.
        No coding required—pure simplicity and power.
      </>
    ),
  },
  {
    title: 'AI-Powered',
    icon: 'lucide:sparkles',
    description: (
      <>
        Generate complete forms instantly using AI. Describe your needs
        and let intelligent automation handle the structure.
      </>
    ),
  },
  {
    title: 'Enterprise Ready',
    icon: 'lucide:building-2',
    description: (
      <>
        Analytics, integrations, conditional logic, payments—
        everything needed for professional deployment.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureIcon}>
          <Icon icon={icon} width="48" height="48" />
        </div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
