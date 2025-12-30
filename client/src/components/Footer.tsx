import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

/**
 * Footer Component
 * 
 * Design Philosophy: Industrial - Agressivo
 * - Dark blue background (#0F3A7D)
 * - Yellow accent elements
 * - Logo and brand information
 * - Quick links and contact info
 * - Social media links
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/mascote-parafuso.png"
                alt="Casa dos Parafusos"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-secondary">Casa dos Parafusos</h3>
                <p className="text-sm text-gray-300">O Rei das Ferramentas</p>
              </div>
            </div>
            <p className="text-gray-300">
              Ferramentas de qualidade com entrega rápida e gratuita em Eusébio e região.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Lojas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-secondary flex-shrink-0" />
              <a
                href="tel:+558521388943"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                (85) 2138-8943
              </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a
                  href="mailto:contato@casadosparafusos.com"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  contato@casadosparafusos.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Eusébio - CE
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/558521388943"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground p-3 rounded-lg hover:bg-yellow-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/casadosparafusosce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground p-3 rounded-lg hover:bg-yellow-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Casa dos Parafusos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
