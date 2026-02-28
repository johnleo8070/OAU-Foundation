import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const MissionVisionSection = () => (
  <section className="py-24 bg-card relative overflow-hidden">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] p-10 bg-navy-light/20 border border-white/5 text-center space-y-6 shadow-xl group"
      >
        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors">
          <Target className="text-gold" size={32} />
        </div>
        <h3 className="text-3xl font-display font-bold text-white">Our Mission</h3>
        <p className="text-white/70 font-body text-lg leading-relaxed font-light">
          To empower communities and promote human well-being through sustainable development programs, emergency response, and advocacy.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-[2rem] p-10 bg-navy-light/20 border border-white/5 text-center space-y-6 shadow-xl group"
      >
        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors">
          <Eye className="text-gold" size={32} />
        </div>
        <h3 className="text-3xl font-display font-bold text-white">Our Vision</h3>
        <p className="text-white/70 font-body text-lg leading-relaxed font-light">
          A world where every individual has access to basic necessities, opportunities, and rights, enabling them to live a dignified and fulfilling life.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MissionVisionSection;
