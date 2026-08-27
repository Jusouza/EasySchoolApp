import type { Meta, StoryObj } from '@storybook/react-vite';
import { TagStatus } from './TagStatus';

const meta: Meta<typeof TagStatus> = {
  title: 'Componentes-mestre/TagStatus (C/TagStatus)',
  component: TagStatus,
  parameters: {
    docs: {
      description: {
        component: 'Estado nunca é só cor: acompanhe sempre de rótulo ou ícone.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof TagStatus>;

export const Todos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <TagStatus tone="aguardando">Aguardando pagamento</TagStatus>
      <TagStatus tone="pago">Pago em 12/08</TagStatus>
      <TagStatus tone="aberto">Em aberto</TagStatus>
      <TagStatus tone="expirado">Código expirado</TagStatus>
      <TagStatus tone="rascunho">Rascunho</TagStatus>
    </div>
  ),
};

export const Aguardando: Story = { args: { tone: 'aguardando', children: 'Aguardando pagamento' } };
export const Pago: Story = { args: { tone: 'pago', children: 'Pago em 12/08' } };
export const Aberto: Story = { args: { tone: 'aberto', children: 'Em aberto' } };
export const Expirado: Story = { args: { tone: 'expirado', children: 'Código expirado' } };
