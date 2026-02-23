import { BookOpen, HeartPulse, TrendingUp, HandHelping, Siren, Coins } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  { label: "Education", icon: BookOpen },
  { label: "Health", icon: HeartPulse },
  { label: "Economic Empowerment", icon: TrendingUp },
  { label: "Humanitarian Response", icon: HandHelping },
  { label: "Emergency Assistance", icon: Siren },
  { label: "Poverty Alleviation", icon: Coins },
];

const FocusAreasSection = () => (
  <section id="focus" className="py-24 gradient-navy">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-gold-light mb-12">
        Our Focus Areas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {areas.map((a) => (
          <div
            key={a.label}
            className="flex flex-col items-center gap-3 bg-navy-dark/50 rounded-lg p-6 border border-gold/20 hover:border-gold/60 transition-colors group"
          >
            <a.icon className="text-gold group-hover:scale-110 transition-transform" size={32} />
            <span className="text-gold-light font-body font-medium text-sm">{a.label}</span>
          </div>
        ))}
      </div>
      <Link to="/foundation" className="inline-block mt-10 gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
        Read More
      </Link>
    </div>
  </section>
);

export default FocusAreasSection;
