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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-150" />

            <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 group-hover:bg-navy transition-colors duration-500">
              <User size={32} className="text-navy group-hover:text-gold transition-colors duration-500" />
            </div>

            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-display font-bold text-navy">The Visionary</h3>
              <p className="text-warm-gray font-body text-lg leading-relaxed">
                Onyekwere Akym Uche is a Nigerian entrepreneur, humanitarian, and politician, primarily known for his involvement in Abia State politics.
              </p>
              <p className="text-warm-gray font-body text-lg leading-relaxed">
                He is the founder of <span className="font-semibold text-gold">THE OAU FOUNDATION</span>, a humanitarian platform that works to uplift communities and empower individuals.
              </p>

              <div className="pt-4">
                <Link to="/bio" className="inline-flex items-center justify-center bg-navy text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-navy hover:shadow-lg transition-all duration-300">
                  Read His Bio
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Box 2: The Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-150" />

            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
              <ShieldAlert size={32} className="text-navy group-hover:text-navy transition-colors duration-500" />
            </div>

            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-display font-bold text-navy">The Mission</h3>
              <p className="text-warm-gray font-body text-lg leading-relaxed">
                The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need.
              </p>
              <p className="text-warm-gray font-body text-lg leading-relaxed">
                Our foundation works tirelessly to promote sustainable development, alleviate poverty, and provide humanitarian assistance to vulnerable populations.
              </p>

              <div className="pt-4">
                <Link to="/foundation" className="inline-flex items-center justify-center bg-navy text-white font-body font-bold px-8 py-3 rounded-full hover:bg-navy hover:text-white hover:shadow-lg transition-all duration-300">
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
              <Youtube size={32} className="text-red-600" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-navy leading-tight">
            WATCH OUR <span className="text-gold">IMPACT</span>
          </h2>
          <div className="w-24 h-1.5 gradient-gold mx-auto rounded-full" />
          <p className="text-warm-gray font-body text-xl max-w-2xl mx-auto mt-6">
            See the OAU Foundation in action as we work tirelessly to uplift and empower our communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {[
            "AwME7qwK7NA?si=7de-W9RmcGFoNEwV",
            "Vs2KDZF_O28?si=lAki3k5ZwHi4c8tw",
            "OkAwAGzlvlI?si=5RU28OqALSyXAHLH"
          ].map((vId, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gold/10 hover:border-gold/30 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-2">
                <div className="aspect-video rounded-2xl overflow-hidden relative">
                  {/* Subtle overlay effect before hover */}
                  <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
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
