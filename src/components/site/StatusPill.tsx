export function StatusPill({ label = "Central de Operações Online 24h" }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5 text-xs font-medium">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-online opacity-60 animate-pulse-glow" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-online" />
      </span>
      <span className="text-foreground/85 tracking-wide">{label}</span>
    </div>
  );
}
