"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Home, Calendar } from "lucide-react";
import { Instagram } from "@/components/InstagramIcon";

const Counter = ({ end, duration = 2, label, icon: Icon }: any) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center p-4">
      <div className="w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center mb-3 text-brand-emerald">
        <Icon size={24} />
      </div>
      <div className="font-playfair text-3xl md:text-4xl font-bold text-white mb-1">
        {count}{end > 100 ? "+" : ""}
      </div>
      <div className="text-sm text-brand-gray tracking-wider uppercase">{label}</div>
    </div>
  );
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section id="about" className="py-24 bg-brand-black relative">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-emerald/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden h-[500px] md:h-[600px] w-full">
              {/* Fallback color if image doesn't load */}
              <div className="absolute inset-0 bg-brand-emerald-dark/20" />
              <img 
                src="/Posts/687676263_18106133353752203_4029265750737229745_n..jpg" 
                alt="Peaceful nature retreat" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-4 md:right-8 glass-emerald p-6 rounded-2xl max-w-[200px]">
              <p className="font-playfair text-2xl text-brand-gold italic mb-1">"A Slice of Paradise"</p>
              <p className="text-xs text-brand-gray uppercase tracking-widest">In the heart of Karjat</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const } }
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-brand-gold" />
              <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold">About Us</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Escape to Peace & <br />
              <span className="text-brand-emerald">Natural Luxury</span>
            </h2>
            
            <div className="space-y-4 text-brand-gray font-light text-lg mb-10 leading-relaxed">
              <p>
                Nestled in the serene landscapes of Karjat, Rameshbhau Bagh Resort offers an unparalleled escape from the city's hustle. We blend modern luxury with the raw beauty of nature to create unforgettable experiences.
              </p>
              <p>
                Whether you're seeking a romantic getaway, a joyful family reunion, or a lively weekend with friends, our private pool villas and sprawling gardens provide the perfect canvas for your memories.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 glass rounded-2xl p-6">
              <Counter end={500} label="Happy Guests" icon={Heart} />
              <Counter end={8} label="Luxury Rooms" icon={Home} />
              <Counter end={100} label="Events Hosted" icon={Calendar} />
              <Counter end={69} label="Followers" icon={Instagram} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
