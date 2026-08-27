import type { CSSProperties } from 'react';
import { Home, Grid2x2, MessageSquare, Calendar, Wallet } from 'lucide-react';
import './TabBar.css';

export type TabKey = 'inicio' | 'clips' | 'agenda' | 'calendario' | 'clippag';

const tabs: { key: TabKey; label: string; icon: typeof Home; color: string; soft: string }[] = [
  { key: 'inicio', label: 'Início', icon: Home, color: 'var(--color-green)', soft: 'var(--color-soft-entrada-saida)' },
  { key: 'clips', label: 'Clips', icon: Grid2x2, color: 'var(--color-accent-clips)', soft: 'var(--color-soft-clips)' },
  { key: 'agenda', label: 'Agenda', icon: MessageSquare, color: 'var(--color-accent-agenda)', soft: 'var(--color-soft-agenda)' },
  { key: 'calendario', label: 'Calendário', icon: Calendar, color: 'var(--color-accent-calendario)', soft: 'var(--color-soft-calendario)' },
  { key: 'clippag', label: 'ClipPag', icon: Wallet, color: 'var(--color-accent-clippag)', soft: 'var(--color-soft-clippag)' },
];

export interface TabBarProps {
  active?: TabKey;
  onSelect?: (key: TabKey) => void;
}

export function TabBar({ active = 'inicio', onSelect }: TabBarProps) {
  return (
    <nav className="tab-bar">
      {tabs.map(({ key, label, icon: Icon, color, soft }) => (
        <button
          key={key}
          className={`tab-bar__item ${key === active ? 'tab-bar__item--active' : ''}`}
          style={key === active ? ({ '--tab-active-color': color, '--tab-active-soft': soft } as CSSProperties) : undefined}
          onClick={() => onSelect?.(key)}
        >
          <span className="tab-bar__item__icon">
            <Icon size={22} />
          </span>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
