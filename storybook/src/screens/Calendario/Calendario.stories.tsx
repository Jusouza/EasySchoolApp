import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendario } from './Calendario';

const meta: Meta<typeof Calendario> = {
  title: 'Telas/Calendário',
  component: Calendario,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Calendario>;

export const Padrao: Story = { name: 'Padrão' };
