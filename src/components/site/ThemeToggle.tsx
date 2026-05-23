import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className="relative h-9 w-9 rounded-md glass flex items-center justify-center hover:ring-gold transition-all"
    >
      <Sun className={`h-4 w-4 transition-all ${theme === "dark" ? "opacity-0 -rotate-90 scale-0" : "opacity-100"}`} />
      <Moon className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "opacity-100" : "opacity-0 rotate-90 scale-0"}`} />
    </button>
  );
}
