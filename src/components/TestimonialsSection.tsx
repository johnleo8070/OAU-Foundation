import johnnyImg from "@/assets/testimonial-johnny.jpg";
import viatorImg from "@/assets/testimonial-viator.jpg";
import ogahImg from "@/assets/testimonial-ogah.jpg";
import { User, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Onyekwere Akym Uchechukwu is a man of quiet strength and unwavering integrity—an embodiment of purpose, passion, and principle. His brilliance is matched only by his humility, and his consistent drive to uplift others speaks volumes about his character.",
    name: "Dr. Johnny Ogbah",
    image: johnnyImg
  },
  {
    quote: "Your dedication to touching lives, uplifting communities, and setting a standard of excellence has made this day more than a personal milestone—it is a celebration for everyone blessed by your impact.",
    name: "Uchechukwu S. Ogah, PhD, CON, FCA",
    image: ogahImg
  },
  {
    quote: "A Good man he is, selfless and always willing to sacrifice for the benefit of others Akym, family and humanity will always uphold your good life and philanthropic gestures!!!",
    name: "Maduememm Lotanna Viator",
    image: viatorImg
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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

const TestimonialsSection = () => (
  <section className="py-24 gradient-navy overflow-hidden relative">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-md lg:blur-[60px] -translate-y-1/2 translate-x-1/2" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
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
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            whileHover={{
              y: -15,
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="bg-navy-dark border border-white/5 rounded-[3rem] p-10 space-y-8 hover:border-gold/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all duration-500 shadow-2xl relative group overflow-hidden h-full flex flex-col items-center text-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/15 transition-colors duration-700" />

            {/* Testimonial Image/Header */}
            <div className="relative z-10">
              <div className="relative mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full border-4 border-gold/20 p-1.5 group-hover:border-gold transition-all duration-500 shadow-xl"
                >
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-navy-light/30 rounded-full flex items-center justify-center">
                      <User className="text-gold/50" size={36} />
                    </div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -bottom-1 -right-1 w-9 h-9 bg-gold rounded-full flex items-center justify-center shadow-lg border-4 border-navy-dark"
                >
                  <Quote className="text-navy-dark" size={16} fill="currentColor" />
                </motion.div>
              </div>
            </div>

            <p className="text-gold-light/90 font-body text-xl leading-relaxed italic font-light relative z-10 flex-grow">
              "{t.quote}"
            </p>

            <div className="pt-8 border-t border-white/10 w-full relative z-10">
              <p className="text-gold font-display font-black text-lg tracking-[0.1em] uppercase group-hover:tracking-[0.15em] transition-all duration-500">{t.name}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-8 h-px bg-gold/20" />
                <p className="text-gold-light/30 font-body text-xs uppercase tracking-widest font-bold italic">Member of Foundation</p>
                <div className="w-8 h-px bg-gold/20" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
