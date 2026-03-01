
import { useParams, Link } from "react-router-dom";
import { newsArticles } from "@/data/newsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Share2, ArrowLeft, ArrowRight, ChevronRight, Bookmark, Activity } from "lucide-react";
import { useEffect, useRef } from "react";

const NewsDetail = () => {
    const { id } = useParams();
    const article = newsArticles.find((a) => a.id === id);
    const otherNews = newsArticles.filter((a) => a.id !== id).slice(0, 5);
    const heroRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-display font-bold text-navy">Article Not Found</h1>
                    <Link to="/news" className="text-gold hover:underline">Back to News</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* --- PREMIUM ARTICLE HERO (2-Column OurWorks Style) --- */}
            <section ref={heroRef} className="relative min-h-[80vh] flex items-center pt-28 pb-20 lg:pb-0 overflow-hidden bg-navy">
                {/* Cinematic Background Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy to-navy z-10" />
                    <div className="absolute top-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-gold/10 rounded-full blur-[60px] lg:blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[250px] lg:w-[500px] h-[250px] lg:h-[500px] bg-navy-light/10 rounded-full blur-[50px] lg:blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left Content Column */}
                        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4 text-gold-light/60 font-body text-[10px] font-black uppercase tracking-[0.3em] mx-auto lg:mx-0 justify-center lg:justify-start"
                            >
                                <Link to="/news" className="hover:text-gold transition-colors flex items-center gap-2">
                                    <ArrowLeft size={14} /> News Archive
                                </Link>
                                <ChevronRight size={14} className="text-gold/30" />
                                <span className="text-gold">Article Insights</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-[1.1] tracking-tighter text-center lg:text-left"
                            >
                                {article.title}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8 pt-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 shadow-lg">
                                        <Calendar size={18} className="text-gold" />
                                    </div>
                                    <div className="hidden sm:block text-left">
                                        <p className="text-white/40 text-[9px] uppercase tracking-widest leading-none mb-1 font-black">Published</p>
                                        <p className="text-white font-body text-xs font-bold">{article.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 shadow-lg">
                                        <User size={18} className="text-gold" />
                                    </div>
                                    <div className="hidden sm:block text-left">
                                        <p className="text-white/40 text-[9px] uppercase tracking-widest leading-none mb-1 font-black">Author</p>
                                        <p className="text-white font-body text-xs font-bold">Press Office</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 shadow-lg">
                                        <Clock size={18} className="text-gold" />
                                    </div>
                                    <div className="hidden sm:block text-left">
                                        <p className="text-white/40 text-[9px] uppercase tracking-widest leading-none mb-1 font-black">Reading</p>
                                        <p className="text-white font-body text-xs font-bold">5 Min</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Image Column (OurWorks Style) */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative"
                            >
                                {/* Image Border Accents */}
                                <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] -z-10" />
                                <div className="absolute -inset-8 border border-gold/10 rounded-[4rem] -z-20 hidden md:block" />

                                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-4 border-white/5 max-w-[400px]">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-auto object-cover scale-[1.02] aspect-square"
                                    />
                                    {/* Glass Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 glass-navy border-t border-white/10 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border border-gold/40 p-1 flex-shrink-0">
                                            <img src={article.image} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <div>
                                            <p className="font-display font-bold text-white text-xs leading-none uppercase tracking-widest">Article Insight</p>
                                            <p className="font-body text-gold/80 text-[10px] italic mt-1 font-medium">Verified Editorial Content</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- MAIN ARTICLE CONTENT & SIDEBAR --- */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Main Text Content */}
                        <main className="lg:col-span-8">
                            <div className="prose prose-slate prose-xl max-w-none space-y-12">
                                {article.content.map((para, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="text-slate-700 font-body text-xl lg:text-2xl leading-[1.7] font-light first-letter:text-6xl first-letter:font-black first-letter:text-navy first-letter:mr-4 first-letter:float-left first-letter:leading-none"
                                    >
                                        {para}
                                    </motion.p>
                                ))}

                                {/* Transformation Showcase (If secondary image exists) */}
                                {article.secondaryImage && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="mt-20 space-y-8"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="h-px flex-1 bg-slate-100" />
                                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gold text-center px-4">The Transformation</h3>
                                            <div className="h-px flex-1 bg-slate-100" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                            <div className="space-y-4">
                                                <div className="relative rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-xl group">
                                                    <img
                                                        src={article.secondaryImage}
                                                        alt="Before"
                                                        loading="lazy"
                                                        className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                    />
                                                    <div className="absolute top-6 left-6 bg-navy text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">The Past</div>
                                                </div>
                                                <p className="text-slate-400 font-body text-xs italic text-center">Initial condition before intervention</p>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="relative rounded-[2rem] overflow-hidden border-2 border-gold/30 shadow-xl group">
                                                    <img
                                                        src={article.image}
                                                        alt="After"
                                                        loading="lazy"
                                                        className="w-full aspect-[4/3] object-cover"
                                                    />
                                                    <div className="absolute top-6 left-6 bg-gold text-navy px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">The Future</div>
                                                </div>
                                                <p className="text-gold font-body text-xs italic text-center">Current progress and restoration</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Video Highlights (If video exists) */}
                                {article.videoUrl && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="mt-20 space-y-10"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="h-px flex-1 bg-slate-100" />
                                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gold text-center px-4">Video Highlight</h3>
                                            <div className="h-px flex-1 bg-slate-100" />
                                        </div>

                                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group/video aspect-video max-w-4xl mx-auto bg-navy">
                                            <iframe
                                                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(article.videoUrl)}&show_text=0&width=560`}
                                                width="100%"
                                                height="100%"
                                                className="absolute inset-0 border-none scale-110 group-hover/video:scale-[1.12] transition-transform duration-1000"
                                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                                allowFullScreen={true}
                                                title="Project Highlight Video"
                                            />
                                            {/* Decorative Corner Accents */}
                                            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl z-20 pointer-events-none" />
                                            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-2xl z-20 pointer-events-none" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Interaction Bar */}
                            <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                                <div className="flex items-center gap-6">
                                    <span className="text-navy font-black text-xs uppercase tracking-widest">Spread the Word</span>
                                    <div className="flex gap-3">
                                        {[Share2, Activity, Bookmark].map((Icon, i) => (
                                            <button key={i} className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                                                <Icon size={18} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <Link to="/news" className="group flex items-center gap-3 text-gold font-body font-black text-xs uppercase tracking-widest">
                                    Back to news <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </main>

                        {/* Sidebar Sticky Navigation (Requested Component) */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-32 space-y-10">
                                <div className="bg-navy rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group/sidebar">
                                    {/* Sidebar accents */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                                    <h3 className="text-3xl font-display font-black text-white mb-10 flex items-center gap-4">
                                        Other <span className="text-gold">News</span>
                                        <div className="flex-1 h-px bg-white/10" />
                                    </h3>

                                    <div className="space-y-10">
                                        {otherNews.map((on) => (
                                            <Link key={on.id} to={`/news/${on.id}`} className="group block">
                                                <div className="flex gap-6 items-center">
                                                    <div className="relative flex-shrink-0">
                                                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-gold transition-colors shadow-lg">
                                                            <img
                                                                src={on.image}
                                                                alt={on.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                            />
                                                        </div>
                                                        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-gold rounded-full flex items-center justify-center border-2 border-navy text-navy font-black text-[10px]">
                                                            {on.id}
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <p className="text-[10px] text-gold/60 font-black uppercase tracking-widest">{on.date}</p>
                                                        <h4 className="text-white font-display font-bold text-sm leading-snug line-clamp-2 group-hover:text-gold transition-all">
                                                            {on.title}
                                                        </h4>
                                                        <div className="flex items-center gap-2 text-gold text-[10px] font-black uppercase tracking-[0.2em] transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                                                            Read more <ArrowRight size={10} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/5 text-center">
                                        <p className="text-white/40 font-body text-[10px] uppercase tracking-widest mb-4">Support the foundation</p>
                                        <Link to="/get-involved" className="inline-flex bg-white/5 hover:bg-gold text-white hover:text-navy px-8 py-3 rounded-xl font-display font-black text-[10px] uppercase tracking-[0.3em] transition-all border border-white/10">
                                            Take Action
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NewsDetail;
