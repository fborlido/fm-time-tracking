/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Rubik, sans-serif",
      },
      colors: {
        primary: "hsl(246, 80%, 60%)",
        orange: "hsl(15, 100%, 70%)",
        blue: "hsl(195, 74%, 62%)",
        pink: "hsl(348, 100%, 68%)",
        green: "hsl(145, 58%, 55%)",
        purple: "hsl(264, 64%, 52%)",
        yellow: "hsl(43, 84%, 65%)",
        bg: "hsl(226, 43%, 10%)",
        card: {
          400: "hsl(235, 46%, 30%)",
          500: "hsl(235, 46%, 20%)",
        },
        text: {
          200: "hsl(235, 45%, 61%)",
          100: "hsl(236, 100%, 87%)",
        },
      },
    },
  },
  plugins: [],
};
