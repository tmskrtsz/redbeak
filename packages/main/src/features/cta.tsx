import * as React from 'react';
import styles from './cta.module.css'
import { FadeUp } from '../components/fadeup';
import { Button } from '../components/button';

export function CTA() {
  return (
    <FadeUp offset={'end'}>
      <div className={styles.container}>
        dsa
        <Button>Email Me</Button>
      </div>
    </FadeUp>
  );
}
