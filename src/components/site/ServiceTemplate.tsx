import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { StatusPill } from "./StatusPill";
import { Contact } from "./Contact";

export type ServicePageData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  benefits: { icon: ComponentType<{ className?: string }>; title: string; desc: string }[];
  structure: { icon: ComponentType<{ className?: string }>; title: string; desc: string }[];
  tech: string[];
  faq: { q: string; a: string }[];
  image: string;
};

export function ServiceTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={data.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute inset-0 hero-glow" />
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Link
              to="/"
              className="text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-gold transition-colors"
            >
              ← Grupo Forte Proteção
            </Link>
            <div className="mt-6">
              <StatusPill label={`${data.eyebrow} · Operação ativa`} />
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] max-w-4xl">
              {data.title}{" "}
              <span className="text-gradient-gold">{data.highlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              {data.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-md bg-gold text-gold-foreground font-semibold hover:shadow-[0_18px_50px_-10px_var(--gold-glow)] hover:-translate-y-0.5 transition-all"
              >
                Solicitar consultoria
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-md glass hover:bg-accent transition-all font-medium"
              >
                Ver benefícios
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Benefícios
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              Resultados mensuráveis e protocolos auditáveis.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="glass rounded-xl p-6 h-full hover:ring-gold hover:-translate-y-1 transition-all duration-300">
                  <div className="h-11 w-11 rounded-lg bg-gold/10 text-gold grid place-items-center">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational structure */}
      <section className="py-24 md:py-32 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Estrutura operacional
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Como a operação acontece.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Cada etapa é desenhada para garantir continuidade, rastreabilidade e tempo de resposta
              alinhados à criticidade do cliente.
            </p>
          </Reveal>
          <div className="space-y-3">
            {data.structure.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="glass rounded-xl p-5 flex items-start gap-4 hover:ring-gold transition-all">
                  <div className="h-10 w-10 shrink-0 rounded-md bg-gold/10 text-gold grid place-items-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-gold">0{i + 1}</span>
                      <h4 className="font-display font-semibold">{s.title}</h4>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Tecnologias utilizadas
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              Stack profissional, integrado à plataforma do grupo.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {data.tech.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:ring-gold transition-all">
                  <Check className="h-3.5 w-3.5 text-gold" />
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Perguntas frequentes
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Tudo o que você precisa saber.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {data.faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <FaqItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-gold transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
