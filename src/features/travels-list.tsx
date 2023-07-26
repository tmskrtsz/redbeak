import React from 'react';
import { getPastLocations } from '../lib/notion';
import styles from './travels-list.module.css';
import { formatDate } from '../lib/utils';
import { Spacer } from '../components/spacer';

export async function TravelsList() {
  const allLocations = await getPastLocations();

  return (
    <Spacer mt="xl">
      <div className={styles.container}>
        {allLocations.map((location) => (
          <div key={location.created} className={styles.row}>
            <div className={styles.location}>
              <span className={styles.city}>
                <strong>{location.city}</strong>,
              </span>
              <span>{location.country}</span>
            </div>
            <span className={styles.date}>{formatDate(location.created)}</span>
          </div>
        ))}
      </div>
    </Spacer>
  );
}
