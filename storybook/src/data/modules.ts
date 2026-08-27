import { Grid2x2, MessageSquare, Calendar, Backpack, Car, Wallet } from 'lucide-react';
import type { ModuleName } from '../tokens/tokens';

export interface ModuleDef {
  key: ModuleName;
  title: string;
  description: string;
  icon: typeof Grid2x2;
  accent: string;
  soft: string;
  unread?: number;
}

export const modules: ModuleDef[] = [
  { key: 'clips', title: 'Clips', description: 'Mural da escola em fotos', icon: Grid2x2, accent: 'var(--color-accent-clips)', soft: 'var(--color-soft-clips)', unread: 2 },
  { key: 'agenda', title: 'Agenda de Recados', description: 'Fale com a escola', icon: MessageSquare, accent: 'var(--color-accent-agenda)', soft: 'var(--color-soft-agenda)', unread: 1 },
  { key: 'calendario', title: 'Calendário', description: 'Eventos e datas', icon: Calendar, accent: 'var(--color-accent-calendario)', soft: 'var(--color-soft-calendario)' },
  { key: 'salaDeAula', title: 'Sala de Aula', description: 'Rotina pedagógica', icon: Backpack, accent: 'var(--color-accent-sala-de-aula)', soft: 'var(--color-soft-sala-de-aula)', unread: 4 },
  { key: 'entradaSaida', title: 'Entrada e Saída', description: 'Chegada e autorizações', icon: Car, accent: 'var(--color-accent-entrada-saida)', soft: 'var(--color-soft-entrada-saida)' },
  { key: 'clipPag', title: 'ClipPag', description: 'Boletos e loja', icon: Wallet, accent: 'var(--color-accent-clippag)', soft: 'var(--color-soft-clippag)', unread: 2 },
];

export const student = {
  name: 'Miguel Souza',
  group: 'Grupo 2F · Infantil II',
  groupShort: 'Miguel Souza · Grupo 2F',
};
