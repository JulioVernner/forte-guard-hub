import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative h-9 w-9 rounded-md bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center ring-gold">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-foreground" fill="currentColor">
          <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
        </svg>
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold tracking-tight text-[15px]">Grupo Forte</span>
          <span className="font-display text-[11px] text-muted-foreground tracking-[0.18em] uppercase">
            Proteção
          </span>
        </div>
      )}
    </Link>
  );
}
