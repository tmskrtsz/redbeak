import React, { MutableRefObject, useRef } from 'react';
import { Message } from '../components/message';
import { Spacer } from '../components/spacer';
import { Variants, motion } from 'framer-motion';
import { useScrollIntoView } from '../hooks/useScrollIntoView';
import styles from '../components/message.module.css';

type IncomingMessagesProps = {
  messages: string[];
  onRest?: () => void;
  scrollToRef?: MutableRefObject<HTMLDivElement>;
};

export function IncomingMessages(props: IncomingMessagesProps) {
  const { messages, onRest } = props;
  const domRef = useRef(null);
  const scroll = useScrollIntoView(domRef);

  const container: Variants = {
    hidden: { opacity: 0 },
    shown: (i: string[]) => ({
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 1
      }
    })
  };

  const item: Variants = {
    hidden: { opacity: 0, height: 0, x: -10 },
    shown: ([messages, i]) => {
      // TODO: Figure this out
      const delay = getStaggerValues(messages)[i];
      return { opacity: 1, height: 'auto', x: 0 };
    }
  };

  return (
    <motion.div
      custom={messages}
      initial="hidden"
      animate="shown"
      variants={container}
      onAnimationComplete={onRest}
      layout
    >
      {messages.map((message, i, array) => (
        <motion.li
          custom={[array, i]}
          className={styles.list}
          variants={item}
          key={message}
          ref={domRef}
          onAnimationComplete={() => scroll()}
        >
          <Spacer my="xs">
            <Message variant="incoming">
              <span
                dangerouslySetInnerHTML={{
                  __html: message
                }}
              />
            </Message>
          </Spacer>
        </motion.li>
      ))}
    </motion.div>
  );
}

function getStaggerValues(arr: string[]) {
  return arr
    .map((entry) => entry.length)
    .map((value, _, array) => {
      const min = Math.min(...array);
      const max = Math.max(...array);
      return (value - min) / (max - min);
    });
}
