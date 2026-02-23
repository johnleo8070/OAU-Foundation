import { useState } from "react";
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
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="OAU Foundation Logo" className="h-12 w-12 object-contain" />
          <span className="font-display text-lg font-bold text-gold-light hidden sm:block">
            THE OAU FOUNDATION
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-sm font-body font-medium tracking-wide transition-colors ${
                location.pathname === l.href
                  ? "text-gold"
                  : "text-gold-light/80 hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            className="gradient-gold text-navy font-body font-semibold text-sm px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-gold-light" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-dark px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block font-body py-1 ${
                location.pathname === l.href
                  ? "text-gold"
                  : "text-gold-light/80 hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            onClick={() => setOpen(false)}
            className="block gradient-gold text-navy font-body font-semibold text-sm px-5 py-2 rounded-md text-center"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
