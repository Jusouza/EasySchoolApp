import type { Meta, StoryObj } from '@storybook/react-vite';
import { Save } from 'lucide-react';
import { ConfirmDialog } from './ConfirmDialog';
import { Button } from '../Button/Button';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Padrões de interação/ConfirmDialog (Descartar alterações)',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component:
          'Sair de um formulário com dados não enviados sempre abre este diálogo com três saídas: manter rascunho, continuar editando, descartar.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const DescartarAlteracoes: Story = {
  name: 'Descartar alterações?',
  args: {
    title: 'Descartar alterações?',
    description: 'Você preencheu 3 campos que ainda não foram enviados. Podemos manter tudo salvo como rascunho para você continuar depois.',
    actions: (
      <>
        <Button variant="primary" fullWidth icon={<Save size={18} />}>
          MANTER RASCUNHO E SAIR
        </Button>
        <Button variant="secondary" fullWidth>
          Continuar editando
        </Button>
        <Button variant="text" style={{ color: 'var(--color-danger)', alignSelf: 'center' }}>
          Descartar alterações
        </Button>
      </>
    ),
  },
};
