import React, { useState } from 'react';
import styles from './toggle-widget.module.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function ToggleWidget() {
  const [isOn, setIsOn] = useState(true);

  const handleSwitch = () => setIsOn(!isOn);

  return (
    <div className={styles.container}>
      <div className={styles.toggle}>
        <div>
          <span>Status</span>
          <AnimatePresence mode="wait">
            {isOn ? <Label key="on">On</Label> : <Label key="off">Off</Label>}
          </AnimatePresence>
        </div>
        <div className={styles.switchContainer}>
          <motion.div
            whileTap={{ scale: 0.95 }}
            data-state={isOn}
            className={styles.switch}
            onClick={handleSwitch}
          >
            <motion.div
              layout
              animate={isOn ? 'on' : 'off'}
              variants={{
                on: {
                  backgroundColor: '#942c64'
                },
                off: {
                  backgroundColor: 'white'
                }
              }}
              className={styles.handle}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Label(props) {
  return (
    <motion.h2
      initial={{
        opacity: 0,
        y: -10
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: -10
      }}
      transition={{
        duration: 0.15
      }}
    >
      {props.children}
    </motion.h2>
  );
}
