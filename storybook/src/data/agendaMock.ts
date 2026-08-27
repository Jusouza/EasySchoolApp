import { Building2, GraduationCap, Banknote, Apple, type LucideIcon } from 'lucide-react';

export interface Sector {
  key: string;
  name: string;
  description: string;
  lastMessage: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
  unread?: number;
  respondsIn: string;
}

export const sectors: Sector[] = [
  {
    key: 'secretaria',
    name: 'Secretaria',
    description: 'Documentos e declarações',
    lastMessage: 'Cardápio atualizado enviado',
    icon: Building2,
    accent: 'var(--color-accent-agenda)',
    soft: 'var(--color-soft-agenda)',
    unread: 2,
    respondsIn: 'Responde em até 1 dia útil',
  },
  {
    key: 'coordenacao',
    name: 'Coordenação',
    description: 'Assuntos pedagógicos',
    lastMessage: 'Você: Obrigada pelo retorno!',
    icon: GraduationCap,
    accent: 'var(--color-accent-calendario)',
    soft: 'var(--color-soft-calendario)',
    respondsIn: 'Responde em até 1 dia útil',
  },
  {
    key: 'financeiro',
    name: 'Financeiro',
    description: 'Mensalidades, boletos e uniformes',
    lastMessage: 'Boleto de agosto disponível',
    icon: Banknote,
    accent: 'var(--color-accent-clippag)',
    soft: 'var(--color-soft-clippag)',
    unread: 1,
    respondsIn: 'Responde em até 1 dia útil',
  },
  {
    key: 'professores',
    name: 'Professores',
    description: 'Prof. Camila · Grupo 2F',
    lastMessage: 'Toque para começar uma conversa',
    icon: Apple,
    accent: 'var(--color-accent-sala-de-aula)',
    soft: 'var(--color-soft-sala-de-aula)',
    respondsIn: 'Responde em até 1 dia útil',
  },
];

export interface ChatMessage {
  from: 'me' | 'them';
  text: string;
  time: string;
}

export const chatMessages: ChatMessage[] = [
  { from: 'them', text: 'Bom dia, Juliana! O cardápio da semana já está no Clips 😊', time: '08:12' },
  { from: 'me', text: 'Bom dia! Obrigada. Consigo a declaração de matrícula ainda hoje?', time: '08:30' },
  { from: 'them', text: 'Claro! Deixamos pronta na recepção até as 15h.', time: '08:41' },
];
