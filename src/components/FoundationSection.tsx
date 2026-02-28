import { Heart, Shield, Users, AlertTriangle } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Heart,
    title: "Providing Aid and Saving Lives",
    desc: "Humanitarian efforts make a difference in times of crisis. Learn how we're making an impact.",
  },
  {
    icon: Shield,
    title: "Relief for Those in Need",
    desc: "Dedicated to providing humanitarian assistance and support to vulnerable communities worldwide.",
  },
  {
    icon: Users,
    title: "Empowering Communities, Saving Lives",
    desc: "Discover how our humanitarian work is transforming lives and bringing hope.",
  },
  {
    icon: AlertTriangle,
    title: "Humanitarian Support When It Matters Most",
    desc: "Learn about our emergency response efforts and how we're helping those affected by crisis.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  }
};

const FoundationSection = () => (
  <section id="about" className="py-24 bg-cream relative overflow-hidden">
    {/* Decorative background circle */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20 space-y-6"
      >
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="OAU Foundation Logo"
          loading="lazy"
          decoding="async"
          className="h-28 mx-auto mb-6 drop-shadow-xl"
        />
        <h2 className="text-4xl sm:text-5xl font-display font-black text-navy tracking-tight">
          THE OAU FOUNDATION
        </h2>
        <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-8" />
        <p className="text-warm-gray font-body text-xl leading-relaxed font-light">
          A foundation whose mission is dedicated to impacting humanity through humanitarian efforts. The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need.
        </p>
      </motion.div>

      {/* Pillar Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 }
              }
            }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[1.5rem] p-8 shadow-xl hover:shadow-2xl transition-all border-t-8 border-navy group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
              <p.icon className="text-gold" size={32} />
            </div>
            <h3 className="font-display font-bold text-navy text-xl mb-4 group-hover:text-gold transition-colors">{p.title}</h3>
            <p className="text-warm-gray font-body text-sm leading-relaxed opacity-80">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FoundationSection;
