import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import aboutImg from "@/assets/about-founder.jpeg";
import casualImg from "@/assets/casual.jpeg";
import pointingImg from "@/assets/pointing.jpeg";
import { GraduationCap, Heart, Vote, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Bio = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-32 gradient-navy relative z-0">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center relative z-20 group"
          >
            {/* Decorative background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-navy-light/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

            <div className="relative space-y-8 text-center md:text-left bg-navy-dark/40 backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 text-gold-light text-sm font-semibold mb-2 bg-navy/20">
                  <Award size={16} />
                  <span>Founder</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold text-white leading-tight">
                  Onyekwere Akym<br /><span className="text-gold-light">Uche</span>
                </h1>
              </div>

              <p className="text-white/80 font-body text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                Fondly called <span className="text-gold font-bold">OAU</span> by his friends, is a Nigerian philanthropist, politician, and entrepreneur born on the 9th of September 1974, in Enugu State. He hails from Amaba in Isuikwuato Local Government Area of Abia State. His early life was shaped by strong community values and discipline.
              </p>

              <div className="pt-2">
                <Link
                  to="/#join-us"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-body font-bold px-8 py-3 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 group/btn"
                >
                  Get Involved
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center relative z-20"
          >
            <img
              src={aboutImg}
              alt="Onyekwere Akym Uche"
              className="w-full max-w-[360px] rounded-[1.5rem] shadow-2xl border-t-8 border-gold translate-y-[10px] object-cover hover:-translate-y-2 hover:translate-y-[90px] transition-transform duration-500 bg-navy"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Background Details Section */}
    <section className="py-24 gradient-navy relative overflow-hidden backdrop-blur-sm">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Box 1: Educational Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative z-20"
          >
            {/* Decorative background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-navy-light/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

            <div className="relative h-full bg-navy-dark/40 backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center transition-all duration-500">
              <div className="relative mb-8 w-full max-w-[280px]">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold to-gold-light rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-white/20 relative z-10 shadow-2xl">
                  <img src={casualImg} alt="Education" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <GraduationCap className="text-gold" size={20} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white leading-tight">Educational Background</h3>
                </div>
                <div className="w-12 h-1 gradient-gold mx-auto rounded-full opacity-50" />
                <div className="space-y-4 text-white/70 font-body text-lg leading-relaxed text-center">
                  <p>
                    OAU had his primary education at Udi Road Primary School in Asata, Enugu State. He went further to attend the College of the Immaculate Conception (C.I.C.), Enugu, for his secondary education.
                  </p>
                  <p>
                    OAU obtained a Bachelor of Science degree in Economics from Abia State University. Other educational pursuits saw him attend Nashville Auto Diesel College in Nashville, Tennessee, USA.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Philanthropy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative z-20"
          >
            {/* Decorative background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-navy-light/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

            <div className="relative h-full bg-navy-dark/40 backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center transition-all duration-500">
              <div className="relative mb-8 w-full max-w-[280px]">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold to-gold-light rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-white/20 relative z-10 shadow-2xl">
                  <img src={pointingImg} alt="Philanthropy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Heart className="text-gold" size={20} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white leading-tight">Philanthropy & Humanitarian</h3>
                </div>
                <div className="w-12 h-1 gradient-gold mx-auto rounded-full opacity-50" />
                <div className="space-y-4 text-white/70 font-body text-lg leading-relaxed text-center">
                  <p>
                    OAU's commitment to service is evident through his nonprofit organization, the Onyekwere Akym Uche Foundation, focusing on healthcare, education, and community development.
                  </p>
                  <p>
                    The foundation has provided critical medical assistance, supported local hospitals, and offered scholarships to many indigent students across communities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Political History */}
    <section className="py-20 gradient-navy">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-3xl text-center space-y-6"
      >
        <div className="flex justify-center mb-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-lg"
          >
            <Vote className="text-navy" size={28} />
          </motion.div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gold-light">Political History & Career</h2>
        <p className="text-gold-light/70 font-body text-lg leading-relaxed">
          During the 2023 Abia Governorship Election, Onyekwere Akym Uchechukwu contested the election as the AA candidate, campaigning on a promise to rescue the state from "political and economic slavery".
        </p>
        <p className="text-gold-light/70 font-body text-lg leading-relaxed">
          In April 2025, Uchechukwu officially joined the Labour Party (LP) and declared his support for Governor Alex Otti, stating that Otti was already implementing the changes he had hoped to achieve for Abia.
        </p>
      </motion.div>
    </section>

    <TestimonialsSection />
    <Footer />
  </div>
);

export default Bio;
