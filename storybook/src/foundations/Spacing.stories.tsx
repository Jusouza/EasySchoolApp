import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacingScale, radiiScale, elevationScale } from '../tokens/tokens';

const meta: Meta = {
  title: 'Fundamentos/Espaçamento, forma e profundidade',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Espaçamento em múltiplos de 4. Toda tela tem 20pt de padding lateral aplicado uma única vez no wrapper — seções internas nunca repetem padding horizontal.',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

export const EscalaDeEspacamento: Story = {
  name: 'Escala de espaçamento',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
      {spacingScale.map((s) => (
        <div key={s.token} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: s.value,
              height: s.value,
              background: 'var(--color-green)',
              borderRadius: 6,
              margin: '0 auto 8px',
            }}
          />
          <div style={{ fontWeight: 700, fontSize: 13 }}>{s.value}pt</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-2)' }}>{s.usage}</div>
        </div>
      ))}
    </div>
  ),
};

export const RaiosDeCanto: Story = {
  name: 'Raios de canto',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {radiiScale.map((r) => (
        <div key={r.token} style={{ textAlign: 'center', width: 140 }}>
          <div
            style={{
              height: 70,
              background: 'var(--color-soft-entrada-saida)',
              border: '2px solid var(--color-green)',
              borderRadius: `var(${r.token})`,
              marginBottom: 8,
            }}
          />
          <div style={{ fontWeight: 700, fontSize: 13 }}>{r.value}</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-2)' }}>{r.usage}</div>
        </div>
      ))}
    </div>
  ),
};

export const Profundidade: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, padding: 16 }}>
      {elevationScale.map((e, i) => (
        <div key={e.name} style={{ textAlign: 'center', width: 180 }}>
          <div
            style={{
              height: 90,
              background: 'var(--color-surface)',
              borderRadius: 16,
              border: i === 0 ? '1px solid var(--color-line)' : 'none',
              boxShadow: i === 1 ? 'var(--elevation-1)' : i === 2 ? 'var(--elevation-2)' : 'none',
              marginBottom: 8,
            }}
          />
          <div style={{ fontWeight: 700, fontSize: 13 }}>{e.name}</div>
          <div style={{ fontSize: 11, color: 'var(--color-green)' }}>{e.value}</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-2)' }}>{e.usage}</div>
        </div>
      ))}
    </div>
  ),
};
