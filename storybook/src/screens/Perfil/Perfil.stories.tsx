import type { Meta, StoryObj } from '@storybook/react-vite';
import { Perfil } from './Perfil';

const meta: Meta<typeof Perfil> = {
  title: 'Telas/Menu · Perfil',
  component: Perfil,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Perfil>;

export const Padrao: Story = { name: 'Padrão' };
