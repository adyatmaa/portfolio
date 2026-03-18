import AboutSection from "../component/AboutSection";
import ContactSection from "../component/ContactSection";
import HeroSection from "../component/HeroSection";
import ProjectSection from "../component/ProjectSection";
import SkillSection from "../component/SkillSection";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
