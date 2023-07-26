import React, { useRef } from 'react';
import { Message, MessageMeta } from '../components/message';
import { motion } from 'framer-motion';
import { useScrollIntoView } from '../hooks/useScrollIntoView';

type OutgoingMessageProps = {
  label: string;
};

export function OutgoingMessage(props: OutgoingMessageProps) {
  const now = new Date();
  const time = new Intl.DateTimeFormat('en-GB', { timeStyle: 'short' }).format(now);
  const ref = useRef<HTMLDivElement>(null);
  const scroll = useScrollIntoView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{
        x: 10
      }}
      animate={{
        x: 0
      }}
      onAnimationComplete={scroll}
    >
      <Message variant="outgoing" metaComponent={<MessageMeta time={time} author="You" />}>
        {props.label}
      </Message>
    </motion.div>
  );
}
