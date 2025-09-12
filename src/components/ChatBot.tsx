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

  const faqResponses = {
    'livraison': 'Nous livrons dans 4 villes principales : Abidjan, Bouaké, Yamoussoukro et Gagnoa. Les délais de livraison sont généralement de 2-4h à Abidjan et 24-48h pour les autres villes.',
    'produits': 'COPIA propose une large gamme de produits via notre boutique en ligne. Vous pouvez commander des articles divers selon vos besoins quotidiens.',
    'prix': 'Les frais de livraison varient selon la destination et le type de service. Contactez-nous au 07 18 97 30 22 pour un devis personnalisé.',
    'contact': 'Vous pouvez nous contacter par WhatsApp au 07 18 97 30 22 ou par email à copiaonline02@gmail.com. Notre service client est disponible 24h/7j.',
    'coursier': 'Oui ! Nous proposons un service de coursier à la demande pour vos courses urgentes et personnelles. Contactez-nous pour plus d\'informations.',
    'commande': 'Pour passer commande, visitez notre boutique en ligne ou contactez-nous directement via WhatsApp. Nous vous accompagnons dans tout le processus.',
    'suivi': 'Une fois votre commande passée, nous vous fournirons un numéro de suivi pour suivre l\'état de votre livraison en temps réel.'
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(faqResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
      return 'Bonjour ! Je suis là pour vous aider avec vos questions sur nos services COPIA. Que souhaitez-vous savoir ?';
    }
    
    return 'Je ne suis pas sûr de comprendre votre question. Vous pouvez me demander des informations sur : livraison, produits, prix, contact, coursier, commande ou suivi. Pour une assistance personnalisée, contactez-nous au 07 18 97 30 22.';
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