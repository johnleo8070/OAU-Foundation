import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinUsSection from "@/components/JoinUsSection";
import { BookOpen, HeartPulse, TrendingUp, HandHelping, Target, Eye, Handshake, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const coreValues = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Providing access to quality education, promoting literacy, and supporting educational infrastructure development.",
  },
  {
    icon: HeartPulse,
    title: "Health",
    desc: "Improving healthcare outcomes, increasing access to medical services, and promoting health awareness.",
  },
  {
    icon: TrendingUp,
    title: "Economic Empowerment",
    desc: "Supporting entrepreneurship, vocational training, and economic opportunities to reduce poverty and promote self-sufficiency.",
  },
  {
    icon: HandHelping,
    title: "Humanitarian Response",
    desc: "Providing emergency assistance, relief, and support to communities affected by crises.",
  },
];

const Foundation = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-20 gradient-navy text-center">
      <div className="container mx-auto px-4 space-y-6">
        <img src={logo} alt="OAU Foundation Logo" className="h-24 mx-auto" />
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gold-light">THE OAU FOUNDATION</h1>
        <p className="text-gold-light/70 font-body text-lg max-w-3xl mx-auto leading-relaxed">
          The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need. Inspired by the principles of THE ONYEKWERE AKYM UCHE FOUNDATION (OAU), our foundation works tirelessly to promote sustainable development, alleviate poverty, and provide humanitarian assistance to vulnerable populations.
        </p>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy text-center mb-12">Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v) => (
            <div key={v.title} className="bg-card rounded-lg p-6 shadow-md border-t-4 border-gold hover:shadow-xl transition-shadow">
              <v.icon className="text-gold mb-4" size={36} />
              <h3 className="font-display font-semibold text-navy text-lg mb-2">{v.title}</h3>
              <p className="text-warm-gray font-body text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="rounded-lg p-8 gradient-navy text-center space-y-4">
          <Target className="text-gold mx-auto" size={40} />
          <h3 className="text-2xl font-display font-bold text-gold-light">Our Mission</h3>
          <p className="text-gold-light/70 font-body leading-relaxed">
            To empower communities and promote human well-being through sustainable development programs, emergency response, and advocacy.
          </p>
        </div>
        <div className="rounded-lg p-8 bg-cream border-2 border-gold/30 text-center space-y-4">
          <Eye className="text-gold mx-auto" size={40} />
          <h3 className="text-2xl font-display font-bold text-navy">Our Vision</h3>
          <p className="text-warm-gray font-body leading-relaxed">
            A world where every individual has access to basic necessities, opportunities, and rights, enabling them to live a dignified and fulfilling life.
          </p>
        </div>
      </div>
    </section>

    {/* Approach & Values */}
    <section className="py-20 gradient-navy">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-4 text-center md:text-left">
          <Handshake className="text-gold mx-auto md:mx-0" size={40} />
          <h3 className="text-2xl font-display font-bold text-gold-light">Our Approach</h3>
          <p className="text-gold-light/70 font-body text-lg leading-relaxed">
            We work in partnership with local communities, governments, and international organizations to design and implement effective programs that address the root causes of poverty, inequality, and social injustice.
          </p>
        </div>
        <div className="space-y-4 text-center md:text-left">
          <ShieldCheck className="text-gold mx-auto md:mx-0" size={40} />
          <h3 className="text-2xl font-display font-bold text-gold-light">Our Values</h3>
          <p className="text-gold-light/70 font-body text-lg leading-relaxed">
            Compassion, integrity, accountability, and commitment to delivering high-quality services that make a lasting impact.
          </p>
        </div>
      </div>
    </section>

    <JoinUsSection />
    <Footer />
  </div>
);

export default Foundation;
