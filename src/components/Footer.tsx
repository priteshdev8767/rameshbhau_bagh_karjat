import { MapPin, Phone, Mail } from "lucide-react";
import { Instagram } from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#030503] pt-20 pb-10 border-t border-brand-emerald/20 relative overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-emerald to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[20px] bg-brand-emerald/20 blur-[20px]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col mb-6">
              <span className="font-playfair text-2xl font-bold tracking-wider text-white">
                RAMESHBHAU
              </span>
              <span className="text-brand-emerald text-sm tracking-[0.2em] font-medium uppercase">
                Bagh Resort
              </span>
            </a>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              A premium luxury nature stay in Karjat, offering private pool villas, BBQ nights, and unforgettable memories for families and friends.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/rameshbhau_bagh_karjat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-emerald hover:border-brand-emerald transition-colors">
                <Instagram size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-playfair font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-brand-gray">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-brand-gold transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#rooms" className="hover:text-brand-gold transition-colors">Rooms & Pricing</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-playfair font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-gray">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-emerald shrink-0 mt-0.5" />
                <span>Karjat, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-emerald shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+917775070464" className="hover:text-brand-gold transition-colors">+91 77750 70464</a>
                  <a href="tel:+917775993277" className="hover:text-brand-gold transition-colors">+91 77759 93277</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-emerald shrink-0 mt-0.5" />
                <a href="mailto:booking@rameshbhaubagh.com" className="hover:text-brand-gold transition-colors">booking@rameshbhaubagh.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-playfair font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-brand-gray text-sm mb-4">Subscribe to receive special offers and updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-l-lg py-2 px-4 w-full text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
              />
              <button 
                type="submit"
                className="bg-brand-emerald hover:bg-brand-emerald-dark text-white px-4 rounded-r-lg transition-colors font-semibold text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray text-sm">
            &copy; {new Date().getFullYear()} Rameshbhau Bagh Resort. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-brand-gray">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
