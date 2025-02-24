/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.{js,jsx}", "./src/app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        coal: "#0B0E11",
        ash: "#0D1518",
        darkGrey: "#182226",
        lightGrey: "#808080",
        secondGrey: "#959595",
        matteGrey: "#4E4F51",
        white: "#f5f5f5",
        gold: "#A26100",
        lightGold: "#E3C08D",
      },
      screens: {
        mediumLarge: "1200px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};
