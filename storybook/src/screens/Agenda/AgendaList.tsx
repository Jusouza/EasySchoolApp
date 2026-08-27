import { Search, Zap, PenLine } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { Badge } from '../../components/Badge/Badge';
import { Button } from '../../components/Button/Button';
import { sectors } from '../../data/agendaMock';
import { student } from '../../data/modules';
import type { TabKey } from '../../components/TabBar/TabBar';
import './Agenda.css';

export interface AgendaListProps {
  onBack?: () => void;
  onSelectTab?: (key: TabKey) => void;
  onOpenChat?: (sectorKey: string) => void;
  onPlaceholder?: (title: string) => void;
}

export function AgendaList({ onBack, onSelectTab, onOpenChat, onPlaceholder }: AgendaListProps) {
  return (
    <ScreenShell
      title="Agenda de Recados"
      subtitle={student.groupShort}
      accent="var(--color-accent-agenda)"
      onBack={onBack}
      activeTab="agenda"
      onSelectTab={onSelectTab}
      headerAction={
        <button className="app-header__action" aria-label="Buscar" onClick={() => onPlaceholder?.('Buscar na agenda')}>
          <Search size={22} />
        </button>
      }
    >
      <div className="agenda-hint">
        <Zap size={16} />
        Você tem só uma turma — pulamos a seleção para você.
      </div>

      <div className="agenda-section-title">Com quem você quer falar?</div>

      {sectors.map((s) => (
        <button key={s.key} className="conversation-card" onClick={() => onOpenChat?.(s.key)}>
          {s.unread !== undefined && (
            <span className="conversation-card__badge">
              <Badge count={s.unread} />
            </span>
          )}
          <span className="conversation-card__icon" style={{ background: s.soft, color: s.accent }}>
            <s.icon size={20} />
          </span>
          <span className="conversation-card__body">
            <div className="conversation-card__name">{s.name}</div>
            <div className="conversation-card__description">{s.description}</div>
            <div className="conversation-card__last">{s.lastMessage}</div>
          </span>
        </button>
      ))}

      <Button
        variant="primary"
        fullWidth
        icon={<PenLine size={18} />}
        iconPosition="left"
        onClick={() => onPlaceholder?.('Nova conversa')}
      >
        Nova conversa
      </Button>
    </ScreenShell>
  );
}
