import { Wrench, Hammer, Zap, Drill, Lightbulb, Lock } from 'lucide-react';

/**
 * Categories Section Component
 * 
 * Design Philosophy: Industrial - Agressivo
 * - Grid of product categories with icons
 * - Interactive buttons linking to WhatsApp and Google Maps
 * - Trust-building through product organization
 */
const categories = [
  {
    icon: Wrench,
    name: 'Chaves e Ferramentas',
    description: 'Chaves inglesas, de fenda, Phillips e muito mais',
  },
  {
    icon: Hammer,
    name: 'Martelos e Marretas',
    description: 'Martelos profissionais para todos os tipos de trabalho',
  },
  {
    icon: Zap,
    name: 'Parafusos e Porcas',
    description: 'Parafusos de qualidade em diversos tamanhos',
  },
  {
    icon: Drill,
    name: 'Brocas e Bits',
    description: 'Brocas de precisão para perfuração profissional',
  },
  {
    icon: Lightbulb,
    name: 'Chaves de Fenda',
    description: 'Chaves de fenda e Phillips de alta qualidade',
  },
  {
    icon: Lock,
    name: 'Cadeados e Travas',
    description: 'Cadeados e sistemas de segurança profissionais',
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Categorias de Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre exatamente o que você precisa em nossas categorias organizadas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white border-4 border-secondary rounded-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:translate-y-2 group"
              >
                {/* Icon */}
                <div className="bg-secondary text-secondary-foreground p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={32} className="font-bold" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/558521388943?text=Olá! Tenho interesse em ${category.name.toLowerCase()}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary text-secondary-foreground font-bold py-2 px-3 rounded-lg text-center hover:bg-yellow-600 transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
