import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#estrutura", label: "Estrutura" },
  { href: "/#cobertura", label: "Cobertura" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 backdrop-blur-xl bg-background/70 border-b border-border"
          : "py-4 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/#contato"
            className="hidden md:inline-flex items-center gap-1.5 h-9 px-4 rounded-md bg-gold text-gold-foreground text-sm font-semibold hover:shadow-[0_10px_30px_-10px_var(--gold-glow)] hover:-translate-y-0.5 transition-all"
          >
            Consultoria
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            className="lg:hidden h-9 w-9 grid place-items-center glass rounded-md"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-5 mt-3 glass-strong rounded-xl p-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm text-foreground/85 hover:text-foreground rounded-md hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
