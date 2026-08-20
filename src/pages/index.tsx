import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function focusDocumentationSearch() {
  const searchInput = document.querySelector<HTMLInputElement>('.navbar__search-input');
  searchInput?.focus();
  searchInput?.click();
}

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <Heading as="h1" className={styles.heroTitle}>
            Find the guide.
            <span>Keep building.</span>
          </Heading>
          <p className={styles.heroDescription}>
            Setup, configuration, day-to-day operations, and developer
            references for Shondalai’s Joomla extensions.
          </p>
          <p className={styles.heroMeta}>14 active documentation areas</p>
        </div>

        <div className={styles.heroUtility}>
          <Heading as="h2" className={styles.searchTitle}>
            Search across every guide
          </Heading>
          <div className={styles.heroSearch}>
            <button
              type="button"
              className={styles.heroSearchButton}
              onClick={focusDocumentationSearch}
              aria-label="Search all documentation">
              <span>Search documentation</span>
              <span className={styles.heroSearchShortcut} aria-hidden="true">
                <kbd>Ctrl/⌘ K</kbd>
              </span>
            </button>
          </div>
          <p className={styles.searchHint}>
            Opens the suite-wide local index from anywhere in the portal.
          </p>
          <nav className={styles.quickLinks} aria-label="Quick documentation links">
            <Link to="#products">All products</Link>
            <Link to="/general/frequently-asked-questions">Common questions</Link>
            <Link to="/sociable/sociable-sdk-developer-guide">Developer guides</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Joomla extension guides"
      description="Documentation for Shondalai Joomla extensions, including setup, configuration, operations, and developer guides.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
