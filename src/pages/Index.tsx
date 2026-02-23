import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoundationSection from "@/components/FoundationSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ValuesSection from "@/components/ValuesSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import PoliticsSection from "@/components/PoliticsSection";
import JoinUsSection from "@/components/JoinUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <FoundationSection />
    <FocusAreasSection />
    <ValuesSection />
    <MissionVisionSection />
    <PoliticsSection />
    <JoinUsSection />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Index;
