"use client";

import React, { useState, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  animate: boolean;
}

const conversation: { text: string; sender: "user" | "bot" }[] = [
  { text: "Hi", sender: "user" },
  { text: "Welcome! How can I help you today?", sender: "bot" },
  { text: "I need to save some files", sender: "user" },
  {
    text: "I can help you save various file types. What kind of files do you want to save?",
    sender: "bot",
  },
  { text: "I have some PDFs and images", sender: "user" },
  {
    text: "Great! You can send me PDFs and images, and I'll safely store them for you. Is there anything else you'd like to know?",
    sender: "bot",
  },
  { text: "Can you convert files?", sender: "user" },
  {
    text: "Yes, I can convert files between different formats. For example, I can convert PDFs to text or images to different file types. What conversion do you need?",
    sender: "bot",
  },
];

export function WhatsAppChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < conversation.length) {
        const newMessage: Message = {
          id: Date.now(),
          text: conversation[index].text,
          sender: conversation[index].sender,
          animate: true,
        };
        setMessages((prev) => [...prev, newMessage]);
        index++;
      } else {
        // Reset the conversation after it completes
        setMessages([]);
        index = 0;
      }
    }, 2000); // Add a new message every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Remove animation class after it plays
    const timeoutId = setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.animate ? { ...msg, animate: false } : msg))
      );
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [messages]);

  useEffect(() => {
    // Scroll to bottom when messages change
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full max-w-xl  mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-green-500 text-white p-4 flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <Image src="/icon.svg" alt="Bot Avatar" width={40} height={40} />
        </Avatar>
        <div>
          <h2 className="font-semibold">Vault Bot</h2>
          <p className="text-xs">Always here to help</p>
        </div>
      </div>
      <div
        id="chat-container"
        className="h-96 overflow-y-auto p-4 bg-[url('/whatsapp-bg.png')] bg-repeat"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[80%] mb-4 ${
              message.sender === "user" ? "ml-auto" : "mr-auto"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-green-100 rounded-br-none"
                  : "bg-gray-100 rounded-bl-none"
              } ${message.animate ? "animate-fade-in-up" : ""}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
