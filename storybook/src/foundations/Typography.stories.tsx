import type { Meta, StoryObj } from '@storybook/react-vite';
import { typographyScale } from '../tokens/tokens';

const meta: Meta = {
  title: 'Fundamentos/Tipografia',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Titillium Web em todo o produto — a mesma família do site da escola. Inter aparece só onde o texto é técnico e precisa de leitura caractere a caractere: relógio da status bar, código Pix, hexadecimais.',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

export const Escala: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {typographyScale.map((t) => (
        <div
          key={t.name}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
            padding: '20px 0',
            borderBottom: '1px solid var(--color-line)',
          }}
        >
          <span style={{ fontSize: t.size, fontWeight: t.weight, lineHeight: t.line }}>EasySchool</span>
          <div style={{ textAlign: 'right', minWidth: 260 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
            <div style={{ fontSize: 13, color: 'var(--color-green)', fontWeight: 600 }}>
              {t.size} / {t.weight} / {t.line}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-2)' }}>{t.usage}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Pesos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      {[
        { weight: 400, label: 'Regular · 400', usage: 'Corpo e leitura' },
        { weight: 600, label: 'SemiBold · 600', usage: 'Rótulos e ações' },
        { weight: 700, label: 'Bold · 700', usage: 'Títulos e valores' },
      ].map((w) => (
        <div key={w.weight} style={{ background: 'var(--color-bg)', border: '1px solid var(--color-line)', borderRadius: 16, padding: 20, flex: 1 }}>
          <div style={{ fontSize: 24, fontWeight: w.weight, marginBottom: 12 }}>Aa EasySchool</div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>{w.label}</div>
          <div style={{ fontSize: 12, color: 'var(--color-text-2)' }}>{w.usage}</div>
        </div>
      ))}
    </div>
  ),
};
