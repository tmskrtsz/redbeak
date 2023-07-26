'use client';

import React from 'react';
import Image from 'next/image';
import logoImage from '../../public/logo.png';
import styles from './logo.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AnimatedLink = motion(Link);

export function Logo() {
  return (
    <AnimatedLink
      className={styles.logo}
      whileTap={{ scale: 0.93 }}
      transition={{
        bounce: 0.21,
        stiffness: 1,
        duration: 0.05
      }}
      href="/"
    >
      <Image src={logoImage} alt="redbeak logo" width={48} />
      <span>redbeak</span>
    </AnimatedLink>
  );
}
