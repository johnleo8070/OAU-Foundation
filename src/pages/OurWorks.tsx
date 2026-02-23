import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import works1 from "@/assets/ourWorks-1.webp";
import works2 from "@/assets/ourWorks-2.webp";
import works3 from "@/assets/ourWorks-3.webp";
import works4 from "@/assets/ourWorks-4.webp";
import works5 from "@/assets/ourWorks-5.webp";
import works6 from "@/assets/ourWorks-6.webp";

const images = [
  { src: works1, alt: "OAU Foundation community outreach" },
  { src: works2, alt: "OAU Foundation community group photo" },
  { src: works3, alt: "OAU Foundation team with community members" },
  { src: works4, alt: "OAU Foundation food relief supplies" },
  { src: works5, alt: "OAU Foundation relief items" },
  { src: works6, alt: "OAU Foundation volunteers in action" },
];

const OurWorks = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="pt-28 pb-8 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gold-light mb-4">Our Works</h1>
        <p className="text-gold-light/70 font-body text-lg max-w-2xl mx-auto">
          A glimpse into the humanitarian efforts and community impact of The OAU Foundation.
        </p>
      </div>
    </section>

    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-lg shadow-lg border-2 border-transparent hover:border-gold/50 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-card">
                <p className="text-navy font-body text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default OurWorks;
