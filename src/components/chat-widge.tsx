import React, { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";

type Props = {
  onClose: () => void;
};

type Message = {
  from: "user" | "bot";
  text: string;
};

export default function ChatWidget({ onClose }: Props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text:
        "Hi! I'm here to help you learn more about me and my background. Feel free to ask about my projects, skills, education, or anything else you'd like to know!",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      {
        from: "bot",
        text:
          "Thanks for your message! I'll get back to you soon. (This is a demo auto-reply.)",
      },
    ]);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-full bg-slate-800 rounded-xl shadow-lg z-50 p-4 border border-slate-700 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-white">Ask me anything!</span>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-cyan-400 text-2xl leading-none"
        >
          &times;
        </button>
      </div>
      <div className="flex-1 overflow-y-auto mb-2 space-y-2 pr-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.from === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <span
              className={
                msg.from === "user"
                  ? "inline-block bg-cyan-600 text-white px-3 py-1 rounded-lg mb-1"
                  : "inline-block bg-slate-700 text-slate-200 px-3 py-1 rounded-lg mb-1"
              }
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 rounded px-2 py-1 bg-slate-900 text-slate-100 border border-slate-600"
          placeholder="Ask me about my projects, skills..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-cyan-500 hover:bg-cyan-600 rounded px-3 py-1 text-white"
          onClick={handleSend}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline">
            <path d="M2 21L23 12 2 3v7l15 2-15 2v7z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}
