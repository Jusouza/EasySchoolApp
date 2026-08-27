import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid2x2, MessageSquare, Calendar, Backpack, Car, Wallet } from 'lucide-react';
import { ModuleCard } from './ModuleCard';

const meta: Meta<typeof ModuleCard> = {
  title: 'Conteúdo/ModuloCard (C/ModuloCard)',
  component: ModuleCard,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof ModuleCard>;

export const Grade: Story = {
  name: 'Grade da Home',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gap: 12 }}>
      <ModuleCard icon={<Grid2x2 size={26} />} accent="var(--color-accent-clips)" soft="var(--color-soft-clips)" title="Clips" description="Mural da escola em fotos" unread={2} />
      <ModuleCard icon={<MessageSquare size={26} />} accent="var(--color-accent-agenda)" soft="var(--color-soft-agenda)" title="Agenda de Recados" description="Fale com a escola" unread={1} />
      <ModuleCard icon={<Calendar size={26} />} accent="var(--color-accent-calendario)" soft="var(--color-soft-calendario)" title="Calendário" description="Eventos e datas" />
      <ModuleCard icon={<Backpack size={26} />} accent="var(--color-accent-sala-de-aula)" soft="var(--color-soft-sala-de-aula)" title="Sala de Aula" description="Rotina pedagógica" unread={4} />
      <ModuleCard icon={<Car size={26} />} accent="var(--color-accent-entrada-saida)" soft="var(--color-soft-entrada-saida)" title="Entrada e Saída" description="Chegada e autorizações" />
      <ModuleCard icon={<Wallet size={26} />} accent="var(--color-accent-clippag)" soft="var(--color-soft-clippag)" title="ClipPag" description="Boletos e loja" unread={2} />
    </div>
  ),
};
