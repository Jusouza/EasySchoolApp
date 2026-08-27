import { useState } from 'react';
import { HelpCircle, Timer, Copy, Check, Bell, RotateCw } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { Button } from '../../components/Button/Button';
import { FakeQrCode } from '../../components/FakeQrCode/FakeQrCode';
import './PagamentoPix.css';

const PIX_CODE =
  '00020126580014BR.GOV.BCB.PIX0138easyschool@escola.com.br5204000053039865802BR5917ESCOLA EASYSCHOOL6009SAO PAULO62070503***6304A1B2';

export interface PagamentoPixProps {
  onBack?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function PagamentoPix({ onBack, onPlaceholder }: PagamentoPixProps) {
  const [copied, setCopied] = useState(false);
  const [qrSeed, setQrSeed] = useState(42);

  return (
    <ScreenShell
      title="Pagamento Pix"
      accent="var(--color-green)"
      onBack={onBack}
      headerAction={
        <button className="app-header__action" aria-label="Ajuda" onClick={() => onPlaceholder?.('Ajuda com o pagamento')}>
          <HelpCircle size={20} />
        </button>
      }
    >
      <span className="pix-status-pill">
        <span className="pix-status-pill__dot" /> Aguardando pagamento
      </span>

      <div className="pix-card">
        <span className="pix-card__order">Pedido #UNI-20260812-0143</span>
        <span className="pix-card__amount">R$ 359,60</span>
        <span className="pix-card__qr">
          <FakeQrCode size={200} seed={qrSeed} />
        </span>
        <span className="pix-card__timer">
          <Timer size={14} /> Este código expira em 29:47
        </span>
      </div>

      <div className="pix-copy-box">
        <div className="pix-copy-box__label">Ou use o Pix copia e cola</div>
        <div className="pix-copy-box__code">{PIX_CODE}</div>
        <Button
          variant="primary"
          fullWidth
          icon={copied ? <Check size={18} /> : <Copy size={18} />}
          iconPosition="left"
          onClick={() => setCopied(true)}
        >
          {copied ? 'Copiado!' : 'COPIAR CÓDIGO PIX'}
        </Button>
      </div>

      <div className="pix-push-hint">
        <Bell size={16} />
        Avisaremos por notificação assim que o pagamento for confirmado.
      </div>

      <Button
        variant="text"
        icon={<RotateCw size={14} />}
        iconPosition="left"
        style={{ alignSelf: 'center' }}
        onClick={() => {
          setQrSeed((s) => s + 1);
          setCopied(false);
        }}
      >
        Gerar novo código
      </Button>
    </ScreenShell>
  );
}
