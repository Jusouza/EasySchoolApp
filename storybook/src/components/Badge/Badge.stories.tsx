import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Componentes-mestre/Badge (C/Badge)',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Número até 9, depois "9+". O ponto simples avisa novidade sem contagem. Sempre em $orange sobre borda da cor do fundo.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Numerico: Story = {
  name: 'Numérico',
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Badge count={3} />
      <Badge count={9} />
      <Badge count={12} />
    </div>
  ),
};

export const Ponto: Story = {
  args: { dot: true },
};
