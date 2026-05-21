"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Family Trip",
    image: "https://i.pravatar.cc/150?img=1",
    text: "Absolutely stunning property! The private pool was crystal clear and the BBQ night arranged by Rameshbhau was the highlight of our trip. Will definitely visit again.",
    rating: 5
  },
  {
    name: "Rahul Desai",
    role: "Corporate Outing",
    image: "https://i.pravatar.cc/150?img=11",
    text: "Perfect location for our team offsite. The lush green surroundings helped everyone relax. The hospitality is top-notch and the food was delicious.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Weekend Getaway",
    image: "https://i.pravatar.cc/150?img=5",
    text: "The night ambiance with fairy lights is magical! Very clean rooms, excellent music system, and the caretaker was always available to help. Highly recommend.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Birthday Celebration",
    image: "https://i.pravatar.cc/150?img=12",
    text: "Hosted my birthday party here and it was incredible. Great event space, beautiful photo spots, and Rameshbhau is a wonderful host.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050805] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-brand-emerald/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Guest Experiences
          </h2>
          <p className="text-brand-gray text-lg font-light">
            Don't just take our word for it. Here's what our happy guests have to say.
          </p>
        </div>

        {/* Auto-scrolling carousel track */}
        <div className="flex overflow-x-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-6 w-max px-3"
          >
            {/* Double the array for seamless infinite scroll */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="w-[350px] md:w-[450px] glass p-8 rounded-3xl shrink-0 hover:border-brand-emerald/40 transition-colors duration-300"
              >
                <div className="flex text-brand-gold mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                
                <div className="relative mb-8">
                  <Quote size={24} className="absolute -top-2 -left-2 text-white/10" />
                  <p className="text-brand-gray/90 text-lg leading-relaxed italic relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-brand-emerald/30 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-brand-emerald">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
