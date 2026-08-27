import { ScreenShell } from '../ScreenShell';
import { EmptyState } from '../../components/EmptyState/EmptyState';

export interface PlaceholderProps {
  title: string;
  onBack?: () => void;
}

/**
 * Destino genérico para ações que ainda não têm tela própria desenhada no
 * PDF de referência (ex.: Notificações, Ajuda e suporte). Existe para que
 * nenhum botão do protótipo fique sem reação ao toque.
 */
export function Placeholder({ title, onBack }: PlaceholderProps) {
  return (
    <ScreenShell title={title} neutral onBack={onBack}>
      <EmptyState
        title="Em breve"
        description={`"${title}" ainda não foi desenhada neste protótipo — só as telas do PDF de referência estão implementadas.`}
      />
    </ScreenShell>
  );
}
