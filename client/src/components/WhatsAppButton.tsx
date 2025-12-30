import { MessageCircle } from 'lucide-react';

/**
 * WhatsApp Floating Button Component
 * 
 * Design Philosophy: Industrial - Agressivo
 * - Positioned bottom-right with pulse animation
 * - Yellow (#FFD700) background for urgency and visibility
 * - Always visible and accessible on all pages
 * - Responsive text visibility (hidden on mobile, visible on larger screens)
 * - Enhanced shadow and hover effects for interactivity
 */
export default function WhatsAppButton() {
  const whatsappNumber = '558521388943'; // (85) 2138-8943
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os produtos da Casa dos Parafusos.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-secondary text-secondary-foreground px-6 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="flex-shrink-0 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline text-base">Fale conosco</span>
    </a>
  );
}
