import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import { DoorClosed, Users, Cpu, Camera, Activity, Lock, Bell, ScanFace } from "lucide-react";
import heroImg from "@/assets/hero-command.jpg";

export const Route = createFileRoute("/portaria-remota")({
  head: () => ({
    meta: [
      { title: "Portaria Remota — Grupo Forte Proteção" },
      { name: "description", content: "Atendimento humano remoto 24h com reconhecimento facial, LPR e controle de acesso integrado." },
      { property: "og:title", content: "Portaria Remota — Grupo Forte" },
      { property: "og:description", content: "Substitua a portaria convencional por uma central tática." },
      { property: "og:url", content: "/portaria-remota" },
    ],
    links: [{ rel: "canonical", href: "/portaria-remota" }],
  }),
  component: () => (
    <ServiceTemplate
      data={{
        eyebrow: "Portaria Remota",
        title: "Portaria reinventada por uma",
        highlight: "central tática inteligente.",
        description:
          "Atendimento humano remoto 24 horas, com reconhecimento facial, leitura de placas e controle de acesso integrado — reduzindo custos e elevando o padrão operacional.",
        image: heroImg,
        benefits: [
          { icon: Users, title: "Atendimento humano 24h", desc: "Operadores treinados em atendimento e protocolos de segurança." },
          { icon: ScanFace, title: "Reconhecimento facial", desc: "Liberação automática para moradores, colaboradores e recorrentes." },
          { icon: Camera, title: "LPR — leitura de placas", desc: "Identificação automática de veículos cadastrados." },
          { icon: Lock, title: "Controle de acesso", desc: "Integração com fechaduras, cancelas e catracas." },
          { icon: Bell, title: "Acionamento imediato", desc: "Protocolo escalonado para situações suspeitas ou de risco." },
          { icon: Cpu, title: "Redução de custos", desc: "Economia de até 60% comparado à portaria presencial tradicional." },
        ],
        structure: [
          { icon: DoorClosed, title: "Projeto de implantação", desc: "Avaliação dos acessos, interfones, câmeras e dispositivos." },
          { icon: Cpu, title: "Integração tecnológica", desc: "Conexão dos sistemas existentes à plataforma do grupo." },
          { icon: Users, title: "Operação remota 24h", desc: "Atendimento contínuo com supervisão e auditoria." },
          { icon: Activity, title: "Indicadores e SLA", desc: "Tempos de atendimento, ocorrências e satisfação monitorados." },
        ],
        tech: ["Interfone IP HD", "Reconhecimento facial", "LPR (placas)", "Controle de acesso integrado", "Central 24h dedicada", "App de moradores/visitas"],
        faq: [
          { q: "Funciona em condomínios residenciais?", a: "Sim. Atendemos condomínios horizontais, verticais, comerciais e empresariais." },
          { q: "É preciso trocar todo o sistema atual?", a: "Não. Avaliamos o que pode ser reaproveitado para reduzir o investimento inicial." },
          { q: "Como é a aceitação dos moradores?", a: "Implementamos um plano de comunicação e treinamento que tem mais de 95% de aprovação pós-implantação." },
        ],
      }}
    />
  ),
});
