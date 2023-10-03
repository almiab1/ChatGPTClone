/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#343541",
        secondary: "#40414f",
        background: { ai: "#444654" },
        border: { input: "#31323b" },
        text: { input: "#ffffff", promts: "#d1d5db" },
      },
    },
  },
  plugins: [],
};
