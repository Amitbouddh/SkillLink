/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4657d9",
        border: "#e2e8f0",
        background: "#f8fafc",
      },
    },
  },
  plugins: [],
}