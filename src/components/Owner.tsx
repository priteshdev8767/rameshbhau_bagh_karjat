"use client";

import { motion } from "framer-motion";
import { MessageCircle, Quote } from "lucide-react";
import { Instagram } from "@/components/InstagramIcon";

export default function Owner() {
  return (
    <section id="owner" className="py-24 bg-[#050805] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-emerald rounded-3xl p-8 md:p-12 border border-brand-emerald/30 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Image Column */}
            <div className="md:col-span-5 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Glowing ring */}
                <div className="absolute -inset-4 rounded-full border border-brand-gold/30 animate-[spin_10s_linear_infinite]" />
                <div className="absolute -inset-2 rounded-full border border-brand-emerald/50 animate-[spin_15s_linear_infinite_reverse]" />
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0a0f0a] shadow-2xl">
                  <img 
                    src="/Posts/687476205_18105506686752203_7421159764238146973_n..jpg" 
                    alt="Rameshbhau - Founder" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 right-0 glass px-4 py-2 rounded-full border border-brand-gold/50 shadow-lg">
                  <span className="text-brand-gold text-sm font-semibold tracking-wider">Host & Founder</span>
                </div>
              </motion.div>
            </div>

            {/* Text Column */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-brand-emerald" />
                  <span className="text-brand-emerald uppercase tracking-widest text-sm font-semibold">Meet The Owner</span>
                </div>

                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-2">
                  Rameshbhau
                </h2>
                
                <div className="relative mt-8 mb-8">
                  <Quote size={40} className="absolute -top-4 -left-2 text-brand-emerald/20 rotate-180" />
                  <p className="text-brand-gray text-lg font-light leading-relaxed relative z-10 pl-6">
                    Built with passion for nature, comfort, and unforgettable memories, Rameshbhau Bagh Resort was created to give guests a peaceful escape from city life while enjoying luxury experiences in nature. My team and I personally ensure that every guest leaves with a smile and beautiful memories.
                  </p>
                </div>

                {/* Signature */}
                <div className="font-playfair text-3xl text-brand-gold italic opacity-80 mb-8">
                  ~ Rameshbhau
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/917775070464" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-6 py-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 font-medium"
                  >
                    <MessageCircle size={18} />
                    Direct Connect
                  </a>
                  <a 
                    href="https://www.instagram.com/rameshbhau_bagh_karjat/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass text-white hover:text-[#E1306C] transition-colors duration-300 px-6 py-3 rounded-full font-medium"
                  >
                    <Instagram size={18} />
                    Follow Profile
                  </a>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
