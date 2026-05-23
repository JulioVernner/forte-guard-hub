import { Reveal } from "./Reveal";
import { Clock, Cpu, Users, Map, Brain, Zap } from "lucide-react";

const items = [
  { icon: Clock, t: "Operação 24h", d: "Central tática ativa todos os dias, sem interrupções." },
  { icon: Cpu, t: "Tecnologia integrada", d: "Plataforma proprietária unifica câmeras, rastreamento e acesso." },
  { icon: Users, t: "Equipe especializada", d: "Vigilantes, operadores e supervisores em formação contínua." },
  { icon: Map, t: "Cobertura estratégica", d: "Atendimento nacional com bases regionais de pronta resposta." },
  { icon: Brain, t: "Inteligência operacional", d: "Analítico de IA e protocolos auditáveis em cada evento." },
  { icon: Zap, t: "Resposta rápida", d: "Tempo médio inferior a 90 segundos para incidentes críticos." },
];

export function Differentials() {
  return (
    <section className="relative py-28 md:py-36 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Diferenciais
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
            O padrão operacional que empresas críticas exigem.
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 0.05}>
              <div className="group glass rounded-xl p-7 h-full hover:ring-gold hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-gold to-gold/50 text-gold-foreground grid place-items-center">
                  <i.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{i.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
