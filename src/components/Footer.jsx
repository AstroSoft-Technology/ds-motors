import React from "react";
import { Facebook, Instagram, Youtube, ArrowUpCircle } from "lucide-react";
// Make sure to import your logo
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column - Updated with Logo */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start">
              {/* Logo added here */}
              <img
                src={logo}
                alt="D S Motors Logo"
                className="h-7 w-auto mb-4 object-contain"
              />
              <span className="text-2xl font-black tracking-tighter uppercase mb-4">
                D S <span className="text-red-600">Motors</span>
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                The ultimate destination for premium bike restorations and
                precision engine engineering in Heartland.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Previous Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Back to Top Column */}
          <div className="hidden md:flex col-span-1 md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors"
            >
              Back to Top
              <ArrowUpCircle className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            © {currentYear} D S Motors Heartland. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
              Developed by
            </span>
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-black group cursor-pointer">
              Astrosoft{" "}
              <span className="text-blue-300 group-hover:text-white transition-colors">
                Technologies
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
