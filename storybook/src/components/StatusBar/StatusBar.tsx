import { Signal, Wifi, BatteryFull } from 'lucide-react';
import './StatusBar.css';

export interface StatusBarProps {
  time?: string;
  light?: boolean;
}

export function StatusBar({ time = '9:41', light = false }: StatusBarProps) {
  return (
    <div className="status-bar" style={{ color: light ? '#ffffff' : 'var(--color-text)' }}>
      <span>{time}</span>
      <span className="status-bar__icons">
        <Signal size={17} />
        <Wifi size={17} />
        <BatteryFull size={20} />
      </span>
    </div>
  );
}
