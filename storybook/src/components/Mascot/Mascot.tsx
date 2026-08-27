export interface MascotProps {
  size?: number;
}

/** Personagem da marca. Aparece só em estado vazio, sucesso e onboarding. */
export function Mascot({ size = 120 }: MascotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="16" r="4" fill="var(--color-orange)" />
      <line x1="60" y1="20" x2="60" y2="30" stroke="var(--color-green)" strokeWidth="3" />
      <rect x="28" y="30" width="64" height="46" rx="20" fill="var(--color-soft-entrada-saida)" stroke="var(--color-green)" strokeWidth="3" />
      <circle cx="46" cy="52" r="5" fill="var(--color-green)" />
      <circle cx="74" cy="52" r="5" fill="var(--color-green)" />
      <circle cx="40" cy="62" r="4" fill="#F7C6C6" opacity="0.7" />
      <circle cx="80" cy="62" r="4" fill="#F7C6C6" opacity="0.7" />
      <path d="M50 62 Q60 70 70 62" stroke="var(--color-green)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="14" y="46" width="8" height="18" rx="4" fill="var(--color-soft-entrada-saida)" stroke="var(--color-green)" strokeWidth="3" />
      <rect x="98" y="46" width="8" height="18" rx="4" fill="var(--color-soft-entrada-saida)" stroke="var(--color-green)" strokeWidth="3" />
      <rect x="38" y="82" width="44" height="30" rx="14" fill="var(--color-soft-entrada-saida)" stroke="var(--color-green)" strokeWidth="3" />
      <rect x="52" y="94" width="16" height="4" rx="2" fill="var(--color-green)" />
    </svg>
  );
}
