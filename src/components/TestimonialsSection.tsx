import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Onyekwere Akym Uchechukwu is a man of quiet strength and unwavering integrity—an embodiment of purpose, passion, and principle. His brilliance is matched only by his humility, and his consistent drive to uplift others speaks volumes about his character. In a world in need of true leadership, he stands tall—not just in words, but in daily action. I celebrate the man he is and the impact he continues to make.",
    name: "Dr. Johnny Ogbah",
  },
  {
    quote: "Your dedication to touching lives, uplifting communities, and setting a standard of excellence has made this day more than a personal milestone—it is a celebration for everyone blessed by your impact. May the coming years unveil new heights of fulfillment, influence, and joy.",
    name: "Uchechukwu S. Ogah, PhD, CON, FCA",
  },
  {
    quote: "A Good man he is, selfless and always willing to sacrifice for the benefit of others Akym, family and humanity will always uphold your good life and philanthropic gestures!!! A man that speaks the bold truth no matter who's OX is Goered",
    name: "Maduememm Lotanna Viator. BSC Accts, MNIM, MBA Mgt., ACA, ACTI.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 gradient-navy">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-gold-light text-center mb-12">
        Testimonials
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-navy-dark/60 border border-gold/20 rounded-lg p-6 space-y-4 hover:border-gold/50 transition-colors"
          >
            <Quote className="text-gold" size={28} />
            <p className="text-gold-light/80 font-body text-sm leading-relaxed italic">
              "{t.quote}"
            </p>
            <p className="text-gold font-body font-semibold text-sm">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
