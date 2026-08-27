import { useState } from 'react';
import { ScreenShell } from '../ScreenShell';
import { EmptyState } from '../../components/EmptyState/EmptyState';
import { notifications as initialNotifications, type NotificationItem, type NotificationTarget } from '../../data/notificationsMock';
import './Notificacoes.css';

export interface NotificacoesProps {
  onBack?: () => void;
  onOpenTarget?: (target: NotificationTarget) => void;
}

export function Notificacoes({ onBack, onOpenTarget }: NotificacoesProps) {
  const [items, setItems] = useState<NotificationItem[]>(initialNotifications);
  const unreadCount = items.filter((i) => i.unread).length;

  const markAllRead = () => setItems((prev) => prev.map((i) => ({ ...i, unread: false })));

  const openItem = (item: NotificationItem) => {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, unread: false } : i)));
    if (item.target) onOpenTarget?.(item.target);
  };

  const groups: NotificationItem['group'][] = ['Hoje', 'Ontem'];

  return (
    <ScreenShell
      title="Notificações"
      subtitle={unreadCount > 0 ? `${unreadCount} não lidas` : 'Tudo em dia'}
      accent="var(--color-green)"
      onBack={onBack}
      activeTab="inicio"
      headerAction={
        unreadCount > 0 ? (
          <button
            onClick={markAllRead}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-family)',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Marcar todas como lidas
          </button>
        ) : undefined
      }
    >
      {items.length === 0 ? (
        <EmptyState title="Nada por aqui" description="Você não tem notificações no momento." />
      ) : (
        groups.map((group) => {
          const groupItems = items.filter((i) => i.group === group);
          if (groupItems.length === 0) return null;
          return (
            <div key={group} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div className="notif-group-title">{group}</div>
              {groupItems.map((item) => (
                <button
                  key={item.id}
                  className={`notif-item ${item.unread ? 'notif-item--unread' : ''}`}
                  onClick={() => openItem(item)}
                >
                  <span className="notif-item__icon" style={{ background: item.soft, color: item.accent }}>
                    <item.icon size={18} />
                  </span>
                  <span className="notif-item__body">
                    <span className="notif-item__title-row">
                      {item.unread && <span className="notif-item__dot" />}
                      <span className="notif-item__title">{item.title}</span>
                    </span>
                    <div className="notif-item__description">{item.description}</div>
                  </span>
                  <span className="notif-item__time">{item.time}</span>
                </button>
              ))}
            </div>
          );
        })
      )}
    </ScreenShell>
  );
}
