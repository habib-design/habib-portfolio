/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#0b0b0b",
        muted: "#9ca3af"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.12)"
      }
    },
  },
  plugins: [],
}
