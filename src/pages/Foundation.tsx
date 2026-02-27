import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinUsSection from "@/components/JoinUsSection";
import { BookOpen, HeartPulse, TrendingUp, HandHelping, Target, Eye, Handshake, ShieldCheck, Users, Lightbulb, HeartHandshake, Sparkles, CheckCircle2, Quote } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

const coreValues = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Providing access to quality education, promoting literacy, and supporting educational infrastructure development.",
  },
  {
    icon: HeartPulse,
    title: "Health",
    desc: "Improving healthcare outcomes, increasing access to medical services, and promoting health awareness.",
  },
  {
    icon: TrendingUp,
    title: "Economic Empowerment",
    desc: "Supporting entrepreneurship, vocational training, and economic opportunities to reduce poverty and promote self-sufficiency.",
  },
  {
    icon: HandHelping,
    title: "Humanitarian Response",
    desc: "Providing emergency assistance, relief, and support to communities affected by crises.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Foundation = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-24 gradient-navy relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-light/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content in Glass Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative z-20 order-2 lg:order-1"
          >
            {/* Decorative background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-navy-light/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

            <div className="relative space-y-8 text-center lg:text-left bg-navy-dark/40 backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-gold font-body font-bold tracking-[0.3em] uppercase text-xs sm:text-sm"
                >
                  Humanitarian · NGO · Development
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight"
                >
                  THE OAU<br /><span className="text-gold-light">FOUNDATION</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gold-light/80 font-body text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
              >
                A humanitarian non-governmental organization dedicated to improving lives. Inspired by the principles of <span className="text-gold font-semibold uppercase">Onyekwere Akym Uche</span>, we work tirelessly to promote sustainable development and alleviate poverty.
              </motion.p>
            </div>
          </motion.div>

          {/* Logo directly on background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group p-4">
              {/* Dynamic glow effect behind logo only */}
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                src={logo}
                alt="OAU Foundation Logo"
                className="relative z-10 w-64 md:w-80 lg:w-[480px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Detailed Info Section */}
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(11,37,69,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Introduction & Principle */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold font-body text-sm font-bold uppercase tracking-wider mb-2">
              Transforming Lives
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy leading-tight">
              A commitment to strengthened communities through <span className="text-gold">compassion and innovation</span>.
            </h2>
            <div className="space-y-4 text-warm-gray font-body text-lg leading-relaxed">
              <p>
                The OAU Foundation is a humanitarian organization committed to transforming lives and strengthening communities through compassion, innovation, and sustainable development initiatives.
              </p>
              <p>
                Founded on the belief that every individual deserves dignity, opportunity, and hope, the foundation works to address pressing social challenges by delivering impactful programs in education, healthcare, economic empowerment, and humanitarian support.
              </p>
              <p>
                Through strategic partnerships and community-driven solutions, we empower people not only to overcome immediate challenges but to build a future defined by resilience, independence, and shared prosperity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-navy rounded-[2.5rem] p-10 text-center relative overflow-hidden shadow-2xl group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-gold/20 transition-colors" />
            <div className="relative z-10">
              <Quote className="text-gold opacity-20 mx-auto mb-6" size={48} />
              <p className="text-2xl font-display font-bold text-white leading-tight mb-4 text-center">
                "When people are empowered, communities <span className="text-gold">thrive</span>."
              </p>
              <div className="w-16 h-1 gradient-gold mx-auto rounded-full" />
              <p className="text-gold-light/60 mt-6 font-body italic text-sm text-center">
                Our core principle
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Purpose & Opening Statement */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-display font-black text-navy uppercase tracking-tight">Our <span className="text-gold">Purpose</span></h2>
            <p className="text-warm-gray font-body text-lg max-w-2xl mx-auto">
              We exist to bridge the gaps in our communities caused by poverty, healthcare inequality, and economic hardship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Provide Hope", desc: "Where opportunities are limited, we bring light and resources." },
              { icon: HeartHandshake, title: "Practical Solutions", desc: "Supporting vulnerable populations with direct, impactful aid." },
              { icon: BookOpen, title: "Skills Development", desc: "Promoting education and vocational training for self-sufficiency." },
              { icon: HeartPulse, title: "Healthcare Access", desc: "Working to improve medical services and health outcomes." },
              { icon: TrendingUp, title: "Economic Independence", desc: "Encouraging entrepreneurship and financial resilience." },
              { icon: Users, title: "Stronger Communities", desc: "Building healthier, safer, and more connected societies." }
            ].map((purpose, idx) => (
              <motion.div
                key={purpose.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-navy/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-navy mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <purpose.icon size={24} />
                </div>
                <h4 className="text-xl font-display font-bold text-navy mb-2">{purpose.title}</h4>
                <p className="text-warm-gray font-body text-sm leading-relaxed">{purpose.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-navy/5 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden group"
        >
          {/* Accent Glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy/2 group-hover:bg-navy/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none transition-colors" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest">
                <Target size={14} /> Our Approach
              </div>
              <h3 className="text-3xl font-display font-black text-navy leading-tight">
                Sustainable change happens when <span className="text-gold">communities</span> are actively involved.
              </h3>
              <p className="text-warm-gray font-body text-lg leading-relaxed">
                Rather than temporary interventions, we invest in long-term empowerment that creates generational impact. That is why our programs are designed correctly from the start.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Community-focused", color: "bg-navy text-white" },
                { label: "Impact-driven", color: "bg-gold text-navy" },
                { label: "Inclusive & Accessible", color: "bg-slate-100 text-navy" },
                { label: "Sustainable & Scalable", color: "bg-navy-light text-white" }
              ].map((item, idx) => (
                <div key={item.label} className={`${item.color} p-6 rounded-2xl flex flex-col justify-end min-h-[140px] shadow-lg group/item hover:scale-[1.02] transition-transform`}>
                  <CheckCircle2 className="mb-auto opacity-40 group-hover/item:opacity-100 transition-opacity" size={28} />
                  <span className="font-display font-bold leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-display font-bold text-navy text-center mb-12"
        >
          Core Values
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coreValues.map((v) => (
            <motion.div
              key={v.title}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-md border-t-4 border-gold hover:shadow-xl transition-all group"
            >
              <v.icon className="text-gold mb-4 group-hover:scale-110 transition-transform" size={36} />
              <h3 className="font-display font-semibold text-navy text-lg mb-2">{v.title}</h3>
              <p className="text-warm-gray font-body text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-lg p-8 gradient-navy text-center space-y-4 shadow-xl"
        >
          <Target className="text-gold mx-auto" size={40} />
          <h3 className="text-2xl font-display font-bold text-gold-light">Our Mission</h3>
          <p className="text-gold-light/70 font-body leading-relaxed">
            To empower communities and promote human well-being through sustainable development programs, emergency response, and advocacy.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-lg p-8 gradient-navy  border-2 border-gold/30 text-center space-y-4 shadow-xl"
        >
          <Eye className="text-gold mx-auto" size={40} />
          <h3 className="text-2xl font-display font-bold text-gold-light">Our Vision</h3>
          <p className="text-gold-light/70 font-body leading-relaxed">
            A world where every individual has access to basic necessities, opportunities, and rights, enabling them to live a dignified and fulfilling life.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Approach & Values */}
    <section className="py-20 gradient-navy">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center md:text-left group"
        >
          <Handshake className="text-gold mx-auto md:mx-0 group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-2xl font-display font-bold text-gold-light">Our Approach</h3>
          <p className="text-gold-light/70 font-body text-lg leading-relaxed font-light">
            We work in partnership with local communities, governments, and international organizations to design and implement effective programs that address the root causes of poverty, inequality, and social injustice.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-center md:text-left group"
        >
          <ShieldCheck className="text-gold mx-auto md:mx-0 group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-2xl font-display font-bold text-gold-light">Our Values</h3>
          <p className="text-gold-light/70 font-body text-lg leading-relaxed font-light">
            Compassion, integrity, accountability, and commitment to delivering high-quality services that make a lasting impact.
          </p>
        </motion.div>
      </div>
    </section>

    <JoinUsSection />
    <Footer />
  </div>
);

export default Foundation;
