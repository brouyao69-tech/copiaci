import { MapPin, Clock, CheckCircle } from 'lucide-react';

const Zones = () => {
  const cities = [
    {
      name: 'Abidjan',
      description: 'Zone principale - Livraison express',
      deliveryTime: '30min - 2h',
      status: 'active',
      isMain: true
    },
    {
      name: 'Bouaké',
      description: 'Livraison inter-villes',
      deliveryTime: '24h - 48h',
      status: 'active',
      isMain: false
    },
    {
      name: 'Yamoussoukro',
      description: 'Capitale politique',
      deliveryTime: '24h - 48h',
      status: 'active',
      isMain: false
    },
    {
      name: 'Gagnoa',
      description: 'Région du Gôh',
      deliveryTime: '48h - 72h',
      status: 'active',
      isMain: false
    }
  ];

  return (
    <section id="zones" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Zones de livraison
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous couvrons les principales villes de Côte d'Ivoire avec des délais de livraison optimisés
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Carte de Côte d'Ivoire
                </h3>
                <p className="text-muted-foreground">
                  Nos zones de couverture actuelles
                </p>
              </div>

              {/* Simplified Map Visual */}
              <div className="relative bg-white rounded-xl p-8 min-h-[300px] border-2 border-dashed border-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Côte d'Ivoire
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      4 villes principales couvertes
                    </p>
                  </div>
                </div>

                {/* City Markers */}
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-accent-gold rounded-full border-2 border-white shadow-lg pulse"></div>
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap">Abidjan</span>
                </div>
                
                <div className="absolute top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-lg"></div>
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap">Bouaké</span>
                </div>
                
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-lg"></div>
                  <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap">Yamoussoukro</span>
                </div>
                
                <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-lg"></div>
                  <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap">Gagnoa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cities List */}
          <div className="space-y-6">
            {cities.map((city, index) => (
              <div key={index} className={`card-copia ${city.isMain ? 'ring-2 ring-accent-gold/30' : ''}`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${city.isMain ? 'bg-gradient-to-r from-accent-gold to-accent-gold-light' : 'bg-gradient-to-r from-primary to-primary-light'} rounded-xl flex items-center justify-center`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {city.name}
                        {city.isMain && (
                          <span className="ml-2 text-sm bg-accent-gold/20 text-accent-gold px-2 py-1 rounded-full">
                            Principal
                          </span>
                        )}
                      </h3>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    
                    <p className="text-muted-foreground mb-3">
                      {city.description}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-accent-gold" />
                      <span className="text-sm font-medium text-foreground">
                        Délai: {city.deliveryTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact for New Zones */}
            <div className="card-copia bg-gradient-to-r from-muted/50 to-accent/50 border-dashed">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Votre ville n'est pas listée ?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Contactez-nous pour étendre nos services dans votre région
                </p>
                <button 
                  className="btn-copia text-sm px-6 py-2"
                  onClick={() => window.open('https://wa.me/2250718973022?text=Bonjour, je souhaiterais savoir si vous livrez dans ma ville', '_blank')}
                >
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zones;