import type { ReactNode } from 'react';
import { Mascot } from '../Mascot/Mascot';
import './EmptyState.css';

export interface EmptyStateProps {
  title: string;
  description: string;
  cta?: ReactNode;
}

/** Mascote + título + explicação + CTA. Estado vazio sem ação sugerida não é aceito no produto. */
export function EmptyState({ title, description, cta }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <Mascot size={100} />
      <div className="empty-state__title">{title}</div>
      <div className="empty-state__description">{description}</div>
      {cta && <div className="empty-state__cta">{cta}</div>}
    </div>
  );
}
