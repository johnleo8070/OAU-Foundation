import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Users, Handshake, Heart, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-founder.jpeg";
import ScrollToTop from "@/components/ScrollToTop";

const FormCard = ({ title, icon: Icon, fields, delay }: { title: string; icon: React.ElementType; fields: string[]; delay: number }) => {
  const [form, setForm] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${title} form submitted! We'll be in touch.`);
    setForm({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-card rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-slate-100 flex flex-col h-full group"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shadow-sm">
          <Icon size={28} />
        </div>
        <h2 className="text-3xl font-display font-black text-navy">{title}</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-5">
          {fields.map((field) => (
            <div key={field}>
              <label className="block font-body text-[10px] font-black text-navy/40 uppercase tracking-widest mb-2">{field}</label>
              {field === "Message" || field === "How would you like to help?" || field === "Partnership Details" ? (
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form[field] || ""}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all resize-none bg-slate-50/50"
                />
              ) : (
                <input
                  type={field === "Email" ? "email" : "text"}
                  required
                  maxLength={field === "Email" ? 255 : 100}
                  value={form[field] || ""}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all bg-slate-50/50"
                />
              )}
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="bg-navy text-white font-display font-black text-xs uppercase tracking-[0.2em] px-8 py-5 rounded-2xl hover:bg-gold hover:text-navy hover:shadow-2xl transition-all w-full mt-10"
        >
          Submit Application
        </motion.button>
      </form>
    </motion.div>
  );
};

const GetInvolved = () => (
  <div className="min-h-screen bg-white overflow-hidden">
    <Navbar />
    <ScrollToTop />

    {/* --- PREMIUM HERO SECTION --- */}
    <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 lg:pb-0 overflow-hidden bg-navy">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy to-navy z-10" />
        <div className="absolute top-0 right-0 w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] bg-gold/10 rounded-full blur-[80px] lg:blur-[140px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-[10px] lg:text-xs font-black tracking-[0.3em] uppercase mx-auto lg:mx-0">
                <Heart size={14} className="animate-pulse" />
                Empowerment through Partnership
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter">
                WALK WITH <br />
                <span className="text-gold-light italic">US</span>
              </h1>

              <p className="text-gold-light/60 font-body text-base lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Be part of a movement that is redefining progress in Africa. Whether you’re an individual or an organization, there’s a place for you in our vision.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-4">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-lg group">
                  <Target size={20} className="text-gold group-hover:scale-125 transition-transform" />
                  <div className="text-left">
                    <p className="text-white font-display font-bold text-sm leading-none">Shared Goals</p>
                    <p className="text-[9px] font-body font-bold text-white/40 uppercase tracking-widest mt-1">Direct Impact</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-lg group">
                  <Sparkles size={20} className="text-gold group-hover:rotate-12 transition-transform" />
                  <div className="text-left">
                    <p className="text-white font-display font-bold text-sm leading-none">Mutual Growth</p>
                    <p className="text-[9px] font-body font-bold text-white/40 uppercase tracking-widest mt-1">Sustainable Vision</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0 mb-12 lg:mb-0 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] -z-10" />
              <div className="absolute -inset-8 border border-gold/10 rounded-[4rem] -z-20 hidden md:block" />

              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-4 border-white/5 max-w-[400px]">
                <img
                  src={aboutImg}
                  alt="Join OAU Foundation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover scale-[1.02]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 glass-navy border-t border-white/10">
                  <p className="font-display font-bold text-white text-lg leading-none">Global Vision</p>
                  <p className="font-body text-gold/80 text-[10px] font-bold tracking-widest uppercase mt-1">Join the community</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>

    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <FormCard
          title="Volunteer"
          icon={Users}
          fields={["Organization Name", "Full Name", "Email", "Phone", "How would you like to help?"]}
          delay={0}
        />
        <FormCard
          title="Partner with Us"
          icon={Handshake}
          fields={["Organization Name", "Contact Person", "Email", "Phone", "Partnership Details"]}
          delay={0.2}
        />
      </div>
    </section>

    <Footer />
  </div>
);

export default GetInvolved;
