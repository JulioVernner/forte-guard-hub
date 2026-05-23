import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import { Camera, Eye, Brain, Bell, Cloud, Lock, Mic, Activity } from "lucide-react";
import heroImg from "@/assets/camera-dome.jpg";

export const Route = createFileRoute("/monitoramento-eletronico")({
  head: () => ({
    meta: [
      { title: "Monitoramento Eletrônico — Grupo Forte Proteção" },
      { name: "description", content: "Câmeras com IA, perímetro virtual e central tática 24h para detecção e resposta a eventos críticos." },
      { property: "og:title", content: "Monitoramento Eletrônico — Grupo Forte" },
      { property: "og:description", content: "Inteligência de vídeo e central tática 24h." },
      { property: "og:url", content: "/monitoramento-eletronico" },
    ],
    links: [{ rel: "canonical", href: "/monitoramento-eletronico" }],
  }),
  component: () => (
    <ServiceTemplate
      data={{
        eyebrow: "Monitoramento Eletrônico",
        title: "Inteligência de vídeo com",
        highlight: "central tática 24h.",
        description:
          "Câmeras com analítico de IA, detecção de comportamento e perímetro virtual conectados a uma central tática que verifica e escala eventos automaticamente.",
        image: heroImg,
        benefits: [
          { icon: Brain, title: "Analítico de IA", desc: "Detecção de intrusão, loitering, multidão e movimentação suspeita." },
          { icon: Eye, title: "Verificação humana", desc: "Operadores certificados validam cada evento antes da resposta." },
          { icon: Bell, title: "Escalonamento automático", desc: "Acionamento imediato de equipes, autoridades e responsáveis." },
          { icon: Mic, title: "Áudio bidirecional", desc: "Interlocução remota para abordagem dissuasiva em tempo real." },
          { icon: Cloud, title: "Armazenamento seguro", desc: "Gravações em nuvem com retenção configurável e criptografia." },
          { icon: Lock, title: "LGPD-ready", desc: "Tratamento de imagens em conformidade com a legislação vigente." },
        ],
        structure: [
          { icon: Camera, title: "Projeto e instalação", desc: "Engenharia de cobertura, escolha de equipamentos e implantação." },
          { icon: Brain, title: "Ativação do analítico", desc: "Configuração de regras, máscaras e perímetros virtuais." },
          { icon: Eye, title: "Operação na central", desc: "Verificação 24h, validação humana e acionamento padronizado." },
          { icon: Activity, title: "Indicadores e melhoria", desc: "Análise periódica de falsos positivos e tuning das regras." },
        ],
        tech: ["Câmeras 4K com IA", "Analítico em borda", "Áudio bidirecional", "VMS proprietário", "API REST aberta", "Storage criptografado"],
        faq: [
          { q: "Reaproveitamos câmeras atuais?", a: "Sim, sempre que a qualidade técnica permitir. Caso contrário, indicamos substituições pontuais." },
          { q: "Como funciona a verificação?", a: "Eventos detectados pelo analítico são validados por um operador antes de qualquer acionamento." },
          { q: "É possível integrar com alarmes?", a: "Sim. Integramos com centrais de alarme, controle de acesso e sistemas de automação." },
        ],
      }}
    />
  ),
});
