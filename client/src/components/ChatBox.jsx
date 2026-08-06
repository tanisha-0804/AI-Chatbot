import React, { useEffect, useRef } from 'react';
import Message from './Message';

const ChatBox = ({ messages }) => {
  const chatEndRef = useRef(null);

  // Auto-scroll to the bottom when a new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-box">
      {messages && messages.map((msg) => (
        <Message key={msg.id || Math.random()} message={msg} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatBox;