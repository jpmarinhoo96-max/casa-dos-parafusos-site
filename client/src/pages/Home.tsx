import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Categories from '@/components/Categories';
import Testimonials from '@/components/Testimonials';
import StoresShowcase from '@/components/StoresShowcase';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

/**
 * Home Page - Casa dos Parafusos
 * 
 * Design Philosophy: Industrial Moderno com Agressividade Comercial
 * 
 * Layout Structure:
 * 1. Hero Section - Bold headline, mascot, urgency badges, CTAs
 * 2. Benefits Section - 6 key benefits with icons and descriptions
 * 3. Testimonials Section - Google-style reviews with 5-star ratings
 * 4. Stores Showcase - Physical locations with images and interactive buttons
 * 5. Footer - Brand info, links, contact, social media
 * 
 * Visual Elements:
 * - Color Scheme: Navy Blue (#0F3A7D) + Electric Yellow (#FFD700)
 * - Typography: Montserrat (bold display) + Roboto (body)
 * - Animations: Pulse badges, hover effects, smooth transitions
 * - Responsive: Mobile-first design with breakpoints at 640px, 1024px
 * 
 * Landing Page Focus:
 * - Build customer confidence through visual elements and testimonials
 * - Direct WhatsApp integration for immediate contact
 * - Google Maps links for store location discovery
 * - SEO-optimized for local search visibility
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <Benefits />

      {/* Categories Section */}
      <Categories />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Stores Showcase Section */}
      <StoresShowcase />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
