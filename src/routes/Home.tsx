import { ShaderHero } from "../components/Hero/ShaderHero";
import { HeroIntro } from "../components/Hero/HeroIntro";
import { StatsSection } from "../components/StatsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { CapabilitiesSection } from "../components/CapabilitiesSection";
import { ProjectsIndex } from "../components/ProjectsIndex";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";

export function Home() {
  return (
    <>
      <section id="about" className="relative min-h-screen overflow-hidden">
        <ShaderHero />
        <HeroIntro />
      </section>

      <StatsSection />
      <ExperienceSection />
      <CapabilitiesSection />
      <ProjectsIndex />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
