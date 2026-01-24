import { memo } from 'react';

export interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = memo<LogoProps>(({ className = '', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cruz simple */}
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter">
        {/* Vertical */}
        <line x1="50" y1="15" x2="50" y2="85" />
        {/* Horizontal */}
        <line x1="25" y1="40" x2="75" y2="40" />
      </g>
    </svg>
  );
});

Logo.displayName = 'Logo';
