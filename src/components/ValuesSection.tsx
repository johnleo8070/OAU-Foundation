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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-display font-black text-navy mb-4">
          Our Core <span className="text-gold">Values</span>
        </h2>
        <div className="w-20 h-1 gradient-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.15
              }}
              className="flex gap-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex-shrink-0 w-20 h-20 rounded-3xl gradient-gold flex items-center justify-center shadow-xl transition-all relative z-10"
              >
                <v.icon className="text-navy" size={32} />
              </motion.div>
              <div className="space-y-3">
                <h3 className="font-display font-black text-navy text-2xl lg:text-3xl group-hover:text-gold transition-colors leading-tight">{v.title}</h3>
                <p className="text-warm-gray font-body text-lg lg:text-xl leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }}
          className="flex justify-center xl:justify-end"
        >
          <div className="relative group p-6 max-w-[450px]">
            {/* Soft Glow */}
            <div className="absolute -inset-4 bg-gold/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            {/* Border Accent */}
            <div className="absolute -inset-4 border-2 border-gold/10 rounded-[3.5rem] group-hover:scale-105 transition-transform duration-700" />

            <img
              src={aboutImg}
              alt="Onyekwere Akym Uche seated"
              loading="lazy"
              decoding="async"
              className="relative z-10 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] w-full object-cover border-[10px] border-white group-hover:scale-[1.03] group-hover:-rotate-1 transition-all duration-700 ease-out"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ValuesSection;
