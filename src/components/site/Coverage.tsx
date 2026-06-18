import { Reveal } from "./Reveal";

// Pernambuco — stylized horizontal silhouette in a 0 0 100 50 viewBox.
// Cities placed approximately by mesorregião (Sertão → Agreste → Zona da Mata → RMR).
const cities = [
  { name: "Recife", x: 94, y: 28, hub: true },
  { name: "Olinda", x: 93, y: 25 },
  { name: "Jaboatão dos Guararapes", x: 92, y: 31 },
  { name: "Paulista", x: 93, y: 22 },
  { name: "Cabo de Santo Agostinho", x: 90, y: 34 },
  { name: "Igarassu", x: 91, y: 20 },
  { name: "Goiana", x: 89, y: 17 },
  { name: "Vitória de Santo Antão", x: 84, y: 28 },
  { name: "Gravatá", x: 78, y: 29 },
  { name: "Caruaru", x: 72, y: 30 },
  { name: "Garanhuns", x: 66, y: 38 },
  { name: "Arcoverde", x: 55, y: 32 },
  { name: "Serra Talhada", x: 38, y: 24 },
  { name: "Salgueiro", x: 25, y: 22 },
  { name: "Petrolina", x: 12, y: 36 },
];

const regions = [
  { label: "Região Metropolitana do Recife", sla: "≤ 8 min", coverage: "100%" },
  { label: "Zona da Mata & Litoral", sla: "≤ 15 min", coverage: "Cobertura total" },
  { label: "Agreste Pernambucano", sla: "≤ 25 min", coverage: "Bases em Caruaru e Garanhuns" },
  { label: "Sertão & Vale do São Francisco", sla: "≤ 45 min", coverage: "Bases em Serra Talhada e Petrolina" },
];

export function Coverage() {
  const hub = cities.find((c) => c.hub)!;

  return (
    <section id="cobertura" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-14 items-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Cobertura regional — Pernambuco
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Do Recife ao Sertão, nossa central acompanha cada operação.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Atuação consolidada em todo o estado de Pernambuco, com base operacional no Recife e
            bases táticas avançadas no Agreste e no Sertão. SLAs ajustados por mesorregião e
            integração total com a Central 24h.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { v: "15+", l: "Municípios PE" },
              { v: "4", l: "Bases táticas" },
              { v: "24h", l: "Central ativa" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-lg p-4">
                <div className="font-display text-2xl font-bold text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-2">
            {regions.map((r) => (
              <li
                key={r.label}
                className="glass rounded-lg px-4 py-3 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.label}</div>
                  <div className="text-[11px] text-muted-foreground">{r.coverage}</div>
                </div>
                <span className="text-[11px] font-mono text-gold whitespace-nowrap">
                  SLA {r.sla}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative glass-strong rounded-2xl p-6 aspect-[5/4]">
            {/* HUD label */}
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              <span>● Mapa operacional / PE-BR</span>
              <span className="text-gold">Central Recife</span>
            </div>

            <svg
              viewBox="0 0 100 50"
              className="absolute inset-6 top-10 h-[calc(100%-4.5rem)] w-[calc(100%-3rem)]"
            >
              <defs>
                <radialGradient id="pe-glow" cx="90%" cy="55%">
                  <stop offset="0%" stopColor="oklch(0.84 0.15 82 / 0.28)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <linearGradient id="pe-fill" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.5 0.18 250 / 0.18)" />
                  <stop offset="100%" stopColor="oklch(0.84 0.15 82 / 0.18)" />
                </linearGradient>
              </defs>

              <rect width="100" height="50" fill="url(#pe-glow)" />

              {/* Stylized Pernambuco silhouette */}
              <path
                d="M 8 38
                   L 6 30
                   L 10 22
                   L 18 18
                   L 28 17
                   L 38 16
                   L 48 18
                   L 58 19
                   L 66 20
                   L 74 22
                   L 82 22
                   L 88 20
                   L 93 18
                   L 96 22
                   L 97 28
                   L 96 34
                   L 92 38
                   L 86 39
                   L 78 40
                   L 70 41
                   L 60 42
                   L 50 42
                   L 40 40
                   L 30 38
                   L 22 39
                   L 14 40
                   Z"
                fill="url(#pe-fill)"
                stroke="oklch(0.84 0.15 82 / 0.55)"
                strokeWidth="0.35"
                strokeDasharray="0.8 0.6"
              />

              {/* Connection lines from Recife hub to bases */}
              {cities
                .filter((c) => !c.hub)
                .map((c, i) => (
                  <line
                    key={i}
                    x1={hub.x}
                    y1={hub.y}
                    x2={c.x}
                    y2={c.y}
                    stroke="oklch(0.84 0.15 82 / 0.22)"
                    strokeWidth="0.18"
                  />
                ))}

              {/* City markers */}
              {cities.map((c, i) => (
                <g key={c.name}>
                  {c.hub && (
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="2.6"
                      fill="none"
                      stroke="oklch(0.84 0.15 82 / 0.6)"
                      strokeWidth="0.25"
                    >
                      <animate
                        attributeName="r"
                        values="2;3.6;2"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0;0.8"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.hub ? 1.4 : 0.9}
                    fill={c.hub ? "oklch(0.84 0.15 82)" : "oklch(0.82 0.22 148)"}
                    style={{
                      animation: `pulse-glow 2.4s ease-in-out ${i * 0.12}s infinite`,
                    }}
                  />
                  <circle cx={c.x} cy={c.y} r="0.35" fill="white" />
                </g>
              ))}

              {/* Capital label */}
              <text
                x={hub.x - 2}
                y={hub.y - 3}
                textAnchor="end"
                fontSize="2.2"
                fill="oklch(0.84 0.15 82)"
                fontFamily="ui-monospace, monospace"
              >
                RECIFE • HUB
              </text>
            </svg>

            {/* Footer city chips */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-x-3 gap-y-1 text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
              {cities.slice(0, 6).map((c) => (
                <span key={c.name}>● {c.name}</span>
              ))}
              <span className="text-gold">+ {cities.length - 6} cidades ativas</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
