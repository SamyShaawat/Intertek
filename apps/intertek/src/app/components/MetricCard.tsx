import { Card } from '@heroui/react';

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card variant="bordered" className="rounded-xl border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-4xl font-black tracking-tight text-brand-navy">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</p>
    </Card>
  );
}
