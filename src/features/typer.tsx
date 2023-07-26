import React from 'react';
import { Message } from '../components/message';
import styles from './typer.module.css';
import { Spacer } from '../components/spacer';
import { Avatar } from '../components/avatar';
import avatar from '../assets/avatar.png';
import { AnimatePresence, Variants, motion } from 'framer-motion';

type TyperProps = {
  shouldRender: boolean;
  isOngoing: boolean;
};

export function Typer(props: TyperProps) {
  const { isOngoing, shouldRender } = props;

  const variants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
        >
          <Spacer className={styles.container}>
            <Avatar src={avatar.src} alt="dsa" width={42} height={42} />
              {isOngoing ? (
                  <Message className={styles.typer} variant="incoming" aria-label="Typing answer">
                    <i />
                    <i />
                    <i />
                  </Message>
              ) : (
                  <span className={styles.status}>Just now</span>
              )}
          </Spacer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
