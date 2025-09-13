import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Quels types de produits puis-je commander sur COPIA ?",
      answer: "COPIA propose une large gamme de produits : alimentation, produits de beauté, électronique, vêtements, articles ménagers et bien plus encore. Visitez notre boutique en ligne pour découvrir tous nos produits disponibles."
    },
    {
      question: "Dans quelles villes livrez-vous ?",
      answer: "Nous livrons actuellement dans 4 villes principales : Abidjan (livraison express 30min-2h), Bouaké, Yamoussoukro et Gagnoa (livraison 24-72h). Contactez-nous si votre ville n'est pas encore couverte."
    },
    {
      question: "Combien de temps prend une livraison ?",
      answer: "Les délais varient selon votre localisation : Abidjan (30min-2h en express), Bouaké et Yamoussoukro (24-48h), Gagnoa (48-72h). Nous vous informons du délai précis lors de votre commande."
    },
    {
      question: "Comment suivre ma commande ?",
      answer: "Après validation de votre commande, vous recevez un numéro de suivi par SMS et WhatsApp. Vous pouvez également nous contacter directement au 07 18 97 30 22 pour connaître le statut de votre livraison en temps réel."
    },
    {
      question: "Puis-je utiliser un coursier COPIA pour mes courses personnelles ?",
      answer: "Oui ! Notre service de coursier à la demande vous permet d'effectuer vos courses personnelles, urgentes ou express. Contactez-nous via WhatsApp au 07 18 97 30 22 pour organiser une course sur mesure."
    },
    {
      question: "Quels sont vos moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements par mobile money (Orange Money, MTN Money, Moov Money), cartes bancaires, espèces à la livraison et virements bancaires. Tous nos paiements sont sécurisés."
    },
    {
      question: "Que faire si je ne suis pas satisfait de ma commande ?",
      answer: "Votre satisfaction est notre priorité. En cas de problème, contactez-nous dans les 24h. Nous proposons un remboursement ou un remplacement selon la situation. Notre service client est disponible 24h/7j."
    },
    {
      question: "Comment puis-je devenir partenaire ou revendeur COPIA ?",
      answer: "Nous accueillons les partenaires motivés ! Envoyez-nous un message via WhatsApp ou email avec vos informations et motivations. Notre équipe vous contactera pour discuter des opportunités de collaboration."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        <div className="card-copia">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              Aide et Support
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 text-left [&[data-state=open]>svg]:rotate-180">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pt-2 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-accent-gold rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-white/90 mb-6">
              Notre équipe est disponible 24h/7j pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors duration-300"
                onClick={() => window.open('https://wa.me/2250718973022?text=Bonjour, j\'ai une question', '_blank')}
              >
                💬 WhatsApp Support
              </button>
              <button 
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-primary transition-colors duration-300"
                onClick={() => window.open('tel:+2250718973022', '_blank')}
              >
                📞 Appeler maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;