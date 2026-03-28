import HeroSection from "./components/hero-section";
import IntroSection from "./components/intro-section";
import ProfessionalSkillsSection from "./components/professional-skills-section";
import TechStackSection from "./components/techstack-section";
import WorkExperienceSection from "./components/workexperience-section";
import ProjectSection from "./components/project-section";
import ContactSesction from "./components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProfessionalSkillsSection />
      <TechStackSection />
      <WorkExperienceSection />
      <ProjectSection />
      <ContactSesction />
    </>
  );
}
