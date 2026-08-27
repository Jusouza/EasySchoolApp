import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from 'lucide-react';
import { AppHeader } from './AppHeader';
import { StatusBar } from '../StatusBar/StatusBar';
import { moduleAccents } from '../../tokens/tokens';

const meta: Meta<typeof AppHeader> = {
  title: 'Navegação/AppHeader (C/AppHeader)',
  component: AppHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Header canônico: voltar (24pt) + título (20/700) + ação opcional. Cor de fundo = accent do módulo. O título nunca muda de tamanho entre telas.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AppHeader>;

function HeaderWithStatusBar(props: ComponentProps<typeof AppHeader>) {
  return (
    <div style={{ width: 390, borderRadius: '0 0 26px 26px', overflow: 'hidden' }}>
      <div style={{ background: props.accent ?? 'var(--color-green)' }}>
        <StatusBar light />
      </div>
      <AppHeader {...props} />
    </div>
  );
}

export const Padrao: Story = {
  name: 'Padrão (Agenda de Recados)',
  render: () => (
    <HeaderWithStatusBar
      title="Agenda de Recados"
      subtitle="Miguel Souza · Grupo 2F"
      accent="var(--color-accent-agenda)"
      action={
        <button className="app-header__action" aria-label="Buscar">
          <Search size={22} />
        </button>
      }
    />
  ),
};

export const PorModulo: Story = {
  name: 'Cor real por tela (amostrada do protótipo)',
  parameters: {
    docs: {
      description: {
        story:
          'Na prática, a maioria das telas usa $green como cor institucional do header — só Agenda e Calendário usam sua cor de accent própria. Fluxos de checkout (Carrinho, Detalhe do produto, Revisar pedido) usam header neutro branco.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <HeaderWithStatusBar title="Clips" accent="var(--color-green)" />
      <HeaderWithStatusBar title="Sala de Aula" accent="var(--color-green)" />
      <HeaderWithStatusBar title="Agenda de Recados" accent={moduleAccents.find((m) => m.name === 'agenda')!.accent} />
      <HeaderWithStatusBar title="Calendário" accent={moduleAccents.find((m) => m.name === 'calendario')!.accent} />
      <HeaderWithStatusBar title="Entrada e Saída" accent="var(--color-green)" />
      <HeaderWithStatusBar title="ClipPag" accent="var(--color-green)" />
    </div>
  ),
};
