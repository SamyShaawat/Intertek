import { ReactNode } from 'react';

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8 md:space-y-12 max-w-7xl mx-auto">
      {children}
    </div>
  );
}
