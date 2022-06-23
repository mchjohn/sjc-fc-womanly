import Image from 'next/image';

import styles from './Avatar.module.css';

type AvatarProps = {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return <Image
    alt={alt}
    src={src}
    width='60'
    height='60'
    layout='fixed'
    style={{
      borderRadius: '50%',
    }}
  />
}