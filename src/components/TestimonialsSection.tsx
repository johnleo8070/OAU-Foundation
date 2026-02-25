import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Onyekwere Akym Uchechukwu is a man of quiet strength and unwavering integrity—an embodiment of purpose, passion, and principle. His brilliance is matched only by his humility, and his consistent drive to uplift others speaks volumes about his character.",
    name: "Dr. Johnny Ogbah",
  },
  {
    quote: "Your dedication to touching lives, uplifting communities, and setting a standard of excellence has made this day more than a personal milestone—it is a celebration for everyone blessed by your impact.",
    name: "Uchechukwu S. Ogah, PhD, CON, FCA",
  },
  {
    quote: "A Good man he is, selfless and always willing to sacrifice for the benefit of others Akym, family and humanity will always uphold your good life and philanthropic gestures!!!",
    name: "Maduememm Lotanna Viator",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  }
};

const TestimonialsSection = () => (
  <section className="py-24 gradient-navy overflow-hidden relative">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]"
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-display font-black text-white mb-4">
          Voices of <span className="text-gold">Impact</span>
        </h2>
        <div className="w-24 h-1 gradient-gold mx-auto rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8 Perspective-[1000px]"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            whileHover={{
              y: -15,
              rotateY: 5,
              rotateX: -5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
            }}
            className="bg-navy-dark/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 space-y-6 hover:border-gold/30 transition-all shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-colors" />

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote className="text-gold opacity-50" size={40} />
            </motion.div>

            <p className="text-gold-light/90 font-body text-lg leading-relaxed italic font-light">
              "{t.quote}"
            </p>

            <div className="pt-4 border-t border-white/5">
              <p className="text-gold font-display font-bold text-sm tracking-widest uppercase">{t.name}</p>
              <p className="text-gold-light/40 font-body text-xs mt-1">Verified Endorsement</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
