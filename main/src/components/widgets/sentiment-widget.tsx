import React, { SVGProps } from 'react';
import styles from './sentiment-widget.module.css';
import { Spacer } from '../spacer';

export function SentimentWidget() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Sentiment</span>
        <h3>Overwhelmingly Positive</h3>
      </div>
      <Spacer mt="xs">
        <div className={styles.bar}>
          <div style={{ width: '11%' }}></div>
          <div style={{ width: '7%' }}></div>
          <div style={{ width: '82%' }}></div>
        </div>
      </Spacer>
      <Spacer mt="md" className={styles.lower}>
        <div className={styles.sentimentRow}>
          <div className={styles.sentiment}>
            <SadSmiley />
            <span>38</span>
          </div>
          <div className={styles.sentiment}>
            <NeutralSmiley />
            <span>18</span>
          </div>
          <div className={styles.sentiment}>
            <HappySmiley />
            <span>139</span>
          </div>
        </div>
        <button>
          Details <ArrowRight />
        </button>
      </Spacer>
    </div>
  );
}

function HappySmiley(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M12 17a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Zm-2-7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></path>
        <path
          fillRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

function NeutralSmiley(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M9 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm7-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></path>
        <path
          fillRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

function SadSmiley(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M9 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm5 6a2 2 0 1 0-4 0H8a4 4 0 0 1 8 0h-2Zm2-7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></path>
        <path
          fillRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m15.038 6.343l-1.411 1.418l3.27 3.255l-13.605.013l.002 2l13.568-.013l-3.215 3.23l1.417 1.41l5.644-5.67l-5.67-5.643Z"
      ></path>
    </svg>
  );
}
