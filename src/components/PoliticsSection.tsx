import politicsImg from "@/assets/politics.jpeg";
import { motion } from "framer-motion";

const PoliticsSection = () => (
  <section className="py-24 gradient-navy overflow-hidden relative">
    {/* Decorative background circle */}
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -translate-x-1/2" />

    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-gold/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={politicsImg}
            alt="OAU in traditional attire"
            className="relative z-10 rounded-[2rem] shadow-2xl w-80 md:w-96 object-cover border-4 border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8 text-center md:text-left"
      >
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">Politics</h2>
          <div className="w-16 h-1 gradient-gold mx-auto md:mx-0 rounded-full" />
        </div>
        <p className="text-gold-light/80 font-body text-xl leading-relaxed font-light">
          In politics, <span className="text-gold font-bold italic">OAU</span> was a 2023 gubernatorial candidate in Abia State under the umbrella of Action Alliance (AA) party, advocating for a leadership that's transparent, developmental, and accountable to the people of his state.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PoliticsSection;
