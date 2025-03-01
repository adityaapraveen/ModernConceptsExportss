import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import './ChatBot.css';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your Modern Concepts Exports assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const fetchDeepseekResponse = async (userMessage: string) => {
    try {
      const API_KEY = process.env.REACT_APP_DEEPSEEK_API_KEY || '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';
      
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek-r1', // Updated to use deepseek-r1 model
          messages: [
            {
              role: 'system',
              content: `You are a chatbot assistant for Modern Concepts Exports, a company that sells Indian products including spices, coffee, makhana, and moringa powder.

IMPORTANT: Only respond to questions related to Modern Concepts Exports products, services, shipping, pricing, or company information. If a user asks about anything unrelated to our business or products, respond with: "I can only assist with information about Modern Concepts Exports products and services. How can I help you with our spices, coffee, makhana, or other products?"

Keep your responses concise, friendly, and focused on:
- Product information (spices, coffee, makhana, moringa powder)
- Product quality and sourcing
- Pricing (direct customers to contact form for specific quotes)
- Shipping and delivery options
- Contact details: info@modernconcepts.com
- Organic/natural product certifications and information

Do not provide any information outside of these topics.`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 150
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      // Check if the response has the expected structure
      if (data && data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content;
      } else {
        console.error('Unexpected API response structure:', data);
        return "I'm having trouble processing your request. Please try again later.";
      }
    } catch (error) {
      console.error('Error fetching from Deepseek API:', error);
      
      // Fall back to simple hardcoded responses if API fails
      return getOfflineResponse(userMessage);
    }
  };

  // Fallback function to use when API is unavailable
  const getOfflineResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello there! How can I help you with our products today?";
    } else if (lowerCaseMessage.includes('product') || lowerCaseMessage.includes('spice')) {
      return "We offer a variety of high-quality Indian products including spices, coffee, makhana, and moringa powder. Would you like to know more about any specific product?";
    } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
      return "Our product prices vary based on quantity and packaging. Please visit our contact page to request a detailed price list or quotation.";
    } else if (lowerCaseMessage.includes('shipping') || lowerCaseMessage.includes('delivery')) {
      return "We ship our products worldwide. Shipping times and costs depend on your location. Please provide your country details for more specific information.";
    } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('email')) {
      return "You can contact us through our contact form on the website, or email us directly at info@modernconcepts.com";
    } else if (lowerCaseMessage.includes('quality')) {
      return "All our products undergo rigorous quality checks to ensure they meet international standards. We source directly from farmers to maintain the highest quality.";
    } else if (lowerCaseMessage.includes('organic') || lowerCaseMessage.includes('natural')) {
      return "Many of our products are organic and naturally grown without harmful chemicals. Each product page specifies if it's certified organic.";
    } else {
      return "I can only assist with information about Modern Concepts Exports products and services. How can I help you with our spices, coffee, makhana, or other products?";
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);

    try {
      // Get response from Deepseek API
      const botResponseText = await fetchDeepseekResponse(userMessage.text);
      
      setIsTyping(false);
      
      const botResponse: Message = {
        text: botResponseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        text: "I'm having trouble connecting. Please try again later.",
        isUser: false,
        timestamp: new Date()
      }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-spice-saffron hover:bg-spice-saffron/90'
        } rounded-full p-3 text-white shadow-lg transition-all duration-300`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200 chat-slide-in">
          {/* Chat header */}
          <div className="bg-spice-saffron text-white p-3 flex items-center justify-between">
            <h3 className="font-medium">Modern Concepts Chat</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 max-w-[80%] ${
                  message.isUser ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-spice-saffron text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs text-gray-500 mt-1 ${
                    message.isUser ? 'text-right' : 'text-left'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="mb-3 max-w-[80%] mr-auto">
                <div className="p-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="p-3 border-t border-gray-200 flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button 
              onClick={handleSendMessage} 
              size="icon" 
              className="bg-spice-saffron hover:bg-spice-saffron/90"
              disabled={isTyping || inputValue.trim() === ''}
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;