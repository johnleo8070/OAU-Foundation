import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bio", href: "/bio" },
  { label: "Foundation", href: "/foundation" },
  { label: "Our Works", href: "/our-works" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
  { label: "Get Involved", href: "/get-involved" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Use a slightly larger threshold to avoid frequent state updates
      if (window.scrollY > 40 && !scrolled) setScrolled(true);
      else if (window.scrollY <= 40 && scrolled) setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform-gpu translate-z-0 ${scrolled ? "py-2 glass-navy shadow-lg" : "py-5 bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform">
          <img
            src={logo}
            alt="OAU Foundation Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold text-gold-light leading-none">
              THE OAU FOUNDATION
            </span>
            <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-body font-bold mt-0.5 opacity-80">
              Empowering Humanity
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-[12px] font-body font-bold uppercase tracking-widest transition-all relative group py-2 ${location.pathname === l.href
                ? "text-gold"
                : "text-gold-light/70 hover:text-gold"
                }`}
            >
              {l.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform transition-transform duration-300 origin-left ${location.pathname === l.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-gold-light hover:text-gold transition-colors active:scale-90"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-x-0 top-[64px] bg-navy-dark/95 backdrop-blur-md transition-all duration-300 ease-in-out border-b border-white/5 overflow-hidden ${open ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}>
        <div className="px-4 py-10 space-y-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block font-body font-bold text-lg uppercase tracking-wider text-center transition-colors ${location.pathname === l.href
                ? "text-gold"
                : "text-gold-light/80 hover:text-gold"
                }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
