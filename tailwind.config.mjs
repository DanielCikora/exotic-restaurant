/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        coal: "#0B0E11",
        darkGrey: "#182226",
        lightGrey: "#808080",
        white: "#ffffff",
        gold: "#A26100",
        lightGold: "#E3C08D",
      },
      fontFamily: {
        outfit: "Outfit",
      },
    },
  },
  plugins: [],
};
