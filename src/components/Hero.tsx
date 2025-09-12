import { ArrowRight, Star, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-delivery.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Livraison COPIA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-accent-gold" fill="currentColor" />
                <span className="text-white text-sm font-medium">Service de confiance #1 en Côte d'Ivoire</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block">COPIA</span>
                <span className="block text-accent-gold-light">On a tous confiance</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                🚀 Livraison rapide et sécurisée partout en Côte d'Ivoire.
                <br />
                <span className="text-accent-gold-light font-semibold">Votre partenaire de confiance pour tous vos besoins.</span>
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold">1000+</div>
                  <div className="text-white/80 text-sm">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold">4</div>
                  <div className="text-white/80 text-sm">Villes couvertes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold">24h/7j</div>
                  <div className="text-white/80 text-sm">Service client</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="btn-copia-gold text-lg px-8 py-4 flex items-center space-x-2"
                  onClick={() => window.open('#', '_blank')}
                >
                  <span>Visiter notre boutique</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4 flex items-center space-x-2"
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Truck className="w-5 h-5" />
                  <span>Nos services</span>
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="hidden lg:block relative">
              <div className="floating-animation">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm mx-auto">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Livraison express</h3>
                      <p className="text-white/70 text-sm">En moins de 2h à Abidjan</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-white text-sm">📍 Commande en cours de livraison</p>
                      <p className="text-accent-gold text-xs">Arrivée estimée: 15 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;