import traditionalImg from "@/assets/traditional.jpeg";

const words = ["Compassionate", "Charitable", "Socially Concerned"];

const JoinUsSection = () => (
  <section id="join" className="py-24 bg-cream">
    <div className="container mx-auto px-4 text-center space-y-8">
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy">JOIN US</h2>
      <p className="text-warm-gray font-body text-lg max-w-2xl mx-auto leading-relaxed">
        The OAU Foundation is passionate about impacting humanity through humanitarian efforts, creating possibility in Humanity, Charity Service and empowerment programs.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {words.map((w) => (
          <span
            key={w}
            className="gradient-gold text-navy font-body font-semibold px-6 py-2 rounded-full text-sm"
          >
            {w}
          </span>
        ))}
      </div>
      <img
        src={traditionalImg}
        alt="OAU in traditional Igbo attire"
        className="mx-auto rounded-lg shadow-xl w-64 object-cover mt-8"
      />
    </div>
  </section>
);

export default JoinUsSection;
