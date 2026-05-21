"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Music, Waves, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax feel */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Posts/AQOSlkt0hxc1ecN4xf8s1i949Ff_WbXj-kNHH4lywFiQaiozu-Jt5TP2A6bNkhgi33KtOWFlOni-gO5x2uoXOXIKQQuMZJIM.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black/90 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-emerald-dark/10 to-brand-black/80 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-black/30 backdrop-blur-md"
        >
          <MapPin size={14} className="text-brand-gold" />
          <span className="text-xs md:text-sm font-medium tracking-widest text-brand-gold-light uppercase">
            Karjat, Maharashtra
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
        >
          Luxury Nature <br className="hidden md:block" />
          <span className="text-gradient-gold italic pr-2">Stay In Karjat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light flex flex-wrap justify-center gap-x-4 gap-y-2 items-center"
        >
          <span className="flex items-center gap-1"><Waves size={18} className="text-brand-emerald" /> Private Pool</span>
          <span className="hidden md:inline text-brand-gold">•</span>
          <span className="flex items-center gap-1"><Utensils size={18} className="text-brand-emerald" /> BBQ Nights</span>
          <span className="hidden md:inline text-brand-gold">•</span>
          <span className="flex items-center gap-1"><Music size={18} className="text-brand-emerald" /> Music & Vibes</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#booking"
            className="group bg-gradient-gold px-8 py-4 rounded-full text-black font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,168,83,0.5)] transition-all duration-300"
          >
            Book Your Stay
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#gallery"
            className="glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            Explore Resort
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs text-white/50 tracking-widest uppercase mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-brand-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
