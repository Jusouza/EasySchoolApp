import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import './ListItem.css';

export interface ListItemProps {
  icon: ReactNode;
  title: string;
  support?: string;
  trailing?: ReactNode;
  showChevron?: boolean;
  onClick?: () => void;
}

export function ListItem({ icon, title, support, trailing, showChevron = true, onClick }: ListItemProps) {
  return (
    <button className="list-item" onClick={onClick}>
      <span className="list-item__icon">{icon}</span>
      <span className="list-item__body">
        <div className="list-item__title">{title}</div>
        {support && <div className="list-item__support">{support}</div>}
      </span>
      {trailing}
      {showChevron && <ChevronRight size={20} className="list-item__chevron" />}
    </button>
  );
}
