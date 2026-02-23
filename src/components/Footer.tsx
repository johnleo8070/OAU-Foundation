import logo from "@/assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-dark py-12">
    <div className="container mx-auto px-4 text-center space-y-4">
      <img src={logo} alt="OAU Foundation Logo" className="h-16 mx-auto" />
      <p className="text-gold-light/60 font-body text-sm">THE OAU FOUNDATION</p>
      <div className="flex justify-center gap-4">
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
          <a key={i} href="#" className="text-gold-light/40 hover:text-gold transition-colors">
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p className="text-gold-light/40 font-body text-xs pt-4">
        © {new Date().getFullYear()} The OAU Foundation. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
