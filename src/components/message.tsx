import React, { ComponentProps } from 'react';
import styles from './message.module.css';
import cx from 'classnames';

type MessageProps = {
  children: React.ReactNode;
  variant: 'incoming' | 'outgoing';
  metaComponent?: React.ReactNode;
} & ComponentProps<'span'>;

type MessageMetaProps = {
  author: string;
  time: string;
};

export function Message(props: MessageProps) {
  const { children, variant, className, metaComponent, ...rest } = props;

  return (
    <div
      className={cx(
        styles.container,
        {
          [styles.incoming]: variant === 'incoming',
          [styles.outgoing]: variant === 'outgoing'
        },
        className
      )}
    >
      <span className={styles.message} aria-label={`${variant} message`} {...rest}>
        {children}
      </span>
      {metaComponent ?? null}
    </div>
  );
}

export function MessageMeta(props: MessageMetaProps) {
  const { author, time } = props;

  return (
    <div className={styles.meta}>
      <time>{time}</time>
      <span>{author}</span>
    </div>
  );
}
