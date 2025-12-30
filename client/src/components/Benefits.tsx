import { Zap, Truck, MapPin, Star, Lock, Users } from 'lucide-react';

/**
 * Benefits Section Component
 * 
 * Design Philosophy: Industrial - Agressivo
 * - Grid layout with 3 columns (responsive)
 * - Cards with yellow borders and shadows
 * - Bold icons and typography
 * - Alternating background colors for visual rhythm
 */
const benefits = [
  {
    icon: Zap,
    title: 'Entrega Rápida',
    description: 'Comprou hoje, recebe no mesmo dia em Eusébio e região.',
  },
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Taxa de entrega 100% grátis para você e sua região.',
  },
  {
    icon: MapPin,
    title: 'Lojas Físicas',
    description: 'Visite nossas lojas em Eusébio e arredores.',
  },
  {
    icon: Star,
    title: 'Qualidade Garantida',
    description: 'Produtos de primeira qualidade com garantia.',
  },
  {
    icon: Lock,
    title: 'Compra Segura',
    description: 'Transações seguras e protegidas.',
  },
  {
    icon: Users,
    title: 'Atendimento 24/7',
    description: 'Suporte ao cliente sempre disponível via WhatsApp.',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Por Que Escolher a Casa dos Parafusos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos líderes em ferramentas e parafusos com entrega rápida e atendimento excepcional.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="card-testimonial bg-white border-4 border-secondary rounded-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground p-4 rounded-lg flex-shrink-0">
                    <Icon size={32} className="font-bold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
