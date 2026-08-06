import React, { useState } from "react";
import Home from "./pages/Home";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hello! I'm AI Bot. How can I help you today?",
    },
  ]);

  return (
    <div className="app">
      <Home
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}

export default App;