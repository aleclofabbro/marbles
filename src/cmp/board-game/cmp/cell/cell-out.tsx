import React from 'react';
import './Cell.css'
export const CellOutCmp: React.FC = ({ children }) =>
  <div className={`cell`}>
    {children}
  </div>
