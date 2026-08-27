import { Plus } from 'lucide-react';
import './ProductCard.css';

export interface ProductCardProps {
  title: string;
  sizes: string;
  price: string;
  onAdd?: () => void;
}

/** Peça do uniforme: foto 140pt, nome, grade de tamanhos disponível e preço com atalho de adicionar. */
export function ProductCard({ title, sizes, price, onAdd }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-card__image" role="img" aria-label={title} />
      <div className="product-card__body">
        <div className="product-card__title">{title}</div>
        <div className="product-card__sizes">{sizes}</div>
        <div className="product-card__footer">
          <span className="product-card__price">{price}</span>
          <button
            className="product-card__add"
            onClick={(e) => {
              e.stopPropagation();
              onAdd?.();
            }}
            aria-label={`Adicionar ${title}`}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
