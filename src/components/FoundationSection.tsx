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
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      duration: 0.6
    }
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
            variants={itemVariants}
            whileHover={{
              y: -15,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border-t-[6px] border-navy group relative overflow-hidden h-full flex flex-col items-center text-center hover:shadow-2xl transition-all"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-20 h-20 bg-navy/5 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors duration-500 relative z-10 shadow-inner"
            >
              <p.icon className="text-gold" size={36} />
            </motion.div>

            <h3 className="font-display font-black text-navy text-2xl mb-5 group-hover:text-gold transition-colors relative z-10 leading-tight">
              {p.title}
            </h3>

            <p className="text-warm-gray font-body text-base leading-relaxed opacity-70 group-hover:opacity-90 transition-opacity relative z-10">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FoundationSection;
