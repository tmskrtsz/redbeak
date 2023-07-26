import React, { Suspense } from 'react';
import { Logo } from './logo';
import styles from './nav.module.css';
import { Location } from './location';
import { Layout } from '../components/layout';

export function Nav() {
  return (
    <Layout>
      <header className={styles.header}>
        <Logo />
        <div className={styles.location}>
          <Suspense fallback={<span>Loading</span>}>
            <Location />
          </Suspense>
        </div>
      </header>
    </Layout>
  );
}
