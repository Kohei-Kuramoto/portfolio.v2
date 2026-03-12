import Navbar from "@/components/Navbar";
import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import WorkSection from "@/sections/WorkSection";
import HistorySection from "@/sections/HistorySection";
import ContactSection from "@/sections/ContactSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <WorkSection />
        <HistorySection />
        <ContactSection />
      </main>
    </>
  );
}
