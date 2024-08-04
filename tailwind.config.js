/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  "theme": {
    "colors": {
      "primary": "#F19A1A",
      "secondary": "#FCD34D",
      "background": "#161719",
      "success": "#00FF00",
      "error": "#FF0000",
      "linear-button": "linear-gradient(90deg, #FFC73C 0%, #F19A1A 100%)",
      "linear-secondary-button": "linear-gradient(90deg, #21C8F6 0%, #637BFF 100%)",
      "linear-heading": "linear-gradient(90deg, #FFC73C 0%, #ECA800 100%)"
    },
    extend: {},
  },
  plugins: [],
};
