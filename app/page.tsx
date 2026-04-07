import HeroSection from "./components/hero-section";
import IntroSection from "./components/intro-section";
import ProfessionalSkillsSection from "./components/professional-skills-section";
import TechStackSection from "./components/techstack-section";
import ExperienceSection from "./components/workexperience-section";
import ProjectSection from "./components/project-section";
import CertificateAchievementSection from "./components/certificate-achievement-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProfessionalSkillsSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectSection />
      <CertificateAchievementSection />
    </>
  );
}
