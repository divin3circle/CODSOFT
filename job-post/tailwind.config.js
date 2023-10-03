/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#040D12",
        card: "#183D3D",
        hover: "#5C8374",
        text: "#FFFFFF",
        secondaryText: "#93B1A6",
        accent: "#2a68ff",
      },
    },
  },
  plugins: [],
};
