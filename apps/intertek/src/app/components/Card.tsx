import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
}

export function Card({ children, className = '', hover = false, padding = 'p-5 md:p-6' }: CardProps) {
  return (
    <div
      className={`
        bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-2xl ${padding}
        ${hover ? 'hover:border-brand-blue/30 hover:-translate-y-0.5 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
