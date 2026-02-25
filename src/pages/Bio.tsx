import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import aboutImg from "@/assets/about-founder.jpeg";
import casualImg from "@/assets/casual.jpeg";
import pointingImg from "@/assets/pointing.jpeg";
import { GraduationCap, Heart, Vote } from "lucide-react";
import { motion } from "framer-motion";

const Bio = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-20 gradient-navy">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gold-light leading-tight">
            Onyekwere Akym<br />Uchechukwu
          </h1>
          <p className="text-gold-light/70 font-body text-lg leading-relaxed max-w-lg">
            Fondly called <span className="text-gold font-semibold">OAU</span> by his friends, is a Nigerian philanthropist, politician, and entrepreneur born on the 9th of September 1974, in Enugu State. He hails from Amaba in Isuikwuato Local Government Area of Abia State. His early life was shaped by strong community values and discipline.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src={aboutImg} alt="Onyekwere Akym Uche" className="rounded-lg shadow-2xl w-80 object-cover border border-gold/10" />
        </motion.div>
      </div>
    </section>

    {/* Educational Background */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center order-2 md:order-1"
        >
          <img src={casualImg} alt="OAU casual" className="rounded-lg shadow-xl w-72 object-cover border border-gold/10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 order-1 md:order-2"
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-lg"
            >
              <GraduationCap className="text-navy" size={24} />
            </motion.div>
            <h2 className="text-3xl font-display font-bold text-navy">Educational Background</h2>
          </div>
          <p className="text-warm-gray font-body text-lg leading-relaxed">
            OAU had his primary education at Udi Road Primary School in Asata, Enugu State. He went further to attend the College of the Immaculate Conception (C.I.C.), Enugu, for his secondary education.
          </p>
          <p className="text-warm-gray font-body text-lg leading-relaxed">
            OAU obtained a Bachelor of Science degree in Economics from Abia State University. Other educational pursuits saw him attend Nashville Auto Diesel College in Nashville, Tennessee, USA.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Philanthropy */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-lg"
            >
              <Heart className="text-navy" size={24} />
            </motion.div>
            <h2 className="text-3xl font-display font-bold text-navy">Philanthropy & Humanitarian</h2>
          </div>
          <p className="text-warm-gray font-body text-lg leading-relaxed">
            OAU's commitment to service is evident through his nonprofit organization, the Onyekwere Akym Uche Foundation, which focuses on the delivery of healthcare, education, community development, and his desire to uplift others.
          </p>
          <p className="text-warm-gray font-body text-lg leading-relaxed">
            OAU's foundation has provided medical assistance, supported local hospitals, and offered scholarships to indigent students.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img src={pointingImg} alt="OAU at event" className="rounded-lg shadow-xl w-72 object-cover border border-gold/10" />
        </motion.div>
      </div>
    </section>

    {/* Political History */}
    <section className="py-20 gradient-navy">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-3xl text-center space-y-6"
      >
        <div className="flex justify-center mb-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-lg"
          >
            <Vote className="text-navy" size={28} />
          </motion.div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gold-light">Political History & Career</h2>
        <p className="text-gold-light/70 font-body text-lg leading-relaxed">
          During the 2023 Abia Governorship Election, Onyekwere Akym Uchechukwu contested the election as the AA candidate, campaigning on a promise to rescue the state from "political and economic slavery".
        </p>
        <p className="text-gold-light/70 font-body text-lg leading-relaxed">
          In April 2025, Uchechukwu officially joined the Labour Party (LP) and declared his support for Governor Alex Otti, stating that Otti was already implementing the changes he had hoped to achieve for Abia.
        </p>
      </motion.div>
    </section>

    <TestimonialsSection />
    <Footer />
  </div>
);

export default Bio;
