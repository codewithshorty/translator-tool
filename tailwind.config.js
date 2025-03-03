/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arab: ["IBM Plex Sans Arabic", "sans-serif"],
        eng: ["IM Fell English SC", "serif"],
        cir: ["Shafarik", "system-ui"],
        hin: ["Sriracha", "cursive"],
        jap: ["Noto Serif JP", "serif"],
      },
    },
  },
  plugins: [],
};
