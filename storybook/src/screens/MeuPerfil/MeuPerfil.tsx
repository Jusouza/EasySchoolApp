import { useState } from 'react';
import { Camera, KeyRound, Check, Save } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { Avatar } from '../../components/Avatar/Avatar';
import { Field } from '../../components/Field/Field';
import { ListItem } from '../../components/ListItem/ListItem';
import { Button } from '../../components/Button/Button';
import './MeuPerfil.css';

const relationships = ['Mãe', 'Pai', 'Responsável'];

export interface MeuPerfilProps {
  onBack?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function MeuPerfil({ onBack, onPlaceholder }: MeuPerfilProps) {
  const [relationship, setRelationship] = useState('Mãe');
  const [saved, setSaved] = useState(false);

  return (
    <ScreenShell title="Meu perfil" subtitle="Dados pessoais" accent="var(--color-green)" onBack={onBack}>
      <div className="meu-perfil-avatar-row">
        <span className="meu-perfil-avatar-wrap">
          <Avatar size={60} />
          <button
            className="meu-perfil-avatar-edit"
            aria-label="Trocar foto"
            onClick={() => onPlaceholder?.('Trocar foto do perfil')}
          >
            <Camera size={14} />
          </button>
        </span>
        <span className="meu-perfil-avatar-hint">Juliana Souza</span>
      </div>

      <Field
        label="Nome completo"
        defaultValue="Juliana Souza"
        success
        onChange={() => setSaved(false)}
      />
      <Field
        label="E-mail"
        type="email"
        defaultValue="juliana.souza@email.com"
        success
        onChange={() => setSaved(false)}
      />
      <Field
        label="Telefone (WhatsApp)"
        defaultValue="(11) 98888-7777"
        success
        onChange={() => setSaved(false)}
      />

      <div>
        <div className="field__label" style={{ marginBottom: 6 }}>
          Parentesco com o aluno
        </div>
        <div className="meu-perfil-relationship">
          {relationships.map((r) => (
            <button
              key={r}
              className={`meu-perfil-relationship__option ${r === relationship ? 'meu-perfil-relationship__option--selected' : ''}`}
              onClick={() => {
                setRelationship(r);
                setSaved(false);
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <ListItem
        icon={<KeyRound size={18} />}
        title="Alterar senha"
        showChevron
        onClick={() => onPlaceholder?.('Alterar senha')}
      />

      {saved ? (
        <span className="meu-perfil-saved-hint">
          <Check size={16} /> Perfil atualizado!
        </span>
      ) : (
        <Button variant="primary" size="g" fullWidth icon={<Save size={18} />} onClick={() => setSaved(true)}>
          SALVAR ALTERAÇÕES
        </Button>
      )}
    </ScreenShell>
  );
}
