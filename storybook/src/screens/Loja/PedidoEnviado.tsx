import { Check, Clock, Circle, QrCode } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { TagStatus } from '../../components/TagStatus/TagStatus';
import '../ScreenShell.css';
import './PedidoEnviado.css';

export interface PedidoEnviadoProps {
  onPay?: () => void;
  onViewOrders?: () => void;
}

export function PedidoEnviado({ onPay, onViewOrders }: PedidoEnviadoProps) {
  return (
    <div className="screen" style={{ background: 'var(--color-bg)' }}>
      <div className="screen__content screen__content--no-tabbar" style={{ justifyContent: 'center', gap: 20 }}>
        <span className="success-icon">
          <Check size={36} />
        </span>
        <div className="success-title">Pedido enviado! 🎉</div>
        <div className="success-description">
          A secretaria já recebeu seu pedido de uniforme. Falta só o pagamento para separarmos as peças.
        </div>

        <div className="order-number-card">
          <span>
            <div className="order-number-card__label">Número do pedido</div>
            <div className="order-number-card__value">#UNI-20260812-0143</div>
          </span>
          <TagStatus tone="aguardando">Aguardando pagamento</TagStatus>
        </div>

        <div className="checklist">
          <div className="checklist-item">
            <span className="checklist-item__icon checklist-item__icon--done">
              <Check size={14} />
            </span>
            <span>
              <div className="checklist-item__title">Pedido recebido</div>
              <div className="checklist-item__subtitle">Hoje · 15:42</div>
            </span>
          </div>
          <div className="checklist-item">
            <span className="checklist-item__icon checklist-item__icon--active">
              <Clock size={14} />
            </span>
            <span>
              <div className="checklist-item__title">Pagamento confirmado</div>
              <div className="checklist-item__subtitle">Aguardando</div>
            </span>
          </div>
          <div className="checklist-item checklist-item--pending">
            <span className="checklist-item__icon checklist-item__icon--pending">
              <Circle size={10} />
            </span>
            <span>
              <div className="checklist-item__title">Separação das peças</div>
              <div className="checklist-item__subtitle">Em até 2 dias úteis</div>
            </span>
          </div>
          <div className="checklist-item checklist-item--pending">
            <span className="checklist-item__icon checklist-item__icon--pending">
              <Circle size={10} />
            </span>
            <span>
              <div className="checklist-item__title">Pronto para retirada</div>
              <div className="checklist-item__subtitle">Avisaremos por notificação</div>
            </span>
          </div>
        </div>

        <Button variant="primary" size="g" fullWidth icon={<QrCode size={20} />} onClick={onPay}>
          PAGAR COM PIX
        </Button>
        <Button variant="text" style={{ alignSelf: 'center' }} onClick={onViewOrders}>
          Ver meus pedidos
        </Button>
      </div>
    </div>
  );
}
