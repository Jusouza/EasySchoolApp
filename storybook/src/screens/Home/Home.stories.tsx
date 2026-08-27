import type { Meta, StoryObj } from '@storybook/react-vite';
import { Home } from './Home';

const meta: Meta<typeof Home> = {
  title: 'Telas/Home',
  component: Home,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Home>;

export const Padrao: Story = { name: 'Padrão' };
