import traditionalImg from "@/assets/traditional.jpeg";
import { useState } from "react";

const words = ["Compassionate", "Charitable", "Socially Concerned"];

const JoinUsSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for joining us! We'll be in touch.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="join" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy">THE OAU FOUNDATION</h2>
            <p className="text-warm-gray font-body text-lg leading-relaxed">
              The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need. Passionate about impacting humanity through humanitarian efforts, creating possibility in Humanity, Charity Service and empowerment programs.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {words.map((w) => (
                <span key={w} className="gradient-gold text-navy font-body font-semibold px-6 py-2 rounded-full text-sm">
                  {w}
                </span>
              ))}
            </div>
            <img src={traditionalImg} alt="OAU in traditional Igbo attire" className="mx-auto md:mx-0 rounded-lg shadow-xl w-64 object-cover mt-4" />
          </div>

          {/* Form */}
          <div className="bg-card rounded-lg p-8 shadow-lg border-t-4 border-gold">
            <h3 className="text-2xl font-display font-bold text-navy mb-6">JOIN US</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body text-sm font-medium text-navy mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button type="submit" className="gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity w-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
