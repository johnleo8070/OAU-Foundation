import { BookOpen, HeartPulse, TrendingUp, HandHelping, Siren, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const areas = [
  { label: "Education", icon: BookOpen },
  { label: "Health", icon: HeartPulse },
  { label: "Economic Empowerment", icon: TrendingUp },
  { label: "Humanitarian Response", icon: HandHelping },
  { label: "Emergency Assistance", icon: Siren },
  { label: "Poverty Alleviation", icon: Coins },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
      duration: 0.6
    }
  }
};

const FocusAreasSection = () => (
  <section id="focus" className="py-24 gradient-navy relative overflow-hidden">
    {/* Floating background particles - Minimalist for performance */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gold/5 rounded-full blur-md lg:blur-[60px]"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            left: `${20 + i * 40}%`,
            top: `${30}%`,
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-display font-black text-white mb-4">
          Our <span className="text-gold">Focus Areas</span>
        </h2>
        <div className="w-20 h-1 gradient-gold mx-auto rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
      >
        {areas.map((a) => (
          <motion.div
            key={a.label}
            variants={itemVariants}
            whileHover={{
              y: -12,
              scale: 1.05,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
            className="flex flex-col items-center gap-6 bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-white/10 hover:border-gold/30 transition-all group cursor-default shadow-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-inner relative z-10"
            >
              <a.icon size={40} />
            </motion.div>

            <span className="text-white font-display font-black text-xl lg:text-2xl tracking-wide uppercase relative z-10 group-hover:text-gold transition-colors">{a.label}</span>
            <div className="w-12 h-1 bg-gold/30 rounded-full group-hover:w-20 group-hover:bg-gold transition-all duration-500 relative z-10" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Link
          to="/foundation"
          className="relative inline-block mt-16 group/btn overflow-hidden gradient-gold text-navy font-body font-bold uppercase tracking-widest px-12 py-4 rounded-xl shadow-2xl hover:shadow-gold/40 transition-all"
        >
          <span className="relative z-10">Explore Our Impact</span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default FocusAreasSection;
