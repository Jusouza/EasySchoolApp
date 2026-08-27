import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check, LogOut } from 'lucide-react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Padrões de interação/Toast',
  component: Toast,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Sucesso: Story = {
  render: () => (
    <Toast icon={<Check size={18} className="toast__icon--success" />}>Copiado! Cole no app do seu banco</Toast>
  ),
};

export const SairDoApp: Story = {
  name: 'Sair do app (Home)',
  render: () => (
    <Toast icon={<LogOut size={18} className="toast__icon--warning" />}>Toque em voltar novamente para sair</Toast>
  ),
};
