/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 9px 26px 0px rgba(115, 115, 115, 0.1)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Default to Poppins
      },
    },
  },
  plugins: [],
};
