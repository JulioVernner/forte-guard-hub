import { ArrowRight, ShieldCheck, Radio, MapPin, Camera, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { StatusPill } from "./StatusPill";
import heroImg from "@/assets/hero-command.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18] dark:opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
        <div className="absolute inset-0 bg-grid animate-grid-pan opacity-60" />
        <div className="absolute inset-0 hero-glow" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <StatusPill />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em]"
          >
            Tecnologia, inteligência e{" "}
            <span className="text-gradient-gold">proteção</span> para operações que não podem falhar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            O <span className="text-foreground font-medium">Grupo Forte Proteção</span> integra
            soluções avançadas de segurança patrimonial, monitoramento eletrônico e rastreamento
            inteligente em uma única estrutura operacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-md bg-gold text-gold-foreground font-semibold hover:shadow-[0_18px_50px_-10px_var(--gold-glow)] hover:-translate-y-0.5 transition-all"
            >
              Solicitar Consultoria
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-md glass hover:bg-accent transition-all font-medium"
            >
              Conhecer Serviços
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground tracking-[0.18em] uppercase">
            <span>ISO 27001 Ready</span>
            <span>· Operação Nacional</span>
            <span>· Resposta &lt; 90s</span>
          </div>
        </div>

        {/* Mini dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass-strong rounded-2xl p-5 ring-1 ring-border shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-online animate-pulse-glow" />
                <span className="text-xs font-medium tracking-wide">Central Operacional</span>
              </div>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em]">LIVE · 24H</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { icon: Camera, label: "Câmeras", value: "1.284", c: "text-gold" },
                { icon: MapPin, label: "Veículos", value: "342", c: "text-online" },
                { icon: Activity, label: "Alertas", value: "07", c: "text-foreground" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-surface-2/70 p-3 border border-border/60">
                  <s.icon className={`h-4 w-4 ${s.c}`} />
                  <div className="mt-2 text-lg font-display font-bold leading-none">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 tracking-wide uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini map */}
            <div className="relative h-48 rounded-lg overflow-hidden border border-border/60 bg-surface-2">
              <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
                <defs>
                  <radialGradient id="g1" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 82 / 0.4)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <rect width="400" height="200" fill="url(#g1)" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    x2="400"
                    y1={i * 18}
                    y2={i * 18}
                    stroke="oklch(0.82 0.14 82 / 0.08)"
                    strokeWidth="0.5"
                  />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    y1="0"
                    y2="200"
                    x1={i * 22}
                    x2={i * 22}
                    stroke="oklch(0.82 0.14 82 / 0.08)"
                    strokeWidth="0.5"
                  />
                ))}
                <path
                  d="M 30 160 Q 120 80 200 110 T 380 50"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4 3"
                  opacity="0.9"
                />
                {[
                  { x: 30, y: 160 },
                  { x: 130, y: 110 },
                  { x: 230, y: 105 },
                  { x: 320, y: 70 },
                  { x: 380, y: 50 },
                ].map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="6" fill="oklch(0.82 0.22 148 / 0.18)" />
                    <circle cx={p.x} cy={p.y} r="2.5" fill="oklch(0.82 0.22 148)" />
                  </g>
                ))}
              </svg>
              <div className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Rota · Setor 04
              </div>
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] text-online">
                <span className="h-1.5 w-1.5 rounded-full bg-online animate-pulse-glow" />
                Tracking ativo
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-surface-2/70 p-2.5 border border-border/60 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-online" />
                <div className="text-[11px]">
                  <div className="font-medium leading-tight">Perímetro estável</div>
                  <div className="text-muted-foreground">12 setores</div>
                </div>
              </div>
              <div className="rounded-lg bg-surface-2/70 p-2.5 border border-border/60 flex items-center gap-2">
                <Radio className="h-4 w-4 text-gold" />
                <div className="text-[11px]">
                  <div className="font-medium leading-tight">Rede sinal: 98%</div>
                  <div className="text-muted-foreground">Última leitura 4s</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-gold/10 via-transparent to-transparent blur-2xl rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
