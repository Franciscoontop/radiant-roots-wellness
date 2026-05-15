import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi, and welcome to Radiant Roots Wellness 🌿 I'm here to help you learn more about holistic health and working with Dr. Amara. Whether you're dealing with gut issues, hormone imbalances, fatigue, or just want to feel your best, you're in the right place. What brings you here today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('insurance')) {
      return "Dr. Amara doesn't directly accept insurance as she's a private pay practice. However, she provides superbills that you can submit to your insurance for possible reimbursement. Many clients have received partial reimbursement. Would you like to learn more about pricing and payment options?";
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return "Pricing varies based on what you need. An initial 90-minute consultation is $350. 3-month programs range from $2,400–$2,800 and include multiple sessions, lab testing, and personalized protocols. Dr. Amara also offers sliding scale spots and payment plans to make care accessible. Group programs and digital courses start at $47. What type of support are you looking for?";
    }
    if (lowerMessage.includes('virtual') || lowerMessage.includes('remote') || lowerMessage.includes('online')) {
      return "Yes! Dr. Amara offers both in-person appointments at her Bronx wellness center and virtual appointments for clients nationwide. Most services can be done virtually, including consultations, follow-ups, and even some lab testing (you can do labs locally). Would you like to book a free discovery call to learn more?";
    }
    if (lowerMessage.includes('gut') || lowerMessage.includes('ibs') || lowerMessage.includes('digestion')) {
      return "Gut health is one of Dr. Amara's specialties! She's helped hundreds of clients heal from IBS, SIBO, bloating, and other digestive issues. Her 3-Month Gut Healing Program ($2,400) includes comprehensive testing, personalized protocols, and ongoing support. Many clients see significant improvement within 3 months. Would you like to book a free discovery call to see if this program is right for you?";
    }
    if (lowerMessage.includes('hormone') || lowerMessage.includes('period') || lowerMessage.includes('pcos') || lowerMessage.includes('thyroid')) {
      return "Hormone balance is another area of expertise for Dr. Amara. She uses comprehensive hormone testing (like the DUTCH test) and creates personalized protocols addressing root causes. Her 3-Month Hormone Reset Program ($2,800) has helped countless women balance their hormones naturally. Want to learn more about how this could work for you?";
    }
    if (lowerMessage.includes('book') || lowerMessage.includes('appointment') || lowerMessage.includes('call')) {
      return "Wonderful! You can book a free 20-minute Discovery Call to see if you and Dr. Amara are a good fit. There's no pressure or sales pitch—just a chance to discuss what you're dealing with and get clarity on next steps. Click the 'Book Your Free Discovery Call' button on this site, or I can send you the direct link. What works best for you?";
    }
    if (lowerMessage.includes('result') || lowerMessage.includes('long') || lowerMessage.includes('time')) {
      return "Everyone's journey is different, but many clients start noticing changes within 4-6 weeks of implementing their protocol. Significant improvements often happen within 3 months. Dr. Amara focuses on sustainable, root-cause healing rather than quick fixes. During your discovery call, she can give you a better idea based on your specific situation.";
    }
    if (lowerMessage.includes('qualif') || lowerMessage.includes('credential') || lowerMessage.includes('degree') || lowerMessage.includes('training')) {
      return "Dr. Amara has a Doctorate in Functional Medicine and is certified in Integrative Nutrition, Herbalism, and Traditional Chinese Medicine. She worked at a Manhattan integrative clinic for 3 years before opening Radiant Roots in the Bronx. She combines the best of Western science with holistic traditions. You can read more about her story on the About page!";
    }
    if (lowerMessage.includes('sliding') || lowerMessage.includes('affordable') || lowerMessage.includes('payment') || lowerMessage.includes('plan')) {
      return "Dr. Amara is committed to making wellness accessible! She offers sliding scale spots based on income, payment plans (3-6 monthly installments for programs), and more affordable options like group programs ($397-$697) and digital courses ($47-$297). During your discovery call, you can discuss what option works best for your budget.";
    }
    
    return "Thank you for sharing that. Dr. Amara takes a whole-person, root-cause approach to healing, looking at everything from nutrition and gut health to stress, sleep, and lifestyle. I'd recommend booking a free 20-minute Discovery Call where Dr. Amara can learn more about your specific situation and see if she's the right fit to support you. Would you like me to send you the booking link?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-widget">
      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="bg-[#4A6741] text-white p-4 rounded-t-20 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#F7F3E9]/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-sm">Radiant Roots Assistant</h4>
              <p className="text-xs text-[#F7F3E9]/80">Online • Usually replies instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#F7F3E9]/80 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="p-4 h-80 overflow-y-auto space-y-4 bg-[#F7F3E9]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  message.isBot
                    ? 'bg-white text-[#2D3748] rounded-bl-none'
                    : 'bg-[#4A6741] text-white rounded-br-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#9CAF88] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-[#9CAF88] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-[#9CAF88] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-[#D4C5B9] rounded-b-20">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 input-field text-sm py-2"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#4A6741] text-white p-2 rounded-full hover:bg-[#C1876B] transition-colors"
              aria-label="Send message"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sticky-cta bg-[#4A6741] text-white p-4 rounded-full shadow-lg hover:bg-[#C1876B] transition-colors flex items-center justify-center"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
