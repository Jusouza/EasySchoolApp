import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import './Field.css';

interface BaseFieldProps {
  label: string;
  helper?: string;
  error?: string;
  icon?: ReactNode;
  success?: boolean;
  disabled?: boolean;
}

export interface FieldProps extends BaseFieldProps, InputHTMLAttributes<HTMLInputElement> {
  as?: 'input';
}

export interface TextAreaFieldProps extends BaseFieldProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: 'textarea';
}

export function Field(props: FieldProps | TextAreaFieldProps) {
  const { label, helper, error, icon, success, disabled, as = 'input', className, ...rest } = props;
  const stateClass = [error ? 'field--error' : '', disabled ? 'field--disabled' : ''].filter(Boolean).join(' ');

  return (
    <div className={['field', stateClass, className ?? ''].filter(Boolean).join(' ')}>
      <label className="field__label">{label}</label>
      <div className={`field__control ${as === 'textarea' ? 'field__control--textarea' : ''}`}>
        {icon && <span className="field__icon">{icon}</span>}
        {as === 'textarea' ? (
          <textarea
            className="field__input"
            disabled={disabled}
            rows={3}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input className="field__input" disabled={disabled} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
        )}
        {success && <CheckCircle2 size={18} className="field__status-icon--success" />}
        {error && <AlertTriangle size={18} className="field__status-icon--error" />}
      </div>
      {(helper || error) && (
        <span className={`field__helper ${error ? 'field__helper--error' : ''}`}>{error ?? helper}</span>
      )}
    </div>
  );
}
