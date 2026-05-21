"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Waves, Flame, Music, Mountain, Users, Car, Camera, Coffee, Wifi, Star, PartyPopper, Moon } from "lucide-react";

const features = [
  { icon: Waves, title: "Private Pool", desc: "Crystal clear water exclusively for your group." },
  { icon: Flame, title: "BBQ & Bonfire", desc: "Sizzle under the stars with our premium BBQ setup." },
  { icon: Music, title: "Music System", desc: "High-quality speakers for your perfect playlist." },
  { icon: Mountain, title: "Nature Views", desc: "Surrounded by the lush green Western Ghats." },
  { icon: Users, title: "Family Friendly", desc: "Safe, spacious environment for kids and elders." },
  { icon: PartyPopper, title: "Event Space", desc: "Perfect for birthdays, anniversaries, and parties." },
  { icon: Camera, title: "Photo Spots", desc: "Instagram-worthy corners everywhere you look." },
  { icon: Car, title: "Free Parking", desc: "Secure on-site parking for all your vehicles." },
  { icon: Moon, title: "Night Lights", desc: "Magical fairy light ambiance after sunset." },
  { icon: Coffee, title: "Outdoor Seating", desc: "Comfortable lounges to enjoy your morning chai." },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected even while disconnected." },
  { icon: Star, title: "Premium Service", desc: "Dedicated staff to ensure a comfortable stay." },
];

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-24 bg-[#080c08] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold">Amenities</span>
            <div className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            World-Class Facilities
          </h2>
          <p className="text-brand-gray text-lg font-light">
            Everything you need for an unforgettable, luxurious stay in the lap of nature.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group glass p-6 rounded-2xl hover:glass-emerald transition-all duration-300 hover:-translate-y-2 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-black/50 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-brand-emerald/20 group-hover:border-brand-emerald/30 group-hover:text-brand-emerald text-brand-gold transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-playfair font-bold text-white mb-2 group-hover:text-brand-emerald transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
