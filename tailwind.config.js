/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DB4444"
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [daisyui],
}

