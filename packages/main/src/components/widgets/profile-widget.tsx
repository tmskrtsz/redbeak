import React, { SVGProps, useState } from 'react';
import styles from './profile-widget.module.css';
import avatar from '../../assets/work/mock_avatar.png';
import Image from 'next/image';
import cx from 'classnames';
import { motion, useAnimate } from 'framer-motion';

export function ProfileWidget() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [scope, animate] = useAnimate();

  async function handleClick() {
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      await animate(scope.current, { opacity: [0, 1, 0], y: [0, -32] }, { duration: 1.5 });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Image src={avatar.src} alt="Profile picture" width={88} height={88} />
          <div className={styles.status}>
            <span>🎉</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.user}>
          <h3>Cassandra Love</h3>
          <span>@cassandra_love</span>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <h4>15.7k</h4>
            <span>posts</span>
          </div>
          <div className={styles.stat}>
            <h4>1347</h4>
            <span>following</span>
          </div>
          <div className={styles.stat}>
            <h4 style={{ position: 'relative' }}>
              1.2k
              <span className={styles.statPlus} ref={scope}>
                +1
              </span>
            </h4>
            <span>followers</span>
          </div>
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>#design</span>
          <span className={styles.tag}>#photography</span>
          <span className={styles.tag}>#surfing</span>
          <span className={styles.tag}>#puppies</span>
          <span className={styles.tag}>#music</span>
          <span className={styles.tag}>#friends</span>
        </div>
        <div className={styles.follow}>
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scaleX: 1.1, scaleY: 1.05 }}
            onTap={handleClick}
            // @ts-ignore
            className={cx(!isFollowing ? styles.buttonPrimary : styles.buttonSecondary)}
          >
            {!isFollowing ? (
              <>
                <UserAdd />
                <span>Follow</span>
              </>
            ) : (
              <>
                <UserRemove />
                <span>Unfollow</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function UserAdd(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M8 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
          clipRule="evenodd"
        ></path>
        <path d="M11 14a1 1 0 0 1 1 1v6h2v-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6h2v-6a1 1 0 0 1 1-1h6Zm7-7h2v2h2v2h-2v2h-2v-2h-2V9h2V7Z"></path>
      </g>
    </svg>
  );
}

function UserRemove(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M8 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
          clipRule="evenodd"
        ></path>
        <path d="M11 14a1 1 0 0 1 1 1v6h2v-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6h2v-6a1 1 0 0 1 1-1h6Zm11-5h-6v2h6V9Z"></path>
      </g>
    </svg>
  );
}
