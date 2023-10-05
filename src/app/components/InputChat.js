"use client";

export function InputChat({ input, handleInputChange }) {
  return (
    <div className="fixed flex flex-row w-full max-w-3xl px-2 py-2 text-sm border rounded-lg shadow-lg bottom-4 bg-secondary border-border-input text-text-input">
      <input
        placeholder="Send a message"
        className="flex flex-grow max-w-2xl col-span-5 mx-4 overflow-x-hidden bg-transparent line-clamp-4 focus:outline-none"
        type="text"
        name="content"
        value={input}
        onChange={handleInputChange}
      />
      <div className="flex justify-end col-span-1 mr-2">
        <button className="bg-[#19c37d] hover:bg-[#19c37d]/80 rounded-lg p-2" type="submit">
          <span className="w-fit">
            <svg
              className="icon icon-tabler icon-tabler-arrow-big-right-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
