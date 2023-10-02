"use client";

import { useChat } from "ai/react";
import { Messages } from "@/app/components/Message";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="">
      {/* Array of messages */}
      <div className="">
        <Messages messages={messages} />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type something..."
          className="fixed w-full max-w-xl px-4 py-2 m-auto mb-8 text-sm border border-gray-400 rounded-full shadow-2xl bottom-4"
          type="text"
          name="content"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
