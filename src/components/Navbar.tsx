import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const sections = [
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    if (!isHome) {
      navigate("/");
      setTimeout(doScroll, 100);
    } else {
      doScroll();
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : ""
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-6xl">
          <button
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
              setMobileOpen(false);
            }}
            className="font-display text-xl font-semibold tracking-tight text-ink dark:text-white hover:text-gold transition-colors"
          >
            AE
          </button>

          <div className="flex items-center gap-8">
            {isHome ? (
              <ul className="hidden md:flex gap-8">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className={`font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:text-gold ${
                        active === s.id
                          ? "text-gold"
                          : "text-ink/70 dark:text-white/70"
                      }`}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="hidden md:inline-flex items-center gap-1.5 font-mono text-sm font-semibold uppercase tracking-widest text-ink/70 dark:text-white/70 hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            )}

            <ThemeToggle isDark={isDark} toggle={toggleTheme} />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-ink dark:text-white hover:text-gold transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-background border-l border-border shadow-2xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <button onClick={() => { navigate("/"); setMobileOpen(false); }} className="font-display text-lg text-gold">
            AE
          </button>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 text-ink dark:text-white hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-col gap-1 p-6">
          {isHome ? (
            sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-4 py-3 rounded-sm font-mono text-sm font-semibold uppercase tracking-widest transition-all duration-200 ${
                    active === s.id
                      ? "text-gold bg-gold/5"
                      : "text-ink/60 dark:text-white/60 hover:text-gold hover:bg-muted"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))
          ) : (
            <li>
              <button
                onClick={() => { navigate("/"); setMobileOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-sm font-mono text-sm font-semibold uppercase tracking-widest text-ink/60 dark:text-white/60 hover:text-gold"
              >
                <span className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
