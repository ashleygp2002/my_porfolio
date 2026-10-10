import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import "./ChatWidget.css";

const NAME = "Ashley";
const HEADLINE = "Software Engineer · Project Coordinator @ Lyft · Python instructor · UC Merced CS '24";
const MAX_QUESTIONS = 25; // per-session cap so no single visitor can run up the bill

const GREETING = {
  role: "assistant",
  content: "Hi there! 👋 I'm an AI version of Ashley. Feel free to ask about my experience, projects, skills, or how to get in touch.",
};

const SUGGESTIONS = [
  "What do you do at Lyft?",
  "What technical skills do you have?",
  "Tell me about your teaching experience",
];

const initials = (name) =>
  name.trim().split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (text) => {
    const content = text.trim();
    if (!content || isLoading) return;

    if (messages.filter((m) => m.role === "user").length >= MAX_QUESTIONS) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "That's the question limit for this session. Refresh the page to start a new chat, or reach out through the Contact page!" },
      ]);
      setInput("");
      return;
    }

    const nextMessages = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || data.error || "Sorry, something went wrong. Please try again.", isError: !data.reply },
      ]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I couldn't connect just now. Please try again in a moment.", isError: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chat-header">
              <div className="chat-avatar">{initials(NAME)}</div>
              <div className="chat-header-text">
                <div className="chat-title">
                  <h3>{NAME}</h3>
                  <span className="chat-online">
                    <span className="chat-online-dot" /> online
                  </span>
                </div>
                <span className="chat-headline">{HEADLINE}</span>
              </div>
              <button className="chat-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
                <X size={20} />
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-bubble ${msg.role}${msg.isError ? " error" : ""}`}>
                  {msg.content}
                </div>
              ))}
              {messages.length === 1 && (
                <div className="chat-suggestions">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => sendMessage(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {isLoading && (
                <div className="chat-bubble assistant typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <form className="chat-input" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`message ${NAME}…`}
                maxLength={2000}
              />
              <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className={`chat-launcher${isOpen ? " open" : ""}`}
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        {!isOpen && <span>Let's Chat</span>}
      </button>
    </div>
  );
};

export default ChatWidget;
