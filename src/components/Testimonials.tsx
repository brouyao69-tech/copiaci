import { Star, Quote } from 'lucide-react';
import happyCustomers from '@/assets/happy-customers.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aïcha Koné",
      location: "Abidjan, Cocody",
      rating: 5,
      comment: "Service exceptionnel ! J'ai commandé des produits de beauté et j'ai été livrée en moins d'1h. L'équipe COPIA est vraiment professionnelle et fiable.",
      avatar: "👩🏾‍💼"
    },
    {
      name: "Jean-Baptiste Ouattara",
      location: "Bouaké",
      rating: 5,
      comment: "Grâce à COPIA, je reçois mes commandes d'Abidjan rapidement à Bouaké. Fini les déplacements ! Service de qualité, je recommande vivement.",
      avatar: "👨🏾‍💻"
    },
    {
      name: "Marie-Claire Diallo",
      location: "Yamoussoukro",
      rating: 5,
      comment: "Service client au top ! Disponibles 24h/7j sur WhatsApp. Ils ont résolu mon problème de livraison très rapidement. Merci COPIA !",
      avatar: "👩🏾‍🎓"
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ce que disent nos clients
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits partout en Côte d'Ivoire
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative">
            <img 
              src={happyCustomers} 
              alt="Clients satisfaits COPIA" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">+ de 1000 clients satisfaits</h3>
              <p className="text-white/90">Partout en Côte d'Ivoire</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-copia">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent-gold rounded-full flex items-center justify-center text-white text-xl">
                    {testimonial.avatar}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-accent-gold" fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground italic pl-4">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-primary/5 to-accent-gold/5 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-muted-foreground">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-muted-foreground">Avis positifs</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24h/7j</div>
              <div className="text-muted-foreground">Support client</div>
            </div>
          </div>
        </div>

        {/* CTA to leave review */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Vous êtes client COPIA ?
          </h3>
          <p className="text-muted-foreground mb-6">
            Partagez votre expérience et aidez d'autres clients à nous découvrir
          </p>
          <button 
            className="btn-copia"
            onClick={() => window.open('https://wa.me/2250718973022?text=Bonjour, je souhaite laisser un témoignage', '_blank')}
          >
            Laisser un témoignage
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;