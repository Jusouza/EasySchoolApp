import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabBar } from './TabBar';

const meta: Meta<typeof TabBar> = {
  title: 'Navegação/TabBar (C/TabBar)',
  component: TabBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Pílula flutuante, 60pt, inset 16 lateral e 12 do fundo, elevação nível 1. Ativo = ícone e rótulo no accent sobre cápsula soft. Uma única barra inferior em toda a jornada.',
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
type Story = StoryObj<typeof TabBar>;

export const Inicio: Story = { args: { active: 'inicio' } };
export const Agenda: Story = { args: { active: 'agenda' } };
export const Calendario: Story = { args: { active: 'calendario' } };
