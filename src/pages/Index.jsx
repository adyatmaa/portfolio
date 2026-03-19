import AboutSection from "../component/AboutSection";
import ContactSection from "../component/ContactSection";
import HeroSection from "../component/HeroSection";
import ProjectSection from "../component/ProjectSection";
import SkillSection from "../component/SkillSection";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
