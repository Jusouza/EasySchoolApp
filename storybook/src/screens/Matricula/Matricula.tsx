import { useState } from 'react';
import { Check, RotateCcw, Paperclip, ArrowRight, Save } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { ProgressBlock } from '../../components/ProgressBar/ProgressBar';
import { Field } from '../../components/Field/Field';
import { SegmentedControl } from '../../components/SegmentedControl/SegmentedControl';
import { Button } from '../../components/Button/Button';
import { ConfirmDialog } from '../../components/ConfirmDialog/ConfirmDialog';
import './Matricula.css';

export interface MatriculaProps {
  onExit?: () => void;
  onDiscard?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function Matricula({ onExit, onDiscard, onPlaceholder }: MatriculaProps) {
  const [showDiscardDialog, setShowDiscardDialog] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <ScreenShell
        title="Matrícula 2027"
        subtitle="Etapa 2 de 4 · Dados do aluno"
        accent="var(--color-green)"
        onBack={() => setShowDiscardDialog(true)}
        headerAction={
          <span className="saved-tag">
            <Check size={14} /> Salvo
          </span>
        }
        headerExtra={
          <div className="matricula-header-extra">
            <ProgressBlock percent={50} stepLabel="50% preenchido" savedLabel="Rascunho salvo às 15:47" />
          </div>
        }
      >
        <div className="restore-banner">
          <RotateCcw size={16} style={{ flexShrink: 0, marginTop: 2 }} />
          <span>
            <strong>Continuamos de onde você parou</strong>
            <span>Rascunho de 09/08 restaurado automaticamente.</span>
          </span>
        </div>

        <Field label="Nome completo do aluno" defaultValue="Miguel Souza Ribeiro" success />
        <Field label="Data de nascimento" defaultValue="14/03/2021" success />
        <Field label="CPF do aluno" defaultValue="512.884.190-" autoFocus />
        <Field label="Certidão de nascimento" placeholder="Anexar arquivo (PDF ou foto)" icon={<Paperclip size={18} />} />
        <SegmentedControl label="Sexo" options={['Feminino', 'Masculino', 'Prefiro não informar']} defaultValue="Masculino" />
        <Field
          as="textarea"
          label="Alergias e restrições alimentares"
          defaultValue="Alergia a amendoim. Evitar castanhas no lanche."
        />

        <div className="matricula-footer">
          <Button variant="secondary" size="g" onClick={() => setShowDiscardDialog(true)}>
            Voltar
          </Button>
          <Button
            variant="primary"
            size="g"
            icon={<ArrowRight size={18} />}
            onClick={() => onPlaceholder?.('Matrícula 2027 · Etapa 3 de 4')}
          >
            CONTINUAR
          </Button>
        </div>
      </ScreenShell>

      {showDiscardDialog && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(42,35,32,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 44,
          }}
        >
          <ConfirmDialog
            title="Descartar alterações?"
            description="Você preencheu 3 campos que ainda não foram enviados. Podemos manter tudo salvo como rascunho para você continuar depois."
            actions={
              <>
                <Button variant="primary" fullWidth icon={<Save size={18} />} onClick={() => { setShowDiscardDialog(false); onExit?.(); }}>
                  MANTER RASCUNHO E SAIR
                </Button>
                <Button variant="secondary" fullWidth onClick={() => setShowDiscardDialog(false)}>
                  Continuar editando
                </Button>
                <Button
                  variant="text"
                  style={{ color: 'var(--color-danger)', alignSelf: 'center' }}
                  onClick={() => { setShowDiscardDialog(false); onDiscard?.(); }}
                >
                  Descartar alterações
                </Button>
              </>
            }
          />
        </div>
      )}
    </div>
  );
}
