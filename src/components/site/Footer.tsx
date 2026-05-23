import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-sm">
            Holding de segurança patrimonial, monitoramento eletrônico e rastreamento
            inteligente. Operação 24h em uma estrutura corporativa unificada.
          </p>
          <div className="flex items-center gap-2 pt-2">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center glass rounded-md hover:ring-gold transition-all"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Serviços
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/seguranca-patrimonial" className="hover:text-gold transition-colors">Segurança Patrimonial</Link></li>
            <li><Link to="/monitoramento-eletronico" className="hover:text-gold transition-colors">Monitoramento Eletrônico</Link></li>
            <li><Link to="/rastreamento-veicular" className="hover:text-gold transition-colors">Rastreamento Veicular</Link></li>
            <li><Link to="/portaria-remota" className="hover:text-gold transition-colors">Portaria Remota</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Contato
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>0800 000 0000</li>
            <li>contato@grupoforteprotecao.com.br</li>
            <li>Central 24h · Atendimento nacional</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Grupo Forte Proteção · Todos os direitos reservados</span>
          <span className="tracking-[0.2em] uppercase">Holding · Segurança Integrada</span>
        </div>
      </div>
    </footer>
  );
}
