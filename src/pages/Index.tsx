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
import { motion } from "framer-motion";
import { User, ShieldAlert, Youtube } from "lucide-react";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <FoundationSection />

    {/* Brief Foundation Intro */}
    <section className="py-24 bg-white/50 relative overflow-hidden">
      {/* Decorative blobs - Simplified for performance */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-md lg:blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy/5 rounded-full blur-md lg:blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">

          {/* Box 1: Onyekwere Akym Uche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1], // Custom premium ease
              delay: 0.1
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-navy/5 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-150" />

            <div className="w-20 h-20 rounded-2xl bg-navy/5 flex items-center justify-center mb-10 group-hover:bg-navy transition-colors duration-500 shadow-inner">
              <User size={36} className="text-navy group-hover:text-gold transition-colors duration-500" />
            </div>

            <div className="space-y-6 relative z-10">
              <h3 className="text-3xl font-display font-black text-navy leading-tight">The Visionary</h3>
              <p className="text-warm-gray font-body text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                Onyekwere Akym Uche is a Nigerian entrepreneur, humanitarian, and politician, renowned for his transformative leadership in Abia State.
              </p>
              <p className="text-warm-gray font-body text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                He is the founder of <span className="font-semibold text-gold">THE OAU FOUNDATION</span>, a catalyst for social change and community empowerment.
              </p>

              <div className="pt-6">
                <Link to="/bio" className="inline-flex items-center justify-center bg-navy text-white font-body font-bold px-10 py-4 rounded-2xl hover:bg-gold hover:text-navy hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                  Read His Bio
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Box 2: The Foundation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-150" />

            <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mb-10 group-hover:bg-gold transition-colors duration-500 shadow-inner">
              <ShieldAlert size={36} className="text-navy group-hover:text-navy transition-colors duration-500" />
            </div>

            <div className="space-y-6 relative z-10">
              <h3 className="text-3xl font-display font-black text-navy leading-tight">The Mission</h3>
              <p className="text-warm-gray font-body text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                The OAU Foundation is a global force for good, dedicated to rewriting the stories of underserved communities through innovative intervention.
              </p>
              <p className="text-warm-gray font-body text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                Our tireless commitment to sustainable development and poverty alleviation fuels progress across the nation.
              </p>

              <div className="pt-6">
                <Link to="/foundation" className="inline-flex items-center justify-center bg-navy text-white font-body font-bold px-10 py-4 rounded-2xl hover:bg-gold hover:text-navy hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                  Discover Our Work
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>


    <FocusAreasSection />
    <ValuesSection />
    <MissionVisionSection />
    <PoliticsSection />
    <JoinUsSection />
    <TestimonialsSection />

    {/* Our Works Preview - Featured Videos */}
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative background elements - Simplified */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-md lg:blur-[60px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy/5 rounded-full blur-md lg:blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 space-y-6"
        >
          <div className="flex justify-center mb-2">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              className="w-20 h-20 rounded-[1.5rem] bg-gold flex items-center justify-center shadow-[0_15px_30px_rgba(255,191,0,0.3)]"
            >
              <Youtube size={40} className="text-red-700" />
            </motion.div>
          </div>
          <h2 className="text-5xl sm:text-7xl font-display font-black text-navy leading-[1.1] tracking-tighter">
            WATCH OUR <span className="text-gold italic">IMPACT</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-2 gradient-gold mx-auto rounded-full"
          />
          <p className="text-warm-gray font-body text-xl lg:text-3xl max-w-3xl mx-auto mt-8 font-light leading-relaxed">
            Witness the OAU Foundation in high-definition as we pioneer social transformation and community elevation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        >
          {[
            "AwME7qwK7NA?si=7de-W9RmcGFoNEwV",
            "Vs2KDZF_O28?si=lAki3k5ZwHi4c8tw",
            "OkAwAGzlvlI?si=5RU28OqALSyXAHLH"
          ].map((vId, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.4 } }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gold/10 hover:border-gold/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group"
            >
              <div className="p-3">
                <div className="aspect-video rounded-[2rem] overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${vId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="relative z-0"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            to="/our-works"
            className="inline-flex items-center justify-center bg-navy text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-gold hover:text-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Explore More Works
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div >
);

export default Index;
