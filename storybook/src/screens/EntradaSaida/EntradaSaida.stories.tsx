import type { Meta, StoryObj } from '@storybook/react-vite';
import { EntradaSaida } from './EntradaSaida';

const meta: Meta<typeof EntradaSaida> = {
  title: 'Telas/Entrada e Saída',
  component: EntradaSaida,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof EntradaSaida>;

export const Padrao: Story = { name: 'Padrão' };
