import { ShieldCheck, Cpu, Network, Headset } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Proteção integrada",
    desc: "Camadas combinadas de segurança humana, eletrônica e analítica em um único protocolo operacional.",
  },
  {
    icon: Cpu,
    title: "Tecnologia proprietária",
    desc: "Plataforma de inteligência operacional com visão centralizada, automação de eventos e auditoria total.",
  },
  {
    icon: Network,
    title: "Estrutura corporativa",
    desc: "Holding com múltiplos CNPJs especializados e governança técnica, jurídica e operacional unificada.",
  },
  {
    icon: Headset,
    title: "Resposta 24/7",
    desc: "Central tática ativa em tempo real com tempo médio de resposta abaixo de 90 segundos.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Quem somos
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
            Uma holding desenhada para operar onde a falha não é uma opção.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
            Reunimos especialistas, tecnologia e estrutura operacional para entregar segurança
            contínua a empresas, condomínios, frotas e operações críticas em todo o Brasil.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full glass rounded-xl p-6 hover:ring-gold hover:-translate-y-1 transition-all duration-300">
                <div className="h-11 w-11 rounded-lg bg-gold/10 text-gold grid place-items-center group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <Reveal delay={0.1}>
          <div className="mt-16 glass-strong rounded-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: 2400, s: "+", l: "Clientes protegidos" },
              { v: 87, s: "+", l: "Cidades atendidas" },
              { v: 24, s: "h", l: "Monitoramento contínuo" },
              { v: 90, s: "s", l: "Tempo médio de resposta" },
            ].map((st) => (
              <div key={st.l}>
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
                  <Counter to={st.v} suffix={st.s} />
                </div>
                <div className="mt-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                  {st.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
