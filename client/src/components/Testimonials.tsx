import { Star } from 'lucide-react';

/**
 * Testimonials Section Component
 * 
 * Design Philosophy: Industrial - Agressivo
 * - Google-style reviews with 5-star ratings
 * - Professional photos and names
 * - Yellow accent borders
 * - Hover effects with elevation
 */
const testimonials = [
  {
    name: 'João Silva',
    role: 'Mestre de Obras',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rating: 5,
    text: 'Excelente atendimento! Comprei os parafusos e chegou no mesmo dia. Recomendo muito!',
  },
  {
    name: 'Maria Santos',
    role: 'Gerente de Compras',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    rating: 5,
    text: 'Melhor loja de ferramentas da região. Produtos de qualidade e entrega rápida.',
  },
  {
    name: 'Carlos Oliveira',
    role: 'Eletricista Autônomo',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    rating: 5,
    text: 'Frete grátis e entrega no mesmo dia? Isso é perfeito! Voltarei com certeza.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos com nossos produtos e serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-testimonial bg-white border-4 border-secondary rounded-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t-2 border-gray-200 pt-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/search/Casa+dos+Parafusos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
          >
            <span>Ver mais avaliações no Google Maps</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
