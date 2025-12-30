import { MapPin, Phone } from 'lucide-react';

/**
 * Stores Showcase Section Component
 * 
 * Design Philosophy: Industrial - Agressivo
 * - Showcase of physical locations with images
 * - Interactive buttons for WhatsApp and Google Maps
 * - Trust-building visual elements
 */
const storesShowcase = [
  {
    name: 'Loja Matriz - Eusébio',
    address: 'Av. Eusébio de Queiroz, 2440a - Tamatanduba, Eusébio - CE, 61768-680',
    phone: '(85) 2138-8943',
    image: '/images/loja-matriz-real.jpg',
    mapUrl: 'https://www.google.com/maps/search/Av.+Eusebio+de+Queiroz+2440a+Tamatanduba+Eusebio+CE+61768-680',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre os produtos da Casa dos Parafusos - Loja Matriz.',
  },
  {
    name: 'Filial Cidade Alpha',
    address: 'Estr. Jaboti Eusébio, 110 - Coité, Eusébio - CE, 61760-000',
    phone: '(85) 98935-9727',
    image: '/images/loja-cidade-alpha-real.jpg',
    mapUrl: 'https://www.google.com/maps/search/Estr.+Jaboti+Eusebio+110+Coite+Eusebio+CE+61760-000',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre os produtos da Casa dos Parafusos - Filial Cidade Alpha.',
  },
  {
    name: 'Baratão dos Parafusos - Cascavel',
    address: 'Av. Chanceler Edson Queiroz, 2462 - Cascavel, CE, 62850-000',
    phone: '(85) 9233-8888',
    image: '/images/loja-baratao.jpg',
    mapUrl: 'https://www.google.com/maps/search/Av.+Chanceler+Edson+Queiroz+2462+Cascavel+CE+62850-000',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre os produtos da Casa dos Parafusos - Baratão Cascavel.',
  },
];

export default function StoresShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossas Lojas Físicas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visite uma de nossas lojas e confira nosso estoque completo de ferramentas e parafusos.
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {storesShowcase.map((store, index) => (
            <div
              key={index}
              className="bg-white border-4 border-secondary rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:translate-y-2"
            >
              {/* Store Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Store Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  {store.name}
                </h3>

                {/* Address */}
                <div className="flex gap-3">
                  <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">{store.address}</p>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone size={20} className="text-secondary flex-shrink-0" />
                  <a
                    href={`tel:${store.phone.replace(/\D/g, '')}`}
                    className="text-primary font-bold hover:text-secondary transition-colors"
                  >
                    {store.phone}
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-4">
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/558521388943?text=${encodeURIComponent(store.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary text-secondary-foreground font-bold py-2 px-3 rounded-lg text-center hover:bg-yellow-600 transition-colors text-sm"
                  >
                    WhatsApp
                  </a>

                  {/* Google Maps Button */}
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white font-bold py-2 px-3 rounded-lg text-center hover:bg-blue-900 transition-colors text-sm"
                  >
                    Localização
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
