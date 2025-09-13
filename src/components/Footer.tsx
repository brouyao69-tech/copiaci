import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import copiaLogo from '@/assets/copia-logo.jpg';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Zones de livraison', href: '#zones' },
    { name: 'FAQ', href: '#faq' },
  ];

  const services = [
    'Vente en ligne',
    'Livraison à domicile',
    'Coursiers express',
    'Livraison inter-villes',
    'Support client 24h/7j'
  ];

  const cities = [
    'Abidjan (Express)',
    'Bouaké',
    'Yamoussoukro',
    'Gagnoa'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={copiaLogo} 
                  alt="COPIA Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold">COPIA</h3>
                  <p className="text-accent-gold-light text-sm">On a tous confiance</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Votre partenaire de confiance pour la vente en ligne et la livraison à domicile 
                partout en Côte d'Ivoire.
              </p>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-accent-gold-light mb-3">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://whatsapp.com/channel/0029VakWVrJ5vKAFNplzZF39" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-sm font-bold">IG</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-accent-gold-light mb-6">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-accent-gold-light mb-6">Nos Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-white/80 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-accent-gold-light mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">WhatsApp & Téléphone</p>
                    <a 
                      href="tel:+2250718973022" 
                      className="text-white/80 hover:text-accent-gold-light transition-colors"
                    >
                      07 18 97 30 22
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:copiaonline02@gmail.com" 
                      className="text-white/80 hover:text-accent-gold-light transition-colors"
                    >
                      copiaonline02@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Chaîne WhatsApp</p>
                    <a 
                      href="https://whatsapp.com/channel/0029VakWVrJ5vKAFNplzZF39" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-accent-gold-light transition-colors flex items-center space-x-1"
                    >
                      <span>Rejoindre</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="font-semibold mb-3">Zones de livraison</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {cities.map((city, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3 text-accent-gold" />
                        <span className="text-white/80 text-sm">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-white/80">
                © 2024 COPIA. Tous droits réservés.
              </p>
              <p className="text-white/60 text-sm">
                Entreprise ivoirienne de confiance
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;