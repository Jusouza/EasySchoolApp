import { useState } from 'react';
import {
  X,
  User,
  Users,
  FileEdit,
  Bell,
  Smartphone,
  Shirt,
  CircleHelp,
  FileText,
  LogOut,
  Trash2,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../../components/SocialIcons/SocialIcons';
import { Avatar } from '../../components/Avatar/Avatar';
import { TagStatus } from '../../components/TagStatus/TagStatus';
import { StatusBar } from '../../components/StatusBar/StatusBar';
import { ConfirmDialog } from '../../components/ConfirmDialog/ConfirmDialog';
import { Button } from '../../components/Button/Button';
import './Perfil.css';

export interface PerfilProps {
  onClose?: () => void;
  onOpenMatricula?: () => void;
  onOpenLoja?: () => void;
  onOpenNotifications?: () => void;
  onOpenMeuPerfil?: () => void;
  onLogout?: () => void;
  onDeleteAccount?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function Perfil({
  onClose,
  onOpenMatricula,
  onOpenLoja,
  onOpenNotifications,
  onOpenMeuPerfil,
  onLogout,
  onDeleteAccount,
  onPlaceholder,
}: PerfilProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <div className="perfil-screen" style={{ position: 'relative' }}>
      <div className="perfil-header">
        <StatusBar light />
        <button className="perfil-close" onClick={onClose} aria-label="Fechar menu">
          <X size={20} />
        </button>
        <Avatar size={60} icon={<User size={26} />} />
        <div className="perfil-name">Juliana Souza</div>
        <div className="perfil-email">juliana.souza@email.com</div>
      </div>

      <div className="perfil-list">
        <button className="perfil-item" onClick={onOpenMeuPerfil}>
          <User size={20} /> Meu perfil
        </button>
        <button className="perfil-item" onClick={() => onPlaceholder?.('Meus filhos')}>
          <Users size={20} /> Meus filhos
        </button>
        <button className="perfil-item" onClick={onOpenMatricula}>
          <FileEdit size={20} /> Matrícula 2027
          <span className="perfil-item__trailing">
            <TagStatus tone="rascunho">Rascunho</TagStatus>
          </span>
        </button>
        <button className="perfil-item" onClick={onOpenNotifications}>
          <Bell size={20} /> Notificações
        </button>
        <button className="perfil-item" onClick={() => onPlaceholder?.('Autorizar outros aparelhos')}>
          <Smartphone size={20} /> Autorizar outros aparelhos
        </button>
        <button className="perfil-item" onClick={onOpenLoja}>
          <Shirt size={20} /> Loja de uniformes
        </button>
        <button className="perfil-item" onClick={() => onPlaceholder?.('Ajuda e suporte')}>
          <CircleHelp size={20} /> Ajuda e suporte
        </button>
        <button className="perfil-item" onClick={() => onPlaceholder?.('Termos e privacidade')}>
          <FileText size={20} /> Termos e privacidade
        </button>

        <div className="perfil-divider" />

        <button className="perfil-item perfil-item--danger" onClick={onLogout}>
          <LogOut size={20} /> Sair da conta
        </button>
        <button className="perfil-item perfil-item--danger" onClick={() => setShowDeleteDialog(true)}>
          <Trash2 size={20} /> Apagar minha conta
        </button>

        <div className="perfil-divider" />

        <div className="perfil-social">
          Siga a EasySchool
          <span className="perfil-social__icons">
            <button aria-label="Instagram" onClick={() => onPlaceholder?.('Instagram da EasySchool')}>
              <InstagramIcon size={20} />
            </button>
            <button aria-label="Facebook" onClick={() => onPlaceholder?.('Facebook da EasySchool')}>
              <FacebookIcon size={20} />
            </button>
          </span>
        </div>
      </div>

      {showDeleteDialog && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(42,35,32,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ConfirmDialog
            title="Apagar sua conta?"
            description="Essa ação não pode ser desfeita. Todos os seus dados, filhos vinculados e histórico serão removidos permanentemente."
            actions={
              <>
                <Button variant="destructive" fullWidth icon={<Trash2 size={18} />} onClick={() => { setShowDeleteDialog(false); onDeleteAccount?.(); }}>
                  APAGAR MINHA CONTA
                </Button>
                <Button variant="secondary" fullWidth onClick={() => setShowDeleteDialog(false)}>
                  Cancelar
                </Button>
              </>
            }
          />
        </div>
      )}
    </div>
  );
}
