import { Heart, Gift, Crown } from "lucide-react";
import aboutImg from "@/assets/about-founder.jpeg";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Humanitarian",
    desc: "With every project, outreach, and partnership, we remain committed to restoring hope, improving lives, and building a future where no one is left behind.",
  },
  {
    icon: Gift,
    title: "Generous",
    desc: "Our generous services are built on a commitment to giving, compassion, and meaningful impact. We focus on providing support, resources, and opportunities.",
  },
  {
    icon: Crown,
    title: "OAU (The Leader)",
    desc: "As a transformative leader, OAU's legacy is built on determination, service, and a pursuit of positive change. He's an advocate of prosperity.",
  },
];

const ValuesSection = () => (
  <section className="py-24 bg-cream overflow-hidden relative">
    {/* Decorative background circle */}
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-display font-black text-navy mb-4">
          Our Core <span className="text-gold">Values</span>
        </h2>
        <div className="w-20 h-1 gradient-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.15
              }}
              whileHover={{ x: 10 }}
              className="flex gap-6 group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center shadow-[0_10px_20px_rgba(212,175,55,0.3)] group-hover:shadow-gold/50 transition-all"
              >
                <v.icon className="text-navy" size={28} />
              </motion.div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-navy text-xl group-hover:text-gold transition-colors">{v.title}</h3>
                <p className="text-warm-gray font-body text-base leading-relaxed font-light">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group p-4"
          >
            <div className="absolute -inset-2 bg-gold/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={aboutImg}
              alt="Onyekwere Akym Uche seated"
              className="relative z-10 rounded-[2.5rem] shadow-2xl w-80 lg:w-96 object-cover border-8 border-white group-hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ValuesSection;
