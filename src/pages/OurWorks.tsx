import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import works1 from "@/assets/ourWorks-1.webp";
import works2 from "@/assets/ourWorks-2.webp";
import works3 from "@/assets/ourWorks-3.webp";
import works4 from "@/assets/ourWorks-4.webp";
import works5 from "@/assets/ourWorks-5.webp";
import works6 from "@/assets/ourWorks-6.webp";
import works7 from "@/assets/ourWorks-7.jpg";
import works8 from "@/assets/ourWorks-8.jpg";
import works9 from "@/assets/ourWorks-9.jpg";
import works10 from "@/assets/ourWorks-10.jpg";
import works11 from "@/assets/ourWorks-11.jpg";
import works12 from "@/assets/ourWorks-12.jpg";
import works13 from "@/assets/ourWorks-13.jpg";
import works14 from "@/assets/ourWorks-14.jpg";
import works15 from "@/assets/ourWorks-15.jpg";
import traditionalImg from "@/assets/traditional.jpeg";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Heart, Target, Users, Sparkles, Eye, Quote, CheckCircle2, Youtube, ImageIcon, GraduationCap, ShieldCheck as Protected, ArrowRight, Activity, Zap } from "lucide-react";
import { useRef } from "react";

const images = [
  { src: works1, alt: "OAU Foundation community outreach" },
  { src: works2, alt: "OAU Foundation community group photo" },
  { src: works3, alt: "OAU Foundation team with community members" },
  { src: works4, alt: "OAU Foundation food relief supplies" },
  { src: works5, alt: "OAU Foundation relief items" },
  { src: works6, alt: "OAU Foundation volunteers in action" },
  { src: works7, alt: "Founder at community gathering" },
  { src: works8, alt: "Founder greeting community leadership" },
  { src: works9, alt: "Humanitarian award ceremony" },
  { src: works10, alt: "Foundation event highlights" },
  { src: works11, alt: "Community leadership engagement" },
  { src: works12, alt: "Women's empowerment outreach" },
  { src: works13, alt: "Empowerment seminar highlights" },
  { src: works14, alt: "Celebration of community impact" },
  { src: works15, alt: "Large community support gathering" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const OurWorks = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-background selection:bg-gold/30 selection:text-navy">
      <Navbar />

      {/* --- PREMIUM HERO SECTION --- */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-20 pb-24 lg:pb-0 overflow-hidden bg-navy">
        {/* Cinematic Background Layer */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy to-navy z-10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-light/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Content Box */}
            <div className="lg:col-span-7 pt-8 lg:pt-0 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-[10px] lg:text-xs font-black tracking-[0.3em] uppercase mx-auto lg:mx-0">
                  <Activity size={14} className="animate-pulse" />
                  Global Standards · Local Impact
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter">
                  TRANSFORMING <br />
                  <span className="text-gold-light">HUMANITY</span>
                </h1>

                <p className="text-gold-light/60 font-body text-base lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  At the OAU Foundation, we transform compassion into action — delivering meaningful solutions that create lasting social impact across Africa.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-4 mb-10 lg:mb-0">
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border border-white/10">
                    <span className="text-2xl lg:text-3xl font-display font-black text-gold">10k+</span>
                    <span className="text-[10px] font-body font-bold text-white/50 uppercase tracking-widest leading-none text-left">Lives<br />Touched</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border border-white/10">
                    <span className="text-2xl lg:text-3xl font-display font-black text-gold">50+</span>
                    <span className="text-[10px] font-body font-bold text-white/50 uppercase tracking-widest leading-none text-left">Projects<br />Completed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Premium Image Presentation */}
            <div className="lg:col-span-5 h-full flex justify-center lg:justify-end mt-4 lg:mt-0 mb-12 lg:mb-0 relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Image Border Accent */}
                <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] -z-10" />
                <div className="absolute -inset-8 border border-gold/10 rounded-[4rem] -z-20 hidden md:block" />

                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-4 border-white/5">
                  <img
                    src={traditionalImg}
                    alt="Onyekwere Akym Uche"
                    className="w-full max-w-[420px] h-auto object-cover scale-[1.02]"
                  />
                  {/* Glass Overlay on Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 glass-navy border-t border-white/10">
                    <p className="font-display font-bold text-white text-lg">Onyekwere Akym Uche</p>
                    <p className="font-body text-gold/80 text-xs font-bold tracking-widest uppercase mt-1">Founding Visionary</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NARRATIVE CONTENT SECTION --- */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-navy to-transparent opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-32">

            {/* Staggered Content Grid */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="w-16 h-1 gradient-gold rounded-full" />
                <h2 className="text-4xl lg:text-5xl font-display font-black text-navy leading-tight">
                  Our Work is Driven by a <span className="text-gold">Deep Commitment</span> to Humanity.
                </h2>
                <div className="space-y-6 text-warm-gray font-body text-lg leading-relaxed font-light">
                  <p>
                    At the OAU Foundation, every initiative we undertake is designed to address real challenges faced by individuals and families while creating sustainable pathways toward growth, dignity, and opportunity.
                  </p>
                  <p className="bg-white p-8 rounded-[2rem] shadow-xl border-l-4 border-gold italic text-navy/80">
                    "We do not simply deliver aid — we build pathways for progress. Our work focuses on empowering people at every level of society."
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Impact Driven", desc: "Results that matter", color: "bg-navy" },
                  { icon: Target, title: "Precision", desc: "Targeted interventions", color: "bg-gold" },
                  { icon: Users, title: "Community", desc: "Rooted in locally", color: "bg-gold" },
                  { icon: Protected, title: "Sustainable", desc: "Perpetual growth", color: "bg-navy" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`${item.color === "bg-navy"
                      ? "bg-navy text-white"
                      : item.color === "bg-gold"
                        ? "bg-gold text-navy"
                        : "bg-white border border-navy/5 text-navy"
                      } p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all group`}
                  >
                    <item.icon className={`${item.color === 'bg-gold' ? 'text-navy' : 'text-gold'} mb-6`} size={28} />
                    <h4 className="font-display font-bold text-lg mb-2">{item.title}</h4>
                    <p className="font-body text-xs font-light opacity-60 leading-relaxed uppercase tracking-widest">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Guiding Principles - Mosaic Layout */}
            <div className="relative">
              <div className="text-center mb-16 space-y-4">
                <h3 className="text-3xl lg:text-4xl font-display font-black text-navy uppercase">Guiding <span className="text-gold">Principles</span></h3>
                <div className="w-24 h-1 gradient-gold mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Empowerment", val: "Over Dependency", icon: Sparkles },
                  { title: "Sustainability", val: "Over Short-term", icon: Eye },
                  { title: "Participation", val: "Over External Control", icon: Users }
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-1 rounded-[2.5rem] bg-gradient-to-br from-gold/30 to-transparent shadow-xl"
                  >
                    <div className="bg-white p-10 rounded-[2.4rem] h-full space-y-4">
                      <p.icon className="text-gold" size={32} />
                      <h5 className="font-display font-black text-navy text-xl uppercase tracking-tighter">{p.title}</h5>
                      <p className="font-body text-warm-gray font-light text-sm">{p.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REFINED UNIFORM GALLERY --- */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-gold text-xs font-black uppercase tracking-[0.2em]">
                <ImageIcon size={14} /> Visual Journey
              </div>
              <h2 className="text-5xl lg:text-7xl font-display font-black text-navy leading-none tracking-tighter">OUR <span className="text-gold">RECORDS</span></h2>
            </div>
            <p className="text-warm-gray font-body font-light text-lg max-w-sm text-center md:text-right">A documented record of our humanitarian milestones across diverse communities.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-2 rounded-[2.5rem] bg-slate-50 border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="text-navy font-display font-bold text-sm leading-relaxed group-hover:text-gold transition-colors">{img.alt}</p>
                  <div className="w-8 h-0.5 bg-gold/30 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CINEMATIC VIDEO SECTION --- */}
      <section className="py-32 gradient-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <div className="w-16 h-1 gradient-gold mx-auto rounded-full" />
            <h2 className="text-5xl lg:text-7xl font-display font-black text-white leading-none tracking-tighter font-[900]">
              CINEMATIC <span className="text-gold-light">IMPACT</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              "AwME7qwK7NA?si=7de-W9RmcGFoNEwV",
              "Vs2KDZF_O28?si=lAki3k5ZwHi4c8tw",
              "OkAwAGzlvlI?si=5RU28OqALSyXAHLH"
            ].map((vId, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                {/* Visual Frame */}
                <div className="absolute -inset-2 bg-gradient-to-br from-gold/30 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-50 transition-all duration-700" />

                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-navy-dark/40 border border-white/5 group-hover:border-gold/30 transition-all duration-500">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${vId}?rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-8 flex items-center justify-between px-4">
                  <div>
                    <p className="text-white font-display font-bold text-lg">Community Story 0{i + 1}</p>
                    <p className="text-gold/50 text-xs font-bold uppercase tracking-widest mt-1">Impact Report</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    <Youtube size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="inline-block p-4 rounded-3xl bg-slate-50 border border-navy/5 shadow-inner">
              <Quote className="text-gold" size={40} />
            </div>
            <h3 className="text-4xl lg:text-5xl font-display font-black text-navy leading-tight italic">
              "Every outreach represents a step toward a better future for generations to come."
            </h3>
            <div className="pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-navy text-white px-12 py-5 rounded-full font-display font-black text-lg shadow-2xl hover:bg-gold hover:text-navy transition-all flex items-center gap-4 mx-auto"
              >
                JOIN THE MISSION <ArrowRight size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWorks;
