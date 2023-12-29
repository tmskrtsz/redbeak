import * as React from 'react';
import styles from './cta.module.css'
import { FadeUp } from '../components/fadeup';
import Image from 'next/image';
import logoImage from '../../public/logo.png';

export function CTA() {
  return (
    <FadeUp offset={'end'}>
      <div className={styles.container}>
      <Image src={logoImage} alt="redbeak logo" width={48} />
        <a className={styles.mailto} href="mailto:tamask@hey.com?subject=Let's connect!">Email Me</a>
      </div>
    </FadeUp>
  );
}
