/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005153",
        secondary: "#FFE894",
        accent: "#fff",
      },
      fontFamily: {
        headings: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        buttons: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
