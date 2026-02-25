import logo from "@/assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-navy-dark pt-20 pb-10 text-gold-light/90">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Foundation Info */}
        <div className="space-y-6">
          <img src={logo} alt="OAU Foundation Logo" className="h-16" />
          <h4 className="font-display font-bold text-xl text-gold tracking-tight">THE OAU FOUNDATION</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-gold shrink-0 mt-1" size={18} />
              <p className="text-sm leading-relaxed">
                Plot 56/58 umuokeyi World Bank Housing Estate Annexed. Umuahia, Abia state
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-gold shrink-0" size={18} />
              <p className="text-sm font-body">09035269615</p>
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <h4 className="font-display font-bold text-white text-lg mb-8 relative inline-block">
            Our Focus Areas
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded-full" />
          </h4>
          <ul className="space-y-3 font-body text-sm">
            {["Education", "Health", "Economic Empowerment", "Humanitarian Response"].map((area) => (
              <li key={area} className="flex items-center gap-2 hover:text-gold transition-colors cursor-default">
                <ArrowRight size={14} className="text-gold/50" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-white text-lg mb-8 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded-full" />
          </h4>
          <ul className="space-y-3 font-body text-sm">
            {[
              { label: "HOME", href: "/" },
              { label: "BIO", href: "/bio" },
              { label: "FOUNDATION", href: "/foundation" },
              { label: "OUR WORKS", href: "/our-works" },
              { label: "NEWS", href: "/news" },
              { label: "CONTACT US", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div className="space-y-6">
          <h4 className="font-display font-bold text-white text-lg mb-8 relative inline-block">
            Get Involved
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded-full" />
          </h4>
          <p className="text-sm leading-relaxed opacity-80">
            Join us in making a difference. Volunteer your time and skills to help communities in need.
          </p>
          <Link to="/get-involved" className="glass-button inline-flex items-center gap-3 px-6 py-3 rounded-md text-sm font-bold tracking-widest text-white shadow-xl">
            VOLUNTEER NOW
            <ArrowRight size={16} />
          </Link>
          <div className="flex gap-4 pt-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 shadow-lg">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gold-light/30 font-body text-[11px] uppercase tracking-[0.2em] text-center md:text-left">
          © {new Date().getFullYear()} The OAU Foundation. All rights reserved.
        </p>
        <p className="text-gold-light/20 font-body text-[10px] uppercase tracking-widest flex items-center gap-2">
          Developed by
          <span className="text-gold-light/40 font-bold border-b border-gold/10 pb-0.5">GStat Mobile Solutions</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
