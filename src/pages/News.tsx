
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { newsArticles } from "@/data/newsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Clock, Tag, Activity } from "lucide-react";
import { useEffect, useRef } from "react";
import traditionalImg from "@/assets/traditional.jpeg";

const News = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-gold/30 selection:text-navy">
      <Navbar />

      {/* --- PREMIUM HERO SECTION (2-Column OurWorks Style) --- */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-28 pb-24 overflow-hidden bg-navy">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/80 to-navy z-10" />
          <div className="absolute top-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-gold/10 rounded-full blur-[60px] lg:blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[250px] lg:w-[500px] h-[250px] lg:h-[500px] bg-navy-light/10 rounded-full blur-[50px] lg:blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-[10px] lg:text-xs font-black tracking-[0.3em] uppercase mx-auto lg:mx-0">
                  <BookOpen size={14} className="animate-pulse" />
                  Editorial News & Press Archive
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter">
                  THE <span className="text-gold-light italic">NEWSROOM</span>
                </h1>

                <p className="text-gold-light/60 font-body text-base lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Documenting the journey of transformation across Africa. Stay informed on our latest impact, vision, and advocacy.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-4 mb-10 lg:mb-0">
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border border-white/10 shadow-lg">
                    <span className="text-2xl lg:text-3xl font-display font-black text-gold">150+</span>
                    <span className="text-[10px] font-body font-bold text-white/50 uppercase tracking-widest leading-none text-left">Press<br />Articles</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border border-white/10 shadow-lg">
                    <span className="text-2xl lg:text-3xl font-display font-black text-gold">24/7</span>
                    <span className="text-[10px] font-body font-bold text-white/50 uppercase tracking-widest leading-none text-left">Impact<br />Updates</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image Column (OurWorks Style) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0 mb-12 lg:mb-0 relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Image Border Accents */}
                <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] -z-10" />
                <div className="absolute -inset-8 border border-gold/10 rounded-[4rem] -z-20 hidden md:block" />

                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-4 border-white/5 max-w-[420px]">
                  <img
                    src={traditionalImg}
                    alt="Onyekwere Akym Uche Traditional"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover scale-[1.02]"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 glass-navy border-t border-white/10">
                    <p className="font-display font-bold text-white text-lg">OAU News Hub</p>
                    <p className="font-body text-gold/80 text-xs font-bold tracking-widest uppercase mt-1">Official Press Source</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEWS ARCHIVE GRID --- */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-navy to-transparent opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {newsArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col h-full bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:border-gold/30 transition-all duration-500"
              >
                {/* Image Header with Tag */}
                <Link to={`/news/${article.id}`} className="block relative overflow-hidden aspect-[16/10]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg flex items-center gap-2 border border-white/20">
                      <Tag size={12} className="text-gold" />
                      <span className="text-navy text-[10px] font-black uppercase tracking-[0.2em] leading-none">Perspective</span>
                    </div>
                  </div>
                </Link>

                {/* Editorial Content */}
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[10px] font-body font-bold text-gold/60 uppercase tracking-[0.2em] mb-8">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} /> {article.date}
                      </div>
                      <div className="w-1.5 h-1.5 bg-gold/20 rounded-full" />
                      <div className="flex items-center gap-2 text-navy/40">
                        <Clock size={12} /> 6 Min
                      </div>
                    </div>

                    <h2 className="text-2xl font-display font-black text-navy leading-[1.2] mb-6 group-hover:text-gold transition-colors line-clamp-3">
                      <Link to={`/news/${article.id}`}>{article.title}</Link>
                    </h2>

                    <p className="text-slate-600 font-body text-base lg:text-lg leading-relaxed line-clamp-3 font-light mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {article.content[0]}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-200">
                    <Link
                      to={`/news/${article.id}`}
                      className="text-navy font-display font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-4 group-hover:gap-8 transition-all duration-500 group-hover:text-gold"
                    >
                      EXPLORE FULL STORY <ArrowRight size={18} className="text-gold" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subheader Pagination */}
          <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-navy font-display font-black text-2xl uppercase tracking-tighter">Digital Archive</p>
              <p className="text-slate-400 font-body text-xs uppercase tracking-widest font-bold">Comprehensive records of our growth</p>
            </div>
            <div className="flex gap-4">
              <button className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center text-navy hover:bg-gold hover:border-gold transition-all duration-500 shadow-sm active:scale-95">
                <ArrowRight size={20} className="transform rotate-180" />
              </button>
              <button className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-500 shadow-xl active:scale-95">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
