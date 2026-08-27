export type ModuleName =
  | 'clips'
  | 'agenda'
  | 'calendario'
  | 'salaDeAula'
  | 'entradaSaida'
  | 'clipPag';

export interface ModuleAccent {
  name: ModuleName;
  label: string;
  accent: string;
  accentHex: string;
  soft: string;
  softHex: string;
}

export const moduleAccents: ModuleAccent[] = [
  { name: 'clips', label: 'Clips', accent: 'var(--color-accent-clips)', accentHex: '#E8531C', soft: 'var(--color-soft-clips)', softHex: '#FAE9E0' },
  { name: 'agenda', label: 'Agenda de Recados', accent: 'var(--color-accent-agenda)', accentHex: '#3D9BD8', soft: 'var(--color-soft-agenda)', softHex: '#E5F1FB' },
  { name: 'calendario', label: 'Calendário', accent: 'var(--color-accent-calendario)', accentHex: '#7C5CBF', soft: 'var(--color-soft-calendario)', softHex: '#EFEAFA' },
  { name: 'salaDeAula', label: 'Sala de Aula', accent: 'var(--color-accent-sala-de-aula)', accentHex: '#E0447C', soft: 'var(--color-soft-sala-de-aula)', softHex: '#FCE7EF' },
  { name: 'entradaSaida', label: 'Entrada e Saída', accent: 'var(--color-accent-entrada-saida)', accentHex: '#017336', soft: 'var(--color-soft-entrada-saida)', softHex: '#E4F2E9' },
  { name: 'clipPag', label: 'ClipPag', accent: 'var(--color-accent-clippag)', accentHex: '#F5B21B', soft: 'var(--color-soft-clippag)', softHex: '#FEF3DC' },
];

export const brandColors = [
  { name: '$green', hex: '#017336', usage: 'Verde institucional · headers, CTAs' },
  { name: '$green-dark', hex: '#015A2A', usage: 'Pressionado / hover do verde' },
  { name: '$orange', hex: '#E8531C', usage: 'Laranja de ação · CTAs secundários, badges' },
  { name: '$yellow', hex: '#F5B21B', usage: 'Destaque lúdico · logo, progresso' },
];

export const surfaceColors = [
  { name: '$bg', hex: '#FBF7F2', usage: 'Fundo das telas' },
  { name: '$surface', hex: '#FFFFFF', usage: 'Cards e barras' },
  { name: '$line', hex: '#EBE3DA', usage: 'Bordas e divisores' },
  { name: '$text', hex: '#2A2320', usage: 'Texto principal' },
  { name: '$text-2', hex: '#6E645D', usage: 'Texto de apoio' },
  { name: '$text-3', hex: '#A79C94', usage: 'Texto desabilitado / placeholder' },
];

export const feedbackColors = [
  { name: '$success', hex: '#12A150', usage: 'Confirmações, pago' },
  { name: '$danger', hex: '#D83A2E', usage: 'Erros, apagar conta' },
  { name: '$orange', hex: '#E8531C', usage: 'Pendente / expira em' },
  { name: '$whatsapp', hex: '#25D366', usage: 'Atalho de WhatsApp' },
];

export const typographyScale = [
  { name: 'Display', size: 30, weight: 700, line: 1.1, usage: 'Valores em destaque: saldo do ClipPag, total do carrinho' },
  { name: 'Título de tela', size: 20, weight: 700, line: 1.2, usage: 'Um por tela, sempre no header. Nunca varia de tamanho entre telas' },
  { name: 'Saudação', size: 26, weight: 700, line: 1.2, usage: 'Exclusivo da Home' },
  { name: 'Título de seção', size: 17, weight: 700, line: 1.3, usage: 'Agrupa blocos dentro da tela' },
  { name: 'Título de card', size: 15, weight: 700, line: 1.25, usage: 'Nome do módulo, do produto, da cobrança' },
  { name: 'Corpo', size: 14, weight: 400, line: 1.45, usage: 'Texto padrão de leitura, posts e descrições' },
  { name: 'Corpo forte', size: 14, weight: 600, line: 1.4, usage: 'Rótulos de ação e itens de lista' },
  { name: 'Apoio', size: 13, weight: 400, line: 1.4, usage: 'Subtítulos, mensagens de chat' },
  { name: 'Legenda', size: 12, weight: 400, line: 1.35, usage: 'Metadados, rótulos de campo' },
  { name: 'Micro', size: 11, weight: 600, line: 1.3, usage: 'Tags, badges, selos — sempre em caixa normal' },
];

export const spacingScale = [
  { token: '--space-1', value: 4, usage: 'Rótulo e valor' },
  { token: '--space-2', value: 8, usage: 'Ícone e texto' },
  { token: '--space-3', value: 12, usage: 'Entre cards' },
  { token: '--space-4', value: 16, usage: 'Padding de card' },
  { token: '--space-5', value: 20, usage: 'Padding da tela' },
  { token: '--space-6', value: 24, usage: 'Entre blocos' },
  { token: '--space-7', value: 32, usage: 'Entre seções' },
];

export const radiiScale = [
  { token: '--radius-sm', value: '10pt', usage: 'Chips e tags' },
  { token: '--radius-field', value: '14pt', usage: 'Campos e badges' },
  { token: '--radius-md', value: '16pt', usage: 'Blocos internos' },
  { token: '--radius-card', value: '20pt', usage: 'Cards e módulos' },
  { token: '--radius-header', value: '26pt', usage: 'Header e bottom sheet' },
  { token: '--radius-pill', value: 'pílula', usage: 'Pílula: botões e tab bar' },
];

export const elevationScale = [
  { name: 'Nível 0', value: 'Sem sombra · borda $line 1pt', usage: 'Cards, listas e campos. Padrão do produto.' },
  { name: 'Nível 1', value: '0 / 6 / 20 · #2A2320 8%', usage: 'Tab bar flutuante e barras fixas.' },
  { name: 'Nível 2', value: '0 / 8 / 24 · #2A2320 25%', usage: 'Toast, diálogo e bottom sheet.' },
];

export const iconSizes = [
  { size: 13, usage: 'Dentro de tag ou badge' },
  { size: 17, usage: 'Inline com texto e campos' },
  { size: 20, usage: 'Ação em lista e cartões' },
  { size: 22, usage: 'Tab bar' },
  { size: 24, usage: 'Header da tela' },
  { size: 26, usage: 'Módulo na Home' },
];
