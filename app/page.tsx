import HeroSection from "./components/hero-section";
import IntroSection from "./components/intro-section";
import TechStackSection from "./components/techstack-section";
import WorkExperienceSection from "./components/workexperience-section";
import ProjectSection from "./components/project-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <TechStackSection />
      <WorkExperienceSection />
      <ProjectSection />
    </>
  );
}
