import { useState } from 'react';
import { Car, Footprints, UserCheck, History, ArrowRight, ArrowLeft as ArrowLeftIcon, Check } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { student } from '../../data/modules';
import { movements } from '../../data/entradaSaidaMock';
import './EntradaSaida.css';

export interface EntradaSaidaProps {
  onBack?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function EntradaSaida({ onBack, onPlaceholder }: EntradaSaidaProps) {
  const [notified, setNotified] = useState<'veiculo' | 'pe' | null>(null);

  return (
    <ScreenShell
      title="Entrada e Saída"
      subtitle={student.groupShort}
      accent="var(--color-green)"
      onBack={onBack}
      activeTab="inicio"
      headerExtra={
        <div className="status-banner">
          <span className="status-banner__dot" />
          {notified ? 'Portaria avisada — pode se aproximar!' : 'Miguel está na escola desde 07:52'}
        </div>
      }
    >
      <div className="quick-grid">
        <button
          className="quick-card"
          style={{ background: 'var(--color-soft-clips)' }}
          onClick={() => setNotified('veiculo')}
        >
          <span className="quick-card__icon">
            {notified === 'veiculo' ? <Check size={20} color="var(--color-orange)" /> : <Car size={20} color="var(--color-orange)" />}
          </span>
          <span className="quick-card__title">{notified === 'veiculo' ? 'Avisado!' : 'Estou chegando!'}</span>
          <span className="quick-card__description">De veículo · avisa a portaria</span>
        </button>
        <button
          className="quick-card"
          style={{ background: 'var(--color-soft-agenda)' }}
          onClick={() => setNotified('pe')}
        >
          <span className="quick-card__icon">
            {notified === 'pe' ? <Check size={20} color="var(--color-accent-agenda)" /> : <Footprints size={20} color="var(--color-accent-agenda)" />}
          </span>
          <span className="quick-card__title">{notified === 'pe' ? 'Avisado!' : 'Estou chegando!'}</span>
          <span className="quick-card__description">A pé · avisa a portaria</span>
        </button>
        <button
          className="quick-card"
          style={{ background: 'var(--color-soft-calendario)' }}
          onClick={() => onPlaceholder?.('Autorizações de Saída')}
        >
          <span className="quick-card__icon">
            <UserCheck size={20} color="var(--color-accent-calendario)" />
          </span>
          <span className="quick-card__title">Autorizações de Saída</span>
          <span className="quick-card__description">Quem pode buscar o Miguel</span>
        </button>
        <button
          className="quick-card"
          style={{ background: 'var(--color-soft-entrada-saida)' }}
          onClick={() => onPlaceholder?.('Histórico de entrada e saída')}
        >
          <span className="quick-card__icon">
            <History size={20} color="var(--color-green)" />
          </span>
          <span className="quick-card__title">Histórico</span>
          <span className="quick-card__description">Entradas e saídas anteriores</span>
        </button>
      </div>

      <div className="section-title">Movimentações recentes</div>
      <div>
        {movements.map((m) => (
          <div className="movement-item" key={m.id}>
            <span className={`movement-item__icon movement-item__icon--${m.type}`}>
              {m.type === 'entrada' ? <ArrowRight size={16} /> : <ArrowLeftIcon size={16} />}
            </span>
            <span>
              <div className="movement-item__title">{m.type === 'entrada' ? 'Entrada' : 'Saída'}</div>
              <div className="movement-item__who">{m.who}</div>
            </span>
            <span className="movement-item__when">{m.when}</span>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}
