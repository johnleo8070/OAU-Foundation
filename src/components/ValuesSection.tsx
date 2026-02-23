import { Heart, Gift, Crown } from "lucide-react";
import aboutImg from "@/assets/about-founder.jpeg";

const values = [
  {
    icon: Heart,
    title: "Humanitarian",
    desc: "With every project, outreach, and partnership, we remain committed to restoring hope, improving lives, and building a future where no one is left behind.",
  },
  {
    icon: Gift,
    title: "Generous",
    desc: "Our generous services are built on a commitment to giving, compassion, and meaningful impact. We focus on providing support, resources, and opportunities that help individuals and communities grow stronger.",
  },
  {
    icon: Crown,
    title: "OAU (The Leader)",
    desc: "As a transformative leader, OAU's legacy is built on determination, service, and a pursuit of positive change. He's an advocate of prosperity.",
  },
];

const ValuesSection = () => (
  <section className="py-24 bg-cream">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy text-center mb-16">
        Our Core Values
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full gradient-gold flex items-center justify-center">
                <v.icon className="text-navy" size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy text-lg mb-1">{v.title}</h3>
                <p className="text-warm-gray font-body text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Onyekwere Akym Uche seated"
            className="rounded-lg shadow-2xl w-80 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ValuesSection;
