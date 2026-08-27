import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBar } from './StatusBar';

const meta: Meta<typeof StatusBar> = {
  title: 'Navegação/StatusBar (C/StatusBar)',
  component: StatusBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Chrome do sistema, 62pt. Herda a cor do header: branco sobre verde, $text sobre claro. Nenhuma UI do app entra aqui.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 390 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof StatusBar>;

export const SobreClaro: Story = {
  name: 'Sobre fundo claro',
  args: { light: false },
};

export const SobreEscuro: Story = {
  name: 'Sobre fundo escuro (header colorido)',
  render: () => (
    <div style={{ background: 'var(--color-green)', borderRadius: 12 }}>
      <StatusBar light />
    </div>
  ),
};
