"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Phone, Send } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    package: "Standard Villa"
  });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Booking Inquiry:%0A- Check-in: ${formData.checkIn}%0A- Check-out: ${formData.checkOut}%0A- Guests: ${formData.guests}%0A- Package: ${formData.package}`;
    window.open(`https://wa.me/917775093277?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-[#0a0f0a] relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-brand-black/80 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-brand-gold" />
              <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold">Reserve Your Stay</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready for an <br />
              <span className="text-brand-emerald">Unforgettable</span> Escape?
            </h2>
            
            <p className="text-brand-gray text-lg mb-8 max-w-md font-light">
              Book directly with us for the best rates, personalized service, and guaranteed availability.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-emerald">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-brand-gray text-sm">Call Us Directly</p>
                  <p className="text-white font-semibold text-lg">+91 77759 93277</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-emerald p-8 md:p-10 rounded-3xl"
          >
            <h3 className="font-playfair text-2xl font-bold text-white mb-6">Request a Booking</h3>
            
            <form onSubmit={handleBook} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Check In */}
                <div>
                  <label className="block text-brand-gray text-sm mb-2">Check In</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-emerald" size={18} />
                    <input 
                      type="date" 
                      required
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-colors"
                      value={formData.checkIn}
                      onChange={e => setFormData({...formData, checkIn: e.target.value})}
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div>
                  <label className="block text-brand-gray text-sm mb-2">Check Out</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-emerald" size={18} />
                    <input 
                      type="date" 
                      required
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-colors"
                      value={formData.checkOut}
                      onChange={e => setFormData({...formData, checkOut: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Guests */}
                <div>
                  <label className="block text-brand-gray text-sm mb-2">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-emerald" size={18} />
                    <select 
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-colors"
                      value={formData.guests}
                      onChange={e => setFormData({...formData, guests: e.target.value})}
                    >
                      {[1,2,3,4,5,6,7,8,9,10,"10+"].map(n => (
                        <option key={n} value={n}>{n} Guests</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Package */}
                <div>
                  <label className="block text-brand-gray text-sm mb-2">Package</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl py-3 px-4 text-white appearance-none focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-colors"
                      value={formData.package}
                      onChange={e => setFormData({...formData, package: e.target.value})}
                    >
                      <option>Standard Villa</option>
                      <option>Premium Pool Villa</option>
                      <option>Luxury Farmhouse Suite</option>
                      <option>Custom Event Package</option>
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-gold text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] transition-all duration-300"
              >
                <Send size={18} />
                Book via WhatsApp
              </button>
              
              <p className="text-center text-xs text-brand-gray mt-4">
                No payment required now. You will be redirected to WhatsApp to confirm your booking.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
