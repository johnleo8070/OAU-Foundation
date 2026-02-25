import traditionalImg from "@/assets/traditional.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";

const words = ["Compassionate", "Charitable", "Socially Concerned"];

const JoinUsSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for joining us! We'll be in touch.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="join" className="py-24 bg-cream overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="text-center md:text-left space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-display font-black text-navy leading-tight">THE OAU FOUNDATION</h2>
              <div className="w-20 h-1 gradient-gold mx-auto md:mx-0 rounded-full" />
            </div>

            <p className="text-warm-gray font-body text-xl leading-relaxed font-light">
              The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need. Passionate about impacting humanity through humanitarian efforts.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: i * 0.1
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                  }}
                  className="gradient-gold text-navy font-body font-bold px-8 py-3 rounded-2xl text-sm shadow-md cursor-default"
                >
                  {w}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative group inline-block"
            >
              <div className="absolute -inset-4 bg-gold/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={traditionalImg}
                alt="OAU in traditional Igbo attire"
                className="relative z-10 mx-auto md:mx-0 rounded-[2rem] shadow-2xl w-80 object-cover mt-8 border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            whileHover={{ rotateY: -5, rotateX: 5 }}
            className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-gold/10 relative Perspective-[1000px] overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-3xl font-display font-black text-navy mb-10 relative z-10">JOIN OUR <span className="text-gold">MISSION</span></h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="block font-body text-sm font-bold text-navy/60 uppercase tracking-widest pl-1">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-navy/5 border-none rounded-2xl px-6 py-4 font-body text-navy focus:ring-4 focus:ring-gold/20 transition-all placeholder:text-navy/20"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-body text-sm font-bold text-navy/60 uppercase tracking-widest pl-1">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-navy/5 border-none rounded-2xl px-6 py-4 font-body text-navy focus:ring-4 focus:ring-gold/20 transition-all placeholder:text-navy/20"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-body text-sm font-bold text-navy/60 uppercase tracking-widest pl-1">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-navy/5 border-none rounded-2xl px-6 py-4 font-body text-navy focus:ring-4 focus:ring-gold/20 resize-none transition-all placeholder:text-navy/20"
                  placeholder="Tell us how you'd like to help..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212,175,55,0.4)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="gradient-gold text-navy font-display font-black uppercase tracking-widest px-10 py-5 rounded-2xl w-full shadow-xl transition-all mt-6"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
