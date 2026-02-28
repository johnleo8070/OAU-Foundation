
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
      {/* Decorative Background Elements - Simplified */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy-light/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/40 border border-white/20 rounded-[3.5rem] p-8 md:p-16 shadow-xl relative overflow-hidden"
        >
          {/* Inner glass highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-6xl font-display font-black text-navy leading-tight">
                  THE OAU <span className="text-gold">FOUNDATION</span>
                </h2>
                <div className="w-24 h-1.5 gradient-gold mx-auto md:mx-0 rounded-full" />
              </div>

              <p className="text-warm-gray font-body text-xl leading-relaxed font-light">
                The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need. Passionate about impacting humanity through humanitarian efforts.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-navy text-white font-body font-bold px-8 py-3.5 rounded-2xl text-sm shadow-lg cursor-default border border-white/10"
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-navy rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/5 relative group overflow-hidden"
            >
              {/* Decorative inner light for navy - Simplified */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

              <h3 className="text-3xl font-display font-black text-white mb-8 relative z-10">
                JOIN OUR <span className="text-gold">MISSION</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="block font-body text-xs font-bold text-white/40 uppercase tracking-[0.2em] pl-1">Full Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-body text-white focus:bg-white/10 focus:border-gold/50 transition-all placeholder:text-white/20 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-body text-xs font-bold text-white/40 uppercase tracking-[0.2em] pl-1">Email</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-body text-white focus:bg-white/10 focus:border-gold/50 transition-all placeholder:text-white/20 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-body text-xs font-bold text-white/40 uppercase tracking-[0.2em] pl-1">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-body text-white focus:bg-white/10 focus:border-gold/50 resize-none transition-all placeholder:text-white/20 outline-none"
                    placeholder="Tell us how you'd like to help..."
                  />
                </div>
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="gradient-gold text-navy font-display font-black uppercase tracking-widest px-10 py-5 rounded-2xl w-full shadow-lg transition-all mt-6"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
