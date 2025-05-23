/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  darkMode: 'class',
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui") ,
    nextui()
  ],
};
