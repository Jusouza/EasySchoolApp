import './HeaderSegmented.css';

export interface HeaderSegmentedProps<T extends string> {
  options: { key: T; label: string }[];
  active: T;
  onChange: (key: T) => void;
}

export function HeaderSegmented<T extends string>({ options, active, onChange }: HeaderSegmentedProps<T>) {
  return (
    <div className="header-segmented">
      {options.map((o) => (
        <button
          key={o.key}
          className={`header-segmented__item ${o.key === active ? 'header-segmented__item--active' : ''}`}
          onClick={() => onChange(o.key)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
