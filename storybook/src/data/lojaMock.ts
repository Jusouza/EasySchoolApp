export interface Product {
  id: string;
  name: string;
  category: 'Camisas' | 'Blusas' | 'Saias, shorts e bermudas' | 'Calças';
  sizes: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 'camisa-curta', name: 'Camisa manga curta', category: 'Camisas', sizes: 'PP · P · M · G · GG', price: 69.9, description: 'Malha piquet, bordado EasySchool no peito. Lavagem em máquina.' },
  { id: 'camisa-longa', name: 'Camisa manga longa', category: 'Camisas', sizes: 'PP · P · M · G · GG', price: 79.9, description: 'Malha piquet manga longa, bordado EasySchool no peito. Lavagem em máquina.' },
  { id: 'blusa-moletom', name: 'Blusa de moletom', category: 'Blusas', sizes: 'PP · P · M · G · GG', price: 139.9, description: 'Moletom flanelado, forro macio. Lavagem em máquina.' },
  { id: 'blusa-ziper', name: 'Blusa com zíper', category: 'Blusas', sizes: 'PP · P · M · G · GG', price: 149.9, description: 'Moletom com zíper frontal, bordado EasySchool. Lavagem em máquina.' },
  { id: 'saia', name: 'Saia', category: 'Saias, shorts e bermudas', sizes: '2 · 4 · 6 · 8 · 10', price: 89.9, description: 'Saia-short em helanca, confortável para o dia a dia.' },
  { id: 'shorts', name: 'Shorts', category: 'Saias, shorts e bermudas', sizes: '2 · 4 · 6 · 8 · 10', price: 74.9, description: 'Shorts em helanca com elástico ajustável.' },
  { id: 'bermuda', name: 'Bermuda', category: 'Saias, shorts e bermudas', sizes: '2 · 4 · 6 · 8 · 10', price: 79.9, description: 'Bermuda em moletom, cós com elástico ajustável.' },
  { id: 'calca', name: 'Calça', category: 'Calças', sizes: '2 · 4 · 6 · 8 · 10', price: 109.9, description: 'Calça em moletom, cós com elástico ajustável.' },
];

export const productCategories = ['Todas', 'Camisas', 'Blusas', 'Calças'] as const;

export interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}

export const initialCart: CartItem[] = [
  { productId: 'camisa-curta', size: 'P', quantity: 2 },
  { productId: 'blusa-moletom', size: 'M', quantity: 1 },
  { productId: 'bermuda', size: '6', quantity: 1 },
];

export function formatBRL(value: number): string {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}
