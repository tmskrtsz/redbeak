import React, { useRef } from 'react';
import { data } from '../app/data';
import { Group } from '../components/group';
import { Button } from '../components/button';
import { Spacer } from '../components/spacer';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useScrollIntoView } from '../hooks/useScrollIntoView';

type OptionsGroup = {
  shouldRender: boolean;
  data: typeof data;
  active: number[];
  onClick: (id: number) => void;
  shouldScroll: boolean;
};

export default function OptionsGroup(props: OptionsGroup) {
  const { shouldRender, data, active, onClick, shouldScroll } = props;
  const groupRef = useRef<HTMLDialogElement>(null);
  const scroll = useScrollIntoView(groupRef);

  const AnimatedButton = motion(Button);
  const AnimatedGroup = motion(Group);

  const group: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        delayChildren: 0.4,
        staggerChildren: 0.1,
        staggerDirection: 2
      }
    }
  };

  const buttons: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.1
      }
    }
  };

  return (
    <AnimatePresence>
      {shouldRender && (
        <Spacer my="xl">
          <AnimatedGroup variants={group} initial="hidden" animate="show" ref={groupRef}>
            {data.map(
              (button) =>
                !active.includes(button.id) && (
                  <AnimatedButton
                    key={button.id}
                    variants={buttons}
                    onClick={() => onClick(button.id)}
                    onAnimationComplete={shouldScroll && scroll}
                  >
                    {button.label}
                  </AnimatedButton>
                )
            )}
          </AnimatedGroup>
        </Spacer>
      )}
    </AnimatePresence>
  );
}
