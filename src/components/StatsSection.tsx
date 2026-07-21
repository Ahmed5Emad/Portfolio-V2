import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 18, label: "Projects Completed", suffix: "+" },
  { value: 5, label: "Happy Clients", suffix: "+" },
  { value: 1, label: "Years Experience", suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, visible]);

  return (
    <span ref={ref}>
      {count}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="border-y border-border px-6 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
