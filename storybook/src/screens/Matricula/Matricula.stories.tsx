import type { Meta, StoryObj } from '@storybook/react-vite';
import { Matricula } from './Matricula';

const meta: Meta<typeof Matricula> = {
  title: 'Telas/Matrícula 2027',
  component: Matricula,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Matricula>;

export const Padrao: Story = { name: 'Padrão' };
