import { useState, useRef, useEffect } from 'react';
import { X, Send, Leaf, ChevronDown } from 'lucide-react';

interface Message {
  id: number;
  role: 'assistant' | 'user';
  text: string;
}

const initialMessage: Message = {
  id: 0,
  role: 'assistant',
  text: "Hi, and welcome to Radiant Roots Wellness 🌿 I'm here to help you learn more about holistic health and working with Dr. Amara. Whether you're dealing with gut issues, hormone imbalances, fatigue, or just want to feel your best, you're in the right place. What brings you here today?",
};

const quickReplies = [
  "What conditions do you treat?",
  "How much does it cost?",
  "Do you take insurance?",
  "Can I do virtual sessions?",
  "Book a discovery call",
];

interface BotResponse {
  pattern: RegExp;
  response: string;
}

const botResponses: BotResponse[] = [
  {
    pattern: /insurance/i,
    response: "Dr. Amara is a private-pay practice and doesn't accept insurance directly. However, she provides superbills that many clients submit for possible reimbursement. She also offers sliding scale pricing and payment plans to make care accessible. Would you like to know about current payment options?",
  },
  {
    pattern: /cost|price|how much/i,
    response: "Pricing varies based on what you need. An initial 90-minute consultation is $350–$450. Dr. Amara's 3-month programs range from $2,400–$2,800 and include multiple sessions, lab testing, and personalized protocols. Group programs start at $397, and digital courses start at just $47. She also offers sliding scale spots and payment plans. What type of support are you looking for?",
  },
  {
    pattern: /virtual|online|remote|video/i,
    response: "Yes! Dr. Amara sees clients both in-person at her Bronx wellness center AND virtually via secure video — nationwide. Almost all services, including lab review and ongoing sessions, are available virtually. Many clients outside NYC work with her entirely online. Would you like to book a free virtual discovery call?",
  },
  {
    pattern: /gut|ibs|digestion|bloat|stomach/i,
    response: "Gut health is one of Dr. Amara's specialties! She works with clients dealing with IBS, SIBO, bloating, leaky gut, constipation, diarrhea, and more. Her approach combines functional lab testing (like the GI-MAP stool analysis) with personalized nutrition and protocols to get to the ROOT cause — not just manage symptoms. Her 3-Month Gut Healing Program has helped hundreds of clients. Shall I tell you more, or would you like to book a free discovery call?",
  },
  {
    pattern: /hormone|pcos|period|cycle|menopause|thyroid/i,
    response: "Hormonal health is another of Dr. Amara's core specialties. She uses comprehensive testing (including the DUTCH hormone panel — far more complete than standard bloodwork) to understand your full hormonal picture, then creates a personalized protocol combining nutrition, herbs, and lifestyle changes. Many clients see significant improvements within 3 months. Would you like to book a free discovery call to see if the Hormone Reset Program is right for you?",
  },
  {
    pattern: /fatigue|tired|energy|burnout|exhausted/i,
    response: "Chronic fatigue and burnout are SO common, and so often dismissed by conventional medicine. Dr. Amara investigates the root causes — adrenal dysfunction, hormonal imbalances, gut health, nutrient deficiencies, thyroid issues — and creates a comprehensive restoration plan. You mentioned fatigue — that's often connected to gut health and hormones. Many clients with fatigue also benefit from hormone testing. Want to book a free discovery call to discuss what's going on for you?",
  },
  {
    pattern: /autoimmune/i,
    response: "Dr. Amara works with clients with various autoimmune conditions including Hashimoto's, lupus, rheumatoid arthritis, and more. Her approach focuses on identifying triggers (gut permeability, food sensitivities, stress), reducing inflammation through targeted nutrition and protocols, and supporting immune regulation. Would you like to discuss your specific situation on a free discovery call?",
  },
  {
    pattern: /book|appointment|schedule|call|discovery/i,
    response: "Dr. Amara offers a FREE 20-minute discovery call for new clients — no pressure, no sales pitch. You'll share what you're experiencing, and she'll tell you honestly if she can help. To book, just fill out the contact form on this website, or call (646) 555-9047. Current spring special: $50 off any 3-month program! Ready to take that first step? 🌿",
  },
  {
    pattern: /anxiety|depression|mental health|stress/i,
    response: "The connection between mental health and gut/hormonal health is profound — and often overlooked. Dr. Amara uses functional testing to investigate whether gut dysbiosis, nutrient deficiencies, hormonal imbalances, or blood sugar instability are contributing to anxiety and depression. She works alongside therapists and doesn't replace mental health care — she complements it. Want to explore whether a root-cause approach could help?",
  },
  {
    pattern: /what do you treat|conditions|help with/i,
    response: "Dr. Amara specializes in: 🌿 Gut health (IBS, SIBO, bloating, leaky gut), ⚡ Hormonal imbalances (PCOS, irregular cycles, perimenopause), 😴 Chronic fatigue & burnout, 🛡️ Autoimmune conditions, 🧠 Anxiety & depression (through the gut-brain connection), 📊 Metabolic health & pre-diabetes, 🦋 Thyroid dysfunction, and more. What are you dealing with?",
  },
  {
    pattern: /how long|results|when/i,
    response: "Every person is different — healing timelines depend on how long you've had symptoms, the root cause, and your commitment to the protocol. Many clients feel meaningful improvements within 4–8 weeks. More complex chronic conditions typically improve significantly within 3–6 months. Dr. Amara won't make guarantees, but she'll give you her honest assessment based on your specific situation on a discovery call.",
  },
  {
    pattern: /sliding scale|afford|payment plan|payment/i,
    response: "Accessibility is core to Dr. Amara's mission. She offers: 💙 Sliding scale pricing for select clients based on income, 💳 Payment plans (3–6 monthly installments for programs), 👥 Group programs starting at $397 (much more affordable than 1-on-1), 📱 Digital courses starting at $47. Please mention your situation on your discovery call — she genuinely wants healing to be accessible. 🌿",
  },
];

function getBotResponse(userMessage: string): string {
  const match = botResponses.find(r => r.pattern.test(userMessage));
  if (match) return match.response;
  return "That's a great question! For the most accurate answer, I'd recommend booking a free 20-minute discovery call with Dr. Amara. She can give you personalized guidance based on your specific situation. In the meantime, feel free to ask me anything else about how Radiant Roots Wellness can help you heal. 🌿";
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        text: getBotResponse(text),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 800);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="chat-widget"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4A6741, #9CAF88)',
          border: 'none',
          boxShadow: '0 8px 32px rgba(74,103,65,0.35)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
        aria-label="Open AI chat assistant"
      >
        {open ? <ChevronDown size={24} color="white" /> : <Leaf size={24} color="white" />}
      </button>

      {/* Chat window */}
      <div
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '28px',
          width: 'min(360px, calc(100vw - 56px))',
          zIndex: 998,
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          transition: 'all 0.4s ease',
          pointerEvents: open ? 'all' : 'none',
        }}
      >
        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(58,46,40,0.2)', background: '#F7F3E9' }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg, #4A6741, #9CAF88)', padding: '16px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Leaf size={18} color="white" />
                </div>
                <div>
                  <p style={{ color: 'white', fontWeight: 700, fontSize: '14px', fontFamily: 'Nunito Sans, sans-serif' }}>Radiant Roots AI</p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontFamily: 'Nunito Sans, sans-serif' }}>Wellness guide · Usually responds instantly</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <X size={14} color="white" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={{ height: '320px', overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.role === 'assistant' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #4A6741, #9CAF88)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '8px', marginTop: '2px' }}>
                    <Leaf size={14} color="white" />
                  </div>
                )}
                <div
                  className={msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble'}
                  style={{ fontFamily: 'Nunito Sans, sans-serif', color: msg.role === 'user' ? 'white' : '#3A2E28' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #4A6741, #9CAF88)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Leaf size={14} color="white" />
                </div>
                <div className="chat-bubble" style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9CAF88', animation: `float ${0.6 + i * 0.2}s ease-in-out infinite` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div style={{ padding: '0 16px 12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  style={{
                    background: 'white',
                    border: '1px solid rgba(193,135,107,0.3)',
                    borderRadius: '50px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontFamily: 'Nunito Sans, sans-serif',
                    color: '#C1876B',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: '12px 16px 16px', borderTop: '1px solid rgba(212,197,185,0.3)', display: 'flex', gap: '8px' }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                border: '2px solid rgba(212,197,185,0.5)',
                borderRadius: '50px',
                padding: '10px 16px',
                fontSize: '13px',
                fontFamily: 'Nunito Sans, sans-serif',
                background: 'white',
                outline: 'none',
                color: '#3A2E28',
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: input.trim() ? 'linear-gradient(135deg, #C1876B, #9CAF88)' : 'rgba(212,197,185,0.3)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: input.trim() ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
                flexShrink: 0,
              }}
            >
              <Send size={16} color="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
