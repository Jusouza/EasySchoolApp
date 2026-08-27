import type { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import './ConfirmDialog.css';

export interface ConfirmDialogProps {
  title: string;
  description: string;
  actions: ReactNode;
}

/**
 * Só para ação irreversível ou perda de dados. Título é pergunta;
 * botões dizem o resultado, nunca "Sim/Não".
 */
export function ConfirmDialog({ title, description, actions }: ConfirmDialogProps) {
  return (
    <div className="confirm-dialog" role="alertdialog">
      <span className="confirm-dialog__icon">
        <AlertTriangle size={24} />
      </span>
      <div className="confirm-dialog__title">{title}</div>
      <div className="confirm-dialog__description">{description}</div>
      <div className="confirm-dialog__actions">{actions}</div>
    </div>
  );
}
