/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cetys-yellow": "#fedc00",
        "anemia-yellow": "#fff49c",
      },
    },
  },
  plugins: [],
};
