import React, { ComponentProps } from 'react';
import styles from './intro.module.css';
import { Button } from '../components/button';
import { Spacer } from '../components/spacer';

export function Intro(props: ComponentProps<'button'>) {
  const { onClick } = props;
  return (
    <div className={styles.intro}>
      <h1>
        I&apos;m Tamás, web developer, <strong>ask me anything ✨</strong>
      </h1>
      {/* TODO: Finish this */}
      <Spacer mt="xs" style={{ display: 'none' }}>
        <Button size="sm" variant="link" onClick={onClick}>
          Or skip this non-sense
        </Button>
      </Spacer>
    </div>
  );
}
