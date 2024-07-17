/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#333333",
        },
        dark: {
          background: "#333333",
          text: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
