/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#396C03",
        secondary: "#FF8B00",
        paragraph: "#676767",
        "heading-2": "#3F3F3F",
        footer: "#224300",
      },
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        Marienda: ["Merienda", "cursive"],
      },
      spacing: {
        "primary-btn-large-x": "3.75rem",
        "primary-btn-large-y": "0.9375rem",
      },
      borderRadius: {
        "parimary-lg-btn": "14.025rem",
      },
    },
  },
  plugins: [],
}

