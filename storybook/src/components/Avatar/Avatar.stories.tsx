import type { Meta, StoryObj } from '@storybook/react-vite';
import { User, Building2 } from 'lucide-react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Componentes-mestre/Avatar (C/Avatar)',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Foto real quando existe; senão, ícone sobre o soft do módulo. Categorias da Agenda usam ícone, nunca inicial.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Tamanhos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar size={60} icon={<User size={26} />} />
      <Avatar size={44} icon={<User size={20} />} />
      <Avatar size={38} icon={<User size={18} />} />
    </div>
  ),
};

export const ComIcone: Story = {
  name: 'Com ícone (sem foto)',
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar icon={<User size={20} />} />
      <Avatar icon={<Building2 size={20} />} />
    </div>
  ),
};
