import HeroComponent from "@/components/hero-section";
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ServicesSection from '@/components/services-section';
import TestimonialsSection from '@/components/testimonials-section';
export default function Home() {
  return (
    <>
      <HeroComponent />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
    </>
  );
}
