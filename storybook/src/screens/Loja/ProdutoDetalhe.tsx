import { useState } from 'react';
import { ShoppingCart, Ruler, User, Minus, Plus } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { Button } from '../../components/Button/Button';
import { products, formatBRL } from '../../data/lojaMock';
import { student } from '../../data/modules';
import './Loja.css';

const sizeList = ['PP', 'P', 'M', 'G', 'GG'];
const unavailableSizes = ['GG'];

export interface ProdutoDetalheProps {
  productId?: string;
  onBack?: () => void;
  onAddToCart?: () => void;
  onOpenCart?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function ProdutoDetalhe({ productId = 'camisa-curta', onBack, onAddToCart, onOpenCart, onPlaceholder }: ProdutoDetalheProps) {
  const product = products.find((p) => p.id === productId) ?? products[0];
  const [size, setSize] = useState('P');
  const [qty, setQty] = useState(2);

  return (
    <ScreenShell
      title="Detalhe do produto"
      neutral
      onBack={onBack}
      headerAction={
        <button className="app-header__action" aria-label="Carrinho" onClick={onOpenCart}>
          <ShoppingCart size={20} />
        </button>
      }
    >
      <div className="product-detail-image" />
      <div className="product-detail-title">{product.name}</div>
      <div className="product-detail-description">{product.description}</div>
      <div className="product-detail-price">{formatBRL(product.price)}</div>

      <div className="field-row-label">
        <span>Tamanho</span>
        <button className="link-button" onClick={() => onPlaceholder?.('Guia de medidas')}>
          <Ruler size={14} /> Guia de medidas
        </button>
      </div>
      <div className="size-options">
        {sizeList.map((s) => {
          const disabled = unavailableSizes.includes(s);
          return (
            <button
              key={s}
              className={`size-option ${s === size ? 'size-option--selected' : ''} ${disabled ? 'size-option--disabled' : ''}`}
              disabled={disabled}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          );
        })}
      </div>
      {unavailableSizes.includes('GG') && (
        <span style={{ fontSize: 12, color: 'var(--color-text-2)' }}>GG indisponível no momento — avisaremos quando chegar.</span>
      )}

      <div className="field-row-label">
        <span>Quantidade</span>
      </div>
      <div className="stepper">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuir quantidade">
          <Minus size={16} />
        </button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)} aria-label="Aumentar quantidade">
          <Plus size={16} />
        </button>
      </div>

      <div className="info-chip">
        <User size={16} />
        Pedido para {student.name} · {student.group.split(' · ')[0]}
      </div>

      <div className="loja-footer">
        <span>
          <div className="loja-footer__label">Subtotal</div>
          <div className="loja-footer__value">{formatBRL(product.price * qty)}</div>
        </span>
        <Button variant="primary" icon={<ShoppingCart size={18} />} onClick={onAddToCart}>
          ADICIONAR AO CARRINHO
        </Button>
      </div>
    </ScreenShell>
  );
}
