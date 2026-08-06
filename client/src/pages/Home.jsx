import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import InputBox from '../components/InputBox';
// Import your API function from your services folder
import { sendMessageToAI } from '../services/api'; 

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "What can I ask you to do?",
    "What projects should I be concerned about right now?"
  ];

  const handleSendMessage = async (text) => {
    if (!text || !text.trim()) return;

    // 1. Instantly display user's message
    const userMsg = { id: Date.now(), sender: 'user', text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      // 2. Send prompt to backend / API service
      const response = await sendMessageToAI(text); 

      // 3. Display real AI response
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: response || "Sorry, I couldn't generate a response."
      };
      setMessages((prev) => [...prev, aiMsg]);

    } catch (error) {
      console.error("API Error:", error);
      // Display error message in chat if request fails
      const errorMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: "Oops! Something went wrong while connecting to the AI."
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="chat-container">
        
       {/* UNIQUE HERO GREETING */}
{messages.length === 0 ? (
  <div className="hero">
    {/* Modern Neural / AI Brain SVG Icon */}
    <div className="hero-icon">
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
        <path d="M12 12L2.5 7.5"></path>
        <path d="M12 12v10"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </div>
    
    {/* Custom Heading & Tagline */}
    <h1>What can we build today?</h1>
    <p>Welcome! I'm your intelligent assistant. How can I help you out?</p>
  </div>
) : (
  <ChatBox messages={messages} />
)}

        {messages.length === 0 && (
          <div className="suggestions-container">
            <div className="suggestions-title">Suggestions on what to ask:</div>
            <div className="suggestions-grid">
              {suggestions.map((suggestion, index) => (
                <button 
                  key={index} 
                  type="button"
                  className="suggestion-chip"
                  onClick={() => handleSendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        <InputBox onSend={handleSendMessage} disabled={loading} />

      </div>
    </div>
  );
};

export default Home;