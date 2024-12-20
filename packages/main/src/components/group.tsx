import React, { RefObject, forwardRef } from 'react';
import styles from './group.module.css';

type GroupProps = {
  children: React.ReactNode;
};

export const Group = forwardRef(function Group(
  props: GroupProps,
  ref: RefObject<HTMLDivElement>
) {
  const { children, ...rest } = props;
  return (
    <div ref={ref} className={styles.group} {...rest}>
      {children}
    </div>
  );
});
