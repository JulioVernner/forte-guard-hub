import { Reveal } from "./Reveal";
import { Activity, Monitor, AlertTriangle, Radio } from "lucide-react";

const quadrants = [
  { label: "Setor A · Acesso Norte", code: "CAM-014", status: "ESTÁVEL", color: "text-online" },
  { label: "Setor B · Perímetro Leste", code: "CAM-027", status: "ESTÁVEL", color: "text-online" },
  { label: "Setor C · Doca", code: "CAM-031", status: "VERIFICANDO", color: "text-gold" },
  { label: "Setor D · Estacionamento", code: "CAM-042", status: "ESTÁVEL", color: "text-online" },
];

export function CommandCenter() {
  return (
    <section id="estrutura" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Estrutura operacional
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Central tática de comando, ativa em tempo real.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Nossa central integra câmeras, sensores, rastreadores e equipes em uma única
              superfície operacional. Cada evento é verificado, escalonado e auditado por
              especialistas treinados.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {[
                { icon: Monitor, t: "Operadores certificados em turnos contínuos" },
                { icon: Radio, t: "Comunicação redundante (LTE + satélite)" },
                { icon: AlertTriangle, t: "Escalonamento automático de eventos críticos" },
                { icon: Activity, t: "Auditoria total e relatórios sob demanda" },
              ].map((i) => (
                <li key={i.t} className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-md bg-surface-2 border border-border grid place-items-center text-gold">
                    <i.icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/85">{i.t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-strong rounded-2xl p-4 ring-1 ring-border">
              <div className="flex items-center justify-between px-2 pb-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="h-2 w-2 rounded-full bg-online animate-pulse-glow" />
                  <span className="font-medium">CENTRAL · 04 QUADRANTES</span>
                </div>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em]">
                  REC · 24H
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {quadrants.map((q, i) => (
                  <div
                    key={q.code}
                    className="relative aspect-video rounded-lg overflow-hidden border border-border bg-gradient-to-br from-surface-2 to-surface group"
                  >
                    {/* Faux camera feed */}
                    <div className="absolute inset-0 opacity-70">
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(120% 80% at ${30 + i * 12}% ${
                            40 + i * 10
                          }%, oklch(0.5 0.18 250 / 0.35), transparent 60%)`,
                        }}
                      />
                      <div className="absolute inset-0 bg-grid opacity-50" />
                    </div>
                    {/* Scan line */}
                    <div className="absolute inset-x-0 top-1/2 h-px bg-gold/40 animate-pulse" />
                    {/* Crosshair */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase">
                      <span className="text-foreground/80">{q.code}</span>
                      <span className={q.color}>● {q.status}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>{q.label}</span>
                      <span className="tabular-nums">
                        {String(new Date().getHours()).padStart(2, "0")}:
                        {String(new Date().getMinutes()).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* HUD bar */}
              <div className="mt-3 grid grid-cols-4 gap-2 text-[10px]">
                {[
                  { l: "CPU", v: "32%" },
                  { l: "REDE", v: "98%" },
                  { l: "STORAGE", v: "64%" },
                  { l: "EVENTOS", v: "07" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="bg-surface-2/70 border border-border rounded-md px-3 py-2 flex items-center justify-between"
                  >
                    <span className="text-muted-foreground tracking-[0.18em]">{m.l}</span>
                    <span className="font-medium text-gold tabular-nums">{m.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
