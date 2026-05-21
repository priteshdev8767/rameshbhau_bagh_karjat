import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "917775070464"; // Primary number with country code
  const message = "Hi Rameshbhau Bagh Resort! I would like to inquire about booking a stay.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full pulse-glow hover:scale-110 transition-transform duration-300 shadow-lg"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
