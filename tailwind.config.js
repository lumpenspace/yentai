// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: { // Define your color palette here
          primary: '#FFC0CB', // A standard pastel pink
          primaryLight: '#FFD6DA', // Lighter pastel pink
          primaryLightHover: '#FFE4E6', // Even lighter for hover state
          primaryLightActive: '#FFB6C1', // A bit more saturated for active state
          // You can define other colors as needed
          // ...
        },
        space: {}, // Define spacing if needed
        fonts: {
          sans: inter.style, // Use the Inter font for sans-serif
          // Define other font families as needed
        }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};