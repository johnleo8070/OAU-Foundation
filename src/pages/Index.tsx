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
import { Link } from "react-router-dom";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />

    {/* Brief Foundation Intro */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="text-warm-gray font-body text-lg leading-relaxed">
            Onyekwere Akym Uche is a Nigerian entrepreneur, humanitarian, and politician, primarily known for his involvement in Abia State politics.
          </p>
          <p className="text-warm-gray font-body text-lg leading-relaxed">
            He is the founder of <span className="font-semibold text-navy">THE OAU FOUNDATION</span>, a humanitarian platform that works to uplift communities and empower individuals.
          </p>
          <Link to="/bio" className="inline-block gradient-gold text-navy font-body font-semibold px-6 py-2 rounded-md hover:opacity-90 transition-opacity mt-2">
            Read More
          </Link>
        </div>
        <div className="space-y-4">
          <p className="text-warm-gray font-body text-lg leading-relaxed">
            The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need.
          </p>
          <p className="text-warm-gray font-body text-lg leading-relaxed">
            Our foundation works tirelessly to promote sustainable development, alleviate poverty, and provide humanitarian assistance to vulnerable populations.
          </p>
          <Link to="/foundation" className="inline-block gradient-gold text-navy font-body font-semibold px-6 py-2 rounded-md hover:opacity-90 transition-opacity mt-2">
            Read More
          </Link>
        </div>
      </div>
    </section>

    <FoundationSection />
    <FocusAreasSection />
    <ValuesSection />
    <MissionVisionSection />
    <PoliticsSection />
    <JoinUsSection />
    <TestimonialsSection />

    {/* Our Works Preview */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy mb-8">Our Works</h2>
        <Link to="/our-works" className="inline-block gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
          View More
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
