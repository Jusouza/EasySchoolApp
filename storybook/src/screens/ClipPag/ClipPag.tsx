import { useState } from 'react';
import { ShoppingCart, QrCode, Shirt, ChevronRight, History, MessageSquareText, ArrowRight } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { HeaderTabs } from '../../components/HeaderTabs/HeaderTabs';
import { Badge } from '../../components/Badge/Badge';
import { Button } from '../../components/Button/Button';
import { TagStatus } from '../../components/TagStatus/TagStatus';
import { EmptyState } from '../../components/EmptyState/EmptyState';
import { ListItem } from '../../components/ListItem/ListItem';
import { openCharges, totalOpen, paymentHistory } from '../../data/clipPagMock';
import type { TabKey } from '../../components/TabBar/TabBar';
import './ClipPag.css';

type ClipPagTab = 'aberto' | 'avisos' | 'historico';

export interface ClipPagProps {
  onBack?: () => void;
  onSelectTab?: (key: TabKey) => void;
  onOpenLoja?: () => void;
  onOpenPix?: () => void;
  onOpenCart?: () => void;
  onOpenChat?: (sectorKey: string) => void;
}

function UniformBanner({ onClick }: { onClick?: () => void }) {
  return (
    <button className="uniform-banner" onClick={onClick}>
      <span className="uniform-banner__icon">
        <Shirt size={20} />
      </span>
      <span style={{ flex: 1 }}>
        <div className="uniform-banner__title">Loja de uniformes</div>
        <div className="uniform-banner__description">Escolha tamanho, monte o pedido e pague pelo app.</div>
      </span>
      <ChevronRight size={18} color="var(--color-text-3)" />
    </button>
  );
}

export function ClipPag({ onBack, onSelectTab, onOpenLoja, onOpenPix, onOpenCart, onOpenChat }: ClipPagProps) {
  const [tab, setTab] = useState<ClipPagTab>('aberto');

  return (
    <ScreenShell
      title="ClipPag"
      accent="var(--color-green)"
      onBack={onBack}
      activeTab="clippag"
      onSelectTab={onSelectTab}
      headerAction={
        <button className="app-header__action cart-icon-btn" aria-label="Carrinho" onClick={onOpenCart}>
          <ShoppingCart size={20} />
          <span className="cart-icon-btn__badge">
            <Badge count={2} />
          </span>
        </button>
      }
      headerExtra={
        <HeaderTabs
          active={tab}
          onChange={setTab}
          options={[
            { key: 'aberto', label: 'Em Aberto' },
            { key: 'avisos', label: 'Avisos' },
            { key: 'historico', label: 'Histórico' },
          ]}
        />
      }
    >
      {tab === 'aberto' && (
        <>
          <div className="total-open-card">
            <span>
              <div className="total-open-card__label">Total em aberto</div>
              <div className="total-open-card__value">{totalOpen}</div>
            </span>
            <span className="total-open-card__pill">{openCharges.length} cobranças</span>
          </div>

          {openCharges.map((c) => (
            <div className="charge-card" key={c.id}>
              <div className="charge-card__top">
                <span>
                  <div className="charge-card__title">{c.title}</div>
                  <div className="charge-card__due">{c.due}</div>
                </span>
                <TagStatus tone="aberto">Em aberto</TagStatus>
              </div>
              <div className="charge-card__bottom">
                <span className="charge-card__value">{c.value}</span>
                <Button variant="primary" size="p" icon={<QrCode size={16} />} iconPosition="left" onClick={onOpenPix}>
                  Pagar com Pix
                </Button>
              </div>
            </div>
          ))}

          <UniformBanner onClick={onOpenLoja} />
        </>
      )}

      {tab === 'avisos' && (
        <>
          <EmptyState
            title="Nada no radar ainda!"
            description="Você não tem avisos financeiros no momento. Que tal aproveitar para montar o kit de uniforme do Miguel?"
            cta={
              <Button variant="primary-orange" icon={<ArrowRight size={18} />} onClick={onOpenLoja}>
                VER LOJA DE UNIFORMES
              </Button>
            }
          />
          <ListItem icon={<History size={18} />} title="Ver histórico de pagamentos" showChevron onClick={() => setTab('historico')} />
          <ListItem
            icon={<MessageSquareText size={18} />}
            title="Falar com o Financeiro"
            showChevron
            onClick={() => onOpenChat?.('financeiro')}
          />
          <UniformBanner onClick={onOpenLoja} />
        </>
      )}

      {tab === 'historico' && (
        <>
          {paymentHistory.map((p) => (
            <div className="charge-card" key={p.id}>
              <div className="charge-card__top">
                <span>
                  <div className="charge-card__title">{p.title}</div>
                  <div className="charge-card__due">{p.when}</div>
                </span>
                <TagStatus tone="pago">Pago</TagStatus>
              </div>
              <div className="charge-card__bottom">
                <span className="charge-card__value">{p.value}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </ScreenShell>
  );
}
