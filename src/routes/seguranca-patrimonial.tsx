import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import { ShieldCheck, Users, ClipboardCheck, Radio, AlertOctagon, FileSearch, Lock, Activity } from "lucide-react";
import heroImg from "@/assets/hero-command.jpg";

export const Route = createFileRoute("/seguranca-patrimonial")({
  head: () => ({
    meta: [
      { title: "Segurança Patrimonial — Grupo Forte Proteção" },
      { name: "description", content: "Vigilância armada e desarmada com protocolo tático, supervisão ativa e integração com central 24h." },
      { property: "og:title", content: "Segurança Patrimonial — Grupo Forte" },
      { property: "og:description", content: "Equipes especializadas e supervisão ativa para sua operação." },
      { property: "og:url", content: "/seguranca-patrimonial" },
    ],
    links: [{ rel: "canonical", href: "/seguranca-patrimonial" }],
  }),
  component: () => (
    <ServiceTemplate
      data={{
        eyebrow: "Segurança Patrimonial",
        title: "Vigilância especializada com",
        highlight: "protocolo tático integrado.",
        description:
          "Equipes treinadas, supervisão ativa e total integração com a central de monitoramento. Cada ronda, ocorrência e acesso é registrado em uma plataforma auditável.",
        image: heroImg,
        benefits: [
          { icon: ShieldCheck, title: "Vigilância qualificada", desc: "Profissionais com treinamento contínuo e avaliação periódica de desempenho." },
          { icon: ClipboardCheck, title: "Rondas digitais", desc: "Checkpoints com NFC/QR e registro fotográfico em tempo real." },
          { icon: AlertOctagon, title: "Resposta tática", desc: "Protocolos escalonados conforme criticidade, com apoio da central 24h." },
          { icon: Radio, title: "Comunicação redundante", desc: "Rádio digital + LTE para continuidade total da operação." },
          { icon: Users, title: "Supervisão ativa", desc: "Supervisores em campo monitorando equipes e indicadores." },
          { icon: FileSearch, title: "Auditoria total", desc: "Relatórios operacionais consolidados e disponíveis sob demanda." },
        ],
        structure: [
          { icon: ClipboardCheck, title: "Diagnóstico operacional", desc: "Mapeamento de perímetro, pontos críticos e fluxo de pessoas." },
          { icon: Users, title: "Dimensionamento da equipe", desc: "Definição de turnos, postos e perfil profissional adequado." },
          { icon: Radio, title: "Integração com central", desc: "Conexão de rádios, câmeras e dispositivos à plataforma do grupo." },
          { icon: Activity, title: "Operação contínua e auditoria", desc: "Indicadores monitorados em tempo real e ciclos de melhoria contínua." },
        ],
        tech: ["Ronda digital NFC/QR", "Rádio digital DMR", "Body-cam HD", "Central 24h", "Geolocalização da equipe", "Painel executivo"],
        faq: [
          { q: "Atendem todo o Brasil?", a: "Operamos com bases próprias e parceiros homologados em mais de 87 cidades, com SLAs definidos por região." },
          { q: "É possível integrar com câmeras existentes?", a: "Sim. Nossa plataforma é compatível com a maioria dos sistemas de CFTV do mercado." },
          { q: "Como é feita a auditoria das rondas?", a: "Cada checkpoint é validado por NFC/QR, registrado com foto, hora e geolocalização — disponível no painel do cliente." },
        ],
      }}
    />
  ),
});
