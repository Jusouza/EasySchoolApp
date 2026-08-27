import { Menu, Bell, ChevronsUpDown, Car, MessageCircle, PenLine, ChevronRight, ShieldCheck, User } from 'lucide-react';
import { StatusBar } from '../../components/StatusBar/StatusBar';
import { TabBar, type TabKey } from '../../components/TabBar/TabBar';
import { Avatar } from '../../components/Avatar/Avatar';
import { ModuleCard } from '../../components/ModuleCard/ModuleCard';
import { modules, student } from '../../data/modules';
import type { ModuleName } from '../../tokens/tokens';
import '../ScreenShell.css';
import './Home.css';

export interface HomeProps {
  onOpenMenu?: () => void;
  onOpenModule?: (key: ModuleName) => void;
  onOpenResume?: () => void;
  onSelectTab?: (key: TabKey) => void;
  onOpenNotifications?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function Home({ onOpenMenu, onOpenModule, onOpenResume, onSelectTab, onOpenNotifications, onPlaceholder }: HomeProps) {
  return (
    <div className="screen">
      <div className="home-header">
        <StatusBar light />
        <div className="home-header__top">
          <button className="home-header__icon-btn" aria-label="Abrir menu" onClick={onOpenMenu}>
            <Menu size={22} />
          </button>
          <span className="home-header__logo">
            Easy<span>School</span>
          </span>
          <button
            className="home-header__icon-btn home-header__icon-btn--light"
            aria-label="Notificações"
            onClick={onOpenNotifications}
          >
            <Bell size={18} />
            <span className="home-header__notif-dot" />
          </button>
        </div>
        <div className="home-header__greeting">Boa tarde, Juliana ☀️</div>
        <div className="home-header__date">Quarta-feira, 12 de agosto</div>
        <button className="home-header__student" onClick={() => onPlaceholder?.('Selecionar filho')}>
          <Avatar size={44} icon={<User size={20} />} />
          <span className="home-header__student-info">
            <div className="home-header__student-name">{student.name}</div>
            <div className="home-header__student-group">{student.group}</div>
          </span>
          <ChevronsUpDown size={18} />
        </button>
      </div>

      <div className="screen__content">
        <div className="home-quick-actions">
          <button className="home-quick-action home-quick-action--chegando" onClick={() => onOpenModule?.('entradaSaida')}>
            <Car size={18} /> Estou chegando
          </button>
          <button
            className="home-quick-action home-quick-action--whatsapp"
            onClick={() => onPlaceholder?.('Falar no WhatsApp')}
          >
            <MessageCircle size={18} /> Falar no WhatsApp
          </button>
        </div>

        <button className="home-resume-card" onClick={onOpenResume}>
          <span className="home-resume-card__icon">
            <PenLine size={18} />
          </span>
          <span style={{ flex: 1 }}>
            <div className="home-resume-card__title">Continuar de onde parei</div>
            <div className="home-resume-card__subtitle">Matrícula 2027 · rascunho salvo · etapa 2 de 4</div>
          </span>
          <ChevronRight size={20} color="var(--color-text-3)" />
        </button>

        <div className="home-section-title">
          <h2>Módulos</h2>
        </div>

        <div className="home-module-grid">
          {modules.map((m) => (
            <ModuleCard
              key={m.key}
              icon={<m.icon size={26} />}
              accent={m.accent}
              soft={m.soft}
              title={m.title}
              description={m.description}
              unread={m.unread}
              onClick={() => onOpenModule?.(m.key)}
            />
          ))}
        </div>

        <div className="home-footer">
          <ShieldCheck size={12} style={{ verticalAlign: -2, marginRight: 4 }} />
          Ambiente seguro · Transformação Digital M3I
        </div>
      </div>

      <div className="screen__tabbar">
        <TabBar active="inicio" onSelect={onSelectTab} />
      </div>
    </div>
  );
}
