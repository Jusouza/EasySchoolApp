import './ProgressBar.css';

export interface ProgressBarProps {
  percent: number;
}

export function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <span className="progress-bar__fill" style={{ width: `${percent}%` }} />
    </div>
  );
}

export interface ProgressBlockProps {
  percent: number;
  stepLabel: string;
  savedLabel: string;
}

/** Formulário longo = salvar por etapa e permitir retomar na etapa exata. */
export function ProgressBlock({ percent, stepLabel, savedLabel }: ProgressBlockProps) {
  return (
    <div className="progress-bar-block">
      <ProgressBar percent={percent} />
      <div className="progress-bar-block__row">
        <strong>{stepLabel}</strong>
        <span>{savedLabel}</span>
      </div>
    </div>
  );
}
