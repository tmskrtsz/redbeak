import React from 'react';
import styles from './avatar.module.css';
import Image, { ImageProps } from 'next/image';

type AvatarProps = ImageProps;

export function Avatar(props: AvatarProps) {
  const { src, alt, width, height } = props;
  return (
    <div className={styles.avatar}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
