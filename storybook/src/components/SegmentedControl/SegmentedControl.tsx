import { useState } from 'react';
import './SegmentedControl.css';

export interface SegmentedControlProps {
  label?: string;
  options: string[];
  defaultValue?: string;
}

export function SegmentedControl({ label, options, defaultValue }: SegmentedControlProps) {
  const [value, setValue] = useState(defaultValue ?? options[0]);
  return (
    <div>
      {label && <div className="segmented__label">{label}</div>}
      <div className="segmented">
        {options.map((option) => (
          <button
            key={option}
            className={`segmented__option ${value === option ? 'segmented__option--selected' : ''}`}
            onClick={() => setValue(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
