import type { ReactNode } from 'react';
import { StatusBar } from '../components/StatusBar/StatusBar';
import { AppHeader } from '../components/AppHeader/AppHeader';
import { TabBar, type TabKey } from '../components/TabBar/TabBar';
import './ScreenShell.css';

export interface ScreenShellProps {
  title: string;
  subtitle?: string;
  accent?: string;
  /** Header neutro branco, usado nos fluxos de checkout (Carrinho, Detalhe do produto, Revisar pedido). */
  neutral?: boolean;
  showBack?: boolean;
  onBack?: () => void;
  headerAction?: ReactNode;
  headerExtra?: ReactNode;
  activeTab?: TabKey;
  onSelectTab?: (key: TabKey) => void;
  children: ReactNode;
}

/** Casca padrão para telas de módulo: StatusBar + AppHeader + conteúdo + TabBar. */
export function ScreenShell({
  title,
  subtitle,
  accent = 'var(--color-green)',
  neutral = false,
  showBack = true,
  onBack,
  headerAction,
  headerExtra,
  activeTab,
  onSelectTab,
  children,
}: ScreenShellProps) {
  return (
    <div className="screen">
      <div className="screen__top" style={{ background: neutral ? 'var(--color-surface)' : accent }}>
        <StatusBar light={!neutral} />
        <AppHeader
          title={title}
          subtitle={subtitle}
          accent={accent}
          neutral={neutral}
          showBack={showBack}
          onBack={onBack}
          action={headerAction}
        />
        {headerExtra}
      </div>
      <div className={`screen__content ${activeTab ? '' : 'screen__content--no-tabbar'}`}>{children}</div>
      {activeTab && (
        <div className="screen__tabbar">
          <TabBar active={activeTab} onSelect={onSelectTab} />
        </div>
      )}
    </div>
  );
}
