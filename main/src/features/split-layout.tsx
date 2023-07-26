import { AnimatePresence, motion } from 'framer-motion';

type SplitLayoutProps = {
  showHidden: boolean;
  shownComponent: React.ReactNode;
  hiddenComponent: React.ReactNode;
};

export function SplitLayout(props: SplitLayoutProps) {
  return (
    <>
      {props.shownComponent}
      <AnimatePresence>
        {props.showHidden && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              bounce: 0,
              ease: 'anticipate'
            }}
          >
            {props.hiddenComponent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
