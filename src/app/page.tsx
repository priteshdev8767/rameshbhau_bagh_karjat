import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Owner from "@/components/Owner";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Rooms from "@/components/Rooms";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/Instagram";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-brand-emerald selection:text-white">
      <ScrollProgress />
      <Navbar />
      
      {/* Page Sections */}
      <Hero />
      <About />
      <Owner />
      <Features />
      <Gallery />
      <Rooms />
      <Testimonials />
      <InstagramSection />
      <Booking />
      <Contact />
      
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
