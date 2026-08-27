import type { Meta, StoryObj } from '@storybook/react-vite';
import { Clips } from './Clips';

const meta: Meta<typeof Clips> = {
  title: 'Telas/Clips e Sala de Aula',
  component: Clips,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Clips>;

export const MuralDaEscola: Story = { name: 'Mural da Escola', args: { initialTab: 'mural' } };
export const SalaDeAula: Story = { name: 'Sala de Aula', args: { initialTab: 'sala' } };
