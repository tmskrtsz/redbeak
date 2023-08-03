'use client';

import React, { useRef, useState } from 'react';
import { data } from './data';
import { Intro } from '../features/intro';
import { Typer } from '../features/typer';
import { Layout } from '../components/layout';
import { Spacer } from '../components/spacer';
import { IncomingMessages } from '../features/incoming-messages';
import { OutgoingMessage } from '../features/outgoing-message';
import { OptionsGroup } from '../features/options-group';
import { SplitLayout } from '../features/split-layout';
import { Works } from '../features/works';
import { useScrollIntoView } from '../hooks/useScrollIntoView';
import { Button } from '../components/button';

export default function Home() {
  const [renderedIds, setRenderedIds] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isExhausted, setIsExhausted] = useState(false);

  const buttonRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef(null);
  const scroll = useScrollIntoView(workRef);
  const isQueryDone = renderedIds.length === data.length;

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
      showHidden={isExhausted}
      onAnimationComplete={() => scroll('start')}
      shownComponent={
        <Layout>
          <Spacer mt="xl">
            <Intro
              bellowComponent={
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setIsExhausted(true)}
                  style={{
                    opacity: !isTyping && !isExhausted ? 1 : 0,
                    transition: 'all 0.2s ease'
                  }}
                >
                  Show Portfolio
                </Button>
              }
            />
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
              shouldRender={!isTyping}
              data={data}
              active={renderedIds}
              onClick={triggerAnswer}
              shouldScroll={!isExhausted}
            />
            {!isTyping && isQueryDone && (
              <Spacer mb="2xl">
                <Button variant="secondary" onClick={() => setIsExhausted(true)}>
                  Show Portfolio
                </Button>
              </Spacer>
            )}
          </div>
        </Layout>
      }
      hiddenComponent={
        <Spacer mt="3xl" style={{ backgroundColor: 'white', padding: '8em 0' }} ref={workRef}>
          <Layout>
            <div style={{ textAlign: 'center' }}>
              <h2>Recent work</h2>
            </div>
          </Layout>
          <Spacer my="2xl">
            <Works />
          </Spacer>
        </Spacer>
      }
    />
  );
}
