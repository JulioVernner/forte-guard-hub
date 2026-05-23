import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { CommandCenter } from "@/components/site/CommandCenter";
import { Differentials } from "@/components/site/Differentials";
import { Coverage } from "@/components/site/Coverage";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Forte Proteção — Segurança, monitoramento e rastreamento" },
      {
        name: "description",
        content:
          "Holding que integra segurança patrimonial, monitoramento eletrônico e rastreamento veicular em uma central tática 24h.",
      },
      { property: "og:title", content: "Grupo Forte Proteção" },
      {
        property: "og:description",
        content:
          "Tecnologia, inteligência e proteção para operações que não podem falhar.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CommandCenter />
      <Differentials />
      <Coverage />
      <Contact />
    </>
  );
}
