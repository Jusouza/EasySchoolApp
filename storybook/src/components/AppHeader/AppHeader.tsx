import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import './AppHeader.css';

export interface AppHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  /** Header neutro (branco, texto escuro) usado nos fluxos de checkout: Carrinho, Detalhe do produto, Revisar pedido. */
  neutral?: boolean;
  showBack?: boolean;
  action?: ReactNode;
  onBack?: () => void;
}

export function AppHeader({
  title,
  subtitle,
  accent = 'var(--color-green)',
  neutral = false,
  showBack = true,
  action,
  onBack,
}: AppHeaderProps) {
  return (
    <header
      className={`app-header ${neutral ? 'app-header--neutral' : ''}`}
      style={{ background: neutral ? 'var(--color-surface)' : accent }}
    >
      {showBack && (
        <button className="app-header__back" onClick={onBack} aria-label="Voltar">
          <ArrowLeft size={24} />
        </button>
      )}
      <div className="app-header__titles">
        <div className="app-header__title">{title}</div>
        {subtitle && <div className="app-header__subtitle">{subtitle}</div>}
      </div>
      {action}
    </header>
  );
}
