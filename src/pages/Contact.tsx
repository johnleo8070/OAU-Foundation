import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Message sent! We'll get back to you soon.");
    setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gold-light mb-4">Contact Us</h1>
          <p className="text-gold-light/70 font-body text-lg">We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-lg p-8 shadow-lg border-t-4 border-gold">
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
                    className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                    className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity w-full"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-bold text-navy">Contact Info</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Phone className="text-navy" size={18} />
                </div>
                <div>
                  <p className="font-body font-semibold text-navy">Phone</p>
                  <p className="text-warm-gray font-body">09035269615</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="text-navy" size={18} />
                </div>
                <div>
                  <p className="font-body font-semibold text-navy">Email</p>
                  <p className="text-warm-gray font-body">info@onyekwereakymuche.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-navy" size={18} />
                </div>
                <div>
                  <p className="font-body font-semibold text-navy">Address</p>
                  <p className="text-warm-gray font-body">Plot 56/58 Umuokeyi World Bank Housing Estate Annexed. Umuahia, Abia State</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-body font-semibold text-navy mb-3">Find us on:</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-navy hover:opacity-80 transition-opacity">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
