import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageSquare, Clock, Globe } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-founder.jpeg";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  };

  const socialIcons = [Facebook, Twitter, Instagram, Linkedin];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* --- PREMIUM HERO SECTION (2-Column OurWorks Style) --- */}
      <section className="relative min-h-[80vh] flex items-center pt-28 pb-12 lg:pb-0 overflow-hidden bg-navy">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy to-navy z-10" />
          <div className="absolute top-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-gold/10 rounded-full blur-[60px] lg:blur-[120px] -translate-y-1/2 translate-x-1/2" />
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
                  <MessageSquare size={14} className="animate-pulse" />
                  We are here to listen
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter">
                  GET IN <br />
                  <span className="text-gold-light italic">TOUCH</span>
                </h1>

                <p className="text-gold-light/60 font-body text-base lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Have questions or want to collaborate? Reach out to us and let’s discuss how we can create a lasting impact together.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-4">
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-lg group">
                    <Clock size={20} className="text-gold group-hover:rotate-12 transition-transform" />
                    <div className="text-left">
                      <p className="text-white font-display font-bold text-sm leading-none whitespace-nowrap">24hr Response</p>
                      <p className="text-[9px] font-body font-bold text-white/40 uppercase tracking-widest mt-1">Direct Support</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-lg group">
                    <Globe size={20} className="text-gold group-hover:animate-spin-slow transition-transform" />
                    <div className="text-left">
                      <p className="text-white font-display font-bold text-sm leading-none">Global Network</p>
                      <p className="text-[9px] font-body font-bold text-white/40 uppercase tracking-widest mt-1">Pan-African Vision</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image Column (OurWorks Style) */}
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
                    alt="Onyekwere Akym Uche Office"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover scale-[1.02]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 glass-navy border-t border-white/10">
                    <p className="font-display font-bold text-white text-lg leading-none">Founding Office</p>
                    <p className="font-body text-gold/80 text-[10px] font-bold tracking-widest uppercase mt-1">Open for Collaboration</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-lg p-8 shadow-lg border-t-4 border-gold"
          >
            <h2 className="text-2xl font-display font-bold text-navy mb-6">Message us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-navy mb-1">Contact Number</label>
                <input
                  type="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-navy mb-1">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-navy mb-1">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-all w-full shadow-lg"
              >
                Send
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-display font-bold text-navy">Contact Info</h2>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "09035269615" },
                { icon: Mail, label: "Email", value: "info@onyekwereakymuche.com" },
                { icon: MapPin, label: "Address", value: "Plot 56/58 Umuokeyi World Bank Housing Estate Annexed. Umuahia, Abia State" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-navy" size={18} />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy">{item.label}</p>
                    <p className="text-warm-gray font-body">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="font-body font-semibold text-navy mb-4">Find us on:</p>
              <div className="flex gap-4">
                {socialIcons.map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="#"
                    className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-navy shadow-md transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
