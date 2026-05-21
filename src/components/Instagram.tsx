"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import { Instagram } from "@/components/InstagramIcon";

const posts = [
  { img: "/Posts/686104201_18106133305752203_4256855022316331987_n..jpg", likes: "124", comments: "12" },
  { img: "/Posts/686184120_18106133284752203_2690482239597669124_n..jpg", likes: "256", comments: "34" },
  { img: "/Posts/686209394_18105763774752203_7250425217998761832_n..jpg", likes: "189", comments: "21" },
  { img: "/Posts/686301212_18105763786752203_8136056390234995776_n..jpg", likes: "342", comments: "45" },
];

export default function InstagramSection() {
  return (
    <section className="py-24 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="text-[#E1306C]" size={24} />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] font-bold tracking-wider uppercase text-sm">
                @rameshbhau_bagh_karjat
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Follow Our Journey
            </h2>
          </div>
          
          <a 
            href="https://www.instagram.com/rameshbhau_bagh_karjat/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white font-semibold hover:shadow-lg hover:shadow-[#FD1D1D]/30 transition-shadow"
          >
            <Instagram size={18} />
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post, index) => (
            <motion.a
              href="https://www.instagram.com/rameshbhau_bagh_karjat/"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group block"
            >
              <img 
                src={post.img} 
                alt="Instagram post" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Heart fill="white" size={20} />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MessageCircle fill="white" size={20} />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
