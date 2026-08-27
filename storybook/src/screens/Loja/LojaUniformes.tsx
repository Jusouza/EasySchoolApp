import { useMemo, useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { Chip } from '../../components/Chip/Chip';
import { Badge } from '../../components/Badge/Badge';
import { Button } from '../../components/Button/Button';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { products, productCategories, initialCart, formatBRL, type CartItem } from '../../data/lojaMock';
import './Loja.css';

export interface LojaUniformesProps {
  onBack?: () => void;
  onOpenProduct?: (productId: string) => void;
  onOpenCart?: () => void;
  onPlaceholder?: (title: string) => void;
}

const categoryOrder: (typeof products)[number]['category'][] = ['Camisas', 'Blusas', 'Saias, shorts e bermudas', 'Calças'];

export function LojaUniformes({ onBack, onOpenProduct, onOpenCart, onPlaceholder }: LojaUniformesProps) {
  const [category, setCategory] = useState<(typeof productCategories)[number]>('Todas');
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cart.reduce((sum, i) => sum + (products.find((p) => p.id === i.productId)?.price ?? 0) * i.quantity, 0);

  const addToCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) => (i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { productId, size: '-', quantity: 1 }];
    });
  };

  const grouped = useMemo(() => {
    const filtered = products.filter((p) => category === 'Todas' || p.category === category);
    return categoryOrder
      .map((cat) => ({ cat, items: filtered.filter((p) => p.category === cat) }))
      .filter((g) => g.items.length > 0);
  }, [category]);

  return (
    <ScreenShell
      title="Loja de Uniformes"
      subtitle="EasySchool · Miguel Souza"
      accent="var(--color-green)"
      onBack={onBack}
      headerAction={
        <button className="app-header__action cart-icon-btn" aria-label="Carrinho" onClick={onOpenCart}>
          <ShoppingCart size={20} />
          <span className="cart-icon-btn__badge">
            <Badge count={cartCount} />
          </span>
        </button>
      }
      headerExtra={
        <button className="loja-search" onClick={() => onPlaceholder?.('Buscar peça do uniforme')}>
          <Search size={18} /> Buscar peça do uniforme
        </button>
      }
    >
      <div className="loja-chips">
        {productCategories.map((c) => (
          <Chip key={c} variant={c === category ? 'selected' : 'default'} onClick={() => setCategory(c)}>
            {c}
          </Chip>
        ))}
      </div>

      {grouped.map((g) => (
        <div key={g.cat}>
          <div className="loja-section-title">{g.cat}</div>
          <div className="loja-product-grid">
            {g.items.map((p) => (
              <div key={p.id} onClick={() => onOpenProduct?.(p.id)} style={{ cursor: 'pointer' }}>
                <ProductCard title={p.name} sizes={p.sizes} price={formatBRL(p.price)} onAdd={() => addToCart(p.id)} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="loja-footer">
        <span>
          <div className="loja-footer__label">{cartCount} itens no carrinho</div>
          <div className="loja-footer__value">{formatBRL(cartTotal)}</div>
        </span>
        <Button variant="primary" icon={<ShoppingCart size={18} />} onClick={onOpenCart}>
          VER CARRINHO
        </Button>
      </div>
    </ScreenShell>
  );
}
