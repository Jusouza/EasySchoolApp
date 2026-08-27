import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrototypeApp } from './PrototypeApp';

const meta: Meta<typeof PrototypeApp> = {
  title: 'Protótipo/App navegável',
  component: PrototypeApp,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Protótipo clicável completo: navegue pela Home, módulos, chat, calendário, fluxo de loja de uniformes (do catálogo ao Pix) e matrícula, exatamente como no app real. Use os botões, cards e a barra inferior para navegar — clique em "Canvas" acima para interagir em tela cheia.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof PrototypeApp>;

export const AppCompleto: Story = { name: 'App completo' };
