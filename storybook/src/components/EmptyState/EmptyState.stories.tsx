import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button/Button';
import { Mascot } from '../Mascot/Mascot';

const meta: Meta<typeof EmptyState> = {
  title: 'Conteúdo/EstadoVazio (C/EstadoVazio)',
  component: EmptyState,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'O mascote-robô continua, agora sempre com CTA e alternativas. Estado vazio sem ação sugerida não é aceito no produto.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 340, background: 'var(--color-surface)', borderRadius: 20 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Padrao: Story = {
  name: 'Padrão (ClipPag · Avisos)',
  args: {
    title: 'Nada no radar ainda!',
    description: 'Você não tem avisos financeiros no momento. Que tal aproveitar para montar o kit de uniforme do Miguel?',
    cta: (
      <Button variant="primary-orange" icon={<ArrowRight size={18} />}>
        VER LOJA DE UNIFORMES
      </Button>
    ),
  },
};

export const Generico: Story = {
  name: 'Genérico',
  args: {
    title: 'Tudo vazio por aqui!',
    description: 'Nada no radar ainda — mas você pode começar por aqui.',
    cta: (
      <Button variant="primary-orange" icon={<ArrowRight size={18} />}>
        MAIS
      </Button>
    ),
  },
};

export const Mascote: Story = {
  name: 'C/Mascote isolado',
  render: () => <Mascot size={140} />,
};
