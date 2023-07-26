import Link from "next/link";
import { getLastLocation } from "../lib/notion";
import styles from './location.module.css';
import buttonStyles from '../components/button.module.css';
import cx from 'classnames';

export async function Location() {
  const currentLocation = await getLastLocation();
  return (
    <div className={styles.location}>
      <span>currently in</span>
      <Link href="/check-in" className={cx(
        buttonStyles.button,
        buttonStyles.secondary,
        buttonStyles['size-sm'],
      )}>
        {currentLocation.city}, {currentLocation.country}
        <i className={styles.status} />
      </Link>
    </div>
  )
}
