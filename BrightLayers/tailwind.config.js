/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Lato"],
        pSans: ["Public Sans"],
        inter: ["Inter"],
        archivo: ["Archivo"],
        lexend: ["Lexend"]
      }
    },
  },
  plugins: [],
}

