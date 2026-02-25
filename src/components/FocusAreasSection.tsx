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
    {/* Floating background particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute bg-gold rounded-full blur-2xl"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {areas.map((a) => (
          <motion.div
            key={a.label}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
            className="flex flex-col items-center gap-6 bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 hover:border-gold/40 transition-all group cursor-default shadow-2xl Perspective-[1000px]"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold/20 transition-colors"
            >
              <a.icon className="text-gold" size={32} />
            </motion.div>
            <span className="text-white font-display font-bold text-lg tracking-wide uppercase">{a.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        viewport={{ once: true }}
      >
        <Link
          to="/foundation"
          className="relative inline-block mt-16 group/btn overflow-hidden gradient-gold text-navy font-body font-bold uppercase tracking-widest px-12 py-4 rounded-xl shadow-2xl hover:shadow-gold/40 transition-all font-bold"
        >
          <span className="relative z-10">Explore Our Impact</span>
          <motion.div
            className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"
          />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default FocusAreasSection;
