import { useState } from "react";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative py-28 md:py-36 bg-surface/40 border-t border-border">
      <div className="absolute inset-0 hero-glow opacity-50 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-14">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Fale com a holding
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Vamos desenhar a operação ideal para o seu cenário.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Um consultor especialista analisa o perfil da sua operação e recomenda a combinação
            certa de serviços do Grupo Forte Proteção.
          </p>

          <div className="mt-10 space-y-3">
            {[
              { icon: Phone, t: "0800 000 0000", d: "Central comercial · seg–sex 8h–20h" },
              { icon: Mail, t: "contato@grupoforteprotecao.com.br", d: "Resposta em até 24h úteis" },
              { icon: MessageCircle, t: "WhatsApp corporativo", d: "+55 11 90000-0000" },
            ].map((c) => (
              <div key={c.t} className="flex items-center gap-3 glass rounded-lg p-4">
                <span className="h-10 w-10 rounded-md bg-gold/10 text-gold grid place-items-center">
                  <c.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium">{c.t}</div>
                  <div className="text-xs text-muted-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5511900000000"
            className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-online/15 text-online border border-online/30 font-medium hover:bg-online/25 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            Falar agora pelo WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="glass-strong rounded-2xl p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome" placeholder="Seu nome" />
              <Field label="Telefone" placeholder="(00) 00000-0000" />
              <Field label="Empresa" placeholder="Razão social" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                  Serviço de interesse
                </label>
                <select
                  className="mt-2 w-full h-11 rounded-md bg-surface-2/70 border border-border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/60 transition-all"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Selecione</option>
                  <option>Segurança Patrimonial</option>
                  <option>Monitoramento Eletrônico</option>
                  <option>Rastreamento Veicular</option>
                  <option>Portaria Remota</option>
                  <option>Solução integrada</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte um pouco sobre sua operação..."
                  className="mt-2 w-full rounded-md bg-surface-2/70 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/60 transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-gold text-gold-foreground font-semibold hover:shadow-[0_18px_50px_-10px_var(--gold-glow)] hover:-translate-y-0.5 transition-all"
            >
              {sent ? "Recebemos sua mensagem ✓" : "Solicitar consultoria"}
              {!sent && <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />}
            </button>
            <p className="mt-3 text-[11px] text-muted-foreground text-center">
              Seus dados são tratados em conformidade com a LGPD.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  className = "",
}: { label: string; placeholder: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
        {label}
      </label>
      <input
        required
        placeholder={placeholder}
        className="mt-2 w-full h-11 rounded-md bg-surface-2/70 border border-border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/60 transition-all"
      />
    </div>
  );
}
