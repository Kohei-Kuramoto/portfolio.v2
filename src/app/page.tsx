import Navbar from "@/components/Navbar";
import LangModal from "@/components/LangModal";
import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import WorkSection from "@/sections/WorkSection";
import EducationSection from "@/sections/EducationSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ContactSection from "@/sections/ContactSection";

export default function Page() {
  return (
    <>
      <LangModal />
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <WorkSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
