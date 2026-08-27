import type { Meta, StoryObj } from '@storybook/react-vite';
import { Placeholder } from './Placeholder';

const meta: Meta<typeof Placeholder> = {
  title: 'Telas/Placeholder (Em breve)',
  component: Placeholder,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Placeholder>;

export const Padrao: Story = { name: 'Padrão', args: { title: 'Notificações' } };
