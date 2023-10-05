export function Message({ msg }) {
  return (
    <>
      <div className="flex flex-row items-center justify-start w-full max-w-2xl p-4 m-auto text-gray-100 md:gap-6 md:py-8">
        <span className="self-start">{msg.role !== "user" ? "🤖" : "👩‍💻"}</span>
        <p>
          <span>{msg.content}</span>
        </p>
      </div>
    </>
  );
}
