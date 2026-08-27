import './Badge.css';

export interface BadgeProps {
  count?: number;
  dot?: boolean;
  max?: number;
}

export function Badge({ count, dot = false, max = 9 }: BadgeProps) {
  if (dot) return <span className="badge badge--dot" aria-label="Notificação não lida" />;
  const label = count !== undefined && count > max ? `${max}+` : String(count ?? '');
  return (
    <span className="badge" aria-label={`${count} não lidos`}>
      {label}
    </span>
  );
}
