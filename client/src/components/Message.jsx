import React from 'react';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`message ${isUser ? 'user' : 'ai'}`}>
      <div className="message-header">
        {isUser ? 'You' : 'AI Chatbot'}
      </div>
      <div className="message-content">
        {message.text}
      </div>
    </div>
  );
};

export default Message;