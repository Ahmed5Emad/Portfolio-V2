import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="relative h-7 w-12 shrink-0 rounded-full border border-border bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-gold shadow-sm transition-all duration-200 ${
          isDark ? "right-0.5" : "left-0.5"
        }`}
      >
        {isDark ? (
          <Moon className="h-2.5 w-2.5 text-ink" />
        ) : (
          <Sun className="h-2.5 w-2.5 text-ink" />
        )}
      </div>
    </button>
  );
}
