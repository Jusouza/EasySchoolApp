import './HeaderTabs.css';

export interface HeaderTabsProps<T extends string> {
  options: { key: T; label: string }[];
  active: T;
  onChange: (key: T) => void;
}

export function HeaderTabs<T extends string>({ options, active, onChange }: HeaderTabsProps<T>) {
  return (
    <div className="header-tabs">
      {options.map((o) => (
        <button
          key={o.key}
          className={`header-tabs__item ${o.key === active ? 'header-tabs__item--active' : ''}`}
          onClick={() => onChange(o.key)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
