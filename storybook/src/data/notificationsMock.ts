import { Banknote, Building2, Apple, Grid2x2, Car, type LucideIcon } from 'lucide-react';

export type NotificationTarget =
  | { kind: 'clipPag' }
  | { kind: 'chat'; sector: string }
  | { kind: 'clips'; tab: 'mural' | 'sala' }
  | { kind: 'entradaSaida' };

export interface NotificationItem {
  id: number;
  group: 'Hoje' | 'Ontem';
  icon: LucideIcon;
  accent: string;
  soft: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
  target?: NotificationTarget;
}

export const notifications: NotificationItem[] = [
  {
    id: 1,
    group: 'Hoje',
    icon: Banknote,
    accent: 'var(--color-accent-clippag)',
    soft: 'var(--color-soft-clippag)',
    title: 'Boleto de agosto disponível',
    description: 'Mensalidade de agosto no valor de R$ 1.380,00 já está disponível para pagamento.',
    time: '08:05',
    unread: true,
    target: { kind: 'clipPag' },
  },
  {
    id: 2,
    group: 'Hoje',
    icon: Building2,
    accent: 'var(--color-accent-agenda)',
    soft: 'var(--color-soft-agenda)',
    title: 'Secretaria: cardápio atualizado',
    description: 'Confira o novo cardápio da semana, já publicado no Clips.',
    time: '08:12',
    unread: true,
    target: { kind: 'chat', sector: 'secretaria' },
  },
  {
    id: 3,
    group: 'Hoje',
    icon: Apple,
    accent: 'var(--color-accent-sala-de-aula)',
    soft: 'var(--color-soft-sala-de-aula)',
    title: 'Recado da Prof. Camila',
    description: 'O Miguel participou muito bem da roda de conversa hoje.',
    time: '14:20',
    unread: true,
    target: { kind: 'clips', tab: 'sala' },
  },
  {
    id: 4,
    group: 'Hoje',
    icon: Grid2x2,
    accent: 'var(--color-accent-clips)',
    soft: 'var(--color-soft-clips)',
    title: 'Nova publicação no mural',
    description: 'Coordenação EasySchool postou sobre a Festa da Família.',
    time: '14:20',
    unread: false,
    target: { kind: 'clips', tab: 'mural' },
  },
  {
    id: 5,
    group: 'Ontem',
    icon: Car,
    accent: 'var(--color-accent-entrada-saida)',
    soft: 'var(--color-soft-entrada-saida)',
    title: 'Miguel chegou à escola',
    description: 'Entrada registrada às 07:48 · Pai, Rafael Souza.',
    time: '07:48',
    unread: false,
    target: { kind: 'entradaSaida' },
  },
  {
    id: 6,
    group: 'Ontem',
    icon: Banknote,
    accent: 'var(--color-accent-clippag)',
    soft: 'var(--color-soft-clippag)',
    title: 'Pagamento confirmado',
    description: 'A mensalidade de julho foi confirmada. Obrigada!',
    time: '17:10',
    unread: false,
    target: { kind: 'clipPag' },
  },
];
