import React from 'react';
import styles from './layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  return <div className={styles.layout}>{props.children}</div>;
}
