import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant =
  | 'primary'
  | 'primary-orange'
  | 'destructive'
  | 'whatsapp'
  | 'secondary'
  | 'text';
export type ButtonSize = 'g' | 'm' | 'p';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'm',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false,
  loadingLabel = 'Enviando...',
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {loading ? (
        <>
          <span>{loadingLabel}</span>
          <span className="btn__spinner" aria-hidden="true" />
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' ? icon : null}
          <span>{children}</span>
          {icon && iconPosition === 'right' ? icon : null}
        </>
      )}
    </button>
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  tone?: 'soft' | 'filled' | 'ghost';
  'aria-label': string;
}

export function IconButton({ icon, tone = 'soft', className, ...rest }: IconButtonProps) {
  const toneClass = tone === 'filled' ? 'btn--icon-filled' : tone === 'ghost' ? 'btn--icon-ghost' : '';
  return (
    <button className={['btn', 'btn--icon', toneClass, className ?? ''].filter(Boolean).join(' ')} {...rest}>
      {icon}
    </button>
  );
}
