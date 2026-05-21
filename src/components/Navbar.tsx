"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "Rooms", href: "#rooms" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-playfair text-xl md:text-2xl font-bold tracking-wider text-white">
              RAMESHBHAU BAGH
            </span>
            <span className="text-brand-emerald text-xs tracking-[0.2em] font-medium uppercase">
              Luxury Resort • Karjat
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#booking"
              className="bg-gradient-gold px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_15px_rgba(212,168,83,0.4)] transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-30 bg-brand-black/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center space-y-8 w-full px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-playfair text-white/90 hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="w-full h-px bg-white/10 my-4" />
              
              <a 
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-gold w-full text-center px-8 py-4 rounded-full text-lg font-semibold"
              >
                Book Your Stay
              </a>
              
              <div className="flex items-center gap-2 text-brand-emerald mt-8">
                <MapPin size={18} />
                <span className="text-sm">Karjat, Maharashtra</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
