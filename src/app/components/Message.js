"use client";
export function Messages({ messages }) {
  return (
    <>
      {messages.map((msg) => {
        return (
          <div key={msg.id} className="w-full py-4 text-center h-fit">
            <p>
              {msg.role !== "user" ? "🤖" : "👩‍💻"}
              <span className={`pl-4 ${msg.role !== "user" ? "text-yellow-200" : "text-blue-300"}`}>{msg.content}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}
