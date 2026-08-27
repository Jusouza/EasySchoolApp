import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgendaList } from './AgendaList';
import { Chat } from './Chat';

const metaList: Meta<typeof AgendaList> = {
  title: 'Telas/Agenda de Recados',
  component: AgendaList,
  parameters: { layout: 'centered' },
};
export default metaList;
type Story = StoryObj<typeof AgendaList>;

export const ListaDeConversas: Story = { name: 'Lista de conversas' };

export const ChatSecretaria: StoryObj<typeof Chat> = {
  name: 'Chat · Secretaria',
  render: () => <Chat sectorKey="secretaria" />,
};
