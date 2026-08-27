import type { Meta, StoryObj } from '@storybook/react-vite';
import { MeuPerfil } from './MeuPerfil';

const meta: Meta<typeof MeuPerfil> = {
  title: 'Telas/Meu Perfil',
  component: MeuPerfil,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof MeuPerfil>;

export const Padrao: Story = { name: 'Padrão' };
