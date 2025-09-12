import { CheckCircle, Clock, Globe, Headphones, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'Livraison rapide et fiable',
      description: 'Express en 30min à Abidjan, 24-72h pour les autres villes',
      color: 'text-green-500'
    },
    {
      icon: Globe,
      title: 'Couverture nationale',
      description: 'Présents dans les 4 principales villes de Côte d\'Ivoire',
      color: 'text-blue-500'
    },
    {
      icon: Headphones,
      title: 'Service client disponible',
      description: 'Support 24h/7j via WhatsApp et téléphone',
      color: 'text-purple-500'
    },
    {
      icon: Shield,
      title: 'Garantie qualité et sécurité',
      description: 'Assurance sur tous nos services et livraisons',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pourquoi choisir COPIA ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les avantages qui font de COPIA votre partenaire de confiance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-primary/10 to-accent-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className={`w-10 h-10 ${advantage.color}`} />
              </div>
              
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="text-lg font-bold text-foreground">
                  {advantage.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary/5 to-accent-gold/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ils nous font confiance
            </h3>
            <p className="text-muted-foreground">
              Plus de 1000 clients satisfaits nous recommandent
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '98%', label: 'Satisfaction client' },
              { metric: '1000+', label: 'Livraisons réussies' },
              { metric: '24h/7j', label: 'Support disponible' },
              { metric: '4', label: 'Villes couvertes' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.metric}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Paiement sécurisé',
              description: 'Transactions protégées et multiples options de paiement'
            },
            {
              title: 'Suivi en temps réel',
              description: 'Suivez votre commande étape par étape jusqu\'à la livraison'
            },
            {
              title: 'Garantie satisfait',
              description: 'Remboursement ou remplacement en cas de problème'
            }
          ].map((feature, index) => (
            <div key={index} className="card-copia text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;