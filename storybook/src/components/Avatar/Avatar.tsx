import type { ReactNode } from 'react';
import './Avatar.css';

export type AvatarSize = 60 | 44 | 38;

export interface AvatarProps {
  size?: AvatarSize;
  src?: string;
  alt?: string;
  icon?: ReactNode;
}

export function Avatar({ size = 44, src, alt = '', icon }: AvatarProps) {
  return (
    <span className={`avatar avatar--${size}`}>
      {src ? <img src={src} alt={alt} /> : icon}
    </span>
  );
}
