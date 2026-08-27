import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { brandColors, surfaceColors, feedbackColors, moduleAccents } from '../tokens/tokens';

const meta: Meta = {
  title: 'Fundamentos/Cores',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Paleta extraída da identidade da EasySchool. Cada módulo tem um par accent + soft: o accent pinta ícones, botões e destaques; o soft é sempre o fundo. Nunca use accent como fundo de texto longo.',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

function Swatch({ name, hex, usage }: { name: string; hex: string; usage: string }) {
  return (
    <div style={{ width: 200 }}>
      <div style={{ height: 64, borderRadius: 14, background: hex, marginBottom: 8 }} />
      <div style={{ fontWeight: 700, fontSize: 14 }}>{name}</div>
      <div style={{ fontSize: 12, color: 'var(--color-text-2)' }}>{hex}</div>
      <div style={{ fontSize: 12, color: 'var(--color-text-2)', marginTop: 4 }}>{usage}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 0.5, color: 'var(--color-text-2)', marginBottom: 12 }}>
        {title}
      </h3>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>{children}</div>
    </section>
  );
}

export const Marca: Story = {
  render: () => (
    <Section title="Marca">
      {brandColors.map((c) => (
        <Swatch key={c.name} {...c} />
      ))}
    </Section>
  ),
};

export const AccentsPorModulo: Story = {
  name: 'Accents por módulo',
  render: () => (
    <Section title="Accents por módulo">
      {moduleAccents.map((m) => (
        <Swatch key={m.name} name={m.label} hex={m.accentHex} usage={m.label} />
      ))}
    </Section>
  ),
};

export const FundosSoft: Story = {
  name: 'Fundos soft',
  render: () => (
    <Section title="Fundos soft (par de cada accent)">
      {moduleAccents.map((m) => (
        <div key={m.name} style={{ width: 200 }}>
          <div
            style={{
              height: 64,
              borderRadius: 14,
              background: m.soft,
              marginBottom: 8,
              border: '1px solid var(--color-line)',
            }}
          />
          <div style={{ fontWeight: 700, fontSize: 14 }}>{`$${m.name}-soft`}</div>
          <div style={{ fontSize: 12, color: 'var(--color-text-2)' }}>{m.softHex}</div>
          <div style={{ fontSize: 12, color: 'var(--color-text-2)' }}>{m.label}</div>
        </div>
      ))}
    </Section>
  ),
};

export const SuperficiesETexto: Story = {
  name: 'Superfícies e texto',
  render: () => (
    <Section title="Superfícies e texto">
      {surfaceColors.map((c) => (
        <Swatch key={c.name} {...c} />
      ))}
    </Section>
  ),
};

export const Feedback: Story = {
  render: () => (
    <Section title="Feedback">
      {feedbackColors.map((c) => (
        <Swatch key={c.name} {...c} />
      ))}
    </Section>
  ),
};
