import React from 'react';
import styles from './travels-list.module.css';
import { formatDate } from '../lib/utils';
import { Spacer } from '../components/spacer';

type TravelsListProps = {
  locations: any[];
};

export function TravelsList({ locations }: TravelsListProps) {
  return (
    <Spacer mt="xl">
      <div className={styles.container}>
        {locations.map((location) => (
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
