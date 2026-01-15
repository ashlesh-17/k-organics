/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#800020",
        accent: "#E65A3A",
        secondary: "#2F6FA3",
        green: "#6FAF8C",
        cream: "#FFFCEF",
        sand: "#F6E9D9",
      },
    },
  },
  plugins: [],
};
