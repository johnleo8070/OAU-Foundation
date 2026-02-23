import heroImg from "@/assets/hero-img.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center gradient-navy overflow-hidden pt-20">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div className="space-y-6 text-center md:text-left">
        <p className="text-gold font-body font-semibold tracking-widest uppercase text-sm">
          Entrepreneur · Humanitarian · Politician
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gold-light leading-tight">
          Onyekwere<br />Akym Uche
        </h1>
        <p className="text-gold-light/70 font-body text-lg max-w-md mx-auto md:mx-0">
          Founder of <span className="font-semibold text-gold">THE OAU FOUNDATION</span>, dedicated to uplifting communities and empowering individuals.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            to="/bio"
            className="gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Learn More
          </Link>
          <Link
            to="/get-involved"
            className="border border-gold text-gold font-body font-semibold px-8 py-3 rounded-md hover:bg-gold/10 transition-colors"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gold/20 rounded-full blur-3xl" />
          <img
            src={heroImg}
            alt="Onyekwere Akym Uche in blue suit"
            className="relative z-10 w-80 md:w-96 lg:w-[28rem] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
