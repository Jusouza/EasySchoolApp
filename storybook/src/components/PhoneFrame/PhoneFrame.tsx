import type { ReactNode } from 'react';
import './PhoneFrame.css';

export interface PhoneFrameProps {
  header?: ReactNode;
  statusBar?: ReactNode;
  tabBar?: ReactNode;
  children: ReactNode;
}

export function PhoneFrame({ header, statusBar, tabBar, children }: PhoneFrameProps) {
  return (
    <div className="phone-frame">
      {statusBar}
      {header}
      <div className="phone-frame__content">{children}</div>
      {tabBar && <div className="phone-frame__tabbar">{tabBar}</div>}
    </div>
  );
}
