import hero1 from "@/assets/hero-img.png";
import hero2 from "@/assets/traditional.jpeg";
import hero3 from "@/assets/casual.jpeg";
import hero4 from "@/assets/pointing.jpeg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  { tag: "Entrepreneur", image: hero1, color: "text-gold" },
  { tag: "Humanitarian", image: hero2, color: "text-white" },
  { tag: "Politician", image: hero3, color: "text-gold" },
  { tag: "Visionary Leader", image: hero4, color: "text-white" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-auto lg:h-[88vh] min-h-[700px] flex items-center gradient-navy overflow-hidden pt-32 pb-0 lg:pt-20">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-20 items-center md:items-end relative z-10 h-full">

        {/* Text Content */}
        <div className="order-2 md:order-1 relative z-20 pb-20 md:pb-24 lg:pb-32 -mt-20 md:mt-0">
          {/* Mobile Text Box Styling - Only visible on small screens */}
          <div className="md:hidden absolute inset-0 bg-navy-dark/80 backdrop-blur-2xl border-t border-white/10 rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] -z-10" />

          <motion.div
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative space-y-10 text-center md:text-left px-6 py-16 md:p-0"
          >
            <div className="space-y-6">
              {/* Tag Carousel synced with Image */}
              <div className="h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className={`${slides[current].color} font-display font-black tracking-[0.4em] uppercase text-sm sm:text-base`}
                  >
                    {slides[current].tag}
                  </motion.p>
                </AnimatePresence>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter uppercase">
                <span className="block font-light text-white/70 lg:text-5xl tracking-[0.15em] mb-4">Onyekwere</span>
                <span className="relative inline-block">
                  Akym <span className="text-gold italic">Uche</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-2 left-0 h-1.5 gradient-gold rounded-full opacity-40"
                  />
                </span>
              </h1>
            </div>

            <p className="text-gold-light/90 font-body text-xl lg:text-3xl max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
              Building a <span className="text-white font-bold">Resilient Abia</span> through selfless service and community-driven progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-6">
              <Link
                to="/bio"
                className="group relative overflow-hidden bg-gold text-navy font-display font-black uppercase tracking-widest px-12 py-5 rounded-2xl shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:shadow-gold/40 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="relative z-10">Founder's Journey</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
              <Link
                to="/foundation"
                className="group border-2 border-white/20 text-white font-display font-black uppercase tracking-widest px-12 py-5 rounded-2xl hover:bg-white hover:text-navy transition-all duration-500 hover:-translate-y-1"
              >
                Our Legacy
              </Link>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center md:justify-start gap-3 mt-12">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${current === i ? "bg-gold w-10" : "bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Image Carousel */}
        <div className="order-1 md:order-2 flex justify-center lg:justify-end relative h-[450px] sm:h-[600px] lg:h-[750px] items-end">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 1.05 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute inset-0 flex items-end justify-center lg:justify-end"
            >
              <div className="relative group/hero">
                {/* Dynamic Aura */}
                <div className="absolute -inset-10 bg-gold/10 rounded-full blur-[120px] opacity-0 group-hover/hero:opacity-100 transition-opacity duration-1000" />

                <img
                  src={slides[current].image}
                  alt={`Onyekwere Akym Uche - ${slides[current].tag}`}
                  className="relative z-10 w-[22rem] sm:w-[32rem] lg:w-[46rem] h-auto object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.6)] group-hover/hero:scale-[1.02] transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Static Cinematic Accents */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="w-[110%] aspect-square border border-gold/10 rounded-full scale-90"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="w-[130%] aspect-square border border-white/5 rounded-full scale-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
