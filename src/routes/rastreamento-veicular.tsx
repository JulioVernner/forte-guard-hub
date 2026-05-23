import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import { MapPin, Truck, Lock, Radio, Activity, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import heroImg from "@/assets/tracking-map.jpg";

export const Route = createFileRoute("/rastreamento-veicular")({
  head: () => ({
    meta: [
      { title: "Rastreamento Veicular — Grupo Forte Proteção" },
      { name: "description", content: "Telemetria avançada, geofencing, bloqueio remoto e pronta resposta para frotas e cargas de alto valor." },
      { property: "og:title", content: "Rastreamento Veicular — Grupo Forte" },
      { property: "og:description", content: "Frotas conectadas com pronta resposta nacional." },
      { property: "og:url", content: "/rastreamento-veicular" },
    ],
    links: [{ rel: "canonical", href: "/rastreamento-veicular" }],
  }),
  component: () => (
    <ServiceTemplate
      data={{
        eyebrow: "Rastreamento Veicular",
        title: "Frotas conectadas com",
        highlight: "pronta resposta nacional.",
        description:
          "Telemetria avançada, geofencing inteligente e bloqueio remoto para frotas leves, pesadas e cargas de alto valor agregado, com base operacional nacional.",
        image: heroImg,
        benefits: [
          { icon: MapPin, title: "Telemetria em tempo real", desc: "Posição, velocidade e comportamento de cada veículo da frota." },
          { icon: ShieldCheck, title: "Geofencing inteligente", desc: "Cercas virtuais com regras por horário, rota e tipo de carga." },
          { icon: Lock, title: "Bloqueio remoto", desc: "Imobilização segura em casos de roubo ou desvio." },
          { icon: Radio, title: "Jammer detection", desc: "Detecção de inibidores e ativação automática de protocolo." },
          { icon: Zap, title: "Pronta resposta", desc: "Equipes nacionais acionadas com base na localização do evento." },
          { icon: BarChart3, title: "Gestão executiva", desc: "Painéis e relatórios para tomada de decisão da operação." },
        ],
        structure: [
          { icon: Truck, title: "Cadastro da frota", desc: "Onboarding dos veículos, motoristas e perfis de uso." },
          { icon: MapPin, title: "Configuração de regras", desc: "Geofences, rotas e perfis de risco por veículo/carga." },
          { icon: Radio, title: "Operação 24h", desc: "Monitoramento contínuo na central tática com SLA por evento." },
          { icon: Activity, title: "Recuperação e auditoria", desc: "Acionamento de equipes, autoridades e fechamento auditável." },
        ],
        tech: ["GPS + GSM redundante", "Jammer detection", "API aberta", "Painel executivo", "Geofencing dinâmico", "Apps motorista/cliente"],
        faq: [
          { q: "Atende cargas de alto valor?", a: "Sim. Operamos com protocolos específicos para cargas de alto valor agregado, incluindo escolta e isca." },
          { q: "Há cobertura nacional?", a: "Sim. Estrutura própria nas principais regiões + rede de parceiros homologados em todo o país." },
          { q: "Posso integrar com meu ERP?", a: "Sim, oferecemos API REST aberta e webhooks para integração com ERPs e TMSs." },
        ],
      }}
    />
  ),
});
