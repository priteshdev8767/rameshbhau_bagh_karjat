"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050805] relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold">Location & Contact</span>
            <div className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl flex-grow flex flex-col justify-center"
            >
              <div className="space-y-8">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center text-brand-emerald shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Resort Location</h4>
                    <p className="text-brand-gray text-sm leading-relaxed">
                      Rameshbhau Bagh Resort<br/>
                      Karjat, Maharashtra, India<br/>
                      (Detailed directions sent upon booking)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center text-brand-emerald shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Contact Numbers</h4>
                    <p className="text-brand-gray text-sm">
                      <a href="tel:+917775993277" className="hover:text-brand-gold transition-colors">+91 7775993277</a><br/>
                      <a href="tel:+91 7775070464" className="hover:text-brand-gold transition-colors">+91 7775070464</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center text-brand-emerald shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Check-in / Check-out</h4>
                    <p className="text-brand-gray text-sm">
                      Check-in: 1:00 PM<br/>
                      Check-out: 11:00 AM
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 relative group"
            >
              {/* Google Maps iframe targeting Karjat general area */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120713.88126767746!2d73.24357904481074!3d18.91008639209581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb7f40195555%3A0xc6ebfb937c48f219!2sKarjat%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <a 
                  href="https://maps.google.com/?q=Karjat,Maharashtra" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-black/80 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-emerald hover:border-brand-emerald transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
