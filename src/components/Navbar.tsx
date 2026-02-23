import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Join Us", href: "#join" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="OAU Foundation Logo" className="h-12 w-12 object-contain" />
          <span className="font-display text-lg font-bold text-gold-light hidden sm:block">
            THE OAU FOUNDATION
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-body font-medium tracking-wide text-gold-light/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="gradient-gold text-navy font-body font-semibold text-sm px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Donate
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-gold-light" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-dark px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gold-light/80 hover:text-gold font-body py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="block gradient-gold text-navy font-body font-semibold text-sm px-5 py-2 rounded-md text-center"
          >
            Donate
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
