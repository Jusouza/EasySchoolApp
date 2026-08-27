import './TagStatus.css';

export type TagStatusTone = 'aguardando' | 'pago' | 'aberto' | 'expirado' | 'rascunho';

export interface TagStatusProps {
  tone: TagStatusTone;
  children: string;
}

export function TagStatus({ tone, children }: TagStatusProps) {
  return (
    <span className={`tag-status tag-status--${tone}`}>
      <span className="tag-status__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
