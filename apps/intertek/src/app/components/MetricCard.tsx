import { Card, CardBody } from '@heroui/react';

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card shadow="sm" className="rounded-xl border border-slate-200 bg-white">
      <CardBody className="p-6">
        <p className="text-4xl font-black tracking-tight text-brand-navy">{value}</p>
        <div className="mt-2 h-[2px] w-8 rounded-full bg-brand-red" />
        <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      </CardBody>
    </Card>
  );
}
