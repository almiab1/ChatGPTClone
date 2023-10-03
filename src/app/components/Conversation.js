"use client";
import { Message } from "@/app/components/Message";

import { useRef, useEffect } from "react";

export function Conversation({ messages }) {
  const contenedorRef = useRef(null);

  useEffect(() => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={contenedorRef} className="w-full max-h-[90vh] overflow-y-auto">
      {messages.map((msg) => {
        return (
          <div key={msg.key} className={`${msg.role !== "user" ? "bg-background-ai" : ""} w-full flex flex-auto justify-center`}>
            <Message msg={msg} />
          </div>
        );
      })}
    </div>
  );
}
