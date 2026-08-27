import type { Meta, StoryObj } from '@storybook/react-vite';
import { Notificacoes } from './Notificacoes';

const meta: Meta<typeof Notificacoes> = {
  title: 'Telas/Notificações',
  component: Notificacoes,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Notificacoes>;

export const Padrao: Story = { name: 'Padrão' };
