'use client';

import React, { useRef, useState } from 'react';
import { data } from './data';
import { Intro } from '../features/intro';
import { Typer } from '../features/typer';
import { Layout } from '../components/layout';
import { Spacer } from '../components/spacer';
import { IncomingMessages } from '../features/incoming-messages';
import { OutgoingMessage } from '../features/outgoing-message';
import OptionsGroup from '../features/options-group';
import { SplitLayout } from '../features/split-layout';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [renderedIds, setRenderedIds] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const isDone = renderedIds.length === data.length;

  function triggerAnswer(id: number) {
    setIsTyping(true);

    setRenderedIds((rendered) => {
      if (!rendered.includes(id)) {
        return [...rendered, id];
      }
    });
  }

  return (
    <SplitLayout
      showHidden={false}
      shownComponent={
        <Layout>
          <Spacer mt="xl">
            <Intro />
          </Spacer>
          {renderedIds.map((id) => {
            const current = data[id];
            return (
              <Spacer mt="xl" key={current.id}>
                <ul>
                  <Spacer my="sm">
                    <OutgoingMessage label={current.label} />
                  </Spacer>
                  <Spacer my="sm">
                    <IncomingMessages
                      messages={current.texts}
                      onRest={() => setIsTyping(false)}
                      scrollToRef={buttonRef}
                    />
                  </Spacer>
                </ul>
              </Spacer>
            );
          })}
          <Typer shouldRender={renderedIds.length !== 0} isOngoing={isTyping} />
          <div ref={buttonRef}>
            <OptionsGroup
              shouldRender={!isTyping && !isDone}
              data={data}
              active={renderedIds}
              onClick={triggerAnswer}
              shouldScroll={!isDone}
            />
          </div>
          <AnimatePresence>
            {isDone && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Spacer
                  my="xl"
                  style={{
                    backgroundColor: 'var(--gray-50)',
                    padding: '2em',
                    borderRadius: '14px',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ fontSize: '0.9rem' }}>
                    Hey, thanks for making it this far! Drop me an email at{' '}
                    <a href="mailto:tamask@hey.com">tamask@hey.com</a>
                  </span>
                </Spacer>
              </motion.div>
            )}
          </AnimatePresence>
        </Layout>
      }
      hiddenComponent={
        <Spacer mt="3xl" style={{ backgroundColor: 'white', padding: '8em 0' }}>
          <Layout>
            <div style={{ textAlign: 'center' }}>
              <h2>Some of my work</h2>
            </div>
          </Layout>
        </Spacer>
      }
    />
  );
}
