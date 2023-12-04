import React, { ComponentProps } from 'react';
import styles from './intro.module.css';
import { Spacer } from '../components/spacer';

type IntroProps = {
  bellowComponent: React.ReactNode;
};

export function Intro(props: IntroProps) {
  return (
    <div className={styles.intro}>
      <h1>
        I&apos;m Tamás, web developer, <strong>ask me anything ✨</strong>
      </h1>
      <Spacer mt="xs">{props.bellowComponent}</Spacer>
    </div>
  );
}
