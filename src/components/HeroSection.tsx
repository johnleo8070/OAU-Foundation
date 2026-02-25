import heroImg from "@/assets/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center gradient-navy overflow-hidden pt-20">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-0 md:gap-12 items-center">

      {/* Text Content in Glass Box */}
      <motion.div
        className="order-2 md:order-1 relative z-20 group translate-y-[-140px] md:translate-y-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-navy-light/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

        <div className="relative space-y-8 text-center md:text-left bg-navy-dark/40 backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gold font-body font-bold tracking-[0.3em] uppercase text-xs sm:text-sm"
            >
              Entrepreneur · Humanitarian · Politician
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1]"
            >
              Onyekwere<br /><span className="text-gold-light">Akym Uche</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gold-light/80 font-body text-lg sm:text-xl max-w-md mx-auto md:mx-0 leading-relaxed font-light"
          >
            Founder of <span className="font-bold text-gold">THE OAU FOUNDATION</span>, dedicated to <span className="text-white">uplifting communities</span> and empowering individuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4"
          >
            <Link
              to="/bio"
              className="gradient-gold text-navy font-body font-bold uppercase tracking-[0.15em] px-10 py-4 rounded-xl shadow-2xl hover:shadow-gold/30 hover:scale-105 transition-all text-xs sm:text-sm"
            >
              Learn More
            </Link>
            <Link
              to="/get-involved"
              className="bg-white/5 border border-white/20 text-white font-body font-bold uppercase tracking-[0.15em] px-10 py-4 rounded-xl hover:bg-gold hover:text-navy hover:border-gold transition-all text-xs sm:text-sm backdrop-blur-md"
            >
              Join Us
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex justify-center order-1 md:order-2 relative z-10"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gold/20 rounded-full blur-3xl opacity-50 animate-pulse" />
          <img
            src={heroImg}
            alt="Onyekwere Akym Uche in blue suit"
            className="relative z-10 w-[25rem] md:w-[32rem] lg:w-[40rem] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 translate-y-[20px] md:translate-y-[60px]"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
