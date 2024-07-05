import React, { useState } from 'react';
import './chatbot.css';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    try {
      // Send message to server or API
      const response = await fetch('http://localhost:5000/api/13', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botResponse = data.response;

      // Update messages state with user input and bot response
      setMessages([...messages, `You: ${inputMessage}`, `Bot: ${botResponse}`]);
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error (e.g., show error message to user)
    }
  };
    const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
        sendMessage();
        }
    };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onKeyDown={handleKeyDown} 
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button  onKeyDown={handleKeyDown}  onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
