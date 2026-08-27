export const dateChips = ['Hoje', '11 ago', '10 ago', '7 ago'];
export const categoryChips = ['Todos', 'Eventos e Reuniões', 'Comunicados'];

export const posts = [
  {
    id: 1,
    authorName: 'Coordenação EasySchool',
    time: 'Hoje · 14:20',
    category: 'Eventos',
    text: 'Nossa Festa da Família chegou! 🎉 Dia 22/08, das 9h às 12h, no pátio da escola. Já marcamos no seu calendário — toque para ver os detalhes.',
    hasMedia: true,
    likes: 28,
    savedToCalendar: true,
  },
  {
    id: 2,
    authorName: 'Secretaria',
    time: 'Hoje · 08:05',
    category: 'Comunicados',
    text: 'Cardápio da semana já disponível. Confira as refeições de segunda a sexta.',
    hasMedia: true,
    likes: 9,
    savedToCalendar: false,
  },
];

export const classTimeline = [
  { time: '08:10', title: 'Acolhida e roda de conversa', kind: 'sun' },
  { time: '09:30', title: 'Atividade: pintura com as mãos', kind: 'art' },
  { time: '10:15', title: 'Lanche da manhã', kind: 'food' },
  { time: '11:00', title: 'Parque e brincadeiras livres', kind: 'play' },
  { time: '12:00', title: 'Almoço e higiene', kind: 'food' },
] as const;

export const classStats = {
  alimentacao: 'Comeu tudo',
  sono: '1h20',
  humor: 'Alegre',
};

export const classNote = {
  author: 'Prof. Camila',
  text: 'O Miguel participou muito bem da roda de conversa hoje. Lembrar de enviar a troca de roupa amanhã 🤍',
};
