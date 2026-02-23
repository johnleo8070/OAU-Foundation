import { Target, Eye } from "lucide-react";

const MissionVisionSection = () => (
  <section className="py-24 bg-card">
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
);

export default MissionVisionSection;
