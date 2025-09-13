import { MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary via-primary-light to-accent-gold rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/2 w-8 h-8 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>

            {/* Main Content */}
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Besoin d'un coursier ou d'une
              <br />
              <span className="text-accent-gold-light">livraison spéciale ?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Notre équipe est disponible 24h/7j pour répondre à tous vos besoins.
              <br />
              <strong>Contactez-nous dès maintenant !</strong>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">&lt; 30min</div>
                <div className="text-white/80 text-sm lg:text-base">Réponse garantie</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">24h/7j</div>
                <div className="text-white/80 text-sm lg:text-base">Service disponible</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-white/80 text-sm lg:text-base">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3"
                onClick={() => window.open('https://wa.me/2250718973022?text=Bonjour, j\'ai besoin d\'un coursier', '_blank')}
              >
                <MessageCircle className="w-6 h-6" />
                <span>Commander via WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3"
                onClick={() => window.open('#', '_blank')}
              >
                <ShoppingBag className="w-6 h-6" />
                <span>Visiter la boutique</span>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-white font-bold mb-4">Contacts directs :</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-white/90">
                <div>
                  <span className="font-semibold">📞 Téléphone :</span>
                  <br />
                  <a href="tel:+2250718973022" className="hover:text-accent-gold-light transition-colors">
                    07 18 97 30 22
                  </a>
                </div>
                <div>
                  <span className="font-semibold">📧 Email :</span>
                  <br />
                  <a href="mailto:copiaonline02@gmail.com" className="hover:text-accent-gold-light transition-colors">
                    copiaonline02@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;