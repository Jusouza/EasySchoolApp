import type { ReactNode } from 'react';
import './Toast.css';

export interface ToastProps {
  icon?: ReactNode;
  children: ReactNode;
}

/** Confirmação passageira, 2s, acima da tab bar. Nunca carrega ação exclusiva. */
export function Toast({ icon, children }: ToastProps) {
  return (
    <div className="toast" role="status">
      {icon}
      {children}
    </div>
  );
}
