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
  hidden: { opacity: 0, scale: 0.5, y: 30, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 15 }
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
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {areas.map((a) => (
          <motion.div
            key={a.label}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 }
              }
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="flex flex-col items-center gap-6 bg-navy-light/20 rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-gold/30 transition-all group cursor-default shadow-lg"
          >
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold mb-2 group-hover:bg-gold/10 transition-colors">
              <a.icon size={32} />
            </div>
            <span className="text-white font-display font-bold text-lg tracking-wide uppercase">{a.label}</span>
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
