"use client";

import { motion } from "framer-motion";
import { Check, Users, Maximize, Coffee } from "lucide-react";

const rooms = [
  {
    name: "Standard Villa",
    price: "4,999",
    image: "/Posts/687680391_18106133272752203_5682626868197937119_n..jpg",
    capacity: "2-4 Guests",
    size: "400 sq.ft",
    features: ["King Size Bed", "Garden View", "Air Conditioning", "En-suite Bathroom"]
  },
  {
    name: "Premium Pool Villa",
    price: "7,999",
    image: "/Posts/687780881_18106133275752203_8248190777139543853_n..jpg",
    capacity: "4-6 Guests",
    size: "650 sq.ft",
    popular: true,
    features: ["Private Pool Access", "Mountain View", "Private Balcony", "Mini Bar & Coffee Maker", "Premium Toiletries"]
  },
  {
    name: "Luxury Farmhouse Suite",
    price: "12,999",
    image: "/Posts/687929224_18106133257752203_4386180478934510074_n..jpg",
    capacity: "8-12 Guests",
    size: "1200 sq.ft",
    features: ["Entire Villa Access", "Private BBQ Area", "Music System", "Dedicated Caretaker", "Bonfire Setup"]
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-[#0a0f0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold">Accommodations</span>
            <div className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Luxury Stays & Packages
          </h2>
          <p className="text-brand-gray text-lg font-light">
            Choose the perfect setting for your getaway. From intimate villas to large family suites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass rounded-3xl overflow-hidden flex flex-col ${room.popular ? 'border-brand-gold/50 shadow-[0_0_30px_rgba(212,168,83,0.15)] transform md:-translate-y-4' : 'border-white/10'}`}
            >
              {room.popular && (
                <div className="absolute top-0 left-0 w-full bg-gradient-gold text-black text-center py-1.5 text-xs font-bold uppercase tracking-widest z-20">
                  Most Popular Choice
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-brand-emerald-dark/20" />
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">{room.name}</h3>
                
                <div className="flex items-center gap-4 text-brand-gray text-sm mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-1"><Users size={16} className="text-brand-emerald" /> {room.capacity}</div>
                  <div className="flex items-center gap-1"><Maximize size={16} className="text-brand-emerald" /> {room.size}</div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-brand-gray/90 text-sm">
                        <Check size={18} className="text-brand-gold shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <span className="text-sm text-brand-gray">Starting from</span>
                      <div className="font-playfair text-3xl font-bold text-white">₹{room.price}</div>
                      <span className="text-xs text-brand-gray">per night</span>
                    </div>
                  </div>
                  
                  <a 
                    href="#booking"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      room.popular 
                      ? 'bg-gradient-gold text-black hover:shadow-[0_0_15px_rgba(212,168,83,0.4)]' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
