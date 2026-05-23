import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Camera, MapPin, DoorClosed, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

export const services = [
  {
    id: "patrimonial",
    slug: "/seguranca-patrimonial" as const,
    title: "Segurança Patrimonial",
    icon: ShieldCheck,
    tagline: "Proteção armada e desarmada com protocolo tático integrado.",
    desc: "Equipes especializadas, supervisão ativa e integração total com a central de monitoramento para resposta imediata e auditável.",
    bullets: [
      "Vigilantes capacitados e auditados",
      "Rondas inteligentes com checkpoint digital",
      "Protocolo tático de resposta a incidentes",
      "Relatórios operacionais em tempo real",
    ],
  },
  {
    id: "eletronico",
    slug: "/monitoramento-eletronico" as const,
    title: "Monitoramento Eletrônico",
    icon: Camera,
    tagline: "Câmeras com IA e central tática operando 24h por dia.",
    desc: "Análise inteligente de vídeo, detecção de comportamento e perímetro virtual com escalonamento automático de eventos.",
    bullets: [
      "Câmeras com analítico de IA",
      "Detecção de intrusão e perímetro virtual",
      "Verificação por áudio bidirecional",
      "Histórico auditável e LGPD-ready",
    ],
  },
  {
    id: "rastreamento",
    slug: "/rastreamento-veicular" as const,
    title: "Rastreamento Veicular",
    icon: MapPin,
    tagline: "Frotas conectadas, geofencing e bloqueio remoto.",
    desc: "Telemetria avançada, recuperação rápida e gestão de risco para frotas leves, pesadas e cargas de alto valor agregado.",
    bullets: [
      "Telemetria e geofencing em tempo real",
      "Bloqueio remoto e jammer-detection",
      "Equipe de pronta resposta nacional",
      "Painéis executivos e API aberta",
    ],
  },
  {
    id: "portaria",
    slug: "/portaria-remota" as const,
    title: "Portaria Remota",
    icon: DoorClosed,
    tagline: "Substitua a portaria convencional por uma central tática.",
    desc: "Atendimento humano remoto com verificação biométrica, controle de acesso e operação contínua a um custo menor.",
    bullets: [
      "Atendimento humano remoto 24h",
      "Reconhecimento facial e LPR",
      "Controle de acesso integrado",
      "Redução de até 60% em custos",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <section id="servicos" className="relative py-28 md:py-36 bg-surface/40 border-y border-border">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Ecossistema de serviços
          </span>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
              Múltiplas operações especializadas, uma única estrutura.
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Cada vertical do grupo opera com CNPJ, equipe e tecnologia dedicados — coordenados pela
              mesma central tática.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {services.map((s) => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`relative group inline-flex items-center gap-2 h-11 px-4 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? "bg-gold text-gold-foreground border-transparent shadow-[0_10px_30px_-10px_var(--gold-glow)]"
                    : "glass hover:ring-gold border-border"
                }`}
              >
                <s.icon className="h-4 w-4" />
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div className="mt-10 grid lg:grid-cols-[1.1fr_1fr] gap-6 items-stretch">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong rounded-2xl p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
                <current.icon className="h-4 w-4" />
                {current.title}
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">
                {current.tagline}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{current.desc}</p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 h-5 w-5 rounded-md bg-gold/15 text-gold grid place-items-center">
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  to={current.slug}
                  className="group inline-flex items-center gap-2 h-11 px-5 rounded-md bg-gold text-gold-foreground font-semibold hover:shadow-[0_10px_30px_-10px_var(--gold-glow)] hover:-translate-y-0.5 transition-all"
                >
                  Ver detalhes da operação
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side cards listing other services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.id}
                to={s.slug}
                onMouseEnter={() => setActive(s.id)}
                className={`group glass rounded-xl p-5 hover:ring-gold hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                  s.id === active ? "ring-gold" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gold/10 text-gold grid place-items-center group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" />
                </div>
                <h4 className="mt-5 font-display font-semibold text-base">{s.title}</h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
