import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Users, Handshake } from "lucide-react";

const FormCard = ({ title, icon: Icon, fields }: { title: string; icon: React.ElementType; fields: string[] }) => {
  const [form, setForm] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${title} form submitted! We'll be in touch.`);
    setForm({});
  };

  return (
    <div className="bg-card rounded-lg p-8 shadow-lg border-t-4 border-gold">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
          <Icon className="text-navy" size={24} />
        </div>
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
                className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            ) : (
              <input
                type={field === "Email" ? "email" : "text"}
                required
                maxLength={field === "Email" ? 255 : 100}
                value={form[field] || ""}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full border border-border rounded-md px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

const GetInvolved = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="pt-28 pb-8 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gold-light mb-4">Get Involved</h1>
        <p className="text-gold-light/70 font-body text-lg">Join us in making a difference.</p>
      </div>
    </section>

    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <FormCard
          title="Volunteer"
          icon={Users}
          fields={["Full Name", "Email", "Phone", "How would you like to help?"]}
        />
        <FormCard
          title="Partner with Us"
          icon={Handshake}
          fields={["Organization Name", "Contact Person", "Email", "Phone", "Partnership Details"]}
        />
      </div>
    </section>

    <Footer />
  </div>
);

export default GetInvolved;
