import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ImprovedSkillsSection } from './components/ImprovedSkillsSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingParticles } from './components/FloatingParticles';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white relative overflow-hidden transition-colors">
      <FloatingParticles />
      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <AboutSection />
          <StatsSection />
          <ExperienceSection />
          <ImprovedSkillsSection />
          <ProcessSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <ScrollToTop />
      </div>
    </div>
  );
}
