import { useState } from 'react';
import { Trash2, Minus, Plus, ChevronDown, ArrowRight } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { Button } from '../../components/Button/Button';
import { EmptyState } from '../../components/EmptyState/EmptyState';
import { products, initialCart, formatBRL, type CartItem } from '../../data/lojaMock';
import './Loja.css';
import './Carrinho.css';

export interface CarrinhoProps {
  onBack?: () => void;
  onReview?: () => void;
  onContinueShopping?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function Carrinho({ onBack, onReview, onContinueShopping, onPlaceholder }: CarrinhoProps) {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const items = cart.map((i) => ({ ...i, product: products.find((p) => p.id === i.productId)! }));
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.productId === productId ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (productId: string) => {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  };

  return (
    <ScreenShell
      title="Carrinho"
      neutral
      onBack={onBack}
      headerAction={<span style={{ color: 'var(--color-text-2)', fontSize: 13 }}>{items.length} itens</span>}
    >
      {items.length === 0 ? (
        <EmptyState title="Seu carrinho está vazio" description="Volte para a loja e escolha as peças do uniforme do Miguel." />
      ) : (
        items.map((item) => (
          <div className="cart-item" key={item.productId}>
            <div className="cart-item__image" />
            <div className="cart-item__body">
              <div className="cart-item__top">
                <span className="cart-item__title">{item.product.name}</span>
                <button
                  aria-label="Remover item"
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-2)', cursor: 'pointer' }}
                  onClick={() => removeItem(item.productId)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
              <button className="cart-item__size-select" onClick={() => onPlaceholder?.('Trocar tamanho')}>
                Tam. {item.size} <ChevronDown size={14} />
              </button>
              <div className="cart-item__bottom">
                <div className="stepper">
                  <button aria-label="Diminuir" onClick={() => updateQuantity(item.productId, -1)}>
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button aria-label="Aumentar" onClick={() => updateQuantity(item.productId, 1)}>
                    <Plus size={14} />
                  </button>
                </div>
                <span className="cart-item__price">{formatBRL(item.product.price * item.quantity)}</span>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="cart-summary">
        <div className="cart-summary__row">
          <span>Subtotal</span>
          <span>{formatBRL(subtotal)}</span>
        </div>
        <div className="cart-summary__row">
          <span>Retirada na escola</span>
          <span>Grátis</span>
        </div>
        <div className="cart-summary__row cart-summary__row--total">
          <span>Total</span>
          <span>{formatBRL(subtotal)}</span>
        </div>
      </div>

      <Button variant="primary" size="g" fullWidth icon={<ArrowRight size={18} />} disabled={items.length === 0} onClick={onReview}>
        REVISAR PEDIDO
      </Button>
      <Button variant="text" style={{ alignSelf: 'center' }} onClick={onContinueShopping}>
        Continuar comprando
      </Button>
    </ScreenShell>
  );
}
