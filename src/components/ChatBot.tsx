import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant COPIA. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Base de connaissances COPIA (RAG-inspired)
  const knowledgeBase = {
    // Informations générales sur COPIA
    entreprise: {
      nom: "COPIA",
      slogan: "On a tous confiance",
      activite: "Boutique en ligne spécialisée dans la vente et la livraison d'articles de qualité en Côte d'Ivoire",
      zones: ["Abidjan", "Bouaké", "Gagnoa", "Yamoussoukro"]
    },
    
    // Produits et services
    produits: {
      categories: [
        "Mode Homme (vêtements, chaussures, accessoires)",
        "Mode Dame (vêtements, chaussures, sacs, bijoux, accessoires)", 
        "Mode Jeune (streetwear, tendances, vêtements et accessoires pour jeunes)",
        "Gadgets & Accessoires (électroniques, high-tech, utilitaires du quotidien)"
      ],
      garantie: "Oui, COPIA propose uniquement des produits de qualité avec garantie"
    },

    // Livraison
    livraison: {
      processus: "Livraison en deux étapes : Transport Abidjan → Ville du client (via compagnies de transport avec gares), puis récupération et livraison à domicile par un coursier COPIA local",
      delais: {
        general: "Généralement entre 24h et 72h selon la ville",
        abidjan: "2-4h à Abidjan", 
        autres: "24-72h pour Bouaké, Gagnoa, Yamoussoukro"
      },
      frais: "Les frais sont inclus dans le prix final pour la plupart des articles, sauf pour certains articles où ils peuvent être facturés séparément"
    },

    // Services additionnels
    services: {
      coursier: "COPIA met à disposition des coursiers pour les livraisons COPIA et des courses rapides pour les clients (récupérer un colis, envoyer un pli en ville, etc.)"
    },

    // Paiement
    paiement: {
      mobile: ["Orange Money", "MTN Mobile Money", "Moov Money", "Wave"],
      especes: "Espèces à la livraison"
    },

    // Contacts
    contact: {
      telephone: "+225 07 18 97 30 22",
      email: "copiaonline02@gmail.com", 
      whatsapp_channel: "https://whatsapp.com/channel/0029VakWVrJ5vKAFNplzZF39"
    },

    // Équipe
    equipe: {
      "Brou Martial": "Directeur Général, comptabilité & gestion locale",
      "Kouadio Stéphane": "Responsable communication digitale & service client", 
      "Brou Albert": "Responsable logistique & superviseur des coursiers"
    }
  };

  // Fonction RAG pour analyser la question et récupérer les informations pertinentes
  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Salutations
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
      return `Bonjour ! Je suis l'assistant COPIA. ${knowledgeBase.entreprise.slogan} ! Comment puis-je vous aider aujourd'hui ?`;
    }

    // Questions sur l'entreprise
    if (lowerMessage.includes('qui êtes') || lowerMessage.includes('copia') || lowerMessage.includes('entreprise') || lowerMessage.includes('société')) {
      return `COPIA est une ${knowledgeBase.entreprise.activite}. Notre slogan : "${knowledgeBase.entreprise.slogan}". Nous desservons ${knowledgeBase.entreprise.zones.join(', ')}.`;
    }

    // Questions sur les produits
    if (lowerMessage.includes('produit') || lowerMessage.includes('article') || lowerMessage.includes('vente') || lowerMessage.includes('mode') || lowerMessage.includes('vêtement') || lowerMessage.includes('chaussure') || lowerMessage.includes('gadget')) {
      return `Nous proposons : ${knowledgeBase.produits.categories.join(' • ')}. ${knowledgeBase.produits.garantie}.`;
    }

    // Questions sur la livraison
    if (lowerMessage.includes('livraison') || lowerMessage.includes('délai') || lowerMessage.includes('transport') || lowerMessage.includes('recevoir')) {
      return `${knowledgeBase.livraison.processus}. Délais : ${knowledgeBase.livraison.delais.abidjan}, ${knowledgeBase.livraison.delais.autres}. ${knowledgeBase.livraison.frais}`;
    }

    // Questions sur les zones
    if (lowerMessage.includes('zone') || lowerMessage.includes('ville') || lowerMessage.includes('où') || lowerMessage.includes('abidjan') || lowerMessage.includes('bouaké') || lowerMessage.includes('yamoussoukro') || lowerMessage.includes('gagnoa')) {
      return `Nous livrons dans ${knowledgeBase.entreprise.zones.length} villes : ${knowledgeBase.entreprise.zones.join(', ')}. ${knowledgeBase.livraison.delais.general}`;
    }

    // Questions sur le paiement
    if (lowerMessage.includes('paiement') || lowerMessage.includes('payer') || lowerMessage.includes('mobile money') || lowerMessage.includes('orange') || lowerMessage.includes('mtn') || lowerMessage.includes('wave') || lowerMessage.includes('moov')) {
      return `Modes de paiement acceptés : ${knowledgeBase.paiement.mobile.join(', ')} et ${knowledgeBase.paiement.especes}.`;
    }

    // Questions sur les services de coursier
    if (lowerMessage.includes('coursier') || lowerMessage.includes('course') || lowerMessage.includes('rapide') || lowerMessage.includes('urgente')) {
      return knowledgeBase.services.coursier;
    }

    // Questions de contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('appeler') || lowerMessage.includes('whatsapp') || lowerMessage.includes('email')) {
      return `Contactez-nous : WhatsApp/Tél : ${knowledgeBase.contact.telephone} • Email : ${knowledgeBase.contact.email} • Notre chaîne WhatsApp : ${knowledgeBase.contact.whatsapp_channel}`;
    }

    // Questions sur les commandes
    if (lowerMessage.includes('commande') || lowerMessage.includes('commander') || lowerMessage.includes('acheter') || lowerMessage.includes('boutique')) {
      return `Pour passer commande, visitez notre boutique en ligne ou contactez-nous directement via WhatsApp au ${knowledgeBase.contact.telephone}. Nous vous accompagnons dans tout le processus !`;
    }

    // Questions sur le suivi
    if (lowerMessage.includes('suivi') || lowerMessage.includes('suivre') || lowerMessage.includes('track') || lowerMessage.includes('état') || lowerMessage.includes('statut')) {
      return `Une fois votre commande validée, nous vous fournirons un numéro de suivi pour suivre l'état de votre livraison en temps réel via WhatsApp.`;
    }

    // Questions sur l'équipe
    if (lowerMessage.includes('équipe') || lowerMessage.includes('responsable') || lowerMessage.includes('directeur') || lowerMessage.includes('martial') || lowerMessage.includes('stéphane') || lowerMessage.includes('albert')) {
      return `Notre équipe : Brou Martial (${knowledgeBase.equipe["Brou Martial"]}), Kouadio Stéphane (${knowledgeBase.equipe["Kouadio Stéphane"]}), Brou Albert (${knowledgeBase.equipe["Brou Albert"]}).`;
    }

    // Questions sur les prix/frais
    if (lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('frais') || lowerMessage.includes('tarif')) {
      return `${knowledgeBase.livraison.frais} Contactez-nous au ${knowledgeBase.contact.telephone} pour un devis personnalisé selon vos besoins.`;
    }

    // Réponse par défaut avec suggestions basées sur la base de connaissances
    return `Je ne suis pas sûr de comprendre votre question. Vous pouvez me demander des informations sur : nos produits (mode, gadgets), la livraison (zones, délais), le paiement (Mobile Money), nos services de coursier, ou comment passer commande. Pour une assistance personnalisée, contactez-nous au ${knowledgeBase.contact.telephone} !`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
    };

    const botResponse = {
      id: Date.now() + 1,
      text: getResponse(inputValue),
      isBot: true,
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-light shadow-lg flex items-center justify-center"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 w-80 h-96 bg-white border border-border rounded-2xl shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold">Assistant COPIA</h3>
            <p className="text-sm opacity-90">En ligne maintenant</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;