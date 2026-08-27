import type { ReactNode } from 'react';
import { Badge } from '../Badge/Badge';
import './ModuleCard.css';

export interface ModuleCardProps {
  icon: ReactNode;
  accent: string;
  soft: string;
  title: string;
  description: string;
  unread?: number;
  onClick?: () => void;
}

/** Entrada de módulo na Home. Ícone 26pt no círculo soft + título + descrição de uma linha + badge opcional. */
export function ModuleCard({ icon, accent, soft, title, description, unread, onClick }: ModuleCardProps) {
  return (
    <button className="module-card" onClick={onClick}>
      {unread !== undefined && (
        <span className="module-card__badge">
          <Badge count={unread} />
        </span>
      )}
      <span className="module-card__icon" style={{ background: soft, color: accent }}>
        {icon}
      </span>
      <span className="module-card__title">{title}</span>
      <span className="module-card__description">{description}</span>
    </button>
  );
}
