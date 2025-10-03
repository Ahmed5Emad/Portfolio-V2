import { useEffect, useState } from 'react';
import { Briefcase, Users, Award, Coffee } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

export function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const stats: Stat[] = [
    { icon: <Briefcase className="w-8 h-8" />, value: 15, label: 'Projects Completed', suffix: '+' },
    { icon: <Users className="w-8 h-8" />, value: 10, label: 'Happy Clients', suffix: '+' },
    { icon: <Award className="w-8 h-8" />, value: 3, label: 'Years Experience', suffix: '+' },
    { icon: <Coffee className="w-8 h-8" />, value: 1000, label: 'Cups of Coffee', suffix: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="stats-section" className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#121212] dark:via-[#1a1a1a] dark:to-[#121212]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 100} shouldAnimate={hasAnimated} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label, suffix = '', delay, shouldAnimate }: Stat & { delay: number; shouldAnimate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, shouldAnimate]);

  return (
    <div 
      className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-[#1e1e1e] border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 shadow-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-orange-500 mb-4">
        {icon}
      </div>
      <div className="text-gray-900 dark:text-white mb-2">
        <span className="text-4xl font-bold">{shouldAnimate ? count : 0}</span>
        <span className="text-orange-500">{suffix}</span>
      </div>
      <p className="text-gray-600 dark:text-white/70 text-center text-sm">{label}</p>
    </div>
  );
}
