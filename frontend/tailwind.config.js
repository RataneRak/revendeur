/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Inclut tous les fichiers nécessaires
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        light: "var(--light)",
        medium: "var(--medium)",
        dark: "var(--dark)",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cardHover: "0 10px 15px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
