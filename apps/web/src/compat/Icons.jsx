import React from 'react';

function Icon({ className = '', strokeWidth = 1.8 }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>;
}

export const Mail = Icon;
export const Phone = Icon;
export const ArrowUp = Icon;
export const FileText = Icon;
export const ShieldCheck = Icon;

