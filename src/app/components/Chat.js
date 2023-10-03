"use client";

import { useChat } from "ai/react";
import { Conversation } from "@/app/components/Conversation";
import { InputChat } from "@/app/components/InputChat";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="grid h-full grid-flow-row grid-rows-6 gap-y-4">
      {/* Array of messages */}
      <div className="row-span-6">
        <Conversation messages={messages} />
      </div>

      <form onSubmit={handleSubmit} className="flex justify-center row-span-1 mb-4 ">
        <InputChat input={input} handleInputChange={handleInputChange} />
      </form>
    </div>
  );
}
