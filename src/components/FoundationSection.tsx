import { Heart, Shield, Users, AlertTriangle } from "lucide-react";
import logo from "@/assets/logo.png";

const pillars = [
  {
    icon: Heart,
    title: "Providing Aid and Saving Lives",
    desc: "Humanitarian efforts make a difference in times of crisis. Learn how we're making an impact.",
  },
  {
    icon: Shield,
    title: "Relief for Those in Need",
    desc: "Dedicated to providing humanitarian assistance and support to vulnerable communities worldwide.",
  },
  {
    icon: Users,
    title: "Empowering Communities, Saving Lives",
    desc: "Discover how our humanitarian work is transforming lives and bringing hope.",
  },
  {
    icon: AlertTriangle,
    title: "Humanitarian Support When It Matters Most",
    desc: "Learn about our emergency response efforts and how we're helping those affected by crisis.",
  },
];

const FoundationSection = () => (
  <section id="about" className="py-24 bg-cream">
    <div className="container mx-auto px-4">
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <img src={logo} alt="OAU Foundation Logo" className="h-24 mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy">
          THE OAU FOUNDATION
        </h2>
        <p className="text-warm-gray font-body text-lg leading-relaxed">
          A foundation whose mission is dedicated to impacting humanity through humanitarian efforts. The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need. Our foundation works tirelessly to promote sustainable development, alleviate poverty, and provide humanitarian assistance to vulnerable populations.
        </p>
      </div>

      {/* Pillar Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-gold group"
          >
            <p.icon className="text-gold mb-4 group-hover:scale-110 transition-transform" size={36} />
            <h3 className="font-display font-semibold text-navy text-lg mb-2">{p.title}</h3>
            <p className="text-warm-gray font-body text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FoundationSection;
