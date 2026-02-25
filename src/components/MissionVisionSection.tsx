import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const MissionVisionSection = () => (
  <section className="py-24 bg-card relative overflow-hidden">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -100, rotateY: -20 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="rounded-[2rem] p-10 gradient-navy text-center space-y-6 shadow-2xl border border-white/5 group"
      >
        <motion.div
          whileInView={{ rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors"
        >
          <Target className="text-gold" size={32} />
        </motion.div>
        <h3 className="text-3xl font-display font-bold text-gold-light">Our Mission</h3>
        <p className="text-gold-light/70 font-body text-lg leading-relaxed font-light">
          To empower communities and promote human well-being through sustainable development programs, emergency response, and advocacy.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, rotateY: 20 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="rounded-[2rem] p-10 bg-white border-2 border-gold/10 text-center space-y-6 shadow-2xl group"
      >
        <motion.div
          whileInView={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-navy/10 transition-colors"
        >
          <Eye className="text-gold" size={32} />
        </motion.div>
        <h3 className="text-3xl font-display font-bold text-navy">Our Vision</h3>
        <p className="text-warm-gray font-body text-lg leading-relaxed font-light">
          A world where every individual has access to basic necessities, opportunities, and rights, enabling them to live a dignified and fulfilling life.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MissionVisionSection;
