import { Shield, Zap, MapPin, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Confiance',
      description: 'Sécurité et fiabilité dans chaque livraison'
    },
    {
      icon: Zap,
      title: 'Rapidité',
      description: 'Livraisons express en moins de 2h'
    },
    {
      icon: MapPin,
      title: 'Proximité',
      description: 'Présents dans toute la Côte d\'Ivoire'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Qui sommes-nous ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-gold mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">COPIA</span> est une entreprise ivoirienne spécialisée dans la 
                <span className="text-primary font-semibold"> vente en ligne et la livraison à domicile</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre mission est de rapprocher les clients de leurs besoins quotidiens grâce à un 
                <span className="text-primary font-semibold"> service fiable, rapide et accessible</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avec des équipes basées à <span className="text-accent-gold font-semibold">Abidjan, Bouaké et Gagnoa</span>, 
                nous garantissons <span className="text-primary font-semibold">proximité, efficacité et confiance</span>.
              </p>
            </div>

            <div className="flex items-center space-x-4 bg-gradient-to-r from-primary/10 to-accent-gold/10 rounded-xl p-6">
              <Users className="w-12 h-12 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Notre Engagement</h3>
                <p className="text-muted-foreground">
                  Faire de chaque livraison une expérience exceptionnelle
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-copia group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { number: '1000+', label: 'Clients satisfaits' },
            { number: '4', label: 'Villes couvertes' },
            { number: '24h/7j', label: 'Support client' },
            { number: '98%', label: 'Taux de satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;