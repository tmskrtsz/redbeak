'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, LayoutGroup, stagger } from 'framer-motion';
import data from './data';

export default function Home() {
  const [isTyping, setIsTyping] = useState(false);
  const [rendered, setRendered] = useState([]);

  function triggerAnswer(id: number) {
    setRendered([
      ...rendered,
      id
    ]);
  }

  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 }
  };

  return (
    <div className="App">
      <h1 className="text-intro">
        My name is Tamás, <span>ask me anything.</span>
      </h1>

      <motion.ul layout initial="hidden" animate="visible" variants={list}>
        {data
          .filter((entry) => rendered.includes(entry.id))
          .map((entry, idx) =>
            entry.texts.map((text) => (
              <motion.li key={text} variants={item} custom={idx}>
                {text}
              </motion.li>
            ))
          )}
      </motion.ul>

      <AnimatePresence>
        {isTyping ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="typing"
            aria-label="Typing answer"
            // onAnimationComplete={() => setIsTyping(false)}
          >
            <LayoutGroup>
              <span />
              <span />
              <span />
            </LayoutGroup>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <section>
        <AnimatePresence>
          {!isTyping && (
            <motion.div className="buttons" layout key={rendered.length}>
              {data
                .filter((entry) => !rendered.includes(entry.id))
                .map((el) => (
                  <motion.button key={el.id} onClick={() => triggerAnswer(el.id)}>
                    {el.label}
                  </motion.button>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
