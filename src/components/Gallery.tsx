"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  { src: "/Posts/683774186_18105763777752203_8021593593799016258_n..jpg", alt: "Private Swimming Pool", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/Posts/684624676_18105568513752203_2700486260717009035_n..jpg", alt: "Luxury Room Interior", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/Posts/684661521_18105767569752203_292141283282675174_n..jpg", alt: "Tropical Garden Path", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/Posts/684694065_18105763795752203_4966404613994159560_n..jpg", alt: "Nature View", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: "/Posts/684802353_18105767581752203_5726239427703601702_n..jpg", alt: "BBQ Night Setup", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/Posts/684919073_18106133335752203_2361817471946366750_n..jpg", alt: "Dining Setup", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/Posts/685278234_18106133296752203_7261043322037532767_n..jpg", alt: "Resort Aerial View", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
];

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="gallery" className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-brand-gold" />
              <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold">Gallery</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight">
              Glimpses of <br/>
              <span className="text-brand-emerald">Paradise</span>
            </h2>
          </div>
          <p className="text-brand-gray max-w-md font-light">
            Browse through our collection of memories. A picture is worth a thousand words, but the experience is priceless.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.colSpan} ${img.rowSpan}`}
            >
              <div className="absolute inset-0 bg-brand-emerald-dark/20" /> {/* Fallback/placeholder */}
              <img 
                src={img.src} 
                alt={img.alt} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-playfair text-xl text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
