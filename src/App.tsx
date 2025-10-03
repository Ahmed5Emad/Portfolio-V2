import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { ImprovedSkillsSection } from './components/ImprovedSkillsSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingParticles } from './components/FloatingParticles';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navbar />
        <main>
          <AboutSection />
          <StatsSection />
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
