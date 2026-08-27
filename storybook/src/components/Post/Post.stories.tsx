import type { Meta, StoryObj } from '@storybook/react-vite';
import { Post } from './Post';

const meta: Meta<typeof Post> = {
  title: 'Conteúdo/Post (C/Post)',
  component: Post,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Post>;

export const ComMidia: Story = {
  name: 'Com mídia',
  args: {
    authorName: 'Coordenação EasySchool',
    time: 'Hoje · 14:20',
    category: 'Eventos',
    text: 'Nossa Festa da Família chegou! 🎉 Dia 22/08, das 9h às 12h, no pátio da escola. Já marcamos no seu calendário — toque para ver os detalhes.',
    hasMedia: true,
    likes: 28,
    savedToCalendar: true,
  },
};

export const SoTexto: Story = {
  name: 'Só texto',
  args: {
    authorName: 'Secretaria',
    time: 'Hoje · 08:05',
    category: 'Comunicados',
    text: 'Cardápio da semana já disponível. Confira as refeições de segunda a sexta.',
    likes: 9,
  },
};
