import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import works1 from "@/assets/ourWorks-1.webp";
import works2 from "@/assets/ourWorks-2.webp";
import works3 from "@/assets/ourWorks-3.webp";
import works4 from "@/assets/ourWorks-4.webp";
import works5 from "@/assets/ourWorks-5.webp";
import works6 from "@/assets/ourWorks-6.webp";
import { motion } from "framer-motion";

const images = [
  { src: works1, alt: "OAU Foundation community outreach" },
  { src: works2, alt: "OAU Foundation community group photo" },
  { src: works3, alt: "OAU Foundation team with community members" },
  { src: works4, alt: "OAU Foundation food relief supplies" },
  { src: works5, alt: "OAU Foundation relief items" },
  { src: works6, alt: "OAU Foundation volunteers in action" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const OurWorks = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />

    <section className="pt-28 pb-8 gradient-navy text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gold-light mb-4">Our Works</h1>
        <p className="text-gold-light/70 font-body text-lg max-w-2xl mx-auto font-light">
          A glimpse into the humanitarian efforts and community impact of The OAU Foundation.
        </p>
      </motion.div>
    </section>

    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-xl shadow-lg border border-transparent hover:border-gold/50 transition-all bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <p className="text-navy font-body text-sm font-semibold leading-relaxed">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-cream border-t border-gold/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold text-navy mb-4">Watch Our Impact</h2>
          <div className="w-16 h-1 gradient-gold mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            "AwME7qwK7NA?si=7de-W9RmcGFoNEwV",
            "Vs2KDZF_O28?si=lAki3k5ZwHi4c8tw",
            "OkAwAGzlvlI?si=5RU28OqALSyXAHLH"
          ].map((vId, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-card rounded-xl overflow-hidden shadow-xl border border-gold/10 hover:border-gold/30 transition-all"
            >
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${vId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default OurWorks;
