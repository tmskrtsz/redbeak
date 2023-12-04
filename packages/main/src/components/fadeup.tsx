import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

type FadeUpProps = {
  children: React.ReactNode;
  offset?: 'start' | 'center' | 'end' | number
};

export function FadeUp(props: FadeUpProps) {
  const { children, offset = 'center'} = props;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', `${offset} end`]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity
      }}
    >
      {children}
    </motion.div>
  );
}
