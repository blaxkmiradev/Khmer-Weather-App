import React from 'react';

interface IconProps {
  className?: string;
}

export const Sun: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const Cloud: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.4-1.9-4.3-4.3-4.5A7 7 0 105 15h.5" />
  </svg>
);

export const CloudRain: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 13a4 4 0 00-8 0" />
    <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25" />
    <path d="M8 19v2M12 21v2M16 19v2" />
  </svg>
);

export const CloudLightning: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
    <path d="M13 11l-4 6h6l-4 6" />
  </svg>
);

export const CloudSnow: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
    <path d="M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01" />
  </svg>
);

export const CloudDrizzle: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 19v2M8 13v2M12 21v2M12 15v2M16 19v2M16 13v2" />
    <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25" />
  </svg>
);

export const Mist: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 10h16M4 14h16M4 18h16M4 6h16" />
  </svg>
);

export const Wind: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.7 7.7A2.5 2.5 0 1115 5h-1M21 12H3M21 17H11a2.5 2.5 0 102.5 2.5" />
  </svg>
);

export const Droplets: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 16.3c2.2 0 4-1.8 4-4 0-3.3-4.5-8.8-4.5-8.8S2 9 2 12.3c0 2.2 1.8 4 4 4zM17.5 22c2.5 0 4.5-2 4.5-4.5 0-3.7-5.1-9.9-5.1-9.9S11.8 13.8 11.8 17.5c0 2.5 2 4.5 4.5 4.5z" />
  </svg>
);

export const Gauge: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </svg>
);

export const Eye: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
