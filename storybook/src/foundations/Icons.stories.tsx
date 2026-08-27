import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check, Paperclip, ChevronRight, Wallet, ArrowLeft, Grid2x2 } from 'lucide-react';
import { iconSizes } from '../tokens/tokens';

const meta: Meta = {
  title: 'Fundamentos/Iconografia',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Lucide, traço 2pt. Área de toque mínima de 44×44pt. Ícones menores que isso ganham um frame transparente ao redor — nunca aumente o ícone só para virar alvo.',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

const icons = [Check, Paperclip, ChevronRight, Wallet, ArrowLeft, Grid2x2];

export const Tamanhos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {iconSizes.map((s, i) => {
        const Icon = icons[i];
        return (
          <div key={s.size} style={{ textAlign: 'center', width: 140 }}>
            <div
              style={{
                height: 70,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-bg)',
                borderRadius: 14,
                marginBottom: 8,
                color: 'var(--color-green)',
              }}
            >
              <Icon size={s.size} strokeWidth={2} />
            </div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>{s.size}pt</div>
            <div style={{ fontSize: 11, color: 'var(--color-text-2)' }}>{s.usage}</div>
          </div>
        );
      })}
    </div>
  ),
};
