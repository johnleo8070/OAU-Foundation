import politicsImg from "@/assets/politics.jpeg";
import { motion } from "framer-motion";

const PoliticsSection = () => (
  <section className="py-24 gradient-navy overflow-hidden relative">
    {/* Decorative background circle */}
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -translate-x-1/2" />

    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -2 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center"
      >
        <div className="relative group p-4">
          <div className="absolute -inset-4 bg-gold/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          <div className="absolute -inset-2 border-2 border-gold/10 rounded-[2.5rem] group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          <img
            src={politicsImg}
            alt="OAU in traditional attire"
            loading="lazy"
            decoding="async"
            className="relative z-10 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.3)] w-full max-w-[420px] object-cover border-[10px] border-white/5 group-hover:scale-[1.05] transition-all duration-700 ease-out"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="space-y-10 text-center md:text-left"
      >
        <div className="space-y-6">
          <h2 className="text-5xl sm:text-7xl font-display font-black text-white leading-tight tracking-tighter uppercase">Politics <span className="text-gold italic block sm:inline">& Legacy</span></h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-2 gradient-gold mx-auto md:mx-0 rounded-full"
          />
        </div>
        <p className="text-gold-light/90 font-body text-xl lg:text-3xl leading-relaxed font-light first-letter:text-6xl first-letter:font-black first-letter:text-gold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
          In politics, <span className="text-gold font-bold italic">OAU</span> was a 2023 gubernatorial candidate in Abia State under the umbrella of Action Alliance (AA) party, advocating for a leadership that's transparent, developmental, and accountable to the people of his state.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PoliticsSection;
