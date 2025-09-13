import { ShoppingBag, Truck, Bike, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Vente et livraison d\'articles',
      description: 'Large gamme de produits disponibles avec livraison à domicile garantie',
      features: ['Produits de qualité', 'Prix compétitifs', 'Livraison sécurisée']
    },
    {
      icon: Truck,
      title: 'Livraison inter-villes',
      description: 'Transport de colis d\'Abidjan vers toutes les villes de l\'intérieur',
      features: ['Abidjan → Bouaké', 'Abidjan → Yamoussoukro', 'Abidjan → Gagnoa']
    },
    {
      icon: Bike,
      title: 'Coursiers à la demande',
      description: 'Service de courses rapides et urgentes dans votre ville',
      features: ['Livraison express', 'Courses personnalisées', 'Suivi en temps réel']
    },
    {
      icon: Headphones,
      title: 'Assistance client réactive',
      description: 'Support client disponible 24h/7j via WhatsApp et téléphone',
      features: ['WhatsApp 24h/7j', 'Support téléphonique', 'Suivi commandes']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos solutions complètes pour tous vos besoins de livraison et d'achat en ligne
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-copia group text-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-r from-primary to-accent-gold rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-gold rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent-gold rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Prêt à découvrir nos services ?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers de clients qui nous font confiance chaque jour
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                className="bg-white text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/90 transition-colors duration-300 flex items-center justify-center space-x-2 min-h-[48px] text-sm sm:text-base"
                onClick={() => window.open('#', '_blank')}
              >
                <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Commander maintenant</span>
              </button>
              <button 
                className="border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-primary transition-colors duration-300 flex items-center justify-center space-x-2 min-h-[48px] text-sm sm:text-base"
                onClick={() => window.open('https://wa.me/2250718973022', '_blank')}
              >
                <Headphones className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Nous contacter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;