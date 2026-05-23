import { Reveal } from "./Reveal";

const cities = [
  { name: "São Paulo", x: 58, y: 70 },
  { name: "Rio de Janeiro", x: 65, y: 68 },
  { name: "Belo Horizonte", x: 62, y: 62 },
  { name: "Curitiba", x: 55, y: 76 },
  { name: "Porto Alegre", x: 52, y: 84 },
  { name: "Brasília", x: 55, y: 55 },
  { name: "Salvador", x: 72, y: 50 },
  { name: "Recife", x: 78, y: 42 },
  { name: "Fortaleza", x: 72, y: 35 },
  { name: "Manaus", x: 32, y: 36 },
  { name: "Goiânia", x: 52, y: 58 },
  { name: "Florianópolis", x: 56, y: 80 },
];

export function Coverage() {
  return (
    <section id="cobertura" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-14 items-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Cobertura nacional
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Onde sua operação estiver, nossa central está conectada.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Bases regionais, parceiros homologados e uma malha operacional integrada nos permitem
            atender clientes em todo o território nacional, com SLAs adaptados a cada criticidade.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { v: "87+", l: "Cidades" },
              { v: "12", l: "Estados" },
              { v: "24h", l: "SLA crítico" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-lg p-4">
                <div className="font-display text-2xl font-bold text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative glass-strong rounded-2xl p-6 aspect-[4/5] md:aspect-[4/4]">
            <svg viewBox="0 0 100 100" className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]">
              <defs>
                <radialGradient id="cov" cx="55%" cy="55%">
                  <stop offset="0%" stopColor="oklch(0.82 0.14 82 / 0.18)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="100" height="100" fill="url(#cov)" />
              {/* Brazil silhouette (rough) */}
              <path
                d="M 30 30 L 50 25 L 65 28 L 78 35 L 80 50 L 70 70 L 60 82 L 48 86 L 40 80 L 33 70 L 28 55 Z"
                fill="oklch(0.82 0.14 82 / 0.05)"
                stroke="oklch(0.82 0.14 82 / 0.35)"
                strokeWidth="0.4"
                strokeDasharray="1 1"
              />
              {/* Connection lines */}
              {cities.slice(1).map((c, i) => (
                <line
                  key={i}
                  x1={cities[0].x}
                  y1={cities[0].y}
                  x2={c.x}
                  y2={c.y}
                  stroke="oklch(0.82 0.14 82 / 0.18)"
                  strokeWidth="0.2"
                />
              ))}
              {cities.map((c, i) => (
                <g key={c.name}>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r="1.4"
                    fill="oklch(0.82 0.22 148)"
                    style={{ animation: `pulse-glow 2.4s ease-in-out ${i * 0.15}s infinite` }}
                  />
                  <circle cx={c.x} cy={c.y} r="0.6" fill="white" />
                </g>
              ))}
            </svg>
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-x-4 gap-y-1 text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
              {cities.slice(0, 6).map((c) => (
                <span key={c.name}>● {c.name}</span>
              ))}
              <span>+ {cities.length} pontos ativos</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
