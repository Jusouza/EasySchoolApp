export type MarkerColor = 'eventos' | 'comunicados' | 'pedagogico';

export interface CalendarDay {
  day: number;
  markers?: MarkerColor[];
  selected?: boolean;
  today?: boolean;
}

// Agosto 2026 — dom a sáb, começando com célula vazia até o dia 1 (sábado)
export const calendarWeeks: (CalendarDay | null)[][] = [
  [null, null, null, null, null, null, { day: 1 }],
  [{ day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 }],
  [{ day: 9 }, { day: 10 }, { day: 11 }, { day: 12, selected: true }, { day: 13 }, { day: 14 }, { day: 15, markers: ['eventos'] }],
  [{ day: 16 }, { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }, { day: 22, today: true, markers: ['eventos', 'comunicados'] }],
  [{ day: 23 }, { day: 24 }, { day: 25 }, { day: 26, markers: ['comunicados'] }, { day: 27 }, { day: 28, markers: ['pedagogico'] }, { day: 29 }],
  [{ day: 30 }, { day: 31 }, null, null, null, null, null],
];

export const markerColor: Record<MarkerColor, string> = {
  eventos: 'var(--color-orange)',
  comunicados: 'var(--color-accent-agenda)',
  pedagogico: 'var(--color-accent-entrada-saida)',
};

export const selectedDayEvents = [
  {
    id: 1,
    title: 'Festa da Família',
    time: '9h às 12h · Pátio da escola',
    icon: '🎉',
    soft: 'var(--color-soft-clips)',
    fromClips: true,
  },
  {
    id: 2,
    title: 'Reunião de pais — Grupo 2F',
    time: '14h · Sala 3',
    icon: '👥',
    soft: 'var(--color-soft-agenda)',
    fromClips: true,
  },
];
