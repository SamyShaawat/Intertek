import { ReactNode } from 'react';

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="space-y-14 lg:space-y-20">{children}</div>
    </div>
  );
}
