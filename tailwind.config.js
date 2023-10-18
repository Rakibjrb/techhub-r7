/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-kanit": ["Kanit", "sans-serif"],
        "font-lato": ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
