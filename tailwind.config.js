/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "550px",
        lg: "750px",
        xl: "1000px",
      },
    },
  },
  plugins: [],
};
