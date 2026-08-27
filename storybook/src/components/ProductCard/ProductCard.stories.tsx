import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Conteúdo/ProdutoCard (C/ProdutoCard)',
  component: ProductCard,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Padrao: Story = {
  name: 'Padrão',
  args: { title: 'Camisa manga curta', sizes: 'PP · P · M · G · GG', price: 'R$ 69,90' },
};

export const Grade: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <ProductCard title="Camisa manga curta" sizes="PP · P · M · G · GG" price="R$ 69,90" />
      <ProductCard title="Camisa manga longa" sizes="PP · P · M · G · GG" price="R$ 79,90" />
      <ProductCard title="Blusa de moletom" sizes="PP · P · M · G · GG" price="R$ 139,90" />
      <ProductCard title="Bermuda" sizes="2 · 4 · 6 · 8 · 10" price="R$ 79,90" />
    </div>
  ),
};
