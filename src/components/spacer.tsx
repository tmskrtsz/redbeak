import React, { ComponentProps, MutableRefObject, forwardRef } from 'react';
import cx from 'classnames';
import styles from './spacer.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 0;

type SpacerProps = {
  children: React.ReactNode;
  className?: string;
} & (
  | {
      my: Size;
      mb?: never;
      mt?: never;
    }
  | {
      my?: never;
      mb?: Size;
      mt?: Size;
    }
) & ComponentProps<'div'>;

export const Spacer = forwardRef(function Spacer(props: SpacerProps, ref: MutableRefObject<HTMLDivElement>) {
  const { children, my, mt, mb, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cx(
        {
          [styles[`mt-${my}`]]: my,
          [styles[`mb-${my}`]]: my
        },
        {
          [styles[`mt-${mt}`]]: mt,
          [styles[`mb-${mb}`]]: mb,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
})
