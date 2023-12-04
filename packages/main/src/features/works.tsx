import React from 'react';
import Image from 'next/image';
import oneList from '../assets/work/1list.png';
import auka from '../assets/work/auka.png';
import { FadeUp } from '../components/fadeup';
import styles from './works.module.css';
import { SentimentWidget } from '../components/widgets/sentiment-widget';
import { ProfileWidget } from '../components/widgets/profile-widget';
import ToggleWidget from '../components/widgets/toggle-widget';

export function Works() {
  return (
    <FadeUp>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.item}>
            <Image
              src={oneList}
              alt="1List.co"
              fill={true}
              placeholder="blur"
              style={{
                borderColor: 'aliceblue'
              }}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.auka}>
            <div className={styles.item}>
              <Image
                src={auka}
                alt="auka.co"
                fill={true}
                placeholder="blur"
                style={{
                  borderColor: '#f4eaf1'
                }}
              />
            </div>
          </div>
          <div className={styles.widgetContainer}>
            <div className={styles.defaultItem}>
              <SentimentWidget />
            </div>
            <ToggleWidget />
          </div>
          <div className={styles.defaultItem}>
            <ProfileWidget />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
