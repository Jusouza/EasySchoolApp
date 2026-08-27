import type { Meta, StoryObj } from '@storybook/react-vite';
import { Wallet } from 'lucide-react';
import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Componentes-mestre/ItemLista (C/ItemLista)',
  component: ListItem,
  parameters: {
    docs: {
      description: {
        component: 'Ícone + título + apoio + chevron. Base de cobranças, autorizações, histórico e menu.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 340 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ListItem>;

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    icon: <Wallet size={20} />,
    title: 'Mensalidade · Agosto/2026',
    support: 'Vence em 15/08 · R$ 1.380,00',
  },
};
