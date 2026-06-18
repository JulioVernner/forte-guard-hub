import { Reveal } from "./Reveal";

const serviceCities = ["Garanhuns", "Caruaru", "Lajedo"];

export function Coverage() {
  return (
    <section id="cobertura" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-14 items-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Cobertura regional — Pernambuco
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Base operacional em Garanhuns, atuando em toda a região.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Operação centralizada em Garanhuns com alcance estratégico sobre o Agreste e cidades
            circunvizinhas. Resposta ágil, frota posicionada e central de monitoramento 24h.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { v: "3+", l: "Cidades atendidas" },
              { v: "1", l: "Base tática" },
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
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative glass-strong rounded-2xl p-6 aspect-[5/4]">
            {/* HUD label */}
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              <span>● Mapa operacional / PE-BR</span>
              <span className="text-gold">Base Garanhuns</span>
            </div>

            <svg
              viewBox="0 0 100 60"
              className="absolute inset-6 top-10 h-[calc(100%-4.5rem)] w-[calc(100%-3rem)]"
            >
              <defs>
                <radialGradient id="pe-glow" cx="55%" cy="65%">
                  <stop offset="0%" stopColor="oklch(0.84 0.15 82 / 0.28)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <linearGradient id="pe-fill" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.5 0.18 250 / 0.18)" />
                  <stop offset="100%" stopColor="oklch(0.84 0.15 82 / 0.18)" />
                </linearGradient>
              </defs>

              <rect width="100" height="60" fill="url(#pe-glow)" />

              {/* Pernambuco silhouette — more accurate shape */}
              <path
                d="M 10 45
                   L 8 38
                   L 9 30
                   L 12 24
                   L 16 20
                   L 22 18
                   L 28 17
                   L 34 17
                   L 40 18
                   L 45 19
                   L 50 20
                   L 55 21
                   L 60 22
                   L 65 23
                   L 70 24
                   L 75 24
                   L 80 23
                   L 84 22
                   L 88 21
                   L 91 19
                   L 93 17
                   L 94 20
                   L 95 23
                   L 96 26
                   L 96 29
                   L 95 32
                   L 94 35
                   L 92 38
                   L 90 40
                   L 87 42
                   L 83 43
                   L 79 44
                   L 74 44
                   L 69 44
                   L 64 43
                   L 59 42
                   L 54 41
                   L 49 40
                   L 44 40
                   L 39 41
                   L 34 42
                   L 29 43
                   L 24 44
                   L 19 45
                   L 14 45
                   Z"
                fill="url(#pe-fill)"
                stroke="oklch(0.84 0.15 82 / 0.55)"
                strokeWidth="0.35"
                strokeDasharray="0.8 0.6"
              />

              {/* Base marker — Garanhuns area (approximate center-south of state) */}
              <g>
                <circle
                  cx="62"
                  cy="36"
                  r="3"
                  fill="none"
                  stroke="oklch(0.84 0.15 82 / 0.6)"
                  strokeWidth="0.25"
                >
                  <animate
                    attributeName="r"
                    values="2;4;2"
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
                <circle
                  cx="62"
                  cy="36"
                  r="1.6"
                  fill="oklch(0.84 0.15 82)"
                />
                <circle cx="62" cy="36" r="0.45" fill="white" />
                <text
                  x="60"
                  y="33"
                  textAnchor="end"
                  fontSize="2.4"
                  fill="oklch(0.84 0.15 82)"
                  fontFamily="ui-monospace, monospace"
                >
                  GARANHUNS • BASE
                </text>
              </g>

              {/* Coverage radius ring around Garanhuns */}
              <circle
                cx="62"
                cy="36"
                r="8"
                fill="none"
                stroke="oklch(0.84 0.15 82 / 0.15)"
                strokeWidth="0.2"
                strokeDasharray="1 1"
              />
            </svg>

            {/* Footer city chips */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-x-3 gap-y-1 text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
              {serviceCities.map((c) => (
                <span key={c}>● {c}</span>
              ))}
              <span className="text-gold">+ Região circunvizinha</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
