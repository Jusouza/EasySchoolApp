import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check, ArrowRight, Trash2, MessageCircle, Plus, Send, Share2, QrCode } from 'lucide-react';
import { Button, IconButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Componentes-mestre/Botão (C/Botao)',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Um único botão primário por tela — é a ação que conclui a tarefa. Todos são pílula (raio = metade da altura). Rótulo de primário em caixa alta e curto; qualquer outra hierarquia usa caixa normal.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'primary-orange', 'destructive', 'whatsapp', 'secondary', 'text'],
    },
    size: { control: 'select', options: ['g', 'm', 'p'] },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primario: Story = {
  args: { variant: 'primary', size: 'm', children: 'CONFIRMAR PEDIDO', icon: <Check size={18} /> },
};

export const PrimarioLaranja: Story = {
  name: 'Primário laranja',
  args: { variant: 'primary-orange', size: 'm', children: 'VER A LOJA', icon: <ArrowRight size={18} /> },
};

export const Destrutivo: Story = {
  args: { variant: 'destructive', size: 'm', children: 'APAGAR MINHA CONTA', icon: <Trash2 size={18} /> },
};

export const WhatsApp: Story = {
  args: { variant: 'whatsapp', size: 'm', children: 'FALAR NO WHATSAPP', icon: <MessageCircle size={18} /> },
};

export const Secundario: Story = {
  name: 'Secundário (contorno)',
  args: { variant: 'secondary', size: 'g', children: 'Voltar' },
};

export const Texto: Story = {
  args: { variant: 'text', children: 'Continuar comprando', icon: <ArrowRight size={16} /> },
};

export const LarguraTotal: Story = {
  name: 'Largura total (rodapé de fluxo)',
  args: { variant: 'primary', size: 'g', fullWidth: true, children: 'PAGAR COM PIX', icon: <QrCode size={20} /> },
  parameters: { layout: 'padded' },
};

export const Tamanhos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button variant="primary" size="g" icon={<Plus size={18} />}>
        ADICIONAR
      </Button>
      <Button variant="primary" size="m" icon={<Plus size={18} />}>
        ADICIONAR
      </Button>
      <Button variant="primary" size="p" icon={<Plus size={16} />}>
        ADICIONAR
      </Button>
    </div>
  ),
};

export const Estados: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button variant="primary" icon={<Check size={18} />}>
        ENVIAR PEDIDO
      </Button>
      <Button variant="primary" disabled icon={<Check size={18} />}>
        ENVIAR PEDIDO
      </Button>
      <Button variant="primary" loading>
        ENVIAR PEDIDO
      </Button>
    </div>
  ),
};

export const Icone: Story = {
  name: 'Ícone (46×46)',
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <IconButton icon={<Plus size={20} />} tone="soft" aria-label="Adicionar" />
      <IconButton icon={<Send size={20} />} tone="filled" aria-label="Enviar mensagem" />
      <IconButton icon={<Share2 size={20} />} tone="ghost" aria-label="Compartilhar" />
    </div>
  ),
};
