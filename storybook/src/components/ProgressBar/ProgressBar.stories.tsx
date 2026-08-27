import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBlock } from './ProgressBar';

const meta: Meta<typeof ProgressBlock> = {
  title: 'Padrões de interação/Autosave e progresso',
  component: ProgressBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'O formulário de matrícula é a primeira experiência da família com o app. O autosave não é opcional: todo campo em edição salva rascunho com debounce de 800ms e é restaurado ao reabrir a tela.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 340 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ProgressBlock>;

export const Etapa2de4: Story = {
  name: 'Etapa 2 de 4',
  args: { percent: 50, stepLabel: '50% preenchido', savedLabel: 'Rascunho salvo às 15:47' },
};
