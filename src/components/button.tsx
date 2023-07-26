import React, { ComponentProps, ForwardedRef, forwardRef } from 'react';
import styles from './button.module.css';
import cx from 'classnames';

type ButtonProps = {
  variant?: 'default' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg';
} & ComponentProps<'button'>;

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { children, variant = 'default', size = 'md', ...rest } = props;
  return (
    <button
      className={cx(styles.button, styles[variant], styles[`size-${size}`])}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
