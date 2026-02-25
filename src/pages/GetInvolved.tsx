import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";

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
      className="bg-card rounded-lg p-8 shadow-lg border-t-4 border-gold h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ rotate: 15 }}
          className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-md"
        >
          <Icon className="text-navy" size={24} />
        </motion.div>
        <h2 className="text-2xl font-display font-bold text-navy">{title}</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field}>
            <label className="block font-body text-sm font-medium text-navy mb-1">{field}</label>
            {field === "Message" || field === "How would you like to help?" || field === "Partnership Details" ? (
              <textarea
                required
                maxLength={1000}
                rows={3}
                value={form[field] || ""}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
              />
            ) : (
              <input
                type={field === "Email" ? "email" : "text"}
                required
                maxLength={field === "Email" ? 255 : 100}
                value={form[field] || ""}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            )}
          </div>
        ))}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-all w-full shadow-lg mt-4"
        >
          Send
        </motion.button>
      </form>
    </motion.div>
  );
};

const GetInvolved = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />

    <section className="pt-28 pb-8 gradient-navy text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gold-light mb-4">Get Involved</h1>
        <p className="text-gold-light/70 font-body text-lg">Join us in making a difference.</p>
      </motion.div>
    </section>

    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <FormCard
          title="Volunteer"
          icon={Users}
          fields={["Full Name", "Email", "Phone", "How would you like to help?"]}
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
