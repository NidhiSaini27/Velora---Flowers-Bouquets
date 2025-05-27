 import React, { useState } from "react";

const bouquets = [
  { name: "Red Roses", tags: ["rose", "red", "love"] },
  { name: "Sunshine Bliss", tags: ["sunflower", "yellow", "bright"] },
  { name: "Lily Luxe", tags: ["lily", "white", "elegant"] },
  { name: "Pink Passion", tags: ["pink", "rose", "romantic"] },
  { name: "Orchid Charm", tags: ["orchid", "purple", "fancy"] },
  { name: "Mixed Emotions", tags: ["mix", "colorful", "variety"] }
];

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! What kind of flowers are you looking for?" }
  ]);
  const [input, setInput] = useState("");

  const handleUserInput = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const reply = getBotReply(input.toLowerCase());
    setMessages((prev) => [...prev, userMessage, { from: "bot", text: reply }]);
    setInput("");
  };

  const getBotReply = (text) => {
    if (text.includes("hi") || text.includes("hello")) {
      return "Hey there! Tell me your favorite color or flower.";
    }
{
    if (text.includes("suggest me any flower") || text.includes("sure")) {
      return "Hey there! Tell color your favourite color or flower.";
    }
    const matched = bouquets.filter((bq) =>
      bq.tags.some((tag) => text.includes(tag))
    );

    if (matched.length > 0) {
      return `You might like: ${matched.map((bq) => bq.name).join(", ")}`;
    }

    return "Sorry, I couldn't find a match. Try saying a flower type or color.";
  };

  return (
    <div className="fixed bottom-4 right-4 w-72 bg-white border rounded-xl shadow-xl">
      <div className="p-3 font-semibold bg-pink-100 rounded-t-xl">💬 FlowerBot</div>
      <div className="h-64 p-2 overflow-y-auto space-y-1 text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded ${msg.from === "bot" ? "bg-gray-100" : "bg-blue-100 text-right"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserInput} className="flex border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 text-sm"
          placeholder="Type here..."
        />
        <button type="submit" className="px-3 text-blue-600 font-bold">⏎</button>
      </form>
    </div>
  );
};

export default ChatBot;
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      {/* Other components */}
      <ChatBot />
    </>
  );
}

