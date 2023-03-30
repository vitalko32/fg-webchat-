import React from 'react';

const ChatArea = ({ messages }) => {
  return (
    <div className="overflow-y-auto p-4 h-96 mb-4 border border-gray-300 rounded">
      {messages.map((message, index) => (
        <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
          <span className={`p-2 rounded ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            {message.content}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChatArea;