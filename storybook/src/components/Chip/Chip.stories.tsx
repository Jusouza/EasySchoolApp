import type { Meta, StoryObj } from '@storybook/react-vite';
import { Ruler } from 'lucide-react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Componentes-mestre/Chip (C/Chip)',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: 'Chips filtram, tags informam estado e badges avisam de algo não lido.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Padrao: Story = {
  name: 'Padrão',
  args: { children: 'Filtro' },
};

export const Selecionado: Story = {
  args: { variant: 'selected', children: 'Hoje' },
};

export const CategoriaAtiva: Story = {
  name: 'Categoria ativa',
  args: { variant: 'category', children: 'Eventos e Reuniões' },
};

export const ComIcone: Story = {
  name: 'Com ícone',
  args: { variant: 'icon', children: 'Guia de medidas', icon: <Ruler size={16} /> },
};

export const Grupo: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip>Todos</Chip>
      <Chip variant="selected">Hoje</Chip>
      <Chip>11 ago</Chip>
      <Chip>10 ago</Chip>
      <Chip>7 ago</Chip>
    </div>
  ),
};
