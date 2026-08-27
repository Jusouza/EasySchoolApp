import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClipPag } from './ClipPag';

const meta: Meta<typeof ClipPag> = {
  title: 'Telas/ClipPag',
  component: ClipPag,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof ClipPag>;

export const EmAberto: Story = { name: 'Em Aberto' };
