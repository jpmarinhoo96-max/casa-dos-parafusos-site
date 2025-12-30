import { MapPin, Phone, Clock } from 'lucide-react';

/**
 * Stores Section Component
 * 
 * Design Philosophy: Industrial - Agressivo
 * - Grid layout with store cards
 * - Google Maps-style design
 * - Contact information and hours
 * - Yellow accent elements
 */
const stores = [
  {
    name: 'Loja Matriz - Eusébio',
    address: 'Avenida Eusébio de Queiroz, 2440A - Tamatanduba, Eusébio - CE',
    phone: '(85) 2138-8943',
    hours: 'Seg-Sex: 8h-18h | Sab: 8h-14h',
    mapUrl: 'https://www.google.com/maps/search/Avenida+Eusebio+de+Queiroz+2440A+Tamatanduba+Eusebio',
  },
  {
    name: 'Filial Cidade Alpha',
    address: 'Estrada do Jabuti, 110 - Autódromo, Eusébio - CE',
    phone: '(85) 98935-9727',
    hours: 'Seg-Sex: 8h-18h | Sab: 8h-14h',
    mapUrl: 'https://www.google.com/maps/search/Estrada+do+Jabuti+110+Autodromo+Eusebio',
  },
  {
    name: 'Baratão dos Parafusos - Cascavel',
    address: 'Avenida Chanceler Edson Queiroz, 2462 - Cascavel - CE',
    phone: '(85) 9233-8888',
    hours: 'Seg-Sex: 8h-18h | Sab: 8h-14h',
    mapUrl: 'https://www.google.com/maps/search/Avenida+Chanceler+Edson+Queiroz+2462+Cascavel',
  },
];

export default function Stores() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossas Lojas Físicas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visite uma de nossas lojas em Eusébio e região. Atendimento personalizado e estoque completo.
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-white border-4 border-secondary rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:translate-y-2"
            >
              {/* Map Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <MapPin size={48} className="text-primary" />
              </div>

              {/* Store Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  {store.name}
                </h3>

                {/* Address */}
                <div className="flex gap-3">
                  <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{store.address}</p>
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

                {/* Hours */}
                <div className="flex gap-3">
                  <Clock size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">{store.hours}</p>
                </div>

                {/* CTA Button */}
                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-secondary text-secondary-foreground font-bold py-2 px-4 rounded-lg text-center hover:bg-yellow-600 transition-colors mt-4"
                >
                  Ver no Mapa
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
