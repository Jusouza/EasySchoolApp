import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Chip.css';

export type ChipVariant = 'default' | 'selected' | 'category' | 'icon';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ChipVariant;
  icon?: ReactNode;
  children: ReactNode;
}

export function Chip({ variant = 'default', icon, children, className, ...rest }: ChipProps) {
  const classes = ['chip', variant !== 'default' ? `chip--${variant}` : '', className ?? '']
    .filter(Boolean)
    .join(' ');
  return (
    <button className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
}
