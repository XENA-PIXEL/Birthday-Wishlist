/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#fff7f0",
          100: "#ffe7d1",
          200: "#ffd1a3",
          300: "#ffb470",
          400: "#ff9a4a",
          500: "#ff7f24",
          600: "#e66712",
          700: "#b84f0b",
          800: "#7a3607",
          900: "#4b2305"
        },
        pop: {
          100: "#ffe9ff",
          300: "#ffb6ff",
          500: "#ff6bff",
          700: "#c42bdb"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        brutal: "10px 10px 0 #000",
        glow: "0 0 40px rgba(255, 107, 255, 0.35)",
        pop: "0 12px 35px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
