import { Zap, Truck, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * Hero Section Component
 * 
 * Design Philosophy: Industrial - Agressivo
 * - Dark blue background with industrial texture
 * - Large, bold typography (Montserrat)
 * - Yellow accent elements and CTAs
 * - Animated badges for urgency (free delivery, same-day)
 * - Mascot and logo placement
 * - Auto-rotating carousel of store images
 */

const storeImages = [
  {
    src: '/images/loja-matriz-real.jpg',
    alt: 'Loja Matriz - Eusébio',
  },
  {
    src: '/images/loja-cidade-alpha-real.jpg',
    alt: 'Filial Cidade Alpha',
  },
  {
    src: '/images/loja-baratao.jpg',
    alt: 'Baratão dos Parafusos',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % storeImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + storeImages.length) % storeImages.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % storeImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {storeImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Carousel Controls */}
      <button
        onClick={handlePrevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-secondary text-secondary-foreground p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
        aria-label="Imagem anterior"
      >
        ←
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-secondary text-secondary-foreground p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
        aria-label="Próxima imagem"
      >
        →
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {storeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex
                ? 'bg-secondary w-8'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/images/mascote-parafuso.png"
                alt="Mascote Casa dos Parafusos"
                className="w-16 h-16"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">
                Casa dos Parafusos
              </h1>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Ferramentas de <span className="text-secondary">Qualidade</span> com
                <span className="text-secondary"> Entrega Rápida</span>
              </h2>
              <p className="text-xl text-gray-100">
                Comprou, recebeu no mesmo dia em Eusébio e região. Taxa grátis para você!
              </p>
            </div>

            {/* Urgency Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="badge-urgent">
                <Zap size={20} />
                <span>Entrega Grátis</span>
              </div>
              <div className="badge-urgent">
                <Truck size={20} />
                <span>Mesmo Dia</span>
              </div>
              <div className="badge-urgent">
                <MapPin size={20} />
                <span>Eusébio + Região</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/558521388943?text=Olá! Gostaria de mais informações sobre os produtos da Casa dos Parafusos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center inline-block"
              >
                Fale Conosco no WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Mascot Image */}
          <div className="hidden md:flex justify-center">
            <img
              src="/images/mascote-parafuso.png"
              alt="Mascote Casa dos Parafusos"
              className="w-80 h-80 drop-shadow-2xl animate-bounce filter drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-white"
        style={{
          clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
        }}
      />
    </section>
  );
}
