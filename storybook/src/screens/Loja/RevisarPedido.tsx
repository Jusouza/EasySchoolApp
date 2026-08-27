import { useState } from 'react';
import { Check, Save } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { products, initialCart, formatBRL } from '../../data/lojaMock';
import { student } from '../../data/modules';
import './Loja.css';
import './RevisarPedido.css';

export interface RevisarPedidoProps {
  onBack?: () => void;
  onConfirm?: () => void;
  onEditItems?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function RevisarPedido({ onBack, onConfirm, onEditItems, onPlaceholder }: RevisarPedidoProps) {
  const [retirada, setRetirada] = useState<'escola' | 'casa'>('escola');
  const items = initialCart.map((i) => ({ ...i, product: products.find((p) => p.id === i.productId)! }));
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <ScreenShell title="Revisar pedido" neutral onBack={onBack}>
      <div className="stepper-flow">
        <span className="stepper-flow__step">
          <span className="stepper-flow__dot stepper-flow__dot--done">
            <Check size={12} />
          </span>
          Carrinho
        </span>
        <span className="stepper-flow__sep" />
        <span className="stepper-flow__step stepper-flow__label--active">
          <span className="stepper-flow__dot stepper-flow__dot--active">2</span>
          Revisão
        </span>
        <span className="stepper-flow__sep" />
        <span className="stepper-flow__step">
          <span className="stepper-flow__dot">3</span>
          Pagamento
        </span>
      </div>

      <div className="review-card">
        <div className="review-card__title">
          Aluno vinculado <button className="link-button" onClick={() => onPlaceholder?.('Trocar aluno vinculado')}>Trocar</button>
        </div>
        <div className="student-row">
          <Avatar size={44} />
          <span>
            <div className="student-row__name">{student.name}</div>
            <div className="student-row__meta">{student.group} · Matrícula 20261184</div>
          </span>
        </div>
      </div>

      <div className="review-card">
        <div className="review-card__title">Forma de retirada</div>
        <div className={`retirada-option ${retirada === 'escola' ? 'retirada-option--selected' : ''}`} onClick={() => setRetirada('escola')}>
          <span className="retirada-option__radio">{retirada === 'escola' && <span className="retirada-option__radio-dot" />}</span>
          <span>
            <div className="retirada-option__title">Retirar na escola</div>
            <div className="retirada-option__subtitle">Secretaria · seg. a sex., 8h às 17h</div>
          </span>
        </div>
        <div className={`retirada-option ${retirada === 'casa' ? 'retirada-option--selected' : ''}`} onClick={() => setRetirada('casa')}>
          <span className="retirada-option__radio">{retirada === 'casa' && <span className="retirada-option__radio-dot" />}</span>
          <span>
            <div className="retirada-option__title">Entrega em casa</div>
            <div className="retirada-option__subtitle">Al. Amazonas, 552 · frete R$ 18,00</div>
          </span>
        </div>
      </div>

      <div className="review-card">
        <div className="review-card__title">
          Itens do pedido <button className="link-button" onClick={onEditItems}>Editar</button>
        </div>
        {items.map((i) => (
          <div className="order-item-row" key={i.productId}>
            <span>
              {i.product.name}
              <div className="order-item-row__meta">
                Tam. {i.size} · {i.quantity} un.
              </div>
            </span>
            <span>{formatBRL(i.product.price * i.quantity)}</span>
          </div>
        ))}
      </div>

      <div className="review-card">
        <div className="review-card__title">Resumo de valores</div>
        <div className="cart-summary">
          <div className="cart-summary__row">
            <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} peças)</span>
            <span>{formatBRL(subtotal)}</span>
          </div>
          <div className="cart-summary__row">
            <span>Retirada na escola</span>
            <span>Grátis</span>
          </div>
          <div className="cart-summary__row">
            <span>Desconto irmãos</span>
            <span>- R$ 0,00</span>
          </div>
          <div className="cart-summary__row cart-summary__row--total">
            <span>Total a pagar</span>
            <span>{formatBRL(subtotal)}</span>
          </div>
        </div>
      </div>

      <div className="draft-banner">
        <Save size={16} />
        Pedido salvo como rascunho — você pode sair e voltar depois.
      </div>

      <Button variant="primary" size="g" fullWidth icon={<Check size={18} />} onClick={onConfirm}>
        CONFIRMAR E ENVIAR PEDIDO
      </Button>
    </ScreenShell>
  );
}
