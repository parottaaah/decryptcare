/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbfa",
          100: "#d4f3f0",
          200: "#a9e7e1",
          300: "#75d4cc",
          400: "#3fb8b0",
          500: "#1f9d95",
          600: "#0f8079",
          700: "#0c6863",
          800: "#0a5551",
          900: "#083f3c",
        },
        ink: {
          50: "#f7f8f9",
          100: "#eef0f2",
          200: "#dde1e6",
          300: "#c3c9d1",
          400: "#98a1ad",
          500: "#707b89",
          600: "#535e6d",
          700: "#404955",
          800: "#2a323c",
          900: "#171c22",
        },
        alert: {
          DEFAULT: "#c23b3b",
          light: "#fbeaea",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(23,28,34,0.04), 0 1px 8px 0 rgba(23,28,34,0.04)",
        panel: "0 4px 24px -4px rgba(23,28,34,0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
}


